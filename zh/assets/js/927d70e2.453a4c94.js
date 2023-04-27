"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[81045],{12190:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"compatibility-of-apache-devLake-with-postgreSQL","metadata":{"permalink":"/zh/blog/compatibility-of-apache-devLake-with-postgreSQL","editUrl":"https://github.com/apache/incubator-devlake-website/edit/main/blog/2022-06-23-compatibility-of-apache-devLake-with-postgreSQL/index.md","source":"@site/blog/2022-06-23-compatibility-of-apache-devLake-with-postgreSQL/index.md","title":"Compatibility of Apache DevLake with PostgreSQL","description":"Apache DevLake is a dev data platform that can collect and integrate data from different dev tools including Jira, Github, Gitlab and Jenkins.","date":"2022-06-23T00:00:00.000Z","formattedDate":"2022\u5e746\u670823\u65e5","tags":[{"label":"devlake","permalink":"/zh/blog/tags/devlake"},{"label":"database","permalink":"/zh/blog/tags/database"},{"label":"postgresql","permalink":"/zh/blog/tags/postgresql"}],"readingTime":2.5833333333333335,"hasTruncateMarker":false,"authors":[{"name":"ZhangLiang","title":"Apache DevLake PPMC","url":"https://github.com/mindlesscloud","imageURL":"https://avatars.githubusercontent.com/u/8455907?s=400&v=4","key":"ZhangLiang"}],"frontMatter":{"slug":"compatibility-of-apache-devLake-with-postgreSQL","title":"Compatibility of Apache DevLake with PostgreSQL","authors":"ZhangLiang","tags":["devlake","database","postgresql"]},"nextItem":{"title":"How DevLake is Up and Running","permalink":"/zh/blog/how-DevLake-is-up-and-running"}},"content":"Apache DevLake is a dev data platform that can collect and integrate data from different dev tools including Jira, Github, Gitlab and Jenkins.\\n\\nThis blog will not aim at a comprehensive summary of the compatibility of database but a record of issues for future reference.\\n\\n## 1.Different  Data Types\\n### PostgreSQL does not have a uint type\\n```sql=\\ntype JenkinsBuild struct {\\n common.NoPKModel\\n JobName           string  `gorm:\\"primaryKey;type:varchar(255)\\"`\\n Duration          float64 // build time\\n DisplayName       string  // \\"#7\\"\\n EstimatedDuration float64\\n Number            int64 `gorm:\\"primaryKey;type:INT(10) UNSIGNED NOT NULL\\"`\\n Result            string\\n Timestamp         int64     // start time\\n StartTime         time.Time // convered by timestamp\\n CommitSha         string\\n}\\n```\\n\\nIn `JenkinsBuild.Number`, the`gorm`struct tag used `UNSIGNED`, which will lead to the failure to create table and should be removed.\\n\\n![](https://i.imgur.com/N7E9Vwd.png)\\n\\n\\n### MySQL does not have a bool data type\\n\\nFor a field defined as bool type in model, gorm will map it to MySQL\'s TINYINT data type, which can be queried directly with 0 or 1 in SQL, but PostgreSQL has a bool type, so gorm will map it to the BOOL type. If 0 or 1 is still used in SQL to query, there will be a report of error.\\n\\nHere is an example(only relevant fields are shown in the example). The lookup statement works in MySQL, but will lead to an error in PostgreSQL.\\n\\n```sql=\\ntype GitlabMergeRequestNote struct {\\n MergeRequestId  int    `gorm:\\"index\\"`\\n System          bool \\n}\\n \\ndb.Where(\\"merge_request_id = ? AND `system` = 0\\", gitlabMr.GitlabId).\\n```\\n\\nAfter changing the sentence as it follows, an error will still be reported. The reason will be shown in the part about backticks.\\n\\n```sql=\\ndb.Where(\\"merge_request_id = ? AND `system` = ?\\", gitlabMr.GitlabId, false)\\n```\\n\\n## 2.Different Behaviors\\n\\n### Bulk insertion\\nWhen `ON CONFLIT UPDATE ALL` was used to achieve bulk insertion, and if there are multiple records with the same primary key, it will report errors in PostgreSQL but not in MySQL.\\n![](https://i.imgur.com/zaExAUG.png)\\n\\n![](https://i.imgur.com/BpZY8dN.png)\\n\\n### Inconsistent definition of model with schema\\nFor example, in the model definition, `GithubPullRequest.AuthorId` is of the int type, but this field in the database is of VARCHAR type. When inserting data, MySQL will accept it, but ProstgresSQL will report an error.\\n```sql=\\ntype GithubPullRequest struct {\\n GithubId        int    `gorm:\\"primaryKey\\"`\\n RepoId          int    `gorm:\\"index\\"`\\n Number          int    `gorm:\\"index\\"` \\n State           string `gorm:\\"type:varchar(255)\\"`\\n Title           string `gorm:\\"type:varchar(255)\\"`\\n GithubCreatedAt time.Time\\n GithubUpdatedAt time.Time `gorm:\\"index\\"`\\n ClosedAt        *time.Time\\n // In order to get the following fields, we need to collect PRs individually from GitHub\\n Additions      int\\n Deletions      int\\n Comments       int\\n Commits        int\\n ReviewComments int\\n Merged         bool\\n MergedAt       *time.Time\\n Body           string\\n Type           string `gorm:\\"type:varchar(255)\\"`\\n Component      string `gorm:\\"type:varchar(255)\\"`\\n MergeCommitSha string `gorm:\\"type:varchar(40)\\"`\\n HeadRef        string `gorm:\\"type:varchar(255)\\"`\\n BaseRef        string `gorm:\\"type:varchar(255)\\"`\\n BaseCommitSha  string `gorm:\\"type:varchar(255)\\"`\\n HeadCommitSha  string `gorm:\\"type:varchar(255)\\"`\\n Url            string `gorm:\\"type:varchar(255)\\"`\\n AuthorName     string `gorm:\\"type:varchar(100)\\"`\\n AuthorId       int\\n common.NoPKModel\\n}\\n```\\n![](https://i.imgur.com/onxGG8d.png)\\n\\n## 3.MySQL-Specific Functions\\n\\nWe used the `GROUP_CONCAT`function in a complex query. Although there are similar functions in PostgreSQL, the function names are different and the usage is slightly different.\\n\\n```sql=\\ncursor2, err := db.Table(\\"pull_requests pr1\\").\\n  Joins(\\"left join pull_requests pr2 on pr1.parent_pr_id = pr2.id\\").Group(\\"pr1.parent_pr_id, pr2.created_date\\").Where(\\"pr1.parent_pr_id != \'\'\\").\\n  Joins(\\"left join repos on pr2.base_repo_id = repos.id\\").\\n  Order(\\"pr2.created_date ASC\\").\\n  Select(`pr2.key as parent_pr_key, pr1.parent_pr_id as parent_pr_id, GROUP_CONCAT(pr1.base_ref order by pr1.base_ref ASC) as cherrypick_base_branches, \\n   GROUP_CONCAT(pr1.key order by pr1.base_ref ASC) as cherrypick_pr_keys, repos.name as repo_name, \\n   concat(repos.url, \'/pull/\', pr2.key) as parent_pr_url`).Rows()\\n```\\n\\nSolution:\\nWe finally decided to use two steps to achieve the `GROUP_CONCAT` function. First we used the simplest SQL query to get multiple pieces of the sorted data, and then used the code to group them.\\n\\nAfter modification:\\n```sql=\\n    cursor2, err := db.Raw(\\n  `\\n   SELECT pr2.pull_request_key                 AS parent_pr_key,\\n          pr1.parent_pr_id                     AS parent_pr_id,\\n          pr1.base_ref                         AS cherrypick_base_branch,\\n          pr1.pull_request_key                 AS cherrypick_pr_key,\\n          repos.NAME                           AS repo_name,\\n          Concat(repos.url, \'/pull/\', pr2.pull_request_key) AS parent_pr_url,\\n        pr2.created_date\\n   FROM   pull_requests pr1\\n          LEFT JOIN pull_requests pr2\\n                 ON pr1.parent_pr_id = pr2.id\\n          LEFT JOIN repos\\n                 ON pr2.base_repo_id = repos.id\\n   WHERE  pr1.parent_pr_id != \'\'\\n   ORDER  BY pr1.parent_pr_id,\\n             pr2.created_date,\\n       pr1.base_ref ASC\\n   `).Rows()\\n```\\n\\n## 4.Different Grammar\\n### Backticks\\nWe used backticks in some SQL statements to protect field names from conflicting with MySQL reserved words, which can lead to errors in PostgreSQL. To solve this problem we revisited our code, modified all field names that conflict with reserved words, and removed the backticks in the SQL statement. In the example just mentioned:\\n\\n```sql=\\ndb.Where(\\"merge_request_id = ? AND `system` = ?\\", gitlabMr.GitlabId, false)\\n```\\n\\nSolution:\\nWe changed `system` to `is_system` to avoid the usage of backticks.\\n```sql=\\ndb.Where(\\"merge_request_id = ? AND is_system = ?\\", gitlabMr.GitlabId, false)\\n```\\n\\n### Non-standard delete statement\\nThere were delete statements as followed in our code, which are legal in MySQL but will report an error in PostgreSQL.\\n```sql=\\nerr := db.Exec(`\\n DELETE ic\\n FROM jira_issue_commits ic\\n LEFT JOIN jira_board_issues bi ON (bi.source_id = ic.source_id AND bi.issue_id = ic.issue_id)\\n WHERE ic.source_id = ? AND bi.board_id = ?\\n `, sourceId, boardId).Error\\n```"},{"id":"how-DevLake-is-up-and-running","metadata":{"permalink":"/zh/blog/how-DevLake-is-up-and-running","editUrl":"https://github.com/apache/incubator-devlake-website/edit/main/blog/2022-06-17-How DevLake is up and running/index.md","source":"@site/blog/2022-06-17-How DevLake is up and running/index.md","title":"How DevLake is Up and Running","description":"Apache DevLake is an integration tool with the DevOps data collection functionality, which presents a different stage of data to development teams via Grafana. which also can leverage teams to improve the development process with a data-driven model.","date":"2022-06-17T00:00:00.000Z","formattedDate":"2022\u5e746\u670817\u65e5","tags":[{"label":"devlake","permalink":"/zh/blog/tags/devlake"},{"label":"apache","permalink":"/zh/blog/tags/apache"}],"readingTime":3.466666666666667,"hasTruncateMarker":true,"authors":[{"name":"Warren Chen","title":"Apache DevLake PPMC","url":"https://github.com/warren830","imageURL":"https://github.com/warren830.png","key":"warren"}],"frontMatter":{"slug":"how-DevLake-is-up-and-running","title":"How DevLake is Up and Running","authors":"warren","tags":["devlake","apache"]},"prevItem":{"title":"Compatibility of Apache DevLake with PostgreSQL","permalink":"/zh/blog/compatibility-of-apache-devLake-with-postgreSQL"},"nextItem":{"title":"Apache Incubator Welcomes DevLake, A Dev-Data Platform Serving Developers","permalink":"/zh/blog/apache-welcomes-devlake"}},"content":"[Apache DevLake](https://github.com/apache/incubator-devlake) is an integration tool with the DevOps data collection functionality, which presents a different stage of data to development teams via Grafana. which also can leverage teams to improve the development process with a data-driven model.\\n\\n### Apache DevLack Architecture Overview\\n- The left side of the following screenshot is an [integrative DevOps data plugin](https://devlake.apache.org/docs/next/Overview/SupportedDataSources/), the existing plugins include Github, GitLab, JIRA, Jenkins, Tapd, Feishu, and the most featured analysis engine in the Simayi platform.\\n- The main framework in the middle of the following screenshot, completes data collection, expansion, and conversion to the domain layer by running subtasks in the plugins. The user can trigger the tasks by config-UI or all API.\\n- RMDBS currently supports Mysql and PostgresSQL, more databases will be supported in the future.\\n- Grafana can generate different types of needed data by using SQL.\\n\\n![Generated](Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.001.png)\\n\\n> Then let\u2019s move on to how to start running DevLake.\\n\\n\x3c!--truncate--\x3e\\n\\n### Start the system\\nBefore the Golang program runs, it will automatically call the init() method in the package. We need to focus on the loading of the services package. The following code has detailed comments:\\n```go\\nfunc init() {\\nvar err error\\n// get initial config information\\ncfg = config.GetConfig()\\n// get Database\\ndb, err = runner.NewGormDb(cfg, logger.Global.Nested(\\"db\\"))\\n// configure time zone\\nlocation := cron.WithLocation(time.UTC)\\n// create scheduled task manager\\ncronManager = cron.New(location)\\nif err != nil {\\npanic(err)\\n}\\n// initialize the data migration\\nmigration.Init(db)\\n// register the framework\'s data migration scripts\\nmigrationscripts.RegisterAll()\\n// load plugin, loads all .so files in the folder cfg.GetString(\\"PLUGIN_DIR\\")\uff0cin th LoadPlugins method()\uff0cspecifically, LoadPlugins stores the pluginName:PluginMeta key-value pair into core.plugins by calling runner.\\nerr = runner.LoadPlugins(\\ncfg.GetString(\\"PLUGIN_DIR\\"),\\ncfg,\\nlogger.Global.Nested(\\"plugin\\"),\\ndb,\\n)\\nif err != nil {\\npanic(err)\\n}\\n// run data migration scripts to complete the initializztion work of tables in the databse framework layer.\\nerr = migration.Execute(context.Background())\\nif err != nil {\\npanic(err)\\n}\\n\\n// call service init\\npipelineServiceInit()\\n}\\n\\n```\\n### The execution principle of DevLake\\n**The running process of the pipeline**\\nBefore we go through the pipeline process, we need to know the [Blueprint](https://devlake.apache.org/docs/Overview/KeyConcepts#blueprints) first.\\n\\nBlueprint is a timed task that contains all the subtasks and plans that need to be executed. Each execution record of Blueprint is a historical run, AKA Pipeline. Which presents a trigger for DevLack to complete one or more data collection transformation tasks through one or more plugins.\\n\\n![Generated](Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.002.png)\\n\\nThe following is the pipeline running flow chart.\\n\\n![Generated](Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.003.png)\\n\\nA pipeline contains a two-dimensional array of tasks, mainly to ensure that a series of tasks are executed in a preset order. Like the following screenshot if the plugin of Stage 3 needs to rely on the other plugin to prepare the data(eg: the operation of refdiff needs to rely on gitextractor and Github, for more information on data sources and plugins, please refer to the [documentation](https://devlake.apache.org/docs/next/Overview/SupportedDataSources/), then when Stage 3 starts to execute, it needs to ensure that its dependencies have been executed in Stage 1 and Stage 2.\\n\\n![Generated](Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.004.png)\\n\\n**Task running process**\\n\\nThe plugin tasks in stage1, stage2, and stage3 are executed in parallel:\\n\\n![Generated](Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.005.png)\\n\\n**The next step is to execute the subtasks in the plugin sequentially.**\\n\\n![Generated](Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.006.png)\\n\\n1. The work before the RunTask is to prepare the params for the RunTask method to call, like logger, db, context and etc.\\n2. The main method of RunTask is mainly to update the tasks in the Database, at the same time prepare to run the options of the plugins task.\\n3. RunpluginTask will obtain the corresponding  [PluginMeta](#pm) through core.Getplugin(pluginName), then obtains the [PluginTask](#pt) via PluginMeta, and then executes RunPluginSubTasks.\\n\\n**The running process of each plugin subtask(the relevant interface and func will be explained in the next section)**\\n\\n![Generated](Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.007.png)\\n\\n1. Get all available subtasks subtaskMeta of all th4e plugins by calling SubTaskMetas().\\n2. Use options[\u2018task\u2019] and subtaskMeta to form a set of subtasks to be executed subtaskMetas.\\n3. Calculate how many subtasks in total\\n4. Build taskCtx via helper.NewDefaultTaskContext.\\n5. Build taskData via call pluginTask.PrepareTaskData.\\n6. Iterate over all subtasks in subtaskMetas.\\n    1. Get subtaskCtx of subtask via call taskCtx.SubTaskContext(subtaskMeta.Name).\\n    2. Run subtaskMeta.EntryPoint(subtaskCtx)\\n## Important interfaces in DevLake\\n1. <a id=\\"pm\\">PluginMeta</a>: Contains the two basic methods of plugins, which all plugins need to implement. And stored in core.plugins when the system starts. And obtained through core.GetPlugin when executing plugin tasks.\\n\\n```go\\ntype PluginMeta interface {\\n   Description() string\\n   //PkgPath information will be lost when compiled as plugin(.so), this func will return that info\\n   RootPkgPath() string\\n}\\n\\n```\\n\\n2. <a id=\\"pt\\">PluginTask</a>: It can be obtained by PluginMeta, after the plugin implemented this method, Framework can run the subtask directly, instead of letting the plugin itself run it, the biggest benefit of this is that the subtasks of the plugin are easier to implement, and we can more easily leverage(such as adding logs, etc.) during the operation of the plugin.\\n\\n```go\\ntype PluginTask interface {\\n   // return all available subtasks, framework will run them for you in order\\n   SubTaskMetas() []SubTaskMeta\\n   // based on task context and user input options, return data that shared among all subtasks\\n   PrepareTaskData(taskCtx TaskContext, options map[string]interface{}) (interface{}, error)\\n}\\n```\\n\\n3. Every plugin has a <a id=\\"td\\">taskData</a>, which contains configuration options, apiClient, and other properties of plugins.(like the github has repo information)\\n4. <a id=\\"stm\\">SubTaskMeta</a>:: the meta data of a subtask, every subtask will define a SubTaskMeta.\\n\\n```go\\nvar CollectMeetingTopUserItemMeta = core.SubTaskMeta{\\n   Name: \\"collectMeetingTopUserItem\\",\\n   EntryPoint: CollectMeetingTopUserItem,\\n   EnabledByDefault: true,\\n   Description: \\"Collect top user meeting data from Feishu api\\",\\n}\\n```\\n\\n5. <a id=\\"ec\\">ExecContext</a>: defines all resources needed to execute (sub)tasks.\\n6. <a id=\\"stc\\">SubTaskContext</a>: defines all resources need to execute subtask(including ExecContext).\\n7. <a id=\\"tc\\">TaskContext</a>: defines all resources need to execute tasks(including ExecContext). The difference with SubTaskContext is the TaskContext() method in SubTaskContext can retire TaskContext, but SubTaskContext(subtask string) method in TaskContext can return SubTaskContext, which means the subtask belongs to the plugin task, so we use the different contexts to distinguish this.\\n8. <a id=\\"step\\">SubTaskEntryPoint</a>: all the subtasks in the plugin have to implement this function so that they can be coordinated and arranged by the framework layer.\\n\\n## Further Plan\\nThis blog introduced the basics of the DevLack framework and how it starts and runs, there are 3 more contexts api\\\\_collector, api\\\\_extractor, and data\\\\_convertor will be explained in the next blog."},{"id":"apache-welcomes-devlake","metadata":{"permalink":"/zh/blog/apache-welcomes-devlake","editUrl":"https://github.com/apache/incubator-devlake-website/edit/main/blog/2022-05-18-apache-welcomes-devLake/index.md","source":"@site/blog/2022-05-18-apache-welcomes-devLake/index.md","title":"Apache Incubator Welcomes DevLake, A Dev-Data Platform Serving Developers","description":"We are excited to share today that the Apache Software Foundation (ASF) voted to make DevLake an officially supported project of the Apache Incubator.","date":"2022-05-18T00:00:00.000Z","formattedDate":"2022\u5e745\u670818\u65e5","tags":[{"label":"Devlake","permalink":"/zh/blog/tags/devlake"},{"label":"Apache","permalink":"/zh/blog/tags/apache"}],"readingTime":1.64,"hasTruncateMarker":true,"authors":[{"name":"Maxim Wheatley","title":"Apache DevLake PPMC","url":"https://github.com/MaximDub","imageURL":"https://github.com/MaximDub.png","key":"maxim"}],"frontMatter":{"slug":"apache-welcomes-devlake","title":"Apache Incubator Welcomes DevLake, A Dev-Data Platform Serving Developers","authors":"maxim","tags":["Devlake","Apache"]},"prevItem":{"title":"How DevLake is Up and Running","permalink":"/zh/blog/how-DevLake-is-up-and-running"}},"content":"We are excited to share today that the Apache Software Foundation (ASF) voted to make DevLake an officially supported project of the Apache Incubator.\\n\\n\\n\\n### What is DevLake?\\n\\nLaunched in December of 2021, [Apache DevLake](https://github.com/apache/incubator-devlake) is an open-source dev data platform that ingests, analyzes, and visualizes the fragmented data in developer tools. \\n\\nSoftware development is complex, requiring many tools and processes, and as a result creates a storm of data scattered across tools in many formats. This makes it difficult to organize, query, and make sense of. We built Apache DevLake, to make it easy to make sense of this rich data and to translate it into actionable insights.\\n\\n\\n\x3c!--truncate--\x3e\\n\\n\\n### Apache DevLake\'s key features:\\n\\n- DevOps data collection across software development lifecycle (SDLC) to connect data islands\\n- Standardized data models with out-of-the-box metrics and customizable dashboards\\n- Flexible plugin system for user-defined data integration and transformation\\n\\nBelow is the architecture of Apache DevLake: \\n![architecture](0.11-architecture-diagram.jpg)\\n\\n\\n### Why join Apache Incubator?\\n\\nFirst and foremost, we firmly believe in Apache\'s principle of \\"Community over Code\\" and [\\"The Apache Way\\"](https://www.apache.org/theapacheway/index.html). We look forward to building a vibrant, inclusive, and diverse community under the guidance of our mentors through the incubator journey.\\n\\nWe also feel that the Apache community has one of the strongest ecosystems when it comes to data-oriented open-source projects. \\n\\nLast and not least, the support and enthusiasm of the Apache community and mentors made it clear to us that this would be a place where we can truly evolve and nurture Apache DevLake.\\n\\nIn the months leading up to DevLake\'s acceptance, our mentors provided guidance and suggestions instrumental to making this important moment a reality. We want to take this opportunity to thank and acknowledge them: \\n\\n\\n\\n- **[Willem Ning Jiang](https://github.com/WillemJiang)**: Apache DevLake Champion; ASF Member & Board Director\\n- **[Liang Zhang](https://github.com/terrymanu)**: Founder & CEO of SphereEx; ASF Member, Founder & PMC Chair of Apache ShardingSphere\\n- **[Lidong Dai](https://github.com/dailidong)**: ASF Member; Apache DolphinScheduler PMC Chair\\n- **[Sijie Guo](https://github.com/sijie)**: ASF Member, PMC member of Apache Pulsar; Founder & CEO of StreamNative\\n\\n- **[Felix Cheung](https://github.com/felixcheung)**: ASF Member, PMC on Spark, Superset, Yunikorn, Zeppelin, Pinot, and Incubator. SVP of Engineering at SafeGraph.\\n\\n- **[Jean-Baptiste Onofr\xe9](https://github.com/jbonofre)**: ASF Member, Karaf PMC Chair, PMC on ActiveMQ, Archiva, Aries, Beam, Brooklyn, Camel, Carbondata, Felix, Incubator, and [many more](http://people.apache.org/committer-index.html).\\n\\n\\n\\n### Apache DevLake Future Roadmap\\n\\n- Enhance system scalability and performance in large-scale data scenarios.\\n- Integrate more data sources and tools (JIRA, GitHub, GitLab, and Jenkins are already supported.)\\n- Enable support for OLAP databases, providing users with more choices.\\n- Provide more scenario-specific, out-of-the-box dashboards and templates reflecting best practices and well-known methodologies to improve usability.\\n\\n\\n\\n### Join us! \\n\\nWe invite developers and those passionate about data-driven engineering to \'dive into the lake\' with us, and welcome contributions of all kinds. \\nJoin us on Slack and at our weekly open source community meetups\ud83e\udd73\\n\\n**Apache DevLake (Incubating) Links:**\\n\\n- GitHub:  https://github.com/apache/incubator-devlake\\n- Official Website: https://devlake.apache.org/\\n- Slack:   https://join.slack.com/t/devlake-io/shared_invite/zt-18uayb6ut-cHOjiYcBwERQ8VVPZ9cQQw\\n- Podling Website\uff1ahttps://incubator.apache.org/projects/devlake.html"}]}')}}]);
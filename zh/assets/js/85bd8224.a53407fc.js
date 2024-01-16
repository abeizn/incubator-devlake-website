"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[72905],{13757:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=i(87462),a=(i(67294),i(3905));i(61839);const r={title:"PR Merge Rate",description:"Pull Request Merge Rate\n",sidebar_position:20},o=void 0,s={unversionedId:"Metrics/PRMergeRate",id:"version-v0.20/Metrics/PRMergeRate",title:"PR Merge Rate",description:"Pull Request Merge Rate\n",source:"@site/versioned_docs/version-v0.20/Metrics/PRMergeRate.md",sourceDirName:"Metrics",slug:"/Metrics/PRMergeRate",permalink:"/zh/docs/v0.20/Metrics/PRMergeRate",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.20/Metrics/PRMergeRate.md",tags:[],version:"v0.20",sidebarPosition:20,frontMatter:{title:"PR Merge Rate",description:"Pull Request Merge Rate\n",sidebar_position:20},sidebar:"docsSidebar",previous:{title:"PR Time To Merge",permalink:"/zh/docs/v0.20/Metrics/PRTimeToMerge"},next:{title:"PR Review Depth",permalink:"/zh/docs/v0.20/Metrics/PRReviewDepth"}},l={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],c={toc:d};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,a.kt)("p",null,"The ratio of PRs/MRs that get merged."),(0,a.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Code review metrics are process indicators to provide quick feedback on developers' code quality"),(0,a.kt)("li",{parentName:"ol"},"Promote the team to establish a unified coding specification and standardize the code review criteria"),(0,a.kt)("li",{parentName:"ol"},"Identify modules with low-quality risks in advance, optimize practices, and precipitate into reusable knowledge and tools to avoid technical debt accumulation")),(0,a.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livedemo/DataSources/GitHub"},"GitHub")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livedemo/DataSources/GitLab"},"GitLab")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livedemo/OSSMaintainers/WeeklyCommunityRetro"},"Weekly Community Retro")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livedemo/EngineeringLeads/EngineeringThroughputAndCycleTime"},"Engineering Throughput and Cycle Time")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livedemo/EngineeringLeads/EngineeringThroughputAndCycleTimeTeamView"},"Engineering Throughput and Cycle Time - Team View"))),(0,a.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,a.kt)("p",null,"The number of merged PRs divided by the number of all PRs in the given data range."),(0,a.kt)("b",null,"Data Sources Required"),(0,a.kt)("p",null,"This metric relies on PRs/MRs collected from GitHub, GitLab, BitBucket, Gitee or other code review tools."),(0,a.kt)("b",null,"Data Transformation Required"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("b",null,"SQL Queries"),(0,a.kt)("p",null,"The following SQL shows how to find the PR merged rate in specific repositories and given time range, eg. 'repo-1' and 'repo-2'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"select\n    count(distinct case when merged_date is not null then id else null end)/count(*) as pr_merged_rate\nfrom \n    pull_requests pr\nwhere\n  -- $__timeFilter will take Grafana's time range\n  $__timeFilter(created_date)\n  -- please replace the repo ids with your own, or create a '$repo_id' variable in Grafana\n    and base_repo_id in ('repo_1', 'repo_2')\n  -- remove PRs submitted by bots, comment it out if you don't need it\n  and author_name not rlike  '^robot-|-robot$|\\\\[bot\\\\]|-bot$|-ci$|-testing$'\n")),(0,a.kt)("p",null,"If you want to measure the monthly trend of ",(0,a.kt)("inlineCode",{parentName:"p"},"PR merge rate")," in the screenshot below, please run the following SQL in Grafana."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(13530).Z,width:"1115",height:"346"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT\n  DATE_ADD(date(created_date), INTERVAL -DAYOFMONTH(date(created_date))+1 DAY) as time,\n  count(distinct case when merged_date is not null then id else null end)/count(*) as pr_merged_rate\nFROM pull_requests\nWHERE\n  $__timeFilter(created_date)\n  -- please replace the repo ids with your own, or create a '$repo_id' variable in Grafana\n  and base_repo_id in ('repo_1', 'repo_2')\n  -- remove PRs submitted by bots, comment it out if you don't need it\n  and author_name not rlike  '^robot-|-robot$|\\\\[bot\\\\]|-bot$|-ci$|-testing$'\nGROUP BY 1\n")),(0,a.kt)("p",null,"If you want to measure the monthly trend of ",(0,a.kt)("inlineCode",{parentName:"p"},"PR status distribution"),", please run the following SQL in Grafana."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(27530).Z,width:"1113",height:"346"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT\n  DATE_ADD(date(created_date), INTERVAL -DAYOFMONTH(date(created_date))+1 DAY) as time,\n  count(distinct case when status != 'closed' then id else null end) as \"PR: Open\",\n  count(distinct case when status = 'closed' and merged_date is null then id else null end) as \"PR: Closed without merging\",\n  count(distinct case when status = 'closed' and merged_date is not null then id else null end) as \"PR: Closed and merged\"\nFROM pull_requests\nWHERE\n  $__timeFilter(created_date)\n  and created_date >= DATE_ADD(DATE_ADD($__timeFrom(), INTERVAL -DAY($__timeFrom())+1 DAY), INTERVAL +1 MONTH)\n  and base_repo_id in ('repo_1', 'repo_2')\n  -- remove PRs submitted by bots, comment it out if you don't need it\n  and author_name not rlike  '^robot-|-robot$|\\\\[bot\\\\]|-bot$|-ci$|-testing$'\nGROUP BY 1\n")),(0,a.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the developer dimension, we evaluate the code quality of developers by combining the task complexity with the metrics related to the number of review passes and review rounds."),(0,a.kt)("li",{parentName:"ol"},"From the reviewer dimension, we observe the reviewer's review style by taking into account the task complexity, the number of passes and the number of review rounds."),(0,a.kt)("li",{parentName:"ol"},"From the project/team dimension, we combine the project phase and team task complexity to aggregate the metrics related to the number of review passes and review rounds, and identify the modules with abnormal code review process and possible quality risks.")))}m.isMDXComponent=!0},13530:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/pr-merge-rate-monthly-aa8035b065e18b38e20a0997228443b4.png"},27530:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/pr-status-distribution-monthly-535e1b8c62d61a515c9b47ccaf076c16.png"}}]);
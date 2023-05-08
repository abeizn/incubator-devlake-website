"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[65477],{35228:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(61839);const o={title:"DORA",sidebar_position:4,description:"DORA Metrics\n"},r=void 0,l={unversionedId:"DORA",id:"version-v0.16/DORA",title:"DORA",description:"DORA Metrics\n",source:"@site/versioned_docs/version-v0.16/DORA.md",sourceDirName:".",slug:"/DORA",permalink:"/zh/docs/v0.16/DORA",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.16/DORA.md",tags:[],version:"v0.16",sidebarPosition:4,frontMatter:{title:"DORA",sidebar_position:4,description:"DORA Metrics\n"},sidebar:"docsSidebar",previous:{title:"Team Configuration",permalink:"/zh/docs/v0.16/Configuration/TeamConfiguration"},next:{title:"Metrics",permalink:"/zh/docs/v0.16/Metrics"}},s={},p=[{value:"What are DORA metrics?",id:"what-are-dora-metrics",level:2},{value:"Why is DORA important?",id:"why-is-dora-important",level:2},{value:"How to implement DORA metrics with Apache DevLake?",id:"how-to-implement-dora-metrics-with-apache-devlake",level:2},{value:"A real-world example",id:"a-real-world-example",level:2},{value:"Collect GitHub &amp; Jira data via <code>blueprint</code>",id:"collect-github--jira-data-via-blueprint",level:3},{value:"Collect CircleCI data via <code>webhook</code>",id:"collect-circleci-data-via-webhook",level:3},{value:"View and customize DevLake&#39;s DORA dashboard",id:"view-and-customize-devlakes-dora-dashboard",level:3},{value:"Try it Out",id:"try-it-out",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:p};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes everything you need to know about DORA, and implementing this powerful and practical framework in DevLake."),(0,i.kt)("h2",{id:"what-are-dora-metrics"},"What are DORA metrics?"),(0,i.kt)("p",null,'Created six years ago by a team of researchers, DORA stands for "DevOps Research & Assessment" and is the answer to years of research, having examined thousands of teams, seeking a reliable and actionable approach to understanding the performance of software development teams.'),(0,i.kt)("p",null,"DORA has since become a standardized framework focused on the stability and velocity of development processes, one that avoids the more controversial aspects of productivity and individual performance measures."),(0,i.kt)("p",null,"There are two key clusters of data inside DORA: Velocity and Stability. The DORA framework is focused on keeping them in context with each other, as a whole, rather than as independent variables, making the data more challenging to misinterpret or abuse."),(0,i.kt)("p",null,"Within velocity are two core metrics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./Metrics/DeploymentFrequency"},"Deployment Frequency"),": Number of successful deployments to production, how rapidly is your team releasing to users?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./Metrics/LeadTimeForChanges"},"Lead Time for Changes"),": How long does it take from commit to the code running in production? This is important, as it reflects how quickly your team can respond to user requirements.")),(0,i.kt)("p",null,"Stability is composed of two core metrics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./Metrics/MTTR"},"Median Time to Restore Service"),": How long does it take the team to properly recover from a failure once it is identified?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./Metrics/CFR"},"Change Failure Rate"),": How often are your deployments causing a failure?")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/71EUflb.png",alt:null})),(0,i.kt)("p",null,'To make DORA even more actionable, there are well-established benchmarks to determine if you are performing at "Elite", "High", "Medium", or "Low" levels. Inside DevLake, you will find the benchmarking table available to assess and compare your own projects.'),(0,i.kt)("h2",{id:"why-is-dora-important"},"Why is DORA important?"),(0,i.kt)("p",null,"DORA metrics help teams and projects measure and improve software development practices to consistently deliver reliable products, and thus happy users!"),(0,i.kt)("h2",{id:"how-to-implement-dora-metrics-with-apache-devlake"},"How to implement DORA metrics with Apache DevLake?"),(0,i.kt)("p",null,"You can set up DORA metrics in DevLake in a few steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Install"),": ",(0,i.kt)("a",{parentName:"li",href:"./GettingStarted"},"Getting Started")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Collect"),": Collect data via blueprint",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In the blueprint, select the data you wish to collect, and make sure you have selected the data required for DORA metrics"),(0,i.kt)("li",{parentName:"ul"},"Configure DORA-related transformation rules to define ",(0,i.kt)("inlineCode",{parentName:"li"},"deployments")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"incidents")),(0,i.kt)("li",{parentName:"ul"},"Select a sync frequency for your data, save and run the blueprint."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Report"),": DevLake provides a built-in DORA dashboard. See an example screenshot below or check out our ",(0,i.kt)("a",{parentName:"li",href:"https://grafana-lake.demo.devlake.io/grafana/d/qNo8_0M4z/dora?orgId=1"},"live demo"),".\n",(0,i.kt)("img",{parentName:"li",src:"https://i.imgur.com/y1pUIsk.png",alt:"DORA Dashboard"}))),(0,i.kt)("p",null,"DevLake now supports Jenkins, GitHub Action and GitLabCI as data sources for ",(0,i.kt)("inlineCode",{parentName:"p"},"deployments")," data; Jira, GitHub issues, and TAPD as the sources for ",(0,i.kt)("inlineCode",{parentName:"p"},"incidents")," data; Github PRs, GitLab MRs as the sources for ",(0,i.kt)("inlineCode",{parentName:"p"},"changes")," data."),(0,i.kt)("p",null,"If your CI/CD tools are not listed on the ",(0,i.kt)("a",{parentName:"p",href:"./Overview/SupportedDataSources"},"Supported Data Sources")," page, have no fear! DevLake provides incoming webhooks to push your ",(0,i.kt)("inlineCode",{parentName:"p"},"deployments")," data to DevLake. The webhook configuration doc can be found ",(0,i.kt)("a",{parentName:"p",href:"./Configuration/webhook/"},"here"),"."),(0,i.kt)("h2",{id:"a-real-world-example"},"A real-world example"),(0,i.kt)("p",null,"Let's walk through the DORA implementation process for a team with the following toolchain"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Code Hosting: GitHub"),(0,i.kt)("li",{parentName:"ul"},"CI/CD: GitHub Actions + CircleCI"),(0,i.kt)("li",{parentName:"ul"},"Issue Tracking: Jira")),(0,i.kt)("p",null,"Calculating DORA metrics requires three key entities: ",(0,i.kt)("strong",{parentName:"p"},"changes"),", ",(0,i.kt)("strong",{parentName:"p"},"deployments"),", and ",(0,i.kt)("strong",{parentName:"p"},"incidents"),". Their exact definitions of course depend on a team's DevOps practice and varies team by team. For the team in this example, let's assume the following definition:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Changes: All pull requests in GitHub."),(0,i.kt)("li",{parentName:"ul"},'Deployments: GitHub action jobs that have "deploy" in their names and CircleCI\'s deployment jobs.'),(0,i.kt)("li",{parentName:"ul"},"Incidents: Jira issues whose types are ",(0,i.kt)("inlineCode",{parentName:"li"},"Crash")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Incident"))),(0,i.kt)("p",null,"In the next section, we'll demonstrate how to configure DevLake to implement DORA metrics for the aforementioned example team."),(0,i.kt)("h3",{id:"collect-github--jira-data-via-blueprint"},"Collect GitHub & Jira data via ",(0,i.kt)("inlineCode",{parentName:"h3"},"blueprint")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Visit the config-ui at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a project: 'project1'. Go to 'project1' and create a blueprint. Let's name it \"Blueprint for DORA\", add a Jira and a GitHub connection. Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Next Step"),"\n",(0,i.kt)("img",{alt:"project1",src:a(94218).Z,width:"824",height:"294"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/lpPRZ6v.png",alt:null}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select Jira boards and GitHub repos to collect, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Next Step"),"\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/Ko38n6J.png",alt:null}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Transformation")," to configure for DORA metrics\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/Lhcu2DE.png",alt:null}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To make it simple, fields with a ",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/rrLopFx.png",alt:null}),' label are DORA-related configurations for every data source. Via these fields, you can define what are "incidents" and "deployments" for each data source. After all data connections have been configured, click ',(0,i.kt)("inlineCode",{parentName:"p"},"Next Step")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This team uses Jira issue types ",(0,i.kt)("inlineCode",{parentName:"li"},"Crash")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Incident"),' as "incident", so choose the two types in field "incident". Jira issues in these two types will be transformed to "incidents" in DevLake.'),(0,i.kt)("li",{parentName:"ul"},"This team uses the GitHub action jobs named ",(0,i.kt)("inlineCode",{parentName:"li"},"deploy")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"build-and-deploy")," to deploy, so type in ",(0,i.kt)("inlineCode",{parentName:"li"},"(?i)deploy"),' to match these jobs. These jobs will be transformed to "deployments" in DevLake.\n',(0,i.kt)("img",{parentName:"li",src:"https://i.imgur.com/1JZA2xn.png",alt:null}))),(0,i.kt)("p",{parentName:"li"},"Note: The following example shows where to find GitHub action jobs. It's easy to mix them up with GitHub workflows.\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/Y2hchEh.png",alt:null}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose sync frequency, click 'Save and Run Now' to start data collection. The time to completion varies by data source and depends on the volume of data.\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/zPkfzGr.png",alt:null})))),(0,i.kt)("p",null,"For more details, please refer to our ",(0,i.kt)("a",{parentName:"p",href:"./Configuration/Tutorial"},"blueprint manuals"),"."),(0,i.kt)("h3",{id:"collect-circleci-data-via-webhook"},"Collect CircleCI data via ",(0,i.kt)("inlineCode",{parentName:"h3"},"webhook")),(0,i.kt)("p",null,"Using CircleCI as an example, we demonstrate how to actively push data to DevLake using the Webhook approach, in cases where DevLake doesn't have a plugin specific to that tool to pull data from your data source."),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Go to the 'Data Connections' page. Create a webhook.\n",(0,i.kt)("img",{alt:"webhook-add-data-connections",src:a(65947).Z,width:"606",height:"224"}))),(0,i.kt)("p",null,"We recommend that you give your webhook connection a unique name so that you can identify and manage where you have used it later."),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a Project first, choose Incoming Webhooks, then you can ",(0,i.kt)("inlineCode",{parentName:"p"},"Add a Webhook")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Select Existing Webhooks"),'. And click "Generate POST URL". DevLake will generate URLs that you can send JSON payloads to push ',(0,i.kt)("inlineCode",{parentName:"p"},"deployments")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"incidents")," to Devlake. Copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment")," curl command.\n",(0,i.kt)("img",{alt:"project-webhook-use",src:a(40022).Z,width:"926",height:"442"}),"\n",(0,i.kt)("img",{alt:"webhook-connection",src:a(55330).Z,width:"607",height:"662"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now head to your CircleCI's pipelines page in a new tab. Find your deployment pipeline and click ",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration File"),"\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/XwPzmyk.png",alt:null}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Paste the curl command copied in step 8 to the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yml"),", change the key-values in the payload. See full payload schema ",(0,i.kt)("a",{parentName:"p",href:"./Plugins/webhook/##register-a-deployment"},"here"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'version: 2.1\n\njobs:\n  build:\n    docker:\n      - image: cimg/base:stable\n    steps:\n      - checkout\n      - run:\n          name: "build"\n          command: |\n            echo Hello, World!\n\n  deploy:\n    docker:\n      - image: cimg/base:stable\n    steps:\n      - checkout\n      - run:\n          name: "deploy"\n          command: |\n            # The time a deploy started\n            start_time=`date \'+%Y-%m-%dT%H:%M:%S%z\'`\n\n            # Some deployment tasks here ...\n            echo Hello, World!\n\n            # Send the request to DevLake after deploy\n            # The values start with a \'$CIRCLE_\' are CircleCI\'s built-in variables\n            curl http://127.0.0.1:4000/api/plugins/webhook/1/deployments -X \'POST\' -d "{\n              \\"commit_sha\\":\\"$CIRCLE_SHA1\\",\n              \\"repo_url\\":\\"$CIRCLE_REPOSITORY_URL\\",\n              \\"start_time\\":\\"$start_time\\"\n            }"\n\nworkflows:\n  build_and_deploy_workflow:\n    jobs:\n      - build\n      - deploy\n')),(0,i.kt)("p",null,"If you have set a ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/v0.16/GettingStarted/Authentication"},"username/password")," for Config UI, you need to add them to the curl to register a deployment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl https://sample-url.com/api/plugins/webhook/1/deployments -X \'POST\' -u \'username:password\' -d \'{\n    \\"commit_sha\\":\\"$CIRCLE_SHA1\\",\n    \\"repo_url\\":\\"$CIRCLE_REPOSITORY_URL\\",\n    \\"start_time\\":\\"$start_time\\"\n  }\'\n')),(0,i.kt)("ol",{start:11},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the modified CircleCI pipeline. Check to verify that the request has been successfully sent.\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/IyneAMn.png",alt:null}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You will find the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"deployments")," in table.cicd_tasks in DevLake's database.\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/6hguCYK.png",alt:null})))),(0,i.kt)("h3",{id:"view-and-customize-devlakes-dora-dashboard"},"View and customize DevLake's DORA dashboard"),(0,i.kt)("p",null,"With all the data collected, DevLake's DORA dashboard is ready to deliver your DORA metrics and benchmarks. You can find the DORA dashboard within the Grafana instance shipped with DevLake, ready for you to put into action."),(0,i.kt)("p",null,"You can customize the DORA dashboard by editing the underlying SQL query of each panel."),(0,i.kt)("p",null,"For a breakdown of each metric's SQL query, please refer to the corresponding metric docs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./Metrics/DeploymentFrequency"},"Deployment Frequency")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./Metrics/LeadTimeForChanges"},"Lead Time for Changes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./Metrics/MTTR"},"Median Time to Restore Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./Metrics/CFR"},"Change Failure Rate"))),(0,i.kt)("p",null,"If you aren't familiar with Grafana, please refer to our ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/v0.16/Configuration/Dashboards/GrafanaUserGuide"},"Grafana doc"),", or jump into Slack for help."),(0,i.kt)("br",null),(0,i.kt)("p",null,"\ud83c\udf89\ud83c\udf89\ud83c\udf89 Congratulations! You are now a DevOps Hero, with your own DORA dashboard!"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"try-it-out"},"Try it Out"),(0,i.kt)("p",null,"To create the DORA dashboard with your own toolchain, please look at the ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/v0.16/Configuration/Tutorial"},"configuration tutorial")," for more details."),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If you run into any problem, please check the ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/v0.16/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}m.isMDXComponent=!0},40022:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/project-webhook-use-6163946d4d066eb59480da8d01eade50.png"},94218:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/project1-58602175bfe30a91e7ce91d60049d4f1.png"},65947:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/webhook-add-data-connections-49927d644196a3c18e4922ec6c542883.png"},55330:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/webhook-connection-67809547ce4f37b657514ff288a7cdee.png"}}]);
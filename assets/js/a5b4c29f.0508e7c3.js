"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[10676],{67651:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var n=i(87462),a=(i(67294),i(3905));i(61839);const l={title:"BitBucket(Beta)",description:"BitBucket Plugin\n"},o=void 0,r={unversionedId:"Plugins/bitbucket",id:"version-v0.20/Plugins/bitbucket",title:"BitBucket(Beta)",description:"BitBucket Plugin\n",source:"@site/versioned_docs/version-v0.20/Plugins/bitbucket.md",sourceDirName:"Plugins",slug:"/Plugins/bitbucket",permalink:"/docs/v0.20/Plugins/bitbucket",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.20/Plugins/bitbucket.md",tags:[],version:"v0.20",frontMatter:{title:"BitBucket(Beta)",description:"BitBucket Plugin\n"},sidebar:"docsSidebar",previous:{title:"Bamboo(WIP)",permalink:"/docs/v0.20/Plugins/bamboo"},next:{title:"Customize",permalink:"/docs/v0.20/Plugins/customize"}},s={},u=[{value:"Summary",id:"summary",level:2},{value:"Supported Versions",id:"supported-versions",level:2},{value:"Entities",id:"entities",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Configuration",id:"configuration",level:2},{value:"API Sample Request",id:"api-sample-request",level:2},{value:"References",id:"references",level:2}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This plugin collects various entities from Bitbucket, including pull requests, issues, comments, pipelines, git commits, and etc."),(0,a.kt)("p",null,"As of v0.14.2, ",(0,a.kt)("inlineCode",{parentName:"p"},"bitbucket")," plugin can only be invoked through DevLake API. Its support in Config-UI is WIP."),(0,a.kt)("h2",{id:"supported-versions"},"Supported Versions"),(0,a.kt)("p",null,"Available for BitBucket Cloud. Check ",(0,a.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/Overview/SupportedDataSources#data-sources-and-data-plugins"},"this doc")," for more details."),(0,a.kt)("h2",{id:"entities"},"Entities"),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/v0.20/Overview/SupportedDataSources#data-collection-scope-by-each-plugin"},"BitBucket entities")," collected by this plugin."),(0,a.kt)("h2",{id:"metrics"},"Metrics"),(0,a.kt)("p",null,"Metrics that can be calculated based on the data collected from bitbucket:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/v0.20/Metrics/CommitCount"},"Commit Count")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/v0.20/Metrics/CommitAuthorCount"},"Commit Author Count")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/v0.20/Metrics/AddedLinesOfCode"},"Added Lines of Code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/v0.20/Metrics/DeletedLinesOfCode"},"Deleted Lines of Code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/v0.20/Metrics/PRCount"},"PR Count")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/v0.20/Metrics/PRTimeToMerge"},"PR Time To Merge")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/v0.20/Metrics/PRMergeRate"},"PR Merge Rate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/v0.20/Metrics/PRReviewDepth"},"PR Review Depth")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/v0.20/Metrics/PRSize"},"PR Size")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/v0.20/Metrics/BuildCount"},"Build Count")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/v0.20/Metrics/BuildDuration"},"Build Duration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/v0.20/Metrics/BuildSuccessRate"},"Build Success Rate"))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configuring Bitbucket via ",(0,a.kt)("a",{parentName:"li",href:"/docs/v0.20/Configuration/BitBucket"},"Config UI"))),(0,a.kt)("h2",{id:"api-sample-request"},"API Sample Request"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Please replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),' in the sample requests with your actual DevLake API endpoint. For how to view DevLake API\'s swagger documentation, please refer to the "Using DevLake API" section of ',(0,a.kt)("a",{parentName:"p",href:"/docs/v0.20/DeveloperManuals/DeveloperSetup"},"Developer Setup"),".")),(0,a.kt)("p",null,"You can trigger data collection by making a POST request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/pipelines"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n  "name": "project1",\n  "plan": [\n    [\n      {\n        "plugin": "bitbucket",\n        "options": {\n          "connectionId": 1,\n          "fullName": "likyh/likyhphp",\n          "transformationRules":{\n            "deploymentPattern":"",\n            "productionPattern":"",\n            "issueStatusTodo":"new,open",\n            "issueStatusInProgress":"",\n            "issueStatusDone":"resolved,closed",\n            "issueStatusOther":"on hold,wontfix,duplicate,invalid"\n          }\n        }\n      }\n    ]\n  ]\n}\n\'\n')),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/v0.20/DeveloperManuals/DeveloperSetup#references"},"references"))))}p.isMDXComponent=!0}}]);
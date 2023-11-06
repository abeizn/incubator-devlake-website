"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[14575],{40353:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var a=o(87462),s=(o(67294),o(3905));o(61839);const n={title:"Dashboard Troubleshooting",sidebar_position:3,description:"Dashboard Troubleshooting\n"},i=void 0,r={unversionedId:"Troubleshooting/Dashboard",id:"Troubleshooting/Dashboard",title:"Dashboard Troubleshooting",description:"Dashboard Troubleshooting\n",source:"@site/docs/Troubleshooting/Dashboard.md",sourceDirName:"Troubleshooting",slug:"/Troubleshooting/Dashboard",permalink:"/docs/Troubleshooting/Dashboard",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Troubleshooting/Dashboard.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Dashboard Troubleshooting",sidebar_position:3,description:"Dashboard Troubleshooting\n"},sidebar:"docsSidebar",previous:{title:"Configuration and Blueprint Troubleshooting",permalink:"/docs/Troubleshooting/Configuration"},next:{title:"Mysql Troubleshooting",permalink:"/docs/Troubleshooting/MySqlIssue"}},l={},d=[{value:"Debugging DORA Issue Metrics",id:"debugging-dora-issue-metrics",level:2},{value:"DORA Validation Dashboard",id:"dora-validation-dashboard",level:3},{value:"SQL scripts behind Grafana charts",id:"sql-scripts-behind-grafana-charts",level:3},{value:"How issues and deployments are associated to projects",id:"how-issues-and-deployments-are-associated-to-projects",level:3},{value:"If you use webhooks",id:"if-you-use-webhooks",level:3},{value:"None of them solve your problem?",id:"none-of-them-solve-your-problem",level:2}],h={toc:d};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"debugging-dora-issue-metrics"},"Debugging DORA Issue Metrics"),(0,s.kt)("p",null,"This section may help if ",(0,s.kt)("inlineCode",{parentName:"p"},"Median Time to Restore Service (MTTR)")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"Change Failure Rate (CFR)")," do not appear on the dashboards or you want to learn more about how these issue-based metrics are built."),(0,s.kt)("h3",{id:"dora-validation-dashboard"},"DORA Validation Dashboard"),(0,s.kt)("p",null,"Starting from DevLake v0.18 this dashboard can be found near the ",(0,s.kt)("inlineCode",{parentName:"p"},"DORA")," dashboard. Also, it can be accessed by a direct link in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Dashboard Instruction")," panel in the ",(0,s.kt)("inlineCode",{parentName:"p"},"DORA")," dashboard."),(0,s.kt)("p",null,"This dashboard is a step-by-step guide to check which step went wrong ",(0,s.kt)("strong",{parentName:"p"},"for all 4 of the DORA metrics"),". The sections are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'Check "Deployment Frequency"'),(0,s.kt)("li",{parentName:"ul"},'Check "Median Lead Time for Changes"'),(0,s.kt)("li",{parentName:"ul"},'Check "Change Failure Rate" & "Median Time to Restore Service')),(0,s.kt)("h3",{id:"sql-scripts-behind-grafana-charts"},"SQL scripts behind Grafana charts"),(0,s.kt)("p",null,"Each chart has a hidden button in the top-right corner to access the context menu. In that menu, click ",(0,s.kt)("inlineCode",{parentName:"p"},"Edit")," to open a more detailed view with the script that tells how exactly the data is queried."),(0,s.kt)("h3",{id:"how-issues-and-deployments-are-associated-to-projects"},"How issues and deployments are associated to projects"),(0,s.kt)("p",null,"Following Entity-Relationship diagrams below represent how the data is mapped and used for each of the 4 DORA metrics.\nThey are based on the SQL queries for each of the charts."),(0,s.kt)("p",null,"Legend:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Blue box: user data source, be it ",(0,s.kt)("strong",{parentName:"li"},"deployments"),", ",(0,s.kt)("strong",{parentName:"li"},"pull requests")," from the source code, or ",(0,s.kt)("strong",{parentName:"li"},"issues")),(0,s.kt)("li",{parentName:"ul"},"White box: a table or entity used by DevLake"),(0,s.kt)("li",{parentName:"ul"},"Connections: lines that tell how the tables are mapped, also specify which fields are used.")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"project_mapping")," is responsible for mapping ",(0,s.kt)("strong",{parentName:"p"},"deployments"),", ",(0,s.kt)("strong",{parentName:"p"},"pull requests")," from the source code, or ",(0,s.kt)("strong",{parentName:"p"},"issues"),".\nTo do so, it must be filtered using either ",(0,s.kt)("inlineCode",{parentName:"p"},"table = 'cicd_scopes'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"table = 'repos'"),", or ",(0,s.kt)("inlineCode",{parentName:"p"},"table = 'boards'")," when connecting to another table."),(0,s.kt)("p",null,(0,s.kt)("img",{src:o(73218).Z,width:"864",height:"397"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:o(8361).Z,width:"844",height:"127"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:o(75962).Z,width:"980",height:"278"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:o(10094).Z,width:"864",height:"279"})),(0,s.kt)("h3",{id:"if-you-use-webhooks"},"If you use webhooks"),(0,s.kt)("p",null,"DevLake knows to which project an issue or a deployment belongs only by segregation between the webhooks.\nI.e. ",(0,s.kt)("strong",{parentName:"p"},"each project should have its own webhook"),". A webhook used by multiple projects means that all the\nissues or deployments published by that webhook ",(0,s.kt)("strong",{parentName:"p"},"will be replicated among those projects"),", as they belong to both of them."),(0,s.kt)("p",null,"WIP"),(0,s.kt)("h2",{id:"none-of-them-solve-your-problem"},"None of them solve your problem?"),(0,s.kt)("p",null,"Sorry for the inconvenience, please help us improve by ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"creating an issue")))}p.isMDXComponent=!0},73218:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/cfr-a828bb154b8b9139a758126b670a783a.png"},8361:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/deployments-2dbcee174e7ba1eab645923b9c632809.png"},75962:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/lead_time-f7fb898d559f96e0d2d0eedd9db3a910.png"},10094:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/mttr-9aa08ffbf6f14ca2264ecde8ed2284d4.png"}}]);
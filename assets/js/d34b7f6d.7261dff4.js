"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[73190],{34015:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));t(61839);const s={title:"PR Pickup Time",description:"PR Pickup Time\n",sidebar_position:16},o=void 0,r={unversionedId:"Metrics/PRPickupTime",id:"version-v0.15/Metrics/PRPickupTime",title:"PR Pickup Time",description:"PR Pickup Time\n",source:"@site/versioned_docs/version-v0.15/Metrics/PRPickupTime.md",sourceDirName:"Metrics",slug:"/Metrics/PRPickupTime",permalink:"/docs/v0.15/Metrics/PRPickupTime",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.15/Metrics/PRPickupTime.md",tags:[],version:"v0.15",sidebarPosition:16,frontMatter:{title:"PR Pickup Time",description:"PR Pickup Time\n",sidebar_position:16},sidebar:"docsSidebar",previous:{title:"PR Coding Time",permalink:"/docs/v0.15/Metrics/PRCodingTime"},next:{title:"PR Review Time",permalink:"/docs/v0.15/Metrics/PRReviewTime"}},l={},c=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in?",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],d={toc:c};function u(e){let{components:i,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,a.kt)("p",null,"The time it takes from when a PR is issued until the first comment is added to that PR. "),(0,a.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,a.kt)("p",null,"PR Pickup Time shows how engaged your team is in collaborative work by identifying the delay in picking up PRs. "),(0,a.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livedemo/EngineeringLeads/EngineeringThroughputAndCycleTime"},"Engineering Throughput and Cycle Time")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livedemo/EngineeringLeads/EngineeringThroughputAndCycleTimeTeamView"},"Engineering Throughput and Cycle Time - Team View"))),(0,a.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,a.kt)("b",null,"Data Sources Required"),(0,a.kt)("p",null,"This metric relies on PRs/MRs collected from GitHub, GitLab, BitBucket, Gitee or other code review tools."),(0,a.kt)("b",null,"Data Transformation Required"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("b",null,"SQL Queries"),(0,a.kt)("p",null,"The following SQL shows how to find the ",(0,a.kt)("inlineCode",{parentName:"p"},"pickup time")," of a specific PR. DevLake pre-calculates the metric and stores it in table.pull_requests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT\n  review_lag/60 as 'PR Pickup Time(h)'\nFROM\n  pull_requests\n")),(0,a.kt)("p",null,"If you want to measure the monthly trend of ",(0,a.kt)("inlineCode",{parentName:"p"},"PR pickup time")," in the screenshot below, please run the following SQL in Grafana. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(47953).Z,width:"1115",height:"298"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT \n  DATE_ADD(date(created_date), INTERVAL -DAY(date(created_date))+1 DAY) as time,\n  avg(review_lag)/60 as 'PR Pickup Time(h)'\nFROM pull_requests\nGROUP BY 1\nORDER BY 1\n")),(0,a.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use DevLake's dashboard to monitor your delivery progress;"),(0,a.kt)("li",{parentName:"ol"},"Have a habit to check for hanging PRs regularly;"),(0,a.kt)("li",{parentName:"ol"},"Set up alerts for your communication tools (e.g. Slack, Lark) when new PRs are issued.")))}u.isMDXComponent=!0},47953:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/pr-pickup-time-monthly-c1b29ac4df1b6212190c74117de512f6.png"}}]);
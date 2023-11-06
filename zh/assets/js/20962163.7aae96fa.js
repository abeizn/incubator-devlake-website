"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[89086],{33168:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>n,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var o=t(87462),s=(t(67294),t(3905));t(61839);const l={title:"PR Cycle Time",description:"PR Cycle Time\n",sidebar_position:2},a=void 0,r={unversionedId:"Metrics/CycleTime",id:"version-v0.13/Metrics/CycleTime",title:"PR Cycle Time",description:"PR Cycle Time\n",source:"@site/versioned_docs/version-v0.13/Metrics/CycleTime.md",sourceDirName:"Metrics",slug:"/Metrics/CycleTime",permalink:"/zh/docs/v0.13/Metrics/CycleTime",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/Metrics/CycleTime.md",tags:[],version:"v0.13",sidebarPosition:2,frontMatter:{title:"PR Cycle Time",description:"PR Cycle Time\n",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"PR Coding Time",permalink:"/zh/docs/v0.13/Metrics/CodingTime"},next:{title:"PR Deploy Time",permalink:"/zh/docs/v0.13/Metrics/DeployTime"}},n={},c=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in?",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],d={toc:c};function m(e){let{components:i,...t}=e;return(0,s.kt)("wrapper",(0,o.Z)({},d,t,{components:i,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,s.kt)("p",null,"PR Cycle Time is the sum of PR Coding Time, Pickup TIme, Review Time and Deploy Time. It is the total time from the first commit to when the PR is deployed."),(0,s.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,s.kt)("p",null,"PR Cycle Time indicate the overall speed of the delivery progress in terms of PR. "),(0,s.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in?"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Engineering Throughput and Cycle Time"),(0,s.kt)("li",{parentName:"ul"},"Engineering Throughput and Cycle Time - Team View")),(0,s.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,s.kt)("p",null,"You can define ",(0,s.kt)("inlineCode",{parentName:"p"},"deployment")," based on your actual practice. For a full list of ",(0,s.kt)("inlineCode",{parentName:"p"},"deployment"),"'s definitions that DevLake support, please refer to ",(0,s.kt)("a",{parentName:"p",href:"/zh/docs/Metrics/DeploymentFrequency"},"Deployment Frequency"),"."),(0,s.kt)("b",null,"Data Sources Required"),(0,s.kt)("p",null,"This metric relies on PR/MRs collected from GitHub or GitLab."),(0,s.kt)("b",null,"Transformation Rules Required"),(0,s.kt)("p",null,"N/A"),(0,s.kt)("b",null,"SQL Queries"),(0,s.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Divide coding tasks into workable and manageable pieces;"),(0,s.kt)("li",{parentName:"ol"},"Use DevLake's dashboards to monitor your delivery progress;"),(0,s.kt)("li",{parentName:"ol"},"Have a habit to check for hanging PRs regularly;"),(0,s.kt)("li",{parentName:"ol"},"Set up alerts for your communication tools (e.g. Slack, Lark) when new PRs are issued;"),(0,s.kt)("li",{parentName:"ol"},"Use automated tests for the initial work;"),(0,s.kt)("li",{parentName:"ol"},"Reduce PR size;"),(0,s.kt)("li",{parentName:"ol"},"Analyze the causes for long reviews.")))}m.isMDXComponent=!0}}]);
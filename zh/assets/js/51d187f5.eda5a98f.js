"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[81578],{56980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));n(61839);const r={title:"DORA - Deployment Frequency(WIP)",description:"DORA - Deployment Frequency\n",sidebar_position:18},o=void 0,l={unversionedId:"Metrics/DeploymentFrequency",id:"version-v0.13/Metrics/DeploymentFrequency",title:"DORA - Deployment Frequency(WIP)",description:"DORA - Deployment Frequency\n",source:"@site/versioned_docs/version-v0.13/Metrics/DeploymentFrequency.md",sourceDirName:"Metrics",slug:"/Metrics/DeploymentFrequency",permalink:"/zh/docs/v0.13/Metrics/DeploymentFrequency",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/Metrics/DeploymentFrequency.md",tags:[],version:"v0.13",sidebarPosition:18,frontMatter:{title:"DORA - Deployment Frequency(WIP)",description:"DORA - Deployment Frequency\n",sidebar_position:18},sidebar:"docsSidebar",previous:{title:"Build Success Rate",permalink:"/zh/docs/v0.13/Metrics/BuildSuccessRate"},next:{title:"DORA - Lead Time for Changes(WIP)",permalink:"/zh/docs/v0.13/Metrics/LeadTimeForChanges"}},s={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],m={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,a.kt)("p",null,"How often an organization deploys code to production or release it to end users."),(0,a.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,a.kt)("p",null,"Deployment frequency reflects the efficiency of a team's deployment. A team that deploys more frequently can deliver the product faster and users' feature requirements can be met faster."),(0,a.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,a.kt)("p",null,"Deployment frequency is calculated based on the number of deployment days, not the number of deployments, e.g.,daily, weekly, monthly, yearly."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Groups"),(0,a.kt)("th",{parentName:"tr",align:null},"Benchmarks"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Elite performers"),(0,a.kt)("td",{parentName:"tr",align:null},"Multiple times a day")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"High performers"),(0,a.kt)("td",{parentName:"tr",align:null},"Once a week to once a month")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Medium performers"),(0,a.kt)("td",{parentName:"tr",align:null},"Once a month to once every six months")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Low performers"),(0,a.kt)("td",{parentName:"tr",align:null},"Less than once every six months")))),(0,a.kt)("p",null,(0,a.kt)("i",null,"Source: 2021 Accelerate State of DevOps, Google")),(0,a.kt)("b",null,"Data Sources Required"),(0,a.kt)("p",null,"This metric relies on deployments collected in multiple ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open APIs of Jenkins, GitLab, GitHub, etc."),(0,a.kt)("li",{parentName:"ul"},"Webhook for general CI tools."),(0,a.kt)("li",{parentName:"ul"},"Releases and PR/MRs from GitHub, GitLab APIs, etc.")),(0,a.kt)("b",null,"Transformation Rules Required"),(0,a.kt)("p",null,"This metric relies on the deployment configuration in Jenkins, GitLab or GitHub transformation rules to let DevLake know what CI builds/jobs can be regarded as deployments."),(0,a.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Trunk development. Work in small batches and often merge their work into shared trunks."),(0,a.kt)("li",{parentName:"ul"},"Integrate CI/CD tools for automated deployment"),(0,a.kt)("li",{parentName:"ul"},"Improve automated test coverage")))}u.isMDXComponent=!0}}]);
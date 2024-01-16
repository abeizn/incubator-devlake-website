"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[37836],{67798:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=i(87462),r=(i(67294),i(3905));i(61839);const o={title:"PR Review Depth",description:"PR Review Depth\n",sidebar_position:21},a=void 0,s={unversionedId:"Metrics/PRReviewDepth",id:"Metrics/PRReviewDepth",title:"PR Review Depth",description:"PR Review Depth\n",source:"@site/docs/Metrics/PRReviewDepth.md",sourceDirName:"Metrics",slug:"/Metrics/PRReviewDepth",permalink:"/docs/Metrics/PRReviewDepth",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/PRReviewDepth.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"PR Review Depth",description:"PR Review Depth\n",sidebar_position:21},sidebar:"docsSidebar",previous:{title:"PR Merge Rate",permalink:"/docs/Metrics/PRMergeRate"},next:{title:"PR Size",permalink:"/docs/Metrics/PRSize"}},l={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in?",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],c={toc:d};function h(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,r.kt)("p",null,"The average number of comments of PRs in the selected time range."),(0,r.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,r.kt)("p",null,"PR Review Depth (in Comments per RR) is related to the quality of code review, indicating how thorough your team reviews PRs."),(0,r.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/livedemo/EngineeringLeads/EngineeringThroughputAndCycleTime"},"Engineering Throughput and Cycle Time")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/livedemo/EngineeringLeads/EngineeringThroughputAndCycleTimeTeamView"},"Engineering Throughput and Cycle Time - Team View"))),(0,r.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,r.kt)("p",null,"This metric is calculated by counting the total number of PR comments divided by the total number of PRs in the selected time range."),(0,r.kt)("b",null,"Data Sources Required"),(0,r.kt)("p",null,"This metric relies on PRs/MRs collected from GitHub, GitLab, BitBucket, Gitee or other code review tools."),(0,r.kt)("b",null,"Data Transformation Required"),(0,r.kt)("p",null,"N/A"),(0,r.kt)("b",null,"SQL Queries"),(0,r.kt)("p",null,"If you want to measure the monthly trend of ",(0,r.kt)("inlineCode",{parentName:"p"},"PR review time")," in the screenshot below, please run the following SQL in Grafana. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(70805).Z,width:"1113",height:"298"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'SELECT\n  DATE_ADD(date(pr.created_date), INTERVAL -$interval(date(pr.created_date))+1 DAY) as time,\n  count(distinct prc.id)/count(pr.id) as "PR Review Depth"\nFROM \n  pull_requests pr\n  left join pull_request_comments prc on pr.id = prc.pull_request_id\nWHERE\n  $__timeFilter(pr.created_date)\n  and pr.base_repo_id in ($repo_id)\n  and pr.merged_date is not null\nGROUP BY 1\n')),(0,r.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Encourage multiple reviewers to review a PR;"),(0,r.kt)("li",{parentName:"ol"},"Review Depth is an indicator for generally how thorough your PRs are reviewed, but it does not mean the deeper the better. In some cases, spending an excessive amount of resources on reviewing PRs is also not recommended.")))}h.isMDXComponent=!0},70805:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/pr-review-depth-monthly-a459a8bf854dbaeb50bc9f84e23fec01.png"}}]);
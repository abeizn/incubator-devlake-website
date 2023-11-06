"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[61230],{66809:(t,i,e)=>{e.r(i),e.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var o=e(87462),r=(e(67294),e(3905));e(61839);const n={title:"Commit Author Count",description:"Commit Author Count\n",sidebar_position:10},s=void 0,a={unversionedId:"Metrics/CommitAuthorCount",id:"Metrics/CommitAuthorCount",title:"Commit Author Count",description:"Commit Author Count\n",source:"@site/docs/Metrics/CommitAuthorCount.md",sourceDirName:"Metrics",slug:"/Metrics/CommitAuthorCount",permalink:"/docs/Metrics/CommitAuthorCount",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/CommitAuthorCount.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Commit Author Count",description:"Commit Author Count\n",sidebar_position:10},sidebar:"docsSidebar",previous:{title:"Commit Count",permalink:"/docs/Metrics/CommitCount"},next:{title:"Added Lines of Code",permalink:"/docs/Metrics/AddedLinesOfCode"}},c={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],m={toc:d};function u(t){let{components:i,...e}=t;return(0,r.kt)("wrapper",(0,o.Z)({},m,e,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,r.kt)("p",null,"The number of commit authors who have committed code."),(0,r.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,r.kt)("p",null,"Take inventory of project/team R&D resource inputs, assess input-output ratio, and rationalize resource deployment."),(0,r.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,r.kt)("p",null,"N/A"),(0,r.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,r.kt)("p",null,"This metric is calculated by counting the number of commit authors in the given data range."),(0,r.kt)("b",null,"Data Sources Required"),(0,r.kt)("p",null,"This metric relies on commits collected from GitHub, GitLab or BitBucket."),(0,r.kt)("b",null,"Data Transformation Required"),(0,r.kt)("p",null,"N/A"),(0,r.kt)("b",null,"SQL Queries"),(0,r.kt)("p",null,"The following SQL shows how to find the ",(0,r.kt)("inlineCode",{parentName:"p"},"commit author count")," in specific repositories, eg. 'repo-1' and 'repo-2'."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT\n  count(distinct c.author_id)\nFROM \n  commits c\n  LEFT JOIN repo_commits rc ON c.sha = rc.commit_sha\n  LEFT JOIN repos r ON r.id = rc.repo_id\nWHERE\n  -- please replace the repo ids with your own, or create a '$repo_id' variable in Grafana\n  r.id in ('repo-1', 'repo-2')\n  and message not like '%Merge%'\n  and $__timeFilter(c.authored_date)\n  -- the following condition will remove the month with incomplete data\n  and c.authored_date >= DATE_ADD(DATE_ADD($__timeFrom(), INTERVAL -DAY($__timeFrom())+1 DAY), INTERVAL +1 MONTH)\n")),(0,r.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,r.kt)("p",null,"As a secondary indicator, this helps assess the labor cost of participating in coding."))}u.isMDXComponent=!0}}]);
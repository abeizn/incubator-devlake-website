"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[7045],{28796:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=i(87462),n=(i(67294),i(3905));i(61839);const a={title:"Code Quality Issue Count",description:"Code Quality Issue Count\n",sidebar_position:30},o=void 0,r={unversionedId:"Metrics/CQIssueCount",id:"version-v0.18/Metrics/CQIssueCount",title:"Code Quality Issue Count",description:"Code Quality Issue Count\n",source:"@site/versioned_docs/version-v0.18/Metrics/CQIssueCount.md",sourceDirName:"Metrics",slug:"/Metrics/CQIssueCount",permalink:"/zh/docs/v0.18/Metrics/CQIssueCount",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.18/Metrics/CQIssueCount.md",tags:[],version:"v0.18",sidebarPosition:30,frontMatter:{title:"Code Quality Issue Count",description:"Code Quality Issue Count\n",sidebar_position:30},sidebar:"docsSidebar",previous:{title:"DORA - Change Failure Rate",permalink:"/zh/docs/v0.18/Metrics/CFR"},next:{title:"Code Quality Test",permalink:"/zh/docs/v0.18/Metrics/CQTest"}},d={},l=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in?",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2}],c={toc:l};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,n.kt)("p",null,"This metric is a the total number of issues found in a project by SonarQube. It includes various types of issues such as bugs, vulnerabilities, code smells, and security hotspots. This metric is collected from SonarQube, check ",(0,n.kt)("a",{parentName:"p",href:"https://docs.sonarqube.org/latest/user-guide/metric-definitions/#issues"},"this doc")," for detailed definition."),(0,n.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,n.kt)("p",null,"Issue provides information about potential problems or issues in the code. Issues can include bugs, vulnerabilities, and code smells, which can all affect the maintainability, reliability, and security of the codebase. By identifying and addressing issues, developers can improve the quality of their code and reduce technical debt. Additionally, tracking issues over time can help to identify trends and measure progress in improving code quality."),(0,n.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/livedemo/DataSources/SonarQube"},"SonarQube"))),(0,n.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,n.kt)("p",null,"This metric is calculated by counting the total number of cq_issues."),(0,n.kt)("b",null,"Data Sources Required"),(0,n.kt)("p",null,"This metric relies on issues collected from SonarQube."),(0,n.kt)("b",null,"Data Transformation Required"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("b",null,"SQL Queries"),(0,n.kt)("p",null,"The following SQL shows how to find issues in specific projects, eg. 'project1' and 'project2'."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"To get the issue count of 'BUG', please add the condition ",(0,n.kt)("inlineCode",{parentName:"li"},"type = BUG"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SELECT\n  count(*) as 'Bugs'\nFROM cq_issues\nWHERE\n  $__timeFilter(created_date)\n  and  project_key in ('project1', 'project2')\n  and `type` = 'BUG'\nORDER BY created_date\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"To get the issue count of 'VULNERABILITY', please add the condition ",(0,n.kt)("inlineCode",{parentName:"li"},"type = VULNERABILITY"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SELECT\n  count(*) as 'Vulnerabilities'\nFROM cq_issues\nWHERE\n  $__timeFilter(created_date)\n  and project_key in ('project1', 'project2')\n  and `type` = 'VULNERABILITY'\nORDER BY created_date\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"To get the issue count of 'HOTSPOTS', please add the condition ",(0,n.kt)("inlineCode",{parentName:"li"},"type = HOTSPOTS"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SELECT\n  COUNT(IF(status = 'TO_REVIEW', 1, NULL)) AS 'Security Hotspots'\nFROM cq_issues\nWHERE\n  $__timeFilter(created_date)\n  and project_key in ('project1', 'project2')\n  and `type` = 'HOTSPOTS'\nORDER BY created_date\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SELECT\n  CONCAT(ROUND(COUNT(IF(status != 'TO_REVIEW', 1, NULL)) / COUNT(*) * 100, 2), '%') AS 'Reviewed'\nFROM cq_issues\nWHERE\n  $__timeFilter(created_date)\n  and project_key in ('project1', 'project2')\n  and `type` = 'HOTSPOTS'\nORDER BY created_date\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"To get the issue count of 'CODE_SMELL', please add the condition ",(0,n.kt)("inlineCode",{parentName:"li"},"type = CODE_SMELL"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SELECT\n    COUNT(if(type = 'CODE_SMELL', 1, null)) as 'Code Smells'\nFROM cq_issues\nWHERE\n  $__timeFilter(created_date)\n  and project_key in ('project1', 'project2')\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(14187).Z,width:"1248",height:"374"})))}u.isMDXComponent=!0},14187:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/issue-type-count-1142fdb52475a7a8ff09a75f359aef74.png"}}]);
"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[97189],{49984:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(61839);const r={title:"GitLab",description:"GitLab Plugin\n"},l=void 0,o={unversionedId:"Plugins/gitlab",id:"version-v0.12/Plugins/gitlab",title:"GitLab",description:"GitLab Plugin\n",source:"@site/versioned_docs/version-v0.12/Plugins/gitlab.md",sourceDirName:"Plugins",slug:"/Plugins/gitlab",permalink:"/docs/v0.12/Plugins/gitlab",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.12/Plugins/gitlab.md",tags:[],version:"v0.12",frontMatter:{title:"GitLab",description:"GitLab Plugin\n"},sidebar:"docsSidebar",previous:{title:"GitHub",permalink:"/docs/v0.12/Plugins/github"},next:{title:"Jenkins",permalink:"/docs/v0.12/Plugins/jenkins"}},u={},d=[{value:"Metrics",id:"metrics",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Gathering Data with GitLab",id:"gathering-data-with-gitlab",level:2}],s={toc:d};function m(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"metrics"},"Metrics"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Pull Request Count"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of Pull/Merge Requests")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Pull Request Pass Rate"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Ratio of Pull/Merge Review requests to merged")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Pull Request Reviewer Count"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of Pull/Merge Reviewers")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Pull Request Review Time"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Time from Pull/Merge created time until merged")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Commit Author Count"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of Contributors")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Commit Count"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of Commits")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Added Lines"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Accumulated Number of New Lines")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Deleted Lines"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Accumulated Number of Removed Lines")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Pull Request Review Rounds"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of cycles of commits followed by comments/final merge")))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Configuring GitLab via ",(0,i.kt)("a",{parentName:"p",href:"/docs/v0.12/UserManuals/ConfigUI/GitLab"},"config-ui"),"."),(0,i.kt)("h2",{id:"gathering-data-with-gitlab"},"Gathering Data with GitLab"),(0,i.kt)("p",null,"To collect data, you can either utilize the ",(0,i.kt)("inlineCode",{parentName:"p"},"config-ui")," or make a POST request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/pipelines")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "gitlab 20211126",\n    "plan": [[{\n        "plugin": "gitlab",\n        "options": {\n            "connectionId": 1,\n            "projectId": <Your gitlab project id>\n        }\n    }]]\n}\n\'\n')),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("br",null))}m.isMDXComponent=!0}}]);
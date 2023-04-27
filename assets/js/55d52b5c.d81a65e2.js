"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[6805],{64885:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var s=t(87462),l=(t(67294),t(3905));t(61839);const n={title:"System Tables",description:"Stores DevLake's own entities\n",sidebar_position:4},i=void 0,o={unversionedId:"DataModels/SystemTables",id:"version-v0.16/DataModels/SystemTables",title:"System Tables",description:"Stores DevLake's own entities\n",source:"@site/versioned_docs/version-v0.16/DataModels/SystemTables.md",sourceDirName:"DataModels",slug:"/DataModels/SystemTables",permalink:"/docs/DataModels/SystemTables",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.16/DataModels/SystemTables.md",tags:[],version:"v0.16",sidebarPosition:4,frontMatter:{title:"System Tables",description:"Stores DevLake's own entities\n",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Raw Layer Schema",permalink:"/docs/DataModels/RawLayerSchema"},next:{title:"Developer Manuals",permalink:"/docs/DeveloperManuals"}},r={},d=[{value:"Summary",id:"summary",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Data Models",id:"data-models",level:2}],u={toc:d};function m(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,s.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("p",null,"This document describes Apache DevLake's data models of its own entities. These tables are used and managed by the Devlake framework. "),(0,l.kt)("h2",{id:"use-cases"},"Use Cases"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"As a user, you can check ",(0,l.kt)("inlineCode",{parentName:"li"},"_devlake_blueprints")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"_devlake_pipelines")," when failing to collect data via DevLake's blueprint."),(0,l.kt)("li",{parentName:"ol"},"As a contributor, you can check these tables to debug task concurrency or data migration features.")),(0,l.kt)("h2",{id:"data-models"},"Data Models"),(0,l.kt)("p",null,"These tables start with a prefix ",(0,l.kt)("inlineCode",{parentName:"p"},"_devlake"),". Unlike raw or tool data tables, DevLake only contains one set of system tables. The naming convension of these tables is ",(0,l.kt)("inlineCode",{parentName:"p"},"_raw_{plugin}_{entity}"),", such as "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"_devlake_blueprints"),(0,l.kt)("li",{parentName:"ul"},"_devlake_pipelines"),(0,l.kt)("li",{parentName:"ul"},"_devlake_tasks"),(0,l.kt)("li",{parentName:"ul"},"_devlake_subtasks"),(0,l.kt)("li",{parentName:"ul"},"...")),(0,l.kt)("p",null,"Normally, you do not need to use these tables, unless you have one of the above use cases."))}m.isMDXComponent=!0}}]);
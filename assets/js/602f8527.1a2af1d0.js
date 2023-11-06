"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[12596],{57366:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>n,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=t(87462),r=(t(67294),t(3905));t(61839);const o={title:"Raw Layer Schema",description:"Caches raw API responses from data source plugins\n",sidebar_position:3},i=void 0,l={unversionedId:"DataModels/RawLayerSchema",id:"version-v0.18/DataModels/RawLayerSchema",title:"Raw Layer Schema",description:"Caches raw API responses from data source plugins\n",source:"@site/versioned_docs/version-v0.18/DataModels/RawLayerSchema.md",sourceDirName:"DataModels",slug:"/DataModels/RawLayerSchema",permalink:"/docs/v0.18/DataModels/RawLayerSchema",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.18/DataModels/RawLayerSchema.md",tags:[],version:"v0.18",sidebarPosition:3,frontMatter:{title:"Raw Layer Schema",description:"Caches raw API responses from data source plugins\n",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Tool Layer Schema",permalink:"/docs/v0.18/DataModels/ToolLayerSchema"},next:{title:"System Tables",permalink:"/docs/v0.18/DataModels/SystemTables"}},n={},d=[{value:"Summary",id:"summary",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Data Models",id:"data-models",level:2}],c={toc:d};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,s.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"This document describes Apache DevLake's raw layer schema."),(0,r.kt)("p",null,"Referring to DevLake's ",(0,r.kt)("a",{parentName:"p",href:"/docs/v0.18/Overview/Architecture"},"architecture"),", the raw layer stores the API responses from data sources (DevOps tools) in JSON. This saves developers' time if the raw data is to be transformed differently later on. Please note that communicating with data sources' APIs is usually the most time-consuming step."),(0,r.kt)("h2",{id:"use-cases"},"Use Cases"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"As a user, you can check raw data tables to verify data quality if you have concerns about the ",(0,r.kt)("a",{parentName:"li",href:"/docs/v0.18/DataModels/DevLakeDomainLayerSchema"},"domain layer data"),"."),(0,r.kt)("li",{parentName:"ol"},"As a developer, you can customize domain layer schema based on raw data tables via ",(0,r.kt)("a",{parentName:"li",href:"/docs/v0.18/Plugins/customize"},"customize"),".")),(0,r.kt)("h2",{id:"data-models"},"Data Models"),(0,r.kt)("p",null,"Raw layer tables start with a prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"_raw_"),". Each plugin contains multiple raw data tables, the naming convension of these tables is ",(0,r.kt)("inlineCode",{parentName:"p"},"_raw_{plugin}_{entity}"),". For instance,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"_raw_jira_issues"),(0,r.kt)("li",{parentName:"ul"},"_raw_jira_boards"),(0,r.kt)("li",{parentName:"ul"},"_raw_jira_board_issues"),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("p",null,"Normally, you do not need to use these tables, unless you have one of the above use cases."))}m.isMDXComponent=!0}}]);
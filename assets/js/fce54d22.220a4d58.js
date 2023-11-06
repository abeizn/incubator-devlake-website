"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1173],{44312:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var i=t(87462),o=(t(67294),t(3905));t(61839);const a={title:"Gitee(WIP)",description:"Gitee Plugin\n"},l=void 0,r={unversionedId:"Plugins/gitee",id:"version-v0.17/Plugins/gitee",title:"Gitee(WIP)",description:"Gitee Plugin\n",source:"@site/versioned_docs/version-v0.17/Plugins/gitee.md",sourceDirName:"Plugins",slug:"/Plugins/gitee",permalink:"/docs/v0.17/Plugins/gitee",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.17/Plugins/gitee.md",tags:[],version:"v0.17",frontMatter:{title:"Gitee(WIP)",description:"Gitee Plugin\n"},sidebar:"docsSidebar",previous:{title:"Feishu",permalink:"/docs/v0.17/Plugins/feishu"},next:{title:"GitExtractor",permalink:"/docs/v0.17/Plugins/gitextractor"}},p={},s=[{value:"Summary",id:"summary",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Collect data from Gitee",id:"collect-data-from-gitee",level:2}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This plugin collects ",(0,o.kt)("inlineCode",{parentName:"p"},"Gitee")," data through ",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/api/v5/swagger"},"Gitee Openapi"),"."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"In order to fully use this plugin, you will need to get ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," on the Gitee website."),(0,o.kt)("p",null,"A connection should be created before you can collection any data. Currently, this plugin supports creating connection by requesting ",(0,o.kt)("inlineCode",{parentName:"p"},"connections")," API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/plugins/gitee/connections\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "gitee",\n    "endpoint": "https://gitee.com/api/v5/",\n    "proxy": "http://localhost:1080",\n    "rateLimitPerHour": 20000,\n    "token": "<YOUR_TOKEN>"\n}\n\'\n')),(0,o.kt)("h2",{id:"collect-data-from-gitee"},"Collect data from Gitee"),(0,o.kt)("p",null,"In order to collect data, you have to compose a JSON looks like following one, and send it by selecting ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced Mode")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"Create Pipeline Run")," page:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Configure-UI Mode")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "gitee",\n      "options": {\n        "connectionId": 1,\n        "repo": "lake",\n        "owner": "merico-dev"\n      }\n    }\n  ]\n]\n')),(0,o.kt)("p",null,"and if you want to perform certain subtasks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "gitee",\n      "subtasks": ["collectXXX", "extractXXX", "convertXXX"],\n      "options": {\n        "connectionId": 1,\n        "repo": "lake",\n        "owner": "merico-dev"\n      }\n    }\n  ]\n]\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Curl Mode:\nYou can also trigger data collection by making a POST request to ",(0,o.kt)("inlineCode",{parentName:"li"},"/pipelines"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "gitee 20211126",\n    "plan": [[{\n        "plugin": "gitee",\n        "options": {\n            "connectionId": 1,\n            "repo": "lake",\n            "owner": "merico-dev"\n        }\n    }]]\n}\n\'\n')),(0,o.kt)("p",null,"and if you want to perform certain subtasks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "gitee 20211126",\n    "plan": [[{\n        "plugin": "gitee",\n        "subtasks": ["collectXXX", "extractXXX", "convertXXX"],\n        "options": {\n            "connectionId": 1,\n            "repo": "lake",\n            "owner": "merico-dev"\n        }\n    }]]\n}\n\'\n')))}u.isMDXComponent=!0}}]);
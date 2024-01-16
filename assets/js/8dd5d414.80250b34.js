"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[64057],{50053:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(87462),i=(o(67294),o(3905));o(61839);const a={title:"Installation Troubleshooting",sidebar_position:1,description:"Installation Troubleshooting\n"},r=void 0,s={unversionedId:"Troubleshooting/Installation",id:"Troubleshooting/Installation",title:"Installation Troubleshooting",description:"Installation Troubleshooting\n",source:"@site/docs/Troubleshooting/Installation.md",sourceDirName:"Troubleshooting",slug:"/Troubleshooting/Installation",permalink:"/docs/Troubleshooting/Installation",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Troubleshooting/Installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Installation Troubleshooting",sidebar_position:1,description:"Installation Troubleshooting\n"},sidebar:"docsSidebar",previous:{title:"Troubleshooting",permalink:"/docs/Troubleshooting"},next:{title:"Configuration and Blueprint Troubleshooting",permalink:"/docs/Troubleshooting/Configuration"}},l={},c=[{value:"<code>panic: invalid encKey</code> error",id:"panic-invalid-enckey-error",level:3},{value:"Go Panic in OpenShift Kubernetes",id:"go-panic-in-openshift-kubernetes",level:3},{value:"None of them solve your problem?",id:"none-of-them-solve-your-problem",level:2}],d={toc:c};function h(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"panic-invalid-enckey-error"},(0,i.kt)("inlineCode",{parentName:"h3"},"panic: invalid encKey")," error"),(0,i.kt)("p",null,"The cause is the ",(0,i.kt)("inlineCode",{parentName:"p"},"devlake")," container trying to decrypt data in the database with the wrong key.\nPlease check the ",(0,i.kt)("a",{parentName:"p",href:"/docs/GettingStarted/Upgrade"},"GettingStarted/Upgrade")," doc for more detail."),(0,i.kt)("h3",{id:"go-panic-in-openshift-kubernetes"},"Go Panic in OpenShift Kubernetes"),(0,i.kt)("p",null,"One of the known root causes of the phonomenon is the Dynatrace agent being injected into the container.\nExcluding the namespace from the Dynatrace deployments should fix the problem.\nCheck ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues/5612"},"#5612")," if you needed more detail."),(0,i.kt)("h2",{id:"none-of-them-solve-your-problem"},"None of them solve your problem?"),(0,i.kt)("p",null,"Sorry for the inconvenience, please help us improve by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"creating an issue")))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[5280],{44744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));n(61839);const o={title:"Upgrade",sidebar_position:9,description:"How to upgrade your Apache DevLake to a newer version"},r=void 0,p={unversionedId:"GettingStarted/Upgrade",id:"GettingStarted/Upgrade",title:"Upgrade",description:"How to upgrade your Apache DevLake to a newer version",source:"@site/docs/GettingStarted/Upgrade.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/Upgrade",permalink:"/docs/next/GettingStarted/Upgrade",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/GettingStarted/Upgrade.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Upgrade",sidebar_position:9,description:"How to upgrade your Apache DevLake to a newer version"},sidebar:"docsSidebar",previous:{title:"Security and Authentication",permalink:"/docs/next/GettingStarted/Authentication"},next:{title:"Configuration",permalink:"/docs/next/Configuration"}},s={},d=[{value:"Upgrade Options",id:"upgrade-options",level:2},{value:"Option 1: Update the image tags to a newer version",id:"option-1-update-the-image-tags-to-a-newer-version",level:3},{value:"Option 2: Deploy a new instance while keeping the configuration",id:"option-2-deploy-a-new-instance-while-keeping-the-configuration",level:3},{value:"Two Things to Note",id:"two-things-to-note",level:2}],l={toc:d};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"upgrade-options"},"Upgrade Options"),(0,i.kt)("h3",{id:"option-1-update-the-image-tags-to-a-newer-version"},"Option 1: Update the image tags to a newer version"),(0,i.kt)("p",null,"This is recommended way to upgrade your instance, it is the easiest way to go. However, the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," or the ",(0,i.kt)("inlineCode",{parentName:"p"},"helm chart")," might change over time (e.g., a new persistent volume is required for new feature to work properly), you may have to adopt these changes manually or opt for the next option."),(0,i.kt)("h3",{id:"option-2-deploy-a-new-instance-while-keeping-the-configuration"},"Option 2: Deploy a new instance while keeping the configuration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Dump the ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file from the existing ",(0,i.kt)("inlineCode",{parentName:"li"},"devlake")," container and shut it down"),(0,i.kt)("li",{parentName:"ol"},"Fire up the new container with the ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file mounted to the correct path")),(0,i.kt)("h2",{id:"two-things-to-note"},"Two Things to Note"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Database migration.\nStarting from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/releases/tag/v0.10.0"},"Release v0.10.0 \xb7 apache/incubator-devlake"),",\nDevLake auto-migrates your table schema and records to the newer version. Normally you don't need to do anything for the migration. However, please keep in mind the migration is one-way only, ",(0,i.kt)("strong",{parentName:"p"},"downgrade is not supported"),". Please consider backing up your database if there's any data you'd like to keep.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Preserve the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file.\nDevLake reads and writes some configurations from/to the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file. An example is the ",(0,i.kt)("inlineCode",{parentName:"p"},"ENCODE_KEY")," generated by the ",(0,i.kt)("inlineCode",{parentName:"p"},"devlake")," container during the first boot. ",(0,i.kt)("inlineCode",{parentName:"p"},"ENCODE_KEY")," is used to encrypt sensitve information in the database, e.g., personal access tokens and passwords. Normally, users don't need to worry about the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file during upgrade. But in the following scenarios, users may want to back up the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"When a user deploys a new DevLake instance and points it to an existing cloud managed database. Since the existing database is encrypted with the ",(0,i.kt)("inlineCode",{parentName:"li"},"ENCODE_KEY")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file, the user needs to port the old ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file to the new DevLake instance."),(0,i.kt)("li",{parentName:"ol"},"When a user deploys DevLake to AWS ECS but did not properly persist the ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file.")),(0,i.kt)("p",{parentName:"li"},"To back up ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file, users can log into the ",(0,i.kt)("inlineCode",{parentName:"p"},"devlake")," container and dump the file somewhere else. The file path in the container is ",(0,i.kt)("inlineCode",{parentName:"p"},"/app/.env")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"/app/config/.env")," if you were using ",(0,i.kt)("inlineCode",{parentName:"p"},"helm")," (unless the ",(0,i.kt)("inlineCode",{parentName:"p"},"ENV_PATH")," environment variable is specified)."))))}h.isMDXComponent=!0}}]);
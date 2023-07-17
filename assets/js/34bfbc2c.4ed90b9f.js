"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[53920],{250:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=i(87462),a=(i(67294),i(3905));i(61839);const o={title:"Notifications",description:"Notifications\n",sidebar_position:4},s=void 0,l={unversionedId:"DeveloperManuals/Notifications",id:"DeveloperManuals/Notifications",title:"Notifications",description:"Notifications\n",source:"@site/docs/DeveloperManuals/Notifications.md",sourceDirName:"DeveloperManuals",slug:"/DeveloperManuals/Notifications",permalink:"/docs/next/DeveloperManuals/Notifications",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/DeveloperManuals/Notifications.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Notifications",description:"Notifications\n",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"DB Migration",permalink:"/docs/next/DeveloperManuals/DBMigration"},next:{title:"Dal",permalink:"/docs/next/DeveloperManuals/Dal"}},r={},u=[{value:"Request",id:"request",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Signature",id:"signature",level:2}],c={toc:u};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("p",null,"Example request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'POST /lake/notify?nouce=3-FDXxIootApWxEVtz&sign=424c2f6159bd9e9828924a53f9911059433dc14328a031e91f9802f062b495d5\n\n{"TaskID":39,"PluginName":"jenkins","CreatedAt":"2021-09-30T15:28:00.389+08:00","UpdatedAt":"2021-09-30T15:28:00.785+08:00"}\n')),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"If you want to use the notification feature, you should add two configuration key to ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# .env\n# notification request url, e.g.: http://example.com/lake/notify\nNOTIFICATION_ENDPOINT=\n# secret is used to calculate signature\nNOTIFICATION_SECRET=\n")),(0,a.kt)("h2",{id:"signature"},"Signature"),(0,a.kt)("p",null,"You should check the signature before accepting the notification request. We use sha256 algorithm to calculate the checksum."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// calculate checksum\nsum := sha256.Sum256([]byte(requestBody + NOTIFICATION_SECRET + nouce))\nreturn hex.EncodeToString(sum[:])\n")))}d.isMDXComponent=!0}}]);
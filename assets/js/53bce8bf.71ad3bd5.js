"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[61169],{69645:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var n=i(87462),o=(i(67294),i(3905));i(61839);const a={title:"PR Deploy Time",description:"PR Deploy Time\n",sidebar_position:18},l=void 0,r={unversionedId:"Metrics/PRDeployTime",id:"Metrics/PRDeployTime",title:"PR Deploy Time",description:"PR Deploy Time\n",source:"@site/docs/Metrics/PRDeployTime.md",sourceDirName:"Metrics",slug:"/Metrics/PRDeployTime",permalink:"/docs/Metrics/PRDeployTime",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/PRDeployTime.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"PR Deploy Time",description:"PR Deploy Time\n",sidebar_position:18},sidebar:"docsSidebar",previous:{title:"PR Review Time",permalink:"/docs/Metrics/PRReviewTime"},next:{title:"PR Time To Merge",permalink:"/docs/Metrics/PRTimeToMerge"}},s={},p=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in?",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,o.kt)("p",null,"The time it takes from when a PR is merged to when it is deployed."),(0,o.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Based on historical data, establish a baseline of the delivery capacity of a single iteration to improve the organization and planning of R&D resources."),(0,o.kt)("li",{parentName:"ol"},"Evaluate whether the delivery capacity matches the business phase and demand scale. Identify key bottlenecks and reasonably allocate resources.")),(0,o.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/livedemo/EngineeringLeads/EngineeringThroughputAndCycleTime"},"Engineering Throughput and Cycle Time")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/livedemo/EngineeringLeads/EngineeringThroughputAndCycleTimeTeamView"},"Engineering Throughput and Cycle Time - Team View"))),(0,o.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PR deploy time")," is calculated by subtracting a PR's deployed_date and merged_date. Hence, we should associate PR/MRs with deployments."),(0,o.kt)("p",null,"Here are the detailed steps:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(89069).Z,width:"536",height:"93"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Find the ",(0,o.kt)("a",{parentName:"li",href:"https://devlake.apache.org/docs/Plugins/refdiff/"},"commits diff")," between two consecutive deployments by deployments' commit_sha\nunder the same scope and environment (in terms of TESTING/STAGING/PRODUCTION),\nfor example, we will get commit-2 and commit-3 by calculating commits_diff between deployment-1 and deployment-2, which means commit-2 and commit-3 are deployed by deployment-2 "),(0,o.kt)("li",{parentName:"ol"},"Connect PR/MR and commits_diff through merge_commit or pr_commit, for example,\nwe get pr-3 connected to commit-3"),(0,o.kt)("li",{parentName:"ol"},"Now we can get pr-3's deploy time by finish_time of deployment-2 minus merge_time of pr-3.")),(0,o.kt)("b",null,"Data Transformation Required"),(0,o.kt)("p",null,"This metric relies on two sources:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'PR/MRs collected from GitHub or GitLab by enabling "Code Review" under the Data Entities section.'),(0,o.kt)("li",{parentName:"ol"},"Deployments collected in one of the following ways::",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Open APIs of Jenkins, GitLab, GitHub, etc by enabling "CICD" under the Data Entities section.'),(0,o.kt)("li",{parentName:"ul"},"Webhook for general CI tools."),(0,o.kt)("li",{parentName:"ul"},"Releases and PR/MRs from GitHub, GitLab APIs, etc.")))),(0,o.kt)("b",null,"SQL Queries"),(0,o.kt)("p",null,"The following SQL shows how to find the ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy time")," of a specific PR. DevLake pre-calculates the metric and stores it in table.project_pr_metrics."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT\n  pr_deploy_time/60 as 'PR Deploy Time(h)'\nFROM\n  project_pr_metrics\n")),(0,o.kt)("p",null,"If you want to measure the monthly trend of ",(0,o.kt)("inlineCode",{parentName:"p"},"PR deploy time")," in the screenshot below, please run the following SQL in Grafana. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(65496).Z,width:"1083",height:"342"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT \n  DATE_ADD(date(pr.created_date), INTERVAL -DAY(date(pr.created_date))+1 DAY) as time,\n  avg(ppm.pr_deploy_time)/60 as 'PR Deploy Time(h)'\nFROM \n  pull_requests pr\n  JOIN project_pr_metrics ppm ON pr.id = ppm.id\nGROUP BY 1\nORDER BY 1\n")),(0,o.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,o.kt)("p",null,"N/A"))}m.isMDXComponent=!0},89069:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhgAAABdCAYAAADnjh/mAAASwElEQVR4Xu3diY/U5B/Hcf8mNB6boAhGESSrgiiIQS5BQTSCF7usUUA8USMaMIog3ooYBEVBVkTFI6iI54KKgAcgiOvKDc8v7+eXZ9KtszN9Zp6ZdrqfV9K4dGba+rRP++1znmJEREREAjslvkJERESkWgowREREJDgFGCIiIhKcAgwREREJTgGGiIiIBKcAQ0RERIJTgCEiIiLBKcAQkYb0xx9/mNWrV5tdu3bFPxKRDFCAISINp62tzUyYMMEsXLjQTJo0yVxzzTXm0KFD8a+JSIoUYIhIQ9m8ebMNLqJGjRpl1q5d222diKRLAYaI1NTEiRPNpk2bzPjx401zc7OZMWOGOXDggP1sx44dpqWlxSxfvtwMHjzY3HvvvbFf/9f27dv/Uy0ybtw4s3Hjxm7rRCRdCjBEpKb69etnpk2bZv79919z8uRJs3TpUtPa2mo/27p1q+nbt6+58cYbTUdHh9m7d2/s1z3r7Ow0a9asMbNnz7ZBy5EjR+JfEZEUKcAQkZoiwGhvby/8m7YS/fv3N0ePHrUBRp8+fWyDTV+7d+828+fPt9Uj/FcBhki2KMAQkZoiwNizZ0+3daNHjzZbtmyxAcawYcO6fbZo0SK7Lr6MHDmy2/eipkyZYlatWhVfLSIpUoAhIjVFgBFtH3H8+HG7jioOAowRI0ZEvm3MsWPHzOHDh4suoAfJypUru/2G3iTz5s3rtk5E0qUAQ0RqimBi5syZ5uDBg+bEiRNmxYoVZvLkyfazYgFGOcuWLTPDhw83XV1d9t9UrwwZMsSsX78+9k0RSZMCDBGpKQKMd955xwwdOtRWddCThAadqCTAIEhZsGCB3R7tL5qamszixYvjXxORlCnAEJGaIsDYv3+/rRqhYWYo9Eih9IIqFRHJHgUYIlJTLsAQkd5FAYaI1BTVGYyBISK9iwIMERERCU4BhoiIiASnAENERESCU4AhIiIiwSnAEBERkeAUYIiIiEhwCjBEREQkOAUYIiIiEpwCDBEREQlOAYaIiIgEpwBDREREgkstwPjuu+/MF198EV/trb293fz+++/x1bmybds289dff8VXp2rixImmT58+WgIspGU96dyFW2p57v7880/z9ttvx1d76w33SJ4lK1eutLPrSnakFmA8++yzZv78+fHV3qZOnWo++eST+OpM2rJli3nxxRfjq3t06NAhm06nnXaa2bBhQ/zjVMVvtFqqW+opvm8t1S218s0335jRo0fHV3vL8z3y5MmTZubMmWbYsGFm4cKFZtKkSWbatGnm2LFj8a9KChRg1NFrr71m7r///vjqHo0dO9asWLHCXHvttZkNMKQ6aaRjGvvMo1qnY28MMHzvke+9955pbm62gYZz+eWXm3Xr1kW+JWmpW4CxceNGM3LkSHPRRReZefPmmWeeeaYQYJw4ccI8/fTT5uKLL7af33XXXYXpndesWWNefvlle9Fddtll9uJhnRPNPEePHrXbvOSSS+y27r777sJ25syZYz799NPC77gg+e1PP/1kHn30UXthT5gwwQwcONAe399//22mT59uBg8ebB588EFz4MAB+7tyx7po0SJ7rPzulltuMZs3b7afzZ49264bMGCAueqqq2wVUTlHjhyx/73++usVYORUGumYxj7zKHQ67tq1y1x33XX2HnTTTTeZDz/8sBBglLvvJL1HgqqEK664wm6Hz3bu3GnXN+I98rnnnrPbi5oyZYp9MZP01SXA4MI7//zzzdq1a20QwEXGheQCDEozeIj+9ttvpquryyxYsMBeeHj11VdN3759bWYDdWwEENu3b7f/jmaeBx54wNxxxx32wXz8+HHz+OOP2+IycMHdeuut9m9wUQ8dOtRmottuu80MHz7cZjTqPUeMGGGj4q1bt9rjaWtrMy+99JL9XbljPeOMM2wwQBEd+xw1apT9jAz2wgsv2KDnn3/+sceXlAKM/EojHdPYZx6FTkfuFUuWLLH3CqoKxo8fXwgwyt13kt4jebPn/sZ9DtxXBg0aZPfZyPdI5+effzZNTU1235K+ugQYNFSaNWtWt3WTJ08uBBgXXHCB+fLLLwufHTx40Jxzzjlm37599oIkIo968sknzdKlS+3fLvMcPnzYtlVwmQpcsKeffrp9M+Dvfv36mf3799vP7rnnHhv9gszz/PPPF373xBNPmJaWlsK/P/roI1tNgXLHyhuIQyTfv39/s2fPHvtv3+I/RwFGfqWRjmnsM49CpiNBAW/7UZQCuACj3H0nyT0SlEAsX748+lVbFUupRiPfI/H111/bF1f+XyQb6hJgEJFy4URRrEWAQUNGMumVV15pI1m3EB1///339oLkQo8iUifTwGUe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"},65496:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/pr-deploy-time-monthly-cc8f4e0f2bb961f51b6766625fcaf364.png"}}]);
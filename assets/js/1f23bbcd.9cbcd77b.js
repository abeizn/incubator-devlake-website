"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[99856],{6413:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=o(87462),i=(o(67294),o(3905));const a={title:"Development Workflow",sidebar_position:3},r="Development Workflow",s={unversionedId:"MakingContributions/development-workflow",id:"MakingContributions/development-workflow",title:"Development Workflow",description:"This document shows the workflow of how to develop DevLake.",source:"@site/community/MakingContributions/development-workflow.md",sourceDirName:"MakingContributions",slug:"/MakingContributions/development-workflow",permalink:"/community/MakingContributions/development-workflow",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Development Workflow",sidebar_position:3},sidebar:"communitySidebar",previous:{title:"Contributing to Issues",permalink:"/community/MakingContributions/fix-or-create-issues"},next:{title:"Becoming a Committer",permalink:"/community/MakingContributions/contributor-growth-program"}},l={},p=[{value:"Step 1 - Fork the repo",id:"step-1---fork-the-repo",level:2},{value:"Step 2 - Clone the repo",id:"step-2---clone-the-repo",level:2},{value:"Step 3 - Keep your branch in sync",id:"step-3---keep-your-branch-in-sync",level:2},{value:"Step 4 - Coding",id:"step-4---coding",level:2},{value:"Step 5 - Commit &amp; Push",id:"step-5---commit--push",level:2},{value:"Style guides",id:"style-guides",level:3},{value:"Git Commit message",id:"git-commit-message",level:5},{value:"Commit tool",id:"commit-tool",level:5}],c={toc:p};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"development-workflow"},"Development Workflow"),(0,i.kt)("p",null,"This document shows the workflow of how to develop DevLake."),(0,i.kt)("h2",{id:"step-1---fork-the-repo"},"Step 1 - Fork the repo"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Visit the DevLake repo: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake"},"https://github.com/apache/incubator-devlake"),";"),(0,i.kt)("li",{parentName:"ol"},"Click the Fork button to create a fork of the DevLake;"),(0,i.kt)("li",{parentName:"ol"},"We assume your fork is called ",(0,i.kt)("inlineCode",{parentName:"li"},"https://github.com/{user}/{repo}"),".")),(0,i.kt)("h2",{id:"step-2---clone-the-repo"},"Step 2 - Clone the repo"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create your clone locally")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p ${WORKING_PATH}\ncd ${WORKING_PATH}\n# You can also use the url: github.com/apache/incubator-devlake\n# if your ssh configuration is proper\ngit clone https://github.com/{user}/{repo}.git\n\ncd ${PROJECT}\n\ngit remote add upstream https://github.com/apache/incubator-devlake.git\n# Never push to upstream locally\ngit remote set-url --push upstream no_push\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Confirm the remotes you've set is make sense")),(0,i.kt)("p",null,"Execute ",(0,i.kt)("inlineCode",{parentName:"p"},"git remote -v")," and you'll see output like below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"origin  github.com/apache/incubator-devlake.git (fetch)\norigin  github.com/apache/incubator-devlake.git (push)\nupstream        https://github.com/apache/incubator-devlake.git (fetch)\nupstream        no_push (push)\n")),(0,i.kt)("h2",{id:"step-3---keep-your-branch-in-sync"},"Step 3 - Keep your branch in sync"),(0,i.kt)("p",null,"You will often need to update your local code to keep in sync with upstream"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git fetch upstream\ngit checkout main\ngit rebase upstream/main\n")),(0,i.kt)("h2",{id:"step-4---coding"},"Step 4 - Coding"),(0,i.kt)("p",null,"First, you need to pull a new branch, the name is according to your own taste."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout -b feat-xxx\n")),(0,i.kt)("p",null,"Then start coding."),(0,i.kt)("h2",{id:"step-5---commit--push"},"Step 5 - Commit & Push"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'git add <file>\ngit commit -s -m "some description here"\ngit push -f origin feat-xxx\n')),(0,i.kt)("h3",{id:"style-guides"},"Style guides"),(0,i.kt)("h5",{id:"git-commit-message"},"Git Commit message"),(0,i.kt)("p",null,"We follow the ",(0,i.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/#summary"},"conventional commits")," guidelines."),(0,i.kt)("h5",{id:"commit-tool"},"Commit tool"),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lintingzhen/commitizen-go"},"https://github.com/lintingzhen/commitizen-go")," to author our commits."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> git cz\n\ncz-cli@4.2.4, cz-conventional-changelog@3.3.0\n\n? Select the type of change that you're committing: (Use arrow keys)\n> feat:     A new feature\n  fix:      A bug fix\n  docs:     Documentation only changes\n  style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)\n  refactor: A code change that neither fixes a bug nor adds a feature\n  perf:     A code change that improves performance\n  test:     Adding missing tests or correcting existing tests\n(Move up and down to reveal more choices)\n? What is the scope of this change (e.g. component or file name): (press enter to skip)\n? Write a short, imperative tense description of the change (max 93 chars):\n (23) add commit message tool\n? Provide a longer description of the change: (press enter to skip)\n\n? Are there any breaking changes? No\n? Does this change affect any open issues? No\n[chore/commit_message dc34f57] chore: add commit message tool\n 5 files changed, 585 insertions(+), 4 deletions(-)\n")),(0,i.kt)("p",null,"Then you can create a ",(0,i.kt)("inlineCode",{parentName:"p"},"pr")," on GitHub."))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4934],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=i,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8543:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={title:"DB Migration",description:"DB Migration\n"},c="Migrations (Database)",l={unversionedId:"UserManuals/MIGRATIONS",id:"UserManuals/MIGRATIONS",title:"DB Migration",description:"DB Migration\n",source:"@site/docs/04-UserManuals/MIGRATIONS.md",sourceDirName:"04-UserManuals",slug:"/UserManuals/MIGRATIONS",permalink:"/zh/docs/UserManuals/MIGRATIONS",tags:[],version:"current",frontMatter:{title:"DB Migration",description:"DB Migration\n"},sidebar:"docsSidebar",previous:{title:"How to use Grafana",permalink:"/zh/docs/UserManuals/GRAFANA"},next:{title:"Notifications",permalink:"/zh/docs/UserManuals/NOTIFICATION"}},u={},p=[{value:"Summary",id:"summary",level:2},{value:"Migration script",id:"migration-script",level:2},{value:"Table <code>migration_history</code>",id:"table-migration_history",level:2},{value:"How it Works",id:"how-it-works",level:2}],m={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migrations-database"},"Migrations (Database)"),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Starting in v0.10.0, DevLake provides a lightweight migration tool for executing migration scripts.\nBoth framework itself and plugins define their migration scripts in their own migration folder.\nThe migration scripts are written with gorm in Golang to support different SQL dialects."),(0,a.kt)("h2",{id:"migration-script"},"Migration script"),(0,a.kt)("p",null,"Migration script describes how to do database migration.\nThey implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"Script")," interface.\nWhen DevLake starts, scripts register themselves to the framework by invoking the ",(0,a.kt)("inlineCode",{parentName:"p"},"Register")," function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Script interface {\n    Up(ctx context.Context, db *gorm.DB) error\n    Version() uint64\n    Name() string\n}\n")),(0,a.kt)("h2",{id:"table-migration_history"},"Table ",(0,a.kt)("inlineCode",{parentName:"h2"},"migration_history")),(0,a.kt)("p",null,"The table tracks migration scripts execution and schemas changes.\nFrom which, DevLake could figure out the current state of database schemas."),(0,a.kt)("h2",{id:"how-it-works"},"How it Works"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"check ",(0,a.kt)("inlineCode",{parentName:"li"},"migration_history")," table, calculate all the migration scripts need to be executed."),(0,a.kt)("li",{parentName:"ol"},"sort scripts by Version in ascending order."),(0,a.kt)("li",{parentName:"ol"},"execute scripts."),(0,a.kt)("li",{parentName:"ol"},"save results in the ",(0,a.kt)("inlineCode",{parentName:"li"},"migration_history")," table.")))}f.isMDXComponent=!0}}]);
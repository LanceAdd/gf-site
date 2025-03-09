"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["91019"],{630084:function(e,t,n){n.r(t),n.d(t,{metadata:()=>o,contentTitle:()=>a,default:()=>f,assets:()=>c,toc:()=>d,frontMatter:()=>l});var o=JSON.parse('{"id":"docs/\u5F00\u53D1\u5DE5\u5177/\u4EE3\u7801\u751F\u6210-gen/\u4EE3\u7801\u751F\u6210-gen","title":"Code Generating","description":"Starting from version v2, the CLI tool is integrated with the latest version of the GoFrame framework, providing developers with code generation features to standardize project code writing and simplify development complexity. Especially in enterprise-level and team projects, the CLI tool can significantly enhance development efficiency, allowing developers to focus on business logic.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u5F00\u53D1\u5DE5\u5177/\u4EE3\u7801\u751F\u6210-gen/\u4EE3\u7801\u751F\u6210-gen.md","sourceDirName":"docs/\u5F00\u53D1\u5DE5\u5177/\u4EE3\u7801\u751F\u6210-gen","slug":"/docs/cli/gen","permalink":"/en/docs/cli/gen","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u5F00\u53D1\u5DE5\u5177/\u4EE3\u7801\u751F\u6210-gen/\u4EE3\u7801\u751F\u6210-gen.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732716970000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/cli/gen","title":"Code Generating","sidebar_position":5,"hide_title":true,"keywords":["Code Generation","GoFrame","CLI Tool","Project Development","Enterprise-Level Project","Code Standards","Team Collaboration","Development Efficiency","ORM Models","Protobuf Files"],"description":"Starting from version v2, the CLI tool is integrated with the latest version of the GoFrame framework, providing developers with code generation features to standardize project code writing and simplify development complexity. Especially in enterprise-level and team projects, the CLI tool can significantly enhance development efficiency, allowing developers to focus on business logic."},"sidebar":"mainSidebar","previous":{"title":"Cross-Compiling","permalink":"/en/docs/cli/build"},"next":{"title":"Controller Generating","permalink":"/en/docs/cli/gen-ctrl"}}'),r=n("785893"),i=n("250065"),s=n("203105");let l={slug:"/docs/cli/gen",title:"Code Generating",sidebar_position:5,hide_title:!0,keywords:["Code Generation","GoFrame","CLI Tool","Project Development","Enterprise-Level Project","Code Standards","Team Collaboration","Development Efficiency","ORM Models","Protobuf Files"],description:"Starting from version v2, the CLI tool is integrated with the latest version of the GoFrame framework, providing developers with code generation features to standardize project code writing and simplify development complexity. Especially in enterprise-level and team projects, the CLI tool can significantly enhance development efficiency, allowing developers to focus on business logic."},a=void 0,c={},d=[{value:"Important Note\uD83D\uDD25",id:"important-note",level:2},{value:"Usage",id:"usage",level:2},{value:"Documentation",id:"documentation",level:2}];function u(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Starting from version ",(0,r.jsx)(t.code,{children:"v2"}),", the latest version of the ",(0,r.jsx)(t.code,{children:"CLI"})," tool features will be compiled with the latest version of the ",(0,r.jsx)(t.code,{children:"GoFrame"})," framework. If there is a compatibility issue between the auto-generated code of the local ",(0,r.jsx)(t.code,{children:"CLI"})," tool and the project's ",(0,r.jsx)(t.code,{children:"GoFrame"})," framework version, it is recommended to upgrade the project framework version or customize the installation of an older version of the ",(0,r.jsx)(t.code,{children:"CLI"})," tool. For the installation method of the old version of the CLI tool, refer to the repository homepage introduction: ",(0,r.jsx)(t.a,{href:"https://github.com/gogf/gf-cli",children:"https://github.com/gogf/gf-cli"})]})}),"\n",(0,r.jsx)(t.h2,{id:"important-note",children:"Important Note\uD83D\uDD25"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The code generation function provided by the ",(0,r.jsx)(t.code,{children:"CLI"})," tool aims to ",(0,r.jsx)(t.strong,{children:"standardize project code writing"}),", ",(0,r.jsx)(t.strong,{children:"simplify project development complexity"}),", and ",(0,r.jsx)(t.strong,{children:"allow developers to focus on business logic itself"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"CLI"})," tool itself requires a certain degree of prior learning and understanding cost (try to understand why), but once proficient, everyone's development work will be twice as effective with half the effort."]}),"\n",(0,r.jsxs)(t.li,{children:["The code generation function of the ",(0,r.jsx)(t.code,{children:"CLI"})," tool will be highly beneficial for enterprise-level projects and multi-member team projects. However, for small single-person projects, developers can evaluate whether to use it based on personal preference. The ",(0,r.jsx)(t.code,{children:"GoFrame"})," framework itself only provides basic components and adopts a modular and flexible design without strict requirements on project code; however, the ",(0,r.jsx)(t.code,{children:"CLI"})," tool will have some restrictions to ensure that each member of the team maintains consistent pace and style, preventing developers from writing code too freely."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:'$ gf gen -h\nUSAGE\n    gf gen COMMAND [OPTION]\n\nCOMMAND\n    ctrl        parse api definitions to generate controller/sdk go files\n    dao         automatically generate go files for dao/do/entity\n    enums       parse go files in current project and generate enums go file\n    pb          parse proto files and generate protobuf go files\n    pbentity    generate entity message files in protobuf3 format\n    service     parse struct and associated functions from packages to generate service go file\n\nDESCRIPTION\n    The "gen" command is designed for multiple generating purposes.\n    It\'s currently supporting generating go files for ORM models, protobuf and protobuf entity files.\n    Please use "gf gen dao -h" for specified type help.\n'})}),"\n",(0,r.jsx)(t.h2,{id:"documentation",children:"Documentation"}),"\n","\n",(0,r.jsx)(s.Z,{})]})}function f(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},203105:function(e,t,n){n.d(t,{Z:()=>j});var o=n("785893");n("667294");var r=n("467026"),i=n("96693"),s=n("531183"),l=n("633876"),a=n("266026"),c=n("434751"),d=n("58608");let u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function f(e){let{href:t,children:n}=e;return(0,o.jsx)(s.Z,{href:t,className:(0,r.Z)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:i,description:s}=e;return(0,o.jsxs)(f,{href:t,children:[(0,o.jsxs)(d.Z,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:i,children:[n," ",i]}),s&&(0,o.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:s,children:s})]})}function m(e){let{item:t}=e,n=(0,i.LM)(t),r=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,o.jsx)(p,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e,n=(0,a.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",r=(0,i.xz)(t.docId??void 0);return(0,o.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,o.jsx)(h,{item:t});case"category":return(0,o.jsx)(m,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e,n=(0,i.jA)();return(0,o.jsx)(j,{items:n.items,className:t})}function j(e){let{items:t,className:n}=e;if(!t)return(0,o.jsx)(v,{...e});let s=(0,i.MN)(t);return(0,o.jsx)("section",{className:(0,r.Z)("row",n),children:s.map((e,t)=>(0,o.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,o.jsx)(g,{item:e})},t))})}},633876:function(e,t,n){n.d(t,{c:function(){return a}});var o=n(667294),r=n(49931);let i=["zero","one","two","few","many","other"];function s(e){return i.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function a(){let e=function(){let{i18n:{currentLocale:e}}=(0,r.Z)();return(0,o.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let o=e.split("|");if(1===o.length)return o[0];o.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);let r=n.select(t);return o[Math.min(n.pluralForms.indexOf(r),o.length-1)]})(n,t,e)}}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return s}});var o=n(667294);let r={},i=o.createContext(r);function s(e){let t=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);
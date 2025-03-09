"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["56840"],{57607:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>m,assets:()=>a,toc:()=>u,frontMatter:()=>i});var t=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u8FDB\u7A0B\u7BA1\u7406-gproc/\u8FDB\u7A0B\u7BA1\u7406-gproc","title":"Process","description":"Methods for implementing process management and inter-process communication using the gproc module of the GoFrame framework. gproc uses local socket mechanisms for communication and provides various interfaces such as Shell, ShellExec, ShellRun to execute shell commands in different ways. With the help of goroutines, asynchronous execution can be achieved. In this document, you will learn how to use the Manager object for multi-subprocess management, as well as how to obtain and control specific process resources.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u8FDB\u7A0B\u7BA1\u7406-gproc/\u8FDB\u7A0B\u7BA1\u7406-gproc.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u8FDB\u7A0B\u7BA1\u7406-gproc","slug":"/docs/components/os-gproc","permalink":"/en/docs/components/os-gproc","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u8FDB\u7A0B\u7BA1\u7406-gproc/\u8FDB\u7A0B\u7BA1\u7406-gproc.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732716970000,"sidebarPosition":14,"frontMatter":{"slug":"/docs/components/os-gproc","title":"Process","sidebar_position":14,"hide_title":true,"keywords":["process management","inter-process communication","local socket","gproc module","GoFrame","shell commands","asynchronous execution","subprocess management","gogf","process resources"],"description":"Methods for implementing process management and inter-process communication using the gproc module of the GoFrame framework. gproc uses local socket mechanisms for communication and provides various interfaces such as Shell, ShellExec, ShellRun to execute shell commands in different ways. With the help of goroutines, asynchronous execution can be achieved. In this document, you will learn how to use the Manager object for multi-subprocess management, as well as how to obtain and control specific process resources."},"sidebar":"mainSidebar","previous":{"title":"File Watching - System Vars","permalink":"/en/docs/components/os-gfsnotify-system-variables"},"next":{"title":"Process - Usage","permalink":"/en/docs/components/os-gproc-example"}}'),s=o("785893"),r=o("250065"),c=o("203105");let i={slug:"/docs/components/os-gproc",title:"Process",sidebar_position:14,hide_title:!0,keywords:["process management","inter-process communication","local socket","gproc module","GoFrame","shell commands","asynchronous execution","subprocess management","gogf","process resources"],description:"Methods for implementing process management and inter-process communication using the gproc module of the GoFrame framework. gproc uses local socket mechanisms for communication and provides various interfaces such as Shell, ShellExec, ShellRun to execute shell commands in different ways. With the help of goroutines, asynchronous execution can be achieved. In this document, you will learn how to use the Manager object for multi-subprocess management, as well as how to obtain and control specific process resources."},l=void 0,a={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Documentation",id:"documentation",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["Process management and inter-process communication are implemented through the ",(0,s.jsx)(n.code,{children:"gproc"})," module, where inter-process communication uses a local socket communication mechanism."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/os/gproc"\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"API Documentation"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gproc",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gproc"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Brief Description"}),":"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"Manager"})," object is a process management object that can manage multiple subprocesses (the current executing process is the parent process) simultaneously;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Process"})," is a process object, representing a specific execution or acquired process resource;"]}),"\n",(0,s.jsxs)(n.li,{children:["We can use ",(0,s.jsx)(n.code,{children:"Shell"}),", ",(0,s.jsx)(n.code,{children:"ShellExec"}),", ",(0,s.jsx)(n.code,{children:"ShellRun"})," to execute shell commands:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Shell"})," represents a native shell command execution method with custom input and output control;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ShellExec"})," will return the output result content after executing the command;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ShellRun"})," will directly output the return content to standard output after executing the command;"]}),"\n",(0,s.jsxs)(n.li,{children:["We can use ",(0,s.jsx)(n.code,{children:"goroutine"})," to achieve asynchronous execution, such as: ",(0,s.jsx)(n.code,{children:"go ShellRun(...)"}),", etc."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n","\n",(0,s.jsx)(c.Z,{})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},203105:function(e,n,o){o.d(n,{Z:()=>j});var t=o("785893");o("667294");var s=o("467026"),r=o("96693"),c=o("531183"),i=o("633876"),l=o("266026"),a=o("434751"),u=o("58608");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:n,children:o}=e;return(0,t.jsx)(c.Z,{href:n,className:(0,s.Z)("card padding--lg",d.cardContainer),children:o})}function h(e){let{href:n,icon:o,title:r,description:c}=e;return(0,t.jsxs)(m,{href:n,children:[(0,t.jsxs)(u.Z,{as:"h2",className:(0,s.Z)("text--truncate",d.cardTitle),title:r,children:[o," ",r]}),c&&(0,t.jsx)("p",{className:(0,s.Z)("text--truncate",d.cardDescription),title:c,children:c})]})}function p(e){let{item:n}=e,o=(0,r.LM)(n),s=function(){let{selectMessage:e}=(0,i.c)();return n=>e(n,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return o?(0,t.jsx)(h,{href:o,icon:"\uD83D\uDDC3\uFE0F",title:n.label,description:n.description??s(n.items.length)}):null}function g(e){let{item:n}=e,o=(0,l.Z)(n.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",s=(0,r.xz)(n.docId??void 0);return(0,t.jsx)(h,{href:n.href,icon:o,title:n.label,description:n.description??s?.description})}function f(e){let{item:n}=e;switch(n.type){case"link":return(0,t.jsx)(g,{item:n});case"category":return(0,t.jsx)(p,{item:n});default:throw Error(`unknown item type ${JSON.stringify(n)}`)}}function x(e){let{className:n}=e,o=(0,r.jA)();return(0,t.jsx)(j,{items:o.items,className:n})}function j(e){let{items:n,className:o}=e;if(!n)return(0,t.jsx)(x,{...e});let c=(0,r.MN)(n);return(0,t.jsx)("section",{className:(0,s.Z)("row",o),children:c.map((e,n)=>(0,t.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,t.jsx)(f,{item:e})},n))})}},633876:function(e,n,o){o.d(n,{c:function(){return l}});var t=o(667294),s=o(49931);let r=["zero","one","two","few","many","other"];function c(e){return r.filter(n=>e.includes(n))}let i={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function l(){let e=function(){let{i18n:{currentLocale:e}}=(0,s.Z)();return(0,t.useMemo)(()=>{try{return function(e){let n=new Intl.PluralRules(e);return{locale:e,pluralForms:c(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${n.message}
`),i}},[e])}();return{selectMessage:(n,o)=>(function(e,n,o){let t=e.split("|");if(1===t.length)return t[0];t.length>o.pluralForms.length&&console.error(`For locale=${o.locale}, a maximum of ${o.pluralForms.length} plural forms are expected (${o.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);let s=o.select(n);return t[Math.min(o.pluralForms.indexOf(s),t.length-1)]})(o,n,e)}}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return c}});var t=o(667294);let s={},r=t.createContext(s);function c(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
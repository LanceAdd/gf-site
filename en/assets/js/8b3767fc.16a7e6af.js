"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["2072"],{276044:function(e,n,o){o.r(n),o.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>s});var i=JSON.parse('{"id":"quick/\u5FEB\u901F\u5F00\u59CB/\u4E0B\u8F7D\u4E0E\u4F7F\u7528","title":"Installation","description":"Quick start guide for the GoFrame framework. GoFrame is a modular, low coupling design development framework that includes common basic components and development tools. It\'s suitable for complete business project frameworks and independent component libraries. The content covers downloading and installing GoFrame, running basic operations, and introducing how to develop simple Web Server API applications.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/quick/\u5FEB\u901F\u5F00\u59CB/\u4E0B\u8F7D\u4E0E\u4F7F\u7528.md","sourceDirName":"quick/\u5FEB\u901F\u5F00\u59CB","slug":"/quick/install","permalink":"/en/quick/install","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/quick/\u5FEB\u901F\u5F00\u59CB/\u4E0B\u8F7D\u4E0E\u4F7F\u7528.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1737624670000,"sidebarPosition":1,"frontMatter":{"slug":"/quick/install","title":"Installation","hide_title":true,"sidebar_position":1,"keywords":["GoFrame","GoFrame Framework","Install GoFrame","Modular Framework","Low Coupling Design","Web Server API Development","Go Language Environment","Project Framework","Basic Components","HTTP Server"],"description":"Quick start guide for the GoFrame framework. GoFrame is a modular, low coupling design development framework that includes common basic components and development tools. It\'s suitable for complete business project frameworks and independent component libraries. The content covers downloading and installing GoFrame, running basic operations, and introducing how to develop simple Web Server API applications."},"sidebar":"quickSidebar","previous":{"title":"Quick Start","permalink":"/en/quick"},"next":{"title":"Hello World","permalink":"/en/quick/hello-world"}}'),t=o("785893"),r=o("250065");let s={slug:"/quick/install",title:"Installation",hide_title:!0,sidebar_position:1,keywords:["GoFrame","GoFrame Framework","Install GoFrame","Modular Framework","Low Coupling Design","Web Server API Development","Go Language Environment","Project Framework","Basic Components","HTTP Server"],description:"Quick start guide for the GoFrame framework. GoFrame is a modular, low coupling design development framework that includes common basic components and development tools. It's suitable for complete business project frameworks and independent component libraries. The content covers downloading and installing GoFrame, running basic operations, and introducing how to develop simple Web Server API applications."},a=void 0,l={},c=[{value:"Go Version Requirements",id:"go-version-requirements",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Quick Test",id:"quick-test",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Welcome to the ",(0,t.jsx)(n.code,{children:"GoFrame"})," Quick Start Guide! ",(0,t.jsx)(n.code,{children:"GoFrame"})," is a modern Go framework designed with modularity and loose coupling in mind. You can use it either as a full-featured application framework or cherry-pick individual components for your specific needs."]}),"\n",(0,t.jsxs)(n.p,{children:["This guide will walk you through installing and setting up ",(0,t.jsx)(n.code,{children:"GoFrame"}),", culminating in building your first web service."]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["New to Go? We recommend checking out our ",(0,t.jsx)(n.a,{href:"/en/docs/install-go",children:"Environment Setup Guide"})," first to get your development environment ready."]}),(0,t.jsx)(n.p,{children:"Stuck or have questions? Feel free to leave a comment \uD83D\uDCAC. Our community is here to help, and we'll get back to you as quickly as possible \uD83C\uDF1F\uD83C\uDF1F."})]}),"\n",(0,t.jsx)(n.h2,{id:"go-version-requirements",children:"Go Version Requirements"}),"\n",(0,t.jsxs)(n.p,{children:["To ensure stability and security, ",(0,t.jsx)(n.code,{children:"GoFrame"})," maintains compatibility with recent Go versions. We typically support the latest release and three previous versions."]}),"\n",(0,t.jsx)(n.p,{children:"Minimum requirement:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"golang version >= 1.20\n"})}),"\n",(0,t.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsx)(n.p,{children:"Install the latest version:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go get -u -v github.com/gogf/gf/v2\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Or add this to your ",(0,t.jsx)(n.code,{children:"go.mod"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"require github.com/gogf/gf/v2 latest\n"})}),"\n",(0,t.jsx)(n.h2,{id:"quick-test",children:"Quick Test"}),"\n",(0,t.jsx)(n.p,{children:"Let's verify your installation with a simple program:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gogf/gf/v2"\n)\n\nfunc main() {\n    fmt.Println("Hello GF:", gf.VERSION)\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Run it:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go run main.go\n"})}),"\n",(0,t.jsx)(n.p,{children:"You should see something like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Hello GF: v2.7.4\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Perfect! Now that ",(0,t.jsx)(n.code,{children:"GoFrame"})," is set up, let's build your first HTTP server."]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return s}});var i=o(667294);let t={},r=i.createContext(t);function s(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
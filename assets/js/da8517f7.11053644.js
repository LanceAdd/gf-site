"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["29207"],{707879:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>i,default:()=>p,assets:()=>o,toc:()=>a,frontMatter:()=>c});var s=JSON.parse('{"id":"examples/grpc/rawgrpc/rawgrpc","title":"\u539F\u751F gRPC \u793A\u4F8B","description":"GoFrame \u4E2D\u7684\u539F\u751F gRPC \u5B9E\u73B0","source":"@site/docs/examples/grpc/rawgrpc/rawgrpc.md","sourceDirName":"examples/grpc/rawgrpc","slug":"/examples/grpc/rawgrpc","permalink":"/examples/grpc/rawgrpc","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/examples/grpc/rawgrpc/rawgrpc.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1740107000000,"sidebarPosition":9,"frontMatter":{"title":"\u539F\u751F gRPC \u793A\u4F8B","slug":"/examples/grpc/rawgrpc","keywords":["grpc","\u539F\u751F","\u5B9E\u73B0","goframe"],"description":"GoFrame \u4E2D\u7684\u539F\u751F gRPC \u5B9E\u73B0","hide_title":true,"sidebar_position":9},"sidebar":"examplesSidebar","previous":{"title":"\u4E0A\u4E0B\u6587\u793A\u4F8B","permalink":"/examples/grpc/ctx"},"next":{"title":"NoSQL","permalink":"/examples/nosql"}}'),l=n("785893"),t=n("250065");let c={title:"\u539F\u751F gRPC \u793A\u4F8B",slug:"/examples/grpc/rawgrpc",keywords:["grpc","\u539F\u751F","\u5B9E\u73B0","goframe"],description:"GoFrame \u4E2D\u7684\u539F\u751F gRPC \u5B9E\u73B0",hide_title:!0,sidebar_position:9},i="gRPC - \u539F\u751F\u793A\u4F8B",o={},a=[{value:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD",level:2},{value:"\u76EE\u5F55\u7ED3\u6784",id:"\u76EE\u5F55\u7ED3\u6784",level:2},{value:"\u73AF\u5883\u8981\u6C42",id:"\u73AF\u5883\u8981\u6C42",level:2},{value:"\u4F7F\u7528\u8BF4\u660E",id:"\u4F7F\u7528\u8BF4\u660E",level:2}];function d(e){let r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.header,{children:(0,l.jsxs)(r.h1,{id:"grpc---\u539F\u751F\u793A\u4F8B",children:[(0,l.jsx)(r.code,{children:"gRPC"})," - \u539F\u751F\u793A\u4F8B"]})}),"\n",(0,l.jsxs)(r.p,{children:["Github Source: ",(0,l.jsx)(r.a,{href:"https://github.com/gogf/examples/tree/main/grpc/rawgrpc",children:"https://github.com/gogf/examples/tree/main/grpc/rawgrpc"})]}),"\n",(0,l.jsx)(r.h2,{id:"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),"\n",(0,l.jsxs)(r.p,{children:["\u672C\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u5728 ",(0,l.jsx)(r.code,{children:"GoFrame"})," \u4E2D\u5B9E\u73B0\u539F\u751F ",(0,l.jsx)(r.code,{children:"gRPC"})," \u670D\u52A1\uFF0C\u4E0D\u4F7F\u7528\u989D\u5916\u7684\u62BD\u8C61\u5C42\u3002"]}),"\n",(0,l.jsx)(r.h2,{id:"\u76EE\u5F55\u7ED3\u6784",children:"\u76EE\u5F55\u7ED3\u6784"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-text",children:".\n\u251C\u2500\u2500 client/           # \u5BA2\u6237\u7AEF\u793A\u4F8B\n\u2502   \u2514\u2500\u2500 client.go     # \u539F\u751F gRPC \u5BA2\u6237\u7AEF\u5B9E\u73B0\n\u251C\u2500\u2500 helloworld/       # protobuf\u534F\u8BAE\u5B9A\u4E49\n\u2502   \u2514\u2500\u2500 helloworld.proto # \u670D\u52A1\u548C\u6D88\u606F\u5B9A\u4E49\n\u251C\u2500\u2500 server/           # \u670D\u52A1\u5668\u793A\u4F8B\n\u2502   \u2514\u2500\u2500 server.go     # \u539F\u751F gRPC \u670D\u52A1\u5668\u5B9E\u73B0\n\u251C\u2500\u2500 go.mod            # Go \u6A21\u5757\u6587\u4EF6\n\u2514\u2500\u2500 go.sum            # Go \u6A21\u5757\u6821\u9A8C\u548C\n"})}),"\n",(0,l.jsx)(r.h2,{id:"\u73AF\u5883\u8981\u6C42",children:"\u73AF\u5883\u8981\u6C42"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"https://golang.org/dl/",children:"Go"})," ",(0,l.jsx)(r.code,{children:"1.22"})," \u6216\u66F4\u9AD8\u7248\u672C"]}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"https://goframe.org",children:"GoFrame"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"https://developers.google.com/protocol-buffers",children:"Protocol Buffers"})}),"\n"]}),"\n",(0,l.jsx)(r.h2,{id:"\u4F7F\u7528\u8BF4\u660E",children:"\u4F7F\u7528\u8BF4\u660E"}),"\n",(0,l.jsxs)(r.ol,{children:["\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsx)(r.p,{children:"\u542F\u52A8\u670D\u52A1\u5668\uFF1A"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"cd server\ngo run server.go\n"})}),"\n"]}),"\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsx)(r.p,{children:"\u8FD0\u884C\u5BA2\u6237\u7AEF\uFF1A"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"cd client\ngo run client.go\n"})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return c}});var s=n(667294);let l={},t=s.createContext(l);function c(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);
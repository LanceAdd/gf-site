"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["56710"],{611553:function(e,n,r){r.r(n),r.d(n,{metadata:()=>l,contentTitle:()=>o,default:()=>p,assets:()=>i,toc:()=>a,frontMatter:()=>c});var l=JSON.parse('{"id":"examples/grpc/balancer/balancer","title":"\u8D1F\u8F7D\u5747\u8861","description":"GoFrame \u4E2D\u7684 gRPC \u8D1F\u8F7D\u5747\u8861","source":"@site/docs/examples/grpc/balancer/balancer.md","sourceDirName":"examples/grpc/balancer","slug":"/examples/grpc/balancer","permalink":"/examples/grpc/balancer","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/examples/grpc/balancer/balancer.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1740107000000,"sidebarPosition":2,"frontMatter":{"title":"\u8D1F\u8F7D\u5747\u8861","slug":"/examples/grpc/balancer","keywords":["grpc","\u8D1F\u8F7D\u5747\u8861","\u670D\u52A1\u53D1\u73B0","goframe"],"description":"GoFrame \u4E2D\u7684 gRPC \u8D1F\u8F7D\u5747\u8861","hide_title":true,"sidebar_position":2},"sidebar":"examplesSidebar","previous":{"title":"\u670D\u52A1\u53D1\u73B0","permalink":"/examples/grpc/resolver"},"next":{"title":"\u4E0A\u4E0B\u6587\u793A\u4F8B","permalink":"/examples/grpc/ctx"}}'),s=r("785893"),t=r("250065");let c={title:"\u8D1F\u8F7D\u5747\u8861",slug:"/examples/grpc/balancer",keywords:["grpc","\u8D1F\u8F7D\u5747\u8861","\u670D\u52A1\u53D1\u73B0","goframe"],description:"GoFrame \u4E2D\u7684 gRPC \u8D1F\u8F7D\u5747\u8861",hide_title:!0,sidebar_position:2},o="gRPC - \u8D1F\u8F7D\u5747\u8861",i={},a=[{value:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD",level:2},{value:"\u76EE\u5F55\u7ED3\u6784",id:"\u76EE\u5F55\u7ED3\u6784",level:2},{value:"\u73AF\u5883\u8981\u6C42",id:"\u73AF\u5883\u8981\u6C42",level:2},{value:"\u4F7F\u7528\u8BF4\u660E",id:"\u4F7F\u7528\u8BF4\u660E",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsxs)(n.h1,{id:"grpc---\u8D1F\u8F7D\u5747\u8861",children:[(0,s.jsx)(n.code,{children:"gRPC"})," - \u8D1F\u8F7D\u5747\u8861"]})}),"\n",(0,s.jsxs)(n.p,{children:["Github Source: ",(0,s.jsx)(n.a,{href:"https://github.com/gogf/examples/tree/main/grpc/balancer",children:"https://github.com/gogf/examples/tree/main/grpc/balancer"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),"\n",(0,s.jsxs)(n.p,{children:["\u672C\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u5728 ",(0,s.jsx)(n.code,{children:"GoFrame"})," \u5E94\u7528\u7A0B\u5E8F\u4E2D\u5B9E\u73B0 ",(0,s.jsx)(n.code,{children:"gRPC"})," \u8D1F\u8F7D\u5747\u8861\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u76EE\u5F55\u7ED3\u6784",children:"\u76EE\u5F55\u7ED3\u6784"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:".\n\u251C\u2500\u2500 client/         # \u5BA2\u6237\u7AEF\u793A\u4F8B\n\u2502   \u2514\u2500\u2500 client.go   # \u5E26\u8D1F\u8F7D\u5747\u8861\u7684\u5BA2\u6237\u7AEF\u5B9E\u73B0\n\u251C\u2500\u2500 controller/     # \u670D\u52A1\u63A7\u5236\u5668\n\u2502   \u2514\u2500\u2500 hello.go    # Hello \u670D\u52A1\u5B9E\u73B0\n\u251C\u2500\u2500 protobuf/       # protobuf\u534F\u8BAE\u5B9A\u4E49\n\u251C\u2500\u2500 server/         # \u670D\u52A1\u5668\u793A\u4F8B\n\u2502   \u251C\u2500\u2500 config.yaml # \u670D\u52A1\u5668\u914D\u7F6E\n\u2502   \u2514\u2500\u2500 server.go   # \u670D\u52A1\u5668\u5B9E\u73B0\n\u251C\u2500\u2500 go.mod          # Go \u6A21\u5757\u6587\u4EF6\n\u2514\u2500\u2500 go.sum          # Go \u6A21\u5757\u6821\u9A8C\u548C\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u73AF\u5883\u8981\u6C42",children:"\u73AF\u5883\u8981\u6C42"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go"})," ",(0,s.jsx)(n.code,{children:"1.22"})," \u6216\u66F4\u9AD8\u7248\u672C"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://goframe.org",children:"GoFrame"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developers.google.com/protocol-buffers",children:"Protocol Buffers"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F7F\u7528\u8BF4\u660E",children:"\u4F7F\u7528\u8BF4\u660E"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u542F\u52A8\u591A\u4E2A\u670D\u52A1\u5668\u5B9E\u4F8B\uFF08\u4F7F\u7528\u968F\u673A\u7AEF\u53E3\uFF09\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd server\ngo run server.go\n\n# \u542F\u52A8\u7B2C\u4E8C\u4E2A\u670D\u52A1\u5668\u5B9E\u4F8B\ngo run server.go\n\n# \u542F\u52A8\u7B2C\u4E09\u4E2A\u670D\u52A1\u5668\u5B9E\u4F8B\ngo run server.go\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8FD0\u884C\u5BA2\u6237\u7AEF\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd client\ngo run client.go\n"})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return c}});var l=r(667294);let s={},t=l.createContext(s);function c(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);
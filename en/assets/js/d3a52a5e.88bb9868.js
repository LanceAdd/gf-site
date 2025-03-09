"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["86706"],{542253:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>t,default:()=>h,assets:()=>o,toc:()=>a,frontMatter:()=>l});var i=JSON.parse('{"id":"examples/registry/nacos/nacos","title":"Nacos","description":"Nacos service registry integration in GoFrame","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/examples/registry/nacos/nacos.md","sourceDirName":"examples/registry/nacos","slug":"/examples/registry/nacos","permalink":"/en/examples/registry/nacos","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/examples/registry/nacos/nacos.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1740107000000,"frontMatter":{"title":"Nacos","slug":"/examples/registry/nacos","keywords":["registry","nacos","service discovery","goframe"],"description":"Nacos service registry integration in GoFrame","hide_title":true},"sidebar":"examplesSidebar","previous":{"title":"File","permalink":"/en/examples/registry/file"},"next":{"title":"Polaris","permalink":"/en/examples/registry/polaris"}}'),r=s("785893"),c=s("250065");let l={title:"Nacos",slug:"/examples/registry/nacos",keywords:["registry","nacos","service discovery","goframe"],description:"Nacos service registry integration in GoFrame",hide_title:!0},t="Registry - Nacos Integration",o={},a=[{value:"Description",id:"description",level:2},{value:"Structure",id:"structure",level:2},{value:"Features",id:"features",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>HTTP</code> Example",id:"http-example",level:3},{value:"<code>gRPC</code> Example",id:"grpc-example",level:3},{value:"Implementation Details",id:"implementation-details",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsxs)(n.h1,{id:"registry---nacos-integration",children:["Registry - ",(0,r.jsx)(n.code,{children:"Nacos"})," Integration"]})}),"\n",(0,r.jsxs)(n.p,{children:["Github Source: ",(0,r.jsx)(n.a,{href:"https://github.com/gogf/examples/tree/main/registry/nacos",children:"https://github.com/gogf/examples/tree/main/registry/nacos"})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["This example demonstrates how to integrate ",(0,r.jsx)(n.code,{children:"Nacos"})," service registry with ",(0,r.jsx)(n.code,{children:"GoFrame"})," applications. It shows how to:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Register services with ",(0,r.jsx)(n.code,{children:"Nacos"})]}),"\n",(0,r.jsxs)(n.li,{children:["Discover services using ",(0,r.jsx)(n.code,{children:"Nacos"})]}),"\n",(0,r.jsx)(n.li,{children:"Implement service health checks"}),"\n",(0,r.jsx)(n.li,{children:"Build distributed systems"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"structure",children:"Structure"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:".\n\u251C\u2500\u2500 docker-compose/     # Docker compose files for running Nacos\n\u2502   \u251C\u2500\u2500 standalone/     # Standalone mode configuration\n\u2502   \u2514\u2500\u2500 cluster/        # Cluster mode configuration\n\u251C\u2500\u2500 grpc/               # gRPC service examples\n\u2502   \u251C\u2500\u2500 client/         # gRPC client implementation\n\u2502   \u251C\u2500\u2500 controller/     # gRPC service controllers\n\u2502   \u251C\u2500\u2500 protobuf/       # Protocol buffer definitions\n\u2502   \u2514\u2500\u2500 server/         # gRPC server implementation\n\u2502       \u251C\u2500\u2500 main.go     # Server startup code\n\u2502       \u2514\u2500\u2500 config.yaml # Server configuration\n\u251C\u2500\u2500 http/               # HTTP service examples\n\u2502   \u251C\u2500\u2500 client/         # HTTP client implementation\n\u2502   \u2514\u2500\u2500 server/         # HTTP server implementation\n\u251C\u2500\u2500 go.mod              # Go module file\n\u2514\u2500\u2500 go.sum              # Go module checksums\n"})}),"\n",(0,r.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,r.jsx)(n.p,{children:"The example showcases the following features:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Service Registration"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Automatic service registration"}),"\n",(0,r.jsx)(n.li,{children:"Health check configuration"}),"\n",(0,r.jsx)(n.li,{children:"Metadata management"}),"\n",(0,r.jsx)(n.li,{children:"Namespace support"}),"\n",(0,r.jsx)(n.li,{children:"Group management"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Service Discovery"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Dynamic service discovery"}),"\n",(0,r.jsx)(n.li,{children:"Load balancing"}),"\n",(0,r.jsx)(n.li,{children:"Failover support"}),"\n",(0,r.jsx)(n.li,{children:"Service grouping"}),"\n",(0,r.jsx)(n.li,{children:"Namespace isolation"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Protocol Support"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"HTTP"})," services"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gRPC"})," services"]}),"\n",(0,r.jsx)(n.li,{children:"Custom protocols"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go"})," ",(0,r.jsx)(n.code,{children:"1.22"})," or higher"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://goframe.org",children:"GoFrame"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/registry/nacos",children:"GoFrame Nacos Registry"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://nacos.io/en-us/docs/v2/quickstart/quick-start.html",children:"Nacos"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Running ",(0,r.jsx)(n.code,{children:"Nacos"})," server:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Using docker-compose\ncd docker-compose\ndocker-compose up -d\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.h3,{id:"http-example",children:[(0,r.jsx)(n.code,{children:"HTTP"})," Example"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Start the ",(0,r.jsx)(n.code,{children:"HTTP"})," server:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd http/server\ngo run server.go\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Run the ",(0,r.jsx)(n.code,{children:"HTTP"})," client:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd http/client\ngo run client.go\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"grpc-example",children:[(0,r.jsx)(n.code,{children:"gRPC"})," Example"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Start the ",(0,r.jsx)(n.code,{children:"gRPC"})," server:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd grpc/server\ngo run server.go\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Run the ",(0,r.jsx)(n.code,{children:"gRPC"})," client:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd grpc/client\ngo run client.go\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"implementation-details",children:"Implementation Details"}),"\n",(0,r.jsx)(n.p,{children:"The example demonstrates:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Nacos"})," client configuration"]}),"\n",(0,r.jsx)(n.li,{children:"Service registration process"}),"\n",(0,r.jsx)(n.li,{children:"Service discovery mechanism"}),"\n",(0,r.jsx)(n.li,{children:"Health check implementation"}),"\n",(0,r.jsx)(n.li,{children:"Load balancing strategies"}),"\n",(0,r.jsx)(n.li,{children:"Namespace management"}),"\n",(0,r.jsx)(n.li,{children:"Group configuration"}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return l}});var i=s(667294);let r={},c=i.createContext(r);function l(e){let n=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["68961"],{897279:function(n,e,i){i.r(e),i.d(e,{metadata:()=>l,contentTitle:()=>t,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>o});var l=JSON.parse('{"id":"examples/config/polaris/polaris","title":"Polaris","description":"Polaris configuration center integration with GoFrame","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/examples/config/polaris/polaris.md","sourceDirName":"examples/config/polaris","slug":"/examples/config/polaris","permalink":"/en/examples/config/polaris","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/examples/config/polaris/polaris.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1740107000000,"frontMatter":{"title":"Polaris","slug":"/examples/config/polaris","keywords":["config","polaris","goframe"],"description":"Polaris configuration center integration with GoFrame","hide_title":true},"sidebar":"examplesSidebar","previous":{"title":"Nacos","permalink":"/en/examples/config/nacos"},"next":{"title":"Service Registry","permalink":"/en/examples/registry"}}'),r=i("785893"),s=i("250065");let o={title:"Polaris",slug:"/examples/config/polaris",keywords:["config","polaris","goframe"],description:"Polaris configuration center integration with GoFrame",hide_title:!0},t="Polaris Configuration Center Example",a={},c=[{value:"Description",id:"description",level:2},{value:"Directory Structure",id:"directory-structure",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Features",id:"features",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<code>Polaris</code> Server",id:"polaris-server",level:3},{value:"Client Configuration",id:"client-configuration",level:3},{value:"Usage",id:"usage",level:2},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Notes",id:"notes",level:2}];function d(n){let e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsxs)(e.h1,{id:"polaris-configuration-center-example",children:[(0,r.jsx)(e.code,{children:"Polaris"})," Configuration Center Example"]})}),"\n",(0,r.jsxs)(e.p,{children:["Github Source: ",(0,r.jsx)(e.a,{href:"https://github.com/gogf/examples/tree/main/config/polaris",children:"https://github.com/gogf/examples/tree/main/config/polaris"})]}),"\n",(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:["This directory contains an example demonstrating how to integrate ",(0,r.jsx)(e.code,{children:"Polaris"})," configuration center with ",(0,r.jsx)(e.code,{children:"GoFrame"})," applications. It shows:"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Polaris"})," Client Configuration"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Polaris"})," client setup and initialization"]}),"\n",(0,r.jsx)(e.li,{children:"Configuration adapter implementation"}),"\n",(0,r.jsx)(e.li,{children:"Error handling and logging"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Configuration Management"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Configuration loading and parsing"}),"\n",(0,r.jsx)(e.li,{children:"Dynamic configuration updates"}),"\n",(0,r.jsx)(e.li,{children:"Configuration value retrieval"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"directory-structure",children:"Directory Structure"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:".\n\u251C\u2500\u2500 boot/           # Bootstrap configuration\n\u2502   \u2514\u2500\u2500 boot.go     # Polaris client initialization\n\u251C\u2500\u2500 main.go         # Main application entry\n\u251C\u2500\u2500 testdata/       # Test configuration files\n\u251C\u2500\u2500 go.mod          # Go module file\n\u2514\u2500\u2500 go.sum          # Go module checksums\n"})}),"\n",(0,r.jsx)(e.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://golang.org/dl/",children:"Go"})," ",(0,r.jsx)(e.code,{children:"1.22"})," or higher"]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://goframe.org",children:"GoFrame"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/gogf/gf/tree/master/contrib/config/polaris",children:"GoFrame Polaris Config"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/polarismesh/polaris",children:"Polaris Server"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"features",children:"Features"}),"\n",(0,r.jsx)(e.p,{children:"The example showcases the following features:"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Polaris"})," Integration"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Client configuration"}),"\n",(0,r.jsx)(e.li,{children:"Server connection management"}),"\n",(0,r.jsx)(e.li,{children:"Configuration namespace"}),"\n",(0,r.jsx)(e.li,{children:"Error handling"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Configuration Management"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Configuration loading"}),"\n",(0,r.jsx)(e.li,{children:"Value retrieval"}),"\n",(0,r.jsx)(e.li,{children:"Type conversion"}),"\n",(0,r.jsx)(e.li,{children:"Default values"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Dynamic Updates"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Configuration watching"}),"\n",(0,r.jsx)(e.li,{children:"Change notification"}),"\n",(0,r.jsx)(e.li,{children:"Hot reload support"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(e.h3,{id:"polaris-server",children:[(0,r.jsx)(e.code,{children:"Polaris"})," Server"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Server Configuration:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Default port: 8090"}),"\n",(0,r.jsx)(e.li,{children:"Default address: localhost"}),"\n",(0,r.jsxs)(e.li,{children:["Default protocol: ",(0,r.jsx)(e.code,{children:"gRPC"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Authentication:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Namespace isolation"}),"\n",(0,r.jsx)(e.li,{children:"Group level access control"}),"\n",(0,r.jsx)(e.li,{children:"Access token support"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"client-configuration",children:"Client Configuration"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Basic Settings:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Namespace"}),"\n",(0,r.jsx)(e.li,{children:"File group"}),"\n",(0,r.jsx)(e.li,{children:"File name"}),"\n",(0,r.jsx)(e.li,{children:"Configuration path"}),"\n",(0,r.jsx)(e.li,{children:"Log directory"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Advanced Options:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Watch mode"}),"\n",(0,r.jsx)(e.li,{children:"Retry settings"}),"\n",(0,r.jsx)(e.li,{children:"Cache management"}),"\n",(0,r.jsx)(e.li,{children:"Logging configuration"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Start ",(0,r.jsx)(e.code,{children:"Polaris"})," Server:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"# Start Polaris server using Docker\ndocker run -d --name polaris \\\n   -p 8090:8090 -p 8091:8091 \\\n   polarismesh/polaris-server\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Configure ",(0,r.jsx)(e.code,{children:"Polaris"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Access ",(0,r.jsx)(e.code,{children:"Polaris"})," console at ",(0,r.jsx)(e.a,{href:"http://localhost:8090",children:"http://localhost:8090"})]}),"\n",(0,r.jsx)(e.li,{children:"Create configuration items"}),"\n",(0,r.jsx)(e.li,{children:"Set up access control"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Run Example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"go run main.go\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"implementation-details",children:"Implementation Details"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Client Setup (",(0,r.jsx)(e.code,{children:"boot/boot.go"}),"):"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Namespace configuration"}),"\n",(0,r.jsx)(e.li,{children:"File group and name setup"}),"\n",(0,r.jsx)(e.li,{children:"Configuration path setup"}),"\n",(0,r.jsx)(e.li,{children:"Log directory configuration"}),"\n",(0,r.jsx)(e.li,{children:"Watch mode enablement"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Configuration Access (",(0,r.jsx)(e.code,{children:"main.go"}),"):"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Configuration availability check"}),"\n",(0,r.jsx)(e.li,{children:"Bulk configuration retrieval"}),"\n",(0,r.jsx)(e.li,{children:"Single value access"}),"\n",(0,r.jsx)(e.li,{children:"Error handling"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"The example uses Polaris's configuration center features"}),"\n",(0,r.jsx)(e.li,{children:"Configuration changes in Polaris are automatically reflected when watch mode is enabled"}),"\n",(0,r.jsx)(e.li,{children:"Configuration is organized by namespace and file group"}),"\n",(0,r.jsx)(e.li,{children:"Log files are stored in the specified log directory"}),"\n",(0,r.jsx)(e.li,{children:"Configuration path points to the Polaris server configuration file"}),"\n",(0,r.jsx)(e.li,{children:"Watch mode enables dynamic configuration updates"}),"\n"]})]})}function h(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return t},a:function(){return o}});var l=i(667294);let r={},s=l.createContext(r);function o(n){let e=l.useContext(s);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),l.createElement(s.Provider,{value:e},n.children)}}}]);
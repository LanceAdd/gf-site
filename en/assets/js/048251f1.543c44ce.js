"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["54622"],{590787:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>h,assets:()=>o,toc:()=>a,frontMatter:()=>s});var r=JSON.parse('{"id":"examples/observability/trace/otlp/otlp","title":"OpenTelemetry Example","description":"OpenTelemetry trace data export methods in GoFrame","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/examples/observability/trace/otlp/otlp.md","sourceDirName":"examples/observability/trace/otlp","slug":"/examples/observability/trace/otlp","permalink":"/en/examples/observability/trace/otlp","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/examples/observability/trace/otlp/otlp.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1740107000000,"frontMatter":{"title":"OpenTelemetry Example","slug":"/examples/observability/trace/otlp","keywords":["trace","otlp","grpc","http","goframe"],"description":"OpenTelemetry trace data export methods in GoFrame","hide_title":true},"sidebar":"examplesSidebar","previous":{"title":"In-Process Service (gRPC Exporter)","permalink":"/en/examples/observability/trace/inprocess-grpc"},"next":{"title":"Multi-Process Example","permalink":"/en/examples/observability/trace/processes"}}'),l=i("785893"),t=i("250065");let s={title:"OpenTelemetry Example",slug:"/examples/observability/trace/otlp",keywords:["trace","otlp","grpc","http","goframe"],description:"OpenTelemetry trace data export methods in GoFrame",hide_title:!0},c="OpenTelemetry Tracing Examples",o={},a=[{value:"Description",id:"description",level:2},{value:"Directory Structure",id:"directory-structure",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Comparison of Export Methods",id:"comparison-of-export-methods",level:2},{value:"gRPC Export (grpc/)",id:"grpc-export-grpc",level:3},{value:"HTTP Export (http/)",id:"http-export-http",level:3},{value:"Usage",id:"usage",level:2},{value:"gRPC Export Example",id:"grpc-export-example",level:3},{value:"HTTP Export Example",id:"http-export-example",level:3},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"opentelemetry-tracing-examples",children:"OpenTelemetry Tracing Examples"})}),"\n",(0,l.jsxs)(n.p,{children:["Github Source: ",(0,l.jsx)(n.a,{href:"https://github.com/gogf/examples/tree/main/observability/trace/otlp",children:"https://github.com/gogf/examples/tree/main/observability/trace/otlp"})]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This directory contains examples demonstrating different methods of exporting OpenTelemetry trace data in GoFrame applications. It includes:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["gRPC-based Export (",(0,l.jsx)(n.code,{children:"grpc/"}),")"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Uses gRPC protocol for trace data transmission"}),"\n",(0,l.jsx)(n.li,{children:"Suitable for high-performance, streaming trace data export"}),"\n",(0,l.jsx)(n.li,{children:"Supports bidirectional streaming and connection multiplexing"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["HTTP-based Export (",(0,l.jsx)(n.code,{children:"http/"}),")"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Uses HTTP protocol for trace data transmission"}),"\n",(0,l.jsx)(n.li,{children:"Suitable for environments with HTTP proxy or firewall restrictions"}),"\n",(0,l.jsx)(n.li,{children:"Simpler to configure and debug"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"directory-structure",children:"Directory Structure"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:".\n\u251C\u2500\u2500 grpc/           # gRPC-based tracing example\n\u2502   \u2514\u2500\u2500 main.go     # gRPC trace exporter implementation\n\u251C\u2500\u2500 http/           # HTTP-based tracing example\n\u2502   \u2514\u2500\u2500 main.go     # HTTP trace exporter implementation\n\u251C\u2500\u2500 go.mod          # Go module file\n\u2514\u2500\u2500 go.sum          # Go module checksums\n"})}),"\n",(0,l.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go"})," ",(0,l.jsx)(n.code,{children:"1.22"})," or higher"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://goframe.org",children:"GoFrame"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/trace/otlpgrpc",children:"GoFrame OpenTelemetry gRPC Tracing"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/trace/otlphttp",children:"GoFrame OpenTelemetry HTTP Tracing"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Running Jaeger instance:","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"docker run --rm --name jaeger \\\n-e COLLECTOR_ZIPKIN_HOST_PORT=:9411 \\\n-p 6831:6831/udp \\\n-p 6832:6832/udp \\\n-p 5778:5778 \\\n-p 16686:16686 \\\n-p 4317:4317 \\\n-p 4318:4318 \\\n-p 14250:14250 \\\n-p 14268:14268 \\\n-p 14269:14269 \\\n-p 9411:9411 \\\njaegertracing/all-in-one:1.55\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"comparison-of-export-methods",children:"Comparison of Export Methods"}),"\n",(0,l.jsx)(n.h3,{id:"grpc-export-grpc",children:"gRPC Export (grpc/)"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Advantages:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Higher performance"}),"\n",(0,l.jsx)(n.li,{children:"Bidirectional streaming"}),"\n",(0,l.jsx)(n.li,{children:"Connection multiplexing"}),"\n",(0,l.jsx)(n.li,{children:"Better for high-volume tracing"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Configuration:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Requires gRPC endpoint"}),"\n",(0,l.jsx)(n.li,{children:"Supports authentication token"}),"\n",(0,l.jsx)(n.li,{children:"Configurable connection settings"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Use Cases:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"High-volume trace data"}),"\n",(0,l.jsx)(n.li,{children:"Microservices architecture"}),"\n",(0,l.jsx)(n.li,{children:"Performance-critical systems"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"http-export-http",children:"HTTP Export (http/)"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Advantages:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Simpler setup"}),"\n",(0,l.jsx)(n.li,{children:"Works through HTTP proxies"}),"\n",(0,l.jsx)(n.li,{children:"Easier to debug"}),"\n",(0,l.jsx)(n.li,{children:"Better firewall compatibility"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Configuration:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Requires HTTP endpoint"}),"\n",(0,l.jsx)(n.li,{children:"Supports path configuration"}),"\n",(0,l.jsx)(n.li,{children:"Standard HTTP settings"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Use Cases:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Environments with HTTP proxy"}),"\n",(0,l.jsx)(n.li,{children:"Simpler deployment requirements"}),"\n",(0,l.jsx)(n.li,{children:"Development and testing"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n.h3,{id:"grpc-export-example",children:"gRPC Export Example"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Navigate to gRPC example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cd grpc\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Run the example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"go run main.go\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"http-export-example",children:"HTTP Export Example"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Navigate to HTTP example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cd http\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Run the example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"go run main.go\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["View traces:\nOpen ",(0,l.jsx)(n.a,{href:"http://localhost:16686",children:"http://localhost:16686"})," in your browser to view traces in Jaeger UI."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"implementation-details",children:"Implementation Details"}),"\n",(0,l.jsx)(n.p,{children:"Both examples demonstrate:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Trace Context Management"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Span creation and management"}),"\n",(0,l.jsx)(n.li,{children:"Context propagation"}),"\n",(0,l.jsx)(n.li,{children:"Baggage handling"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Error Handling"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Connection error handling"}),"\n",(0,l.jsx)(n.li,{children:"Export error handling"}),"\n",(0,l.jsx)(n.li,{children:"Graceful shutdown"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Configuration"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Service name configuration"}),"\n",(0,l.jsx)(n.li,{children:"Endpoint configuration"}),"\n",(0,l.jsx)(n.li,{children:"Authentication setup"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"gRPC Export Issues:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Check gRPC endpoint accessibility"}),"\n",(0,l.jsx)(n.li,{children:"Verify authentication token"}),"\n",(0,l.jsx)(n.li,{children:"Review gRPC connection logs"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"HTTP Export Issues:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Check HTTP endpoint accessibility"}),"\n",(0,l.jsx)(n.li,{children:"Verify path configuration"}),"\n",(0,l.jsx)(n.li,{children:"Review HTTP response codes"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"General Issues:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Verify Jaeger is running"}),"\n",(0,l.jsx)(n.li,{children:"Check network connectivity"}),"\n",(0,l.jsx)(n.li,{children:"Review application logs"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return s}});var r=i(667294);let l={},t=r.createContext(l);function s(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);
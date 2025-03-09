"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["40017"],{379872:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>c,default:()=>h,assets:()=>a,toc:()=>o,frontMatter:()=>d});var r=JSON.parse('{"id":"docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-HTTP\u793A\u4F8B/\u94FE\u8DEF\u8DDF\u8E2A-HTTP\u793A\u4F8B-Baggage","title":"Tracing HTTP - Baggage","description":"Using the GoFrame framework for tracing, focusing on demonstrating the method of transmitting Baggage data between services through an HTTP example. It provides a detailed explanation of client and server code implementation, including how to set and get Baggage, and offers a way to view link information through Jaeger, providing a practical guide for developers to achieve efficient tracing in distributed systems.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-HTTP\u793A\u4F8B/\u94FE\u8DEF\u8DDF\u8E2A-HTTP\u793A\u4F8B-Baggage.md","sourceDirName":"docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-HTTP\u793A\u4F8B","slug":"/docs/obs/tracing-http-example-baggage","permalink":"/en/docs/obs/tracing-http-example-baggage","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-HTTP\u793A\u4F8B/\u94FE\u8DEF\u8DDF\u8E2A-HTTP\u793A\u4F8B-Baggage.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732451468000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/obs/tracing-http-example-baggage","title":"Tracing HTTP - Baggage","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","GoFrame framework","tracing","HTTP example","Baggage","client","server","Jaeger","OTLP","TraceId"],"description":"Using the GoFrame framework for tracing, focusing on demonstrating the method of transmitting Baggage data between services through an HTTP example. It provides a detailed explanation of client and server code implementation, including how to set and get Baggage, and offers a way to view link information through Jaeger, providing a practical guide for developers to achieve efficient tracing in distributed systems."},"sidebar":"mainSidebar","previous":{"title":"Tracing - HTTP Example","permalink":"/en/docs/obs/tracing-http-example"},"next":{"title":"Tracing HTTP - Data Ops","permalink":"/en/docs/obs/tracing-http-example-with-database"}}'),i=n("785893"),s=n("250065");let d={slug:"/docs/obs/tracing-http-example-baggage",title:"Tracing HTTP - Baggage",sidebar_position:0,hide_title:!0,keywords:["GoFrame","GoFrame framework","tracing","HTTP example","Baggage","client","server","Jaeger","OTLP","TraceId"],description:"Using the GoFrame framework for tracing, focusing on demonstrating the method of transmitting Baggage data between services through an HTTP example. It provides a detailed explanation of client and server code implementation, including how to set and get Baggage, and offers a way to view link information through Jaeger, providing a practical guide for developers to achieve efficient tracing in distributed systems."},c=void 0,a={},o=[{value:"<code>baggage</code> Link Data Transmission",id:"baggage-link-data-transmission",level:2},{value:"Client",id:"client",level:2},{value:"Server",id:"server",level:2},{value:"View the Effects",id:"view-the-effects",level:2},{value:"HTTP Client Attributes",id:"http-client-attributes",level:3},{value:"HTTP Client Events",id:"http-client-events",level:3},{value:"HTTP Server Attributes",id:"http-server-attributes",level:3},{value:"HTTP Server Events",id:"http-server-events",level:3}];function l(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.h2,{id:"baggage-link-data-transmission",children:[(0,i.jsx)(t.code,{children:"baggage"})," Link Data Transmission"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"baggage"})," transmits custom information between links (between services)."]}),"\n",(0,i.jsxs)(t.p,{children:["Example code address: ",(0,i.jsx)(t.a,{href:"https://github.com/gogf/gf/tree/master/example/trace/http",children:"https://github.com/gogf/gf/tree/master/example/trace/http"})]}),"\n",(0,i.jsx)(t.h2,{id:"client",children:"Client"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/contrib/trace/otlphttp/v2"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/gtrace"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nconst (\n     serviceName = "otlp-http-client"\n    endpoint    = "tracing-analysis-dc-hz.aliyuncs.com"\n    path        = "adapt_******_******/api/otlp/traces"\n)\n\nfunc main() {\n    var ctx = gctx.New()\n    shutdown, err := otlphttp.Init(serviceName, endpoint, path)\n   if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    defer shutdown()\n\n    StartRequests()\n}\n\nfunc StartRequests() {\n    ctx, span := gtrace.NewSpan(gctx.New(), "StartRequests")\n    defer span.End()\n\n    ctx = gtrace.SetBaggageValue(ctx, "name", "john")\n\n    content := g.Client().GetContent(ctx, "http://127.0.0.1:8199/hello")\n    g.Log().Print(ctx, content)\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Brief explanation of client code:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["First, the client also needs to initialize ",(0,i.jsx)(t.code,{children:"Jaeger"})," through the ",(0,i.jsx)(t.code,{children:"jaeger.Init"})," method."]}),"\n",(0,i.jsxs)(t.li,{children:["Then, using ",(0,i.jsx)(t.code,{children:'gtrace.SetBaggageValue(ctx, "name", "john")'}),", a ",(0,i.jsx)(t.code,{children:"baggage"})," is set, which will be transmitted in all links of the request. However, in this example, there are only two nodes, so the ",(0,i.jsx)(t.code,{children:"baggage"})," data will only be transmitted to the server. This method will return a new ",(0,i.jsx)(t.code,{children:"context.Context"})," variable, which we will need to pass in the subsequent call chain."]}),"\n",(0,i.jsxs)(t.li,{children:["Here, an HTTP client request object is created using ",(0,i.jsx)(t.code,{children:"g.Client()"}),", which automatically enables tracing features without requiring developers to explicitly call any methods or settings."]}),"\n",(0,i.jsxs)(t.li,{children:["Finally, ",(0,i.jsx)(t.code,{children:"g.Log().Print(ctx, content)"})," is used to print the server's return content, where ",(0,i.jsx)(t.code,{children:"ctx"})," is used to pass link information to the logging component. If the ",(0,i.jsx)(t.code,{children:"ctx"})," context object contains link information, the logging component will automatically include the ",(0,i.jsx)(t.code,{children:"TraceId"})," in the log content."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"server",children:"Server"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/contrib/trace/otlphttp/v2"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/net/gtrace"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nconst (\n     serviceName = "otlp-http-server"\n    endpoint    = "tracing-analysis-dc-hz.aliyuncs.com"\n    path        = "adapt_******_******/api/otlp/traces" )\n\nfunc main() {\n    var ctx = gctx.New()\n    shutdown, err := otlphttp.Init(serviceName, endpoint, path)\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    defer shutdown()\n\n    s := g.Server()\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.GET("/hello", HelloHandler)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n\nfunc HelloHandler(r *ghttp.Request) {\n    ctx, span := gtrace.NewSpan(r.Context(), "HelloHandler")\n    defer span.End()\n\n    value := gtrace.GetBaggageVar(ctx, "name").String()\n\n    r.Response.Write("hello:", value)\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Brief explanation of server code:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Of course, the server also needs to initialize ",(0,i.jsx)(t.code,{children:"Jaeger"})," through the ",(0,i.jsx)(t.code,{children:"jaeger.Init"})," method."]}),"\n",(0,i.jsx)(t.li,{children:"The server starts with tracing enabled, and developers do not need to call any methods or configure any settings explicitly."}),"\n",(0,i.jsxs)(t.li,{children:["The server uses ",(0,i.jsx)(t.code,{children:'gtrace.GetBaggageVar(ctx, "name").String()'})," to obtain the ",(0,i.jsx)(t.code,{children:"baggage"})," information submitted by the client and converts it to a string for return."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"view-the-effects",children:"View the Effects"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Start the server:"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(137519).Z+"",width:"1856",height:"380"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Start the client:"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(829937).Z+"",width:"1480",height:"160"})}),"\n",(0,i.jsxs)(t.p,{children:["As you can see, the ",(0,i.jsx)(t.code,{children:"baggage"})," submitted by the client has been successfully received and printed by the server. Also, the client outputs the ",(0,i.jsx)(t.code,{children:"TraceId"})," information when logging. ",(0,i.jsx)(t.code,{children:"TraceId"})," is a unique ID for a link, and it can be used to retrieve all log information for that link as well as query the detailed call chain on the ",(0,i.jsx)(t.code,{children:"Jaeger"})," system."]}),"\n",(0,i.jsxs)(t.p,{children:["View the link information on ",(0,i.jsx)(t.code,{children:"Jaeger"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(912641).Z+"",width:"1915",height:"915"})}),"\n",(0,i.jsxs)(t.p,{children:["As seen here, there are two service names: ",(0,i.jsx)(t.code,{children:"tracing-http-client"})," and ",(0,i.jsx)(t.code,{children:"tracing-http-server"}),", indicating that this request involves two services, specifically the HTTP request client and server, and each service involves ",(0,i.jsx)(t.code,{children:"2"})," ",(0,i.jsx)(t.code,{children:"span"})," link nodes."]}),"\n",(0,i.jsxs)(t.p,{children:["When clicking on the details of this ",(0,i.jsx)(t.code,{children:"trace"}),", you can see the hierarchical relationship of the call chain. Additionally, you can find the client's request address, the server's received route, and the server route function names. Let's introduce the ",(0,i.jsx)(t.code,{children:"Attributes"})," and ",(0,i.jsx)(t.code,{children:"Events"})," information of the client, or the ",(0,i.jsx)(t.code,{children:"Tags"})," and ",(0,i.jsx)(t.code,{children:"Process"})," information shown in ",(0,i.jsx)(t.code,{children:"Jaeger"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"http-client-attributes",children:"HTTP Client Attributes"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(870452).Z+"",width:"1917",height:"913"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute/Tag"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"otel.instrumentation_library.name"})}),(0,i.jsxs)(t.td,{children:["Current instrument name, usually the component name of the current ",(0,i.jsx)(t.code,{children:"span"})," operation"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"otel.instrumentation_library.version"})}),(0,i.jsx)(t.td,{children:"Current instrument component version"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"span.kind"})}),(0,i.jsxs)(t.td,{children:["Type of the current ",(0,i.jsx)(t.code,{children:"span"}),", generally written by the component automatically. Common ",(0,i.jsx)(t.code,{children:"span"})," types include:"]})]})]})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"client"})}),(0,i.jsx)(t.td,{children:"Client"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"server"})}),(0,i.jsx)(t.td,{children:"Server"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"producer"})}),(0,i.jsx)(t.td,{children:"Producer, commonly used in MQ"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"consumer"})}),(0,i.jsx)(t.td,{children:"Consumer, commonly used in MQ"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"internal"})}),(0,i.jsx)(t.td,{children:"Internal method, generally used in business"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"undefined"})}),(0,i.jsx)(t.td,{children:"Undefined, rarely used"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"status.code"})}),(0,i.jsxs)(t.td,{children:["Current ",(0,i.jsx)(t.code,{children:"span"})," status, ",(0,i.jsx)(t.code,{children:"0"})," is normal, ",(0,i.jsx)(t.code,{children:"non-zero"})," indicates failure"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"status.message"})}),(0,i.jsxs)(t.td,{children:["Current ",(0,i.jsx)(t.code,{children:"span"})," status information, often contains error information when failed"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"hostname"})}),(0,i.jsx)(t.td,{children:"Hostname of the current node"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"ip.intranet"})}),(0,i.jsx)(t.td,{children:"Intranet address list of the current node"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"http.address.local"})}),(0,i.jsx)(t.td,{children:"Local address and port of HTTP communication"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"http.address.remote"})}),(0,i.jsx)(t.td,{children:"Target address and port of HTTP communication"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"http.dns.start"})}),(0,i.jsx)(t.td,{children:"Domain name address to resolve when the target address of the request contains a domain name"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"http.dns.done"})}),(0,i.jsx)(t.td,{children:"IP address after domain name resolution when the request target address contains a domain name"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"http.connect.start"})}),(0,i.jsx)(t.td,{children:"Type and address where connection creation starts"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"http.connect.done"})}),(0,i.jsx)(t.td,{children:"Type and address after successful connection creation"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"http-client-events",children:"HTTP Client Events"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(544144).Z+"",width:"1906",height:"987"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Event/Log"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"http.request.headers"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"Header"})," information submitted by the HTTP client request, which may be large."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"http.request.baggage"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"Baggage"})," information submitted by the HTTP client request for inter-service link information transmission."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"http.request.body"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"Body"})," data submitted by the HTTP client request, which may be large. Only records up to ",(0,i.jsx)(t.code,{children:"512KB"}),", exceeding which will be ignored."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"http.response.headers"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"Header"})," information returned by the HTTP client request, which may be large."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"http.response.body"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"Body"})," data returned by the HTTP client request, which may be large. Only records up to ",(0,i.jsx)(t.code,{children:"512KB"}),", exceeding which will be ignored."]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"http-server-attributes",children:"HTTP Server Attributes"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(675600).Z+"",width:"1916",height:"892"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Attributes"})," of the ",(0,i.jsx)(t.code,{children:"HTTP Server"})," side are the same as those of the ",(0,i.jsx)(t.code,{children:"HTTP Client"}),", and similar data is printed in the same request."]}),"\n",(0,i.jsx)(t.h3,{id:"http-server-events",children:"HTTP Server Events"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(347002).Z+"",width:"1906",height:"980"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Events"})," of the ",(0,i.jsx)(t.code,{children:"HTTP Server"})," side are the same as those of the ",(0,i.jsx)(t.code,{children:"HTTP Client"}),", and similar data is printed in the same request."]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},675600:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/4df0d3d8e5de018788b9b134ea13d535-f62de5aefc2324920211b35df9678635.png"},137519:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/54c448f0e2863c1159a5470adc52aac8-f9f0a20d9a30a839a92acbf5928b3575.png"},829937:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/8237ff1b02be36ce1b4e9c160be80d26-b829dec1897ce6608d1736042927ce87.png"},912641:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/83cd3fa37aab22f429df13682afdbe30-87eab60027abea377dab213c42dd2fa6.png"},544144:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/9d35a850c1713efc19d56ec3ac990013-227ed09487aae5f29d1fbb697d37ded0.png"},870452:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/dcbb5e8e0444a4ce3b433aaa4308222c-1376fa7c4d909f87f4fabb74682d0e13.png"},347002:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/f951072d1f5f116b90350788ad71bc89-3b2851dc4f5506479a76b65d2f411e17.png"},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return d}});var r=n(667294);let i={},s=r.createContext(i);function d(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
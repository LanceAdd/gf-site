"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["56063"],{528063:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>s,toc:()=>d,frontMatter:()=>c});var r=JSON.parse('{"id":"docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-\u6700\u4F73\u5B9E\u8DF5/\u94FE\u8DEF\u8DDF\u8E2A-TraceID\u6CE8\u5165\u548C\u83B7\u53D6","title":"TraceID Injection and Retrieval","description":"How to inject and retrieve TraceID using the GoFrame framework in tracing. TraceID is an important identifier for associating requests between services, passed through the Context parameter, and can be automatically generated, inherited, or customized on both the client and server sides. The glog logging component automatically records TraceID, and GoFrame\'s Client and Server offer convenient TraceID management methods. Practice examples, including custom TraceID and integration methods for handling third-party RequestID, are provided.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-\u6700\u4F73\u5B9E\u8DF5/\u94FE\u8DEF\u8DDF\u8E2A-TraceID\u6CE8\u5165\u548C\u83B7\u53D6.md","sourceDirName":"docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-\u6700\u4F73\u5B9E\u8DF5","slug":"/docs/obs/tracing-practice-inject-traceid","permalink":"/en/docs/obs/tracing-practice-inject-traceid","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-\u6700\u4F73\u5B9E\u8DF5/\u94FE\u8DEF\u8DDF\u8E2A-TraceID\u6CE8\u5165\u548C\u83B7\u53D6.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732451468000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/obs/tracing-practice-inject-traceid","title":"TraceID Injection and Retrieval","sidebar_position":0,"hide_title":true,"keywords":["Tracing","TraceID","GoFrame","OpenTelemetry","Context","Client","Server","Log","Request","Response Header"],"description":"How to inject and retrieve TraceID using the GoFrame framework in tracing. TraceID is an important identifier for associating requests between services, passed through the Context parameter, and can be automatically generated, inherited, or customized on both the client and server sides. The glog logging component automatically records TraceID, and GoFrame\'s Client and Server offer convenient TraceID management methods. Practice examples, including custom TraceID and integration methods for handling third-party RequestID, are provided."},"sidebar":"mainSidebar","previous":{"title":"Tracing - GRPC Example","permalink":"/en/docs/obs/tracing-grpc-example"},"next":{"title":"Service Metrics","permalink":"/en/docs/obs/metrics"}}'),a=t("785893"),i=t("250065");let c={slug:"/docs/obs/tracing-practice-inject-traceid",title:"TraceID Injection and Retrieval",sidebar_position:0,hide_title:!0,keywords:["Tracing","TraceID","GoFrame","OpenTelemetry","Context","Client","Server","Log","Request","Response Header"],description:"How to inject and retrieve TraceID using the GoFrame framework in tracing. TraceID is an important identifier for associating requests between services, passed through the Context parameter, and can be automatically generated, inherited, or customized on both the client and server sides. The glog logging component automatically records TraceID, and GoFrame's Client and Server offer convenient TraceID management methods. Practice examples, including custom TraceID and integration methods for handling third-party RequestID, are provided."},o=void 0,s={},d=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Injection of TraceID",id:"2-injection-of-traceid",level:2},{value:"1. Client",id:"1-client",level:3},{value:"2. Server",id:"2-server",level:3},{value:"3. Retrieval of TraceID",id:"3-retrieval-of-traceid",level:2},{value:"1. Client",id:"1-client-1",level:3},{value:"1) Automatically Generate TraceID (Recommended)",id:"1-automatically-generate-traceid-recommended",level:4},{value:"2) Client Custom TraceID",id:"2-client-custom-traceid",level:4},{value:"3) Read Response Header",id:"3-read-response-header",level:4},{value:"2. Server",id:"2-server-1",level:3},{value:"4. Examples of Use",id:"4-examples-of-use",level:2},{value:"1. HTTP Response Header TraceID",id:"1-http-response-header-traceid",level:3},{value:"2. Injecting <code>TraceID</code> in Client",id:"2-injecting-traceid-in-client",level:3},{value:"3. Custom <code>TraceID</code> in Client",id:"3-custom-traceid-in-client",level:3},{value:"5. Common Questions",id:"5-common-questions",level:2},{value:"1. If not using <code>GoFrame</code> framework&#39;s <code>Client/Server</code>, how to obtain the trace&#39;s <code>TraceID</code>?",id:"1-if-not-using-goframe-frameworks-clientserver-how-to-obtain-the-traces-traceid",level:3},{value:"2. Internal services do not use the standard <code>OpenTelemetry</code> protocol, but each request carries a <code>RequestID</code> parameter in the form of <code>33612a70-990a-11ea-87fe-fd68517e7a2d</code>. How to integrate with <code>TraceID</code>?",id:"2-internal-services-do-not-use-the-standard-opentelemetry-protocol-but-each-request-carries-a-requestid-parameter-in-the-form-of-33612a70-990a-11ea-87fe-fd68517e7a2d-how-to-integrate-with-traceid",level:3}];function l(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,a.jsxs)(n.p,{children:["In tracing, ",(0,a.jsx)(n.code,{children:"TraceID"})," serves as a unique identifier passed between various services, used to associate requests between services, making it a crucial piece of data. ",(0,a.jsx)(n.code,{children:"TraceID"})," is passed through the ",(0,a.jsx)(n.code,{children:"Context"})," parameter, and if you use the framework's ",(0,a.jsx)(n.code,{children:"glog"})," logging component, the ",(0,a.jsx)(n.code,{children:"TraceID"})," will automatically be read and recorded in the log content. Therefore, it is recommended to use the framework's ",(0,a.jsx)(n.code,{children:"glog"})," logging component for logging to perfectly support the tracing feature."]}),"\n",(0,a.jsx)(n.h2,{id:"2-injection-of-traceid",children:"2. Injection of TraceID"}),"\n",(0,a.jsx)(n.h3,{id:"1-client",children:"1. Client"}),"\n",(0,a.jsxs)(n.p,{children:["If using the ",(0,a.jsx)(n.code,{children:"GoFrame"})," framework's ",(0,a.jsx)(n.code,{children:"Client"}),", all requests will inherently include ",(0,a.jsx)(n.code,{children:"TraceID"})," injection. ",(0,a.jsx)(n.code,{children:"GoFrame"})," utilizes the ",(0,a.jsx)(n.code,{children:"OpenTelemetry"})," standard for its ",(0,a.jsx)(n.code,{children:"TraceID"}),", which is a ",(0,a.jsx)(n.code,{children:"32"})," hexadecimal character string."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["It is strongly recommended to use the ",(0,a.jsx)(n.code,{children:"gclient"})," component, which is both feature-rich and equipped with tracing capabilities."]})}),"\n",(0,a.jsx)(n.h3,{id:"2-server",children:"2. Server"}),"\n",(0,a.jsxs)(n.p,{children:["If using the ",(0,a.jsx)(n.code,{children:"GoFrame"})," framework's ",(0,a.jsx)(n.code,{children:"Server"}),", if the request includes a ",(0,a.jsx)(n.code,{children:"TraceID"}),", it will be automatically inherited into the ",(0,a.jsx)(n.code,{children:"Context"}),"; otherwise, a standard ",(0,a.jsx)(n.code,{children:"TraceID"})," will be automatically injected and passed to subsequent logic."]}),"\n",(0,a.jsx)(n.h2,{id:"3-retrieval-of-traceid",children:"3. Retrieval of TraceID"}),"\n",(0,a.jsx)(n.h3,{id:"1-client-1",children:"1. Client"}),"\n",(0,a.jsxs)(n.p,{children:["If using the ",(0,a.jsx)(n.code,{children:"GoFrame"})," framework's ",(0,a.jsx)(n.code,{children:"Client"}),", there are three methods available here."]}),"\n",(0,a.jsx)(n.h4,{id:"1-automatically-generate-traceid-recommended",children:"1) Automatically Generate TraceID (Recommended)"}),"\n",(0,a.jsxs)(n.p,{children:["Create a ",(0,a.jsx)(n.code,{children:"Context"})," with a ",(0,a.jsx)(n.code,{children:"TraceID"})," using the ",(0,a.jsx)(n.code,{children:"gctx.New/WithCtx"})," method, and pass this ",(0,a.jsx)(n.code,{children:"Context"})," parameter when making requests. You can subsequently retrieve the ",(0,a.jsx)(n.code,{children:"TraceID"})," for the entire trace using the ",(0,a.jsx)(n.code,{children:"gctx.CtxId"})," method. Relevant methods:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"// New creates and returns a context which contains context id.\nfunc New() context.Context\n\n// WithCtx creates and returns a context containing context id upon given parent context `ctx`.\nfunc WithCtx(ctx context.Context) context.Context\n"})}),"\n",(0,a.jsxs)(n.p,{children:["When using the ",(0,a.jsx)(n.code,{children:"WithCtx"})," method, if the given ",(0,a.jsx)(n.code,{children:"ctx"})," parameter already contains a ",(0,a.jsx)(n.code,{children:"TraceID"}),", it will be used directly without creating a new one."]}),"\n",(0,a.jsx)(n.h4,{id:"2-client-custom-traceid",children:"2) Client Custom TraceID"}),"\n",(0,a.jsxs)(n.p,{children:["An advanced usage is that the client can customize the ",(0,a.jsx)(n.code,{children:"TraceID"})," using the ",(0,a.jsx)(n.code,{children:"gtrace.WithTraceID"})," method. The method is defined as follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"// WithTraceID injects custom trace id into context to propagate.\nfunc WithTraceID(ctx context.Context, traceID string) (context.Context, error)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"3-read-response-header",children:"3) Read Response Header"}),"\n",(0,a.jsxs)(n.p,{children:["If it is a request to a ",(0,a.jsx)(n.code,{children:"GoFrame"})," framework ",(0,a.jsx)(n.code,{children:"Server"}),", the ",(0,a.jsx)(n.code,{children:"Trace-Id"})," field will be added to the returned request's ",(0,a.jsx)(n.code,{children:"Header"})," for the client to read."]}),"\n",(0,a.jsx)(n.h3,{id:"2-server-1",children:"2. Server"}),"\n",(0,a.jsxs)(n.p,{children:["If using the ",(0,a.jsx)(n.code,{children:"GoFrame"})," framework's ",(0,a.jsx)(n.code,{children:"Server"}),", you can directly obtain the ",(0,a.jsx)(n.code,{children:"TraceID"})," using the ",(0,a.jsx)(n.code,{children:"gctx.CtxId"})," method. Relevant methods:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"// CtxId retrieves and returns the context id from context.\nfunc CtxId(ctx context.Context) string\n"})}),"\n",(0,a.jsx)(n.h2,{id:"4-examples-of-use",children:"4. Examples of Use"}),"\n",(0,a.jsx)(n.h3,{id:"1-http-response-header-traceid",children:"1. HTTP Response Header TraceID"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "time"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        traceID := gctx.CtxId(r.Context())\n        g.Log().Info(r.Context(), "handler")\n        r.Response.Write(traceID)\n    })\n    s.SetPort(8199)\n    go s.Start()\n\n    time.Sleep(time.Second)\n\n    req, err := g.Client().Get(context.Background(), "http://127.0.0.1:8199/")\n    if err != nil {\n        panic(err)\n    }\n    defer req.Close()\n    req.RawDump()\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"After execution, the terminal output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"  ADDRESS | METHOD | ROUTE |                             HANDLER                             |    MIDDLEWARE\n----------|--------|-------|-----------------------------------------------------------------|--------------------\n  :8199   | ALL    | /     | main.main.func1                                                 |\n----------|--------|-------|-----------------------------------------------------------------|--------------------\n  :8199   | ALL    | /*    | github.com/gogf/gf/v2/net/ghttp.internalMiddlewareServerTracing | GLOBAL MIDDLEWARE\n----------|--------|-------|-----------------------------------------------------------------|--------------------\n\n2022-06-06 21:14:37.245 [INFO] pid[55899]: http server started listening on [:8199]\n2022-06-06 21:14:38.247 [INFO] {908d2027560af616e218e912d2ac3972} handler\n+---------------------------------------------+\n|                   REQUEST                   |\n+---------------------------------------------+\nGET / HTTP/1.1\nHost: 127.0.0.1:8199\nUser-Agent: GClient v2.1.0-rc4 at TXQIANGGUO-MB0\nTraceparent: 00-908d2027560af616e218e912d2ac3972-1e291041b9afa718-01\nAccept-Encoding: gzip\n\n+---------------------------------------------+\n|                   RESPONSE                  |\n+---------------------------------------------+\nHTTP/1.1 200 OK\nConnection: close\nContent-Length: 32\nContent-Type: text/plain; charset=utf-8\nDate: Mon, 06 Jun 2022 13:14:38 GMT\nServer: GoFrame HTTP Server\nTrace-Id: 908d2027560af616e218e912d2ac3972\n\n908d2027560af616e218e912d2ac3972\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"2-injecting-traceid-in-client",children:["2. Injecting ",(0,a.jsx)(n.code,{children:"TraceID"})," in Client"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "time"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        traceID := gctx.CtxId(r.Context())\n        g.Log().Info(r.Context(), "handler")\n        r.Response.Write(traceID)\n    })\n    s.SetPort(8199)\n    go s.Start()\n\n    time.Sleep(time.Second)\n\n    ctx := gctx.New()\n    g.Log().Info(ctx, "request starts")\n    content := g.Client().GetContent(ctx, "http://127.0.0.1:8199/")\n    g.Log().Infof(ctx, "response: %s", content)\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"After execution, the terminal output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"2022-06-06 21:17:17.447 [INFO] pid[56070]: http server started listening on [:8199]\n\n  ADDRESS | METHOD | ROUTE |                             HANDLER                             |    MIDDLEWARE\n----------|--------|-------|-----------------------------------------------------------------|--------------------\n  :8199   | ALL    | /     | main.main.func1                                                 |\n----------|--------|-------|-----------------------------------------------------------------|--------------------\n  :8199   | ALL    | /*    | github.com/gogf/gf/v2/net/ghttp.internalMiddlewareServerTracing | GLOBAL MIDDLEWARE\n----------|--------|-------|-----------------------------------------------------------------|--------------------\n\n2022-06-06 21:17:18.450 [INFO] {e843f0737b0af616d8ed185d46ba65c5} request starts\n2022-06-06 21:17:18.451 [INFO] {e843f0737b0af616d8ed185d46ba65c5} handler\n2022-06-06 21:17:18.451 [INFO] {e843f0737b0af616d8ed185d46ba65c5} response: e843f0737b0af616d8ed185d46ba65c5\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"3-custom-traceid-in-client",children:["3. Custom ",(0,a.jsx)(n.code,{children:"TraceID"})," in Client"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "time"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/net/gtrace"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/text/gstr"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        traceID := gctx.CtxId(r.Context())\n        g.Log().Info(r.Context(), "handler")\n        r.Response.Write(traceID)\n    })\n    s.SetPort(8199)\n    go s.Start()\n\n    time.Sleep(time.Second)\n\n    ctx, _ := gtrace.WithTraceID(context.Background(), gstr.Repeat("a", 32))\n    g.Log().Info(ctx, "request starts")\n    content := g.Client().GetContent(ctx, "http://127.0.0.1:8199/")\n    g.Log().Infof(ctx, "response: %s", content)\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"After execution, the terminal output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"  ADDRESS | METHOD | ROUTE |                             HANDLER                             |    MIDDLEWARE\n----------|--------|-------|-----------------------------------------------------------------|--------------------\n  :8199   | ALL    | /     | main.main.func1                                                 |\n----------|--------|-------|-----------------------------------------------------------------|--------------------\n  :8199   | ALL    | /*    | github.com/gogf/gf/v2/net/ghttp.internalMiddlewareServerTracing | GLOBAL MIDDLEWARE\n----------|--------|-------|-----------------------------------------------------------------|--------------------\n\n2022-06-06 21:40:03.897 [INFO] pid[58435]: http server started listening on [:8199]\n2022-06-06 21:40:04.900 [INFO] {aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa} request starts\n2022-06-06 21:40:04.901 [INFO] {aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa} handler\n2022-06-06 21:40:04.901 [INFO] {aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa} response: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n"})}),"\n",(0,a.jsx)(n.h2,{id:"5-common-questions",children:"5. Common Questions"}),"\n",(0,a.jsxs)(n.h3,{id:"1-if-not-using-goframe-frameworks-clientserver-how-to-obtain-the-traces-traceid",children:["1. If not using ",(0,a.jsx)(n.code,{children:"GoFrame"})," framework's ",(0,a.jsx)(n.code,{children:"Client/Server"}),", how to obtain the trace's ",(0,a.jsx)(n.code,{children:"TraceID"}),"?"]}),"\n",(0,a.jsxs)(n.p,{children:["Refer to the implementation of trace in ",(0,a.jsx)(n.code,{children:"GoFrame"})," framework's ",(0,a.jsx)(n.code,{children:"Client/Server"})," and implement it manually. This may involve certain costs."]}),"\n",(0,a.jsxs)(n.p,{children:["If using a third-party ",(0,a.jsx)(n.code,{children:"Client/Server"})," component, refer to the relevant documentation of the third-party component."]}),"\n",(0,a.jsxs)(n.h3,{id:"2-internal-services-do-not-use-the-standard-opentelemetry-protocol-but-each-request-carries-a-requestid-parameter-in-the-form-of-33612a70-990a-11ea-87fe-fd68517e7a2d-how-to-integrate-with-traceid",children:["2. Internal services do not use the standard ",(0,a.jsx)(n.code,{children:"OpenTelemetry"})," protocol, but each request carries a ",(0,a.jsx)(n.code,{children:"RequestID"})," parameter in the form of ",(0,a.jsx)(n.code,{children:"33612a70-990a-11ea-87fe-fd68517e7a2d"}),". How to integrate with ",(0,a.jsx)(n.code,{children:"TraceID"}),"?"]}),"\n",(0,a.jsxs)(n.p,{children:["Based on my analysis, your ",(0,a.jsx)(n.code,{children:"RequestID"})," format closely aligns with the ",(0,a.jsx)(n.code,{children:"TraceID"})," standard, utilizing a ",(0,a.jsx)(n.code,{children:"UUID"})," string, which can be directly converted to a ",(0,a.jsx)(n.code,{children:"TraceID"}),". It is suggested to convert ",(0,a.jsx)(n.code,{children:"RequestID"})," to ",(0,a.jsx)(n.code,{children:"TraceID"})," in the first middleware layer within your ",(0,a.jsx)(n.code,{children:"Server"})," internally and inject it into the ",(0,a.jsx)(n.code,{children:"Context"})," using the custom ",(0,a.jsx)(n.code,{children:"TraceID"})," method, passing the ",(0,a.jsx)(n.code,{children:"Context"})," to subsequent business logic."]}),"\n",(0,a.jsx)(n.p,{children:"Here's an example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/net/gtrace"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    // Internal service\n    internalServer := g.Server("internalServer")\n    internalServer.BindHandler("/", func(r *ghttp.Request) {\n        traceID := gctx.CtxId(r.Context())\n        g.Log().Info(r.Context(), "internalServer handler")\n        r.Response.Write(traceID)\n    })\n    internalServer.SetPort(8199)\n    go internalServer.Start()\n\n    // External service, accessed for testing\n    // http://127.0.0.1:8299/?RequestID=33612a70-990a-11ea-87fe-fd68517e7a2d\n    userSideServer := g.Server("userSideServer")\n    userSideServer.Use(func(r *ghttp.Request) {\n        requestID := r.Get("RequestID").String()\n        if requestID != "" {\n            newCtx, err := gtrace.WithUUID(r.Context(), requestID)\n            if err != nil {\n                panic(err)\n            }\n            r.SetCtx(newCtx)\n        }\n        r.Middleware.Next()\n    })\n    userSideServer.BindHandler("/", func(r *ghttp.Request) {\n        ctx := r.Context()\n        g.Log().Info(ctx, "request internalServer starts")\n        content := g.Client().GetContent(ctx, "http://127.0.0.1:8199/")\n        g.Log().Infof(ctx, "internalServer response: %s", content)\n        r.Response.Write(content)\n    })\n    userSideServer.SetPort(8299)\n    userSideServer.Run()\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["This example code runs two HTTP services to demonstrate inter-service tracing capabilities. One is an internal service that provides functionality; the other is an external service for testing, which achieves its functionality by calling the internal service. After execution, access: ",(0,a.jsx)(n.a,{href:"http://127.0.0.1:8299/?RequestID=33612a70-990a-11ea-87fe-fd68517e7a2d",children:"http://127.0.0.1:8299/?RequestID=33612a70-990a-11ea-87fe-fd68517e7a2d"})]}),"\n",(0,a.jsx)(n.p,{children:"Then check the terminal output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"2022-06-07 14:51:21.957 [INFO] openapi specification is disabled\n2022-06-07 14:51:21.958 [INTE] ghttp_server.go:78 78198: graceful reload feature is disabled\n\n      SERVER     | DOMAIN  | ADDRESS | METHOD | ROUTE |                             HANDLER                             |    MIDDLEWARE\n-----------------|---------|---------|--------|-------|-----------------------------------------------------------------|--------------------\n  internalServer | default | :8199   | ALL    | /     | main.main.func1                                                 |\n-----------------|---------|---------|--------|-------|-----------------------------------------------------------------|--------------------\n  internalServer | default | :8199   | ALL    | /*    | github.com/gogf/gf/v2/net/ghttp.internalMiddlewareServerTracing | GLOBAL MIDDLEWARE\n-----------------|---------|---------|--------|-------|-----------------------------------------------------------------|--------------------\n\n2022-06-07 14:51:21.959 [INFO] pid[78198]: http server started listening on [:8199]\n2022-06-07 14:51:21.965 [INFO] openapi specification is disabled\n\n      SERVER     | DOMAIN  | ADDRESS | METHOD | ROUTE |                             HANDLER                             |    MIDDLEWARE\n-----------------|---------|---------|--------|-------|-----------------------------------------------------------------|--------------------\n  userSideServer | default | :8299   | ALL    | /     | main.main.func3                                                 |\n-----------------|---------|---------|--------|-------|-----------------------------------------------------------------|--------------------\n  userSideServer | default | :8299   | ALL    | /*    | github.com/gogf/gf/v2/net/ghttp.internalMiddlewareServerTracing | GLOBAL MIDDLEWARE\n-----------------|---------|---------|--------|-------|-----------------------------------------------------------------|--------------------\n  userSideServer | default | :8299   | ALL    | /*    | main.main.func2                                                 | GLOBAL MIDDLEWARE\n-----------------|---------|---------|--------|-------|-----------------------------------------------------------------|--------------------\n\n2022-06-07 14:51:21.965 [INFO] pid[78198]: http server started listening on [:8299]\n2022-06-07 14:53:05.322 [INFO] {33612a70990a11ea87fefd68517e7a2d} request internalServer starts\n2022-06-07 14:53:05.323 [INFO] {33612a70990a11ea87fefd68517e7a2d} internalServer handler\n2022-06-07 14:53:05.323 [INFO] {33612a70990a11ea87fefd68517e7a2d} internalServer response: 33612a70990a11ea87fefd68517e7a2d\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We can see that the ",(0,a.jsx)(n.code,{children:"RequestID"})," has been successfully circulated as the ",(0,a.jsx)(n.code,{children:"TraceID"})," through the service chain!"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return c}});var r=t(667294);let a={},i=r.createContext(a);function c(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
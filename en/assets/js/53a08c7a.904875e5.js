"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["76349"],{252952:function(e,r,n){n.r(r),n.d(r,{metadata:()=>t,contentTitle:()=>l,default:()=>u,assets:()=>s,toc:()=>a,frontMatter:()=>o});var t=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u8DEF\u7531\u7BA1\u7406/\u8DEF\u7531\u7BA1\u7406-\u4E2D\u95F4\u4EF6\u62E6\u622A\u5668/\u4E2D\u95F4\u4EF6\u62E6\u622A\u5668-\u57FA\u672C\u4ECB\u7ECD","title":"Middleware - Intro","description":"Basic usage of middleware and interceptors in the GoFrame framework. GoFrame provides a flexible and powerful plugin mechanism for WebServer through an elegant middleware request control method and a classic middleware onion model. Discusses middleware definitions, types, registration methods, and execution priority to provide a comprehensive request flow control solution.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/WEB\u670D\u52A1\u5F00\u53D1/\u8DEF\u7531\u7BA1\u7406/\u8DEF\u7531\u7BA1\u7406-\u4E2D\u95F4\u4EF6\u62E6\u622A\u5668/\u4E2D\u95F4\u4EF6\u62E6\u622A\u5668-\u57FA\u672C\u4ECB\u7ECD.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u8DEF\u7531\u7BA1\u7406/\u8DEF\u7531\u7BA1\u7406-\u4E2D\u95F4\u4EF6\u62E6\u622A\u5668","slug":"/docs/web/router-middleware-intro","permalink":"/en/docs/web/router-middleware-intro","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/\u8DEF\u7531\u7BA1\u7406/\u8DEF\u7531\u7BA1\u7406-\u4E2D\u95F4\u4EF6\u62E6\u622A\u5668/\u4E2D\u95F4\u4EF6\u62E6\u622A\u5668-\u57FA\u672C\u4ECB\u7ECD.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732541616000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/web/router-middleware-intro","title":"Middleware - Intro","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","GoFrame framework","Middleware","Interceptor","HTTP HandlerFunc","CORS","Request Interception","Global Middleware","Group Routing","Execution Priority"],"description":"Basic usage of middleware and interceptors in the GoFrame framework. GoFrame provides a flexible and powerful plugin mechanism for WebServer through an elegant middleware request control method and a classic middleware onion model. Discusses middleware definitions, types, registration methods, and execution priority to provide a comprehensive request flow control solution."},"sidebar":"mainSidebar","previous":{"title":"Router - Middleware","permalink":"/en/docs/web/router-middleware"},"next":{"title":"Middleware - Examples","permalink":"/en/docs/web/router-middleware-example"}}'),i=n("785893"),d=n("250065");let o={slug:"/docs/web/router-middleware-intro",title:"Middleware - Intro",sidebar_position:0,hide_title:!0,keywords:["GoFrame","GoFrame framework","Middleware","Interceptor","HTTP HandlerFunc","CORS","Request Interception","Global Middleware","Group Routing","Execution Priority"],description:"Basic usage of middleware and interceptors in the GoFrame framework. GoFrame provides a flexible and powerful plugin mechanism for WebServer through an elegant middleware request control method and a classic middleware onion model. Discusses middleware definitions, types, registration methods, and execution priority to provide a comprehensive request flow control solution."},l=void 0,s={},a=[{value:"Middleware Definition",id:"middleware-definition",level:2},{value:"Middleware Types",id:"middleware-types",level:2},{value:"Pre-Middleware",id:"pre-middleware",level:3},{value:"Post-Middleware",id:"post-middleware",level:3},{value:"Middleware Registration",id:"middleware-registration",level:2},{value:"Global Middleware",id:"global-middleware",level:3},{value:"Group Routing Middleware",id:"group-routing-middleware",level:3},{value:"Execution Priority",id:"execution-priority",level:2},{value:"Global Middleware",id:"global-middleware-1",level:3},{value:"Group Routing Middleware",id:"group-routing-middleware-1",level:3},{value:"Execution Interruption",id:"execution-interruption",level:2}];function c(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"GoFrame"})," provides an elegant middleware request control method, which is also the mainstream request flow control method provided by ",(0,i.jsx)(r.code,{children:"WebServer"}),". The middleware design can provide more flexible and powerful plugin mechanisms for ",(0,i.jsx)(r.code,{children:"WebServer"}),". The classic middleware onion model:"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:n(712504).Z+"",width:"478",height:"435"})}),"\n",(0,i.jsx)(r.h2,{id:"middleware-definition",children:"Middleware Definition"}),"\n",(0,i.jsxs)(r.p,{children:["The definition of middleware is the same as a normal HTTP execution method ",(0,i.jsx)(r.code,{children:"HandlerFunc"}),", but you can use the ",(0,i.jsx)(r.code,{children:"Middleware"})," attribute object in the ",(0,i.jsx)(r.code,{children:"Request"})," parameter to control the request flow."]}),"\n",(0,i.jsx)(r.p,{children:"Let's take the definition of a middleware for cross-origin requests as an example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-go",children:"func MiddlewareCORS(r *ghttp.Request) {\n    r.Response.CORSDefault()\n    r.Middleware.Next()\n}\n"})}),"\n",(0,i.jsxs)(r.p,{children:["You can see that in this middleware, after the logic for handling cross-origin requests is completed, the ",(0,i.jsx)(r.code,{children:"r.Middleware.Next()"})," method is used to further execute the next process; if you exit directly without calling the ",(0,i.jsx)(r.code,{children:"r.Middleware.Next()"})," method, the subsequent execution process will be exited (this can be used for request authentication processing)."]}),"\n",(0,i.jsx)(r.h2,{id:"middleware-types",children:"Middleware Types"}),"\n",(0,i.jsx)(r.p,{children:"There are two types of middleware: pre-middleware and post-middleware. Pre-middleware is called before the route service function call, and post-middleware is called after it."}),"\n",(0,i.jsx)(r.h3,{id:"pre-middleware",children:"Pre-Middleware"}),"\n",(0,i.jsx)(r.p,{children:"Its definition is similar to:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-go",children:"func Middleware(r *ghttp.Request) {\n    // Middleware processing logic\n    r.Middleware.Next()\n}\n"})}),"\n",(0,i.jsx)(r.h3,{id:"post-middleware",children:"Post-Middleware"}),"\n",(0,i.jsx)(r.p,{children:"Its definition is similar to:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-go",children:"func Middleware(r *ghttp.Request) {\n    r.Middleware.Next()\n    // Middleware processing logic\n}\n"})}),"\n",(0,i.jsx)(r.h2,{id:"middleware-registration",children:"Middleware Registration"}),"\n",(0,i.jsxs)(r.p,{children:["There are multiple ways to register middleware, refer to the API documentation: ",(0,i.jsx)(r.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp"})]}),"\n",(0,i.jsx)(r.h3,{id:"global-middleware",children:"Global Middleware"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-go",children:"func (s *Server) Use(handlers ...HandlerFunc)\n"})}),"\n",(0,i.jsxs)(r.p,{children:["Global middleware is a request interception method that can be ",(0,i.jsx)(r.strong,{children:"used independently"}),", registered through routing rules, and bound to the ",(0,i.jsx)(r.code,{children:"Server"}),'. Since middleware requires request interception operations, it is often used with "fuzzy matching" or "name matching" rules.']}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsx)(r.p,{children:"Global middleware is only effective for dynamic request interception and cannot intercept static file requests."})}),"\n",(0,i.jsx)(r.h3,{id:"group-routing-middleware",children:"Group Routing Middleware"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-go",children:"func (g *RouterGroup) Middleware(handlers ...HandlerFunc) *RouterGroup\n"})}),"\n",(0,i.jsxs)(r.p,{children:["Middleware registered in group routing is bound to all service requests in the current group routing. The bound middleware methods are called before the service request is executed. Group routing has only one middleware registration method ",(0,i.jsx)(r.code,{children:"Middleware"}),". Group routing middleware is different from global middleware in that ",(0,i.jsx)(r.strong,{children:"group routing middleware cannot be used independently"}),", it must be used in group routing registration and bound to all routes in the current group routing as part of the routing method."]}),"\n",(0,i.jsx)(r.h2,{id:"execution-priority",children:"Execution Priority"}),"\n",(0,i.jsx)(r.h3,{id:"global-middleware-1",children:"Global Middleware"}),"\n",(0,i.jsx)(r.p,{children:"Since global middleware is also executed through routing rules, there will be an execution priority:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["First, since global middleware is based on fuzzy route matching, ",(0,i.jsx)(r.strong,{children:"when the same route matches multiple middleware, it will be executed according to the depth-first rule of the route"}),", for more details please refer to the routing chapter;"]}),"\n",(0,i.jsxs)(r.li,{children:["Secondly, ",(0,i.jsx)(r.strong,{children:"under the same route rule, execution is done in the order that middleware is registered"}),", and the middleware registration method also supports registering multiple middleware simultaneously in the order;"]}),"\n",(0,i.jsx)(r.li,{children:"Finally, to avoid priority confusion and for subsequent management, it is recommended to register all middleware in one place in sequential order to control execution priority;"}),"\n"]}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsxs)(r.p,{children:["The recommendation here is referenced from the design of interceptors in ",(0,i.jsx)(r.code,{children:"gRPC"}),", where there is not much route control, and registration is done uniformly in one place with the same method. The simpler it is, the easier it is to understand, and it also facilitates long-term maintenance."]})}),"\n",(0,i.jsx)(r.h3,{id:"group-routing-middleware-1",children:"Group Routing Middleware"}),"\n",(0,i.jsx)(r.p,{children:"Group routing middleware is bound to service methods on the group routing, with no routing rule matching, so execution is done only in the order of registration. Refer to the following example or the execution result of the following code."}),"\n",(0,i.jsx)(r.p,{children:"Expand source code"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/glog"\n)\n\ntype HelloReq struct {\n    g.Meta `path:"/hello" method:"get"`\n}\ntype HelloRes struct {\n}\n\ntype Hello struct{}\n\nfunc (Hello) Say(ctx context.Context, req *HelloReq) (res *HelloRes, err error) {\n    glog.Debug(ctx, "Inside")\n    return\n}\n\nfunc RequestHandle1(r *ghttp.Request) {\n    glog.Debug(r.GetCtx(), "Pre1")\n    r.Middleware.Next()\n}\n\nfunc RequestHandle2(r *ghttp.Request) {\n    glog.Debug(r.GetCtx(), "Pre2")\n    r.Middleware.Next()\n}\n\nfunc RequestHandle3(r *ghttp.Request) {\n    glog.Debug(r.GetCtx(), "Pre3")\n    r.Middleware.Next()\n}\n\nfunc RequestHandle4(r *ghttp.Request) {\n    glog.Debug(r.GetCtx(), "Pre4")\n    r.Middleware.Next()\n}\n\nfunc ResponseHandle1(r *ghttp.Request) {\n    r.Middleware.Next()\n    glog.Debug(r.GetCtx(), "Post1")\n}\n\nfunc ResponseHandle2(r *ghttp.Request) {\n    r.Middleware.Next()\n    glog.Debug(r.GetCtx(), "Post2")\n}\n\nfunc ResponseHandle3(r *ghttp.Request) {\n    r.Middleware.Next()\n    glog.Debug(r.GetCtx(), "Post3")\n}\n\nfunc ResponseHandle4(r *ghttp.Request) {\n    r.Middleware.Next()\n    glog.Debug(r.GetCtx(), "Post4")\n}\n\nfunc main() {\n    s := g.Server()\n    s.Use(ghttp.MiddlewareHandlerResponse)\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        // Pre-Middleware\n        group.Middleware(RequestHandle1)\n        group.Middleware(RequestHandle2)\n\n        // Post-Middleware\n        group.Middleware(ResponseHandle1)\n        group.Middleware(ResponseHandle2)\n\n        group.Group("/sub", func(group *ghttp.RouterGroup) {\n            // Pre-Middleware\n            group.Middleware(RequestHandle3)\n            group.Middleware(RequestHandle4)\n\n            // Post-Middleware\n            group.Middleware(ResponseHandle3)\n            group.Middleware(ResponseHandle4)\n\n            group.Bind(new(Hello))\n        })\n    })\n    s.Run()\n}\n'})}),"\n",(0,i.jsx)(r.p,{children:"Execution result is as follows:"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:n(774172).Z+"",width:"566",height:"197"})}),"\n",(0,i.jsx)(r.h2,{id:"execution-interruption",children:"Execution Interruption"}),"\n",(0,i.jsxs)(r.p,{children:["In the ",(0,i.jsx)(r.strong,{children:"group routing middleware"}),", we can interrupt the current request before the ",(0,i.jsx)(r.code,{children:"Next()"})," call of the ",(0,i.jsx)(r.strong,{children:"pre-middleware"})," with ",(0,i.jsx)(r.code,{children:"return"}),". After the interruption, ",(0,i.jsx)(r.strong,{children:"all subsequent"})," ",(0,i.jsx)(r.strong,{children:"pre-middleware"}),", ",(0,i.jsx)(r.strong,{children:"post-middleware"})," of the ",(0,i.jsx)(r.strong,{children:"same level and sub-level"}),", and ",(0,i.jsx)(r.strong,{children:"request handling methods"})," will not be executed."]}),"\n",(0,i.jsx)(r.p,{children:"In the code above that demonstrates the priority of group routing middleware:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Interrupt before the ",(0,i.jsx)(r.code,{children:"Next()"})," call in ",(0,i.jsx)(r.code,{children:"RequestHandle1"}),", then only ",(0,i.jsx)(r.code,{children:"RequestHandle1"})," will be executed"]}),"\n",(0,i.jsxs)(r.li,{children:["Interrupt before the ",(0,i.jsx)(r.code,{children:"Next()"})," call in ",(0,i.jsx)(r.code,{children:"RequestHandle2"}),", then only ",(0,i.jsx)(r.code,{children:"RequestHandle1"}),", ",(0,i.jsx)(r.code,{children:"RequestHandle2"})," will be executed"]}),"\n",(0,i.jsxs)(r.li,{children:["Interrupt before the ",(0,i.jsx)(r.code,{children:"Next()"})," call in ",(0,i.jsx)(r.code,{children:"RequestHandle3"}),", then ",(0,i.jsx)(r.code,{children:"RequestHandle1"}),", ",(0,i.jsx)(r.code,{children:"RequestHandle2"}),", ",(0,i.jsx)(r.code,{children:"RequestHandle3"}),", as well as ",(0,i.jsx)(r.code,{children:"ResponseHandle2"}),", ",(0,i.jsx)(r.code,{children:"ResponseHandle1"})," will be executed"]}),"\n",(0,i.jsxs)(r.li,{children:["Interrupt before the ",(0,i.jsx)(r.code,{children:"Next()"})," call in ",(0,i.jsx)(r.code,{children:"RequestHandle4"}),", then ",(0,i.jsx)(r.code,{children:"RequestHandle1"}),", ",(0,i.jsx)(r.code,{children:"RequestHandle2"}),", ",(0,i.jsx)(r.code,{children:"RequestHandle3"}),", ",(0,i.jsx)(r.code,{children:"RequestHandle4"}),", as well as ",(0,i.jsx)(r.code,{children:"ResponseHandle2"}),", ",(0,i.jsx)(r.code,{children:"ResponseHandle1"})," will be executed"]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["None of these interrupt cases will execute the ",(0,i.jsx)(r.strong,{children:"request processing method"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["Apart from the common method of using return to terminate the subsequent processing flow in the middleware, the framework also provides ",(0,i.jsx)(r.code,{children:"Exit"})," related methods to forcibly interrupt the execution flow at the code execution location. For specific details, refer to the chapter: ",(0,i.jsx)(r.a,{href:"/en/docs/web/response-exit-exitall-exithook",children:"Response - Exit"})]})]})}function u(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},774172:function(e,r,n){n.d(r,{Z:function(){return t}});let t=n.p+"assets/images/4da7a2b4e8ee0b66e4b21d409e5960a5-b0ab96f9d6bcb3a25092a297ad66859a.png"},712504:function(e,r,n){n.d(r,{Z:function(){return t}});let t=n.p+"assets/images/7ca77c5d5552b0e56a9a142d5c01148b-8e24dcf97ea8ba70e5fd2ff09f2f9061.png"},250065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return o}});var t=n(667294);let i={},d=t.createContext(i);function o(e){let r=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["15974"],{883042:function(e,r,n){n.r(r),n.d(r,{metadata:()=>t,contentTitle:()=>o,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>s});var t=JSON.parse('{"id":"docs/\u5FAE\u670D\u52A1\u5F00\u53D1/\u62E6\u622A\u5668\u7EC4\u4EF6","title":"GRPC Interceptor Component","description":"Methods for using GRPC interceptors in the GoFrame framework, detailing the implementation of server and client interceptors, including features such as link tracing, error handling, and automatic error validation. By using the grpcx component, users can flexibly add and customize interceptors to enhance the scalability and stability of GRPC services and clients.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u5FAE\u670D\u52A1\u5F00\u53D1/\u62E6\u622A\u5668\u7EC4\u4EF6.md","sourceDirName":"docs/\u5FAE\u670D\u52A1\u5F00\u53D1","slug":"/docs/micro-service/interceptor","permalink":"/en/docs/micro-service/interceptor","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u5FAE\u670D\u52A1\u5F00\u53D1/\u62E6\u622A\u5668\u7EC4\u4EF6.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732451468000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/micro-service/interceptor","title":"GRPC Interceptor Component","sidebar_position":4,"hide_title":true,"keywords":["GoFrame","GoFrame Framework","GRPC Interceptor","Server Interceptor","Client Interceptor","grpcx Component","Link Tracing","Error Handling","Automatic Error Validation","Server Panic Capture"],"description":"Methods for using GRPC interceptors in the GoFrame framework, detailing the implementation of server and client interceptors, including features such as link tracing, error handling, and automatic error validation. By using the grpcx component, users can flexibly add and customize interceptors to enhance the scalability and stability of GRPC services and clients."},"sidebar":"mainSidebar","previous":{"title":"GRPC Server Configuration","permalink":"/en/docs/micro-service/config"},"next":{"title":"Service Registry and Discovery","permalink":"/en/docs/micro-service/registry-discovery"}}'),i=n("785893"),c=n("250065");let s={slug:"/docs/micro-service/interceptor",title:"GRPC Interceptor Component",sidebar_position:4,hide_title:!0,keywords:["GoFrame","GoFrame Framework","GRPC Interceptor","Server Interceptor","Client Interceptor","grpcx Component","Link Tracing","Error Handling","Automatic Error Validation","Server Panic Capture"],description:"Methods for using GRPC interceptors in the GoFrame framework, detailing the implementation of server and client interceptors, including features such as link tracing, error handling, and automatic error validation. By using the grpcx component, users can flexibly add and customize interceptors to enhance the scalability and stability of GRPC services and clients."},o=void 0,d={},l=[{value:"Interceptor Usage",id:"interceptor-usage",level:2},{value:"Server",id:"server",level:3},{value:"Client",id:"client",level:3},{value:"Interceptor List",id:"interceptor-list",level:2}];function a(e){let r={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"GRPC"})," supports interceptor features, enhancing the flexibility and extensibility of ",(0,i.jsx)(r.code,{children:"GRPC"}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"interceptor-usage",children:"Interceptor Usage"}),"\n",(0,i.jsx)(r.h3,{id:"server",children:"Server"}),"\n",(0,i.jsxs)(r.p,{children:["Use ",(0,i.jsx)(r.code,{children:"grpcx.Server.ChainUnary"})," to add extra server interceptors:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-go",children:"c := grpcx.Server.NewConfig()\nc.Options = append(c.Options, []grpc.ServerOption{\n    grpcx.Server.ChainUnary(\n        grpcx.Server.UnaryValidate,\n    )}...,\n)\ns := grpcx.Server.New(c)\nuser.Register(s)\ns.Run()\n"})}),"\n",(0,i.jsx)(r.h3,{id:"client",children:"Client"}),"\n",(0,i.jsxs)(r.p,{children:["Use ",(0,i.jsx)(r.code,{children:"grpcx.Client.ChainUnary"})," to add extra server interceptors:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:'conn = grpcx.Client.MustNewGrpcClientConn("demo", grpcx.Client.ChainUnary(\n    grpcx.Client.UnaryTracing,\n))\n'})}),"\n",(0,i.jsx)(r.h2,{id:"interceptor-list",children:"Interceptor List"}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.code,{children:"grpcx"})," component of the framework offers a series of commonly used interceptors, some built-in and others optional."]}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Interceptor"}),(0,i.jsx)(r.th,{children:"Usage Part"}),(0,i.jsx)(r.th,{children:"Built-in"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"UnaryError"})}),(0,i.jsx)(r.td,{children:"Client"}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsx)(r.td,{children:"Supports the framework's error handling component."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"UnaryTracing"})}),(0,i.jsx)(r.td,{children:"Client"}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsx)(r.td,{children:"Supports link tracing."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"StreamTracing"})}),(0,i.jsx)(r.td,{children:"Client"}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsx)(r.td,{children:"Supports link tracing (long connection)."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"UnaryError"})}),(0,i.jsx)(r.td,{children:"Server"}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsx)(r.td,{children:"Supports the framework's error handling component."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"UnaryRecover"})}),(0,i.jsx)(r.td,{children:"Server"}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsxs)(r.td,{children:["Supports automatic capture of server ",(0,i.jsx)(r.code,{children:"panic"})," without crashing."]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"UnaryAllowNilRes"})}),(0,i.jsx)(r.td,{children:"Server"}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsxs)(r.td,{children:["Supports returning ",(0,i.jsx)(r.code,{children:"nil"})," ",(0,i.jsx)(r.code,{children:"Res"})," objects."]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"UnaryValidate"})}),(0,i.jsx)(r.td,{children:"Server"}),(0,i.jsx)(r.td,{children:"No"}),(0,i.jsx)(r.td,{children:"Supports the framework's automatic error validation, based on struct tags. Needs to be manually introduced."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"UnaryTracing"})}),(0,i.jsx)(r.td,{children:"Server"}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsx)(r.td,{children:"Supports link tracing."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"StreamTracing"})}),(0,i.jsx)(r.td,{children:"Server"}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsx)(r.td,{children:"Supports link tracing (long connection)."})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return s}});var t=n(667294);let i={},c=t.createContext(i);function s(e){let r=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);
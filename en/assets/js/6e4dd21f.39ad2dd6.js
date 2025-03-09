"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["39513"],{421668:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>o,default:()=>u,assets:()=>d,toc:()=>l,frontMatter:()=>i});var a=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u8BF7\u6C42\u8F93\u5165/\u8BF7\u6C42\u8F93\u5165-\u9ED8\u8BA4\u503C\u7ED1\u5B9A","title":"Request - Default Value","description":"Functionality in GoFrame framework to bind default values to request input object attributes using struct tags. It demonstrates, through examples, how to define parameter objects and set default values for their attributes, as well as how to process and validate request parameters on the server-side. It particularly emphasizes that default values will take effect when parameters are not submitted, but will be ignored when parameters are submitted (even if empty). Additionally, it provides some suggestions on default value parameter binding considerations.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/WEB\u670D\u52A1\u5F00\u53D1/\u8BF7\u6C42\u8F93\u5165/\u8BF7\u6C42\u8F93\u5165-\u9ED8\u8BA4\u503C\u7ED1\u5B9A.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u8BF7\u6C42\u8F93\u5165","slug":"/docs/web/request-default-value","permalink":"/en/docs/web/request-default-value","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/\u8BF7\u6C42\u8F93\u5165/\u8BF7\u6C42\u8F93\u5165-\u9ED8\u8BA4\u503C\u7ED1\u5B9A.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732451468000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/web/request-default-value","title":"Request - Default Value","sidebar_position":4,"hide_title":true,"keywords":["GoFrame","GoFrame Framework","Request Input","Default Value Binding","struct tag","Parameter Object","Pagination","Server-side","Middleware","ghttp"],"description":"Functionality in GoFrame framework to bind default values to request input object attributes using struct tags. It demonstrates, through examples, how to define parameter objects and set default values for their attributes, as well as how to process and validate request parameters on the server-side. It particularly emphasizes that default values will take effect when parameters are not submitted, but will be ignored when parameters are submitted (even if empty). Additionally, it provides some suggestions on default value parameter binding considerations."},"sidebar":"mainSidebar","previous":{"title":"Request - JSON/XML","permalink":"/en/docs/web/request-json-xml-parameter"},"next":{"title":"Request - Custom Parameters","permalink":"/en/docs/web/request-custom-parameters"}}'),s=n("785893"),r=n("250065");let i={slug:"/docs/web/request-default-value",title:"Request - Default Value",sidebar_position:4,hide_title:!0,keywords:["GoFrame","GoFrame Framework","Request Input","Default Value Binding","struct tag","Parameter Object","Pagination","Server-side","Middleware","ghttp"],description:"Functionality in GoFrame framework to bind default values to request input object attributes using struct tags. It demonstrates, through examples, how to define parameter objects and set default values for their attributes, as well as how to process and validate request parameters on the server-side. It particularly emphasizes that default values will take effect when parameters are not submitted, but will be ignored when parameters are submitted (even if empty). Additionally, it provides some suggestions on default value parameter binding considerations."},o=void 0,d={},l=[{value:"Parameter Object Definition",id:"parameter-object-definition",level:2},{value:"Parameter Object Usage",id:"parameter-object-usage",level:2},{value:"Considerations",id:"considerations",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["From version ",(0,s.jsx)(t.code,{children:"v1.15"}),", the ",(0,s.jsx)(t.code,{children:"Request"})," object supports binding default values to properties of the input object via ",(0,s.jsx)(t.code,{children:"struct tag"}),". The name of the default value ",(0,s.jsx)(t.code,{children:"struct tag"})," is ",(0,s.jsx)(t.code,{children:"d"})," (it can also be ",(0,s.jsx)(t.code,{children:"default"}),")."]}),"\n",(0,s.jsx)(t.p,{children:"Let's look at an example for better understanding."}),"\n",(0,s.jsx)(t.h2,{id:"parameter-object-definition",children:"Parameter Object Definition"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'type GetListReq struct {\n    g.Meta `path:"/" method:"get"`\n    Type   string `v:"required#Please select content model" dc:"Content model"`\n    Page   int    `v:"min:0#Error in pagination number"      dc:"Pagination number" d:"1"`\n    Size   int    `v:"max:50#Maximum pagination count is 50" dc:"Pagination count, maximum 50" d:"10"`\n    Sort   int    `v:"in:0,1,2#Invalid sort type" dc:"Sort type (0: Latest, default. 1: Active, 2: Popular)"`\n}\ntype GetListRes struct {\n    Items []Item `dc:"Content list"`\n}\n\ntype Item struct {\n    Id    int64  `dc:"Content ID"`\n    Title string `dc:"Content title"`\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["This is a parameter object for receiving a request to query the content list. Here, we use the ",(0,s.jsx)(t.code,{children:"d"})," tag to assign default values to the attributes ",(0,s.jsx)(t.code,{children:"Page"})," and ",(0,s.jsx)(t.code,{children:"Size"}),". When these two parameters are not passed, they default to ",(0,s.jsx)(t.code,{children:"1"})," and ",(0,s.jsx)(t.code,{children:"10"}),", meaning pagination starts from page ",(0,s.jsx)(t.code,{children:"1"})," and queries ",(0,s.jsx)(t.code,{children:"10"})," items per page."]}),"\n",(0,s.jsx)(t.h2,{id:"parameter-object-usage",children:"Parameter Object Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\ntype GetListReq struct {\n    g.Meta `path:"/" method:"get"`\n    Type   string `v:"required#Please select content model" dc:"Content model"`\n    Page   int    `v:"min:0#Error in pagination number"      dc:"Pagination number" d:"1"`\n    Size   int    `v:"max:50#Maximum pagination count is 50" dc:"Pagination count, maximum 50" d:"10"`\n    Sort   int    `v:"in:0,1,2#Invalid sort type" dc:"Sort type (0: Latest, default. 1: Active, 2: Popular)"`\n}\ntype GetListRes struct {\n    Items []Item `dc:"Content list"`\n}\n\ntype Item struct {\n    Id    int64  `dc:"Content ID"`\n    Title string `dc:"Content title"`\n}\n\ntype Controller struct{}\n\nfunc (Controller) GetList(ctx context.Context, req *GetListReq) (res *GetListRes, err error) {\n    g.Log().Info(ctx, req)\n    return\n}\n\nfunc main() {\n    s := g.Server()\n    s.Group("/content", func(group *ghttp.RouterGroup) {\n        group.Middleware(ghttp.MiddlewareHandlerResponse)\n        group.Bind(&Controller{})\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Visit the following addresses and check the server terminal output results:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"http://127.0.0.1:8199/content?type=ask",children:"http://127.0.0.1:8199/content?type=ask"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'2023-03-21 21:58:23.058 [INFO] {2883f9c2dc734e170a35c73ea3560b4b} {"Type":"ask","Page":1,"Size":10,"Sort":0}\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"http://127.0.0.1:8199/content?type=ask&page=",children:"http://127.0.0.1:8199/content?type=ask&page="})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'2023-03-21 21:58:32.555 [INFO] {b86e22f9de734e170b35c73edf07859d} {"Type":"ask","Page":1,"Size":10,"Sort":0}\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"http://127.0.0.1:8199/content?type=ask&page=2",children:"http://127.0.0.1:8199/content?type=ask&page=2"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'2023-03-21 22:01:02.907 [INFO] {a016c8fa01744e170f35c73e99082f53} {"Type":"ask","Page":2,"Size":10,"Sort":0}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["As observed, when the client side does not pass or passes an empty ",(0,s.jsx)(t.code,{children:"page"})," parameter, the default values defined on the server side will be used; however, when the client side passes a specific ",(0,s.jsx)(t.code,{children:"page"})," parameter, the default values will not take effect."]}),"\n",(0,s.jsx)(t.h2,{id:"considerations",children:"Considerations"}),"\n",(0,s.jsxs)(t.p,{children:["The default value parameter binding is determined by whether the client ",(0,s.jsx)(t.strong,{children:"has not submitted the parameter"})," to identify if the default value is enabled. If the client has submitted the parameter, ",(0,s.jsx)(t.strong,{children:"even if the parameter value is an empty string"}),", it will be treated as the client having passed a specific value, and the default value tag on the server-side data structure will not take effect."]})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return i}});var a=n(667294);let s={},r=a.createContext(s);function i(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);
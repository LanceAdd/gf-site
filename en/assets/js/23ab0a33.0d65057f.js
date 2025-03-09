"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["62209"],{312173:function(e,t,r){r.r(t),r.d(t,{metadata:()=>a,contentTitle:()=>o,default:()=>c,assets:()=>u,toc:()=>d,frontMatter:()=>i});var a=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u8BF7\u6C42\u8F93\u5165/\u8BF7\u6C42\u8F93\u5165-\u81EA\u5B9A\u4E49\u53C2\u6570","title":"Request - Custom Parameters","description":"Set and retrieve custom request parameters in the GoFrame framework. Custom variables have the highest priority and can override client-submitted parameters, making them suitable for variable sharing throughout the request process. This tutorial also provides real code examples demonstrating how to use the SetParam and GetParam methods within middleware to manage request parameters.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/WEB\u670D\u52A1\u5F00\u53D1/\u8BF7\u6C42\u8F93\u5165/\u8BF7\u6C42\u8F93\u5165-\u81EA\u5B9A\u4E49\u53C2\u6570.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u8BF7\u6C42\u8F93\u5165","slug":"/docs/web/request-custom-parameters","permalink":"/en/docs/web/request-custom-parameters","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/\u8BF7\u6C42\u8F93\u5165/\u8BF7\u6C42\u8F93\u5165-\u81EA\u5B9A\u4E49\u53C2\u6570.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732451468000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/web/request-custom-parameters","title":"Request - Custom Parameters","sidebar_position":5,"hide_title":true,"keywords":["custom parameters","request variables","parameter override","GoFrame","variable sharing","middleware","SetParam","GetParam","request handling","GoFrame framework"],"description":"Set and retrieve custom request parameters in the GoFrame framework. Custom variables have the highest priority and can override client-submitted parameters, making them suitable for variable sharing throughout the request process. This tutorial also provides real code examples demonstrating how to use the SetParam and GetParam methods within middleware to manage request parameters."},"sidebar":"mainSidebar","previous":{"title":"Request - Default Value","permalink":"/en/docs/web/request-default-value"},"next":{"title":"Request - Context","permalink":"/en/docs/web/request-context"}}'),s=r("785893"),n=r("250065");let i={slug:"/docs/web/request-custom-parameters",title:"Request - Custom Parameters",sidebar_position:5,hide_title:!0,keywords:["custom parameters","request variables","parameter override","GoFrame","variable sharing","middleware","SetParam","GetParam","request handling","GoFrame framework"],description:"Set and retrieve custom request parameters in the GoFrame framework. Custom variables have the highest priority and can override client-submitted parameters, making them suitable for variable sharing throughout the request process. This tutorial also provides real code examples demonstrating how to use the SetParam and GetParam methods within middleware to manage request parameters."},o=void 0,u={},d=[];function m(e){let t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Developers can customize some variables in the request, with custom variables having the highest priority, able to override the originally submitted client parameters."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"Custom variables can often be used for variable sharing throughout the request process, but it is important to note that these variables become part of the request parameters and are publicly exposed to the execution flow of the business."})}),"\n",(0,s.jsx)(t.p,{children:"Method list:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"func (r *Request) SetParam(key string, value interface{})\nfunc (r *Request) GetParam(key string, def ...interface{}) interface{}\nfunc (r *Request) GetParamVar(key string, def ...interface{}) *gvar.Var\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Custom variables can be set using the ",(0,s.jsx)(t.code,{children:"SetParam"})," method. Retrieving custom variables can be done through request parameter retrieval methods, such as ",(0,s.jsx)(t.code,{children:"Get/GetVar/GetMap"}),", etc., or through specific custom variable methods ",(0,s.jsx)(t.code,{children:"GetParam/GetParamVar"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Usage example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\n// Pre-middleware 1\nfunc MiddlewareBefore1(r *ghttp.Request) {\n    r.SetParam("name", "GoFrame")\n    r.Response.Writeln("set name")\n    r.Middleware.Next()\n}\n\n// Pre-middleware 2\nfunc MiddlewareBefore2(r *ghttp.Request) {\n    r.SetParam("site", "https://goframe.org")\n    r.Response.Writeln("set site")\n    r.Middleware.Next()\n}\n\nfunc main() {\n    s := g.Server()\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.Middleware(MiddlewareBefore1, MiddlewareBefore2)\n        group.ALL("/", func(r *ghttp.Request) {\n            r.Response.Writefln(\n                "%s: %s",\n                r.GetParam("name").String(),\n                r.GetParam("site").String(),\n            )\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["As you can see, we can use ",(0,s.jsx)(t.code,{children:"SetParam"})," and ",(0,s.jsx)(t.code,{children:"GetParam"})," to set and retrieve custom variables, with the variable's lifecycle being limited to the current request process."]}),"\n",(0,s.jsxs)(t.p,{children:["After execution, visit ",(0,s.jsx)(t.a,{href:"http://127.0.0.1:8199/",children:"http://127.0.0.1:8199/"}),", and the page output content is:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"set name\nset site\nGoFrame: https://goframe.org\n"})})]})}function c(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return i}});var a=r(667294);let s={},n=a.createContext(s);function i(e){let t=a.useContext(n);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);
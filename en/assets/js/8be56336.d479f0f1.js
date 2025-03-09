"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["47021"],{947317:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>p,default:()=>d,assets:()=>s,toc:()=>g,frontMatter:()=>r});var a=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-URL\u6A21\u677F","title":"Pagination - URL Template","description":"Use the gpage of the GoFrame framework for pagination management and realize dynamic page rendering by replacing page number content with built-in variables through the custom URL template function. The article provides detailed code examples demonstrating how to achieve personalized pagination URL configuration by setting the UrlTemplate property, offering developers a flexible and efficient solution.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-URL\u6A21\u677F.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406","slug":"/docs/web/paging-template","permalink":"/en/docs/web/paging-template","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-URL\u6A21\u677F.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732451468000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/web/paging-template","title":"Pagination - URL Template","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","GoFrame framework","gpage","pagination management","URL template","custom URL","built-in variables","page rendering","code examples","template replacement"],"description":"Use the gpage of the GoFrame framework for pagination management and realize dynamic page rendering by replacing page number content with built-in variables through the custom URL template function. The article provides detailed code examples demonstrating how to achieve personalized pagination URL configuration by setting the UrlTemplate property, offering developers a flexible and efficient solution."},"sidebar":"mainSidebar","previous":{"title":"Pagination - Ajax Paging","permalink":"/en/docs/web/paging-ajax"},"next":{"title":"Pagination - Custom Paging","permalink":"/en/docs/web/paging-customization"}}'),i=n("785893"),o=n("250065");let r={slug:"/docs/web/paging-template",title:"Pagination - URL Template",sidebar_position:3,hide_title:!0,keywords:["GoFrame","GoFrame framework","gpage","pagination management","URL template","custom URL","built-in variables","page rendering","code examples","template replacement"],description:"Use the gpage of the GoFrame framework for pagination management and realize dynamic page rendering by replacing page number content with built-in variables through the custom URL template function. The article provides detailed code examples demonstrating how to achieve personalized pagination URL configuration by setting the UrlTemplate property, offering developers a flexible and efficient solution."},p=void 0,s={},g=[];function l(e){let t={code:"code",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"gpage"})," supports custom ",(0,i.jsx)(t.code,{children:"URL"})," templates, where the ",(0,i.jsx)(t.code,{children:"{.page}"})," built-in variable can be used to replace the content of the page number. Let's look at a simple example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/gview"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/page/template/{page}.html", func(r *ghttp.Request) {\n        page := r.GetPage(100, 10)\n        page.UrlTemplate = "/order/list/{.page}.html"\n        buffer, _ := gview.ParseContent(`\n        <html>\n            <head>\n                <style>\n                    a,span {padding:8px; font-size:16px;}\n                    div{margin:5px 5px 20px 5px}\n                </style>\n            </head>\n            <body>\n                <div>{{.page1}}</div>\n                <div>{{.page2}}</div>\n                <div>{{.page3}}</div>\n                <div>{{.page4}}</div>\n            </body>\n        </html>\n        `, g.Map{\n            "page1": page.GetContent(1),\n            "page2": page.GetContent(2),\n            "page3": page.GetContent(3),\n            "page4": page.GetContent(4),\n        })\n        r.Response.Write(buffer)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["In the code, we can set the ",(0,i.jsx)(t.code,{children:"URL"})," template using the ",(0,i.jsx)(t.code,{children:"UrlTemplate"})," property. After executing, the result is as follows:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(184224).Z+"",width:"660",height:"230"})})]})}function d(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},184224:function(e,t,n){n.d(t,{Z:function(){return a}});let a=n.p+"assets/images/a67f2f6285ed959812f70fd066e7453a-ba3cd994a145bf97246f07323673b7d2.png"},250065:function(e,t,n){n.d(t,{Z:function(){return p},a:function(){return r}});var a=n(667294);let i={},o=a.createContext(i);function r(e){let t=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);
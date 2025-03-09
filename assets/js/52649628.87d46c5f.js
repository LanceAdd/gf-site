"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["44935"],{259991:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>c,default:()=>o,assets:()=>i,toc:()=>r,frontMatter:()=>p});var a=JSON.parse('{"id":"WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-\u52A8\u6001\u5206\u9875","title":"\u5206\u9875\u7BA1\u7406-\u52A8\u6001\u5206\u9875","description":"\u52A8\u6001\u5206\u9875\u662F\u901A\u8FC7 GET \u53C2\u6570(\u901A\u8FC7 QueryString)\u4F20\u9012\u5206\u9875\u53C2\u6570\uFF0C\u9ED8\u8BA4\u5206\u9875\u53C2\u6570\u540D\u79F0\u4E3A page\u3002","source":"@site/versioned_docs/version-1.16.x/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-\u52A8\u6001\u5206\u9875.md","sourceDirName":"WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406","slug":"/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-\u52A8\u6001\u5206\u9875","permalink":"/1.16.x/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-\u52A8\u6001\u5206\u9875","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-\u52A8\u6001\u5206\u9875.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"\u5206\u9875\u7BA1\u7406-\u52A8\u6001\u5206\u9875","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u5206\u9875\u7BA1\u7406","permalink":"/1.16.x/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/"},"next":{"title":"\u5206\u9875\u7BA1\u7406-\u9759\u6001\u5206\u9875","permalink":"/1.16.x/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-\u9759\u6001\u5206\u9875"}}'),l=n("785893"),s=n("250065");let p={title:"\u5206\u9875\u7BA1\u7406-\u52A8\u6001\u5206\u9875",sidebar_position:0,hide_title:!0},c=void 0,i={},r=[];function d(e){let t={code:"code",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:["\u52A8\u6001\u5206\u9875\u662F\u901A\u8FC7 ",(0,l.jsx)(t.code,{children:"GET"})," \u53C2\u6570(\u901A\u8FC7 ",(0,l.jsx)(t.code,{children:"QueryString"}),")\u4F20\u9012\u5206\u9875\u53C2\u6570\uFF0C\u9ED8\u8BA4\u5206\u9875\u53C2\u6570\u540D\u79F0\u4E3A ",(0,l.jsx)(t.code,{children:"page"}),"\u3002"]}),"\n",(0,l.jsx)(t.p,{children:"\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/frame/g"\n    "github.com/gogf/gf/net/ghttp"\n    "github.com/gogf/gf/os/gview"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/page/demo", func(r *ghttp.Request) {\n        page := r.GetPage(100, 10)\n        buffer, _ := gview.ParseContent(`\n        <html>\n            <head>\n                <style>\n                    a,span {padding:8px; font-size:16px;}\n                    div{margin:5px 5px 20px 5px}\n                </style>\n            </head>\n            <body>\n                <div>{{.page1}}</div>\n                <div>{{.page2}}</div>\n                <div>{{.page3}}</div>\n                <div>{{.page4}}</div>\n            </body>\n        </html>\n        `, g.Map{\n            "page1": page.GetContent(1),\n            "page2": page.GetContent(2),\n            "page3": page.GetContent(3),\n            "page4": page.GetContent(4),\n        })\n        r.Response.Write(buffer)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n\n'})}),"\n",(0,l.jsxs)(t.p,{children:["\u8BE5\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u5C55\u793A\u4E86\u56DB\u79CD\u9884\u5B9A\u4E49\u7684\u5206\u9875\u6837\u5F0F\uFF0C\u5E76\u901A\u8FC7 ",(0,l.jsx)(t.code,{children:"GET"})," \u65B9\u5F0F\u8FDB\u884C\u5206\u9875\u4F20\u53C2\u3002\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7684\u5185\u5BB9\u5982\u4E0B\u56FE\u6240\u793A\uFF1A"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:n(990450).Z+"",width:"677",height:"205"})})]})}function o(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},990450:function(e,t,n){n.d(t,{Z:function(){return a}});let a="data:image/png;base64,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"},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return p}});var a=n(667294);let l={},s=a.createContext(l);function p(e){let t=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:p(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);
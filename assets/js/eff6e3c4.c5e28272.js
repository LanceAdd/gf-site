"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["94269"],{319271:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>o,default:()=>l,assets:()=>c,toc:()=>d,frontMatter:()=>s});var a=JSON.parse('{"id":"WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-Ajax\u5206\u9875","title":"\u5206\u9875\u7BA1\u7406-Ajax\u5206\u9875","description":"Ajax \u5206\u9875\u4E0E\u5176\u4ED6\u5206\u9875\u65B9\u5F0F\u7684\u533A\u522B\u5728\u4E8E\uFF0C\u5206\u9875\u94FE\u63A5\u4F1A\u4F7F\u7528 Javascript \u65B9\u6CD5\u6765\u5B9E\u73B0\uFF0C\u8BE5 Javascript \u65B9\u6CD5\u662F\u5206\u9875\u65B9\u6CD5\uFF0C\u53C2\u6570\u56FA\u5B9A\u4E3A\u8BE5\u5206\u9875\u5BF9\u5E94\u7684\u5206\u9875 URL \u5730\u5740\u3002\u8BE5 Javascript \u65B9\u6CD5\u901A\u8FC7 Ajax \u83B7\u53D6\u5230 URL \u8FDE\u63A5\u5BF9\u5E94\u7684\u5206\u9875\u5185\u5BB9\u540E\u6E32\u67D3\u5230\u9875\u9762\u3002","source":"@site/versioned_docs/version-2.4.x/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-Ajax\u5206\u9875.md","sourceDirName":"WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406","slug":"/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-Ajax\u5206\u9875","permalink":"/2.4.x/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-Ajax\u5206\u9875","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-Ajax\u5206\u9875.md","tags":[],"version":"2.4.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":2,"frontMatter":{"title":"\u5206\u9875\u7BA1\u7406-Ajax\u5206\u9875","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u5206\u9875\u7BA1\u7406-\u9759\u6001\u5206\u9875","permalink":"/2.4.x/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-\u9759\u6001\u5206\u9875"},"next":{"title":"\u5206\u9875\u7BA1\u7406-URL\u6A21\u677F","permalink":"/2.4.x/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-URL\u6A21\u677F"}}'),i=t("785893"),r=t("250065");let s={title:"\u5206\u9875\u7BA1\u7406-Ajax\u5206\u9875",sidebar_position:2,hide_title:!0},o=void 0,c={},d=[];function p(e){let n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Ajax"})," \u5206\u9875\u4E0E\u5176\u4ED6\u5206\u9875\u65B9\u5F0F\u7684\u533A\u522B\u5728\u4E8E\uFF0C\u5206\u9875\u94FE\u63A5\u4F1A\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"Javascript"})," \u65B9\u6CD5\u6765\u5B9E\u73B0\uFF0C\u8BE5 ",(0,i.jsx)(n.code,{children:"Javascript"})," \u65B9\u6CD5\u662F\u5206\u9875\u65B9\u6CD5\uFF0C\u53C2\u6570\u56FA\u5B9A\u4E3A\u8BE5\u5206\u9875\u5BF9\u5E94\u7684\u5206\u9875 ",(0,i.jsx)(n.code,{children:"URL"})," \u5730\u5740\u3002\u8BE5 ",(0,i.jsx)(n.code,{children:"Javascript"})," \u65B9\u6CD5\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"Ajax"})," \u83B7\u53D6\u5230 ",(0,i.jsx)(n.code,{children:"URL"})," \u8FDE\u63A5\u5BF9\u5E94\u7684\u5206\u9875\u5185\u5BB9\u540E\u6E32\u67D3\u5230\u9875\u9762\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5B8C\u6574\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/gview"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/page/ajax", func(r *ghttp.Request) {\n        page := r.GetPage(100, 10)\n        page.AjaxActionName = "DoAjax"\n        buffer, _ := gview.ParseContent(`\n        <html>\n            <head>\n                <style>\n                    a,span {padding:8px; font-size:16px;}\n                    div{margin:5px 5px 20px 5px}\n                </style>\n                <script src="https://cdn.bootcss.com/jquery/2.0.3/jquery.min.js"><\/script>\n                <script>\n                function DoAjax(url) {\n                     $.get(url, function(data,status) {\n                         $("body").html(data);\n                     });\n                }\n                <\/script>\n            </head>\n            <body>\n                <div>{{.page1}}</div>\n                <div>{{.page2}}</div>\n                <div>{{.page3}}</div>\n                <div>{{.page4}}</div>\n            </body>\n        </html>\n        `, g.Map{\n            "page1": page.GetContent(1),\n            "page2": page.GetContent(2),\n            "page3": page.GetContent(3),\n            "page4": page.GetContent(4),\n        })\n        r.Response.Write(buffer)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u8BE5\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"DoAjax(url)"})," \u65B9\u6CD5\u7528\u6765\u6267\u884C\u5206\u9875\u64CD\u4F5C\uFF0C\u4E3A\u6F14\u793A\u9700\u8981\u5B83\u903B\u8F91\u5F88\u7B80\u5355\uFF0C\u4F1A\u52A0\u8F7D\u6307\u5B9A\u5206\u9875\u9875\u9762\u7684\u5185\u5BB9\u5E76\u8986\u76D6\u6389\u5F53\u524D\u9875\u9762\u7684\u5206\u9875\u5185\u5BB9\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'function DoAjax(url) {\n     $.get(url, function(data,status) {\n         $("body").html(data);\n     });\n}\n'})})]})}function l(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var a=t(667294);let i={},r=a.createContext(i);function s(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);
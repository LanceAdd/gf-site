"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["9714"],{681267:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/\u81EA\u5B9A\u4E49\u72B6\u6001\u7801\u5904\u7406","title":"\u81EA\u5B9A\u4E49\u72B6\u6001\u7801\u5904\u7406","description":"\u6211\u4EEC\u53EF\u4EE5\u5BF9WebServer\u6307\u5B9A\u7684\u72B6\u6001\u7801\u8FDB\u884C\u81EA\u5B9A\u4E49\u5904\u7406\uFF0C\u4F8B\u5982\u9488\u5BF9\u5E38\u89C1\u7684 404/403/500 \u7B49\u9519\u8BEF\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C55\u793A\u81EA\u5B9A\u4E49\u7684\u9519\u8BEF\u4FE1\u606F\u3001\u9875\u9762\u5185\u5BB9\uFF0C\u6216\u8005\u8DF3\u8F6C\u5230\u4E00\u4E2A\u7279\u5B9A\u7684\u9875\u9762\u3002","source":"@site/versioned_docs/version-2.0.x/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/\u81EA\u5B9A\u4E49\u72B6\u6001\u7801\u5904\u7406.md","sourceDirName":"WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027","slug":"/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/\u81EA\u5B9A\u4E49\u72B6\u6001\u7801\u5904\u7406","permalink":"/2.0.x/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/\u81EA\u5B9A\u4E49\u72B6\u6001\u7801\u5904\u7406","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.0.x/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/\u81EA\u5B9A\u4E49\u72B6\u6001\u7801\u5904\u7406.md","tags":[],"version":"2.0.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":8,"frontMatter":{"title":"\u81EA\u5B9A\u4E49\u72B6\u6001\u7801\u5904\u7406","sidebar_position":8,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"WebSocket\u670D\u52A1","permalink":"/2.0.x/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/WebSocket\u670D\u52A1"},"next":{"title":"PProf\u670D\u52A1\u6027\u80FD\u5206\u6790","permalink":"/2.0.x/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/PProf\u670D\u52A1\u6027\u80FD\u5206\u6790"}}'),r=t("785893"),i=t("250065");let a={title:"\u81EA\u5B9A\u4E49\u72B6\u6001\u7801\u5904\u7406",sidebar_position:8,hide_title:!0},d=void 0,o={},c=[{value:"\u57FA\u672C\u4F7F\u7528",id:"\u57FA\u672C\u4F7F\u7528",level:2},{value:"\u6279\u91CF\u8BBE\u7F6E",id:"\u6279\u91CF\u8BBE\u7F6E",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u5BF9WebServer\u6307\u5B9A\u7684\u72B6\u6001\u7801\u8FDB\u884C\u81EA\u5B9A\u4E49\u5904\u7406\uFF0C\u4F8B\u5982\u9488\u5BF9\u5E38\u89C1\u7684 ",(0,r.jsx)(n.code,{children:"404/403/500"})," \u7B49\u9519\u8BEF\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C55\u793A\u81EA\u5B9A\u4E49\u7684\u9519\u8BEF\u4FE1\u606F\u3001\u9875\u9762\u5185\u5BB9\uFF0C\u6216\u8005\u8DF3\u8F6C\u5230\u4E00\u4E2A\u7279\u5B9A\u7684\u9875\u9762\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u76F8\u5173\u65B9\u6CD5\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func (s *Server) BindStatusHandler(status int, handler HandlerFunc)\nfunc (s *Server) BindStatusHandlerByMap(handlerMap map[int]HandlerFunc)\n\nfunc (d *Domain) BindStatusHandler(status int, handler HandlerFunc)\nfunc (d *Domain) BindStatusHandlerByMap(handlerMap map[int]HandlerFunc)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"BindStatusHandler"})," \u6216\u8005 ",(0,r.jsx)(n.code,{children:"BindStatusHandlerMap"})," \u6765\u5B9E\u73B0\u9488\u5BF9\u6307\u5B9A\u7684\u72B6\u6001\u7801\u8FDB\u884C\u81EA\u5B9A\u4E49\u7684\u56DE\u8C03\u51FD\u6570\u5904\u7406\uFF0C\u5E76\u4E14\u8BE5\u7279\u6027\u4E5F\u652F\u6301\u9488\u5BF9\u7279\u5B9A\u7684\u57DF\u540D\u7ED1\u5B9A\u3002\u6211\u4EEC\u6765\u770B\u51E0\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u57FA\u672C\u4F7F\u7528",children:"\u57FA\u672C\u4F7F\u7528"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request){\n        r.Response.Writeln("halo \u4E16\u754C\uFF01")\n    })\n    s.BindStatusHandler(404, func(r *ghttp.Request){\n        r.Response.Writeln("This is customized 404 page")\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6267\u884C\u540E\uFF0C\u6211\u4EEC\u8BBF\u95EE\u6CA1\u6709\u7ED1\u5B9A\u7684\u8DEF\u7531\u9875\u9762\uFF0C\u4F8B\u5982 ",(0,r.jsx)(n.a,{href:"http://127.0.0.1:8199/test",children:"http://127.0.0.1:8199/test"})," \uFF0C\u53EF\u4EE5\u770B\u5230\uFF0C\u9875\u9762\u663E\u793A\u4E86\u6211\u4EEC\u671F\u671B\u7684\u8FD4\u56DE\u7ED3\u679C\uFF1A ",(0,r.jsx)(n.code,{children:"This is customized 404 page"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6B64\u5916\uFF0C\u5E38\u89C1\u7684Web\u9875\u9762\u8BF7\u6C42\u9519\u8BEF\u72B6\u6001\u7801\u5904\u7406\u65B9\u5F0F\uFF0C\u662F\u5F15\u5BFC\u7528\u6237\u8DF3\u8F6C\u5230\u6307\u5B9A\u7684\u9519\u8BEF\u9875\u9762\uFF0C\u56E0\u6B64\uFF0C\u5728\u72B6\u6001\u7801\u56DE\u8C03\u5904\u7406\u51FD\u6570\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"r.RedirectTo"})," \u65B9\u6CD5\u6765\u8FDB\u884C\u9875\u9762\u8DF3\u8F6C\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/status/:status", func(r *ghttp.Request) {\n        r.Response.Write("woops, status ", r.Get("status"), " found")\n    })\n    s.BindStatusHandler(404, func(r *ghttp.Request){\n        r.Response.RedirectTo("/status/404")\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6267\u884C\u540E\uFF0C\u6211\u4EEC\u624B\u52A8\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u9875\u9762\uFF0C\u4F8B\u5982 ",(0,r.jsx)(n.a,{href:"http://127.0.0.1:8199/test",children:"http://127.0.0.1:8199/test"})," \uFF0C\u53EF\u4EE5\u770B\u5230\uFF0C\u9875\u9762\u88AB\u5F15\u5BFC\u8DF3\u8F6C\u5230\u4E86 ",(0,r.jsx)(n.a,{href:"http://127.0.0.1:8199/status/404",children:"http://127.0.0.1:8199/status/404"})," \u9875\u9762\uFF0C\u5E76\u4E14\u53EF\u4EE5\u770B\u5230\u9875\u9762\u8FD4\u56DE\u5185\u5BB9\uFF1A ",(0,r.jsx)(n.code,{children:"woops, status 404 found"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u6279\u91CF\u8BBE\u7F6E",children:"\u6279\u91CF\u8BBE\u7F6E"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindStatusHandlerByMap(map[int]ghttp.HandlerFunc {\n        403 : func(r *ghttp.Request){r.Response.Writeln("403")},\n        404 : func(r *ghttp.Request){r.Response.Writeln("404")},\n        500 : func(r *ghttp.Request){r.Response.Writeln("500")},\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"BindStatusHandlerByMap"})," \u65B9\u6CD5\u5BF9\u9700\u8981\u81EA\u5B9A\u4E49\u7684\u72B6\u6001\u7801\u8FDB\u884C\u6279\u91CF\u8BBE\u7F6E\u3002\u8BE5\u793A\u4F8B\u7A0B\u5E8F\u6267\u884C\u540E\uFF0C\u5F53\u670D\u52A1\u63A5\u53E3\u8FD4\u56DE\u7684\u72B6\u6001\u7801\u4E3A ",(0,r.jsx)(n.code,{children:"403/404/500"})," \u65F6\uFF0C\u63A5\u53E3\u5C06\u4F1A\u8FD4\u56DE\u5BF9\u5E94\u7684\u72B6\u6001\u7801\u6570\u5B57\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u81EA\u5B9A\u4E49\u72B6\u6001\u7801\u5904\u7406\u65B9\u6CD5\u4E2D\u5982\u679C\u6D89\u53CA\u5230\u5185\u5BB9\u7684\u8F93\u51FA\uFF0C\u5F80\u5F80\u9700\u8981\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"r.Response.ClearBuffer()"})," \u65B9\u6CD5\u5C06\u539F\u672C\u7F13\u51B2\u533A\u7684\u8F93\u51FA\u5185\u5BB9\u6E05\u7A7A\u3002"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return a}});var s=t(667294);let r={},i=s.createContext(r);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
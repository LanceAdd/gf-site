"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["87858"],{991228:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>p,assets:()=>s,toc:()=>a,frontMatter:()=>d});var r=JSON.parse('{"id":"WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-Redirect","title":"\u6570\u636E\u8FD4\u56DE-Redirect","description":"\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 RedirectTo/RedirectBack \u6765\u5B9E\u73B0\u9875\u9762\u4E4B\u95F4\u7684\u8DF3\u8F6C\uFF0C\u8BE5\u529F\u80FD\u901A\u8FC7 Location Header \u5B9E\u73B0\u3002\u76F8\u5173\u65B9\u6CD5\uFF1A","source":"@site/versioned_docs/version-2.2.x/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-Redirect.md","sourceDirName":"WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE","slug":"/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-Redirect","permalink":"/en/2.2.x/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-Redirect","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-Redirect.md","tags":[],"version":"2.2.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":2,"frontMatter":{"title":"\u6570\u636E\u8FD4\u56DE-Redirect","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u6570\u636E\u8FD4\u56DE-JSON/XML","permalink":"/en/2.2.x/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-JSONXML"},"next":{"title":"\u6570\u636E\u8FD4\u56DE-Exit\u63A7\u5236","permalink":"/en/2.2.x/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-Exit\u63A7\u5236"}}'),i=t("785893"),c=t("250065");let d={title:"\u6570\u636E\u8FD4\u56DE-Redirect",sidebar_position:2,hide_title:!0},o=void 0,s={},a=[{value:"<code>RedirectTo</code>",id:"redirectto",level:2},{value:"<code>RedirectBack</code>",id:"redirectback",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"RedirectTo/RedirectBack"})," \u6765\u5B9E\u73B0\u9875\u9762\u4E4B\u95F4\u7684\u8DF3\u8F6C\uFF0C\u8BE5\u529F\u80FD\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"Location Header"})," \u5B9E\u73B0\u3002\u76F8\u5173\u65B9\u6CD5\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func (r *Response) RedirectBack(code ...int)\nfunc (r *Response) RedirectTo(location string, code ...int)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"redirectto",children:(0,i.jsx)(n.code,{children:"RedirectTo"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ReditectTo"})," \u7528\u4EE5\u5F15\u5BFC\u5BA2\u6237\u7AEF\u8DF3\u8F6C\u5230\u6307\u5B9A\u7684\u5730\u5740\uFF0C\u5730\u5740\u53EF\u4EE5\u662F\u4E00\u4E2A\u672C\u5730\u670D\u52A1\u7684\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u5B8C\u6574\u7684 ",(0,i.jsx)(n.code,{children:"HTTP"})," \u5730\u5740\u3002\u4F7F\u7528\u793A\u4F8B\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Response.RedirectTo("/login")\n    })\n    s.BindHandler("/login", func(r *ghttp.Request) {\n        r.Response.Writeln("Login First")\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u8FD0\u884C\u540E\uFF0C\u6211\u4EEC\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE ",(0,i.jsx)(n.a,{href:"http://127.0.0.1:8199/",children:"http://127.0.0.1:8199/"}),"\xa0\u968F\u540E\u53EF\u4EE5 \u53D1\u73B0\u6D4F\u89C8\u5668\u7ACB\u5373\u8DF3\u8F6C\u5230\u4E86 ",(0,i.jsx)(n.a,{href:"http://127.0.0.1:8199/login",children:"http://127.0.0.1:8199/login"})," \u9875\u9762\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"redirectback",children:(0,i.jsx)(n.code,{children:"RedirectBack"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"RedirectBack"})," \u7528\u4EE5\u5F15\u5BFC\u5BA2\u6237\u7AEF\u8DF3\u8F6C\u5230\u4E0A\u4E00\u9875\u9762\u5730\u5740\uFF0C\u4E0A\u4E00\u9875\u9762\u5730\u5740\u662F\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"Referer Header"})," \u83B7\u53D6\u7684\uFF0C\u4E00\u822C\u6765\u8BF4\u6D4F\u89C8\u5668\u5BA2\u6237\u7AEF\u90FD\u4F1A\u4F20\u9012\u8FD9\u4E00Header\u3002\u4F7F\u7528\u793A\u4F8B\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/page", func(r *ghttp.Request) {\n        r.Response.Writeln(`<a href="/back">back</a>`)\n    })\n    s.BindHandler("/back", func(r *ghttp.Request) {\n        r.Response.RedirectBack()\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u8FD0\u884C\u540E\uFF0C\u6211\u4EEC\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE ",(0,i.jsx)(n.a,{href:"http://127.0.0.1:8199/page",children:"http://127.0.0.1:8199/page"})," \u70B9\u51FB\u9875\u9762\u7684 ",(0,i.jsx)(n.code,{children:"back"})," \u8FDE\u63A5 \uFF0C\u53EF\u4EE5\u53D1\u73B0\u70B9\u51FB\u540E\u9875\u9762\u968F\u540E\u53C8\u8DF3\u8F6C\u4E86\u56DE\u6765\u3002"]})]})}function p(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var r=t(667294);let i={},c=r.createContext(i);function d(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);
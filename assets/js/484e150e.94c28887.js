"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["3740"],{364903:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>a,assets:()=>t,toc:()=>l,frontMatter:()=>c});var s=JSON.parse('{"id":"WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-\u6A21\u677F\u89E3\u6790","title":"\u6570\u636E\u8FD4\u56DE-\u6A21\u677F\u89E3\u6790","description":"\u76F8\u5173\u65B9\u6CD5\uFF1A","source":"@site/versioned_docs/version-2.5.x/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-\u6A21\u677F\u89E3\u6790.md","sourceDirName":"WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE","slug":"/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-\u6A21\u677F\u89E3\u6790","permalink":"/2.5.x/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-\u6A21\u677F\u89E3\u6790","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-\u6A21\u677F\u89E3\u6790.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":5,"frontMatter":{"title":"\u6570\u636E\u8FD4\u56DE-\u6A21\u677F\u89E3\u6790","sidebar_position":5,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u6570\u636E\u8FD4\u56DE-\u6587\u4EF6\u4E0B\u8F7D","permalink":"/2.5.x/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-\u6587\u4EF6\u4E0B\u8F7D"},"next":{"title":"\u6570\u636E\u8FD4\u56DE-Stream\u8FD4\u56DE","permalink":"/2.5.x/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-Stream\u8FD4\u56DE"}}'),i=r("785893"),o=r("250065");let c={title:"\u6570\u636E\u8FD4\u56DE-\u6A21\u677F\u89E3\u6790",sidebar_position:5,hide_title:!0},d=void 0,t={},l=[{value:"\u5185\u7F6E\u53D8\u91CF",id:"\u5185\u7F6E\u53D8\u91CF",level:2},{value:"<code>Config</code>",id:"config",level:3},{value:"<code>Cookie</code>",id:"cookie",level:3},{value:"<code>Session</code>",id:"session",level:3},{value:"<code>Query</code>",id:"query",level:3},{value:"<code>Form</code>",id:"form",level:3},{value:"<code>Request</code>",id:"request",level:3},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u76F8\u5173\u65B9\u6CD5\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func (r *Response) WriteTpl(tpl string, params ...gview.Params) error\nfunc (r *Response) WriteTplContent(content string, params ...gview.Params) error\nfunc (r *Response) WriteTplDefault(params ...gview.Params) error\nfunc (r *Response) ParseTpl(tpl string, params ...gview.Params) (string, error)\nfunc (r *Response) ParseTplContent(content string, params ...gview.Params) (string, error)\nfunc (r *Response) ParseTplDefault(params ...gview.Params) (string, error)\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Response"})," \u652F\u6301\u6A21\u677F\u6587\u4EF6/\u5185\u5BB9\u89E3\u6790\u8F93\u51FA\uFF0C\u6216\u8005\u6A21\u677F\u6587\u4EF6/\u5185\u5BB9\u89E3\u6790\u8FD4\u56DE\u3002\u4E0E\u76F4\u63A5\u4F7F\u7528\u6A21\u677F\u5BF9\u8C61\u89E3\u6790\u6A21\u677F\u529F\u80FD\u4E0D\u540C\u7684\u662F\uFF0C ",(0,i.jsx)(n.code,{children:"Response"})," \u7684\u89E3\u6790\u652F\u6301\u4E00\u4E9B\u8BF7\u6C42\u76F8\u5173\u7684\u5185\u7F6E\u53D8\u91CF\u3002\u6A21\u677F\u89E3\u6790\u5305\u542B\u4EE5\u4E0B\u65B9\u6CD5\uFF1A"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"WriteTpl*"})," \u65B9\u6CD5\u7528\u4E8E\u6A21\u677F\u8F93\u51FA\uFF0C\u89E3\u6790\u5E76\u8F93\u51FA\u6A21\u677F\u6587\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u89E3\u6790\u5E76\u8F93\u51FA\u7ED9\u5B9A\u7684\u6A21\u677F\u5185\u5BB9\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ParseTpl*"})," \u65B9\u6CD5\u7528\u4E8E\u6A21\u677F\u89E3\u6790\uFF0C\u89E3\u6790\u6A21\u677F\u6587\u4EF6\u6216\u8005\u6A21\u677F\u5185\u5BB9\uFF0C\u8FD4\u56DE\u89E3\u6790\u540E\u7684\u5185\u5BB9\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u89E3\u6790\u6A21\u677F\u65F6\u7EC4\u4EF6\u5E95\u5C42\u4F1A\u81EA\u52A8\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"Request"})," \u5BF9\u8C61\u83B7\u53D6\u5F53\u524D\u94FE\u8DEF\u7684 ",(0,i.jsx)(n.code,{children:"Context"})," \u4E0A\u4E0B\u6587\u53D8\u91CF\u5E76\u4F20\u9012\u7ED9\u6A21\u677F\u5F15\u64CE\uFF0C\u56E0\u6B64\u5F00\u53D1\u8005\u4E0D\u7528\u663E\u793A\u7ED9\u6A21\u677F\u5F15\u64CE\u4F20\u9012 ",(0,i.jsx)(n.code,{children:"Context"})," \u4E0A\u4E0B\u6587\u53D8\u91CF\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5185\u7F6E\u53D8\u91CF",children:"\u5185\u7F6E\u53D8\u91CF"}),"\n",(0,i.jsx)(n.h3,{id:"config",children:(0,i.jsx)(n.code,{children:"Config"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8BBF\u95EE\u9ED8\u8BA4\u7684\u914D\u7F6E\u7BA1\u7406\uFF08 ",(0,i.jsx)(n.code,{children:"config.toml"}),"\uFF09\u5BF9\u8C61\u914D\u7F6E\u9879\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"{{.Config.\u914D\u7F6E\u9879}}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"cookie",children:(0,i.jsx)(n.code,{children:"Cookie"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8BBF\u95EE\u5F53\u524D\u8BF7\u6C42\u7684 ",(0,i.jsx)(n.code,{children:"Cookie"})," \u5BF9\u8C61\u53C2\u6570\u503C\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"{{.Cookie.\u952E\u540D}}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"session",children:(0,i.jsx)(n.code,{children:"Session"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8BBF\u95EE\u5F53\u524D\u8BF7\u6C42\u7684 ",(0,i.jsx)(n.code,{children:"Session"})," \u5BF9\u8C61\u53C2\u6570\u503C\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"{{.Session.\u952E\u540D}}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"query",children:(0,i.jsx)(n.code,{children:"Query"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8BBF\u95EE\u5F53\u524D ",(0,i.jsx)(n.code,{children:"Query String"})," \u4E2D\u7684\u8BF7\u6C42\u53C2\u6570\u503C\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"{{.Query.\u952E\u540D}}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"form",children:(0,i.jsx)(n.code,{children:"Form"})}),"\n",(0,i.jsx)(n.p,{children:"\u8BBF\u95EE\u5F53\u524D\u8868\u5355\u8BF7\u6C42\u53C2\u6570\u503C\u3002"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"{{.Form.\u952E\u540D}}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"request",children:(0,i.jsx)(n.code,{children:"Request"})}),"\n",(0,i.jsx)(n.p,{children:"\u8BBF\u95EE\u5F53\u524D\u8BF7\u6C42\u53C2\u6570\u503C\uFF08\u4E0D\u533A\u5206\u53C2\u6570\u63D0\u4EA4\u65B9\u5F0F\uFF09\u3002"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"{{.Request.\u952E\u540D}}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request){\n        r.Cookie.Set("theme", "default")\n        r.Session.Set("name", "john")\n        content :=`Config:{{.Config.redis.cache}}, Cookie:{{.Cookie.theme}}, Session:{{.Session.name}}, Query:{{.Query.name}}`\n        r.Response.WriteTplContent(content, nil)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u4E2D\uFF0C ",(0,i.jsx)(n.code,{children:"config.toml"})," \u5185\u5BB9\u4E3A\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'# Redis\u6570\u636E\u5E93\u914D\u7F6E\n[redis]\n    disk  = "127.0.0.1:6379,0"\n    cache = "127.0.0.1:6379,1"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u6267\u884C\u540E\uFF0C\u8BBF\u95EE ",(0,i.jsx)(n.a,{href:"http://127.0.0.1:8199/?name=john",children:"http://127.0.0.1:8199/?name=john"})," \uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Config:127.0.0.1:6379,1, Cookie:default, Session:john, Query:john\n"})})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return c}});var s=r(667294);let i={},o=s.createContext(i);function c(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);
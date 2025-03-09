"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["10820"],{57406:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>r});var i=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6/\u547D\u4EE4\u7BA1\u7406/\u547D\u4EE4\u7BA1\u7406-\u7EC8\u7AEF\u4EA4\u4E92","title":"\u547D\u4EE4\u7BA1\u7406-\u7EC8\u7AEF\u4EA4\u4E92","description":"\u57FA\u672C\u4ECB\u7ECD","source":"@site/versioned_docs/version-2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u547D\u4EE4\u7BA1\u7406/\u547D\u4EE4\u7BA1\u7406-\u7EC8\u7AEF\u4EA4\u4E92.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6/\u547D\u4EE4\u7BA1\u7406","slug":"/\u6838\u5FC3\u7EC4\u4EF6/\u547D\u4EE4\u7BA1\u7406/\u547D\u4EE4\u7BA1\u7406-\u7EC8\u7AEF\u4EA4\u4E92","permalink":"/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u547D\u4EE4\u7BA1\u7406/\u547D\u4EE4\u7BA1\u7406-\u7EC8\u7AEF\u4EA4\u4E92","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u547D\u4EE4\u7BA1\u7406/\u547D\u4EE4\u7BA1\u7406-\u7EC8\u7AEF\u4EA4\u4E92.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":5,"frontMatter":{"title":"\u547D\u4EE4\u7BA1\u7406-\u7EC8\u7AEF\u4EA4\u4E92","sidebar_position":5,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u547D\u4EE4\u7BA1\u7406-\u7ED3\u6784\u5316\u53C2\u6570","permalink":"/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u547D\u4EE4\u7BA1\u7406/\u547D\u4EE4\u7BA1\u7406-\u7ED3\u6784\u5316\u53C2\u6570"},"next":{"title":"\u547D\u4EE4\u7BA1\u7406-\u94FE\u8DEF\u8DDF\u8E2A","permalink":"/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u547D\u4EE4\u7BA1\u7406/\u547D\u4EE4\u7BA1\u7406-\u94FE\u8DEF\u8DDF\u8E2A"}}'),o=t("785893"),s=t("250065");let r={title:"\u547D\u4EE4\u7BA1\u7406-\u7EC8\u7AEF\u4EA4\u4E92",sidebar_position:5,hide_title:!0},a=void 0,c={},d=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"<code>Scan</code> \u4F7F\u7528",id:"scan-\u4F7F\u7528",level:2},{value:"<code>Scanf</code> \u4F7F\u7528",id:"scanf-\u4F7F\u7528",level:2}];function l(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"gcmd"})," \u7EC4\u4EF6\u652F\u6301\u4ECE\u7EC8\u7AEF\u8BFB\u53D6\u7528\u6237\u8F93\u5165\u6570\u636E\uFF0C\u5E38\u7528\u4E8E\u7EC8\u7AEF\u4EA4\u4E92\u573A\u666F\u3002"]}),"\n",(0,o.jsx)(e.p,{children:"\u76F8\u5173\u65B9\u6CD5\uFF1A"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:"func Scan(info ...interface{}) string\nfunc Scanf(format string, info ...interface{}) string\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u90FD\u662F\u5411\u7EC8\u7AEF\u5C55\u793A\u7ED9\u5B9A\u7684\u4FE1\u606F\uFF0C\u81EA\u52A8\u8BFB\u53D6\u7EC8\u7AEF\u7528\u6237\u8F93\u5165\u7684\u4FE1\u606F\u8FD4\u56DE\uFF0C\u901A\u8FC7\u56DE\u8F66\u7B26\u53F7\u8FD4\u56DE\u3002"}),"\n",(0,o.jsxs)(e.h2,{id:"scan-\u4F7F\u7528",children:[(0,o.jsx)(e.code,{children:"Scan"})," \u4F7F\u7528"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gogf/gf/v2/os/gcmd"\n)\n\nfunc main() {\n    name := gcmd.Scan("What\'s your name?\\n")\n    fmt.Println("Your name is:", name)\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u4EA4\u4E92\u793A\u4F8B\uFF1A"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"> What's your name?\njohn\n> Your name is: john\n"})}),"\n",(0,o.jsxs)(e.h2,{id:"scanf-\u4F7F\u7528",children:[(0,o.jsx)(e.code,{children:"Scanf"})," \u4F7F\u7528"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gogf/gf/v2/os/gcmd"\n)\n\nfunc main() {\n    name := gcmd.Scan("> What\'s your name?\\n")\n    age := gcmd.Scanf("> Hello %s, how old are you?\\n", name)\n    fmt.Printf("> %s\'s age is: %s", name, age)\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u4EA4\u4E92\u793A\u4F8B\uFF1A"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"> What's your name?\njohn\n> Hello john, how old are you?\n18\n> john's age is: 18\n"})})]})}function u(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return r}});var i=t(667294);let o={},s=i.createContext(o);function r(n){let e=i.useContext(s);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);
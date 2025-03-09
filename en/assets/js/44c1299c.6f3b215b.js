"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["85199"],{376282:function(e,t,n){n.r(t),n.d(t,{metadata:()=>o,contentTitle:()=>d,default:()=>u,assets:()=>a,toc:()=>l,frontMatter:()=>s});var o=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9","title":"ORM\u94FE\u5F0F\u64CD\u4F5C(\u91CD\u70B9)","description":"\u57FA\u672C\u4ECB\u7ECD","source":"@site/versioned_docs/version-2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/","permalink":"/en/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9.md","tags":[],"version":"2.1.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":1,"frontMatter":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C(\u91CD\u70B9)","sidebar_position":1,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u4F7F\u7528\u914D\u7F6E","permalink":"/en/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u4F7F\u7528\u914D\u7F6E"},"next":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u6A21\u578B\u521B\u5EFA","permalink":"/en/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6A21\u578B\u521B\u5EFA"}}'),i=n("785893"),r=n("250065");let s={title:"ORM\u94FE\u5F0F\u64CD\u4F5C(\u91CD\u70B9)",sidebar_position:1,hide_title:!0},d=void 0,a={},l=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"gdb"})," \u94FE\u5F0F\u64CD\u4F5C\u4F7F\u7528\u65B9\u5F0F\u7B80\u5355\u7075\u6D3B\uFF0C\u662F ",(0,i.jsx)(t.code,{children:"GoFrame"})," \u6846\u67B6\u5B98\u65B9\u63A8\u8350\u7684\u6570\u636E\u5E93\u64CD\u4F5C\u65B9\u5F0F\u3002\u94FE\u5F0F\u64CD\u4F5C\u53EF\u4EE5\u901A\u8FC7\u6570\u636E\u5E93\u5BF9\u8C61\u7684 ",(0,i.jsx)(t.code,{children:"db.Model"})," \u65B9\u6CD5\u6216\u8005\u4E8B\u52A1\u5BF9\u8C61\u7684 ",(0,i.jsx)(t.code,{children:"tx.Model"})," \u65B9\u6CD5\uFF0C\u57FA\u4E8E\u6307\u5B9A\u7684\u6570\u636E\u8868\u8FD4\u56DE\u4E00\u4E2A\u94FE\u5F0F\u64CD\u4F5C\u5BF9\u8C61 ",(0,i.jsx)(t.code,{children:"*Model"}),"\uFF0C\u8BE5\u5BF9\u8C61\u53EF\u4EE5\u6267\u884C\u4EE5\u4E0B\u65B9\u6CD5\u3002\u5F53\u524D\u65B9\u6CD5\u5217\u8868\u53EF\u80FD\u6EDE\u540E\u4E8E\u6E90\u4EE3\u7801\uFF0C\u8BE6\u7EC6\u7684\u65B9\u6CD5\u5217\u8868\u8BF7\u53C2\u8003\u63A5\u53E3\u6587\u6863\uFF1A ",(0,i.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#Model",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#Model"})]})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return s}});var o=n(667294);let i={},r=o.createContext(i);function s(e){let t=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);
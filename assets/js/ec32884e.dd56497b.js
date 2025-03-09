"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["23464"],{671038:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>d,default:()=>x,assets:()=>c,toc:()=>a,frontMatter:()=>r});var i=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-Context","title":"Redis-Context","description":"gredis \u7EC4\u4EF6\u652F\u6301 Context \u4E0A\u4E0B\u6587\u53D8\u91CF\u7684\u4F20\u9012\uFF0C\u4E3B\u8981\u7528\u4E8E\u8BF7\u6C42\u63A7\u5236\u3001\u94FE\u8DEF\u8DDF\u8E2A\u7279\u6027\u7B49\u573A\u666F\u3002\u4E0A\u4E0B\u6587\u53D8\u91CF\u4F20\u9012\u53EF\u4EE5\u901A\u8FC7 Ctx \u94FE\u5F0F\u64CD\u4F5C\u65B9\u6CD5\u5B9E\u73B0\uFF0C\u65B9\u6CD5\u5B9A\u4E49\u5982\u4E0B\uFF1A","source":"@site/versioned_docs/version-1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-Context.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-Context","permalink":"/1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-Context","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-Context.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":3,"frontMatter":{"title":"Redis-Context","sidebar_position":3,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"Redis-\u7ED3\u679C\u5904\u7406","permalink":"/1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u7ED3\u679C\u5904\u7406"},"next":{"title":"I18N\u56FD\u9645\u5316","permalink":"/1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/I18N\u56FD\u9645\u5316/"}}'),s=n("785893"),o=n("250065");let r={title:"Redis-Context",sidebar_position:3,hide_title:!0},d=void 0,c={},a=[];function l(e){let t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"gredis"})," \u7EC4\u4EF6\u652F\u6301 ",(0,s.jsx)(t.code,{children:"Context"})," \u4E0A\u4E0B\u6587\u53D8\u91CF\u7684\u4F20\u9012\uFF0C\u4E3B\u8981\u7528\u4E8E\u8BF7\u6C42\u63A7\u5236\u3001\u94FE\u8DEF\u8DDF\u8E2A\u7279\u6027\u7B49\u573A\u666F\u3002\u4E0A\u4E0B\u6587\u53D8\u91CF\u4F20\u9012\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(t.code,{children:"Ctx"})," \u94FE\u5F0F\u64CD\u4F5C\u65B9\u6CD5\u5B9E\u73B0\uFF0C\u65B9\u6CD5\u5B9A\u4E49\u5982\u4E0B\uFF1A"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"// Ctx is a channing function which sets the context for next operation.\nfunc (r *Redis) Ctx(ctx context.Context) *Redis\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u7531\u4E8E ",(0,s.jsx)(t.code,{children:"gredis"})," \u7684\u4E0A\u4E0B\u6587\u53D8\u91CF\u662F\u901A\u8FC7\u94FE\u5F0F\u64CD\u4F5C\u6765\u5B9E\u73B0\u7684\uFF0C\u56E0\u6B64\u6CA1\u6709\u5F3A\u5236\u6027\u7684 ",(0,s.jsx)(t.code,{children:"Context"})," \u8F93\u5165\uFF0C\u5927\u5BB6\u4F7F\u7528\u5728\u94FE\u8DEF\u8DDF\u8E2A\u7684\u65F6\u5019\u53EF\u80FD\u9700\u8981\u6CE8\u610F\u4E00\u4E0B\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5173\u4E8E\u94FE\u8DEF\u8DDF\u8E2A\u4EE5\u53CA\u4F7F\u7528\u793A\u4F8B\uFF0C\u5177\u4F53\u8BF7\u53C2\u8003\u7AE0\u8282\uFF1A ",(0,s.jsx)(t.a,{href:"/1.16.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E9%93%BE%E8%B7%AF%E8%B7%9F%E8%B8%AA/",children:"\u94FE\u8DEF\u8DDF\u8E2A"})]})]})}function x(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return r}});var i=n(667294);let s={},o=i.createContext(s);function r(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
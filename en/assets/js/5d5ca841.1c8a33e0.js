"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["2228"],{229153:function(e,t,i){i.r(t),i.d(t,{metadata:()=>n,contentTitle:()=>o,default:()=>p,assets:()=>a,toc:()=>c,frontMatter:()=>d});var n=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6/NoSQL Redis/Redis-\u63A5\u53E3\u5316\u8BBE\u8BA1","title":"Redis-\u63A5\u53E3\u5316\u8BBE\u8BA1","description":"gredis \u91C7\u7528\u63A5\u53E3\u5316\u8BBE\u8BA1\uFF0C\u5177\u6709\u5F3A\u5927\u7684\u7075\u6D3B\u6027\u548C\u6269\u5C55\u6027\u3002","source":"@site/versioned_docs/version-2.5.x/\u6838\u5FC3\u7EC4\u4EF6/NoSQL Redis/Redis-\u63A5\u53E3\u5316\u8BBE\u8BA1.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6/NoSQL Redis","slug":"/\u6838\u5FC3\u7EC4\u4EF6/NoSQL Redis/Redis-\u63A5\u53E3\u5316\u8BBE\u8BA1","permalink":"/en/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/NoSQL Redis/Redis-\u63A5\u53E3\u5316\u8BBE\u8BA1","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u6838\u5FC3\u7EC4\u4EF6/NoSQL Redis/Redis-\u63A5\u53E3\u5316\u8BBE\u8BA1.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":4,"frontMatter":{"title":"Redis-\u63A5\u53E3\u5316\u8BBE\u8BA1","sidebar_position":4,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"Redis-Conn\u5BF9\u8C61","permalink":"/en/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/NoSQL Redis/Redis-Conn\u5BF9\u8C61"},"next":{"title":"I18N\u56FD\u9645\u5316","permalink":"/en/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/I18N\u56FD\u9645\u5316/"}}'),s=i("785893"),r=i("250065");let d={title:"Redis-\u63A5\u53E3\u5316\u8BBE\u8BA1",sidebar_position:4,hide_title:!0},o=void 0,a={},c=[{value:"\u63A5\u53E3\u5B9A\u4E49",id:"\u63A5\u53E3\u5B9A\u4E49",level:2},{value:"\u76F8\u5173\u65B9\u6CD5",id:"\u76F8\u5173\u65B9\u6CD5",level:2},{value:"\u66F4\u8FDB\u4E00\u6B65",id:"\u66F4\u8FDB\u4E00\u6B65",level:2}];function l(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"gredis"})," \u91C7\u7528\u63A5\u53E3\u5316\u8BBE\u8BA1\uFF0C\u5177\u6709\u5F3A\u5927\u7684\u7075\u6D3B\u6027\u548C\u6269\u5C55\u6027\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"\u63A5\u53E3\u5B9A\u4E49",children:"\u63A5\u53E3\u5B9A\u4E49"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gredis#Adapter",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gredis#Adapter"})}),"\n",(0,s.jsx)(t.h2,{id:"\u76F8\u5173\u65B9\u6CD5",children:"\u76F8\u5173\u65B9\u6CD5"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"// SetAdapter sets custom adapter for current redis client.\nfunc (r *Redis) SetAdapter(adapter Adapter)\n\n// GetAdapter returns the adapter that is set in current redis client.\nfunc (r *Redis) GetAdapter() Adapter\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u66F4\u8FDB\u4E00\u6B65",children:"\u66F4\u8FDB\u4E00\u6B65"}),"\n",(0,s.jsxs)(t.p,{children:["\u7531\u4E8E ",(0,s.jsx)(t.code,{children:"gredis"})," \u7EC4\u4EF6\u7684\u63A5\u53E3\u5B9E\u73B0\u662F\u9AD8\u9636\u529F\u80FD\uFF0C\u4E00\u822C\u6765\u8BF4\u5F00\u53D1\u8005\u4E5F\u65E0\u9700\u66FF\u6362 ",(0,s.jsx)(t.code,{children:"Redis"})," \u63A5\u53E3\u5B9E\u73B0\u3002\u611F\u5174\u8DA3\u7684\u670B\u53CB\u53EF\u4EE5\u81EA\u884C\u7814\u7A76\u3002"]})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,i){i.d(t,{Z:function(){return o},a:function(){return d}});var n=i(667294);let s={},r=n.createContext(s);function d(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
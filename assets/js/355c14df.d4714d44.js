"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["81742"],{396556:function(e,t,r){r.r(t),r.d(t,{metadata:()=>c,contentTitle:()=>d,default:()=>h,assets:()=>o,toc:()=>i,frontMatter:()=>s});var c=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u7F13\u5B58\u7BA1\u7406/\u7F13\u5B58\u7BA1\u7406-\u63A5\u53E3\u8BBE\u8BA1","title":"\u7F13\u5B58\u7BA1\u7406-\u63A5\u53E3\u8BBE\u8BA1","description":"GoFrame\u6846\u67B6\u4E2D\u7F13\u5B58\u7BA1\u7406\u7EC4\u4EF6\u7684\u63A5\u53E3\u8BBE\u8BA1\u4E0E\u5B9E\u73B0\uFF0C\u63D0\u4F9B\u4E86Adapter\u63A5\u53E3\uFF0C\u4F7F\u5F97\u5F00\u53D1\u8005\u53EF\u4EE5\u7075\u6D3B\u5730\u6CE8\u518C\u5E76\u81EA\u5B9A\u4E49\u7F13\u5B58\u7BA1\u7406\u5BF9\u8C61\uFF0C\u5B9E\u73B0\u4E0D\u540C\u7F13\u5B58\u7B56\u7565\u7684\u65E0\u7F1D\u63A5\u5165\u3002\u8BE6\u7EC6\u63CF\u8FF0\u4E86\u5982\u4F55\u901A\u8FC7SetAdapter\u548CGetAdapter\u65B9\u6CD5\u8FDB\u884C\u63A5\u53E3\u5B9E\u73B0\u7684\u6CE8\u518C\u4E0E\u83B7\u53D6\u3002","source":"@site/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u7F13\u5B58\u7BA1\u7406/\u7F13\u5B58\u7BA1\u7406-\u63A5\u53E3\u8BBE\u8BA1.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u7F13\u5B58\u7BA1\u7406","slug":"/docs/core/gcache-interface","permalink":"/docs/core/gcache-interface","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u7F13\u5B58\u7BA1\u7406/\u7F13\u5B58\u7BA1\u7406-\u63A5\u53E3\u8BBE\u8BA1.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/core/gcache-interface","title":"\u7F13\u5B58\u7BA1\u7406-\u63A5\u53E3\u8BBE\u8BA1","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u7F13\u5B58\u7BA1\u7406","\u63A5\u53E3\u8BBE\u8BA1","Adapter\u63A5\u53E3","gcache","\u7F13\u5B58\u63A5\u53E3","\u81EA\u5B9A\u4E49\u5B9E\u73B0","\u63A5\u5165\u7F13\u5B58","GoFrame\u7F13\u5B58"],"description":"GoFrame\u6846\u67B6\u4E2D\u7F13\u5B58\u7BA1\u7406\u7EC4\u4EF6\u7684\u63A5\u53E3\u8BBE\u8BA1\u4E0E\u5B9E\u73B0\uFF0C\u63D0\u4F9B\u4E86Adapter\u63A5\u53E3\uFF0C\u4F7F\u5F97\u5F00\u53D1\u8005\u53EF\u4EE5\u7075\u6D3B\u5730\u6CE8\u518C\u5E76\u81EA\u5B9A\u4E49\u7F13\u5B58\u7BA1\u7406\u5BF9\u8C61\uFF0C\u5B9E\u73B0\u4E0D\u540C\u7F13\u5B58\u7B56\u7565\u7684\u65E0\u7F1D\u63A5\u5165\u3002\u8BE6\u7EC6\u63CF\u8FF0\u4E86\u5982\u4F55\u901A\u8FC7SetAdapter\u548CGetAdapter\u65B9\u6CD5\u8FDB\u884C\u63A5\u53E3\u5B9E\u73B0\u7684\u6CE8\u518C\u4E0E\u83B7\u53D6\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u7F13\u5B58\u7BA1\u7406","permalink":"/docs/core/gcache"},"next":{"title":"\u7F13\u5B58\u7BA1\u7406-\u5185\u5B58\u7F13\u5B58","permalink":"/docs/core/gcache-memory"}}'),n=r("785893"),a=r("250065");let s={slug:"/docs/core/gcache-interface",title:"\u7F13\u5B58\u7BA1\u7406-\u63A5\u53E3\u8BBE\u8BA1",sidebar_position:0,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u7F13\u5B58\u7BA1\u7406","\u63A5\u53E3\u8BBE\u8BA1","Adapter\u63A5\u53E3","gcache","\u7F13\u5B58\u63A5\u53E3","\u81EA\u5B9A\u4E49\u5B9E\u73B0","\u63A5\u5165\u7F13\u5B58","GoFrame\u7F13\u5B58"],description:"GoFrame\u6846\u67B6\u4E2D\u7F13\u5B58\u7BA1\u7406\u7EC4\u4EF6\u7684\u63A5\u53E3\u8BBE\u8BA1\u4E0E\u5B9E\u73B0\uFF0C\u63D0\u4F9B\u4E86Adapter\u63A5\u53E3\uFF0C\u4F7F\u5F97\u5F00\u53D1\u8005\u53EF\u4EE5\u7075\u6D3B\u5730\u6CE8\u518C\u5E76\u81EA\u5B9A\u4E49\u7F13\u5B58\u7BA1\u7406\u5BF9\u8C61\uFF0C\u5B9E\u73B0\u4E0D\u540C\u7F13\u5B58\u7B56\u7565\u7684\u65E0\u7F1D\u63A5\u5165\u3002\u8BE6\u7EC6\u63CF\u8FF0\u4E86\u5982\u4F55\u901A\u8FC7SetAdapter\u548CGetAdapter\u65B9\u6CD5\u8FDB\u884C\u63A5\u53E3\u5B9E\u73B0\u7684\u6CE8\u518C\u4E0E\u83B7\u53D6\u3002"},d=void 0,o={},i=[{value:"\u63A5\u53E3\u5B9A\u4E49",id:"\u63A5\u53E3\u5B9A\u4E49",level:2},{value:"\u6CE8\u518C\u63A5\u53E3\u5B9E\u73B0",id:"\u6CE8\u518C\u63A5\u53E3\u5B9E\u73B0",level:2},{value:"\u83B7\u53D6\u63A5\u53E3\u5B9E\u73B0",id:"\u83B7\u53D6\u63A5\u53E3\u5B9E\u73B0",level:2}];function l(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["\u7F13\u5B58\u7EC4\u4EF6\u91C7\u7528\u4E86\u63A5\u53E3\u5316\u8BBE\u8BA1\uFF0C\u63D0\u4F9B\u4E86 ",(0,n.jsx)(t.code,{children:"Adapter"})," \u63A5\u53E3\uFF0C\u4EFB\u4F55\u5B9E\u73B0\u4E86 ",(0,n.jsx)(t.code,{children:"Adapter"})," \u63A5\u53E3\u7684\u5BF9\u8C61\u5747\u53EF\u6CE8\u518C\u5230\u7F13\u5B58\u7BA1\u7406\u5BF9\u8C61\u4E2D\uFF0C\u4F7F\u5F97\u5F00\u53D1\u8005\u53EF\u4EE5\u5BF9\u7F13\u5B58\u7BA1\u7406\u5BF9\u8C61\u8FDB\u884C\u7075\u6D3B\u7684\u81EA\u5B9A\u4E49\u5B9E\u73B0\u548C\u6269\u5C55\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"\u63A5\u53E3\u5B9A\u4E49",children:"\u63A5\u53E3\u5B9A\u4E49"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Adapter"})," \u63A5\u53E3\u5B9A\u4E49\u5982\u4E0B\uFF1A"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gcache#Adapter",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gcache#Adapter"})}),"\n",(0,n.jsx)(t.h2,{id:"\u6CE8\u518C\u63A5\u53E3\u5B9E\u73B0",children:"\u6CE8\u518C\u63A5\u53E3\u5B9E\u73B0"}),"\n",(0,n.jsxs)(t.p,{children:["\u901A\u8FC7\u8BE5\u65B9\u6CD5\u5C06\u5B9E\u73B0\u7684 ",(0,n.jsx)(t.code,{children:"adapter"})," \u5E94\u7528\u5230\u5BF9\u5E94\u7684 ",(0,n.jsx)(t.code,{children:"Cache"})," \u5BF9\u8C61\u4E0A\uFF1A"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"// SetAdapter changes the adapter for this cache.\n// Be very note that, this setting function is not concurrent-safe, which means you should not call\n// this setting function concurrently in multiple goroutines.\nfunc (c *Cache) SetAdapter(adapter Adapter)\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\u5177\u4F53\u793A\u4F8B\u8BF7\u53C2\u8003 ",(0,n.jsx)(t.a,{href:"/docs/core/gcache-redis",children:"\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58"})," \u7AE0\u8282\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"\u83B7\u53D6\u63A5\u53E3\u5B9E\u73B0",children:"\u83B7\u53D6\u63A5\u53E3\u5B9E\u73B0"}),"\n",(0,n.jsxs)(t.p,{children:["\u901A\u8FC7\u8BE5\u65B9\u6CD5\u83B7\u53D6\u5F53\u524D\u6CE8\u518C\u7684 ",(0,n.jsx)(t.code,{children:"adapter"})," \u63A5\u53E3\u5B9E\u73B0\u5BF9\u8C61\u4E0A\uFF1A"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"// GetAdapter returns the adapter that is set in current Cache.\nfunc (c *Cache) GetAdapter() Adapter\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\u5177\u4F53\u793A\u4F8B\u8BF7\u53C2\u8003 ",(0,n.jsx)(t.a,{href:"/docs/core/gcache-redis",children:"\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58"})," \u7AE0\u8282\u3002"]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return d},a:function(){return s}});var c=r(667294);let n={},a=c.createContext(n);function s(e){let t=c.useContext(a);return c.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),c.createElement(a.Provider,{value:t},e.children)}}}]);
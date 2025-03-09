"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["59276"],{130247:function(e,n,i){i.r(n),i.d(n,{metadata:()=>o,contentTitle:()=>c,default:()=>l,assets:()=>d,toc:()=>g,frontMatter:()=>r});var o=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/INI\u7F16\u89E3\u7801-gini","title":"INI\u7F16\u89E3\u7801-gini","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884CINI\u6570\u636E\u683C\u5F0F\u7684\u7F16\u7801\u548C\u89E3\u6790\u7684\u65B9\u6CD5\u3002\u8BE6\u7EC6\u89E3\u91CA\u4E86\u5982\u4F55\u901A\u8FC7GoFrame\u6846\u67B6\u4E2D\u7684gini\u5305\u8FDB\u884CINI\u7684\u7F16\u89E3\u7801\uFF0C\u5E76\u63D0\u4F9B\u4E86\u76F8\u5173\u7684\u63A5\u53E3\u6587\u6863\u94FE\u63A5\uFF0C\u65B9\u4FBF\u5F00\u53D1\u8005\u67E5\u9605\u3002","source":"@site/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/INI\u7F16\u89E3\u7801-gini.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801","slug":"/docs/components/encoding-gini","permalink":"/docs/components/encoding-gini","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/INI\u7F16\u89E3\u7801-gini.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":7,"frontMatter":{"slug":"/docs/components/encoding-gini","title":"INI\u7F16\u89E3\u7801-gini","sidebar_position":7,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","INI","\u6570\u636E\u683C\u5F0F","\u7F16\u7801","\u89E3\u6790","gini","\u63A5\u53E3\u6587\u6863","\u4F7F\u7528\u65B9\u5F0F","pkg.go.dev"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884CINI\u6570\u636E\u683C\u5F0F\u7684\u7F16\u7801\u548C\u89E3\u6790\u7684\u65B9\u6CD5\u3002\u8BE6\u7EC6\u89E3\u91CA\u4E86\u5982\u4F55\u901A\u8FC7GoFrame\u6846\u67B6\u4E2D\u7684gini\u5305\u8FDB\u884CINI\u7684\u7F16\u89E3\u7801\uFF0C\u5E76\u63D0\u4F9B\u4E86\u76F8\u5173\u7684\u63A5\u53E3\u6587\u6863\u94FE\u63A5\uFF0C\u65B9\u4FBF\u5F00\u53D1\u8005\u67E5\u9605\u3002"},"sidebar":"mainSidebar","previous":{"title":"XML\u7F16\u89E3\u7801-gxml","permalink":"/docs/components/encoding-gxml"},"next":{"title":"YAML\u7F16\u89E3\u7801-gyaml","permalink":"/docs/components/encoding-gyaml"}}'),t=i("785893"),s=i("250065");let r={slug:"/docs/components/encoding-gini",title:"INI\u7F16\u89E3\u7801-gini",sidebar_position:7,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","INI","\u6570\u636E\u683C\u5F0F","\u7F16\u7801","\u89E3\u6790","gini","\u63A5\u53E3\u6587\u6863","\u4F7F\u7528\u65B9\u5F0F","pkg.go.dev"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884CINI\u6570\u636E\u683C\u5F0F\u7684\u7F16\u7801\u548C\u89E3\u6790\u7684\u65B9\u6CD5\u3002\u8BE6\u7EC6\u89E3\u91CA\u4E86\u5982\u4F55\u901A\u8FC7GoFrame\u6846\u67B6\u4E2D\u7684gini\u5305\u8FDB\u884CINI\u7684\u7F16\u89E3\u7801\uFF0C\u5E76\u63D0\u4F9B\u4E86\u76F8\u5173\u7684\u63A5\u53E3\u6587\u6863\u94FE\u63A5\uFF0C\u65B9\u4FBF\u5F00\u53D1\u8005\u67E5\u9605\u3002"},c=void 0,d={},g=[];function a(e){let n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"INI\u6570\u636E\u683C\u5F0F\u7F16\u7801\u89E3\u6790\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/encoding/gini"\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gini",children:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gini"})})]})}function l(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return r}});var o=i(667294);let t={},s=o.createContext(t);function r(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["23483"],{601455:function(e,o,s){s.r(o),s.d(o,{metadata:()=>n,contentTitle:()=>c,default:()=>g,assets:()=>d,toc:()=>p,frontMatter:()=>i});var n=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u538B\u7F29\u89E3\u538B-gcompress","title":"\u538B\u7F29/\u89E3\u538B-gcompress","description":"\u4E8C\u8FDB\u5236\u6570\u636E\u7684\u538B\u7F29\u548C\u89E3\u538B\u7F29\u529F\u80FD\uFF0C\u7279\u522B\u662FZlib\u548CGZip\u7B97\u6CD5\u7684\u4F7F\u7528\u65B9\u6CD5\u3002\u901A\u8FC7GoFrame\u6846\u67B6\uFF0C\u7528\u6237\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0\u6570\u636E\u538B\u7F29\u89E3\u538B\uFF0C\u5177\u4F53\u5B9E\u73B0\u8BF7\u53C2\u8003\u63A5\u53E3\u6587\u6863\u3002\u672C\u9875\u9762\u63D0\u4F9B\u8BE6\u7EC6\u7684\u8C03\u7528\u793A\u4F8B\u548C\u76F8\u5173\u6280\u672F\u6587\u6863\u94FE\u63A5\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u4E0A\u624B\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u538B\u7F29\u89E3\u538B-gcompress.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801","slug":"/docs/components/encoding-gcompress","permalink":"/2.7.x/docs/components/encoding-gcompress","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u538B\u7F29\u89E3\u538B-gcompress.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":11,"frontMatter":{"slug":"/docs/components/encoding-gcompress","title":"\u538B\u7F29/\u89E3\u538B-gcompress","sidebar_position":11,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","gcompress","\u538B\u7F29","\u89E3\u538B","\u4E8C\u8FDB\u5236\u6570\u636E","Zlib","GZip","\u63A5\u53E3\u6587\u6863","GoFrame\u7F16\u7801"],"description":"\u4E8C\u8FDB\u5236\u6570\u636E\u7684\u538B\u7F29\u548C\u89E3\u538B\u7F29\u529F\u80FD\uFF0C\u7279\u522B\u662FZlib\u548CGZip\u7B97\u6CD5\u7684\u4F7F\u7528\u65B9\u6CD5\u3002\u901A\u8FC7GoFrame\u6846\u67B6\uFF0C\u7528\u6237\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0\u6570\u636E\u538B\u7F29\u89E3\u538B\uFF0C\u5177\u4F53\u5B9E\u73B0\u8BF7\u53C2\u8003\u63A5\u53E3\u6587\u6863\u3002\u672C\u9875\u9762\u63D0\u4F9B\u8BE6\u7EC6\u7684\u8C03\u7528\u793A\u4F8B\u548C\u76F8\u5173\u6280\u672F\u6587\u6863\u94FE\u63A5\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u4E0A\u624B\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5B57\u7B26\u96C6\u8F6C\u6362-gcharset","permalink":"/2.7.x/docs/components/encoding-gcharset"},"next":{"title":"\u6570\u636E\u7BA1\u7406","permalink":"/2.7.x/docs/components/database"}}'),t=s("785893"),r=s("250065");let i={slug:"/docs/components/encoding-gcompress",title:"\u538B\u7F29/\u89E3\u538B-gcompress",sidebar_position:11,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","gcompress","\u538B\u7F29","\u89E3\u538B","\u4E8C\u8FDB\u5236\u6570\u636E","Zlib","GZip","\u63A5\u53E3\u6587\u6863","GoFrame\u7F16\u7801"],description:"\u4E8C\u8FDB\u5236\u6570\u636E\u7684\u538B\u7F29\u548C\u89E3\u538B\u7F29\u529F\u80FD\uFF0C\u7279\u522B\u662FZlib\u548CGZip\u7B97\u6CD5\u7684\u4F7F\u7528\u65B9\u6CD5\u3002\u901A\u8FC7GoFrame\u6846\u67B6\uFF0C\u7528\u6237\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0\u6570\u636E\u538B\u7F29\u89E3\u538B\uFF0C\u5177\u4F53\u5B9E\u73B0\u8BF7\u53C2\u8003\u63A5\u53E3\u6587\u6863\u3002\u672C\u9875\u9762\u63D0\u4F9B\u8BE6\u7EC6\u7684\u8C03\u7528\u793A\u4F8B\u548C\u76F8\u5173\u6280\u672F\u6587\u6863\u94FE\u63A5\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u4E0A\u624B\u3002"},c=void 0,d={},p=[];function a(e){let o={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:["\u4E8C\u8FDB\u5236\u6570\u636E\u538B\u7F29/\u89E3\u538B\uFF0C\u652F\u6301 ",(0,t.jsx)(o.code,{children:"Zlib"}),"/ ",(0,t.jsx)(o.code,{children:"GZip"})," \u7B97\u6CD5\u3002"]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/encoding/gcompress"\n'})}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gcompress",children:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gcompress"})})]})}function g(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return c},a:function(){return i}});var n=s(667294);let t={},r=n.createContext(t);function i(e){let o=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);
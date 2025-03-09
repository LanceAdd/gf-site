"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["79166"],{986919:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>h,default:()=>d,assets:()=>i,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"\u6A21\u5757\u5217\u8868/\u7F16\u7801\u89E3\u7801/ghash -\u7ECF\u5178\u54C8\u5E0C\u51FD\u6570","title":"ghash (\u7ECF\u5178\u54C8\u5E0C\u51FD\u6570)","description":"\u5E38\u7528\u7ECF\u5178\u54C8\u5E0C\u51FD\u6570Go\u8BED\u8A00\u5B9E\u73B0\uFF0C\u63D0\u4F9B uint32 \u53CA uint64 \u7C7B\u578B\u7684\u54C8\u5E0C\u51FD\u6570\u3002","source":"@site/versioned_docs/version-1.16.x/\u6A21\u5757\u5217\u8868/\u7F16\u7801\u89E3\u7801/ghash -\u7ECF\u5178\u54C8\u5E0C\u51FD\u6570.md","sourceDirName":"\u6A21\u5757\u5217\u8868/\u7F16\u7801\u89E3\u7801","slug":"/\u6A21\u5757\u5217\u8868/\u7F16\u7801\u89E3\u7801/ghash -\u7ECF\u5178\u54C8\u5E0C\u51FD\u6570","permalink":"/en/1.16.x/\u6A21\u5757\u5217\u8868/\u7F16\u7801\u89E3\u7801/ghash -\u7ECF\u5178\u54C8\u5E0C\u51FD\u6570","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6A21\u5757\u5217\u8868/\u7F16\u7801\u89E3\u7801/ghash -\u7ECF\u5178\u54C8\u5E0C\u51FD\u6570.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":4,"frontMatter":{"title":"ghash (\u7ECF\u5178\u54C8\u5E0C\u51FD\u6570)","sidebar_position":4,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"gbase64 (BASE64\u7F16\u89E3\u7801)","permalink":"/en/1.16.x/\u6A21\u5757\u5217\u8868/\u7F16\u7801\u89E3\u7801/gbase64 -BASE64\u7F16\u89E3\u7801"},"next":{"title":"ghtml (HTML\u7F16\u89E3\u7801)","permalink":"/en/1.16.x/\u6A21\u5757\u5217\u8868/\u7F16\u7801\u89E3\u7801/ghtml -HTML\u7F16\u89E3\u7801"}}'),o=s("785893"),r=s("250065");let a={title:"ghash (\u7ECF\u5178\u54C8\u5E0C\u51FD\u6570)",sidebar_position:4,hide_title:!0},h=void 0,i={},c=[];function g(n){let e={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["\u5E38\u7528\u7ECF\u5178\u54C8\u5E0C\u51FD\u6570Go\u8BED\u8A00\u5B9E\u73B0\uFF0C\u63D0\u4F9B ",(0,o.jsx)(e.code,{children:"uint32"})," \u53CA ",(0,o.jsx)(e.code,{children:"uint64"})," \u7C7B\u578B\u7684\u54C8\u5E0C\u51FD\u6570\u3002"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/encoding/ghash"\n\n'})}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://godoc.org/github.com/gogf/gf/encoding/ghash",children:"https://godoc.org/github.com/gogf/gf/encoding/ghash"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"\u57FA\u51C6\u6D4B\u8BD5\uFF1A"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-html",children:"goos: linux\ngoarch: amd64\npkg: github.com/gogf/gf/encoding/ghash\nBenchmarkBKDRHash-4         50000000            30.2 ns/op\nBenchmarkBKDRHash64-4       50000000            27.2 ns/op\nBenchmarkSDBMHash-4         30000000            40.5 ns/op\nBenchmarkSDBMHash64-4       50000000            43.1 ns/op\nBenchmarkRSHash-4           30000000            37.8 ns/op\nBenchmarkSRSHash64-4        50000000            33.5 ns/op\nBenchmarkJSHash-4           50000000            37.1 ns/op\nBenchmarkJSHash64-4         30000000            38.2 ns/op\nBenchmarkPJWHash-4          50000000            33.7 ns/op\nBenchmarkPJWHash64-4        50000000            33.8 ns/op\nBenchmarkELFHash-4          50000000            35.8 ns/op\nBenchmarkELFHash64-4        50000000            32.4 ns/op\nBenchmarkDJBHash-4          50000000            26.9 ns/op\nBenchmarkDJBHash64-4        50000000            26.8 ns/op\nBenchmarkAPHash-4           30000000            49.1 ns/op\nBenchmarkAPHash64-4         30000000            49.8 ns/op\n\n"})})]})}function d(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(g,{...n})}):g(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return h},a:function(){return a}});var t=s(667294);let o={},r=t.createContext(o);function a(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function h(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);
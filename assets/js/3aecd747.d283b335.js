"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["53671"],{217230:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>c,default:()=>l,assets:()=>u,toc:()=>a,frontMatter:()=>s});var o=JSON.parse('{"id":"\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u961F\u5217\u7C7B\u578B-gqueue/\u961F\u5217\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5","title":"\u961F\u5217\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5","description":"https://github.com/gogf/gf/blob/master/container/gqueue/gqueue\\\\z\\\\bench\\\\test.go","source":"@site/versioned_docs/version-2.3.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u961F\u5217\u7C7B\u578B-gqueue/\u961F\u5217\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5.md","sourceDirName":"\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u961F\u5217\u7C7B\u578B-gqueue","slug":"/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u961F\u5217\u7C7B\u578B-gqueue/\u961F\u5217\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5","permalink":"/2.3.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u961F\u5217\u7C7B\u578B-gqueue/\u961F\u5217\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u961F\u5217\u7C7B\u578B-gqueue/\u961F\u5217\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5.md","tags":[],"version":"2.3.x","lastUpdatedBy":"John","lastUpdatedAt":1740621099000,"sidebarPosition":1,"frontMatter":{"title":"\u961F\u5217\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5","sidebar_position":1,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u961F\u5217\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","permalink":"/2.3.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u961F\u5217\u7C7B\u578B-gqueue/\u961F\u5217\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528"},"next":{"title":"\u6811\u5F62\u7C7B\u578B-gtree","permalink":"/2.3.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u6811\u5F62\u7C7B\u578B-gtree/"}}'),r=t("785893"),i=t("250065");let s={title:"\u961F\u5217\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5",sidebar_position:1,hide_title:!0},c=void 0,u={},a=[];function d(e){let n={a:"a",code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/gogf/gf/blob/master/container/gqueue/gqueue_z_bench_test.go",children:"https://github.com/gogf/gf/blob/master/container/gqueue/gqueue_z_bench_test.go"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"gqueue"})," \u4E0E\u6807\u51C6\u5E93 ",(0,r.jsx)(n.code,{children:"channel"})," \u7684\u6027\u80FD\u57FA\u51C6\u6D4B\u8BD5\uFF0C\u5176\u4E2D\u6BCF\u4E00\u6B21\u57FA\u51C6\u6D4B\u8BD5\u7684 ",(0,r.jsx)(n.code,{children:"b.N"})," \u503C\u5747\u4E3A ",(0,r.jsx)(n.code,{children:"20000000"}),"\uFF0C\u4EE5\u4FDD\u8BC1\u52A8\u6001\u961F\u5217\u5B58\u53D6\u4E00\u81F4\u9632\u6B62 ",(0,r.jsx)(n.code,{children:"deadlock"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"goos: linux\ngoarch: amd64\npkg: github.com/gogf/gf/v2/container/gqueue\nBenchmark_Gqueue_StaticPushAndPop-4       20000000            84.2 ns/op\nBenchmark_Gqueue_DynamicPush-4            20000000             164 ns/op\nBenchmark_Gqueue_DynamicPop-4             20000000             121 ns/op\nBenchmark_Channel_PushAndPop-4            20000000            70.0 ns/op\nPASS\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\u6807\u51C6\u5E93\u7684 ",(0,r.jsx)(n.code,{children:"channel"})," \u7684\u8BFB\u5199\u6027\u80FD\u662F\u975E\u5E38\u9AD8\u7684\uFF0C\u4F46\u662F\u521B\u5EFA\u7684\u65F6\u5019\u7531\u4E8E\u9700\u8981\u521D\u59CB\u5316\u5185\u5B58\uFF0C\u56E0\u6B64\u521B\u5EFA ",(0,r.jsx)(n.code,{children:"channel"})," \u7684\u65F6\u5019\u6548\u7387\u975E\u5E38\u975E\u5E38\u4F4E\uFF08\u521D\u59CB\u5316\u5373\u5206\u914D\u5185\u5B58\uFF09\uFF0C\u5E76\u4E14\u53D7\u5230\u961F\u5217\u5927\u5C0F\u7684\u9650\u5236\uFF0C\u5199\u5165\u7684\u6570\u636E\u4E0D\u80FD\u8D85\u8FC7\u6307\u5B9A\u7684\u961F\u5217\u5927\u5C0F\u3002 ",(0,r.jsx)(n.code,{children:"gqueue"})," \u4F7F\u7528\u8D77\u6765\u6BD4 ",(0,r.jsx)(n.code,{children:"channel"})," \u66F4\u52A0\u7075\u6D3B\uFF0C\u4E0D\u4EC5\u521B\u5EFA\u6548\u7387\u9AD8\uFF08\u52A8\u6001\u5206\u914D\u5185\u5B58\uFF09\uFF0C\u4E0D\u53D7\u961F\u5217\u5927\u5C0F\u9650\u5236(\u4E5F\u53EF\u9650\u5B9A\u5927\u5C0F)\u3002"]})]})}function l(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var o=t(667294);let r={},i=o.createContext(r);function s(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);
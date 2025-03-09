"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["44685"],{322695:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>u,default:()=>l,assets:()=>i,toc:()=>a,frontMatter:()=>s});var t=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u961F\u5217\u7C7B\u578B-gqueue/\u961F\u5217\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5","title":"\u961F\u5217\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5","description":"\u5728GoFrame\u6846\u67B6\u4E2Dgqueue\u4E0E\u6807\u51C6\u5E93channel\u7684\u6027\u80FD\u6D4B\u8BD5\u3002\u901A\u8FC7\u57FA\u51C6\u6D4B\u8BD5\u5C55\u793A\u4E86gqueue\u5728\u52A8\u6001\u5B58\u50A8\u548C\u5F39\u6027\u5BB9\u91CF\u4E0A\u7684\u4F18\u52BF\uFF0C\u76F8\u5BF9\u4E8Echannel\u7684\u56FA\u5B9A\u5185\u5B58\u5206\u914D\u548C\u5BB9\u91CF\u9650\u5236\uFF0Cgqueue\u5728\u521B\u5EFA\u6548\u7387\u548C\u7075\u6D3B\u6027\u8868\u73B0\u66F4\u4F73\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u961F\u5217\u7C7B\u578B-gqueue/\u961F\u5217\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u961F\u5217\u7C7B\u578B-gqueue","slug":"/docs/components/container-gqueue-benchmark","permalink":"/2.7.x/docs/components/container-gqueue-benchmark","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u961F\u5217\u7C7B\u578B-gqueue/\u961F\u5217\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1740621099000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/components/container-gqueue-benchmark","title":"\u961F\u5217\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","gqueue","\u6027\u80FD\u6D4B\u8BD5","\u961F\u5217\u7C7B\u578B","channel","\u57FA\u51C6\u6D4B\u8BD5","\u52A8\u6001\u961F\u5217","\u961F\u5217\u6027\u80FD","benchmark"],"description":"\u5728GoFrame\u6846\u67B6\u4E2Dgqueue\u4E0E\u6807\u51C6\u5E93channel\u7684\u6027\u80FD\u6D4B\u8BD5\u3002\u901A\u8FC7\u57FA\u51C6\u6D4B\u8BD5\u5C55\u793A\u4E86gqueue\u5728\u52A8\u6001\u5B58\u50A8\u548C\u5F39\u6027\u5BB9\u91CF\u4E0A\u7684\u4F18\u52BF\uFF0C\u76F8\u5BF9\u4E8Echannel\u7684\u56FA\u5B9A\u5185\u5B58\u5206\u914D\u548C\u5BB9\u91CF\u9650\u5236\uFF0Cgqueue\u5728\u521B\u5EFA\u6548\u7387\u548C\u7075\u6D3B\u6027\u8868\u73B0\u66F4\u4F73\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u961F\u5217\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","permalink":"/2.7.x/docs/components/container-gqueue-example"},"next":{"title":"\u6811\u5F62\u7C7B\u578B-gtree","permalink":"/2.7.x/docs/components/container-gtree"}}'),c=o("785893"),r=o("250065");let s={slug:"/docs/components/container-gqueue-benchmark",title:"\u961F\u5217\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5",sidebar_position:1,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","gqueue","\u6027\u80FD\u6D4B\u8BD5","\u961F\u5217\u7C7B\u578B","channel","\u57FA\u51C6\u6D4B\u8BD5","\u52A8\u6001\u961F\u5217","\u961F\u5217\u6027\u80FD","benchmark"],description:"\u5728GoFrame\u6846\u67B6\u4E2Dgqueue\u4E0E\u6807\u51C6\u5E93channel\u7684\u6027\u80FD\u6D4B\u8BD5\u3002\u901A\u8FC7\u57FA\u51C6\u6D4B\u8BD5\u5C55\u793A\u4E86gqueue\u5728\u52A8\u6001\u5B58\u50A8\u548C\u5F39\u6027\u5BB9\u91CF\u4E0A\u7684\u4F18\u52BF\uFF0C\u76F8\u5BF9\u4E8Echannel\u7684\u56FA\u5B9A\u5185\u5B58\u5206\u914D\u548C\u5BB9\u91CF\u9650\u5236\uFF0Cgqueue\u5728\u521B\u5EFA\u6548\u7387\u548C\u7075\u6D3B\u6027\u8868\u73B0\u66F4\u4F73\u3002"},u=void 0,i={},a=[];function d(e){let n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://github.com/gogf/gf/blob/master/container/gqueue/gqueue_z_bench_test.go",children:"https://github.com/gogf/gf/blob/master/container/gqueue/gqueue_z_bench_test.go"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"gqueue"})," \u4E0E\u6807\u51C6\u5E93 ",(0,c.jsx)(n.code,{children:"channel"})," \u7684\u6027\u80FD\u57FA\u51C6\u6D4B\u8BD5\uFF0C\u5176\u4E2D\u6BCF\u4E00\u6B21\u57FA\u51C6\u6D4B\u8BD5\u7684 ",(0,c.jsx)(n.code,{children:"b.N"})," \u503C\u5747\u4E3A ",(0,c.jsx)(n.code,{children:"20000000"}),"\uFF0C\u4EE5\u4FDD\u8BC1\u52A8\u6001\u961F\u5217\u5B58\u53D6\u4E00\u81F4\u9632\u6B62 ",(0,c.jsx)(n.code,{children:"deadlock"}),":"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"goos: linux\ngoarch: amd64\npkg: github.com/gogf/gf/v2/container/gqueue\nBenchmark_Gqueue_StaticPushAndPop-4       20000000            84.2 ns/op\nBenchmark_Gqueue_DynamicPush-4            20000000             164 ns/op\nBenchmark_Gqueue_DynamicPop-4             20000000             121 ns/op\nBenchmark_Channel_PushAndPop-4            20000000            70.0 ns/op\nPASS\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\u6807\u51C6\u5E93\u7684 ",(0,c.jsx)(n.code,{children:"channel"})," \u7684\u8BFB\u5199\u6027\u80FD\u662F\u975E\u5E38\u9AD8\u7684\uFF0C\u4F46\u662F\u521B\u5EFA\u7684\u65F6\u5019\u7531\u4E8E\u9700\u8981\u521D\u59CB\u5316\u5185\u5B58\uFF0C\u56E0\u6B64\u521B\u5EFA ",(0,c.jsx)(n.code,{children:"channel"})," \u7684\u65F6\u5019\u6548\u7387\u975E\u5E38\u975E\u5E38\u4F4E\uFF08\u521D\u59CB\u5316\u5373\u5206\u914D\u5185\u5B58\uFF09\uFF0C\u5E76\u4E14\u53D7\u5230\u961F\u5217\u5927\u5C0F\u7684\u9650\u5236\uFF0C\u5199\u5165\u7684\u6570\u636E\u4E0D\u80FD\u8D85\u8FC7\u6307\u5B9A\u7684\u961F\u5217\u5927\u5C0F\u3002 ",(0,c.jsx)(n.code,{children:"gqueue"})," \u4F7F\u7528\u8D77\u6765\u6BD4 ",(0,c.jsx)(n.code,{children:"channel"})," \u66F4\u52A0\u7075\u6D3B\uFF0C\u4E0D\u4EC5\u521B\u5EFA\u6548\u7387\u9AD8\uFF08\u52A8\u6001\u5206\u914D\u5185\u5B58\uFF09\uFF0C\u4E0D\u53D7\u961F\u5217\u5927\u5C0F\u9650\u5236(\u4E5F\u53EF\u9650\u5B9A\u5927\u5C0F)\u3002"]})]})}function l(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return u},a:function(){return s}});var t=o(667294);let c={},r=t.createContext(c);function s(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
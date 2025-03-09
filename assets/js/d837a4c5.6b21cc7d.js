"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["19638"],{253340:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>d,default:()=>x,assets:()=>o,toc:()=>h,frontMatter:()=>c});var l=JSON.parse('{"id":"examples/observability/trace/processes/processes","title":"\u591A\u8FDB\u7A0B\u793A\u4F8B","description":"\u4F7F\u7528GoFrame\u4E0D\u540C\u8FDB\u7A0B\u7BA1\u7406\u65B9\u5F0F\u5B9E\u73B0\u7684\u591A\u8FDB\u7A0B\u5206\u5E03\u5F0F\u94FE\u8DEF\u8DDF\u8E2A\u793A\u4F8B","source":"@site/docs/examples/observability/trace/processes/processes.md","sourceDirName":"examples/observability/trace/processes","slug":"/examples/observability/trace/processes","permalink":"/examples/observability/trace/processes","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/examples/observability/trace/processes/processes.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1740107000000,"sidebarPosition":1,"frontMatter":{"title":"\u591A\u8FDB\u7A0B\u793A\u4F8B","slug":"/examples/observability/trace/processes","keywords":["\u94FE\u8DEF\u8DDF\u8E2A","\u591A\u8FDB\u7A0B","gcmd","gproc","goframe"],"description":"\u4F7F\u7528GoFrame\u4E0D\u540C\u8FDB\u7A0B\u7BA1\u7406\u65B9\u5F0F\u5B9E\u73B0\u7684\u591A\u8FDB\u7A0B\u5206\u5E03\u5F0F\u94FE\u8DEF\u8DDF\u8E2A\u793A\u4F8B","hide_title":true,"sidebar_position":1},"sidebar":"examplesSidebar","previous":{"title":"\u8FDB\u7A0B\u5185\u670D\u52A1 (gRPC\u5BFC\u51FA\u5668)","permalink":"/examples/observability/trace/inprocess-grpc"},"next":{"title":"OpenTelemetry\u793A\u4F8B","permalink":"/examples/observability/trace/otlp"}}'),i=s("785893"),r=s("250065");let c={title:"\u591A\u8FDB\u7A0B\u793A\u4F8B",slug:"/examples/observability/trace/processes",keywords:["\u94FE\u8DEF\u8DDF\u8E2A","\u591A\u8FDB\u7A0B","gcmd","gproc","goframe"],description:"\u4F7F\u7528GoFrame\u4E0D\u540C\u8FDB\u7A0B\u7BA1\u7406\u65B9\u5F0F\u5B9E\u73B0\u7684\u591A\u8FDB\u7A0B\u5206\u5E03\u5F0F\u94FE\u8DEF\u8DDF\u8E2A\u793A\u4F8B",hide_title:!0,sidebar_position:1},d="\u591A\u8FDB\u7A0B\u94FE\u8DEF\u8DDF\u8E2A\u793A\u4F8B",o={},h=[{value:"\u7B80\u4ECB",id:"\u7B80\u4ECB",level:2},{value:"\u76EE\u5F55\u7ED3\u6784",id:"\u76EE\u5F55\u7ED3\u6784",level:2},{value:"\u73AF\u5883\u8981\u6C42",id:"\u73AF\u5883\u8981\u6C42",level:2},{value:"\u529F\u80FD\u7279\u6027",id:"\u529F\u80FD\u7279\u6027",level:2},{value:"\u7BA1\u7406\u65B9\u5F0F\u5BF9\u6BD4",id:"\u7BA1\u7406\u65B9\u5F0F\u5BF9\u6BD4",level:2},{value:"\u547D\u4EE4\u884C\u7BA1\u7406 (gcmd/)",id:"\u547D\u4EE4\u884C\u7BA1\u7406-gcmd",level:3},{value:"\u7A0B\u5E8F\u5316\u7BA1\u7406 (gproc/)",id:"\u7A0B\u5E8F\u5316\u7BA1\u7406-gproc",level:3},{value:"\u4F7F\u7528\u8BF4\u660E",id:"\u4F7F\u7528\u8BF4\u660E",level:2},{value:"\u547D\u4EE4\u884C\u793A\u4F8B",id:"\u547D\u4EE4\u884C\u793A\u4F8B",level:3},{value:"\u7A0B\u5E8F\u5316\u7BA1\u7406\u793A\u4F8B",id:"\u7A0B\u5E8F\u5316\u7BA1\u7406\u793A\u4F8B",level:3},{value:"\u5B9E\u73B0\u8BF4\u660E",id:"\u5B9E\u73B0\u8BF4\u660E",level:2}];function t(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u591A\u8FDB\u7A0B\u94FE\u8DEF\u8DDF\u8E2A\u793A\u4F8B",children:"\u591A\u8FDB\u7A0B\u94FE\u8DEF\u8DDF\u8E2A\u793A\u4F8B"})}),"\n",(0,i.jsxs)(n.p,{children:["Github Source: ",(0,i.jsx)(n.a,{href:"https://github.com/gogf/examples/tree/main/observability/trace/processes",children:"https://github.com/gogf/examples/tree/main/observability/trace/processes"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u7B80\u4ECB",children:"\u7B80\u4ECB"}),"\n",(0,i.jsx)(n.p,{children:"\u672C\u76EE\u5F55\u5305\u542B\u4E86\u4F7F\u7528GoFrame\u4E0D\u540C\u8FDB\u7A0B\u7BA1\u7406\u65B9\u5F0F\u5B9E\u73B0\u591A\u8FDB\u7A0B\u5206\u5E03\u5F0F\u94FE\u8DEF\u8DDF\u8E2A\u7684\u793A\u4F8B\u3002\u5305\u62EC\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u547D\u4EE4\u884C\u8FDB\u7A0B\u7BA1\u7406 (",(0,i.jsx)(n.code,{children:"gcmd/"}),")"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4F7F\u7528",(0,i.jsx)(n.code,{children:"gcmd"}),"\u5305\u8FDB\u884C\u8FDB\u7A0B\u7BA1\u7406"]}),"\n",(0,i.jsx)(n.li,{children:"\u6F14\u793A\u57FA\u4E8E\u547D\u4EE4\u884C\u7684\u8FDB\u7A0B\u521B\u5EFA"}),"\n",(0,i.jsx)(n.li,{children:"\u5C55\u793A\u7236\u5B50\u8FDB\u7A0B\u95F4\u7684\u94FE\u8DEF\u8DDF\u8E2A\u4E0A\u4E0B\u6587\u4F20\u64AD"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u7A0B\u5E8F\u5316\u8FDB\u7A0B\u7BA1\u7406 (",(0,i.jsx)(n.code,{children:"gproc/"}),")"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4F7F\u7528",(0,i.jsx)(n.code,{children:"gproc"}),"\u5305\u8FDB\u884C\u8FDB\u7A0B\u7BA1\u7406"]}),"\n",(0,i.jsx)(n.li,{children:"\u6F14\u793A\u7A0B\u5E8F\u5316\u7684\u8FDB\u7A0B\u521B\u5EFA"}),"\n",(0,i.jsx)(n.li,{children:"\u5C55\u793A\u8FDB\u7A0B\u5C42\u7EA7\u4E2D\u7684\u94FE\u8DEF\u8DDF\u8E2A\u4F20\u64AD"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u76EE\u5F55\u7ED3\u6784",children:"\u76EE\u5F55\u7ED3\u6784"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:".\n\u251C\u2500\u2500 gcmd/           # \u547D\u4EE4\u884C\u8FDB\u7A0B\u7BA1\u7406\u793A\u4F8B\n\u2502   \u251C\u2500\u2500 main.go     # \u4E3B\u8FDB\u7A0B\u5B9E\u73B0\n\u2502   \u2514\u2500\u2500 sub/        # \u5B50\u8FDB\u7A0B\u5B9E\u73B0\n\u2502       \u2514\u2500\u2500 sub.go  # \u5B50\u8FDB\u7A0B\u4EE3\u7801\n\u251C\u2500\u2500 gproc/          # \u8FDB\u7A0B\u7BA1\u7406\u793A\u4F8B\n\u2502   \u251C\u2500\u2500 main.go     # \u4E3B\u8FDB\u7A0B\u5B9E\u73B0\n\u2502   \u2514\u2500\u2500 sub/        # \u5B50\u8FDB\u7A0B\u5B9E\u73B0\n\u2502       \u2514\u2500\u2500 sub.go  # \u5B50\u8FDB\u7A0B\u4EE3\u7801\n\u251C\u2500\u2500 go.mod          # Go\u6A21\u5757\u6587\u4EF6\n\u2514\u2500\u2500 go.sum          # Go\u6A21\u5757\u6821\u9A8C\u548C\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u73AF\u5883\u8981\u6C42",children:"\u73AF\u5883\u8981\u6C42"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Go ",(0,i.jsx)(n.code,{children:"1.22"})," \u6216\u66F4\u9AD8\u7248\u672C"]}),"\n",(0,i.jsx)(n.li,{children:"GoFrame\u6846\u67B6"}),"\n",(0,i.jsx)(n.li,{children:"GoFrame\u94FE\u8DEF\u8DDF\u8E2A\u652F\u6301"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u529F\u80FD\u7279\u6027",children:"\u529F\u80FD\u7279\u6027"}),"\n",(0,i.jsx)(n.p,{children:"\u672C\u793A\u4F8B\u5C55\u793A\u4E86\u4EE5\u4E0B\u529F\u80FD\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8FDB\u7A0B\u7BA1\u7406"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// gcmd\u65B9\u5F0F\nMain = &gcmd.Command{\n    Name:  "main",\n    Brief: "main process",\n    Func: func(ctx context.Context, parser *gcmd.Parser) (err error) {\n        return gproc.ShellRun(ctx, `go run sub/sub.go`)\n    },\n}\n\n// gproc\u65B9\u5F0F\nif err := gproc.ShellRun(ctx, `go run sub/sub.go`); err != nil {\n    panic(err)\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u94FE\u8DEF\u8DDF\u8E2A\u4E0A\u4E0B\u6587\u4F20\u64AD"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// \u4E3B\u8FDB\u7A0B\nctx := gctx.GetInitCtx()\ng.Log().Debug(ctx, `this is main process`)\n\n// \u5B50\u8FDB\u7A0B\nctx := gctx.GetInitCtx()\ng.Log().Debug(ctx, `this is sub process`)\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u65E5\u5FD7\u548C\u8C03\u8BD5"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u8FDB\u7A0B\u6807\u8BC6"}),"\n",(0,i.jsx)(n.li,{children:"\u8C03\u8BD5\u65E5\u5FD7"}),"\n",(0,i.jsx)(n.li,{children:"\u9519\u8BEF\u62A5\u544A"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7BA1\u7406\u65B9\u5F0F\u5BF9\u6BD4",children:"\u7BA1\u7406\u65B9\u5F0F\u5BF9\u6BD4"}),"\n",(0,i.jsx)(n.h3,{id:"\u547D\u4EE4\u884C\u7BA1\u7406-gcmd",children:"\u547D\u4EE4\u884C\u7BA1\u7406 (gcmd/)"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u7279\u70B9\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u547D\u4EE4\u884C\u754C\u9762"}),"\n",(0,i.jsx)(n.li,{children:"\u7ED3\u6784\u5316\u547D\u4EE4\u5904\u7406"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u7F6E\u5E2E\u52A9\u548C\u6587\u6863"}),"\n",(0,i.jsx)(n.li,{children:"\u547D\u4EE4\u5C42\u7EA7\u652F\u6301"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4F7F\u7528\u573A\u666F\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"CLI\u5E94\u7528\u7A0B\u5E8F"}),"\n",(0,i.jsx)(n.li,{children:"\u547D\u4EE4\u9A71\u52A8\u5DE5\u5177"}),"\n",(0,i.jsx)(n.li,{children:"\u4EA4\u4E92\u5F0F\u5E94\u7528"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u7A0B\u5E8F\u5316\u7BA1\u7406-gproc",children:"\u7A0B\u5E8F\u5316\u7BA1\u7406 (gproc/)"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u7279\u70B9\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7A0B\u5E8F\u5316\u8FDB\u7A0B\u63A7\u5236"}),"\n",(0,i.jsx)(n.li,{children:"\u76F4\u63A5\u8FDB\u7A0B\u64CD\u4F5C"}),"\n",(0,i.jsx)(n.li,{children:"Shell\u547D\u4EE4\u6267\u884C"}),"\n",(0,i.jsx)(n.li,{children:"\u8FDB\u7A0B\u540C\u6B65"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4F7F\u7528\u573A\u666F\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u540E\u53F0\u8FDB\u7A0B"}),"\n",(0,i.jsx)(n.li,{children:"\u670D\u52A1\u7BA1\u7406"}),"\n",(0,i.jsx)(n.li,{children:"\u8FDB\u7A0B\u81EA\u52A8\u5316"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4F7F\u7528\u8BF4\u660E",children:"\u4F7F\u7528\u8BF4\u660E"}),"\n",(0,i.jsx)(n.h3,{id:"\u547D\u4EE4\u884C\u793A\u4F8B",children:"\u547D\u4EE4\u884C\u793A\u4F8B"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8FDB\u5165gcmd\u793A\u4F8B\u76EE\u5F55\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd gcmd\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8FD0\u884C\u793A\u4F8B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go run main.go\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u7A0B\u5E8F\u5316\u7BA1\u7406\u793A\u4F8B",children:"\u7A0B\u5E8F\u5316\u7BA1\u7406\u793A\u4F8B"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8FDB\u5165gproc\u793A\u4F8B\u76EE\u5F55\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd gproc\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8FD0\u884C\u793A\u4F8B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go run main.go\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5B9E\u73B0\u8BF4\u660E",children:"\u5B9E\u73B0\u8BF4\u660E"}),"\n",(0,i.jsx)(n.p,{children:"\u4E24\u4E2A\u793A\u4F8B\u90FD\u6F14\u793A\u4E86\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8FDB\u7A0B\u521B\u5EFA"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4E3B\u8FDB\u7A0B\u521D\u59CB\u5316"}),"\n",(0,i.jsx)(n.li,{children:"\u5B50\u8FDB\u7A0B\u542F\u52A8"}),"\n",(0,i.jsx)(n.li,{children:"\u8FDB\u7A0B\u73AF\u5883\u8BBE\u7F6E"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4E0A\u4E0B\u6587\u7BA1\u7406"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// \u521B\u5EFA\u548C\u521D\u59CB\u5316\u4E0A\u4E0B\u6587\nctx := gctx.GetInitCtx()\n\n// \u5728\u8FDB\u7A0B\u95F4\u4F20\u64AD\u4E0A\u4E0B\u6587\ng.Log().Debug(ctx, `process message`)\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u9519\u8BEF\u5904\u7406"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// \u8FDB\u7A0B\u6267\u884C\u9519\u8BEF\u5904\u7406\nif err := gproc.ShellRun(ctx, command); err != nil {\n    panic(err)\n}\n\n// \u547D\u4EE4\u6267\u884C\u9519\u8BEF\u5904\u7406\nif err := cmd.Run(ctx); err != nil {\n    return err\n}\n"})}),"\n"]}),"\n"]})]})}function x(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return c}});var l=s(667294);let i={},r=l.createContext(i);function c(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);
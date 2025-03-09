"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["39227"],{903027:function(e,n,r){r.r(n),r.d(n,{metadata:()=>d,contentTitle:()=>c,default:()=>o,assets:()=>l,toc:()=>h,frontMatter:()=>s});var d=JSON.parse('{"id":"\u5FAE\u670D\u52A1\u5F00\u53D1/\u62E6\u622A\u5668\u7EC4\u4EF6","title":"\u62E6\u622A\u5668\u7EC4\u4EF6","description":"GRPC \u652F\u6301\u62E6\u622A\u5668\u7279\u6027\uFF0C\u63D0\u9AD8\u4E86 GRPC \u7684\u7075\u6D3B\u6027\u548C\u6269\u5C55\u6027\u3002","source":"@site/versioned_docs/version-2.6.x/\u5FAE\u670D\u52A1\u5F00\u53D1/\u62E6\u622A\u5668\u7EC4\u4EF6.md","sourceDirName":"\u5FAE\u670D\u52A1\u5F00\u53D1","slug":"/\u5FAE\u670D\u52A1\u5F00\u53D1/\u62E6\u622A\u5668\u7EC4\u4EF6","permalink":"/en/2.6.x/\u5FAE\u670D\u52A1\u5F00\u53D1/\u62E6\u622A\u5668\u7EC4\u4EF6","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/\u5FAE\u670D\u52A1\u5F00\u53D1/\u62E6\u622A\u5668\u7EC4\u4EF6.md","tags":[],"version":"2.6.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":4,"frontMatter":{"title":"\u62E6\u622A\u5668\u7EC4\u4EF6","sidebar_position":4,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u670D\u52A1\u7AEF\u914D\u7F6E","permalink":"/en/2.6.x/\u5FAE\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u7AEF\u914D\u7F6E"},"next":{"title":"\u670D\u52A1\u6CE8\u518C\u53D1\u73B0","permalink":"/en/2.6.x/\u5FAE\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u6CE8\u518C\u53D1\u73B0"}}'),t=r("785893"),i=r("250065");let s={title:"\u62E6\u622A\u5668\u7EC4\u4EF6",sidebar_position:4,hide_title:!0},c=void 0,l={},h=[{value:"\u62E6\u622A\u5668\u4F7F\u7528",id:"\u62E6\u622A\u5668\u4F7F\u7528",level:2},{value:"\u670D\u52A1\u7AEF",id:"\u670D\u52A1\u7AEF",level:3},{value:"\u5BA2\u6237\u7AEF",id:"\u5BA2\u6237\u7AEF",level:3},{value:"\u62E6\u622A\u5668\u5217\u8868",id:"\u62E6\u622A\u5668\u5217\u8868",level:2}];function x(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"GRPC"})," \u652F\u6301\u62E6\u622A\u5668\u7279\u6027\uFF0C\u63D0\u9AD8\u4E86 ",(0,t.jsx)(n.code,{children:"GRPC"})," \u7684\u7075\u6D3B\u6027\u548C\u6269\u5C55\u6027\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u62E6\u622A\u5668\u4F7F\u7528",children:"\u62E6\u622A\u5668\u4F7F\u7528"}),"\n",(0,t.jsx)(n.h3,{id:"\u670D\u52A1\u7AEF",children:"\u670D\u52A1\u7AEF"}),"\n",(0,t.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"grpcx.Server.ChainUnary"})," \u589E\u52A0\u989D\u5916\u7684\u670D\u52A1\u7AEF\u62E6\u622A\u5668\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"c := grpcx.Server.NewConfig()\nc.Options = append(c.Options, []grpc.ServerOption{\n    grpcx.Server.ChainUnary(\n        grpcx.Server.UnaryValidate,\n    )}...,\n)\ns := grpcx.Server.New(c)\nuser.Register(s)\ns.Run()\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5BA2\u6237\u7AEF",children:"\u5BA2\u6237\u7AEF"}),"\n",(0,t.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"grpcx.Client.ChainUnary"})," \u589E\u52A0\u989D\u5916\u7684\u670D\u52A1\u7AEF\u62E6\u622A\u5668\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'conn = grpcx.Client.MustNewGrpcClientConn("demo", grpcx.Client.ChainUnary(\n    grpcx.Client.UnaryTracing,\n))\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u62E6\u622A\u5668\u5217\u8868",children:"\u62E6\u622A\u5668\u5217\u8868"}),"\n",(0,t.jsxs)(n.p,{children:["\u6846\u67B6\u7684 ",(0,t.jsx)(n.code,{children:"grpcx"})," \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u7684\u5E38\u7528\u62E6\u622A\u5668\uFF0C\u90E8\u5206\u5185\u7F6E\uFF0C\u90E8\u5206\u53EF\u9009\u62E9\u63D2\u62D4\u4F7F\u7528\u3002"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u62E6\u622A\u5668"}),(0,t.jsx)(n.th,{children:"\u4F7F\u7528\u90E8\u4F4D"}),(0,t.jsx)(n.th,{children:"\u662F\u5426\u5185\u7F6E"}),(0,t.jsx)(n.th,{children:"\u63CF\u8FF0"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"UnaryError"})}),(0,t.jsx)(n.td,{children:"\u5BA2\u6237\u7AEF"}),(0,t.jsx)(n.td,{children:"\u662F"}),(0,t.jsx)(n.td,{children:"\u652F\u6301\u6846\u67B6\u9519\u8BEF\u5904\u7406\u7EC4\u4EF6\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"UnaryTracing"})}),(0,t.jsx)(n.td,{children:"\u5BA2\u6237\u7AEF"}),(0,t.jsx)(n.td,{children:"\u662F"}),(0,t.jsx)(n.td,{children:"\u652F\u6301\u94FE\u8DEF\u8DDF\u8E2A\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"StreamTracing"})}),(0,t.jsx)(n.td,{children:"\u5BA2\u6237\u7AEF"}),(0,t.jsx)(n.td,{children:"\u662F"}),(0,t.jsx)(n.td,{children:"\u652F\u6301\u94FE\u8DEF\u8DDF\u8E2A\uFF08\u957F\u8FDE\u63A5\uFF09\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"UnaryError"})}),(0,t.jsx)(n.td,{children:"\u670D\u52A1\u7AEF"}),(0,t.jsx)(n.td,{children:"\u662F"}),(0,t.jsx)(n.td,{children:"\u652F\u6301\u6846\u67B6\u9519\u8BEF\u5904\u7406\u7EC4\u4EF6\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"UnaryRecover"})}),(0,t.jsx)(n.td,{children:"\u670D\u52A1\u7AEF"}),(0,t.jsx)(n.td,{children:"\u662F"}),(0,t.jsxs)(n.td,{children:["\u652F\u6301\u670D\u52A1\u7AEF ",(0,t.jsx)(n.code,{children:"panic"})," \u81EA\u52A8\u6355\u83B7\u4E0D\u5D29\u6E83\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"UnaryAllowNilRes"})}),(0,t.jsx)(n.td,{children:"\u670D\u52A1\u7AEF"}),(0,t.jsx)(n.td,{children:"\u662F"}),(0,t.jsxs)(n.td,{children:["\u652F\u6301 ",(0,t.jsx)(n.code,{children:"nil"})," \u7684 ",(0,t.jsx)(n.code,{children:"Res"})," \u5BF9\u8C61\u8FD4\u56DE\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"UnaryValidate"})}),(0,t.jsx)(n.td,{children:"\u670D\u52A1\u7AEF"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"\u652F\u6301\u6846\u67B6\u7684\u81EA\u52A8\u9519\u8BEF\u6821\u9A8C\uFF0C\u57FA\u4E8E\u7ED3\u6784\u4F53\u6807\u7B7E\u3002\u9700\u8981\u624B\u52A8\u5F15\u5165\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"UnaryTracing"})}),(0,t.jsx)(n.td,{children:"\u670D\u52A1\u7AEF"}),(0,t.jsx)(n.td,{children:"\u662F"}),(0,t.jsx)(n.td,{children:"\u652F\u6301\u94FE\u8DEF\u8DDF\u8E2A\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"StreamTracing"})}),(0,t.jsx)(n.td,{children:"\u670D\u52A1\u7AEF"}),(0,t.jsx)(n.td,{children:"\u662F"}),(0,t.jsx)(n.td,{children:"\u652F\u6301\u94FE\u8DEF\u8DDF\u8E2A\uFF08\u957F\u8FDE\u63A5\uFF09\u3002"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return s}});var d=r(667294);let t={},i=d.createContext(t);function s(e){let n=d.useContext(i);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);
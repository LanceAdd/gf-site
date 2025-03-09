"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["79492"],{36757:function(n,e,o){o.r(e),o.d(e,{metadata:()=>s,contentTitle:()=>c,default:()=>m,assets:()=>d,toc:()=>l,frontMatter:()=>t});var s=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/NoSQL Redis/Redis-Conn\u5BF9\u8C61","title":"Redis-Conn\u5BF9\u8C61","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528Redis\u7684Conn\u5BF9\u8C61\u8FDB\u884C\u957F\u94FE\u63A5\u64CD\u4F5C\uFF0C\u5982\u8BA2\u9605\u53D1\u5E03\u7B49\u529F\u80FD\u3002\u901A\u8FC7\u4F7F\u7528\u8FDE\u63A5\u6C60\u83B7\u53D6\u8FDE\u63A5\u5BF9\u8C61\u8FDB\u884C\u64CD\u4F5C\uFF0C\u540C\u65F6\u6CE8\u610F\u8FDE\u63A5\u5BF9\u8C61\u8D85\u65F6\u95EE\u9898\u4EE5\u53CA\u4F7F\u7528\u540E\u7684\u5173\u95ED\u64CD\u4F5C\u3002\u793A\u4F8B\u4EE3\u7801\u5C55\u793A\u4E86\u901A\u8FC7Conn\u5B9E\u73B0\u8BA2\u9605\u53D1\u5E03\u6A21\u5F0F\uFF0C\u7A0B\u5E8F\u5C06\u5728\u7EC8\u7AEF\u6253\u5370\u4ECERedis Server\u83B7\u53D6\u7684\u6570\u636E\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/NoSQL Redis/Redis-Conn\u5BF9\u8C61.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/NoSQL Redis","slug":"/docs/components/contrib-nosql-redis-conn","permalink":"/en/2.7.x/docs/components/contrib-nosql-redis-conn","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/NoSQL Redis/Redis-Conn\u5BF9\u8C61.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/components/contrib-nosql-redis-conn","title":"Redis-Conn\u5BF9\u8C61","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","Redis","Conn\u5BF9\u8C61","\u8BA2\u9605\u53D1\u5E03","\u8FDE\u63A5\u6C60","\u957F\u94FE\u63A5","\u8FDE\u63A5\u8D85\u65F6","\u8BA2\u9605\u6A21\u5F0F","\u53D1\u5E03\u6A21\u5F0F"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528Redis\u7684Conn\u5BF9\u8C61\u8FDB\u884C\u957F\u94FE\u63A5\u64CD\u4F5C\uFF0C\u5982\u8BA2\u9605\u53D1\u5E03\u7B49\u529F\u80FD\u3002\u901A\u8FC7\u4F7F\u7528\u8FDE\u63A5\u6C60\u83B7\u53D6\u8FDE\u63A5\u5BF9\u8C61\u8FDB\u884C\u64CD\u4F5C\uFF0C\u540C\u65F6\u6CE8\u610F\u8FDE\u63A5\u5BF9\u8C61\u8D85\u65F6\u95EE\u9898\u4EE5\u53CA\u4F7F\u7528\u540E\u7684\u5173\u95ED\u64CD\u4F5C\u3002\u793A\u4F8B\u4EE3\u7801\u5C55\u793A\u4E86\u901A\u8FC7Conn\u5B9E\u73B0\u8BA2\u9605\u53D1\u5E03\u6A21\u5F0F\uFF0C\u7A0B\u5E8F\u5C06\u5728\u7EC8\u7AEF\u6253\u5370\u4ECERedis Server\u83B7\u53D6\u7684\u6570\u636E\u3002"},"sidebar":"mainSidebar","previous":{"title":"Redis-\u547D\u4EE4\u4EA4\u4E92","permalink":"/en/2.7.x/docs/components/contrib-nosql-redis-do-and-serialization"},"next":{"title":"Redis-\u63A5\u53E3\u5316\u8BBE\u8BA1","permalink":"/en/2.7.x/docs/components/contrib-nosql-redis-interface"}}'),i=o("785893"),r=o("250065");let t={slug:"/docs/components/contrib-nosql-redis-conn",title:"Redis-Conn\u5BF9\u8C61",sidebar_position:3,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","Redis","Conn\u5BF9\u8C61","\u8BA2\u9605\u53D1\u5E03","\u8FDE\u63A5\u6C60","\u957F\u94FE\u63A5","\u8FDE\u63A5\u8D85\u65F6","\u8BA2\u9605\u6A21\u5F0F","\u53D1\u5E03\u6A21\u5F0F"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528Redis\u7684Conn\u5BF9\u8C61\u8FDB\u884C\u957F\u94FE\u63A5\u64CD\u4F5C\uFF0C\u5982\u8BA2\u9605\u53D1\u5E03\u7B49\u529F\u80FD\u3002\u901A\u8FC7\u4F7F\u7528\u8FDE\u63A5\u6C60\u83B7\u53D6\u8FDE\u63A5\u5BF9\u8C61\u8FDB\u884C\u64CD\u4F5C\uFF0C\u540C\u65F6\u6CE8\u610F\u8FDE\u63A5\u5BF9\u8C61\u8D85\u65F6\u95EE\u9898\u4EE5\u53CA\u4F7F\u7528\u540E\u7684\u5173\u95ED\u64CD\u4F5C\u3002\u793A\u4F8B\u4EE3\u7801\u5C55\u793A\u4E86\u901A\u8FC7Conn\u5B9E\u73B0\u8BA2\u9605\u53D1\u5E03\u6A21\u5F0F\uFF0C\u7A0B\u5E8F\u5C06\u5728\u7EC8\u7AEF\u6253\u5370\u4ECERedis Server\u83B7\u53D6\u7684\u6570\u636E\u3002"},c=void 0,d={},l=[{value:"<code>Conn</code> \u5BF9\u8C61",id:"conn-\u5BF9\u8C61",level:2},{value:"\u8BA2\u9605/\u53D1\u5E03",id:"\u8BA2\u9605\u53D1\u5E03",level:2}];function a(n){let e={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h2,{id:"conn-\u5BF9\u8C61",children:[(0,i.jsx)(e.code,{children:"Conn"})," \u5BF9\u8C61"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679C\u9700\u8981\u5B9E\u73B0\u957F\u94FE\u63A5\u6027\u7684 ",(0,i.jsx)(e.code,{children:"Redis"})," \u64CD\u4F5C\uFF08\u4F8B\u5982\u8BA2\u9605\u53D1\u5E03\uFF09\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 ",(0,i.jsx)(e.code,{children:"Conn"})," \u65B9\u6CD5\u4ECE\u8FDE\u63A5\u6C60\u4E2D\u83B7\u53D6\u4E00\u4E2A\u8FDE\u63A5\u5BF9\u8C61\uFF0C\u968F\u540E\u4F7F\u7528\u8BE5\u8FDE\u63A5\u5BF9\u8C61\u8FDB\u884C\u64CD\u4F5C\u3002\u4F46\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8BE5\u8FDE\u63A5\u5BF9\u8C61\u4E0D\u518D\u4F7F\u7528\u65F6\uFF0C\u5E94\u5F53\u663E\u5F0F\u8C03\u7528 ",(0,i.jsx)(e.code,{children:"Close"})," \u65B9\u6CD5\u8FDB\u884C\u5173\u95ED\uFF08\u4E22\u56DE\u8FDE\u63A5\u6C60\uFF09\u3002"]}),"\n",(0,i.jsx)(e.admonition,{type:"warning",children:(0,i.jsxs)(e.p,{children:["\u7531\u4E8E\u8BE5 ",(0,i.jsx)(e.code,{children:"Conn"})," \u662F\u4E2A\u8FDE\u63A5\u5BF9\u8C61\uFF0C\u6CE8\u610F\u8BE5\u5BF9\u8C61\u5B58\u5728\u8FDE\u63A5\u8D85\u65F6\u7684\u9650\u5236\uFF0C\u8D85\u65F6\u548C\u670D\u52A1\u7AEF\u914D\u7F6E\u6709\u5173\u3002"]})}),"\n",(0,i.jsx)(e.h2,{id:"\u8BA2\u9605\u53D1\u5E03",children:"\u8BA2\u9605/\u53D1\u5E03"}),"\n",(0,i.jsxs)(e.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,i.jsx)(e.code,{children:"Redis"})," \u7684 ",(0,i.jsx)(e.code,{children:"Conn"})," \u5B9E\u73B0\u8BA2\u9605/\u53D1\u5E03\u6A21\u5F0F\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx     = gctx.New()\n        channel = "channel"\n    )\n    conn, _ := g.Redis().Conn(ctx)\n    defer conn.Close(ctx)\n    _, err := conn.Subscribe(ctx, channel)\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    for {\n        msg, err := conn.ReceiveMessage(ctx)\n        if err != nil {\n            g.Log().Fatal(ctx, err)\n        }\n        fmt.Println(msg.Payload)\n    }\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u7A0B\u5E8F\u5C06\u963B\u585E\u7B49\u5F85\u83B7\u53D6\u6570\u636E\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u53E6\u5916\u6253\u5F00\u4E00\u4E2A\u7EC8\u7AEF\u901A\u8FC7 ",(0,i.jsx)(e.code,{children:"redis-cli"})," \u547D\u4EE4\u8FDB\u5165 ",(0,i.jsx)(e.code,{children:"Redis Server"}),"\uFF0C\u53D1\u5E03\u4E00\u6761\u6D88\u606F\uFF1A"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"$ redis-cli\n127.0.0.1:6379> publish channel test\n(integer) 1\n127.0.0.1:6379>\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u968F\u540E\u7A0B\u5E8F\u7EC8\u7AEF\u7ACB\u5373\u6253\u5370\u51FA\u4ECE ",(0,i.jsx)(e.code,{children:"Redis Server"})," \u83B7\u53D6\u7684\u6570\u636E\uFF1A"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-test"})})]})}function m(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},250065:function(n,e,o){o.d(e,{Z:function(){return c},a:function(){return t}});var s=o(667294);let i={},r=s.createContext(i);function t(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);
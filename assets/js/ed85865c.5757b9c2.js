"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["87273"],{73585:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>p,assets:()=>c,toc:()=>a,frontMatter:()=>o});var r=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-Stream\u8FD4\u56DE","title":"\u6570\u636E\u8FD4\u56DE-Stream\u8FD4\u56DE","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u5B9E\u73B0HTTP\u6D41\u5F0F\u6570\u636E\u8FD4\u56DE\uFF0C\u9002\u7528\u4E8E\u6846\u67B6\u7248\u672C\u5C0F\u4E8Ev2.4\u53CA\u4EE5\u4E0A\u7684\u7248\u672C\u3002\u901A\u8FC7\u7B80\u5316\u7684\u4EE3\u7801\u5B9E\u73B0\u9AD8\u6548\u7684\u6D41\u5F0F\u6570\u636E\u4F20\u8F93\uFF0C\u9002\u7528\u4E8E\u9700\u8981\u957F\u8FDE\u63A5\u548C\u6301\u7EED\u6570\u636E\u66F4\u65B0\u7684\u573A\u666F\uFF0C\u5E76\u63D0\u4F9B\u6CE8\u610F\u4E8B\u9879\u548C\u76F8\u5173\u8D44\u6599\u7684\u53C2\u8003\u3002","source":"@site/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-Stream\u8FD4\u56DE.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE","slug":"/docs/web/response-stream","permalink":"/2.7.x/docs/web/response-stream","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-Stream\u8FD4\u56DE.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/web/response-stream","title":"\u6570\u636E\u8FD4\u56DE-Stream\u8FD4\u56DE","sidebar_position":6,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","HTTP\u6D41\u5F0F\u6570\u636E\u8FD4\u56DE","\u6D41\u5F0F\u6570\u636E","v2.4","SSE","\u6570\u636E\u8FD4\u56DE","\u6D41\u5F0F\u5904\u7406","\u4E8B\u4EF6\u6D41","Go\u8BED\u8A00"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u5B9E\u73B0HTTP\u6D41\u5F0F\u6570\u636E\u8FD4\u56DE\uFF0C\u9002\u7528\u4E8E\u6846\u67B6\u7248\u672C\u5C0F\u4E8Ev2.4\u53CA\u4EE5\u4E0A\u7684\u7248\u672C\u3002\u901A\u8FC7\u7B80\u5316\u7684\u4EE3\u7801\u5B9E\u73B0\u9AD8\u6548\u7684\u6D41\u5F0F\u6570\u636E\u4F20\u8F93\uFF0C\u9002\u7528\u4E8E\u9700\u8981\u957F\u8FDE\u63A5\u548C\u6301\u7EED\u6570\u636E\u66F4\u65B0\u7684\u573A\u666F\uFF0C\u5E76\u63D0\u4F9B\u6CE8\u610F\u4E8B\u9879\u548C\u76F8\u5173\u8D44\u6599\u7684\u53C2\u8003\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6570\u636E\u8FD4\u56DE-\u6A21\u677F\u89E3\u6790","permalink":"/2.7.x/docs/web/response-template"},"next":{"title":"\u670D\u52A1\u914D\u7F6E","permalink":"/2.7.x/docs/web/server-config"}}'),s=t("785893"),i=t("250065");let o={slug:"/docs/web/response-stream",title:"\u6570\u636E\u8FD4\u56DE-Stream\u8FD4\u56DE",sidebar_position:6,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","HTTP\u6D41\u5F0F\u6570\u636E\u8FD4\u56DE","\u6D41\u5F0F\u6570\u636E","v2.4","SSE","\u6570\u636E\u8FD4\u56DE","\u6D41\u5F0F\u5904\u7406","\u4E8B\u4EF6\u6D41","Go\u8BED\u8A00"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u5B9E\u73B0HTTP\u6D41\u5F0F\u6570\u636E\u8FD4\u56DE\uFF0C\u9002\u7528\u4E8E\u6846\u67B6\u7248\u672C\u5C0F\u4E8Ev2.4\u53CA\u4EE5\u4E0A\u7684\u7248\u672C\u3002\u901A\u8FC7\u7B80\u5316\u7684\u4EE3\u7801\u5B9E\u73B0\u9AD8\u6548\u7684\u6D41\u5F0F\u6570\u636E\u4F20\u8F93\uFF0C\u9002\u7528\u4E8E\u9700\u8981\u957F\u8FDE\u63A5\u548C\u6301\u7EED\u6570\u636E\u66F4\u65B0\u7684\u573A\u666F\uFF0C\u5E76\u63D0\u4F9B\u6CE8\u610F\u4E8B\u9879\u548C\u76F8\u5173\u8D44\u6599\u7684\u53C2\u8003\u3002"},d=void 0,c={},a=[{value:"\u6846\u67B6\u7248\u672C &lt; <code>v2.4</code>",id:"\u6846\u67B6\u7248\u672C--v24",level:2},{value:"\u6846\u67B6\u7248\u672C &gt;= <code>v2.4</code>",id:"\u6846\u67B6\u7248\u672C--v24-1",level:2},{value:"\u793A\u4F8B\u7ED3\u679C",id:"\u793A\u4F8B\u7ED3\u679C",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u8D44\u6599",id:"\u8D44\u6599",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u6211\u4EEC\u53EF\u4EE5\u5F88\u7B80\u5355\u5B9E\u73B0HTTP\u6D41\u5F0F\u6570\u636E\u8FD4\u56DE\u3002"}),"\n",(0,s.jsxs)(n.h2,{id:"\u6846\u67B6\u7248\u672C--v24",children:["\u6846\u67B6\u7248\u672C < ",(0,s.jsx)(n.code,{children:"v2.4"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679C\u5F53\u524D\u4F7F\u7528\u7684\u6846\u67B6\u7248\u672C\u5C0F\u4E8E ",(0,s.jsx)(n.code,{children:"v2.4"})," \u6B63\u5F0F\u7248\uFF08\u4E0D\u662F ",(0,s.jsx)(n.code,{children:"beta"})," \u7248\u672C\uFF09\uFF0C\u4F7F\u7528\u4EE5\u4E0B\u65B9\u5F0F\u8FD4\u56DE\uFF08\u6807\u51C6\u5E93\u539F\u751F\u5199\u6CD5\uFF09\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "net/http"\n    "time"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        rw := r.Response.RawWriter()\n        flusher, ok := rw.(http.Flusher)\n        if !ok {\n            http.Error(rw, "Streaming unsupported!", http.StatusInternalServerError)\n            return\n        }\n        r.Response.Header().Set("Content-Type", "text/event-stream")\n        r.Response.Header().Set("Cache-Control", "no-cache")\n        r.Response.Header().Set("Connection", "keep-alive")\n\n        for i := 0; i < 100; i++ {\n            _, err := fmt.Fprintf(rw, "data: %d\\n", i)\n            if err != nil {\n                panic(err)\n            }\n            flusher.Flush()\n            time.Sleep(time.Millisecond * 200)\n        }\n    })\n    s.SetPort(8999)\n    s.Run()\n}\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"\u6846\u67B6\u7248\u672C--v24-1",children:["\u6846\u67B6\u7248\u672C >= ",(0,s.jsx)(n.code,{children:"v2.4"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u7531\u4E8E\u4EE5\u4E0A\u64CD\u4F5C\u6709\u70B9\u7E41\u7410\uFF0C\u56E0\u6B64\u5728\u8BE5\u7248\u672C\u4EE5\u540E\u505A\u4E86\u4E00\u4E9B\u64CD\u4F5C\u4E0A\u7684\u6539\u8FDB\uFF0C\u5982\u679C\u5F53\u524D\u4F7F\u7528\u7684\u6846\u67B6\u7248\u672C\u5728 ",(0,s.jsx)(n.code,{children:"v2.4"})," \u6B63\u5F0F\u7248\uFF08\u4E0D\u662F ",(0,s.jsx)(n.code,{children:"beta"})," \u7248\u672C\uFF09\u4EE5\u4E0A\uFF0C\u90A3\u4E48\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u65B9\u5F0F\u5FEB\u901F\u5B9E\u73B0\u6D41\u5F0F\u6570\u636E\u8FD4\u56DE\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "time"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Response.Header().Set("Content-Type", "text/event-stream")\n        r.Response.Header().Set("Cache-Control", "no-cache")\n        r.Response.Header().Set("Connection", "keep-alive")\n\n        for i := 0; i < 100; i++ {\n            r.Response.Writefln("data: %d", i)\n            r.Response.Flush()\n            time.Sleep(time.Millisecond * 200)\n        }\n    })\n    s.SetPort(8999)\n    s.Run()\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B\u7ED3\u679C",children:"\u793A\u4F8B\u7ED3\u679C"}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884C\u540E\u8BBF\u95EE ",(0,s.jsx)(n.a,{href:"http://127.0.0.1:8999/",children:"http://127.0.0.1:8999/"})," \u53EF\u4EE5\u770B\u5230\u6570\u636E\u901A\u8FC7\u6D41\u5F0F\u65B9\u5F0F\u4E0D\u65AD\u5730\u5C06\u6570\u636E\u8FD4\u56DE\u7ED9\u8C03\u7528\u7AEF\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(697038).Z+"",width:"1084",height:"720"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5982\u679C\u662F\u5728\u63A7\u5236\u5668\u4E2D\u4F7F\u7528\uFF0C ",(0,s.jsx)(n.code,{children:"Request"})," \u5BF9\u8C61\u7684\u83B7\u53D6\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"g.RequestFromCtx(ctx)"})," \u65B9\u6CD5\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679C\u6709\u524D\u7F6E\u7EDF\u4E00\u8F93\u5165\u8F93\u51FA\u5904\u7406\u7684\u4E2D\u95F4\u4EF6\uFF0C\u8BF7\u5C06\u8BE5\u65B9\u6CD5\u653E\u7F6E\u4E8E\u4E2D\u95F4\u4EF6\u4F5C\u7528\u57DF\u4E4B\u5916\uFF0C\u6216\u8005\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"r.ExitAll()"})," \u65B9\u6CD5\u8DF3\u51FA\u4E2D\u95F4\u4EF6\u63A7\u5236\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8D44\u6599",children:"\u8D44\u6599"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.ruanyifeng.com/blog/2017/05/server-sent_events.html",children:"Server-Sent Events \uFF08SSE\uFF09"})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},697038:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/1a8b7fecfb331ebe454633ac06b27592-6bcae2482acc3ad8fd6d6d0a71d1816b.png"},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var r=t(667294);let s={},i=r.createContext(s);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
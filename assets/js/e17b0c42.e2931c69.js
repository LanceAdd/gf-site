"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["16929"],{269888:function(e,d,n){n.r(d),n.d(d,{metadata:()=>s,contentTitle:()=>l,default:()=>x,assets:()=>t,toc:()=>o,frontMatter:()=>c});var s=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/NoSQL Redis/Redis-\u914D\u7F6E\u7BA1\u7406","title":"Redis-\u914D\u7F6E\u7BA1\u7406","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528gredis\u7EC4\u4EF6\u8FDB\u884CRedis\u7684\u914D\u7F6E\u7BA1\u7406\u3002\u6211\u4EEC\u63A8\u8350\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u6765\u7BA1\u7406Redis\u914D\u7F6E\uFF0C\u652F\u6301\u5355\u5B9E\u4F8B\u548C\u96C6\u7FA4\u5316\u914D\u7F6E\u3002\u6B64\u5916\uFF0C\u8FD8\u8BE6\u7EC6\u8BF4\u660E\u4E86\u5404\u79CD\u914D\u7F6E\u9879\u7684\u4F7F\u7528\u65B9\u6CD5\uFF0C\u5E76\u63D0\u4F9B\u4E86\u76F8\u5173\u7684\u4EE3\u7801\u793A\u4F8B\u4F9B\u53C2\u8003\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/NoSQL Redis/Redis-\u914D\u7F6E\u7BA1\u7406.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/NoSQL Redis","slug":"/docs/components/contrib-nosql-redis-config","permalink":"/2.7.x/docs/components/contrib-nosql-redis-config","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/NoSQL Redis/Redis-\u914D\u7F6E\u7BA1\u7406.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/components/contrib-nosql-redis-config","title":"Redis-\u914D\u7F6E\u7BA1\u7406","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","gredis","Redis\u914D\u7F6E","\u914D\u7F6E\u7BA1\u7406","\u914D\u7F6E\u6587\u4EF6","\u5355\u4F8B\u5BF9\u8C61","\u96C6\u7FA4\u914D\u7F6E","\u6A21\u5757\u5316","\u914D\u7F6E\u65B9\u6CD5"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528gredis\u7EC4\u4EF6\u8FDB\u884CRedis\u7684\u914D\u7F6E\u7BA1\u7406\u3002\u6211\u4EEC\u63A8\u8350\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u6765\u7BA1\u7406Redis\u914D\u7F6E\uFF0C\u652F\u6301\u5355\u5B9E\u4F8B\u548C\u96C6\u7FA4\u5316\u914D\u7F6E\u3002\u6B64\u5916\uFF0C\u8FD8\u8BE6\u7EC6\u8BF4\u660E\u4E86\u5404\u79CD\u914D\u7F6E\u9879\u7684\u4F7F\u7528\u65B9\u6CD5\uFF0C\u5E76\u63D0\u4F9B\u4E86\u76F8\u5173\u7684\u4EE3\u7801\u793A\u4F8B\u4F9B\u53C2\u8003\u3002"},"sidebar":"mainSidebar","previous":{"title":"NoSQL Redis","permalink":"/2.7.x/docs/components/contrib-nosql-redis"},"next":{"title":"Redis-\u4F7F\u7528\u793A\u4F8B","permalink":"/2.7.x/docs/components/contrib-nosql-redis-example"}}'),i=n("785893"),r=n("250065");let c={slug:"/docs/components/contrib-nosql-redis-config",title:"Redis-\u914D\u7F6E\u7BA1\u7406",sidebar_position:0,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","gredis","Redis\u914D\u7F6E","\u914D\u7F6E\u7BA1\u7406","\u914D\u7F6E\u6587\u4EF6","\u5355\u4F8B\u5BF9\u8C61","\u96C6\u7FA4\u914D\u7F6E","\u6A21\u5757\u5316","\u914D\u7F6E\u65B9\u6CD5"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528gredis\u7EC4\u4EF6\u8FDB\u884CRedis\u7684\u914D\u7F6E\u7BA1\u7406\u3002\u6211\u4EEC\u63A8\u8350\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u6765\u7BA1\u7406Redis\u914D\u7F6E\uFF0C\u652F\u6301\u5355\u5B9E\u4F8B\u548C\u96C6\u7FA4\u5316\u914D\u7F6E\u3002\u6B64\u5916\uFF0C\u8FD8\u8BE6\u7EC6\u8BF4\u660E\u4E86\u5404\u79CD\u914D\u7F6E\u9879\u7684\u4F7F\u7528\u65B9\u6CD5\uFF0C\u5E76\u63D0\u4F9B\u4E86\u76F8\u5173\u7684\u4EE3\u7801\u793A\u4F8B\u4F9B\u53C2\u8003\u3002"},l=void 0,t={},o=[{value:"\u914D\u7F6E\u6587\u4EF6\uFF08\u63A8\u8350\uFF09",id:"\u914D\u7F6E\u6587\u4EF6\u63A8\u8350",level:2},{value:"\u5355\u5B9E\u4F8B\u914D\u7F6E",id:"\u5355\u5B9E\u4F8B\u914D\u7F6E",level:3},{value:"\u96C6\u7FA4\u5316\u914D\u7F6E",id:"\u96C6\u7FA4\u5316\u914D\u7F6E",level:3},{value:"\u914D\u7F6E\u9879\u8BF4\u660E",id:"\u914D\u7F6E\u9879\u8BF4\u660E",level:3},{value:"\u914D\u7F6E\u65B9\u6CD5\uFF08\u9AD8\u7EA7\uFF09",id:"\u914D\u7F6E\u65B9\u6CD5\u9AD8\u7EA7",level:2}];function h(e){let d={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d.p,{children:[(0,i.jsx)(d.code,{children:"gredis"})," \u7EC4\u4EF6\u652F\u6301\u4E24\u79CD\u65B9\u5F0F\u6765\u7BA1\u7406 ",(0,i.jsx)(d.code,{children:"redis"})," \u914D\u7F6E\u548C\u83B7\u53D6 ",(0,i.jsx)(d.code,{children:"redis"})," \u5BF9\u8C61\uFF0C\u4E00\u79CD\u662F\u901A\u8FC7 ",(0,i.jsx)(d.strong,{children:"\u914D\u7F6E\u7EC4\u4EF6+\u5355\u4F8B\u5BF9\u8C61"})," \u7684\u65B9\u5F0F\uFF1B\u4E00\u79CD\u662F\u6A21\u5757\u5316\u901A\u8FC7 ",(0,i.jsx)(d.strong,{children:"\u914D\u7F6E\u7BA1\u7406\u65B9\u6CD5"})," \u53CA\u5BF9\u8C61\u521B\u5EFA\u65B9\u6CD5\u3002"]}),"\n",(0,i.jsx)(d.h2,{id:"\u914D\u7F6E\u6587\u4EF6\u63A8\u8350",children:"\u914D\u7F6E\u6587\u4EF6\uFF08\u63A8\u8350\uFF09"}),"\n",(0,i.jsxs)(d.p,{children:["\u7EDD\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u63A8\u8350\u4F7F\u7528 ",(0,i.jsx)(d.code,{children:"g.Redis"})," \u5355\u4F8B\u65B9\u5F0F\u6765\u64CD\u4F5C ",(0,i.jsx)(d.code,{children:"redis"}),"\u3002\u56E0\u6B64\u540C\u6837\u63A8\u8350\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\u6765\u7BA1\u7406 ",(0,i.jsx)(d.code,{children:"Redis"})," \u914D\u7F6E\uFF0C\u5728 ",(0,i.jsx)(d.code,{children:"config.yaml"})," \u4E2D\u7684\u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A"]}),"\n",(0,i.jsx)(d.h3,{id:"\u5355\u5B9E\u4F8B\u914D\u7F6E",children:"\u5355\u5B9E\u4F8B\u914D\u7F6E"}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{children:"# Redis \u914D\u7F6E\u793A\u4F8B\nredis:\n  # \u5355\u5B9E\u4F8B\u914D\u7F6E\u793A\u4F8B1\n  default:\n    address: 127.0.0.1:6379\n    db:      1\n\n  # \u5355\u5B9E\u4F8B\u914D\u7F6E\u793A\u4F8B2\n  cache:\n    address:     127.0.0.1:6379\n    db:          1\n    pass:        123456\n    idleTimeout: 600\n"})}),"\n",(0,i.jsxs)(d.p,{children:["\u5176\u4E2D\u7684 ",(0,i.jsx)(d.code,{children:"default"})," \u548C ",(0,i.jsx)(d.code,{children:"cache"})," \u5206\u522B\u8868\u793A\u914D\u7F6E\u5206\u7EC4\u540D\u79F0\uFF0C\u6211\u4EEC\u5728\u7A0B\u5E8F\u4E2D\u53EF\u4EE5\u901A\u8FC7\u8BE5\u540D\u79F0\u83B7\u53D6\u5BF9\u5E94\u914D\u7F6E\u7684 ",(0,i.jsx)(d.code,{children:"redis"})," \u5355\u4F8B\u5BF9\u8C61\u3002\u4E0D\u4F20\u9012\u5206\u7EC4\u540D\u79F0\u65F6\uFF0C\u9ED8\u8BA4\u4F7F\u7528 ",(0,i.jsx)(d.code,{children:"redis.default"})," \u914D\u7F6E\u5206\u7EC4\u9879)\u6765\u83B7\u53D6\u5BF9\u5E94\u914D\u7F6E\u7684 ",(0,i.jsx)(d.code,{children:"redis"})," \u5BA2\u6237\u7AEF\u5355\u4F8B\u5BF9\u8C61\u3002"]}),"\n",(0,i.jsx)(d.h3,{id:"\u96C6\u7FA4\u5316\u914D\u7F6E",children:"\u96C6\u7FA4\u5316\u914D\u7F6E"}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{children:"# Redis \u914D\u7F6E\u793A\u4F8B\nredis:\n   # \u96C6\u7FA4\u6A21\u5F0F\u914D\u7F6E\u65B9\u6CD5\n  default:\n    address: 127.0.0.1:6379,127.0.0.1:6370\n    db:      1\n"})}),"\n",(0,i.jsx)(d.h3,{id:"\u914D\u7F6E\u9879\u8BF4\u660E",children:"\u914D\u7F6E\u9879\u8BF4\u660E"}),"\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"\u914D\u7F6E\u9879\u540D\u79F0"}),(0,i.jsx)(d.th,{children:"\u662F\u5426\u5FC5\u987B"}),(0,i.jsx)(d.th,{children:"\u9ED8\u8BA4\u503C"}),(0,i.jsx)(d.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"address"})}),(0,i.jsx)(d.td,{children:"\u662F"}),(0,i.jsx)(d.td,{children:"-"}),(0,i.jsxs)(d.td,{children:["\u683C\u5F0F\uFF1A ",(0,i.jsx)(d.code,{children:"\u5730\u5740:\u7AEF\u53E3"}),(0,i.jsx)("br",{}),"\u652F\u6301 ",(0,i.jsx)(d.code,{children:"Redis"})," \u5355\u5B9E\u4F8B\u6A21\u5F0F\u548C\u96C6\u7FA4\u6A21\u5F0F\u914D\u7F6E\uFF0C\u4F7F\u7528 ",(0,i.jsx)(d.code,{children:","})," \u5206\u5272\u591A\u4E2A\u5730\u5740\u3002\u4F8B\u5982\uFF1A",(0,i.jsx)("br",{}),(0,i.jsx)(d.code,{children:"192.168.1.1:6379, 192.168.1.2:6379"})]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"db"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"0"})}),(0,i.jsx)(d.td,{children:"\u6570\u636E\u5E93\u7D22\u5F15"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"user"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"-"})}),(0,i.jsx)(d.td,{children:"\u8BBF\u95EE\u6388\u6743\u7528\u6237"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"pass"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"-"})}),(0,i.jsx)(d.td,{children:"\u8BBF\u95EE\u6388\u6743\u5BC6\u7801"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"minIdle"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"0"})}),(0,i.jsx)(d.td,{children:"\u5141\u8BB8\u95F2\u7F6E\u7684\u6700\u5C0F\u8FDE\u63A5\u6570"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"maxIdle"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"10"})}),(0,i.jsxs)(d.td,{children:["\u5141\u8BB8\u95F2\u7F6E\u7684\u6700\u5927\u8FDE\u63A5\u6570( ",(0,i.jsx)(d.code,{children:"0"})," \u8868\u793A\u4E0D\u9650\u5236)"]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"maxActive"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"100"})}),(0,i.jsxs)(d.td,{children:["\u6700\u5927\u8FDE\u63A5\u6570\u91CF\u9650\u5236( ",(0,i.jsx)(d.code,{children:"0"})," \u8868\u793A\u4E0D\u9650\u5236)"]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"idleTimeout"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"10"})}),(0,i.jsxs)(d.td,{children:["\u8FDE\u63A5\u6700\u5927\u7A7A\u95F2\u65F6\u95F4\uFF0C\u4F7F\u7528\u65F6\u95F4\u5B57\u7B26\u4E32\u4F8B\u5982 ",(0,i.jsx)(d.code,{children:"30s/1m/1d"})]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"maxConnLifetime"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"30"})}),(0,i.jsxs)(d.td,{children:["\u8FDE\u63A5\u6700\u957F\u5B58\u6D3B\u65F6\u95F4\uFF0C\u4F7F\u7528\u65F6\u95F4\u5B57\u7B26\u4E32\u4F8B\u5982 ",(0,i.jsx)(d.code,{children:"30s/1m/1d"})]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"waitTimeout"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"0"})}),(0,i.jsxs)(d.td,{children:["\u7B49\u5F85\u8FDE\u63A5\u6C60\u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u4F7F\u7528\u65F6\u95F4\u5B57\u7B26\u4E32\u4F8B\u5982 ",(0,i.jsx)(d.code,{children:"30s/1m/1d"})]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"dialTimeout"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"0"})}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"TCP"})," \u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u4F7F\u7528\u65F6\u95F4\u5B57\u7B26\u4E32\u4F8B\u5982 ",(0,i.jsx)(d.code,{children:"30s/1m/1d"})]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"readTimeout"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"0"})}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"TCP"})," \u7684 ",(0,i.jsx)(d.code,{children:"Read"})," \u64CD\u4F5C\u8D85\u65F6\u65F6\u95F4\uFF0C\u4F7F\u7528\u65F6\u95F4\u5B57\u7B26\u4E32\u4F8B\u5982 ",(0,i.jsx)(d.code,{children:"30s/1m/1d"})]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"writeTimeout"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"0"})}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"TCP"})," \u7684 ",(0,i.jsx)(d.code,{children:"Write"})," \u64CD\u4F5C\u8D85\u65F6\u65F6\u95F4\uFF0C\u4F7F\u7528\u65F6\u95F4\u5B57\u7B26\u4E32\u4F8B\u5982 ",(0,i.jsx)(d.code,{children:"30s/1m/1d"})]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"masterName"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"-"})}),(0,i.jsxs)(d.td,{children:["\u54E8\u5175\u6A21\u5F0F\u4E0B\u4F7F\u7528, \u8BBE\u7F6E ",(0,i.jsx)(d.code,{children:"MasterName"})]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"tls"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"false"})}),(0,i.jsxs)(d.td,{children:["\u662F\u5426\u4F7F\u7528 ",(0,i.jsx)(d.code,{children:"TLS"})," \u8BA4\u8BC1"]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"tlsSkipVerify"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"false"})}),(0,i.jsxs)(d.td,{children:["\u901A\u8FC7 ",(0,i.jsx)(d.code,{children:"TLS"})," \u8FDE\u63A5\u65F6\uFF0C\u662F\u5426\u7981\u7528\u670D\u52A1\u5668\u540D\u79F0\u9A8C\u8BC1"]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"cluster"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"false"})}),(0,i.jsxs)(d.td,{children:["\u662F\u5426\u5F3A\u5236\u8BBE\u7F6E\u4E3A\u96C6\u7FA4\u5DE5\u4F5C\u6A21\u5F0F\u3002\u5F53 ",(0,i.jsx)(d.code,{children:"address"})," \u662F\u5355\u4E2Aendpoint\u7684\u96C6\u7FA4\u65F6\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u5224\u5B9A\u4E3A\u5355\u5B9E\u4F8B\u6A21\u5F0F\uFF0C\u8FD9\u65F6\u9700\u8981\u8BBE\u7F6E\u6B64\u9879\u4E3A ",(0,i.jsx)(d.code,{children:"true"}),"\u3002"]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"protocol"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"3"})}),(0,i.jsxs)(d.td,{children:["\u8BBE\u7F6E\u4E0E ",(0,i.jsx)(d.code,{children:"Redis Server"})," \u901A\u4FE1\u7684 ",(0,i.jsx)(d.code,{children:"RESP"})," \u534F\u8BAE\u7248\u672C\u3002"]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"sentinelUsername"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"Sentinel"})," \u6A21\u5F0F\u4E0B\u7684\u8D26\u53F7"]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"sentinelPassword"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"Sentinel"})," \u6A21\u5F0F\u4E0B\u7684\u5BC6\u7801"]})]})]})]}),"\n",(0,i.jsx)(d.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,i.jsx)(d.p,{children:(0,i.jsx)(d.code,{children:"config.yaml"})}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{children:'# Redis \u914D\u7F6E\u793A\u4F8B\nredis:\n  # \u5355\u5B9E\u4F8B\u914D\u7F6E\u793A\u4F8B1\n  default:\n    address: 127.0.0.1:6379\n    db:      1\n    pass:    "password" # \u5728\u6B64\u914D\u7F6E\u5BC6\u7801, \u6CA1\u6709\u53EF\u53BB\u6389\n'})}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var ctx = gctx.New()\n    _, err := g.Redis().Set(ctx, "key", "value")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    value, err := g.Redis().Get(ctx, "key")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.String())\n}\n'})}),"\n",(0,i.jsx)(d.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-value"})}),"\n",(0,i.jsx)(d.h2,{id:"\u914D\u7F6E\u65B9\u6CD5\u9AD8\u7EA7",children:"\u914D\u7F6E\u65B9\u6CD5\uFF08\u9AD8\u7EA7\uFF09"}),"\n",(0,i.jsxs)(d.p,{children:["\u7531\u4E8E ",(0,i.jsx)(d.code,{children:"GoFrame"})," \u662F\u6A21\u5757\u5316\u7684\u6846\u67B6\uFF0C\u9664\u4E86\u53EF\u4EE5\u901A\u8FC7\u8026\u5408\u4E14\u4FBF\u6377\u7684 ",(0,i.jsx)(d.code,{children:"g"})," \u6A21\u5757\u6765\u81EA\u52A8\u89E3\u6790\u914D\u7F6E\u6587\u4EF6\u5E76\u83B7\u5F97\u5355\u4F8B\u5BF9\u8C61\u4E4B\u5916\uFF0C\u4E5F\u652F\u6301\u6709\u80FD\u529B\u7684\u5F00\u53D1\u8005\u6A21\u5757\u5316\u4F7F\u7528 ",(0,i.jsx)(d.code,{children:"gredis"})," \u5305\u3002"]}),"\n",(0,i.jsxs)(d.p,{children:[(0,i.jsx)(d.code,{children:"gredis"})," \u63D0\u4F9B\u4E86\u5168\u5C40\u7684\u5206\u7EC4\u914D\u7F6E\u529F\u80FD\uFF0C\u76F8\u5173\u914D\u7F6E\u7BA1\u7406\u65B9\u6CD5\u5982\u4E0B\uFF1A"]}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-go",children:"func SetConfig(config Config, name ...string)\nfunc SetConfigByMap(m map[string]interface{}, name ...string) error\nfunc GetConfig(name ...string) (config Config, ok bool)\nfunc RemoveConfig(name ...string)\nfunc ClearConfig()\n"})}),"\n",(0,i.jsx)(d.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/database/gredis"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nvar (\n    config = gredis.Config{\n        Address: "127.0.0.1:6379",\n        Db:      1,\n        Pass:    "password",\n    }\n    group = "cache"\n    ctx   = gctx.New()\n)\n\nfunc main() {\n    gredis.SetConfig(&config, group)\n\n    _, err := g.Redis(group).Set(ctx, "key", "value")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    value, err := g.Redis(group).Get(ctx, "key")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.String())\n}\n'})})]})}function x(e={}){let{wrapper:d}={...(0,r.a)(),...e.components};return d?(0,i.jsx)(d,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,d,n){n.d(d,{Z:function(){return l},a:function(){return c}});var s=n(667294);let i={},r=s.createContext(i);function c(e){let d=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(d):{...d,...e}},[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:d},e.children)}}}]);
"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["7639"],{950764:function(e,n,d){d.r(n),d.d(n,{metadata:()=>c,contentTitle:()=>t,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>r});var c=JSON.parse('{"id":"docs/\u6846\u67B6\u8BBE\u8BA1/\u5DE5\u7A0B\u5F00\u53D1\u8BBE\u8BA1/DAO\u5C01\u88C5\u8BBE\u8BA1/DAO-\u7EC4\u4EF6\u75DB\u70B9\u53CA\u6539\u8FDB","title":"DAO-\u7EC4\u4EF6\u75DB\u70B9\u53CA\u6539\u8FDB","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528DAO\u8BBE\u8BA1\u7684\u4F18\u70B9\uFF0C\u4EE5\u53CA\u73B0\u6709ORM\u7EC4\u4EF6\u4F7F\u7528\u4E2D\u7684\u75DB\u70B9\u548C\u89E3\u51B3\u65B9\u6848\u3002\u901A\u8FC7DAO\u8BBE\u8BA1\uFF0C\u6781\u5927\u5730\u63D0\u9AD8\u4E86\u5F00\u53D1\u548C\u7EF4\u62A4\u6548\u7387\uFF0C\u964D\u4F4E\u4E86\u4EE3\u7801\u7684\u8026\u5408\u5EA6\uFF0C\u8FD8\u589E\u52A0\u4E86\u53EF\u89C2\u6D4B\u6027\u652F\u6301\u3002\u6587\u7AE0\u8BE6\u7EC6\u63CF\u8FF0\u4E86\u5982\u4F55\u514B\u670D\u4F7F\u7528ORM\u65F6\u7684\u5E38\u89C1\u95EE\u9898\uFF0C\u5982\u5B57\u6BB5\u6620\u5C04\u3001\u786C\u7F16\u7801\u548C\u6570\u636E\u7ED3\u6784\u4E0D\u4E00\u81F4\u7B49\u3002\u6B64\u5916\uFF0C\u6539\u8FDB\u65B9\u6848\u8BBE\u8BA1\u8FD8\u5305\u62EC\u5BF9DAO\u5BF9\u8C61\u7684\u5C01\u88C5\u548CSQL\u65E5\u5FD7\u529F\u80FD\u7684\u652F\u6301\u3002","source":"@site/docs/docs/\u6846\u67B6\u8BBE\u8BA1/\u5DE5\u7A0B\u5F00\u53D1\u8BBE\u8BA1/DAO\u5C01\u88C5\u8BBE\u8BA1/DAO-\u7EC4\u4EF6\u75DB\u70B9\u53CA\u6539\u8FDB.md","sourceDirName":"docs/\u6846\u67B6\u8BBE\u8BA1/\u5DE5\u7A0B\u5F00\u53D1\u8BBE\u8BA1/DAO\u5C01\u88C5\u8BBE\u8BA1","slug":"/docs/design/project-dao-pain","permalink":"/docs/design/project-dao-pain","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6846\u67B6\u8BBE\u8BA1/\u5DE5\u7A0B\u5F00\u53D1\u8BBE\u8BA1/DAO\u5C01\u88C5\u8BBE\u8BA1/DAO-\u7EC4\u4EF6\u75DB\u70B9\u53CA\u6539\u8FDB.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1733708461000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/design/project-dao-pain","title":"DAO-\u7EC4\u4EF6\u75DB\u70B9\u53CA\u6539\u8FDB","sidebar_position":0,"hide_title":true,"keywords":["DAO","GoFrame","\u6570\u636E\u8BBF\u95EE\u5BF9\u8C61","ORM","GRPC","\u6570\u636E\u5E93\u4F18\u5316","\u4EE3\u7801\u5C01\u88C5","\u81EA\u52A8\u6620\u5C04","SQL\u65E5\u5FD7","\u4EE3\u7801\u751F\u6210"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528DAO\u8BBE\u8BA1\u7684\u4F18\u70B9\uFF0C\u4EE5\u53CA\u73B0\u6709ORM\u7EC4\u4EF6\u4F7F\u7528\u4E2D\u7684\u75DB\u70B9\u548C\u89E3\u51B3\u65B9\u6848\u3002\u901A\u8FC7DAO\u8BBE\u8BA1\uFF0C\u6781\u5927\u5730\u63D0\u9AD8\u4E86\u5F00\u53D1\u548C\u7EF4\u62A4\u6548\u7387\uFF0C\u964D\u4F4E\u4E86\u4EE3\u7801\u7684\u8026\u5408\u5EA6\uFF0C\u8FD8\u589E\u52A0\u4E86\u53EF\u89C2\u6D4B\u6027\u652F\u6301\u3002\u6587\u7AE0\u8BE6\u7EC6\u63CF\u8FF0\u4E86\u5982\u4F55\u514B\u670D\u4F7F\u7528ORM\u65F6\u7684\u5E38\u89C1\u95EE\u9898\uFF0C\u5982\u5B57\u6BB5\u6620\u5C04\u3001\u786C\u7F16\u7801\u548C\u6570\u636E\u7ED3\u6784\u4E0D\u4E00\u81F4\u7B49\u3002\u6B64\u5916\uFF0C\u6539\u8FDB\u65B9\u6848\u8BBE\u8BA1\u8FD8\u5305\u62EC\u5BF9DAO\u5BF9\u8C61\u7684\u5C01\u88C5\u548CSQL\u65E5\u5FD7\u529F\u80FD\u7684\u652F\u6301\u3002"},"sidebar":"mainSidebar","previous":{"title":"DAO\u5C01\u88C5\u8BBE\u8BA1","permalink":"/docs/design/project-dao"},"next":{"title":"DAO-\u5DE5\u7A0B\u75DB\u70B9\u53CA\u6539\u8FDB","permalink":"/docs/design/project-dao-improvement"}}'),i=d("785893"),s=d("250065");let r={slug:"/docs/design/project-dao-pain",title:"DAO-\u7EC4\u4EF6\u75DB\u70B9\u53CA\u6539\u8FDB",sidebar_position:0,hide_title:!0,keywords:["DAO","GoFrame","\u6570\u636E\u8BBF\u95EE\u5BF9\u8C61","ORM","GRPC","\u6570\u636E\u5E93\u4F18\u5316","\u4EE3\u7801\u5C01\u88C5","\u81EA\u52A8\u6620\u5C04","SQL\u65E5\u5FD7","\u4EE3\u7801\u751F\u6210"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528DAO\u8BBE\u8BA1\u7684\u4F18\u70B9\uFF0C\u4EE5\u53CA\u73B0\u6709ORM\u7EC4\u4EF6\u4F7F\u7528\u4E2D\u7684\u75DB\u70B9\u548C\u89E3\u51B3\u65B9\u6848\u3002\u901A\u8FC7DAO\u8BBE\u8BA1\uFF0C\u6781\u5927\u5730\u63D0\u9AD8\u4E86\u5F00\u53D1\u548C\u7EF4\u62A4\u6548\u7387\uFF0C\u964D\u4F4E\u4E86\u4EE3\u7801\u7684\u8026\u5408\u5EA6\uFF0C\u8FD8\u589E\u52A0\u4E86\u53EF\u89C2\u6D4B\u6027\u652F\u6301\u3002\u6587\u7AE0\u8BE6\u7EC6\u63CF\u8FF0\u4E86\u5982\u4F55\u514B\u670D\u4F7F\u7528ORM\u65F6\u7684\u5E38\u89C1\u95EE\u9898\uFF0C\u5982\u5B57\u6BB5\u6620\u5C04\u3001\u786C\u7F16\u7801\u548C\u6570\u636E\u7ED3\u6784\u4E0D\u4E00\u81F4\u7B49\u3002\u6B64\u5916\uFF0C\u6539\u8FDB\u65B9\u6848\u8BBE\u8BA1\u8FD8\u5305\u62EC\u5BF9DAO\u5BF9\u8C61\u7684\u5C01\u88C5\u548CSQL\u65E5\u5FD7\u529F\u80FD\u7684\u652F\u6301\u3002"},t=void 0,l={},o=[{value:"\u4E00\u3001\u73B0\u6709 <code>ORM</code> \u4F7F\u7528\u793A\u4F8B",id:"\u4E00\u73B0\u6709-orm-\u4F7F\u7528\u793A\u4F8B",level:2},{value:"1\u3001\u9700\u8981\u5B9A\u4E49\u6A21\u578B",id:"1\u9700\u8981\u5B9A\u4E49\u6A21\u578B",level:3},{value:"2\u3001 <code>GRPC</code> \u63A5\u53E3\u5B9E\u73B0\u793A\u4F8B",id:"2-grpc-\u63A5\u53E3\u5B9E\u73B0\u793A\u4F8B",level:3},{value:"\u4E8C\u3001\u73B0\u6709\u75DB\u70B9\u63CF\u8FF0",id:"\u4E8C\u73B0\u6709\u75DB\u70B9\u63CF\u8FF0",level:2},{value:"1\u3001\u5FC5\u987B\u8981\u5B9A\u4E49 <code>tag</code> \u5173\u8054\u8868\u7ED3\u6784\u4E0E <code>struct</code> \u5C5E\u6027\uFF0C\u65E0\u6CD5\u505A\u5230\u81EA\u52A8\u6620\u5C04",id:"1\u5FC5\u987B\u8981\u5B9A\u4E49-tag-\u5173\u8054\u8868\u7ED3\u6784\u4E0E-struct-\u5C5E\u6027\u65E0\u6CD5\u505A\u5230\u81EA\u52A8\u6620\u5C04",level:3},{value:"2\u3001\u4E0D\u652F\u6301\u901A\u8FC7\u8FD4\u56DE\u5BF9\u8C61\u6307\u5B9A\u9700\u8981\u67E5\u8BE2\u7684\u5B57\u6BB5",id:"2\u4E0D\u652F\u6301\u901A\u8FC7\u8FD4\u56DE\u5BF9\u8C61\u6307\u5B9A\u9700\u8981\u67E5\u8BE2\u7684\u5B57\u6BB5",level:3},{value:"3\u3001\u65E0\u6CD5\u5BF9\u8F93\u5165\u5BF9\u8C61\u5C5E\u6027\u540D\u79F0\u8FDB\u884C\u81EA\u52A8\u5B57\u6BB5\u8FC7\u6EE4",id:"3\u65E0\u6CD5\u5BF9\u8F93\u5165\u5BF9\u8C61\u5C5E\u6027\u540D\u79F0\u8FDB\u884C\u81EA\u52A8\u5B57\u6BB5\u8FC7\u6EE4",level:3},{value:"4\u3001\u9700\u8981\u521B\u5EFA\u4E2D\u95F4\u67E5\u8BE2\u7ED3\u679C\u5BF9\u8C61\u6267\u884C\u8D4B\u503C\u8F6C\u6362",id:"4\u9700\u8981\u521B\u5EFA\u4E2D\u95F4\u67E5\u8BE2\u7ED3\u679C\u5BF9\u8C61\u6267\u884C\u8D4B\u503C\u8F6C\u6362",level:3},{value:"5\u3001\u9700\u8981\u63D0\u524D\u521D\u59CB\u5316\u8FD4\u56DE\u5BF9\u8C61\uFF0C\u4E0D\u7BA1\u6709\u65E0\u67E5\u8BE2\u5230\u6570\u636E",id:"5\u9700\u8981\u63D0\u524D\u521D\u59CB\u5316\u8FD4\u56DE\u5BF9\u8C61\u4E0D\u7BA1\u6709\u65E0\u67E5\u8BE2\u5230\u6570\u636E",level:3},{value:"6\u3001\u9879\u76EE\u901A\u7BC7\u4F7F\u7528\u5E95\u5C42\u88F8 <code>DB</code> \u5BF9\u8C61\u64CD\u4F5C\uFF0C\u6CA1\u6709\u5BF9\u8C61\u5C01\u88C5\u64CD\u4F5C",id:"6\u9879\u76EE\u901A\u7BC7\u4F7F\u7528\u5E95\u5C42\u88F8-db-\u5BF9\u8C61\u64CD\u4F5C\u6CA1\u6709\u5BF9\u8C61\u5C01\u88C5\u64CD\u4F5C",level:3},{value:"7\u3001\u968F\u5904\u53EF\u89C1\u7684\u5B57\u7B26\u4E32\u786C\u7F16\u7801\uFF0C\u5982\u8868\u540D\u548C\u5B57\u6BB5\u7684\u786C\u7F16\u7801",id:"7\u968F\u5904\u53EF\u89C1\u7684\u5B57\u7B26\u4E32\u786C\u7F16\u7801\u5982\u8868\u540D\u548C\u5B57\u6BB5\u7684\u786C\u7F16\u7801",level:3},{value:"8\u3001\u5E95\u5C42ORM\u5F15\u8D77\u592A\u591A\u7684\u6307\u9488\u5C5E\u6027\u5B9A\u4E49",id:"8\u5E95\u5C42orm\u5F15\u8D77\u592A\u591A\u7684\u6307\u9488\u5C5E\u6027\u5B9A\u4E49",level:3},{value:"9\u3001\u53EF\u89C2\u6D4B\u6027\u7684\u652F\u6301\uFF1ATracing\u3001Metrics\u3001Logging",id:"9\u53EF\u89C2\u6D4B\u6027\u7684\u652F\u6301tracingmetricslogging",level:3},{value:"10\u3001\u6570\u636E\u96C6\u5408\u4E0E\u4EE3\u7801\u6570\u636E\u5B9E\u4F53\u7ED3\u6784\u4E0D\u4E00\u81F4",id:"10\u6570\u636E\u96C6\u5408\u4E0E\u4EE3\u7801\u6570\u636E\u5B9E\u4F53\u7ED3\u6784\u4E0D\u4E00\u81F4",level:3},{value:"\u4E09\u3001\u6539\u8FDB\u65B9\u6848\u8BBE\u8BA1",id:"\u4E09\u6539\u8FDB\u65B9\u6848\u8BBE\u8BA1",level:2}];function a(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u5173\u4E8E ",(0,i.jsx)(n.code,{children:"DAO"})," \u6570\u636E\u8BBF\u95EE\u5BF9\u8C61\u8BBE\u8BA1\u5176\u5B9E\u662F\u5173\u4E8E ",(0,i.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u5DE5\u7A0B\u5316\u5B9E\u8DF5\u4E2D\u6BD4\u8F83\u91CD\u8981\u4E00\u5757\u8BBE\u8BA1\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"DAO"})," \u8BBE\u8BA1\u7ED3\u5408 ",(0,i.jsx)(n.code,{children:"GoFrame"})," \u7684 ",(0,i.jsx)(n.code,{children:"ORM"})," \u7EC4\u4EF6\u6027\u80FD\u548C\u6613\u7528\u6027\u90FD\u5F88\u5F3A\uFF0C\u53EF\u4EE5\u6781\u5927\u63D0\u9AD8\u5F00\u53D1\u548C\u7EF4\u62A4\u6548\u7387\u3002\u770B\u5B8C\u672C\u7AE0\u8282\u5185\u5BB9\u4E4B\u540E\uFF0C\u5C0F\u4F19\u4F34\u4EEC\u5E94\u8BE5\u80FD\u591F\u7406\u89E3\u5E76\u4F53\u4F1A\u5230\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"DAO"})," \u6570\u636E\u5E93\u8BBF\u95EE\u5BF9\u8C61\u8BBE\u8BA1\u7684\u4F18\u70B9\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"\u6211\u6BCF\u5E74\u90FD\u4F1A\u6765\u56DE\u91CD\u65B0\u5BA1\u89C6\u8FD9\u7BC7\u6587\u7AE0\uFF0C\u770B\u770B\u662F\u5426\u53EF\u4EE5\u5220\u9664\u4E00\u4E9B\u5730\u65B9\u3002\u53EF\u662F\u6BCF\u6B21\u90FD\u500D\u611F\u5931\u671B\uFF0C\u56E0\u4E3A\u8FD9\u7BC7\u6587\u7AE0\u5BF9\u5F53\u4ECA\u73B0\u72B6\u4ECD\u65E7\u9002\u7528\u3002\u5E76\u4E14\u4ECA\u5E74\uFF0C\u6211\u8FD8\u65B0\u589E\u4E86\u5185\u5BB9\u3002"})}),"\n",(0,i.jsxs)(n.h2,{id:"\u4E00\u73B0\u6709-orm-\u4F7F\u7528\u793A\u4F8B",children:["\u4E00\u3001\u73B0\u6709 ",(0,i.jsx)(n.code,{children:"ORM"})," \u4F7F\u7528\u793A\u4F8B"]}),"\n",(0,i.jsx)(n.h3,{id:"1\u9700\u8981\u5B9A\u4E49\u6A21\u578B",children:"1\u3001\u9700\u8981\u5B9A\u4E49\u6A21\u578B"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:d(351892).Z+"",width:"1065",height:"432"}),"\u7528\u6237\u57FA\u7840\u8868\uFF08\u4EC5\u4F5C\u6F14\u793A\uFF0C\u771F\u5B9E\u7684\u8868\u6709\u6570\u5341\u4E2A\u5B57\u6BB5\uFF09"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:d(508799).Z+"",width:"1160",height:"646"}),"\u533B\u751F\u4FE1\u606F\u8868\uFF08\u4EC5\u4F5C\u6F14\u793A\uFF0C\u771F\u5B9E\u7684\u8868\u6709\u4E0A\u767E\u4E2A\u5B57\u6BB5\uFF09"]}),"\n",(0,i.jsxs)(n.h3,{id:"2-grpc-\u63A5\u53E3\u5B9E\u73B0\u793A\u4F8B",children:["2\u3001 ",(0,i.jsx)(n.code,{children:"GRPC"})," \u63A5\u53E3\u5B9E\u73B0\u793A\u4F8B"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4E00\u4E2A\u7B80\u5355\u7684 ",(0,i.jsx)(n.code,{children:"GRPC"})," \u67E5\u8BE2\u4FE1\u606F\u63A5\u53E3\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:d(718841).Z+"",width:"1154",height:"894"}),"\u4E00\u4E2A\u7B80\u5355\u7684 ",(0,i.jsx)(n.code,{children:"GRPC"})," \u6570\u636E\u67E5\u8BE2\u63A5\u53E3"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4E8C\u73B0\u6709\u75DB\u70B9\u63CF\u8FF0",children:"\u4E8C\u3001\u73B0\u6709\u75DB\u70B9\u63CF\u8FF0"}),"\n",(0,i.jsxs)(n.h3,{id:"1\u5FC5\u987B\u8981\u5B9A\u4E49-tag-\u5173\u8054\u8868\u7ED3\u6784\u4E0E-struct-\u5C5E\u6027\u65E0\u6CD5\u505A\u5230\u81EA\u52A8\u6620\u5C04",children:["1\u3001\u5FC5\u987B\u8981\u5B9A\u4E49 ",(0,i.jsx)(n.code,{children:"tag"})," \u5173\u8054\u8868\u7ED3\u6784\u4E0E ",(0,i.jsx)(n.code,{children:"struct"})," \u5C5E\u6027\uFF0C\u65E0\u6CD5\u505A\u5230\u81EA\u52A8\u6620\u5C04"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8868\u5B57\u6BB5\u4E0E\u5B9E\u4F53\u5BF9\u8C61\u5C5E\u6027\u540D\u79F0\u4E4B\u95F4\u539F\u672C\u5C31\u6709\u4E00\u5B9A\u7684\u5173\u8054\u89C4\u5219\uFF0C\u6CA1\u6709\u5FC5\u8981\u5B9A\u4E49\u548C\u7EF4\u62A4\u5927\u91CF\u7684 ",(0,i.jsx)(n.code,{children:"tag"})," \u5B9A\u4E49\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:d(994130).Z+"",width:"769",height:"644"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5927\u91CF\u975E\u5FC5\u8981\u7684 ",(0,i.jsx)(n.code,{children:"tag"})," \u5B9A\u4E49\uFF0C\u7528\u4E8E\u6307\u5B9A\u6570\u636E\u8868\u5B57\u6BB5\u5230\u5B9E\u4F53\u5BF9\u8C61\u5C5E\u6027\u6620\u5C04"]}),"\n",(0,i.jsx)(n.h3,{id:"2\u4E0D\u652F\u6301\u901A\u8FC7\u8FD4\u56DE\u5BF9\u8C61\u6307\u5B9A\u9700\u8981\u67E5\u8BE2\u7684\u5B57\u6BB5",children:"2\u3001\u4E0D\u652F\u6301\u901A\u8FC7\u8FD4\u56DE\u5BF9\u8C61\u6307\u5B9A\u9700\u8981\u67E5\u8BE2\u7684\u5B57\u6BB5"}),"\n",(0,i.jsxs)(n.p,{children:["\u65E0\u6CD5\u901A\u8FC7\u8FD4\u56DE\u7684\u5BF9\u8C61\u6570\u636E\u7ED3\u6784\u6307\u5B9A\u67E5\u8BE2\u5B57\u6BB5\uFF0C\u8981\u4E48\u53EA\u80FD ",(0,i.jsx)(n.code,{children:"SELECT *"})," \uFF0C\u8981\u4E48\u53EA\u80FD\u901A\u8FC7\u989D\u5916\u7684\u65B9\u6CD5\u624B\u52A8\u5F55\u5165\u67E5\u8BE2\u5B57\u6BB5\uFF0C\u6548\u7387\u5F88\u4F4E\u4E0B\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:d(825597).Z+"",width:"912",height:"657"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5E38\u89C1\u7684 ",(0,i.jsx)(n.code,{children:"SELECT *"})," \u64CD\u4F5C\uFF0C\u65E0\u6CD5\u6839\u636E\u63A5\u53E3\u5BF9\u8C61\u6307\u5B9A\u67E5\u8BE2\u5B57\u6BB5"]}),"\n",(0,i.jsx)(n.h3,{id:"3\u65E0\u6CD5\u5BF9\u8F93\u5165\u5BF9\u8C61\u5C5E\u6027\u540D\u79F0\u8FDB\u884C\u81EA\u52A8\u5B57\u6BB5\u8FC7\u6EE4",children:"3\u3001\u65E0\u6CD5\u5BF9\u8F93\u5165\u5BF9\u8C61\u5C5E\u6027\u540D\u79F0\u8FDB\u884C\u81EA\u52A8\u5B57\u6BB5\u8FC7\u6EE4"}),"\n",(0,i.jsx)(n.p,{children:"\u5B9A\u4E49\u4E86\u8F93\u5165\u4E0E\u8F93\u51FA\u6570\u636E\u7ED3\u6784\uFF0C\u8F93\u51FA\u7684\u6570\u636E\u7ED3\u6784\u5DF2\u7ECF\u5305\u542B\u6211\u4EEC\u9700\u8981\u67E5\u8BE2\u7684\u5B57\u6BB5\u540D\u79F0\u3002\u5F00\u53D1\u8005\u8F93\u5165\u5B9A\u4E49\u7684\u8FD4\u56DE\u5BF9\u8C61\uFF0C\u671F\u671B\u5728\u67E5\u8BE2\u7684\u65F6\u5019\u4EC5\u67E5\u8BE2\u6211\u9700\u8981\u7684\u5B57\u6BB5\u540D\u79F0\uFF0C\u591A\u4F59\u7684\u5C5E\u6027\u5219\u4E0D\u4F1A\u6267\u884C\u67E5\u8BE2\uFF0C\u81EA\u52A8\u8FC7\u6EE4\u6389\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"4\u9700\u8981\u521B\u5EFA\u4E2D\u95F4\u67E5\u8BE2\u7ED3\u679C\u5BF9\u8C61\u6267\u884C\u8D4B\u503C\u8F6C\u6362",children:"4\u3001\u9700\u8981\u521B\u5EFA\u4E2D\u95F4\u67E5\u8BE2\u7ED3\u679C\u5BF9\u8C61\u6267\u884C\u8D4B\u503C\u8F6C\u6362"}),"\n",(0,i.jsxs)(n.p,{children:["\u67E5\u8BE2\u7ED3\u679C\u4E0D\u652F\u6301 ",(0,i.jsx)(n.code,{children:"struct"})," \u667A\u80FD\u8F6C\u6362\uFF0C\u9700\u8981\u989D\u5916\u5B9A\u4E49\u4E00\u4E2A\u4E2D\u95F4 ",(0,i.jsx)(n.code,{children:"model"})," \u6A21\u578B\uFF0C\u518D\u901A\u8FC7\u5176\u4ED6\u5DE5\u5177\u8FDB\u884C\u590D\u5236\uFF0C\u6548\u7387\u4F4E\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:d(796355).Z+"",width:"2252",height:"1294"})}),"\n",(0,i.jsx)(n.p,{children:"\u5B58\u5728\u4E2D\u95F4\u4E34\u65F6\u7684\u6A21\u578B\u5BF9\u8C61\uFF0C\u7528\u4E8E\u627F\u63A5\u67E5\u8BE2\u7ED3\u679C\u53CA\u8FD4\u56DE\u7ED3\u6784\u5BF9\u8C61\u8D4B\u503C\u8F6C\u6362"}),"\n",(0,i.jsx)(n.h3,{id:"5\u9700\u8981\u63D0\u524D\u521D\u59CB\u5316\u8FD4\u56DE\u5BF9\u8C61\u4E0D\u7BA1\u6709\u65E0\u67E5\u8BE2\u5230\u6570\u636E",children:"5\u3001\u9700\u8981\u63D0\u524D\u521D\u59CB\u5316\u8FD4\u56DE\u5BF9\u8C61\uFF0C\u4E0D\u7BA1\u6709\u65E0\u67E5\u8BE2\u5230\u6570\u636E"}),"\n",(0,i.jsxs)(n.p,{children:["\u8FD9\u79CD\u65B9\u5F0F\u4E0D\u4EC5\u4E0D\u4F18\u96C5\uFF0C\u5BF9\u6027\u80FD\u4E5F\u6709\u5F71\u54CD\uFF0C\u8FD8\u5BF9 ",(0,i.jsx)(n.code,{children:"GC"})," \u4E0D\u592A\u53CB\u597D\u3002\u671F\u671B\u67E5\u8BE2\u5230\u6570\u636E\u65F6\u518D\u81EA\u52A8\u521B\u5EFA\u8FD4\u56DE\u5BF9\u8C61\uFF0C\u6CA1\u6709\u67E5\u8BE2\u5230\u6570\u636E\u65F6\u4EC0\u4E48\u90FD\u4E0D\u8981\u505A\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:d(470692).Z+"",width:"935",height:"640"})}),"\n",(0,i.jsx)(n.p,{children:"\u9700\u8981\u9884\u5148\u521D\u59CB\u5316\u8FD4\u56DE\u5BF9\u8C61\uFF0C\u4E0D\u7BA1\u6709\u65E0\u67E5\u8BE2\u5230\u6570\u636E"}),"\n",(0,i.jsxs)(n.h3,{id:"6\u9879\u76EE\u901A\u7BC7\u4F7F\u7528\u5E95\u5C42\u88F8-db-\u5BF9\u8C61\u64CD\u4F5C\u6CA1\u6709\u5BF9\u8C61\u5C01\u88C5\u64CD\u4F5C",children:["6\u3001\u9879\u76EE\u901A\u7BC7\u4F7F\u7528\u5E95\u5C42\u88F8 ",(0,i.jsx)(n.code,{children:"DB"})," \u5BF9\u8C61\u64CD\u4F5C\uFF0C\u6CA1\u6709\u5BF9\u8C61\u5C01\u88C5\u64CD\u4F5C"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5927\u90E8\u5206\u7684 ",(0,i.jsx)(n.code,{children:"Golang"})," \u521D\u5B66\u8005\u4F3C\u4E4E\u90FD\u503E\u5411\u4E8E\u4F7F\u7528\u4E00\u4E2A\u5168\u5C40\u7684 ",(0,i.jsx)(n.code,{children:"DB"})," \u5BF9\u8C61\uFF0C\u5728\u67E5\u8BE2\u7684\u65F6\u5019\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"DB"})," \u5BF9\u8C61\u751F\u6210\u7279\u5B9A\u8868\u7684 ",(0,i.jsx)(n.code,{children:"Model"})," \u5BF9\u8C61\u518D\u6267\u884C ",(0,i.jsx)(n.code,{children:"CRUD"})," \u64CD\u4F5C\uFF0C\u8FD9\u662F\u4E00\u79CD\u9762\u5411\u8FC7\u7A0B\u7684\u4F7F\u7528\u65B9\u5F0F\u3002\u8FD9\u79CD\u65B9\u5F0F\u5E76\u6CA1\u6709\u4EE3\u7801\u5206\u5C42\u7684\u8BBE\u8BA1\u53EF\u8A00\uFF0C ",(0,i.jsx)(n.strong,{children:"\u4F7F\u5F97\u6570\u636E\u64CD\u4F5C\u548C\u4E1A\u52A1\u903B\u8F91\u9AD8\u5EA6\u8026\u5408"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:d(658702).Z+"",width:"1133",height:"668"})}),"\n",(0,i.jsxs)(n.p,{children:["\u539F\u59CB\u6570\u636E\u5E93\u5BF9\u8C61\u64CD\u4F5C\u65B9\u5F0F\uFF0C\u6CA1\u6709 ",(0,i.jsx)(n.code,{children:"DAO"})," \u5C01\u88C5"]}),"\n",(0,i.jsx)(n.h3,{id:"7\u968F\u5904\u53EF\u89C1\u7684\u5B57\u7B26\u4E32\u786C\u7F16\u7801\u5982\u8868\u540D\u548C\u5B57\u6BB5\u7684\u786C\u7F16\u7801",children:"7\u3001\u968F\u5904\u53EF\u89C1\u7684\u5B57\u7B26\u4E32\u786C\u7F16\u7801\uFF0C\u5982\u8868\u540D\u548C\u5B57\u6BB5\u7684\u786C\u7F16\u7801"}),"\n",(0,i.jsxs)(n.p,{children:["\u4E3E\u4E2A\u4F8B\u5B50\uFF0C ",(0,i.jsx)(n.code,{children:"userId"})," \u8FD9\u4E2A\u5B57\u6BB5\u5047\u5982\u4E00\u4E0D\u5C0F\u5FC3\u5199\u6210\u4E86 ",(0,i.jsx)(n.code,{children:"UserId"})," \u6216\u8005 ",(0,i.jsx)(n.code,{children:"userid"}),"\uFF0C\u6D4B\u8BD5\u7684\u65F6\u5019\u5982\u679C\u6CA1\u6709\u5B8C\u5168\u8986\u76D6\u5230\uFF0C\u5728\u4E00\u5B9A\u7684\u6761\u4EF6\u4E0B\u624D\u89E6\u53D1\u67E5\u8BE2\u64CD\u4F5C\uFF0C\u662F\u4E0D\u662F\u4F1A\u9020\u6210\u65B0\u7684\u4E00\u573A\u4E8B\u6545\u5462\uFF1F"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:d(416653).Z+"",width:"2402",height:"1304"})}),"\n",(0,i.jsx)(n.p,{children:"\u5927\u91CF\u7684\u5B57\u7B26\u4E32\u786C\u7F16\u7801"}),"\n",(0,i.jsx)(n.h3,{id:"8\u5E95\u5C42orm\u5F15\u8D77\u592A\u591A\u7684\u6307\u9488\u5C5E\u6027\u5B9A\u4E49",children:"8\u3001\u5E95\u5C42ORM\u5F15\u8D77\u592A\u591A\u7684\u6307\u9488\u5C5E\u6027\u5B9A\u4E49"}),"\n",(0,i.jsxs)(n.p,{children:["\u6307\u9488\u5C5E\u6027\u5BF9\u8C61\u4E3A\u4E1A\u52A1\u903B\u8F91\u5904\u7406\u57CB\u4E0B\u9690\u60A3\uFF0C\u5F00\u53D1\u8005\u5728\u4EE3\u7801\u903B\u8F91\u4E2D\u9700\u8981\u5728\u6307\u9488\u4E0E\u5C5E\u6027\u4E4B\u95F4\u6765\u56DE\u5207\u6362\uFF0C\u7279\u522B\u662F\u4E00\u4E9B\u57FA\u7840\u7C7B\u578B\u5F80\u5F80\u9700\u8981\u901A\u8FC7\u91CD\u65B0\u53D6\u503C\u7684\u65B9\u5F0F\u4F20\u9012\u53C2\u6570\u3002\u5982\u679C\u8F93\u5165\u53C2\u6570\u662F ",(0,i.jsx)(n.code,{children:"interface{}"})," \u7C7B\u578B\uFF0C\u90A3\u4E48\u66F4\u5BB9\u6613\u5F15\u8D77 ",(0,i.jsx)(n.code,{children:"BUG"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:d(336465).Z+"",width:"2464",height:"1730"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"BUG"})," \u793A\u4F8B\uFF0C\u6307\u9488\u5C5E\u6027\u4F7F\u7528\u4E0D\u5F53\uFF0C\u5F15\u8D77\u5730\u5740\u6BD4\u8F83\u903B\u8F91\u9519\u8BEF\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:d(650138).Z+"",width:"2264",height:"1716"})}),"\n",(0,i.jsx)(n.p,{children:"\u540C\u65F6\u4E5F\u5F71\u54CD\u4E86\u4E1A\u52A1\u6A21\u578B\u7ED3\u6784\u4F53\u5B9A\u4E49\u8BBE\u8BA1\uFF0C\u5BF9\u5F00\u53D1\u8005\u9020\u6210\u4E86\u9519\u8BEF\u4E60\u60EF\u5F15\u5BFC\uFF08\u4E0A\u5C42\u4E1A\u52A1\u6A21\u578B\u7684\u6307\u9488\u5C5E\u6027\u5F80\u5F80\u662F\u4E3A\u4E86\u8FCE\u5408\u5E95\u5C42\u6570\u636E\u8868\u5B9E\u4F53\u5BF9\u8C61\uFF0C\u65B9\u4FBF\u6570\u636E\u4F20\u9012\uFF09\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:d(599349).Z+"",width:"2432",height:"1730"})}),"\n",(0,i.jsx)(n.p,{children:"\u503C\u5F97\u6CE8\u610F\u4E00\u4E2A\u5E38\u89C1\u9519\u8BEF\uFF0C\u5C31\u662F\u5C06\u5E95\u5C42\u6570\u636E\u5B9E\u4F53\u6A21\u578B\u5F53\u505A\u9876\u5C42\u4E1A\u52A1\u6A21\u578B\u4F7F\u7528\u3002\u7279\u522B\u662F\u5728\u5E95\u5C42\u6570\u636E\u5B9E\u4F53\u5BF9\u8C61\u4F7F\u7528\u6307\u9488\u5C5E\u6027\u7684\u573A\u666F\u4E0B\uFF0C\u8BE5\u95EE\u9898\u5341\u5206\u660E\u663E\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"9\u53EF\u89C2\u6D4B\u6027\u7684\u652F\u6301tracingmetricslogging",children:"9\u3001\u53EF\u89C2\u6D4B\u6027\u7684\u652F\u6301\uFF1ATracing\u3001Metrics\u3001Logging"}),"\n",(0,i.jsx)(n.p,{children:"\u6570\u636E\u5E93ORM\u4F5C\u4E3A\u4E1A\u52A1\u9879\u76EE\u6700\u5173\u952E\u6838\u5FC3\u7684\u7EC4\u4EF6\uFF0C\u53EF\u89C2\u6D4B\u6027\u7684\u652F\u6301\u81F3\u5173\u91CD\u8981\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"10\u6570\u636E\u96C6\u5408\u4E0E\u4EE3\u7801\u6570\u636E\u5B9E\u4F53\u7ED3\u6784\u4E0D\u4E00\u81F4",children:"10\u3001\u6570\u636E\u96C6\u5408\u4E0E\u4EE3\u7801\u6570\u636E\u5B9E\u4F53\u7ED3\u6784\u4E0D\u4E00\u81F4"}),"\n",(0,i.jsx)(n.p,{children:"\u5F53\u901A\u8FC7\u4EBA\u5DE5\u7EF4\u62A4\u6570\u636E\u5B9E\u4F53\u7ED3\u6784\u65F6\uFF0C\u6570\u636E\u96C6\u5408\u4E0E\u4EE3\u7801\u6570\u636E\u5B9E\u4F53\u7ED3\u6784\u5F80\u5F80\u4F1A\u51FA\u73B0\u4E0D\u4E00\u81F4\u7684\u98CE\u9669\uFF0C\u5F00\u53D1\u548C\u7EF4\u62A4\u6210\u672C\u9AD8\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4E09\u6539\u8FDB\u65B9\u6848\u8BBE\u8BA1",children:"\u4E09\u3001\u6539\u8FDB\u65B9\u6848\u8BBE\u8BA1"}),"\n",(0,i.jsx)(n.p,{children:"1\u3001\u67E5\u8BE2\u7ED3\u679C\u5BF9\u8C61\u65E0\u9700\u7279\u6B8A\u6807\u7B7E\u5B9A\u4E49\uFF0C\u5168\u81EA\u52A8\u5173\u8054\u6620\u5C04"}),"\n",(0,i.jsxs)(n.p,{children:["2\u3001\u652F\u6301\u6839\u636E\u6307\u5B9A\u5BF9\u8C61\u81EA\u52A8\u8BC6\u522B\u67E5\u8BE2\u5B57\u6BB5\uFF0C\u800C\u4E0D\u662F\u5168\u90E8 ",(0,i.jsx)(n.code,{children:"SELECT *"})]}),"\n",(0,i.jsx)(n.p,{children:"3\u3001\u652F\u6301\u6839\u636E\u6307\u5B9A\u5BF9\u8C61\u81EA\u52A8\u8FC7\u6EE4\u4E0D\u5B58\u5728\u7684\u5B57\u6BB5\u5185\u5BB9"}),"\n",(0,i.jsxs)(n.p,{children:["4\u3001\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"DAO"})," \u5BF9\u8C61\u5C01\u88C5\u4EE3\u7801\u8BBE\u8BA1\uFF0C\u901A\u8FC7\u5BF9\u8C61\u65B9\u5F0F\u64CD\u4F5C\u6570\u636E\u8868"]}),"\n",(0,i.jsxs)(n.p,{children:["5\u3001 ",(0,i.jsx)(n.code,{children:"DAO"})," \u5BF9\u8C61\u5C06\u5173\u8054\u7684\u8868\u540D\u53CA\u5B57\u6BB5\u540D\u8FDB\u884C\u5C01\u88C5\uFF0C\u907F\u514D\u5B57\u7B26\u4E32\u786C\u7F16\u7801"]}),"\n",(0,i.jsx)(n.p,{children:"6\u3001\u65E0\u9700\u63D0\u524D\u5B9A\u4E49\u5B9E\u4F53\u5BF9\u8C61\u63A5\u53D7\u8FD4\u56DE\u7ED3\u679C\uFF0C\u65E0\u9700\u521B\u5EFA\u4E2D\u95F4\u5B9E\u4F53\u5BF9\u8C61\u7528\u4E8E\u63A5\u53E3\u8FD4\u56DE\u5BF9\u8C61\u7684\u8D4B\u503C\u8F6C\u6362"}),"\n",(0,i.jsx)(n.p,{children:"7\u3001\u67E5\u8BE2\u7ED3\u679C\u5BF9\u8C61\u65E0\u9700\u63D0\u524D\u521D\u59CB\u5316\uFF0C\u67E5\u8BE2\u5230\u6570\u636E\u65F6\u624D\u4F1A\u81EA\u52A8\u521B\u5EFA"}),"\n",(0,i.jsxs)(n.p,{children:["8\u3001\u5185\u7F6E\u652F\u6301 ",(0,i.jsx)(n.code,{children:"OpenTelemetry"})," \u6807\u51C6\uFF0C\u5B9E\u73B0\u53EF\u89C2\u6D4B\u6027\uFF0C\u6781\u5927\u63D0\u9AD8\u7EF4\u62A4\u6548\u7387\u3001\u964D\u4F4E\u6210\u672C"]}),"\n",(0,i.jsxs)(n.p,{children:["9\u3001\u652F\u6301 ",(0,i.jsx)(n.code,{children:"SQL"})," \u65E5\u5FD7\u8F93\u51FA\u80FD\u529B\uFF0C\u652F\u6301\u5F00\u5173\u529F\u80FD"]}),"\n",(0,i.jsxs)(n.p,{children:["10\u3001\u6570\u636E\u6A21\u578B\u3001\u6570\u636E\u64CD\u4F5C\u3001\u4E1A\u52A1\u903B\u8F91\u89E3\u8026\uFF0C\u652F\u6301 ",(0,i.jsx)(n.code,{children:"Dao"})," \u53CA ",(0,i.jsx)(n.code,{children:"Model"})," \u4EE3\u7801\u5DE5\u5177\u5316\u81EA\u52A8\u751F\u6210\uFF0C\u4FDD\u8BC1\u6570\u636E\u96C6\u5408\u4E0E\u4EE3\u7801\u6570\u636E\u7ED3\u6784\u4E00\u81F4\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\uFF0C\u4FBF\u4E8E\u89C4\u8303\u843D\u5730"]}),"\n",(0,i.jsx)(n.p,{children:"11\u3001\u7B49\u7B49\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:d(867645).Z+"",width:"2464",height:"650"})}),"\n",(0,i.jsxs)(n.p,{children:["\u91C7\u7528 ",(0,i.jsx)(n.code,{children:"DAO"})," \u8BBE\u8BA1\u6539\u8FDB\u540E\u7684\u4EE3\u7801\u793A\u4F8B"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},796355:function(e,n,d){d.d(n,{Z:function(){return c}});let c=d.p+"assets/images/05bf7722da09a27e7ca82bf6e0f89271-c1fa3d038052e85f8ac34728e8852f44.png"},470692:function(e,n,d){d.d(n,{Z:function(){return c}});let c=d.p+"assets/images/239f4b75b4b77e85bca523371a7dd1b4-9c664ceb37f7b1fda957f96d5864811b.png"},416653:function(e,n,d){d.d(n,{Z:function(){return c}});let c=d.p+"assets/images/46d8aae38995327c6ce26832d21f628b-aab20cf6cfc3aeb8b4bd9d12e9e87b3d.png"},336465:function(e,n,d){d.d(n,{Z:function(){return c}});let c=d.p+"assets/images/620c8a9a4a47de0243748d588aa0bb51-7d237ccc764b58b03cb7d9c1e0e49d53.png"},825597:function(e,n,d){d.d(n,{Z:function(){return c}});let c=d.p+"assets/images/70e01c869632543b846b04a1696e9737-cd7d25aa20a2d730369db62469f90510.png"},351892:function(e,n,d){d.d(n,{Z:function(){return c}});let c=d.p+"assets/images/77daf5d299eabade856d950ab3161f94-b50361a3a6232ba6d81f0d79e67df4c5.png"},867645:function(e,n,d){d.d(n,{Z:function(){return c}});let c=d.p+"assets/images/90537635dc3b5623060fa9edfc49948a-6e0517950a26ea1562c25067f1c811ec.png"},718841:function(e,n,d){d.d(n,{Z:function(){return c}});let c=d.p+"assets/images/b45b3af0a0bdc9ad30f739e31d0039ae-88e9e808d4ffdf213440b3e3bdc4770b.png"},599349:function(e,n,d){d.d(n,{Z:function(){return c}});let c=d.p+"assets/images/bba716ea66e03727826ae6401ce01b2d-d3b19578993ec7e5f59cc5025a0e5fb1.png"},658702:function(e,n,d){d.d(n,{Z:function(){return c}});let c=d.p+"assets/images/d73fdaa5b76b831db0a2c1069742c218-105f68f458e290a2d03dc0a450c4f6fe.png"},650138:function(e,n,d){d.d(n,{Z:function(){return c}});let c=d.p+"assets/images/daa08ad1e9102f4ac964a8176a80e061-867ac37ef33fa994f2f6af27c3fcc2c7.png"},994130:function(e,n,d){d.d(n,{Z:function(){return c}});let c=d.p+"assets/images/f1bb2d203d4fe4f2c44bbc7e14b7832a-f3782e20453de0d57c8efeb5e5f2238a.png"},508799:function(e,n,d){d.d(n,{Z:function(){return c}});let c=d.p+"assets/images/f4e8c70ee25ec329f2b64bb3a53ff503-1d32e08995f781aa0ffe379eba54a94d.png"},250065:function(e,n,d){d.d(n,{Z:function(){return t},a:function(){return r}});var c=d(667294);let i={},s=c.createContext(i);function r(e){let n=c.useContext(s);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);
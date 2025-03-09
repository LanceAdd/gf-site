"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["92980"],{488886:function(e,n,d){d.r(n),d.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>x,assets:()=>t,toc:()=>o,frontMatter:()=>r});var i=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/\u6570\u636E\u5E93ORM","title":"\u6570\u636E\u5E93ORM","description":"\u9A71\u52A8\u5F15\u5165","source":"@site/versioned_docs/version-2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/\u6570\u636E\u5E93ORM.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/","permalink":"/2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/\u6570\u636E\u5E93ORM.md","tags":[],"version":"2.0.x","lastUpdatedBy":"John","lastUpdatedAt":1731404158000,"sidebarPosition":11,"frontMatter":{"title":"\u6570\u636E\u5E93ORM","sidebar_position":11,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u94FE\u8DEF\u8DDF\u8E2A-TraceID\u6CE8\u5165\u548C\u83B7\u53D6","permalink":"/2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-\u6700\u4F73\u5B9E\u8DF5/\u94FE\u8DEF\u8DDF\u8E2A-TraceID\u6CE8\u5165\u548C\u83B7\u53D6"},"next":{"title":"ORM\u4F7F\u7528\u914D\u7F6E","permalink":"/2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u4F7F\u7528\u914D\u7F6E"}}'),c=d("785893"),s=d("250065");let r={title:"\u6570\u636E\u5E93ORM",sidebar_position:11,hide_title:!0},l=void 0,t={},o=[{value:"\u9A71\u52A8\u5F15\u5165",id:"\u9A71\u52A8\u5F15\u5165",level:2},{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u7EC4\u4EF6\u7279\u6027",id:"\u7EC4\u4EF6\u7279\u6027",level:2},{value:"\u77E5\u8BC6\u56FE\u8C31",id:"\u77E5\u8BC6\u56FE\u8C31",level:2},{value:"\u7EC4\u4EF6\u5173\u8054",id:"\u7EC4\u4EF6\u5173\u8054",level:2},{value:"<code>g.DB</code> \u4E0E <code>gdb.New</code>\u3001 <code>gdb.Instance</code>",id:"gdb-\u4E0E-gdbnew-gdbinstance",level:2},{value:"<code>New</code> \u521B\u5EFA\u6570\u636E\u5E93\u5BF9\u8C61",id:"new-\u521B\u5EFA\u6570\u636E\u5E93\u5BF9\u8C61",level:3},{value:"\u83B7\u53D6\u6570\u636E\u5E93\u5BF9\u8C61\u5355\u4F8B",id:"\u83B7\u53D6\u6570\u636E\u5E93\u5BF9\u8C61\u5355\u4F8B",level:3},{value:"\u5185\u7F6E\u652F\u6301\u7684\u6570\u636E\u5E93\u7C7B\u578B",id:"\u5185\u7F6E\u652F\u6301\u7684\u6570\u636E\u5E93\u7C7B\u578B",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u9A71\u52A8\u5F15\u5165",children:"\u9A71\u52A8\u5F15\u5165"}),"\n",(0,c.jsxs)(n.p,{children:["\u4E3A\u4E86\u5C06\u6570\u636E\u5E93\u9A71\u52A8\u4E0E\u6846\u67B6\u4E3B\u5E93\u89E3\u8026\uFF0C\u4ECE ",(0,c.jsx)(n.code,{children:"v2.1"})," \u7248\u672C\u5F00\u59CB\uFF0C\u6240\u6709\u7684\u6570\u636E\u5E93\u9A71\u52A8\u90FD\u9700\u8981\u624B\u52A8\u5F15\u5165\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6570\u636E\u5E93\u9A71\u52A8\u7684\u5B89\u88C5\u548C\u5F15\u5165\u8BF7\u53C2\u8003\uFF1A ",(0,c.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/drivers",children:"https://github.com/gogf/gf/tree/master/contrib/drivers"})]}),"\n",(0,c.jsx)(n.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u7684 ",(0,c.jsx)(n.code,{children:"ORM"})," \u529F\u80FD\u7531 ",(0,c.jsx)(n.code,{children:"gdb"})," \u6A21\u5757\u5B9E\u73B0\uFF0C\u7528\u4E8E\u5E38\u7528\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684 ",(0,c.jsx)(n.code,{children:"ORM"})," \u64CD\u4F5C\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"gdb"})," \u6570\u636E\u5E93\u5F15\u64CE\u5E95\u5C42\u91C7\u7528\u4E86 ",(0,c.jsx)(n.strong,{children:"\u94FE\u63A5\u6C60\u8BBE\u8BA1"}),"\uFF0C\u5F53\u94FE\u63A5\u4E0D\u518D\u4F7F\u7528\u65F6\u4F1A\u81EA\u52A8\u5173\u95ED\uFF0C\u56E0\u6B64\u94FE\u63A5\u5BF9\u8C61\u4E0D\u7528\u7684\u65F6\u5019\u4E0D\u9700\u8981\u663E\u5F0F\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"Close"})," \u65B9\u6CD5\u5173\u95ED\u6570\u636E\u5E93\u8FDE\u63A5\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6CE8\u610F\uFF1A\u4E3A\u63D0\u9AD8\u6570\u636E\u5E93\u64CD\u4F5C\u5B89\u5168\u6027\uFF0C\u5728 ",(0,c.jsx)(n.code,{children:"ORM"})," \u64CD\u4F5C\u4E2D\u4E0D\u5EFA\u8BAE\u76F4\u63A5\u5C06\u53C2\u6570\u62FC\u63A5\u6210 ",(0,c.jsx)(n.code,{children:"SQL"})," \u5B57\u7B26\u4E32\u6267\u884C\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u9884\u5904\u7406\u7684\u65B9\u5F0F\uFF08\u5145\u5206\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"?"})," \u5360\u4F4D\u7B26\uFF09\u6765\u4F20\u9012 ",(0,c.jsx)(n.code,{children:"SQL"})," \u53C2\u6570\u3002 ",(0,c.jsx)(n.code,{children:"gdb"})," \u7684\u5E95\u5C42\u5B9E\u73B0\u4E2D\u5747\u91C7\u7528\u7684\u662F\u9884\u5904\u7406\u7684\u65B9\u5F0F\u5904\u7406\u5F00\u53D1\u8005\u4F20\u9012\u7684\u53C2\u6570\uFF0C\u4EE5\u5145\u5206\u4FDD\u8BC1\u6570\u636E\u5E93\u64CD\u4F5C\u5B89\u5168\u6027\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u63A5\u53E3\u6587\u6863\uFF1A"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb"})}),"\n",(0,c.jsx)(n.h2,{id:"\u7EC4\u4EF6\u7279\u6027",children:"\u7EC4\u4EF6\u7279\u6027"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"GoFrame ORM"})," \u7EC4\u4EF6\u5177\u6709\u4EE5\u4E0B\u663E\u8457\u7279\u70B9\uFF1A"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u5168\u81EA\u52A8\u5316\u652F\u6301\u5D4C\u5957\u4E8B\u52A1\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u9762\u5411\u63A5\u53E3\u5316\u8BBE\u8BA1\u3001\u6613\u4F7F\u7528\u6613\u6269\u5C55\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u5185\u7F6E\u652F\u6301\u4E3B\u6D41\u6570\u636E\u5E93\u7C7B\u578B\u9A71\u52A8\uFF0C\u5E76\u6613\u4E8E\u6269\u5C55\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u5F3A\u5927\u7684\u914D\u7F6E\u7BA1\u7406\uFF0C\u4F7F\u7528\u6846\u67B6\u7EDF\u4E00\u7684\u914D\u7F6E\u7EC4\u4EF6\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u652F\u6301\u5355\u4F8B\u6A21\u5F0F\u83B7\u53D6\u914D\u7F6E\u540C\u4E00\u5206\u7EC4\u6570\u636E\u5E93\u5BF9\u8C61\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u652F\u6301\u539F\u751FSQL\u65B9\u6CD5\u64CD\u4F5C\u3001ORM\u94FE\u5F0F\u64CD\u4F5C\u4E24\u79CD\u65B9\u5F0F\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u652F\u6301 ",(0,c.jsx)(n.code,{children:"OpenTelemetry"})," \u53EF\u89C2\u6D4B\u6027\uFF1A\u94FE\u8DEF\u8DDF\u8E2A\u3001\u65E5\u5FD7\u8BB0\u5F55\u3001\u6307\u6807\u4E0A\u62A5\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u901A\u8FC7 ",(0,c.jsx)(n.code,{children:"Scan"})," \u65B9\u6CD5\u81EA\u52A8\u8BC6\u522B ",(0,c.jsx)(n.code,{children:"Map/Struct"})," \u63A5\u6536\u67E5\u8BE2\u7ED3\u679C\uFF0C\u81EA\u52A8\u5316\u67E5\u8BE2\u7ED3\u679C\u521D\u59CB\u5316\u3001\u7ED3\u6784\u4F53\u7C7B\u578B\u8F6C\u6362\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u901A\u8FC7\u8FD4\u56DE\u7ED3\u679C ",(0,c.jsx)(n.code,{children:"nil"})," \u8BC6\u522B\u4E3A\u7A7A\uFF0C\u65E0\u9700 ",(0,c.jsx)(n.code,{children:"sql.ErrNoRows"})," \u8BC6\u522B\u67E5\u8BE2\u6570\u636E\u4E3A\u7A7A\u7684\u60C5\u51B5\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u5168\u81EA\u52A8\u5316\u7684\u7ED3\u6784\u4F53\u5C5E\u6027-\u5B57\u6BB5\u6620\u5C04\uFF0C\u65E0\u9700\u663E\u793A\u5B9A\u4E49\u7ED3\u6784\u4F53\u6807\u7B7E\u7EF4\u62A4\u5C5E\u6027-\u5B57\u6BB5\u6620\u5C04\u5173\u7CFB\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u81EA\u52A8\u5316\u7684\u7ED9\u5B9A ",(0,c.jsx)(n.code,{children:"Map/Struct/Slice"})," \u53C2\u6570\u7C7B\u578B\u4E2D\u7684\u5B57\u6BB5\u8BC6\u522B\u3001\u8FC7\u6EE4\uFF0C\u5927\u5927\u63D0\u9AD8\u67E5\u8BE2\u6761\u4EF6\u8F93\u5165\u3001\u7ED3\u679C\u63A5\u6536\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u5B8C\u7F8E\u652F\u6301 ",(0,c.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u5C42\u9762\u7684 ",(0,c.jsx)(n.code,{children:"DAO"})," \u8BBE\u8BA1\uFF0C\u5168\u81EA\u52A8\u5316 ",(0,c.jsx)(n.code,{children:"Model/DAO"})," \u4EE3\u7801\u751F\u6210\uFF0C\u6781\u5927\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u652F\u6301\u8C03\u8BD5\u6A21\u5F0F\u3001\u65E5\u5FD7\u8F93\u51FA\u3001 ",(0,c.jsx)(n.code,{children:"DryRun"}),"\u3001\u81EA\u5B9A\u4E49 ",(0,c.jsx)(n.code,{children:"Handler"}),"\u3001\u81EA\u52A8\u7C7B\u578B\u7C7B\u578B\u8F6C\u6362\u3001\u81EA\u5B9A\u4E49\u63A5\u53E3\u8F6C\u6362\u7B49\u7B49\u9AD8\u7EA7\u7279\u6027\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u652F\u6301\u67E5\u8BE2\u7F13\u5B58\u3001\u8F6F\u5220\u9664\u3001\u81EA\u52A8\u5316\u65F6\u95F4\u66F4\u65B0\u3001\u6A21\u578B\u5173\u8054\u3001\u6570\u636E\u5E93\u96C6\u7FA4\u914D\u7F6E\uFF08\u8F6F\u4EF6\u4E3B\u4ECE\u6A21\u5F0F\uFF09\u7B49\u7B49\u5B9E\u7528\u7279\u6027\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u77E5\u8BC6\u56FE\u8C31",children:"\u77E5\u8BC6\u56FE\u8C31"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:d(681485).Z+"",width:"2586",height:"2294"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"GoFrame ORM Features"})}),"\n",(0,c.jsx)(n.h2,{id:"\u7EC4\u4EF6\u5173\u8054",children:"\u7EC4\u4EF6\u5173\u8054"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:d(605234).Z+"",width:"2310",height:"940"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"GoFrame ORM Dependencies"})}),"\n",(0,c.jsxs)(n.h2,{id:"gdb-\u4E0E-gdbnew-gdbinstance",children:[(0,c.jsx)(n.code,{children:"g.DB"})," \u4E0E ",(0,c.jsx)(n.code,{children:"gdb.New"}),"\u3001 ",(0,c.jsx)(n.code,{children:"gdb.Instance"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u83B7\u53D6\u6570\u636E\u5E93\u64CD\u4F5C\u5BF9\u8C61\u6709\u4E09\u79CD\u65B9\u5F0F\uFF0C\u4E00\u79CD\u662F\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"g.DB"})," \u65B9\u6CD5\uFF08\u63A8\u8350\uFF09\uFF0C\u4E00\u79CD\u662F\u4F7F\u7528\u539F\u751F ",(0,c.jsx)(n.code,{children:"gdb.New"})," \u65B9\u6CD5\uFF0C\u8FD8\u6709\u4E00\u79CD\u662F\u4F7F\u7528\u5305\u539F\u751F\u5355\u4F8B\u65B9\u6CD5 ",(0,c.jsx)(n.code,{children:"gdb.Instance"}),"\uFF0C\u800C\u7B2C\u4E00\u79CD\u662F\u63A8\u8350\u7684\u4F7F\u7528\u65B9\u5F0F\u3002\u8FD9\u4E09\u79CD\u65B9\u5F0F\u7684\u533A\u522B\u5982\u4E0B\uFF1A"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"g.DB"})," \u5BF9\u8C61\u7BA1\u7406\u65B9\u5F0F\u83B7\u53D6\u7684\u662F\u5355\u4F8B\u5BF9\u8C61\uFF0C\u6574\u5408\u4E86\u914D\u7F6E\u6587\u4EF6\u7684\u7BA1\u7406\u529F\u80FD\uFF0C\u652F\u6301\u914D\u7F6E\u6587\u4EF6\u70ED\u66F4\u65B0\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"gdb.New"})," \u662F\u6839\u636E\u7ED9\u5B9A\u7684\u6570\u636E\u5E93\u8282\u70B9\u914D\u7F6E\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6570\u636E\u5E93\u5BF9\u8C61(\u975E\u5355\u4F8B)\uFF0C\u65E0\u6CD5\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"gdb.Instance"})," \u662F\u5305\u539F\u751F\u5355\u4F8B\u7BA1\u7406\u65B9\u6CD5\uFF0C\u9700\u8981\u7ED3\u5408\u914D\u7F6E\u65B9\u6CD5\u4E00\u8D77\u4F7F\u7528\uFF0C\u901A\u8FC7\u5206\u7EC4\u540D\u79F0(\u975E\u5FC5\u9700)\u83B7\u53D6\u5BF9\u5E94\u914D\u7F6E\u7684\u6570\u636E\u5E93\u5355\u4F8B\u5BF9\u8C61\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6709\u8FD9\u4E48\u591A\u5BF9\u8C61\u83B7\u53D6\u65B9\u5F0F\u539F\u56E0\u5728\u4E8E ",(0,c.jsx)(n.code,{children:"GoFrame"})," \u662F\u4E00\u4E2A\u6A21\u5757\u5316\u8BBE\u8BA1\u7684\u6846\u67B6\uFF0C\u6BCF\u4E2A\u6A21\u5757\u7686\u53EF\u5355\u72EC\u4F7F\u7528\u3002"]}),"\n",(0,c.jsxs)(n.h3,{id:"new-\u521B\u5EFA\u6570\u636E\u5E93\u5BF9\u8C61",children:[(0,c.jsx)(n.code,{children:"New"})," \u521B\u5EFA\u6570\u636E\u5E93\u5BF9\u8C61"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'db, err := gdb.New(gdb.ConfigNode{\n    Link: "mysql:root:12345678@tcp(127.0.0.1:3306)/test",\n})\n'})}),"\n",(0,c.jsx)(n.h3,{id:"\u83B7\u53D6\u6570\u636E\u5E93\u5BF9\u8C61\u5355\u4F8B",children:"\u83B7\u53D6\u6570\u636E\u5E93\u5BF9\u8C61\u5355\u4F8B"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'// \u83B7\u53D6\u9ED8\u8BA4\u914D\u7F6E\u7684\u6570\u636E\u5E93\u5BF9\u8C61(\u914D\u7F6E\u540D\u79F0\u4E3A"default")\ndb := g.DB()\n\n// \u83B7\u53D6\u914D\u7F6E\u5206\u7EC4\u540D\u79F0\u4E3A"user"\u7684\u6570\u636E\u5E93\u5BF9\u8C61\ndb := g.DB("user")\n\n// \u4F7F\u7528\u539F\u751F\u5355\u4F8B\u7BA1\u7406\u65B9\u6CD5\u83B7\u53D6\u6570\u636E\u5E93\u5BF9\u8C61\u5355\u4F8B\ndb, err := gdb.Instance()\ndb, err := gdb.Instance("user")\n'})}),"\n",(0,c.jsx)(n.h2,{id:"\u5185\u7F6E\u652F\u6301\u7684\u6570\u636E\u5E93\u7C7B\u578B",children:"\u5185\u7F6E\u652F\u6301\u7684\u6570\u636E\u5E93\u7C7B\u578B"}),"\n",(0,c.jsxs)(n.p,{children:["\u7531\u4E8E ",(0,c.jsx)(n.code,{children:"go"})," \u6807\u51C6\u5E93\u7684\u6570\u636E\u5E93\u64CD\u4F5C\u5BF9\u8C61\u91C7\u7528\u63A5\u53E3\u5B9E\u73B0\uFF0C\u56E0\u6B64\u63D0\u4F9B\u4E86\u975E\u5E38\u597D\u7684\u53EF\u6269\u5C55\u6027\u548C\u517C\u5BB9\u6027\u3002\u6846\u67B6\u5DF2\u652F\u6301\u7684\u7B2C\u4E09\u65B9\u6570\u636E\u5E93\u9A71\u52A8\u8BF7\u53C2\u8003\uFF1A ",(0,c.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/drivers",children:"https://github.com/gogf/gf/tree/master/contrib/drivers"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u989D\u5916\u63A5\u5165\u65B0\u7684\u6570\u636E\u5E93\u76F8\u5F53\u65B9\u4FBF\uFF0C\u53EF\u53C2\u8003\u6E90\u7801\u4E2D\u5173\u4E8E ",(0,c.jsx)(n.code,{children:"PostgreSQL"}),"\u3001 ",(0,c.jsx)(n.code,{children:"SQLite"}),"\u3001 ",(0,c.jsx)(n.code,{children:"Oracle"}),"\u3001 ",(0,c.jsx)(n.code,{children:"SQL Server"})," \u7684\u63A5\u5165\u65B9\u5F0F\u3002\u5177\u4F53\u4ECB\u7ECD\u8BF7\u53C2\u8003\u540E\u7EED ",(0,c.jsx)(n.a,{href:"/2.0.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E6%8E%A5%E5%8F%A3%E5%BC%80%E5%8F%91/ORM%E6%8E%A5%E5%8F%A3%E5%BC%80%E5%8F%91-%E9%A9%B1%E5%8A%A8%E5%BC%80%E5%8F%91",children:"ORM\u63A5\u53E3\u5F00\u53D1-\u9A71\u52A8\u5F00\u53D1"})," \u7AE0\u8282\u3002"]})]})}function x(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},681485:function(e,n,d){d.d(n,{Z:function(){return i}});let i=d.p+"assets/images/14f4e3330c2aa9ba388b8a9dd61b140f-812742ced256295346b6355c1c503e5a.png"},605234:function(e,n,d){d.d(n,{Z:function(){return i}});let i=d.p+"assets/images/2b4e16f74f8be5e8389aee85b5293b89-5d61b04fbaf4be85bc886c8cbf8dc51a.png"},250065:function(e,n,d){d.d(n,{Z:function(){return l},a:function(){return r}});var i=d(667294);let c={},s=i.createContext(c);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
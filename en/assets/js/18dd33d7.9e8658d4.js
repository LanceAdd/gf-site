"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["27425"],{394705:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>a,frontMatter:()=>d});var i=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/\u6570\u636E\u5E93ORM","title":"\u6570\u636E\u5E93ORM\uD83D\uDD25","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528gdb\u6A21\u5757\u5B9E\u73B0\u6570\u636E\u5E93\u7684ORM\u529F\u80FD\uFF0C\u5F3A\u8C03\u4E86\u8FDE\u63A5\u6C60\u8BBE\u8BA1\u3001\u9884\u5904\u7406SQL\u53C2\u6570\u4EE5\u53CA\u81EA\u52A8\u8BC6\u522BMap/Struct\u7684\u7279\u70B9\u3002GoFrame ORM\u7EC4\u4EF6\u652F\u6301\u4E8B\u52A1\u5D4C\u5957\u3001\u63A5\u53E3\u5316\u8BBE\u8BA1\uFF0C\u5E76\u517C\u5BB9\u4E3B\u6D41\u6570\u636E\u5E93\u9A71\u52A8\uFF0C\u5177\u5907\u5F3A\u5927\u7684\u914D\u7F6E\u7BA1\u7406\u548C\u8C03\u8BD5\u7279\u6027\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/\u6570\u636E\u5E93ORM.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM","slug":"/docs/core/gdb","permalink":"/en/2.7.x/docs/core/gdb","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/\u6570\u636E\u5E93ORM.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":10,"frontMatter":{"slug":"/docs/core/gdb","title":"\u6570\u636E\u5E93ORM\uD83D\uDD25","sidebar_position":10,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u6570\u636E\u5E93ORM","gdb\u6A21\u5757","\u6570\u636E\u5E93\u9A71\u52A8","\u94FE\u63A5\u6C60","\u9884\u5904\u7406","\u81EA\u52A8\u5316","\u53EF\u89C2\u6D4B\u6027","DAO\u8BBE\u8BA1"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528gdb\u6A21\u5757\u5B9E\u73B0\u6570\u636E\u5E93\u7684ORM\u529F\u80FD\uFF0C\u5F3A\u8C03\u4E86\u8FDE\u63A5\u6C60\u8BBE\u8BA1\u3001\u9884\u5904\u7406SQL\u53C2\u6570\u4EE5\u53CA\u81EA\u52A8\u8BC6\u522BMap/Struct\u7684\u7279\u70B9\u3002GoFrame ORM\u7EC4\u4EF6\u652F\u6301\u4E8B\u52A1\u5D4C\u5957\u3001\u63A5\u53E3\u5316\u8BBE\u8BA1\uFF0C\u5E76\u517C\u5BB9\u4E3B\u6D41\u6570\u636E\u5E93\u9A71\u52A8\uFF0C\u5177\u5907\u5F3A\u5927\u7684\u914D\u7F6E\u7BA1\u7406\u548C\u8C03\u8BD5\u7279\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6A21\u677F\u51FD\u6570-\u81EA\u5B9A\u4E49\u51FD\u6570","permalink":"/en/2.7.x/docs/core/gview-funcs-custom"},"next":{"title":"ORM\u4F7F\u7528\u914D\u7F6E","permalink":"/en/2.7.x/docs/core/gdb-config"}}'),t=r("785893"),c=r("250065"),s=r("203105");let d={slug:"/docs/core/gdb",title:"\u6570\u636E\u5E93ORM\uD83D\uDD25",sidebar_position:10,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u6570\u636E\u5E93ORM","gdb\u6A21\u5757","\u6570\u636E\u5E93\u9A71\u52A8","\u94FE\u63A5\u6C60","\u9884\u5904\u7406","\u81EA\u52A8\u5316","\u53EF\u89C2\u6D4B\u6027","DAO\u8BBE\u8BA1"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528gdb\u6A21\u5757\u5B9E\u73B0\u6570\u636E\u5E93\u7684ORM\u529F\u80FD\uFF0C\u5F3A\u8C03\u4E86\u8FDE\u63A5\u6C60\u8BBE\u8BA1\u3001\u9884\u5904\u7406SQL\u53C2\u6570\u4EE5\u53CA\u81EA\u52A8\u8BC6\u522BMap/Struct\u7684\u7279\u70B9\u3002GoFrame ORM\u7EC4\u4EF6\u652F\u6301\u4E8B\u52A1\u5D4C\u5957\u3001\u63A5\u53E3\u5316\u8BBE\u8BA1\uFF0C\u5E76\u517C\u5BB9\u4E3B\u6D41\u6570\u636E\u5E93\u9A71\u52A8\uFF0C\u5177\u5907\u5F3A\u5927\u7684\u914D\u7F6E\u7BA1\u7406\u548C\u8C03\u8BD5\u7279\u6027\u3002"},l=void 0,o={},a=[{value:"\u9A71\u52A8\u5F15\u5165\uD83D\uDD25",id:"\u9A71\u52A8\u5F15\u5165",level:2},{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u7EC4\u4EF6\u7279\u6027",id:"\u7EC4\u4EF6\u7279\u6027",level:2},{value:"\u77E5\u8BC6\u56FE\u8C31",id:"\u77E5\u8BC6\u56FE\u8C31",level:2},{value:"\u7EC4\u4EF6\u5173\u8054",id:"\u7EC4\u4EF6\u5173\u8054",level:2},{value:"<code>g.DB</code> \u4E0E <code>gdb.New</code>\u3001 <code>gdb.Instance</code>",id:"gdb-\u4E0E-gdbnew-gdbinstance",level:2},{value:"<code>New</code> \u521B\u5EFA\u6570\u636E\u5E93\u5BF9\u8C61",id:"new-\u521B\u5EFA\u6570\u636E\u5E93\u5BF9\u8C61",level:3},{value:"\u83B7\u53D6\u6570\u636E\u5E93\u5BF9\u8C61\u5355\u4F8B",id:"\u83B7\u53D6\u6570\u636E\u5E93\u5BF9\u8C61\u5355\u4F8B",level:3},{value:"\u76F8\u5173\u6587\u6863",id:"\u76F8\u5173\u6587\u6863",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u9A71\u52A8\u5F15\u5165",children:"\u9A71\u52A8\u5F15\u5165\uD83D\uDD25"}),"\n",(0,t.jsxs)(n.p,{children:["\u4E3A\u4E86\u5C06\u6570\u636E\u5E93\u9A71\u52A8\u4E0E\u6846\u67B6\u4E3B\u5E93\u89E3\u8026\uFF0C\u4ECE ",(0,t.jsx)(n.code,{children:"v2.1"})," \u7248\u672C\u5F00\u59CB\uFF0C\u6240\u6709\u7684\u6570\u636E\u5E93\u9A71\u52A8\u90FD\u9700\u8981\u901A\u8FC7\u793E\u533A\u5305\u624B\u52A8\u5F15\u5165\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6570\u636E\u5E93\u9A71\u52A8\u7684\u5B89\u88C5\u548C\u5F15\u5165\u8BF7\u53C2\u8003\uFF1A ",(0,t.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/drivers",children:"https://github.com/gogf/gf/tree/master/contrib/drivers"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u7684 ",(0,t.jsx)(n.code,{children:"ORM"})," \u529F\u80FD\u7531 ",(0,t.jsx)(n.code,{children:"gdb"})," \u6A21\u5757\u5B9E\u73B0\uFF0C\u7528\u4E8E\u5E38\u7528\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684 ",(0,t.jsx)(n.code,{children:"ORM"})," \u64CD\u4F5C\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"gdb"})," \u6570\u636E\u5E93\u5F15\u64CE\u5E95\u5C42\u91C7\u7528\u4E86 ",(0,t.jsx)(n.strong,{children:"\u94FE\u63A5\u6C60\u8BBE\u8BA1"}),"\uFF0C\u5F53\u94FE\u63A5\u4E0D\u518D\u4F7F\u7528\u65F6\u4F1A\u81EA\u52A8\u5173\u95ED\uFF0C\u56E0\u6B64\u94FE\u63A5\u5BF9\u8C61\u4E0D\u7528\u7684\u65F6\u5019\u4E0D\u9700\u8981\u663E\u5F0F\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"Close"})," \u65B9\u6CD5\u5173\u95ED\u6570\u636E\u5E93\u8FDE\u63A5\u3002"]})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["\u6CE8\u610F\uFF1A\u4E3A\u63D0\u9AD8\u6570\u636E\u5E93\u64CD\u4F5C\u5B89\u5168\u6027\uFF0C\u5728 ",(0,t.jsx)(n.code,{children:"ORM"})," \u64CD\u4F5C\u4E2D\u4E0D\u5EFA\u8BAE\u76F4\u63A5\u5C06\u53C2\u6570\u62FC\u63A5\u6210 ",(0,t.jsx)(n.code,{children:"SQL"})," \u5B57\u7B26\u4E32\u6267\u884C\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u9884\u5904\u7406\u7684\u65B9\u5F0F\uFF08\u5145\u5206\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"?"})," \u5360\u4F4D\u7B26\uFF09\u6765\u4F20\u9012 ",(0,t.jsx)(n.code,{children:"SQL"})," \u53C2\u6570\u3002 ",(0,t.jsx)(n.code,{children:"gdb"})," \u7684\u5E95\u5C42\u5B9E\u73B0\u4E2D\u5747\u91C7\u7528\u7684\u662F\u9884\u5904\u7406\u7684\u65B9\u5F0F\u5904\u7406\u5F00\u53D1\u8005\u4F20\u9012\u7684\u53C2\u6570\uFF0C\u4EE5\u5145\u5206\u4FDD\u8BC1\u6570\u636E\u5E93\u64CD\u4F5C\u5B89\u5168\u6027\u3002"]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u63A5\u53E3\u6587\u6863\uFF1A"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb"})}),"\n",(0,t.jsx)(n.h2,{id:"\u7EC4\u4EF6\u7279\u6027",children:"\u7EC4\u4EF6\u7279\u6027"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"GoFrame ORM"})," \u7EC4\u4EF6\u5177\u6709\u4EE5\u4E0B\u663E\u8457\u7279\u70B9\uFF1A"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5168\u81EA\u52A8\u5316\u652F\u6301\u5D4C\u5957\u4E8B\u52A1\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u9762\u5411\u63A5\u53E3\u5316\u8BBE\u8BA1\u3001\u6613\u4F7F\u7528\u6613\u6269\u5C55\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u7F6E\u652F\u6301\u4E3B\u6D41\u6570\u636E\u5E93\u7C7B\u578B\u9A71\u52A8\uFF0C\u5E76\u6613\u4E8E\u6269\u5C55\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5F3A\u5927\u7684\u914D\u7F6E\u7BA1\u7406\uFF0C\u4F7F\u7528\u6846\u67B6\u7EDF\u4E00\u7684\u914D\u7F6E\u7EC4\u4EF6\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u652F\u6301\u5355\u4F8B\u6A21\u5F0F\u83B7\u53D6\u914D\u7F6E\u540C\u4E00\u5206\u7EC4\u6570\u636E\u5E93\u5BF9\u8C61\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u652F\u6301\u539F\u751FSQL\u65B9\u6CD5\u64CD\u4F5C\u3001ORM\u94FE\u5F0F\u64CD\u4F5C\u4E24\u79CD\u65B9\u5F0F\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u652F\u6301 ",(0,t.jsx)(n.code,{children:"OpenTelemetry"})," \u53EF\u89C2\u6D4B\u6027\uFF1A\u94FE\u8DEF\u8DDF\u8E2A\u3001\u65E5\u5FD7\u8BB0\u5F55\u3001\u6307\u6807\u4E0A\u62A5\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"Scan"})," \u65B9\u6CD5\u81EA\u52A8\u8BC6\u522B ",(0,t.jsx)(n.code,{children:"Map/Struct"})," \u63A5\u6536\u67E5\u8BE2\u7ED3\u679C\uFF0C\u81EA\u52A8\u5316\u67E5\u8BE2\u7ED3\u679C\u521D\u59CB\u5316\u3001\u7ED3\u6784\u4F53\u7C7B\u578B\u8F6C\u6362\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u901A\u8FC7\u8FD4\u56DE\u7ED3\u679C ",(0,t.jsx)(n.code,{children:"nil"})," \u8BC6\u522B\u4E3A\u7A7A\uFF0C\u65E0\u9700 ",(0,t.jsx)(n.code,{children:"sql.ErrNoRows"})," \u8BC6\u522B\u67E5\u8BE2\u6570\u636E\u4E3A\u7A7A\u7684\u60C5\u51B5\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u5168\u81EA\u52A8\u5316\u7684\u7ED3\u6784\u4F53\u5C5E\u6027-\u5B57\u6BB5\u6620\u5C04\uFF0C\u65E0\u9700\u663E\u793A\u5B9A\u4E49\u7ED3\u6784\u4F53\u6807\u7B7E\u7EF4\u62A4\u5C5E\u6027-\u5B57\u6BB5\u6620\u5C04\u5173\u7CFB\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u81EA\u52A8\u5316\u7684\u7ED9\u5B9A ",(0,t.jsx)(n.code,{children:"Map/Struct/Slice"})," \u53C2\u6570\u7C7B\u578B\u4E2D\u7684\u5B57\u6BB5\u8BC6\u522B\u3001\u8FC7\u6EE4\uFF0C\u5927\u5927\u63D0\u9AD8\u67E5\u8BE2\u6761\u4EF6\u8F93\u5165\u3001\u7ED3\u679C\u63A5\u6536\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5B8C\u7F8E\u652F\u6301 ",(0,t.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u5C42\u9762\u7684 ",(0,t.jsx)(n.code,{children:"DAO"})," \u8BBE\u8BA1\uFF0C\u5168\u81EA\u52A8\u5316 ",(0,t.jsx)(n.code,{children:"Model/DAO"})," \u4EE3\u7801\u751F\u6210\uFF0C\u6781\u5927\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u652F\u6301\u8C03\u8BD5\u6A21\u5F0F\u3001\u65E5\u5FD7\u8F93\u51FA\u3001 ",(0,t.jsx)(n.code,{children:"DryRun"}),"\u3001\u81EA\u5B9A\u4E49 ",(0,t.jsx)(n.code,{children:"Handler"}),"\u3001\u81EA\u52A8\u7C7B\u578B\u7C7B\u578B\u8F6C\u6362\u3001\u81EA\u5B9A\u4E49\u63A5\u53E3\u8F6C\u6362\u7B49\u7B49\u9AD8\u7EA7\u7279\u6027\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u652F\u6301\u67E5\u8BE2\u7F13\u5B58\u3001\u8F6F\u5220\u9664\u3001\u81EA\u52A8\u5316\u65F6\u95F4\u66F4\u65B0\u3001\u6A21\u578B\u5173\u8054\u3001\u6570\u636E\u5E93\u96C6\u7FA4\u914D\u7F6E\uFF08\u8F6F\u4EF6\u4E3B\u4ECE\u6A21\u5F0F\uFF09\u7B49\u7B49\u5B9E\u7528\u7279\u6027\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u77E5\u8BC6\u56FE\u8C31",children:"\u77E5\u8BC6\u56FE\u8C31"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(666747).Z+"",width:"2586",height:"2294"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"GoFrame ORM Features"})}),"\n",(0,t.jsx)(n.h2,{id:"\u7EC4\u4EF6\u5173\u8054",children:"\u7EC4\u4EF6\u5173\u8054"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(994459).Z+"",width:"2310",height:"940"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"GoFrame ORM Dependencies"})}),"\n",(0,t.jsxs)(n.h2,{id:"gdb-\u4E0E-gdbnew-gdbinstance",children:[(0,t.jsx)(n.code,{children:"g.DB"})," \u4E0E ",(0,t.jsx)(n.code,{children:"gdb.New"}),"\u3001 ",(0,t.jsx)(n.code,{children:"gdb.Instance"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u83B7\u53D6\u6570\u636E\u5E93\u64CD\u4F5C\u5BF9\u8C61\u6709\u4E09\u79CD\u65B9\u5F0F\uFF0C\u4E00\u79CD\u662F\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"g.DB"})," \u65B9\u6CD5\uFF08\u63A8\u8350\uFF09\uFF0C\u4E00\u79CD\u662F\u4F7F\u7528\u539F\u751F ",(0,t.jsx)(n.code,{children:"gdb.New"})," \u65B9\u6CD5\uFF0C\u8FD8\u6709\u4E00\u79CD\u662F\u4F7F\u7528\u5305\u539F\u751F\u5355\u4F8B\u65B9\u6CD5 ",(0,t.jsx)(n.code,{children:"gdb.Instance"}),"\uFF0C\u800C\u7B2C\u4E00\u79CD\u662F\u63A8\u8350\u7684\u4F7F\u7528\u65B9\u5F0F\u3002\u8FD9\u4E09\u79CD\u65B9\u5F0F\u7684\u533A\u522B\u5982\u4E0B\uFF1A"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"g.DB"})," \u5BF9\u8C61\u7BA1\u7406\u65B9\u5F0F\u83B7\u53D6\u7684\u662F\u5355\u4F8B\u5BF9\u8C61\uFF0C\u6574\u5408\u4E86\u914D\u7F6E\u6587\u4EF6\u7684\u7BA1\u7406\u529F\u80FD\uFF0C\u652F\u6301\u914D\u7F6E\u6587\u4EF6\u70ED\u66F4\u65B0\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"gdb.New"})," \u662F\u6839\u636E\u7ED9\u5B9A\u7684\u6570\u636E\u5E93\u8282\u70B9\u914D\u7F6E\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6570\u636E\u5E93\u5BF9\u8C61(\u975E\u5355\u4F8B)\uFF0C\u65E0\u6CD5\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"gdb.Instance"})," \u662F\u5305\u539F\u751F\u5355\u4F8B\u7BA1\u7406\u65B9\u6CD5\uFF0C\u9700\u8981\u7ED3\u5408\u914D\u7F6E\u65B9\u6CD5\u4E00\u8D77\u4F7F\u7528\uFF0C\u901A\u8FC7\u5206\u7EC4\u540D\u79F0(\u975E\u5FC5\u9700)\u83B7\u53D6\u5BF9\u5E94\u914D\u7F6E\u7684\u6570\u636E\u5E93\u5355\u4F8B\u5BF9\u8C61\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\u6709\u8FD9\u4E48\u591A\u5BF9\u8C61\u83B7\u53D6\u65B9\u5F0F\u539F\u56E0\u5728\u4E8E ",(0,t.jsx)(n.code,{children:"GoFrame"})," \u662F\u4E00\u4E2A\u6A21\u5757\u5316\u8BBE\u8BA1\u7684\u6846\u67B6\uFF0C\u6BCF\u4E2A\u6A21\u5757\u7686\u53EF\u5355\u72EC\u4F7F\u7528\u3002"]})}),"\n",(0,t.jsxs)(n.h3,{id:"new-\u521B\u5EFA\u6570\u636E\u5E93\u5BF9\u8C61",children:[(0,t.jsx)(n.code,{children:"New"})," \u521B\u5EFA\u6570\u636E\u5E93\u5BF9\u8C61"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'db, err := gdb.New(gdb.ConfigNode{\n    Link: "mysql:root:12345678@tcp(127.0.0.1:3306)/test",\n})\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u83B7\u53D6\u6570\u636E\u5E93\u5BF9\u8C61\u5355\u4F8B",children:"\u83B7\u53D6\u6570\u636E\u5E93\u5BF9\u8C61\u5355\u4F8B"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// \u83B7\u53D6\u9ED8\u8BA4\u914D\u7F6E\u7684\u6570\u636E\u5E93\u5BF9\u8C61(\u914D\u7F6E\u540D\u79F0\u4E3A"default")\ndb := g.DB()\n\n// \u83B7\u53D6\u914D\u7F6E\u5206\u7EC4\u540D\u79F0\u4E3A"user"\u7684\u6570\u636E\u5E93\u5BF9\u8C61\ndb := g.DB("user")\n\n// \u4F7F\u7528\u539F\u751F\u5355\u4F8B\u7BA1\u7406\u65B9\u6CD5\u83B7\u53D6\u6570\u636E\u5E93\u5BF9\u8C61\u5355\u4F8B\ndb, err := gdb.Instance()\ndb, err := gdb.Instance("user")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u76F8\u5173\u6587\u6863",children:"\u76F8\u5173\u6587\u6863"}),"\n","\n",(0,t.jsx)(s.Z,{})]})}function u(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},666747:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/74298ab82a6dd23550ed8a4432fa4327-812742ced256295346b6355c1c503e5a.png"},994459:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/cf10ab2ff4d4b341190d5e5a47692061-5d61b04fbaf4be85bc886c8cbf8dc51a.png"},203105:function(e,n,r){r.d(n,{Z:()=>f});var i=r("785893");r("667294");var t=r("467026"),c=r("96693"),s=r("531183"),d=r("633876"),l=r("266026"),o=r("434751"),a=r("58608");let h={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:n,children:r}=e;return(0,i.jsx)(s.Z,{href:n,className:(0,t.Z)("card padding--lg",h.cardContainer),children:r})}function x(e){let{href:n,icon:r,title:c,description:s}=e;return(0,i.jsxs)(u,{href:n,children:[(0,i.jsxs)(a.Z,{as:"h2",className:(0,t.Z)("text--truncate",h.cardTitle),title:c,children:[r," ",c]}),s&&(0,i.jsx)("p",{className:(0,t.Z)("text--truncate",h.cardDescription),title:s,children:s})]})}function g(e){let{item:n}=e,r=(0,c.LM)(n),t=function(){let{selectMessage:e}=(0,d.c)();return n=>e(n,(0,o.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return r?(0,i.jsx)(x,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:n.label,description:n.description??t(n.items.length)}):null}function j(e){let{item:n}=e,r=(0,l.Z)(n.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",t=(0,c.xz)(n.docId??void 0);return(0,i.jsx)(x,{href:n.href,icon:r,title:n.label,description:n.description??t?.description})}function p(e){let{item:n}=e;switch(n.type){case"link":return(0,i.jsx)(j,{item:n});case"category":return(0,i.jsx)(g,{item:n});default:throw Error(`unknown item type ${JSON.stringify(n)}`)}}function m(e){let{className:n}=e,r=(0,c.jA)();return(0,i.jsx)(f,{items:r.items,className:n})}function f(e){let{items:n,className:r}=e;if(!n)return(0,i.jsx)(m,{...e});let s=(0,c.MN)(n);return(0,i.jsx)("section",{className:(0,t.Z)("row",r),children:s.map((e,n)=>(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(p,{item:e})},n))})}},633876:function(e,n,r){r.d(n,{c:function(){return l}});var i=r(667294),t=r(49931);let c=["zero","one","two","few","many","other"];function s(e){return c.filter(n=>e.includes(n))}let d={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function l(){let e=function(){let{i18n:{currentLocale:e}}=(0,t.Z)();return(0,i.useMemo)(()=>{try{return function(e){let n=new Intl.PluralRules(e);return{locale:e,pluralForms:s(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${n.message}
`),d}},[e])}();return{selectMessage:(n,r)=>(function(e,n,r){let i=e.split("|");if(1===i.length)return i[0];i.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);let t=r.select(n);return i[Math.min(r.pluralForms.indexOf(t),i.length-1)]})(r,n,e)}}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return s}});var i=r(667294);let t={},c=i.createContext(t);function s(e){let n=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);
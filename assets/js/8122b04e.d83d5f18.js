"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["4953"],{371896:function(n,e,o){o.r(e),o.d(e,{metadata:()=>i,contentTitle:()=>d,default:()=>a,assets:()=>c,toc:()=>l,frontMatter:()=>t});var i=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4F7F\u7528\u914D\u7F6E/ORM\u4F7F\u7528\u914D\u7F6E-\u914D\u7F6E\u65B9\u6CD5","title":"ORM\u4F7F\u7528\u914D\u7F6E-\u914D\u7F6E\u65B9\u6CD5","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u914D\u7F6E\u7BA1\u7406gdb\u6570\u636E\u5E93\u6A21\u5757\u3002\u4E3B\u8981\u6DB5\u76D6\u4E86\u6570\u636E\u7ED3\u6784\u8BBE\u8BA1\u3001\u914D\u7F6E\u7279\u70B9\u3001\u4EE5\u53CA\u5177\u4F53\u7684\u914D\u7F6E\u65B9\u6CD5\u3002\u901A\u8FC7\u914D\u7F6EConfigNode\u548CConfigGroup\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u7075\u6D3B\u5730\u7BA1\u7406\u591A\u8282\u70B9\u6570\u636E\u5E93\u96C6\u7FA4\uFF0C\u5B9E\u73B0\u9AD8\u6548\u7684\u8D1F\u8F7D\u5747\u8861\u548C\u8BFB\u5199\u5206\u79BB\u3002\u6B64\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E9B\u9ED8\u8BA4\u7684\u5206\u7EC4\u548C\u81EA\u5B9A\u4E49\u5168\u5C40\u914D\u7F6E\u7684\u793A\u4F8B\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4F7F\u7528\u914D\u7F6E/ORM\u4F7F\u7528\u914D\u7F6E-\u914D\u7F6E\u65B9\u6CD5.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4F7F\u7528\u914D\u7F6E","slug":"/docs/core/gdb-config-funcs","permalink":"/2.7.x/docs/core/gdb-config-funcs","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4F7F\u7528\u914D\u7F6E/ORM\u4F7F\u7528\u914D\u7F6E-\u914D\u7F6E\u65B9\u6CD5.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/core/gdb-config-funcs","title":"ORM\u4F7F\u7528\u914D\u7F6E-\u914D\u7F6E\u65B9\u6CD5","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","ORM\u4F7F\u7528\u914D\u7F6E","\u6570\u636E\u5E93\u8282\u70B9\u7BA1\u7406","\u8FDE\u63A5\u5C5E\u6027\u914D\u7F6E","\u6570\u636E\u5E93\u96C6\u7FA4","\u5173\u7CFB\u578B\u6570\u636E\u5E93","\u8BFB\u5199\u5206\u79BB","\u8D1F\u8F7D\u5747\u8861","\u914D\u7F6E\u7BA1\u7406\u7279\u70B9","GoFrame\u6846\u67B6"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u914D\u7F6E\u7BA1\u7406gdb\u6570\u636E\u5E93\u6A21\u5757\u3002\u4E3B\u8981\u6DB5\u76D6\u4E86\u6570\u636E\u7ED3\u6784\u8BBE\u8BA1\u3001\u914D\u7F6E\u7279\u70B9\u3001\u4EE5\u53CA\u5177\u4F53\u7684\u914D\u7F6E\u65B9\u6CD5\u3002\u901A\u8FC7\u914D\u7F6EConfigNode\u548CConfigGroup\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u7075\u6D3B\u5730\u7BA1\u7406\u591A\u8282\u70B9\u6570\u636E\u5E93\u96C6\u7FA4\uFF0C\u5B9E\u73B0\u9AD8\u6548\u7684\u8D1F\u8F7D\u5747\u8861\u548C\u8BFB\u5199\u5206\u79BB\u3002\u6B64\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E9B\u9ED8\u8BA4\u7684\u5206\u7EC4\u548C\u81EA\u5B9A\u4E49\u5168\u5C40\u914D\u7F6E\u7684\u793A\u4F8B\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u4F7F\u7528\u914D\u7F6E-\u914D\u7F6E\u6587\u4EF6","permalink":"/2.7.x/docs/core/gdb-config-file"},"next":{"title":"ORM\u4F7F\u7528\u914D\u7F6E-\u5E38\u89C1\u95EE\u9898","permalink":"/2.7.x/docs/core/gdb-config-faq"}}'),s=o("785893"),r=o("250065");let t={slug:"/docs/core/gdb-config-funcs",title:"ORM\u4F7F\u7528\u914D\u7F6E-\u914D\u7F6E\u65B9\u6CD5",sidebar_position:1,hide_title:!0,keywords:["GoFrame","ORM\u4F7F\u7528\u914D\u7F6E","\u6570\u636E\u5E93\u8282\u70B9\u7BA1\u7406","\u8FDE\u63A5\u5C5E\u6027\u914D\u7F6E","\u6570\u636E\u5E93\u96C6\u7FA4","\u5173\u7CFB\u578B\u6570\u636E\u5E93","\u8BFB\u5199\u5206\u79BB","\u8D1F\u8F7D\u5747\u8861","\u914D\u7F6E\u7BA1\u7406\u7279\u70B9","GoFrame\u6846\u67B6"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u914D\u7F6E\u7BA1\u7406gdb\u6570\u636E\u5E93\u6A21\u5757\u3002\u4E3B\u8981\u6DB5\u76D6\u4E86\u6570\u636E\u7ED3\u6784\u8BBE\u8BA1\u3001\u914D\u7F6E\u7279\u70B9\u3001\u4EE5\u53CA\u5177\u4F53\u7684\u914D\u7F6E\u65B9\u6CD5\u3002\u901A\u8FC7\u914D\u7F6EConfigNode\u548CConfigGroup\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u7075\u6D3B\u5730\u7BA1\u7406\u591A\u8282\u70B9\u6570\u636E\u5E93\u96C6\u7FA4\uFF0C\u5B9E\u73B0\u9AD8\u6548\u7684\u8D1F\u8F7D\u5747\u8861\u548C\u8BFB\u5199\u5206\u79BB\u3002\u6B64\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E9B\u9ED8\u8BA4\u7684\u5206\u7EC4\u548C\u81EA\u5B9A\u4E49\u5168\u5C40\u914D\u7F6E\u7684\u793A\u4F8B\u3002"},d=void 0,c={},l=[{value:"\u6570\u636E\u7ED3\u6784",id:"\u6570\u636E\u7ED3\u6784",level:2},{value:"\u914D\u7F6E\u65B9\u6CD5",id:"\u914D\u7F6E\u65B9\u6CD5",level:2}];function g(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsx)(e.p,{children:"\u4EE5\u4E0B\u4E3A\u6570\u636E\u5E93\u5E95\u5C42\u7BA1\u7406\u914D\u7F6E\u4ECB\u7ECD\uFF0C\u5982\u679C\u60A8\u5BF9\u6570\u636E\u5E93\u7684\u5E95\u5C42\u914D\u7F6E\u7BA1\u7406\u6BD4\u8F83\u611F\u5174\u8DA3\uFF0C\u53EF\u7EE7\u7EED\u9605\u8BFB\u540E\u7EED\u7AE0\u8282\u3002"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6570\u636E\u7ED3\u6784",children:"\u6570\u636E\u7ED3\u6784"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"gdb"})," \u6570\u636E\u5E93\u7BA1\u7406\u6A21\u5757\u7684\u5185\u90E8\u914D\u7F6E\u7BA1\u7406\u6570\u636E\u7ED3\u6784\u5982\u4E0B\uFF1A"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ConfigNode"})," \u7528\u4E8E\u5B58\u50A8\u4E00\u4E2A\u6570\u636E\u5E93\u8282\u70B9\u4FE1\u606F\uFF1B ",(0,s.jsx)(e.code,{children:"ConfigGroup"})," \u7528\u4E8E\u7BA1\u7406\u591A\u4E2A\u6570\u636E\u5E93\u8282\u70B9\u7EC4\u6210\u7684\u914D\u7F6E\u5206\u7EC4(\u4E00\u822C\u4E00\u4E2A\u5206\u7EC4\u5BF9\u5E94\u4E00\u4E2A\u4E1A\u52A1\u6570\u636E\u5E93\u96C6\u7FA4)\uFF1B ",(0,s.jsx)(e.code,{children:"Config"})," \u7528\u4E8E\u7BA1\u7406\u591A\u4E2A ",(0,s.jsx)(e.code,{children:"ConfigGroup"})," \u914D\u7F6E\u5206\u7EC4\u3002"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u914D\u7F6E\u7BA1\u7406\u7279\u70B9\uFF1A"})}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u652F\u6301\u591A\u8282\u70B9\u6570\u636E\u5E93\u96C6\u7FA4\u7BA1\u7406\uFF1B"}),"\n",(0,s.jsx)(e.li,{children:"\u6BCF\u4E2A\u8282\u70B9\u53EF\u4EE5\u5355\u72EC\u914D\u7F6E\u8FDE\u63A5\u5C5E\u6027\uFF1B"}),"\n",(0,s.jsx)(e.li,{children:"\u91C7\u7528\u5355\u4F8B\u6A21\u5F0F\u7BA1\u7406\u6570\u636E\u5E93\u5B9E\u4F8B\u5316\u5BF9\u8C61\uFF1B"}),"\n",(0,s.jsx)(e.li,{children:"\u652F\u6301\u5BF9\u6570\u636E\u5E93\u96C6\u7FA4\u5206\u7EC4\u7BA1\u7406\uFF0C\u6309\u7167\u5206\u7EC4\u540D\u79F0\u83B7\u53D6\u5B9E\u4F8B\u5316\u7684\u6570\u636E\u5E93\u64CD\u4F5C\u5BF9\u8C61\uFF1B"}),"\n",(0,s.jsxs)(e.li,{children:["\u652F\u6301\u591A\u79CD\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7BA1\u7406\uFF0C\u53EF\u901A\u8FC7 ",(0,s.jsx)(e.code,{children:"ConfigNode.Type"})," \u5C5E\u6027\u8FDB\u884C\u914D\u7F6E\uFF1B"]}),"\n",(0,s.jsxs)(e.li,{children:["\u652F\u6301 ",(0,s.jsx)(e.code,{children:"Master-Slave"})," \u8BFB\u5199\u5206\u79BB\uFF0C\u53EF\u901A\u8FC7 ",(0,s.jsx)(e.code,{children:"ConfigNode.Role"})," \u5C5E\u6027\u8FDB\u884C\u914D\u7F6E\uFF1B"]}),"\n",(0,s.jsxs)(e.li,{children:["\u652F\u6301\u5BA2\u6237\u7AEF\u7684\u8D1F\u8F7D\u5747\u8861\u7BA1\u7406\uFF0C\u53EF\u901A\u8FC7 ",(0,s.jsx)(e.code,{children:"ConfigNode.Weight"})," \u5C5E\u6027\u8FDB\u884C\u914D\u7F6E\uFF0C\u503C\u8D8A\u5927\uFF0C\u4F18\u5148\u7EA7\u8D8A\u9AD8\uFF1B"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"type Config      map[string]ConfigGroup // \u6570\u636E\u5E93\u914D\u7F6E\u5BF9\u8C61\ntype ConfigGroup []ConfigNode           // \u6570\u636E\u5E93\u5206\u7EC4\u914D\u7F6E\n// \u6570\u636E\u5E93\u914D\u7F6E\u9879(\u4E00\u4E2A\u5206\u7EC4\u914D\u7F6E\u5BF9\u5E94\u591A\u4E2A\u914D\u7F6E\u9879)\ntype ConfigNode  struct {\n    Host             string        // \u5730\u5740\n    Port             string        // \u7AEF\u53E3\n    User             string        // \u8D26\u53F7\n    Pass             string        // \u5BC6\u7801\n    Name             string        // \u6570\u636E\u5E93\u540D\u79F0\n    Type             string        // \u6570\u636E\u5E93\u7C7B\u578B\uFF1Amysql, sqlite, mssql, pgsql, oracle\n    Link             string        // (\u53EF\u9009)\u81EA\u5B9A\u4E49\u94FE\u63A5\u4FE1\u606F\uFF0C\u5F53\u8BE5\u5B57\u6BB5\u88AB\u8BBE\u7F6E\u503C\u65F6\uFF0C\u4EE5\u4E0A\u94FE\u63A5\u5B57\u6BB5(Host,Port,User,Pass,Name)\u5C06\u5931\u6548(\u8BE5\u5B57\u6BB5\u662F\u4E00\u4E2A\u6269\u5C55\u529F\u80FD)\n    Extra            string        // (\u53EF\u9009)\u4E0D\u540C\u6570\u636E\u5E93\u7684\u989D\u5916\u7279\u6027\u914D\u7F6E\uFF0C\u7531\u5E95\u5C42\u6570\u636E\u5E93driver\u5B9A\u4E49\n    Role             string        // (\u53EF\u9009\uFF0C\u9ED8\u8BA4\u4E3Amaster)\u6570\u636E\u5E93\u7684\u89D2\u8272\uFF0C\u7528\u4E8E\u4E3B\u4ECE\u64CD\u4F5C\u5206\u79BB\uFF0C\u81F3\u5C11\u9700\u8981\u6709\u4E00\u4E2Amaster\uFF0C\u53C2\u6570\u503C\uFF1Amaster, slave\n    Debug            bool          // (\u53EF\u9009)\u5F00\u542F\u8C03\u8BD5\u6A21\u5F0F\n    Charset          string        // (\u53EF\u9009\uFF0C\u9ED8\u8BA4\u4E3A utf8)\u7F16\u7801\uFF0C\u9ED8\u8BA4\u4E3A utf8\n    Prefix           string        // (\u53EF\u9009)\u8868\u540D\u524D\u7F00\n    Weight           int           // (\u53EF\u9009)\u7528\u4E8E\u8D1F\u8F7D\u5747\u8861\u7684\u6743\u91CD\u8BA1\u7B97\uFF0C\u5F53\u96C6\u7FA4\u4E2D\u53EA\u6709\u4E00\u4E2A\u8282\u70B9\u65F6\uFF0C\u6743\u91CD\u6CA1\u6709\u4EFB\u4F55\u610F\u4E49\n    MaxIdleConnCount int           // (\u53EF\u9009)\u8FDE\u63A5\u6C60\u6700\u5927\u95F2\u7F6E\u7684\u8FDE\u63A5\u6570\n    MaxOpenConnCount int           // (\u53EF\u9009)\u8FDE\u63A5\u6C60\u6700\u5927\u6253\u5F00\u7684\u8FDE\u63A5\u6570\n    MaxConnLifetime  time.Duration // (\u53EF\u9009\uFF0C\u5355\u4F4D\u79D2)\u8FDE\u63A5\u5BF9\u8C61\u53EF\u91CD\u590D\u4F7F\u7528\u7684\u65F6\u95F4\u957F\u5EA6\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u7279\u522B\u8BF4\u660E\uFF0C ",(0,s.jsx)(e.code,{children:"gdb"})," \u7684\u914D\u7F6E\u7BA1\u7406\u6700\u5927\u7684 ",(0,s.jsx)(e.strong,{children:"\u7279\u70B9"})," \u662F\uFF0C\uFF08\u540C\u4E00\u8FDB\u7A0B\u4E2D\uFF09\u6240\u6709\u7684\u6570\u636E\u5E93\u96C6\u7FA4\u4FE1\u606F\u90FD\u4F7F\u7528\u540C\u4E00\u4E2A\u914D\u7F6E\u7BA1\u7406\u6A21\u5757\u8FDB\u884C\u7EDF\u4E00\u7EF4\u62A4\uFF0C ",(0,s.jsx)(e.strong,{children:"\u4E0D\u540C\u4E1A\u52A1\u7684\u6570\u636E\u5E93\u96C6\u7FA4\u914D\u7F6E\u4F7F\u7528\u4E0D\u540C\u7684\u5206\u7EC4\u540D\u79F0"})," \u8FDB\u884C\u914D\u7F6E\u548C\u83B7\u53D6\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u914D\u7F6E\u65B9\u6CD5",children:"\u914D\u7F6E\u65B9\u6CD5"}),"\n",(0,s.jsxs)(e.p,{children:["\u8FD9\u662F\u539F\u751F\u8C03\u7528 ",(0,s.jsx)(e.code,{children:"gdb"})," \u6A21\u5757\u6765\u914D\u7F6E\u7BA1\u7406\u6570\u636E\u5E93\u3002\u5982\u679C\u5F00\u53D1\u8005\u60F3\u8981\u81EA\u884C\u63A7\u5236\u6570\u636E\u5E93\u914D\u7F6E\u7BA1\u7406\u53EF\u4EE5\u53C2\u8003\u4EE5\u4E0B\u65B9\u6CD5\u3002\u82E5\u65E0\u9700\u8981\u53EF\u5FFD\u7565\u8BE5\u7AE0\u8282\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u63A5\u53E3\u6587\u6863\uFF1A ",(0,s.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"// \u6DFB\u52A0\u4E00\u4E2A\u6570\u636E\u5E93\u8282\u70B9\u5230\u6307\u5B9A\u7684\u5206\u7EC4\u4E2D\nfunc AddConfigNode(group string, node ConfigNode)\n// \u6DFB\u52A0\u4E00\u4E2A\u914D\u7F6E\u5206\u7EC4\u5230\u6570\u636E\u5E93\u914D\u7F6E\u7BA1\u7406\u4E2D(\u540C\u540D\u8986\u76D6)\nfunc AddConfigGroup(group string, nodes ConfigGroup)\n\n// \u6DFB\u52A0\u4E00\u4E2A\u6570\u636E\u5E93\u8282\u70B9\u5230\u9ED8\u8BA4\u7684\u5206\u7EC4\u4E2D(\u9ED8\u8BA4\u4E3Adefault\uFF0C\u53EF\u4FEE\u6539)\nfunc AddDefaultConfigNode(node ConfigNode)\n// \u6DFB\u52A0\u4E00\u4E2A\u914D\u7F6E\u5206\u7EC4\u5230\u6570\u636E\u5E93\u914D\u7F6E\u7BA1\u7406\u4E2D(\u9ED8\u8BA4\u5206\u7EC4\u4E3Adefault\uFF0C\u53EF\u4FEE\u6539)\nfunc AddDefaultConfigGroup(nodes ConfigGroup)\n\n// \u8BBE\u7F6E\u9ED8\u8BA4\u7684\u5206\u7EC4\u540D\u79F0\uFF0C\u83B7\u53D6\u9ED8\u8BA4\u6570\u636E\u5E93\u5BF9\u8C61\u65F6\u5C06\u4F1A\u81EA\u52A8\u8BFB\u53D6\u8BE5\u5206\u7EC4\u914D\u7F6E\nfunc SetDefaultGroup(groupName string)\n\n// \u8BBE\u7F6E\u6570\u636E\u5E93\u914D\u7F6E\u4E3A\u5B9A\u4E49\u7684\u914D\u7F6E\u4FE1\u606F\uFF0C\u4F1A\u5C06\u539F\u6709\u914D\u7F6E\u8986\u76D6\nfunc SetConfig(c Config)\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u9ED8\u8BA4\u5206\u7EC4\u8868\u793A\uFF0C\u5982\u679C\u83B7\u53D6\u6570\u636E\u5E93\u5BF9\u8C61\u65F6\u4E0D\u6307\u5B9A\u914D\u7F6E\u5206\u7EC4\u540D\u79F0\uFF0C\u90A3\u4E48 ",(0,s.jsx)(e.code,{children:"gdb"})," \u9ED8\u8BA4\u8BFB\u53D6\u7684\u914D\u7F6E\u5206\u7EC4\u3002\u4F8B\u5982\uFF1A ",(0,s.jsx)(e.code,{children:"gdb.NewByGroup()"})," \u53EF\u83B7\u53D6\u4E00\u4E2A\u9ED8\u8BA4\u5206\u7EC4\u7684\u6570\u636E\u5E93\u5BF9\u8C61\u3002\u7B80\u5355\u7684\u505A\u6CD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(e.code,{children:"gdb"})," \u5305\u7684 ",(0,s.jsx)(e.code,{children:"SetConfig"})," \u914D\u7F6E\u7BA1\u7406\u65B9\u6CD5\u8FDB\u884C\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u5E93\u5168\u5C40\u914D\u7F6E\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'gdb.SetConfig(gdb.Config {\n    "default" : gdb.ConfigGroup {\n        gdb.ConfigNode {\n            Host     : "192.168.1.100",\n            Port     : "3306",\n            User     : "root",\n            Pass     : "123456",\n            Name     : "test",\n            Type     : "mysql",\n            Role     : "master",\n            Weight   : 100,\n        },\n        gdb.ConfigNode {\n            Host     : "192.168.1.101",\n            Port     : "3306",\n            User     : "root",\n            Pass     : "123456",\n            Name     : "test",\n            Type     : "mysql",\n            Role     : "slave",\n            Weight   : 100,\n        },\n    },\n    "user-center" : gdb.ConfigGroup {\n        gdb.ConfigNode {\n            Host     : "192.168.1.110",\n            Port     : "3306",\n            User     : "root",\n            Pass     : "123456",\n            Name     : "test",\n            Type     : "mysql",\n            Role     : "master",\n            Weight   : 100,\n        },\n    },\n})\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u968F\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(e.code,{children:'gdb.NewByGroup("\u6570\u636E\u5E93\u5206\u7EC4\u540D\u79F0")'})," \u6765\u83B7\u53D6\u4E00\u4E2A\u6570\u636E\u5E93\u64CD\u4F5C\u5BF9\u8C61\u3002\u8BE5\u5BF9\u8C61\u7528\u4E8E\u540E\u7EED\u7684\u6570\u636E\u5E93\u4E00\u7CFB\u5217\u65B9\u6CD5/\u94FE\u5F0F\u64CD\u4F5C\u3002"]})]})}function a(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(g,{...n})}):g(n)}},250065:function(n,e,o){o.d(e,{Z:function(){return d},a:function(){return t}});var i=o(667294);let s={},r=i.createContext(s);function t(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);
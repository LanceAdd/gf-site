"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["66300"],{166256:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>p,assets:()=>i,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u6700\u4F73\u5B9E\u8DF5/\u5229\u7528\u6307\u9488\u5C5E\u6027\u548Cdo\u5BF9\u8C61\u5B9E\u73B0\u7075\u6D3B\u7684\u4FEE\u6539\u63A5\u53E3","title":"\u5229\u7528\u6307\u9488\u5C5E\u6027\u548Cdo\u5BF9\u8C61\u5B9E\u73B0\u7075\u6D3B\u7684\u4FEE\u6539\u63A5\u53E3","description":"\u5229\u7528GoFrame\u6846\u67B6\u4E2D\u7684\u6307\u9488\u548Cdo\u5BF9\u8C61\u5B9E\u73B0\u7075\u6D3B\u7684\u4FEE\u6539\u63A5\u53E3API\u3002\u901A\u8FC7\u6307\u9488\u7C7B\u578B\u7684\u5C5E\u6027\u53C2\u6570\u548Cdo\u5BF9\u8C61\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0\u7528\u6237\u4FE1\u606F\u7684\u4FEE\u6539\u64CD\u4F5C\uFF0C\u5305\u62EC\u5BC6\u7801\u3001\u6635\u79F0\u3001\u72B6\u6001\u7B49\u5B57\u6BB5\u7684\u66F4\u65B0\uFF0C\u4ECE\u800C\u6709\u6548\u7B80\u5316\u6570\u636E\u5E93\u66F4\u65B0\u7684\u590D\u6742\u5EA6\u3002","source":"@site/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u6700\u4F73\u5B9E\u8DF5/\u5229\u7528\u6307\u9488\u5C5E\u6027\u548Cdo\u5BF9\u8C61\u5B9E\u73B0\u7075\u6D3B\u7684\u4FEE\u6539\u63A5\u53E3.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u6700\u4F73\u5B9E\u8DF5","slug":"/docs/core/gdb-practice-using-pointer-and-do-for-update-api","permalink":"/docs/core/gdb-practice-using-pointer-and-do-for-update-api","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u6700\u4F73\u5B9E\u8DF5/\u5229\u7528\u6307\u9488\u5C5E\u6027\u548Cdo\u5BF9\u8C61\u5B9E\u73B0\u7075\u6D3B\u7684\u4FEE\u6539\u63A5\u53E3.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1735011400000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/core/gdb-practice-using-pointer-and-do-for-update-api","title":"\u5229\u7528\u6307\u9488\u5C5E\u6027\u548Cdo\u5BF9\u8C61\u5B9E\u73B0\u7075\u6D3B\u7684\u4FEE\u6539\u63A5\u53E3","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","do\u5BF9\u8C61","\u6307\u9488","API","\u7528\u6237\u4FE1\u606F\u4FEE\u6539","\u6570\u636E\u5E93\u66F4\u65B0","\u8BF7\u6C42\u53C2\u6570","\u4E1A\u52A1\u903B\u8F91","\u81EA\u52A8\u8FC7\u6EE4"],"description":"\u5229\u7528GoFrame\u6846\u67B6\u4E2D\u7684\u6307\u9488\u548Cdo\u5BF9\u8C61\u5B9E\u73B0\u7075\u6D3B\u7684\u4FEE\u6539\u63A5\u53E3API\u3002\u901A\u8FC7\u6307\u9488\u7C7B\u578B\u7684\u5C5E\u6027\u53C2\u6570\u548Cdo\u5BF9\u8C61\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0\u7528\u6237\u4FE1\u606F\u7684\u4FEE\u6539\u64CD\u4F5C\uFF0C\u5305\u62EC\u5BC6\u7801\u3001\u6635\u79F0\u3001\u72B6\u6001\u7B49\u5B57\u6BB5\u7684\u66F4\u65B0\uFF0C\u4ECE\u800C\u6709\u6548\u7B80\u5316\u6570\u636E\u5E93\u66F4\u65B0\u7684\u590D\u6742\u5EA6\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u6700\u4F73\u5B9E\u8DF5","permalink":"/docs/core/gdb-practice"},"next":{"title":"\u590D\u6742\u7C7B\u578B\u5C3D\u91CF\u4F7F\u7528json\u5B58\u50A8\uFF0C\u4FBF\u4E8EScan\u5230\u5BF9\u8C61\u65F6\u81EA\u52A8\u5316\u8F6C\u6362\uFF0C\u907F\u514D\u81EA\u5B9A\u4E49\u89E3\u6790","permalink":"/docs/core/gdb-practice-using-json-for-complicated-field"}}'),d=r("785893"),s=r("250065");let o={slug:"/docs/core/gdb-practice-using-pointer-and-do-for-update-api",title:"\u5229\u7528\u6307\u9488\u5C5E\u6027\u548Cdo\u5BF9\u8C61\u5B9E\u73B0\u7075\u6D3B\u7684\u4FEE\u6539\u63A5\u53E3",sidebar_position:0,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","do\u5BF9\u8C61","\u6307\u9488","API","\u7528\u6237\u4FE1\u606F\u4FEE\u6539","\u6570\u636E\u5E93\u66F4\u65B0","\u8BF7\u6C42\u53C2\u6570","\u4E1A\u52A1\u903B\u8F91","\u81EA\u52A8\u8FC7\u6EE4"],description:"\u5229\u7528GoFrame\u6846\u67B6\u4E2D\u7684\u6307\u9488\u548Cdo\u5BF9\u8C61\u5B9E\u73B0\u7075\u6D3B\u7684\u4FEE\u6539\u63A5\u53E3API\u3002\u901A\u8FC7\u6307\u9488\u7C7B\u578B\u7684\u5C5E\u6027\u53C2\u6570\u548Cdo\u5BF9\u8C61\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0\u7528\u6237\u4FE1\u606F\u7684\u4FEE\u6539\u64CD\u4F5C\uFF0C\u5305\u62EC\u5BC6\u7801\u3001\u6635\u79F0\u3001\u72B6\u6001\u7B49\u5B57\u6BB5\u7684\u66F4\u65B0\uFF0C\u4ECE\u800C\u6709\u6548\u7B80\u5316\u6570\u636E\u5E93\u66F4\u65B0\u7684\u590D\u6742\u5EA6\u3002"},a=void 0,i={},c=[{value:"\u6570\u636E\u7ED3\u6784",id:"\u6570\u636E\u7ED3\u6784",level:2},{value:"\u8BF7\u6C42API\u5B9A\u4E49",id:"\u8BF7\u6C42api\u5B9A\u4E49",level:2},{value:"\u4E1A\u52A1\u903B\u8F91\u5B9E\u73B0",id:"\u4E1A\u52A1\u903B\u8F91\u5B9E\u73B0",level:2}];function l(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["\u5927\u5BB6\u90FD\u77E5\u9053\u6846\u67B6\u81EA\u5E26\u7684\u5F00\u53D1\u5DE5\u5177\u53EF\u4EE5\u751F\u6210 ",(0,d.jsx)(n.code,{children:"do"})," \u5BF9\u8C61\u4EE3\u7801\uFF0C\u8BE5 ",(0,d.jsx)(n.code,{children:"do"})," \u5BF9\u8C61\u4E3B\u8981\u7528\u4E8E\u67E5\u8BE2\u3001\u4FEE\u6539\u3001\u5199\u5165\u7B49\u64CD\u4F5C\u65F6\u5BF9\u64CD\u4F5C\u5B57\u6BB5\u7684\u81EA\u52A8 ",(0,d.jsx)(n.code,{children:"nil"})," \u8FC7\u6EE4\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4ECA\u5929\u6559\u7ED9\u5927\u5BB6\u4E00\u4E2A\u65B0\u7684\u73A9\u6CD5\uFF0C\u901A\u8FC7\u6307\u9488\u7ED3\u5408 ",(0,d.jsx)(n.code,{children:"do"})," \u5BF9\u8C61\u5FEB\u901F\u5B9E\u73B0\u7075\u6D3B\u3001\u4FBF\u6377\u7684\u4FEE\u6539\u64CD\u4F5C ",(0,d.jsx)(n.code,{children:"API"})," \u5B9E\u73B0\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u6570\u636E\u7ED3\u6784",children:"\u6570\u636E\u7ED3\u6784"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u662F\u6211\u4EEC\u4F7F\u7528\u7684\u7528\u6237\u8868\u6570\u636E\u7ED3\u6784\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `user`(\n    `id`        int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '\u7528\u6237ID',\n    `passport`  varchar(32) NOT NULL COMMENT '\u8D26\u53F7',\n    `password`  varchar(32) NOT NULL COMMENT '\u5BC6\u7801',\n    `nickname`  varchar(32) NOT NULL COMMENT '\u6635\u79F0',\n    `status`    varchar(32) NOT NULL COMMENT '\u72B6\u6001',\n    `brief`     varchar(512) NOT NULL COMMENT '\u5907\u6CE8\u4FE1\u606F',\n    `create_at` datetime DEFAULT NULL COMMENT '\u521B\u5EFA\u65F6\u95F4',\n    `update_at` datetime DEFAULT NULL COMMENT '\u4FEE\u6539\u65F6\u95F4',\n    PRIMARY KEY (`id`),\n    UNIQUE KEY `uniq_passport` (`passport`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5176\u4E2D\u7684\u7528\u6237\u72B6\u6001\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86\u5355\u72EC\u7684\u7C7B\u578B\u5B9A\u4E49\uFF0C\u7528\u4EE5\u5B9E\u73B0\u679A\u4E3E\u503C\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'type Status string\n\nconst (\n    StatusEnabled  Status = "enabled"\n    StatusDisabled Status = "disabled"\n)\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"gf gen dao"})," \u547D\u4EE4\uFF0C\u6211\u4EEC\u81EA\u52A8\u751F\u6210\u7684 ",(0,d.jsx)(n.code,{children:"do"})," \u5BF9\u8C61\u5982\u4E0B\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'type User struct {\n    g.Meta    `table:"user" orm:"do:true"`\n    Id        interface{}\n    Passport  interface{}\n    Password  interface{}\n    Nickname  interface{}\n    Status    interface{}\n    Brief     interface{}\n    CreatedAt interface{}\n    UpdatedAt interface{}\n}\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u8BF7\u6C42api\u5B9A\u4E49",children:"\u8BF7\u6C42API\u5B9A\u4E49"}),"\n",(0,d.jsxs)(n.p,{children:["\u6211\u4EEC\u6765\u5B9E\u73B0\u4E00\u4E2A\u7528\u6237\u4FE1\u606F\u4FEE\u6539\u7684 ",(0,d.jsx)(n.code,{children:"API"})," \u63A5\u53E3\uFF0C\u8FD9\u662F\u4E00\u4E2A\u8FD0\u7EF4\u7BA1\u7406\u63A5\u53E3\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7528\u6237\u8D26\u53F7\u540D\u79F0\u6765\u4FEE\u6539\u7528\u6237\u4FE1\u606F\u3002\u8BE5 ",(0,d.jsx)(n.code,{children:"API"})," \u7684\u5B9A\u4E49\u5982\u4E0B\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'type UpdateReq struct {\n    g.Meta   `path:"/user/{Id}" method:"post" summary:"\u4FEE\u6539\u7528\u6237\u4FE1\u606F"`\n    Passport string  `v:"required" dc:"\u7528\u6237\u8D26\u53F7"`\n    Password *string `dc:"\u4FEE\u6539\u7528\u6237\u5BC6\u7801"`\n    Nickname *string `dc:"\u4FEE\u6539\u7528\u6237\u6635\u79F0"`\n    Status   *Status `dc:"\u4FEE\u6539\u7528\u6237\u72B6\u6001"`\n    Brief    *string `dc:"\u4FEE\u6539\u7528\u6237\u63CF\u8FF0"`\n}\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u5176\u4E2D\uFF0C\u7528\u6237\u7684\u53EF\u4FEE\u6539\u4FE1\u606F\u4E3A\u5BC6\u7801\u3001\u6635\u79F0\u3001\u72B6\u6001\u548C\u63CF\u8FF0\uFF0C\u53EF\u80FD\u540C\u65F6\u4FEE\u6539\u4E00\u9879\u6216\u8005\u591A\u9879\u3002\u8FD9\u91CC\u4F7F\u7528\u4E86 ",(0,d.jsx)(n.strong,{children:"\u6307\u9488\u7C7B\u578B"})," \u7684\u5C5E\u6027\u53C2\u6570\uFF0C ",(0,d.jsx)(n.strong,{children:"\u7528\u4E8E\u5B9E\u73B0\uFF1A\u5F53\u4F20\u9012\u8BE5\u53C2\u6570\u65F6\u6267\u884C\u4FEE\u6539\uFF0C\u4E0D\u4F20\u9012\u65F6\u4E0D\u4FEE\u6539\u3002"})]}),"\n",(0,d.jsx)(n.h2,{id:"\u4E1A\u52A1\u903B\u8F91\u5B9E\u73B0",children:"\u4E1A\u52A1\u903B\u8F91\u5B9E\u73B0"}),"\n",(0,d.jsxs)(n.p,{children:["\u4E3A\u4E86\u7B80\u5316\u5B9E\u4F8B\uFF0C\u6211\u4EEC\u8FD9\u91CC\u76F4\u63A5\u5728\u63A7\u5236\u5668\u4E2D\u5C06\u6307\u9488\u53C2\u6570\u4F20\u9012\u7ED9 ",(0,d.jsx)(n.code,{children:"do"})," \u5BF9\u8C61\u3002\u6211\u4EEC\u77E5\u9053\u5F53\u8C03\u7528\u7AEF\u6CA1\u6709\u4F20\u9012\u8BE5\u53C2\u6570\u65F6\uFF0C\u8BE5\u53C2\u6570\u4E3A ",(0,d.jsx)(n.code,{children:"nil"}),"\uFF0C\u90A3\u4E48\u4F20\u9012\u7ED9 ",(0,d.jsx)(n.code,{children:"do"})," \u5BF9\u8C61\u7684\u5B57\u6BB5\u65F6\uFF0C\u4ECD\u7136\u662F ",(0,d.jsx)(n.code,{children:"nil"}),"\uFF0C\u8FD9\u4E2A\u65F6\u5019\u6267\u884C\u6570\u636E\u5E93\u66F4\u65B0\u64CD\u4F5C\u65F6\uFF0C ",(0,d.jsx)(n.code,{children:"do"})," \u5BF9\u8C61\u4E2D\u7684 ",(0,d.jsx)(n.code,{children:"nil"})," \u5B57\u6BB5\u5C06\u4F1A\u88AB\u81EA\u52A8\u8FC7\u6EE4\u6389\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:"func (c *Controller) Update(ctx context.Context, req *v1.UpdateReq) (res *v1.UpdateRes, err error) {\n    _, err = dao.User.Ctx(ctx).Data(do.User{\n        Password: req.Password,\n        Nickname: req.Nickname,\n        Status:   req.Status,\n        Brief:    req.Brief,\n    }).Where(do.User{\n        Passport: req.Passport,\n    }).Update()\n    return\n}\n"})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return o}});var t=r(667294);let d={},s=t.createContext(d);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
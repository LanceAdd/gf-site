"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["11376"],{546889:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>o,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>a});var s=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406/ORM\u7ED3\u679C\u5904\u7406-\u7ED3\u679C\u7C7B\u578B","title":"ORM Result - Types","description":"Several result types for ORM result processing in the GoFrame framework, including the data structure definitions for Value, Record, and Result. Through examples, it details how to convert database table records to struct objects and the application of Result/Record types in specific field retrieval scenarios.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406/ORM\u7ED3\u679C\u5904\u7406-\u7ED3\u679C\u7C7B\u578B.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406","slug":"/docs/core/gdb-result-types","permalink":"/en/docs/core/gdb-result-types","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406/ORM\u7ED3\u679C\u5904\u7406-\u7ED3\u679C\u7C7B\u578B.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732541616000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/core/gdb-result-types","title":"ORM Result - Types","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","Data Structure","ORM","Result Types","Record","Result","gdb","Database","Go Language","Data Handling"],"description":"Several result types for ORM result processing in the GoFrame framework, including the data structure definitions for Value, Record, and Result. Through examples, it details how to convert database table records to struct objects and the application of Result/Record types in specific field retrieval scenarios."},"sidebar":"mainSidebar","previous":{"title":"ORM - Result Handling","permalink":"/en/docs/core/gdb-result"},"next":{"title":"ORM Result - Empty Check","permalink":"/en/docs/core/gdb-result-empty-check"}}'),r=n("785893"),i=n("250065");let a={slug:"/docs/core/gdb-result-types",title:"ORM Result - Types",sidebar_position:0,hide_title:!0,keywords:["GoFrame","Data Structure","ORM","Result Types","Record","Result","gdb","Database","Go Language","Data Handling"],description:"Several result types for ORM result processing in the GoFrame framework, including the data structure definitions for Value, Record, and Result. Through examples, it details how to convert database table records to struct objects and the application of Result/Record types in specific field retrieval scenarios."},o=void 0,c={},d=[{value:"1. Data Structures",id:"1-data-structures",level:2},{value:"2. <code>Record</code> Data Record",id:"2-record-data-record",level:2},{value:"3. <code>Result</code> Data Collection",id:"3-result-data-collection",level:2}];function l(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"1-data-structures",children:"1. Data Structures"}),"\n",(0,r.jsx)(t.p,{children:"The data structures of the query results are as follows:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"type Value  = *gvar.Var              // Returns table record value\ntype Record   map[string]Value       // Returns table record key-value pairs\ntype Result   []Record               // Returns a list of table records\n"})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Value/Record/Result"})," are result data types for ORM operations."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Result"})," represents ",(0,r.jsx)(t.strong,{children:"a list of table records"}),", ",(0,r.jsx)(t.code,{children:"Record"})," represents ",(0,r.jsx)(t.strong,{children:"a single table record"}),", and ",(0,r.jsx)(t.code,{children:"Value"})," represents ",(0,r.jsx)(t.strong,{children:"a single key-value pair"})," in a record."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Value"})," is an alias type for ",(0,r.jsx)(t.code,{children:"*gvar.Var"}),", a runtime generic type to support different field types in database tables, facilitating subsequent data type conversion."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"For example:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(764037).Z+"",width:"2268",height:"452"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(377183).Z+"",width:"2212",height:"440"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(106567).Z+"",width:"2204",height:"448"})}),"\n",(0,r.jsxs)(t.h2,{id:"2-record-data-record",children:["2. ",(0,r.jsx)(t.code,{children:"Record"})," Data Record"]}),"\n",(0,r.jsxs)(t.p,{children:["API documentation: ",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"gdb"})," provides a high degree of flexibility and simplicity for table record operations, supporting not only access/manipulation of table records in the form of ",(0,r.jsx)(t.code,{children:"map"})," but also converting them to ",(0,r.jsx)(t.code,{children:"struct"})," for processing. Here, we will demonstrate this feature with a simple example."]}),"\n",(0,r.jsx)(t.p,{children:"First, our user table structure is like this (a sample table for simple design):"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `user` (\n  `uid` int(10) unsigned NOT NULL AUTO_INCREMENT,\n  `name` varchar(30) NOT NULL DEFAULT '' COMMENT 'Nickname',\n  `site` varchar(255) NOT NULL DEFAULT '' COMMENT 'Homepage',\n  PRIMARY KEY (`uid`)\n) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;\n"})}),"\n",(0,r.jsx)(t.p,{children:"Next, our table data is as follows:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"uid  name   site\n1    john   https://goframe.org\n"})}),"\n",(0,r.jsx)(t.p,{children:"Finally, our example program is as follows:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\ntype User struct {\n    Uid  int\n    Name string\n}\n\nfunc main() {\n    var (\n        user *User\n        ctx  = gctx.New()\n    )\n    err := g.DB().Model("user").Where("uid", 1).Scan(&user)\n    if err != nil {\n        g.Log().Header(false).Fatal(ctx, err)\n    }\n    if user != nil {\n        g.Log().Header(false).Print(ctx, user)\n    }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"After execution, the output is:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{"Uid":1,"Name":"john"}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Here, we define a custom ",(0,r.jsx)(t.code,{children:"struct"})," containing only ",(0,r.jsx)(t.code,{children:"Uid"})," and ",(0,r.jsx)(t.code,{children:"Name"})," properties. As you can see, its properties do not match the fields of the data table, which is one of the flexible features of ",(0,r.jsx)(t.code,{children:"ORM"}),": supporting specified attribute retrieval."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"gdb.Model.Scan"})," method can convert the queried records into ",(0,r.jsx)(t.code,{children:"struct"})," objects or arrays of ",(0,r.jsx)(t.code,{children:"struct"})," objects. Since the parameter passed here is ",(0,r.jsx)(t.code,{children:"&user"})," i.e., ",(0,r.jsx)(t.code,{children:"**User"})," type, it will be converted into a ",(0,r.jsx)(t.strong,{children:"struct object"}),". If a ",(0,r.jsx)(t.code,{children:"[]*User"})," type parameter is passed, it will be converted into a ",(0,r.jsx)(t.strong,{children:"struct array"}),". Please see subsequent examples for more. For a detailed introduction to the method, please refer to the chaining operations section."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Attribute Field Mapping Rules:"})}),"\n",(0,r.jsxs)(t.p,{children:["Note that the key names in ",(0,r.jsx)(t.code,{children:"map"})," are ",(0,r.jsx)(t.code,{children:"uid,name,site"}),", while the attributes in ",(0,r.jsx)(t.code,{children:"struct"})," are ",(0,r.jsx)(t.code,{children:"Uid,Name"}),". How are they mapped? There are a few simple rules:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["The matching attribute in ",(0,r.jsx)(t.code,{children:"struct"})," must be ",(0,r.jsx)(t.code,{children:"public"})," (starting with a capital letter)."]}),"\n",(0,r.jsxs)(t.li,{children:["Key names in the results will automatically match ",(0,r.jsx)(t.code,{children:"struct"})," attributes in a ",(0,r.jsx)(t.strong,{children:"case-insensitive"}),", and ",(0,r.jsxs)(t.strong,{children:["ignoring ",(0,r.jsx)(t.code,{children:"-/_/space"})," symbols"]})," manner."]}),"\n",(0,r.jsx)(t.li,{children:"If the match is successful, the key value is assigned to the attribute. If it cannot be matched, the key value is ignored."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Here are a few matching examples:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-plaintext",children:"Key Name      Struct Attribute     Match\nname          Name                 match\nEmail         Email                match\nnickname      NickName             match\nNICKNAME      NickName             match\nNick-Name     NickName             match\nnick_name     NickName             match\nnick_name     Nick_Name            match\nNickName      Nick_Name            match\nNick-Name     Nick_Name            match\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["The conversion from a database result set to ",(0,r.jsx)(t.code,{children:"struct"})," relies on the ",(0,r.jsx)(t.code,{children:"gconv.Struct"})," method. Therefore, if you want to achieve ",(0,r.jsx)(t.strong,{children:"custom attribute conversion"}),", and for more detailed mapping rules, please refer to the section on ",(0,r.jsx)(t.a,{href:"/en/docs/core/gconv-struct",children:"Type Conversion - Struct"}),"."]})}),"\n",(0,r.jsxs)(t.h2,{id:"3-result-data-collection",children:["3. ",(0,r.jsx)(t.code,{children:"Result"})," Data Collection"]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"Result/Record"})," data types, based on the requirement to manipulate the result set, often need to use ",(0,r.jsx)(t.strong,{children:"specific fields"})," in the records as keys for data retrieval. They include multiple methods for converting to ",(0,r.jsx)(t.code,{children:"Map/List"}),", as well as common conversions to ",(0,r.jsx)(t.code,{children:"JSON/XML"})," data structures."]}),"\n",(0,r.jsxs)(t.p,{children:["API documentation: ",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb"})]}),"\n",(0,r.jsxs)(t.p,{children:["Due to the simplicity of the methods, there are no examples here. However, pay attention to two frequently used methods: ",(0,r.jsx)(t.code,{children:"Record.Map"})," and ",(0,r.jsx)(t.code,{children:"Result.List"}),", which are used to convert the ",(0,r.jsx)(t.code,{children:"ORM"})," query result information into data types suitable for display. Since the field values of the result set are natively of ",(0,r.jsx)(t.code,{children:"[]byte"})," type, although a new ",(0,r.jsx)(t.code,{children:"Value"})," type has been encapsulated and provides dozens of common type conversion methods (for more, please read the section on ",(0,r.jsx)(t.a,{href:"/en/docs/components/container-gvar",children:"Generic"}),"), most often we need to directly return the result ",(0,r.jsx)(t.code,{children:"Result"})," or ",(0,r.jsx)(t.code,{children:"Record"})," as ",(0,r.jsx)(t.code,{children:"json"})," or ",(0,r.jsx)(t.code,{children:"xml"})," data structures, requiring conversion."]}),"\n",(0,r.jsx)(t.p,{children:"Usage example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "database/sql"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\ntype User struct {\n    Uid  int\n    Name string\n    Site string\n}\n\nfunc main() {\n    var (\n        user []*User\n        ctx  = gctx.New()\n    )\n    err := g.DB().Model("user").Where("uid", 1).Scan(&user)\n    if err != nil && err != sql.ErrNoRows {\n        g.Log().Header(false).Fatal(ctx, err)\n    }\n    if user != nil {\n        g.Log().Header(false).Print(ctx, user)\n    }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"After execution, the output is:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'[{"Uid":1,"Name":"john","Site":"https://goframe.org"}]\n'})})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},377183:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/73f857180655a5dc19eb8deb79d3a774-23eac3296f477332bac92111bfa42db2.png"},764037:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/c4af671f6f43d161fc776afdffaaa047-cedc04da064207c474c509e73e20a187.png"},106567:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/d8aedba99def08d9ad5e244dd0bde66a-202fea008f89960ecfef39c6805ee9a7.png"},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var s=n(667294);let r={},i=s.createContext(r);function a(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
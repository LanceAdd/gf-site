"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["16283"],{242067:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>r});var i=JSON.parse('{"id":"docs/\u5F00\u53D1\u5DE5\u5177/\u4EE3\u7801\u751F\u6210-gen/\u6570\u636E\u8868PB-gen pbentity","title":"\u6570\u636E\u8868PB-gen pbentity","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u7684\u547D\u4EE4\u884C\u5DE5\u5177gf\u6765\u6839\u636E\u6570\u636E\u5E93\u8868\u751F\u6210proto\u6570\u636E\u7ED3\u6784\u6587\u4EF6pbentity\u3002\u5305\u62EC\u547D\u4EE4\u4F7F\u7528\u65B9\u6CD5\u3001\u9009\u9879\u914D\u7F6E\u53CA\u5176\u8BF4\u660E\uFF0C\u4EE5\u53CA\u4E0Egen dao\u6A21\u5757\u4E2D\u751F\u6210\u7684entity\u6587\u4EF6\u7684\u533A\u522B\u3002\u9002\u7528\u4E8EHTTP\u548CGRPC\u670D\u52A1\u7684\u6570\u636E\u5B9E\u4F53\u7ED3\u6784\u751F\u6210\uFF0C\u652F\u6301\u591A\u79CD\u6570\u636E\u5E93\u7684\u751F\u6210\u89C4\u5219\u914D\u7F6E\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u5F00\u53D1\u5DE5\u5177/\u4EE3\u7801\u751F\u6210-gen/\u6570\u636E\u8868PB-gen pbentity.md","sourceDirName":"docs/\u5F00\u53D1\u5DE5\u5177/\u4EE3\u7801\u751F\u6210-gen","slug":"/docs/cli/gen-pbentity","permalink":"/2.7.x/docs/cli/gen-pbentity","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u5F00\u53D1\u5DE5\u5177/\u4EE3\u7801\u751F\u6210-gen/\u6570\u636E\u8868PB-gen pbentity.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731511511000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/cli/gen-pbentity","title":"\u6570\u636E\u8868PB-gen pbentity","sidebar_position":5,"hide_title":true,"keywords":["GoFrame","Golang\u5B9E\u4F53\u5BF9\u8C61","proto\u6570\u636E\u7ED3\u6784","GRPC\u670D\u52A1","\u6570\u636E\u5E93\u914D\u7F6E","GF\u547D\u4EE4\u884C\u5DE5\u5177","\u6570\u636E\u8868\u751F\u6210","entity\u6587\u4EF6\u751F\u6210","pbentity","\u547D\u540D\u683C\u5F0F"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u7684\u547D\u4EE4\u884C\u5DE5\u5177gf\u6765\u6839\u636E\u6570\u636E\u5E93\u8868\u751F\u6210proto\u6570\u636E\u7ED3\u6784\u6587\u4EF6pbentity\u3002\u5305\u62EC\u547D\u4EE4\u4F7F\u7528\u65B9\u6CD5\u3001\u9009\u9879\u914D\u7F6E\u53CA\u5176\u8BF4\u660E\uFF0C\u4EE5\u53CA\u4E0Egen dao\u6A21\u5757\u4E2D\u751F\u6210\u7684entity\u6587\u4EF6\u7684\u533A\u522B\u3002\u9002\u7528\u4E8EHTTP\u548CGRPC\u670D\u52A1\u7684\u6570\u636E\u5B9E\u4F53\u7ED3\u6784\u751F\u6210\uFF0C\u652F\u6301\u591A\u79CD\u6570\u636E\u5E93\u7684\u751F\u6210\u89C4\u5219\u914D\u7F6E\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u534F\u8BAE\u7F16\u8BD1-gen pb","permalink":"/2.7.x/docs/cli/gen-pb"},"next":{"title":"\u81EA\u52A8\u7F16\u8BD1-run","permalink":"/2.7.x/docs/cli/run"}}'),d=t("785893"),s=t("250065");let r={slug:"/docs/cli/gen-pbentity",title:"\u6570\u636E\u8868PB-gen pbentity",sidebar_position:5,hide_title:!0,keywords:["GoFrame","Golang\u5B9E\u4F53\u5BF9\u8C61","proto\u6570\u636E\u7ED3\u6784","GRPC\u670D\u52A1","\u6570\u636E\u5E93\u914D\u7F6E","GF\u547D\u4EE4\u884C\u5DE5\u5177","\u6570\u636E\u8868\u751F\u6210","entity\u6587\u4EF6\u751F\u6210","pbentity","\u547D\u540D\u683C\u5F0F"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u7684\u547D\u4EE4\u884C\u5DE5\u5177gf\u6765\u6839\u636E\u6570\u636E\u5E93\u8868\u751F\u6210proto\u6570\u636E\u7ED3\u6784\u6587\u4EF6pbentity\u3002\u5305\u62EC\u547D\u4EE4\u4F7F\u7528\u65B9\u6CD5\u3001\u9009\u9879\u914D\u7F6E\u53CA\u5176\u8BF4\u660E\uFF0C\u4EE5\u53CA\u4E0Egen dao\u6A21\u5757\u4E2D\u751F\u6210\u7684entity\u6587\u4EF6\u7684\u533A\u522B\u3002\u9002\u7528\u4E8EHTTP\u548CGRPC\u670D\u52A1\u7684\u6570\u636E\u5B9E\u4F53\u7ED3\u6784\u751F\u6210\uFF0C\u652F\u6301\u591A\u79CD\u6570\u636E\u5E93\u7684\u751F\u6210\u89C4\u5219\u914D\u7F6E\u3002"},o=void 0,c={},l=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u547D\u4EE4\u4F7F\u7528",id:"\u547D\u4EE4\u4F7F\u7528",level:2},{value:"\u4E0E <code>gen dao</code> \u4E2D\u7684 <code>entity</code> \u5DEE\u522B",id:"\u4E0E-gen-dao-\u4E2D\u7684-entity-\u5DEE\u522B",level:2},{value:"\u76F8\u540C\u4E4B\u5904",id:"\u76F8\u540C\u4E4B\u5904",level:3},{value:"\u4E0D\u540C\u4E4B\u5904",id:"\u4E0D\u540C\u4E4B\u5904",level:3}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.admonition,{type:"tip",children:(0,d.jsxs)(n.p,{children:["\u8BE5\u529F\u80FD\u7279\u6027\u4ECE ",(0,d.jsx)(n.code,{children:"v2.4"})," \u7248\u672C\u5F00\u59CB\u63D0\u4F9B\u3002"]})}),"\n",(0,d.jsx)(n.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,d.jsxs)(n.p,{children:["\u8BE5\u547D\u4EE4\u7528\u4E8E\u8BFB\u53D6\u914D\u7F6E\u7684\u6570\u636E\u5E93\uFF0C\u6839\u636E\u6570\u636E\u8868\u751F\u6210\u5BF9\u5E94\u7684 ",(0,d.jsx)(n.code,{children:"proto"})," \u6570\u636E\u7ED3\u6784\u6587\u4EF6\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u547D\u4EE4\u4F7F\u7528",children:"\u547D\u4EE4\u4F7F\u7528"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-text",children:'$ gf gen pbentity -h\nUSAGE\n    gf gen pbentity [OPTION]\n\nOPTION\n    -p, --path                 directory path for generated files storing\n    -k, --package              package path for all entity proto files\n    -l, --link                 database configuration, the same as the ORM configuration of GoFrame\n    -t, --tables               generate models only for given tables, multiple table names separated with \',\'\n    -f, --prefix               add specified prefix for all entity names and entity proto files\n    -r, --removePrefix         remove specified prefix of the table, multiple prefix separated with \',\'\n    -rf, --removeFieldPrefix   remove specified prefix of the field, multiple prefix separated with \',\'\n    -n, --nameCase             case for message attribute names, default is "Camel":\n                               | Case            | Example            |\n                               |---------------- |--------------------|\n                               | Camel           | AnyKindOfString    |\n                               | CamelLower      | anyKindOfString    | default\n                               | Snake           | any_kind_of_string |\n                               | SnakeScreaming  | ANY_KIND_OF_STRING |\n                               | SnakeFirstUpper | rgb_code_md5       |\n                               | Kebab           | any-kind-of-string |\n                               | KebabScreaming  | ANY-KIND-OF-STRING |\n    -j, --jsonCase             case for message json tag, cases are the same as "nameCase", default "CamelLower".\n                               set it to "none" to ignore json tag generating.\n    -o, --option               extra protobuf options\n    -h, --help                 more information about this command\n\nEXAMPLE\n    gf gen pbentity\n    gf gen pbentity -l "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n    gf gen pbentity -p ./protocol/demos/entity -t user,user_detail,user_login\n    gf gen pbentity -r user_ -k github.com/gogf/gf/example/protobuf\n    gf gen pbentity -r user_\n\nCONFIGURATION SUPPORT\n    Options are also supported by configuration file.\n    It\'s suggested using configuration file instead of command line arguments making producing.\n    The configuration node name is "gf.gen.pbentity", which also supports multiple databases, for example(config.yaml):\n    gfcli:\n      gen:\n      - pbentity:\n            link:    "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n            path:    "protocol/demos/entity"\n            tables:  "order,products"\n            package: "demos"\n      - pbentity:\n            link:    "mysql:root:12345678@tcp(127.0.0.1:3306)/primary"\n            path:    "protocol/demos/entity"\n            prefix:  "primary_"\n            tables:  "user, userDetail"\n            package: "demos"\n            option:  |\n              option go_package    = "protobuf/demos";\n              option java_package  = "protobuf/demos";\n              option php_namespace = "protobuf/demos";\n'})}),"\n",(0,d.jsx)(n.admonition,{type:"tip",children:(0,d.jsxs)(n.p,{children:["\u5982\u679C\u4F7F\u7528\u6846\u67B6\u63A8\u8350\u7684\u9879\u76EE\u5DE5\u7A0B\u811A\u624B\u67B6\uFF0C\u5E76\u4E14\u7CFB\u7EDF\u5B89\u88C5\u4E86 ",(0,d.jsx)(n.code,{children:"make"})," \u5DE5\u5177\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"make pbentity"})," \u5FEB\u6377\u6307\u4EE4\u3002"]})}),"\n",(0,d.jsx)(n.p,{children:"\u53C2\u6570\u8BF4\u660E\uFF1A"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u540D\u79F0"}),(0,d.jsx)(n.th,{children:"\u9ED8\u8BA4\u503C"}),(0,d.jsx)(n.th,{children:"\u542B\u4E49"}),(0,d.jsx)(n.th,{children:"\u793A\u4F8B"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"gfcli.gen.pbentity"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"\u4EE3\u7801\u751F\u6210\u914D\u7F6E\u9879\uFF0C\u53EF\u4EE5\u6709\u591A\u4E2A\u914D\u7F6E\u9879\u6784\u6210\u6570\u7EC4\uFF0C\u652F\u6301\u591A\u4E2A\u6570\u636E\u5E93\u751F\u6210\u3002\u4E0D\u540C\u7684\u6570\u636E\u5E93\u53EF\u4EE5\u8BBE\u7F6E\u4E0D\u540C\u7684\u751F\u6210\u89C4\u5219\uFF0C\u4F8B\u5982\u53EF\u4EE5\u751F\u6210\u5230\u4E0D\u540C\u7684\u4F4D\u7F6E\u6216\u8005\u6587\u4EF6\u3002"}),(0,d.jsx)(n.td,{children:"-"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"path"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"manifest/protobuf/pbentity"})}),(0,d.jsxs)(n.td,{children:["\u751F\u6210 ",(0,d.jsx)(n.code,{children:"proto"})," \u6587\u4EF6\u7684\u5B58\u50A8 ",(0,d.jsx)(n.strong,{children:"\u76EE\u5F55"})," \u5730\u5740\u3002"]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"protobuf/pbentity"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"package"})}),(0,d.jsxs)(n.td,{children:["\u81EA\u52A8\u8BC6\u522B ",(0,d.jsx)(n.code,{children:"go.mod"})]}),(0,d.jsxs)(n.td,{children:["\u751F\u6210\u7684 ",(0,d.jsx)(n.code,{children:"proto"})," \u6587\u4EF6\u4E2D\u7684 ",(0,d.jsx)(n.code,{children:"go_package"})," \u8DEF\u5F84\uFF0C\u5E76\u81EA\u52A8\u8BC6\u522B ",(0,d.jsx)(n.code,{children:"package"})," \u540D\u79F0"]}),(0,d.jsx)(n.td,{children:"-"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"link"})}),(0,d.jsx)(n.td,{}),(0,d.jsxs)(n.td,{children:["\u5206\u4E3A\u4E24\u90E8\u5206\uFF0C\u7B2C\u4E00\u90E8\u5206\u8868\u793A\u4F60\u8FDE\u63A5\u7684\u6570\u636E\u5E93\u7C7B\u578B ",(0,d.jsx)(n.code,{children:"mysql"}),", ",(0,d.jsx)(n.code,{children:"postgresql"})," \u7B49, \u7B2C\u4E8C\u90E8\u5206\u5C31\u662F\u8FDE\u63A5\u6570\u636E\u5E93\u7684 ",(0,d.jsx)(n.code,{children:"dsn"})," \u4FE1\u606F\u3002\u5177\u4F53\u8BF7\u53C2\u8003 ",(0,d.jsx)(n.a,{href:"/2.7.x/docs/core/gdb-config",children:"ORM\u4F7F\u7528\u914D\u7F6E"})," \u7AE0\u8282\u3002"]}),(0,d.jsx)(n.td,{children:"-"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"prefix"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"\u751F\u6210\u6570\u636E\u5E93\u5BF9\u8C61\u53CA\u6587\u4EF6\u7684\u524D\u7F00\uFF0C\u4EE5\u4FBF\u533A\u5206\u4E0D\u540C\u6570\u636E\u5E93\u6216\u8005\u4E0D\u540C\u6570\u636E\u5E93\u4E2D\u7684\u76F8\u540C\u8868\u540D\uFF0C\u9632\u6B62\u6570\u636E\u8868\u540C\u540D\u8986\u76D6\u3002"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"order_"}),(0,d.jsx)("br",{}),(0,d.jsx)(n.code,{children:"user_"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"removePrefix"})}),(0,d.jsx)(n.td,{}),(0,d.jsxs)(n.td,{children:["\u5220\u9664\u6570\u636E\u8868\u7684\u6307\u5B9A\u524D\u7F00\u540D\u79F0\u3002\u591A\u4E2A\u524D\u7F00\u4EE5 ",(0,d.jsx)(n.code,{children:","})," \u53F7\u5206\u9694\u3002"]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"gf_"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"removeFieldPrefix"})}),(0,d.jsx)(n.td,{}),(0,d.jsxs)(n.td,{children:["\u5220\u9664\u5B57\u6BB5\u540D\u79F0\u7684\u6307\u5B9A\u524D\u7F00\u540D\u79F0\u3002\u591A\u4E2A\u524D\u7F00\u4EE5 ",(0,d.jsx)(n.code,{children:","})," \u53F7\u5206\u9694\u3002"]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"f_"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"tables"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"\u6307\u5B9A\u5F53\u524D\u6570\u636E\u5E93\u4E2D\u9700\u8981\u6267\u884C\u4EE3\u7801\u751F\u6210\u7684\u6570\u636E\u8868\u3002\u5982\u679C\u4E3A\u7A7A\uFF0C\u8868\u793A\u6570\u636E\u5E93\u7684\u6240\u6709\u8868\u90FD\u4F1A\u751F\u6210\u3002"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"user, user_detail"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"nameCase"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"CamelLower"})}),(0,d.jsxs)(n.td,{children:["\u751F\u6210\u7684 ",(0,d.jsx)(n.code,{children:"message"})," \u5C5E\u6027\u5B57\u6BB5\u540D\u79F0\u683C\u5F0F\u3002\u53C2\u6570\u53EF\u9009\u4E3A\uFF1A ",(0,d.jsx)(n.code,{children:"Camel"}),"\u3001 ",(0,d.jsx)(n.code,{children:"CamelLower"}),"\u3001 ",(0,d.jsx)(n.code,{children:"Snake"}),"\u3001 ",(0,d.jsx)(n.code,{children:"SnakeScreaming"}),"\u3001 ",(0,d.jsx)(n.code,{children:"SnakeFirstUpper"}),"\u3001 ",(0,d.jsx)(n.code,{children:"Kebab"}),"\u3001 ",(0,d.jsx)(n.code,{children:"KebabScreaming"}),"\u3002\u5177\u4F53\u4ECB\u7ECD\u8BF7\u53C2\u8003\u547D\u540D\u884C\u5E2E\u52A9\u793A\u4F8B\u3002"]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Snake"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"option"})}),(0,d.jsx)(n.td,{}),(0,d.jsxs)(n.td,{children:["\u989D\u5916\u7684 ",(0,d.jsx)(n.code,{children:"proto option"})," \u914D\u7F6E\u5217\u8868"]}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsxs)(n.h2,{id:"\u4E0E-gen-dao-\u4E2D\u7684-entity-\u5DEE\u522B",children:["\u4E0E ",(0,d.jsx)(n.code,{children:"gen dao"})," \u4E2D\u7684 ",(0,d.jsx)(n.code,{children:"entity"})," \u5DEE\u522B"]}),"\n",(0,d.jsx)(n.h3,{id:"\u76F8\u540C\u4E4B\u5904",children:"\u76F8\u540C\u4E4B\u5904"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u4E24\u8005\u751F\u6210\u7684\u5185\u5BB9\u90FD\u662F ",(0,d.jsx)(n.code,{children:"entity"})," \u5185\u5BB9\uFF0C\u5373\u4ECE\u6570\u636E\u96C6\u5408\uFF08\u6570\u636E\u5E93\u8868\uFF09\u4E2D\u751F\u6210\u5BF9\u5E94\u7684 ",(0,d.jsx)(n.code,{children:"Golang"})," \u5B9E\u4F53\u5BF9\u8C61\u4F9B\u7A0B\u5E8F\u65B9\u4FBF\u4F7F\u7528\u3002\u5E76\u4E14\u90FD\u662F\u5355\u5411\u751F\u6210\uFF0C\u5373\u53EA\u80FD\u4ECE\u6570\u636E\u96C6\u5408\u751F\u6210\u5B9E\u4F53\u5BF9\u8C61\u4EE3\u7801\uFF0C\u4EE5\u4FDD\u8BC1\u5B9E\u4F53\u5BF9\u8C61\u6570\u636E\u7ED3\u6784\u7684\u540C\u6B65\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gen dao"})," \u751F\u6210\u7684 ",(0,d.jsx)(n.code,{children:"entity"})," \u6570\u636E\u5B9E\u4F53\u5BF9\u8C61\u662F\u5BF9\u4E8E ",(0,d.jsx)(n.code,{children:"Golang"})," \u8BED\u8A00\u6765\u8BF4\u662F\u901A\u7528\u7684\uFF0C\u4F46\u76EE\u524D\u4E3B\u8981\u4E3A ",(0,d.jsx)(n.code,{children:"HTTP"})," \u534F\u8BAE\u670D\u52A1\u3002\u5728 ",(0,d.jsx)(n.code,{children:"HTTP"})," \u670D\u52A1\u4E2D\uFF0C ",(0,d.jsx)(n.code,{children:"gen dao"})," \u4E2D\u751F\u6210\u7684 ",(0,d.jsx)(n.code,{children:"entity"})," \u867D\u7136\u662F\u5728 ",(0,d.jsx)(n.code,{children:"internal"})," \u76EE\u5F55\u4E0B\uFF0C\u4F46\u6700\u7EC8\u4E5F\u4F1A\u4F5C\u4E3A ",(0,d.jsx)(n.code,{children:"HTTP API"})," \u8FD4\u56DE\u7684\u4E00\u90E8\u5206\u670D\u52A1\u5BA2\u6237\u7AEF\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u4E0D\u540C\u4E4B\u5904",children:"\u4E0D\u540C\u4E4B\u5904"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u5728 ",(0,d.jsx)(n.code,{children:"GRPC"})," \u670D\u52A1\u4E2D\uFF0C ",(0,d.jsx)(n.code,{children:"gen dao"})," \u751F\u6210\u7684 ",(0,d.jsx)(n.code,{children:"entity"})," \u6570\u636E\u7ED3\u6784\u65E0\u6CD5\u63D0\u4F9B\u7ED9 ",(0,d.jsx)(n.code,{children:"GRPC"})," \u63A5\u53E3\u4F7F\u7528\uFF0C\u56E0\u4E3A ",(0,d.jsx)(n.code,{children:"GRPC"})," \u7684\u6570\u636E\u7ED3\u6784\u9700\u8981\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"proto"})," \u6587\u4EF6\u6765\u5B9A\u4E49\u3002\u56E0\u6B64\uFF0C\u5728 ",(0,d.jsx)(n.code,{children:"GRPC"})," \u670D\u52A1\u4E2D\u5C31\u9700\u8981\u4F7F\u7528\u5230 ",(0,d.jsx)(n.code,{children:"gen pbentity"})," \u4E2D\u751F\u6210\u7684 ",(0,d.jsx)(n.code,{children:"pbentity proto"})," \u6587\u4EF6\u3002\u540C\u65F6\uFF0C\u5728 ",(0,d.jsx)(n.code,{children:"GRPC"})," \u5FAE\u670D\u52A1\u5F00\u53D1\u4E2D\uFF0C ",(0,d.jsx)(n.code,{children:"gen dao"})," \u751F\u6210\u7684 ",(0,d.jsx)(n.code,{children:"entity"})," \u5DF2\u7ECF\u6CA1\u6709\u5177\u4F53\u4F5C\u7528\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u53D6\u540D ",(0,d.jsx)(n.code,{children:"pbentity"})," \u800C\u4E0D\u662F ",(0,d.jsx)(n.code,{children:"entity"})," \u7684\u540D\u79F0\uFF0C\u662F\u4E3A\u4E86\u9632\u6B62\u548C ",(0,d.jsx)(n.code,{children:"gen dao"})," \u4E2D\u7684 ",(0,d.jsx)(n.code,{children:"entity"})," \u542B\u4E49\u51B2\u7A81\u3002"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var i=t(667294);let d={},s=i.createContext(d);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
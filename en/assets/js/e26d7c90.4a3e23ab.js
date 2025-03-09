"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["54711"],{725308:function(e,n,a){a.r(n),a.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5199\u5165\u4FDD\u5B58","title":"ORM Model - Insert/Save","description":"Insert, Replace, Save methods usage in GoFrame\'s ORM chained operations, supporting automatic single or batch data insertion across various database environments. Detailed examples demonstrate how to use these methods with the Data method for data operations.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5199\u5165\u4FDD\u5B58.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C","slug":"/docs/core/gdb-chaining-insert-save","permalink":"/en/docs/core/gdb-chaining-insert-save","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5199\u5165\u4FDD\u5B58.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732541616000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/core/gdb-chaining-insert-save","title":"ORM Model - Insert/Save","sidebar_position":1,"hide_title":true,"keywords":["ORM Chained Operations","Data Insertion","GoFrame","Insert","Replace","Save","Database","Batch Operations","SQL","RawSQL"],"description":"Insert, Replace, Save methods usage in GoFrame\'s ORM chained operations, supporting automatic single or batch data insertion across various database environments. Detailed examples demonstrate how to use these methods with the Data method for data operations."},"sidebar":"mainSidebar","previous":{"title":"ORM Model - Model","permalink":"/en/docs/core/gdb-chaining-model"},"next":{"title":"ORM Model - Update/Delete","permalink":"/en/docs/core/gdb-chaining-update-delete"}}'),t=a("785893"),i=a("250065");let r={slug:"/docs/core/gdb-chaining-insert-save",title:"ORM Model - Insert/Save",sidebar_position:1,hide_title:!0,keywords:["ORM Chained Operations","Data Insertion","GoFrame","Insert","Replace","Save","Database","Batch Operations","SQL","RawSQL"],description:"Insert, Replace, Save methods usage in GoFrame's ORM chained operations, supporting automatic single or batch data insertion across various database environments. Detailed examples demonstrate how to use these methods with the Data method for data operations."},o=void 0,d={},c=[{value:"Common Methods",id:"common-methods",level:2},{value:"<code>Insert/Replace/Save</code>",id:"insertreplacesave",level:3},{value:"<code>InsertIgnore</code>",id:"insertignore",level:3},{value:"<code>InsertAndGetId</code>",id:"insertandgetid",level:3},{value:"<code>OnDuplicate/OnDuplicateEx</code>",id:"onduplicateonduplicateex",level:3},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Example 1: Basic Usage",id:"example-1-basic-usage",level:3},{value:"Example 2: Batch Data Insertion",id:"example-2-batch-data-insertion",level:3},{value:"Example 3: Batch Data Save",id:"example-3-batch-data-save",level:3},{value:"<code>RawSQL</code> Statement Embedding",id:"rawsql-statement-embedding",level:2}];function l(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"common-methods",children:"Common Methods"}),"\n",(0,t.jsx)(n.h3,{id:"insertreplacesave",children:(0,t.jsx)(n.code,{children:"Insert/Replace/Save"})}),"\n",(0,t.jsx)(n.p,{children:"These chained operation methods are used for data insertion and support automatic single or batch data insertion, with differences as follows:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Insert"})}),"\n",(0,t.jsxs)(n.p,{children:["Uses the ",(0,t.jsx)(n.code,{children:"INSERT INTO"})," statement for database insertion. If the inserted data contains a primary key or unique index, it returns failure; otherwise, a new record is inserted."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Replace"})}),"\n",(0,t.jsxs)(n.p,{children:["Uses the ",(0,t.jsx)(n.code,{children:"REPLACE INTO"})," statement for database insertion. If the inserted data contains a primary key or unique index, it deletes the existing record, ensuring that a new record is inserted."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Save"})}),"\n",(0,t.jsxs)(n.p,{children:["Uses the ",(0,t.jsx)(n.code,{children:"INSERT INTO"})," statement for database insertion. If the inserted data contains a primary key or unique index, it updates the existing data; otherwise, it inserts a new record. For certain databases, such as ",(0,t.jsx)(n.code,{children:"PgSQL, SQL server, Oracle"}),", you can use the ",(0,t.jsx)(n.code,{children:"OnConflict"})," method to specify conflict keys."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'db.Model(table).Data(g.Map{\n    "id":          1,\n    "passport":    "p1",\n    "password":    "pw1",\n}).OnConflict("id").Save()\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Some database types do not support ",(0,t.jsx)(n.code,{children:"Replace/Save"})," methods. Refer to the ",(0,t.jsx)(n.a,{href:"/en/docs/core/gdb-chaining",children:"ORM - Model \uD83D\uDD25"})," section for details."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["These methods need to be used in conjunction with the ",(0,t.jsx)(n.code,{children:"Data"})," method, which is used to pass data parameters for data insertion/updating and other write operations."]}),"\n",(0,t.jsx)(n.h3,{id:"insertignore",children:(0,t.jsx)(n.code,{children:"InsertIgnore"})}),"\n",(0,t.jsx)(n.p,{children:"This method is used to ignore errors and continue with insertion if the inserted data contains a primary key or unique index. The method is defined as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func (m *Model) InsertIgnore(data ...interface{}) (result sql.Result, err error)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"insertandgetid",children:(0,t.jsx)(n.code,{children:"InsertAndGetId"})}),"\n",(0,t.jsxs)(n.p,{children:["This method is used to insert data while directly returning the auto-increment field's ",(0,t.jsx)(n.code,{children:"ID"}),". The method is defined as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func (m *Model) InsertAndGetId(data ...interface{}) (lastInsertId int64, err error)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"onduplicateonduplicateex",children:(0,t.jsx)(n.code,{children:"OnDuplicate/OnDuplicateEx"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"OnDuplicate/OnDuplicateEx"})," methods need to be used together with the ",(0,t.jsx)(n.code,{children:"Save"})," method to specify the fields to be updated/not updated for the ",(0,t.jsx)(n.code,{children:"Save"})," operation. Parameters can be strings, string arrays, or ",(0,t.jsx)(n.code,{children:"Map"}),". For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'OnDuplicate("nickname, age")\nOnDuplicate("nickname", "age")\nOnDuplicate(g.Map{\n    "nickname": gdb.Raw("CONCAT(\'name_\', VALUES(`nickname`))"),\n})\nOnDuplicate(g.Map{\n    "nickname": "passport",\n})\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"OnDuplicateEx"})," is used to exclude specified fields from being updated, with excluded fields already in the data set being inserted."]}),"\n",(0,t.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,t.jsx)(n.h3,{id:"example-1-basic-usage",children:"Example 1: Basic Usage"}),"\n",(0,t.jsxs)(n.p,{children:["Data insertion/save methods need to be used with the ",(0,t.jsx)(n.code,{children:"Data"})," method. The parameter type can be ",(0,t.jsx)(n.code,{children:"Map/Struct/Slice"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`name`) VALUES(\'john\')\ng.Model("user").Data(g.Map{"name": "john"}).Insert()\n\n// INSERT IGNORE INTO `user`(`uid`,`name`) VALUES(10000,\'john\')\ng.Model("user").Data(g.Map{"uid": 10000, "name": "john"}).InsertIgnore()\n\n// REPLACE INTO `user`(`uid`,`name`) VALUES(10000,\'john\')\ng.Model("user").Data(g.Map{"uid": 10000, "name": "john"}).Replace()\n\n// INSERT INTO `user`(`uid`,`name`) VALUES(10001,\'john\') ON DUPLICATE KEY UPDATE `uid`=VALUES(`uid`),`name`=VALUES(`name`)\ng.Model("user").Data(g.Map{"uid": 10001, "name": "john"}).Save()\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can also directly pass data parameters to the insertion/save methods without using the ",(0,t.jsx)(n.code,{children:"Data"})," method:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'g.Model("user").Insert(g.Map{"name": "john"})\ng.Model("user").Replace(g.Map{"uid": 10000, "name": "john"})\ng.Model("user").Save(g.Map{"uid": 10001, "name": "john"})\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Data parameters are often ",(0,t.jsx)(n.code,{children:"struct"})," types, for example, when the table fields are ",(0,t.jsx)(n.code,{children:"uid/name/site"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'type User struct {\n    Uid  int    `orm:"uid"`\n    Name string `orm:"name"`\n    Site string `orm:"site"`\n}\nuser := &User{\n    Uid:  1,\n    Name: "john",\n    Site: "https://goframe.org",\n}\n// INSERT INTO `user`(`uid`,`name`,`site`) VALUES(1,\'john\',\'https://goframe.org\')\ng.Model("user").Data(user).Insert()\n'})}),"\n",(0,t.jsx)(n.h3,{id:"example-2-batch-data-insertion",children:"Example 2: Batch Data Insertion"}),"\n",(0,t.jsxs)(n.p,{children:["Batch insertion is achieved by passing a ",(0,t.jsx)(n.code,{children:"Slice"})," array type parameter to the ",(0,t.jsx)(n.code,{children:"Data"})," method. Array elements need to be of ",(0,t.jsx)(n.code,{children:"Map"})," or ",(0,t.jsx)(n.code,{children:"Struct"})," type to automatically derive field information and generate batch operation ",(0,t.jsx)(n.code,{children:"SQL"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`name`) VALUES(\'john_1\'),(\'john_2\'),(\'john_3\')\ng.Model("user").Data(g.List{\n    {"name": "john_1"},\n    {"name": "john_2"},\n    {"name": "john_3"},\n}).Insert()\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can specify the number of records to be written in batches using the ",(0,t.jsx)(n.code,{children:"Batch"})," method (default is ",(0,t.jsx)(n.code,{children:"10"}),"). The following example will be split into two insertion requests:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`name`) VALUES(\'john_1\'),(\'john_2\')\n// INSERT INTO `user`(`name`) VALUES(\'john_3\')\ng.Model("user").Data(g.List{\n    {"name": "john_1"},\n    {"name": "john_2"},\n    {"name": "john_3"},\n}).Batch(2).Insert()\n'})}),"\n",(0,t.jsx)(n.h3,{id:"example-3-batch-data-save",children:"Example 3: Batch Data Save"}),"\n",(0,t.jsx)(n.p,{children:"The principle of batch save operations is the same as single save operations. When the inserted data contains a primary key or unique index, it updates the existing record; otherwise, a new record is inserted."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"oracle, dm, mssql"})," do not support batch savings."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`uid`,`name`) VALUES(10000,\'john_1\'),(10001,\'john_2\'),(10002,\'john_3\')\n// ON DUPLICATE KEY UPDATE `uid`=VALUES(`uid`),`name`=VALUES(`name`)\ng.Model("user").Data(g.List{\n    {"uid":10000, "name": "john_1"},\n    {"uid":10001, "name": "john_2"},\n    {"uid":10002, "name": "john_3"},\n}).Save()\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"rawsql-statement-embedding",children:[(0,t.jsx)(n.code,{children:"RawSQL"})," Statement Embedding"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"gdb.Raw"})," is a string type whose parameters will be directly embedded as ",(0,t.jsx)(n.code,{children:"SQL"})," fragments into the final ",(0,t.jsx)(n.code,{children:"SQL"})," statement submitted to the underlying database, not automatically converted to string parameter types, nor treated as preprocessed parameters. For more details, refer to the section: ",(0,t.jsx)(n.a,{href:"/en/docs/core/gdb-senior-raw-sql",children:"ORM Senior - RawSQL"}),". For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`id`,`passport`,`password`,`nickname`,`create_time`) VALUES(\'id+2\',\'john\',\'123456\',\'now()\')\ng.Model("user").Data(g.Map{\n    "id":          "id+2",\n    "passport":    "john",\n    "password":    "123456",\n    "nickname":    "JohnGuo",\n    "create_time": "now()",\n}).Insert()\n// Execution Error: Error Code: 1136. Column count doesn\'t match value count at row 1\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Revised using ",(0,t.jsx)(n.code,{children:"gdb.Raw"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`id`,`passport`,`password`,`nickname`,`create_time`) VALUES(id+2,\'john\',\'123456\',now())\ng.Model("user").Data(g.Map{\n    "id":          gdb.Raw("id+2"),\n    "passport":    "john",\n    "password":    "123456",\n    "nickname":    "JohnGuo",\n    "create_time": gdb.Raw("now()"),\n}).Insert()\n'})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return r}});var s=a(667294);let t={},i=s.createContext(t);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
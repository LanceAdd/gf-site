"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["51589"],{954968:function(e,t,o){o.r(t),o.d(t,{metadata:()=>n,contentTitle:()=>r,default:()=>u,assets:()=>a,toc:()=>l,frontMatter:()=>s});var n=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4/\u65F6\u95F4\u7EF4\u62A4-\u5E03\u5C14\u5B57\u6BB5","title":"Time Fields - Boolean Fields","description":"Introduces support for Boolean fields in time fields of the GoFrame framework, demonstrating through examples how to use a Boolean type \'deleted_at\' field for data soft deletion. Provides MySQL table structure definition and examples of creating records and performing soft delete operations using the ORM component in GoFrame.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4/\u65F6\u95F4\u7EF4\u62A4-\u5E03\u5C14\u5B57\u6BB5.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4","slug":"/docs/core/gdb-chaining-soft-time-bool-fields","permalink":"/en/docs/core/gdb-chaining-soft-time-bool-fields","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4/\u65F6\u95F4\u7EF4\u62A4-\u5E03\u5C14\u5B57\u6BB5.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732541616000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/core/gdb-chaining-soft-time-bool-fields","title":"Time Fields - Boolean Fields","sidebar_position":2,"hide_title":true,"keywords":["GoFrame","GoFrame Framework","Time Fields","Boolean Fields","ORM Component","Auto Recognition","MySQL Table Structure","Soft Delete","deleted_at","Debug Mode"],"description":"Introduces support for Boolean fields in time fields of the GoFrame framework, demonstrating through examples how to use a Boolean type \'deleted_at\' field for data soft deletion. Provides MySQL table structure definition and examples of creating records and performing soft delete operations using the ORM component in GoFrame."},"sidebar":"mainSidebar","previous":{"title":"Time Fields - Integer Fields","permalink":"/en/docs/core/gdb-chaining-soft-time-numeric-fields"},"next":{"title":"Time Fields - SoftTimeOption","permalink":"/en/docs/core/gdb-chaining-soft-time-option"}}'),i=o("785893"),d=o("250065");let s={slug:"/docs/core/gdb-chaining-soft-time-bool-fields",title:"Time Fields - Boolean Fields",sidebar_position:2,hide_title:!0,keywords:["GoFrame","GoFrame Framework","Time Fields","Boolean Fields","ORM Component","Auto Recognition","MySQL Table Structure","Soft Delete","deleted_at","Debug Mode"],description:"Introduces support for Boolean fields in time fields of the GoFrame framework, demonstrating through examples how to use a Boolean type 'deleted_at' field for data soft deletion. Provides MySQL table structure definition and examples of creating records and performing soft delete operations using the ORM component in GoFrame."},r=void 0,a={},l=[{value:"Example SQL",id:"example-sql",level:2},{value:"<code>created_at</code> Write Time",id:"created_at-write-time",level:2},{value:"<code>deleted_at</code> Data Soft Deletion",id:"deleted_at-data-soft-deletion",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Starting from version ",(0,i.jsx)(t.code,{children:"v2.8"}),", if the time fields ",(0,i.jsx)(t.code,{children:"created_at"}),", ",(0,i.jsx)(t.code,{children:"updated_at"}),", and ",(0,i.jsx)(t.code,{children:"deleted_at"})," are Boolean fields, the ORM component will automatically recognize and support them, writing Boolean type values (represented by ",(0,i.jsx)(t.code,{children:"0"})," and ",(0,i.jsx)(t.code,{children:"1"}),"). Typically, the Boolean field is the ",(0,i.jsx)(t.code,{children:"deleted_at"})," field, and we only demonstrate the case where the ",(0,i.jsx)(t.code,{children:"deleted_at"})," field is of type ",(0,i.jsx)(t.code,{children:"bool"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"example-sql",children:"Example SQL"}),"\n",(0,i.jsxs)(t.p,{children:["This is the ",(0,i.jsx)(t.code,{children:"MySQL"})," table structure used in the example code that follows."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `user` (\n  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,\n  `name` varchar(45) NOT NULL,\n  `status` tinyint DEFAULT 0,\n  `created_at` int(10) unsigned DEFAULT NULL,\n  `updated_at` int(10) unsigned DEFAULT NULL,\n  `deleted_at` bit(1) DEFAULT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n"})}),"\n",(0,i.jsxs)(t.p,{children:["We recommend using ",(0,i.jsx)(t.code,{children:"bit(1)"})," to represent the ",(0,i.jsx)(t.code,{children:"bool"})," type for the field instead of ",(0,i.jsx)(t.code,{children:"tinyint(1)"})," or ",(0,i.jsx)(t.code,{children:"int(1)"})," because the range of ",(0,i.jsx)(t.code,{children:"tinyint(1)/int(1)"})," is ",(0,i.jsx)(t.code,{children:"-127~127"}),", which is often used as a status field type. The range of ",(0,i.jsx)(t.code,{children:"bit(1)"})," is ",(0,i.jsx)(t.code,{children:"0/1"}),", which can effectively represent the two values ",(0,i.jsx)(t.code,{children:"false/true"})," of the ",(0,i.jsx)(t.code,{children:"bool"})," type."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["If you try to test and view the ",(0,i.jsx)(t.code,{children:"ORM"})," operation execution SQL statements, it is recommended to enable the ",(0,i.jsx)(t.code,{children:"debug"})," mode (related documentation: ",(0,i.jsx)(t.a,{href:"/en/docs/core/gdb-senior-debugging",children:"ORM Senior - Debug Mode"}),"), and the SQL statements will be automatically printed to the log output."]})}),"\n",(0,i.jsxs)(t.h2,{id:"created_at-write-time",children:[(0,i.jsx)(t.code,{children:"created_at"})," Write Time"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'// INSERT INTO `user`(`name`,`created_at`,`updated_at`,`deleted_at`) VALUES(\'john\',1731481488,1731481488,0)\ng.Model("user").Data(g.Map{"name": "john"}).Insert()\n'})}),"\n",(0,i.jsxs)(t.h2,{id:"deleted_at-data-soft-deletion",children:[(0,i.jsx)(t.code,{children:"deleted_at"})," Data Soft Deletion"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'// UPDATE `user` SET `deleted_at`=1 WHERE (`id`=10) AND `deleted_at`=0\ng.Model("user").Where("id", 10).Delete()\n'})}),"\n",(0,i.jsx)(t.p,{children:"Some changes occur during the query, for example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'// SELECT * FROM `user` WHERE (id>1) AND `deleted_at`=0\ng.Model("user").Where("id>?", 1).All()\n'})})]})}function u(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,t,o){o.d(t,{Z:function(){return r},a:function(){return s}});var n=o(667294);let i={},d=n.createContext(i);function s(e){let t=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["4626"],{496809:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>s,default:()=>c,assets:()=>l,toc:()=>a,frontMatter:()=>d});var o=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-AllAndCount","title":"Model Query - AllAndCount","description":"This document introduces the AllAndCount method provided in the GoFrame framework from version v2.5.0, which is used to simultaneously retrieve data record lists and total counts in paging query scenarios, simplifying query logic. By ignoring Limit/Page operations during queries, the AllAndCount method provides a convenient way to retrieve and count data.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-AllAndCount.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2","slug":"/docs/core/gdb-chaining-query-all-and-count","permalink":"/en/docs/core/gdb-chaining-query-all-and-count","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-AllAndCount.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732440306000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/core/gdb-chaining-query-all-and-count","title":"Model Query - AllAndCount","sidebar_position":2,"hide_title":true,"keywords":["GoFrame","GoFrame Framework","ORM Query","AllAndCount","Paging Query","Data Query","Total Count Query","v2.5.0","Record List","Simplify Query Logic"],"description":"This document introduces the AllAndCount method provided in the GoFrame framework from version v2.5.0, which is used to simultaneously retrieve data record lists and total counts in paging query scenarios, simplifying query logic. By ignoring Limit/Page operations during queries, the AllAndCount method provides a convenient way to retrieve and count data."},"sidebar":"mainSidebar","previous":{"title":"Model Query - Methods","permalink":"/en/docs/core/gdb-chaining-query-all-one-array-value-count"},"next":{"title":"Model Query - Exist","permalink":"/en/docs/core/gdb-chaining-query-exist"}}'),r=t("785893"),i=t("250065");let d={slug:"/docs/core/gdb-chaining-query-all-and-count",title:"Model Query - AllAndCount",sidebar_position:2,hide_title:!0,keywords:["GoFrame","GoFrame Framework","ORM Query","AllAndCount","Paging Query","Data Query","Total Count Query","v2.5.0","Record List","Simplify Query Logic"],description:"This document introduces the AllAndCount method provided in the GoFrame framework from version v2.5.0, which is used to simultaneously retrieve data record lists and total counts in paging query scenarios, simplifying query logic. By ignoring Limit/Page operations during queries, the AllAndCount method provides a convenient way to retrieve and count data."},s=void 0,l={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Usage Example",id:"usage-example",level:2}];function u(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["This method has been provided since version ",(0,r.jsx)(n.code,{children:"v2.5.0"})," and is used for querying both the data record list and the total count, generally used in paging query scenarios to simplify paging query logic."]}),"\n",(0,r.jsx)(n.p,{children:"Method definition:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// AllAndCount retrieves all records and the total count of records from the model.\n// If useFieldForCount is true, it will use the fields specified in the model for counting;\n// otherwise, it will use a constant value of 1 for counting.\n// It returns the result as a slice of records, the total count of records, and an error if any.\n// The where parameter is an optional list of conditions to use when retrieving records.\n//\n// Example:\n//\n//    var model Model\n//    var result Result\n//    var count int\n//    where := []interface{}{"name = ?", "John"}\n//    result, count, err := model.AllAndCount(true)\n//    if err != nil {\n//        // Handle error.\n//    }\n//    fmt.Println(result, count)\nfunc (m *Model) AllAndCount(useFieldForCount bool) (result Result, totalCount int, err error)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["When querying the total count inside the method, the ",(0,r.jsx)(n.code,{children:"Limit/Page"})," operations in the query will be ignored."]}),"\n",(0,r.jsx)(n.h2,{id:"usage-example",children:"Usage Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// SELECT `uid`,`name` FROM `user` WHERE `status`=\'deleted\' LIMIT 0,10\n// SELECT COUNT(`uid`,`name`) FROM `user` WHERE `status`=\'deleted\'\nall, count, err := Model("user").Fields("uid", "name").Where("status", "deleted").Limit(0, 10).AllAndCount(true)\n\n// SELECT `uid`,`name` FROM `user` WHERE `status`=\'deleted\' LIMIT 0,10\n// SELECT COUNT(1) FROM `user` WHERE `status`=\'deleted\'\nall, count, err := Model("user").Fields("uid", "name").Where("status", "deleted").Limit(0, 10).AllAndCount(false)\n'})})]})}function c(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return d}});var o=t(667294);let r={},i=o.createContext(r);function d(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);
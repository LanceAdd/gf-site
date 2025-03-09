"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["40899"],{624130:function(e,r,n){n.r(r),n.d(r,{metadata:()=>t,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>a});var t=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406/ORM\u7ED3\u679C\u5904\u7406-\u4E3A\u7A7A\u5224\u65AD","title":"ORM Result - Empty Check","description":"Using the GoFrame framework for empty checks in ORM result processing. This includes handling data sets, multiple data records, data field values, as well as result processing methods for Struct objects and Struct arrays. By using methods like IsEmpty and IsNil, you can easily determine if the query result is empty.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406/ORM\u7ED3\u679C\u5904\u7406-\u4E3A\u7A7A\u5224\u65AD.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406","slug":"/docs/core/gdb-result-empty-check","permalink":"/en/docs/core/gdb-result-empty-check","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406/ORM\u7ED3\u679C\u5904\u7406-\u4E3A\u7A7A\u5224\u65AD.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732541616000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/core/gdb-result-empty-check","title":"ORM Result - Empty Check","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","GoFrame Framework","ORM","Result Processing","Empty Check","Data Set","Data Record","Data Field Value","Struct Object","Struct Array"],"description":"Using the GoFrame framework for empty checks in ORM result processing. This includes handling data sets, multiple data records, data field values, as well as result processing methods for Struct objects and Struct arrays. By using methods like IsEmpty and IsNil, you can easily determine if the query result is empty."},"sidebar":"mainSidebar","previous":{"title":"ORM Result - Types","permalink":"/en/docs/core/gdb-result-types"},"next":{"title":"ORM Result - Empty Array","permalink":"/en/docs/core/gdb-result-empty-array"}}'),s=n("785893"),i=n("250065");let a={slug:"/docs/core/gdb-result-empty-check",title:"ORM Result - Empty Check",sidebar_position:1,hide_title:!0,keywords:["GoFrame","GoFrame Framework","ORM","Result Processing","Empty Check","Data Set","Data Record","Data Field Value","Struct Object","Struct Array"],description:"Using the GoFrame framework for empty checks in ORM result processing. This includes handling data sets, multiple data records, data field values, as well as result processing methods for Struct objects and Struct arrays. By using methods like IsEmpty and IsNil, you can easily determine if the query result is empty."},l=void 0,o={},d=[{value:"I. Data Sets (Multiple)",id:"i-data-sets-multiple",level:2},{value:"II. Data Records (Single)",id:"ii-data-records-single",level:2},{value:"III. Data Field Value",id:"iii-data-field-value",level:2},{value:"IV. Field Value Array",id:"iv-field-value-array",level:2},{value:"V. <code>Struct</code> Object (\uD83D\uDD25Note\uD83D\uDD25)",id:"v-struct-object-note",level:2},{value:"VI. <code>Struct</code> Array",id:"vi-struct-array",level:2}];function c(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["Using ",(0,s.jsx)(r.code,{children:"GoFrame ORM"})," for checking if the returned result is empty is very simple. In most scenarios, you can directly check if the returned data is ",(0,s.jsx)(r.code,{children:"nil"})," or has a length of ",(0,s.jsx)(r.code,{children:"0"}),", or use the ",(0,s.jsx)(r.code,{children:"IsEmpty/IsNil"})," methods."]}),"\n",(0,s.jsx)(r.h2,{id:"i-data-sets-multiple",children:"I. Data Sets (Multiple)"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'r, err := g.Model("order").Where("status", 1).All()\nif err != nil {\n    return err\n}\nif len(r) == 0 {\n    // Result is empty\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["You can also use the ",(0,s.jsx)(r.code,{children:"IsEmpty"})," method:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'r, err := g.Model("order").Where("status", 1).All()\nif err != nil {\n    return err\n}\nif r.IsEmpty() {\n    // Result is empty\n}\n'})}),"\n",(0,s.jsx)(r.h2,{id:"ii-data-records-single",children:"II. Data Records (Single)"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'r, err := g.Model("order").Where("status", 1).One()\nif err != nil {\n    return err\n}\nif len(r) == 0 {\n    // Result is empty\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["You can also use the ",(0,s.jsx)(r.code,{children:"IsEmpty"})," method:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'r, err := g.Model("order").Where("status", 1).One()\nif err != nil {\n    return err\n}\nif r.IsEmpty() {\n    // Result is empty\n}\n'})}),"\n",(0,s.jsx)(r.h2,{id:"iii-data-field-value",children:"III. Data Field Value"}),"\n",(0,s.jsxs)(r.p,{children:['The return is a "generic" variable, so you can only use ',(0,s.jsx)(r.code,{children:"IsEmpty"})," to determine if it is empty."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'r, err := g.Model("order").Where("status", 1).Value()\nif err != nil {\n    return err\n}\nif r.IsEmpty() {\n    // Result is empty\n}\n'})}),"\n",(0,s.jsx)(r.h2,{id:"iv-field-value-array",children:"IV. Field Value Array"}),"\n",(0,s.jsxs)(r.p,{children:["The returned field value array is of type ",(0,s.jsx)(r.code,{children:"[]gdb.Value"}),", so you can directly check if the length is ",(0,s.jsx)(r.code,{children:"0"}),"."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'// Array/FindArray\nr, err := g.Model("order").Fields("id").Where("status", 1).Array()\nif err != nil {\n    return err\n}\nif len(r) == 0 {\n    // Result is empty\n}\n'})}),"\n",(0,s.jsxs)(r.h2,{id:"v-struct-object-note",children:["V. ",(0,s.jsx)(r.code,{children:"Struct"})," Object (\uD83D\uDD25Note\uD83D\uDD25)"]}),"\n",(0,s.jsxs)(r.p,{children:["For ",(0,s.jsx)(r.code,{children:"Struct"})," conversion object, there is a slight difference. Let's look at an example."]}),"\n",(0,s.jsxs)(r.p,{children:["When the passed object is ",(0,s.jsx)(r.strong,{children:"a null pointer"}),", if data is found in the query, this object will be ",(0,s.jsx)(r.strong,{children:"automatically created"})," internally. If no data is found, the null pointer remains a null pointer and no internal handling is done."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'var user *User\nerr := g.Model("order").Where("status", 1).Scan(&user)\nif err != nil {\n    return err\n}\nif user == nil {\n    // Result is empty\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["When the passed object is ",(0,s.jsx)(r.strong,{children:"already an initialized object"}),", if data is found, it will be assigned internally to this object. ",(0,s.jsxs)(r.strong,{children:["If no data is found, you cannot use ",(0,s.jsx)(r.code,{children:"nil"})," to check for an empty result"]}),". Therefore, ",(0,s.jsx)(r.code,{children:"ORM"})," will return an ",(0,s.jsx)(r.code,{children:"sql.ErrNoRows"})," error, indicating to the developer that no data has been found and no assignments were made, allowing further empty result checks."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'var user = new(User)\nerr := g.Model("order").Where("status", 1).Scan(&user)\nif err != nil && err != sql.ErrNoRows {\n    return err\n}\nif err == sql.ErrNoRows {\n    // Result is empty\n}\n'})}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsxs)(r.p,{children:["Therefore, we recommend that developers do not pass an already initialized object to ",(0,s.jsx)(r.code,{children:"ORM"}),", but rather pass a pointer to a pointer of the object (",(0,s.jsx)(r.code,{children:"**struct"})," type). Internally, ",(0,s.jsx)(r.code,{children:"ORM"})," will smartly perform automatic initialization based on the query result."]})}),"\n",(0,s.jsxs)(r.h2,{id:"vi-struct-array",children:["VI. ",(0,s.jsx)(r.code,{children:"Struct"})," Array"]}),"\n",(0,s.jsxs)(r.p,{children:["When the passed object array is initially an empty array (length ",(0,s.jsx)(r.code,{children:"0"}),"), if data is found, it will be automatically assigned internally to the array. If no data is found, the empty array remains an empty array, and no internal handling is done."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'var users []*User\nerr := g.Model("order").Where("status", 1).Scan(&users)\nif err != nil {\n    return err\n}\nif len(users) == 0 {\n    // Result is empty\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["When the passed object array is not an empty array, if data is found, it will be overridden internally onto the array from index ",(0,s.jsx)(r.code,{children:"0"}),". If no data is found, you cannot judge the empty result using length ",(0,s.jsx)(r.code,{children:"0"}),". Therefore, ",(0,s.jsx)(r.code,{children:"ORM"})," will return an ",(0,s.jsx)(r.code,{children:"sql.ErrNoRows"})," error, indicating that no data has been found and no assignments were made, allowing further empty result checks."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'var users = make([]*User, 100)\nerr := g.Model("order").Where("status", 1).Scan(&users)\nif err != nil {\n    return err\n}\nif err == sql.ErrNoRows {\n    // Result is empty\n}\n'})}),"\n",(0,s.jsx)(r.admonition,{type:"warning",children:(0,s.jsxs)(r.p,{children:["Due to ",(0,s.jsx)(r.code,{children:"Golang"})," reflection features employed in ",(0,s.jsx)(r.code,{children:"struct"})," conversion, there is a certain performance overhead. If you are dealing with conversions of large numbers of query result data into ",(0,s.jsx)(r.code,{children:"struct"})," array objects and need to improve conversion performance, please refer to the custom implementation of the corresponding ",(0,s.jsx)(r.code,{children:"struct"})," ",(0,s.jsx)(r.code,{children:"UnmarshalValue"})," method:\n",(0,s.jsx)(r.a,{href:"/en/docs/core/gconv-unmarshal-value",children:"Type Conversion - Interface"})]})})]})}function u(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return a}});var t=n(667294);let s={},i=t.createContext(s);function a(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);
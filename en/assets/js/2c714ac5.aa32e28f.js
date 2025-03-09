"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["84517"],{790184:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>s});var r=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406/ORM\u7ED3\u679C\u5904\u7406-\u7A7A\u6570\u7EC4\u7ED3\u6784\u8FD4\u56DE","title":"ORM Result - Empty Array","description":"Handling ORM query results in the GoFrame framework by initializing an empty array to avoid returning a null value when no data is queried, thereby enhancing user-friendly interaction with the frontend. This improvement ensures the predictability and stability of return formats when data needs to be displayed on web pages.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406/ORM\u7ED3\u679C\u5904\u7406-\u7A7A\u6570\u7EC4\u7ED3\u6784\u8FD4\u56DE.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406","slug":"/docs/core/gdb-result-empty-array","permalink":"/en/docs/core/gdb-result-empty-array","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406/ORM\u7ED3\u679C\u5904\u7406-\u7A7A\u6570\u7EC4\u7ED3\u6784\u8FD4\u56DE.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732440306000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/core/gdb-result-empty-array","title":"ORM Result - Empty Array","sidebar_position":2,"hide_title":true,"keywords":["GoFrame","ORM","Go Language","Database Operations","JSON Encoding","Frontend Development","Data Processing","Backend Development","Empty Array","GoFrame Framework"],"description":"Handling ORM query results in the GoFrame framework by initializing an empty array to avoid returning a null value when no data is queried, thereby enhancing user-friendly interaction with the frontend. This improvement ensures the predictability and stability of return formats when data needs to be displayed on web pages."},"sidebar":"mainSidebar","previous":{"title":"ORM Result - Empty Check","permalink":"/en/docs/core/gdb-result-empty-check"},"next":{"title":"ORM - Timezone","permalink":"/en/docs/core/gdb-timezone"}}'),i=t("785893"),a=t("250065");let s={slug:"/docs/core/gdb-result-empty-array",title:"ORM Result - Empty Array",sidebar_position:2,hide_title:!0,keywords:["GoFrame","ORM","Go Language","Database Operations","JSON Encoding","Frontend Development","Data Processing","Backend Development","Empty Array","GoFrame Framework"],description:"Handling ORM query results in the GoFrame framework by initializing an empty array to avoid returning a null value when no data is queried, thereby enhancing user-friendly interaction with the frontend. This improvement ensures the predictability and stability of return formats when data needs to be displayed on web pages."},o=void 0,d={},c=[{value:"Pain Point Description",id:"pain-point-description",level:2},{value:"Improvement Plan",id:"improvement-plan",level:2}];function l(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"pain-point-description",children:"Pain Point Description"}),"\n",(0,i.jsxs)(n.p,{children:["As described in the previous chapters, if a given array is uninitialized (with a value of ",(0,i.jsx)(n.code,{children:"nil"}),"), the ",(0,i.jsx)(n.code,{children:"ORM"})," will not automatically initialize that array when no data is queried based on the given conditions. Thus, if this uninitialized array result is encoded via ",(0,i.jsx)(n.code,{children:"JSON"}),", it will be converted to a ",(0,i.jsx)(n.code,{children:"null"})," value."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    _ "github.com/gogf/gf/contrib/drivers/mysql/v2"\n\n    "fmt"\n\n    "github.com/gogf/gf/v2/encoding/gjson"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gtime"\n)\n\nfunc main() {\n    type User struct {\n        Id        uint64      // Primary Key\n        Passport  string      // Account\n        Password  string      // Password\n        NickName  string      // Nickname\n        CreatedAt *gtime.Time // Creation Time\n        UpdatedAt *gtime.Time // Update Time\n    }\n    type Response struct {\n        Users []User\n    }\n    var res = &Response{}\n    err := g.Model("user").WhereGT("id", 10).Scan(&res.Users)\n    fmt.Println(err)\n    fmt.Println(gjson.MustEncodeString(res))\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"After execution, the terminal displays the result as:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<nil>\n{"Users":null}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In most scenarios, the data queried by the ",(0,i.jsx)(n.code,{children:"ORM"})," needs to be rendered on a browser page, which means the returned data needs to be processed by frontend ",(0,i.jsx)(n.code,{children:"JS"}),". To make it more friendly for frontend ",(0,i.jsx)(n.code,{children:"JS"})," to handle backend return data, when no data is queried on the backend, it is expected to return an empty array structure instead of a ",(0,i.jsx)(n.code,{children:"null"})," attribute value."]}),"\n",(0,i.jsx)(n.h2,{id:"improvement-plan",children:"Improvement Plan"}),"\n",(0,i.jsxs)(n.p,{children:["In this scenario, you can provide an initialized empty array to the ",(0,i.jsx)(n.code,{children:"Scan"})," method of the ",(0,i.jsx)(n.code,{children:"ORM"}),". When the ",(0,i.jsx)(n.code,{children:"ORM"})," doesn't query any data, the array attribute remains an empty array, rather than ",(0,i.jsx)(n.code,{children:"nil"}),", and the returned JSON encoding will not be a ",(0,i.jsx)(n.code,{children:"null"})," value."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    _ "github.com/gogf/gf/contrib/drivers/mysql/v2"\n\n    "fmt"\n\n    "github.com/gogf/gf/v2/encoding/gjson"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gtime"\n)\n\nfunc main() {\n    type User struct {\n        Id        uint64      // Primary Key\n        Passport  string      // Account\n        Password  string      // Password\n        NickName  string      // Nickname\n        CreatedAt *gtime.Time // Creation Time\n        UpdatedAt *gtime.Time // Update Time\n    }\n    type Response struct {\n        Users []User\n    }\n    var res = &Response{\n        Users: make([]User, 0),\n    }\n    err := g.Model("user").WhereGT("id", 10).Scan(&res.Users)\n    fmt.Println(err)\n    fmt.Println(gjson.MustEncodeString(res))\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"After execution, the terminal displays the result as:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<nil>\n{"Users":[]}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var r=t(667294);let i={},a=r.createContext(i);function s(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);
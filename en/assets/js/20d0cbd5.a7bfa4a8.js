"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["14318"],{977798:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>o});var n=JSON.parse('{"id":"course/starbook/\u7B2C\u4E8C\u7AE0-\u7528\u6237\u6CE8\u518C/2.5.\u63A5\u53E3\u6587\u6863","title":"2.5 API Documentation","description":"Providing interface documentation to the frontend using built-in features of the GoFrame framework. Developers can automatically generate detailed interface documentation by adding specific tags to the interface code. The documentation can be accessed via the Swagger browser or interfaced with other API tools in JSON format, saving developers time and effort. Common OpenAPI tags and their purposes are listed to help developers better organize and manage interface information.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/course/starbook/\u7B2C\u4E8C\u7AE0-\u7528\u6237\u6CE8\u518C/2.5.\u63A5\u53E3\u6587\u6863.md","sourceDirName":"course/starbook/\u7B2C\u4E8C\u7AE0-\u7528\u6237\u6CE8\u518C","slug":"/course/starbook/register-api-doc","permalink":"/en/course/starbook/register-api-doc","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/course/starbook/\u7B2C\u4E8C\u7AE0-\u7528\u6237\u6CE8\u518C/2.5.\u63A5\u53E3\u6587\u6863.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732458699000,"frontMatter":{"title":"2.5 API Documentation","hide_title":true,"slug":"/course/starbook/register-api-doc","keywords":["GoFrame","Interface Documentation","Automatic Generation","API Tools","Registration API","Swagger","OpenAPI","Tags","User Interface","JSON Documentation"],"description":"Providing interface documentation to the frontend using built-in features of the GoFrame framework. Developers can automatically generate detailed interface documentation by adding specific tags to the interface code. The documentation can be accessed via the Swagger browser or interfaced with other API tools in JSON format, saving developers time and effort. Common OpenAPI tags and their purposes are listed to help developers better organize and manage interface information."},"sidebar":"courseStarBookSidebar","previous":{"title":"2.4 Business Optimization","permalink":"/en/course/starbook/register-optimization"},"next":{"title":"2.6 Summary","permalink":"/en/course/starbook/register-summary"}}'),i=r("785893"),s=r("250065");let o={title:"2.5 API Documentation",hide_title:!0,slug:"/course/starbook/register-api-doc",keywords:["GoFrame","Interface Documentation","Automatic Generation","API Tools","Registration API","Swagger","OpenAPI","Tags","User Interface","JSON Documentation"],description:"Providing interface documentation to the frontend using built-in features of the GoFrame framework. Developers can automatically generate detailed interface documentation by adding specific tags to the interface code. The documentation can be accessed via the Swagger browser or interfaced with other API tools in JSON format, saving developers time and effort. Common OpenAPI tags and their purposes are listed to help developers better organize and manage interface information."},a=void 0,d={},c=[];function l(e){let t={a:"a",code:"code",em:"em",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["When the completed interface is handed over to the frontend for invocation, it is necessary to prepare interface documentation for them. Fortunately, ",(0,i.jsx)(t.code,{children:"GoFrame"})," has a built-in feature to automatically generate interface documentation, saving us a lot of time. By carrying some additional ",(0,i.jsx)(t.code,{children:"tags"})," when writing ",(0,i.jsx)(t.code,{children:"api"}),", beautiful documentation can be generated."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"api/users/v1/users.go"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package v1  \n  \nimport "github.com/gogf/gf/v2/frame/g"  \n  \ntype RegisterReq struct {  \n    g.Meta   `path:"users/register" method:"post" sm:"Register" tags:"User"`  \n    Username string `json:"username" v:"required|length:3,12" dc:"Username"`  \n    Password string `json:"password" v:"required|length:6,16" dc:"Password"`  \n    Email    string `json:"email" v:"required|email" dc:"Email"`  \n}  \n  \ntype RegisterRes struct {  \n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Open the browser at ",(0,i.jsx)(t.a,{href:"http://127.0.0.1:8000/swagger",children:"http://127.0.0.1:8000/swagger"}),":\n",(0,i.jsx)(t.img,{alt:"swagger",src:r(636855).Z+"",width:"2560",height:"1230"})]}),"\n",(0,i.jsxs)(t.p,{children:["Another address ",(0,i.jsx)(t.a,{href:"http://127.0.0.1:8000/api.json",children:"http://127.0.0.1:8000/api.json"})," provides interface documentation in ",(0,i.jsx)(t.code,{children:"Json"})," format, which can be imported into various ",(0,i.jsx)(t.code,{children:"Api"})," tools."]}),"\n",(0,i.jsxs)(t.p,{children:["In addition to ",(0,i.jsx)(t.code,{children:"sm"}),", ",(0,i.jsx)(t.code,{children:"tags"}),", and ",(0,i.jsx)(t.code,{children:"dc"})," tags, ",(0,i.jsx)(t.code,{children:"GoFrame"})," also provides the following tags:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Common OpenAPIv3 Tags"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Note"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"path"})}),(0,i.jsx)(t.td,{children:"Combines with the prefix registered to form the interface URI path"}),(0,i.jsxs)(t.td,{children:["Used in ",(0,i.jsx)(t.code,{children:"g.Meta"})," to identify interface metadata"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"tags"})}),(0,i.jsx)(t.td,{children:"The tag to which the interface belongs for interface categorization"}),(0,i.jsxs)(t.td,{children:["Used in ",(0,i.jsx)(t.code,{children:"g.Meta"})," to identify interface metadata"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"method"})}),(0,i.jsxs)(t.td,{children:["The request method of the interface: ",(0,i.jsx)(t.code,{children:"GET/PUT/POST/DELETE..."})," (case-insensitive)"]}),(0,i.jsxs)(t.td,{children:["Used in ",(0,i.jsx)(t.code,{children:"g.Meta"})," to identify interface metadata"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"deprecated"})}),(0,i.jsx)(t.td,{children:"Marks the interface as deprecated"}),(0,i.jsxs)(t.td,{children:["Used in ",(0,i.jsx)(t.code,{children:"g.Meta"})," to identify interface metadata"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"summary"})}),(0,i.jsx)(t.td,{children:"Summary description of the interface/parameter"}),(0,i.jsxs)(t.td,{children:["Abbreviated as ",(0,i.jsx)(t.code,{children:"sm"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"description"})}),(0,i.jsx)(t.td,{children:"Detailed description of the interface/parameter"}),(0,i.jsxs)(t.td,{children:["Abbreviated as ",(0,i.jsx)(t.code,{children:"dc"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"in"})}),(0,i.jsx)(t.td,{children:"Method of parameter submission"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"header/path/query/cookie"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"default"})}),(0,i.jsx)(t.td,{children:"Default value of the parameter"}),(0,i.jsxs)(t.td,{children:["Abbreviated as ",(0,i.jsx)(t.code,{children:"d"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"mime"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"MIME"})," type of the interface, such as ",(0,i.jsx)(t.code,{children:"multipart/form-data"}),", generally set globally, default is ",(0,i.jsx)(t.code,{children:"application/json"}),"."]}),(0,i.jsxs)(t.td,{children:["Used in ",(0,i.jsx)(t.code,{children:"g.Meta"})," to identify interface metadata"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"type"})}),(0,i.jsxs)(t.td,{children:["Type of the parameter, generally does not need to be set, specific parameters need to be set manually, such as ",(0,i.jsx)(t.code,{children:"file"})]}),(0,i.jsx)(t.td,{children:"Only for parameter properties"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},636855:function(e,t,r){r.d(t,{Z:function(){return n}});let n=r.p+"assets/images/swagger-214fd70c562c675e795b376b815ccde1.png"},250065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return o}});var n=r(667294);let i={},s=n.createContext(i);function o(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
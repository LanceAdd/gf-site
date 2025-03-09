"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["58135"],{443852:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>l,assets:()=>c,toc:()=>d,frontMatter:()=>s});var r=JSON.parse('{"id":"docs/\u6846\u67B6\u8BBE\u8BA1/\u5DE5\u7A0B\u5F00\u53D1\u8BBE\u8BA1/\u7ED3\u6784\u5316\u7F16\u7A0B\u8BBE\u8BA1","title":"Structured Programming","description":"How to improve code design through structured programming in the GoFrame framework, detailed analysis of unstructured problems encountered in the controller and service layers, and provides the advantages and examples of using structs to manage parameters. By structurally managing interface input and output, it simplifies parameter reception, validation, and conversion processes, boosts productivity, reduces maintenance costs, and facilitates easier interface documentation generation and standardized error handling mechanisms.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u6846\u67B6\u8BBE\u8BA1/\u5DE5\u7A0B\u5F00\u53D1\u8BBE\u8BA1/\u7ED3\u6784\u5316\u7F16\u7A0B\u8BBE\u8BA1.md","sourceDirName":"docs/\u6846\u67B6\u8BBE\u8BA1/\u5DE5\u7A0B\u5F00\u53D1\u8BBE\u8BA1","slug":"/docs/design/project-struct-parameter","permalink":"/en/docs/design/project-struct-parameter","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6846\u67B6\u8BBE\u8BA1/\u5DE5\u7A0B\u5F00\u53D1\u8BBE\u8BA1/\u7ED3\u6784\u5316\u7F16\u7A0B\u8BBE\u8BA1.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732455643000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/design/project-struct-parameter","title":"Structured Programming","sidebar_position":3,"hide_title":true,"keywords":["GoFrame framework","structured programming","parameter management","code design","interface optimization","automated documentation generation","code maintenance","parameter validation","productivity improvement","error mechanism"],"description":"How to improve code design through structured programming in the GoFrame framework, detailed analysis of unstructured problems encountered in the controller and service layers, and provides the advantages and examples of using structs to manage parameters. By structurally managing interface input and output, it simplifies parameter reception, validation, and conversion processes, boosts productivity, reduces maintenance costs, and facilitates easier interface documentation generation and standardized error handling mechanisms."},"sidebar":"mainSidebar","previous":{"title":"Pain Points and Improvements In Business Project","permalink":"/en/docs/design/project-dao-improvement"},"next":{"title":"Data and Business Models","permalink":"/en/docs/design/project-models"}}'),i=t("785893"),a=t("250065");let s={slug:"/docs/design/project-struct-parameter",title:"Structured Programming",sidebar_position:3,hide_title:!0,keywords:["GoFrame framework","structured programming","parameter management","code design","interface optimization","automated documentation generation","code maintenance","parameter validation","productivity improvement","error mechanism"],description:"How to improve code design through structured programming in the GoFrame framework, detailed analysis of unstructured problems encountered in the controller and service layers, and provides the advantages and examples of using structs to manage parameters. By structurally managing interface input and output, it simplifies parameter reception, validation, and conversion processes, boosts productivity, reduces maintenance costs, and facilitates easier interface documentation generation and standardized error handling mechanisms."},o=void 0,c={},d=[{value:"I. Introduction",id:"i-introduction",level:2},{value:"1. Pain Points of Unstructured <code>controller</code>",id:"1-pain-points-of-unstructured-controller",level:3},{value:"2. Pain Points of Unstructured <code>service</code>",id:"2-pain-points-of-unstructured-service",level:3},{value:"II. Structured Programming",id:"ii-structured-programming",level:2},{value:"1. Structured Improvements for <code>controller</code>",id:"1-structured-improvements-for-controller",level:3},{value:"2. Structured Improvements for <code>service</code>",id:"2-structured-improvements-for-service",level:3},{value:"III. Precautions",id:"iii-precautions",level:2}];function u(e){let n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"i-introduction",children:"I. Introduction"}),"\n",(0,i.jsx)(n.p,{children:"Structured programming can be simply understood as passing and returning parameters by defining structs."}),"\n",(0,i.jsxs)(n.p,{children:["We recommend using structured definitions to manage input/output when necessary, especially in the code design of the ",(0,i.jsx)(n.code,{children:"controller"})," and ",(0,i.jsx)(n.code,{children:"service"})," layers."]}),"\n",(0,i.jsxs)(n.h3,{id:"1-pain-points-of-unstructured-controller",children:["1. Pain Points of Unstructured ",(0,i.jsx)(n.code,{children:"controller"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(495835).Z+"",width:"2320",height:"1296"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It is difficult to determine the data structure of interface input/output. Most scenarios involve hard-coded parameter reception names in the code, prone to errors leading to unforeseen issues."}),"\n",(0,i.jsxs)(n.li,{children:["Interface parameters often only define an ",(0,i.jsx)(n.code,{children:"HttpRequest/HttpContext"})," object pointer, making it difficult to determine if the interface succeeded or failed."]}),"\n",(0,i.jsx)(n.li,{children:"The processes of parameter reception, validation, and conversion are tedious."}),"\n",(0,i.jsx)(n.li,{children:"Generating and maintaining interface documentation is extremely challenging."}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"2-pain-points-of-unstructured-service",children:["2. Pain Points of Unstructured ",(0,i.jsx)(n.code,{children:"service"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(914629).Z+"",width:"2874",height:"1406"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When there are many method parameters, the definition is awkward, and usage is cumbersome."}),"\n",(0,i.jsx)(n.li,{children:"When the number and type of method parameters are uncertain, any arbitrary change (like adding a parameter) is non-compatible, leading to high modification costs."}),"\n",(0,i.jsx)(n.li,{children:"Method parameter annotations are inconvenient, resulting in most business projects lacking method parameter annotations."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ii-structured-programming",children:"II. Structured Programming"}),"\n",(0,i.jsxs)(n.h3,{id:"1-structured-improvements-for-controller",children:["1. Structured Improvements for ",(0,i.jsx)(n.code,{children:"controller"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Advantages of Structuring:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"By structurally managing interface input/output parameters, hard-coding parameter names for reception is no longer needed, reducing maintenance costs and avoiding errors due to hard-coded parameter names."}),"\n",(0,i.jsx)(n.li,{children:"Enables automated parameter reception, conversion, and validation, thereby improving productivity."}),"\n",(0,i.jsx)(n.li,{children:"Standardizes interface writing."}),"\n",(0,i.jsxs)(n.li,{children:["Makes interface management as convenient as ordinary function management, allowing error handling by returning ",(0,i.jsx)(n.code,{children:"error"})," and standardizing the unified error mechanism."]}),"\n",(0,i.jsx)(n.li,{children:"Automates interface documentation generation, ensuring synchronized maintenance of interface structure definitions and documentation."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example of Structuring:"})}),"\n",(0,i.jsx)(n.p,{children:"Structure Definition:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(229216).Z+"",width:"2308",height:"682"})}),"\n",(0,i.jsx)(n.p,{children:"Method Usage:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(441688).Z+"",width:"2304",height:"842"})}),"\n",(0,i.jsxs)(n.h3,{id:"2-structured-improvements-for-service",children:["2. Structured Improvements for ",(0,i.jsx)(n.code,{children:"service"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Advantages of Structuring:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When there are many method parameters, structs elegantly manage these parameters."}),"\n",(0,i.jsx)(n.li,{children:"When the number and type of method parameters are uncertain, adding parameters is compatible with method invocation."}),"\n",(0,i.jsx)(n.li,{children:"Provides more convenient annotations for struct properties, enhancing code maintenance quality."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example of Structuring:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(578255).Z+"",width:"2892",height:"1192"})}),"\n",(0,i.jsx)(n.h2,{id:"iii-precautions",children:"III. Precautions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["When using structured management for input/output parameters in the ",(0,i.jsx)(n.code,{children:"service"})," layer methods, any parameter within the struct will be considered optional. It's necessary to reasonably assess feasibility based on business scenarios."]}),"\n"]})]})}function l(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},578255:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/37a0eecf7f1c45bf99bdd98ec205eea0-08141c2116457e137d5407c72083517c.png"},229216:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/686ee75e775a1076387154615c40e868-0ce0b414b8e6af9faf601a2587b95163.png"},441688:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/6f0cd9333bb1c514a1047c0e17024997-89e3663c08e34a6df466ec4303cb66a9.png"},495835:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/e76d9687eb2d840494ce98a644e05d95-0c853f11bd81600cbbe87d12d11c2601.png"},914629:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/f8434f1243e4d9dace23021f0f2132a4-b965af8c5551a60cdda003b58292d54a.png"},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var r=t(667294);let i={},a=r.createContext(i);function s(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["18078"],{23638:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>s,default:()=>c,assets:()=>d,toc:()=>l,frontMatter:()=>o});var n=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-\u53C2\u6570\u7C7B\u578B/\u6570\u636E\u6821\u9A8C-Map\u6821\u9A8C/Map\u6821\u9A8C-\u6821\u9A8C\u987A\u5E8F\u6027","title":"Map Validation - Sequence","description":"Implementing the order of Map validation in the GoFrame framework. By modifying the rule parameter type to []string, the order of the returned error messages can be consistent with the set rules, solving the issue of non-fixed validation results caused by the unordered nature of map types in golang. This tutorial provides detailed example code and execution results to help users understand how to perform order validation using GoFrame.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-\u53C2\u6570\u7C7B\u578B/\u6570\u636E\u6821\u9A8C-Map\u6821\u9A8C/Map\u6821\u9A8C-\u6821\u9A8C\u987A\u5E8F\u6027.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-\u53C2\u6570\u7C7B\u578B/\u6570\u636E\u6821\u9A8C-Map\u6821\u9A8C","slug":"/docs/core/gvalid-parameter-type-map-sequence","permalink":"/en/docs/core/gvalid-parameter-type-map-sequence","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-\u53C2\u6570\u7C7B\u578B/\u6570\u636E\u6821\u9A8C-Map\u6821\u9A8C/Map\u6821\u9A8C-\u6821\u9A8C\u987A\u5E8F\u6027.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732541616000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/core/gvalid-parameter-type-map-sequence","title":"Map Validation - Sequence","sidebar_position":1,"hide_title":true,"keywords":["Map Validation","Validation Order","GoFrame","Parameter Validation","golang","map Type","Rule Order","Validation Error Information","gogf","Data Validation"],"description":"Implementing the order of Map validation in the GoFrame framework. By modifying the rule parameter type to []string, the order of the returned error messages can be consistent with the set rules, solving the issue of non-fixed validation results caused by the unordered nature of map types in golang. This tutorial provides detailed example code and execution results to help users understand how to perform order validation using GoFrame."},"sidebar":"mainSidebar","previous":{"title":"Map Validation - Example","permalink":"/en/docs/core/gvalid-parameter-type-map-example"},"next":{"title":"Data Type - Struct","permalink":"/en/docs/core/gvalid-parameter-type-struct"}}'),a=r("785893"),i=r("250065");let o={slug:"/docs/core/gvalid-parameter-type-map-sequence",title:"Map Validation - Sequence",sidebar_position:1,hide_title:!0,keywords:["Map Validation","Validation Order","GoFrame","Parameter Validation","golang","map Type","Rule Order","Validation Error Information","gogf","Data Validation"],description:"Implementing the order of Map validation in the GoFrame framework. By modifying the rule parameter type to []string, the order of the returned error messages can be consistent with the set rules, solving the issue of non-fixed validation results caused by the unordered nature of map types in golang. This tutorial provides detailed example code and execution results to help users understand how to perform order validation using GoFrame."},s=void 0,d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Sequential Validation",id:"sequential-validation",level:2}];function u(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(t.p,{children:["If you execute the previous example code several times, you will find that the returned results are unordered, and the order of the fields and rules is completely random. Even if we use other methods like ",(0,a.jsx)(t.code,{children:"FirstItem"}),", ",(0,a.jsx)(t.code,{children:"FirstString()"})," to obtain validation results, they are the same, and the returned validation results are not fixed. This is because the rules we pass are of the ",(0,a.jsx)(t.code,{children:"map"})," type, and the ",(0,a.jsx)(t.code,{children:"map"})," type in ",(0,a.jsx)(t.code,{children:"golang"})," does not have order, so the validation results are random, and the same validation method may return different result values each time it is executed."]}),"\n",(0,a.jsx)(t.h2,{id:"sequential-validation",children:"Sequential Validation"}),"\n",(0,a.jsxs)(t.p,{children:["Let's improve the above example: If the validation result does not satisfy the ",(0,a.jsx)(t.code,{children:"required"})," rule, it returns the corresponding error message; otherwise, it returns the subsequent validation error message. In other words, the returned error messages should be consistent with the sequence defined in the rules. As follows:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx    = gctx.New()\n        params = map[string]interface{}{\n            "passport":  "",\n            "password":  "123456",\n            "password2": "1234567",\n        }\n        rules = []string{\n            "passport@required|length:6,16#\u8D26\u53F7\u4E0D\u80FD\u4E3A\u7A7A|\u8D26\u53F7\u957F\u5EA6\u5E94\u5F53\u5728{min}\u5230{max}\u4E4B\u95F4",\n            "password@required|length:6,16|same:password2#\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A|\u5BC6\u7801\u957F\u5EA6\u5E94\u5F53\u5728{min}\u5230{max}\u4E4B\u95F4|\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u76F8\u7B49",\n            "password2@required|length:6,16#",\n        }\n    )\n    err := g.Validator().Rules(rules).Data(params).Run(ctx)\n    if err != nil {\n        fmt.Println(err.Map())\n        fmt.Println(err.FirstItem())\n        fmt.Println(err.FirstError())\n    }\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"After execution, the terminal output:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"map[length:\u8D26\u53F7\u957F\u5EA6\u5E94\u5F53\u57286\u523016\u4E4B\u95F4 required:\u8D26\u53F7\u4E0D\u80FD\u4E3A\u7A7A]\npassport map[length:\u8D26\u53F7\u957F\u5EA6\u5E94\u5F53\u57286\u523016\u4E4B\u95F4 required:\u8D26\u53F7\u4E0D\u80FD\u4E3A\u7A7A]\n\u8D26\u53F7\u4E0D\u80FD\u4E3A\u7A7A\n"})}),"\n",(0,a.jsxs)(t.p,{children:["As you can see, if we want the validation results to maintain order, we just need to change the type of the ",(0,a.jsx)(t.code,{children:"rules"})," parameter to ",(0,a.jsx)(t.code,{children:"[]string"})," and set them according to a certain rule. Furthermore, the ",(0,a.jsx)(t.code,{children:"msgs"})," parameter can be defined directly in the ",(0,a.jsx)(t.code,{children:"rules"})," parameter or passed separately (using a third parameter). For detailed rules on writing validation rules in ",(0,a.jsx)(t.code,{children:"rules"}),", please refer to the chapter ",(0,a.jsx)(t.a,{href:"/en/docs/core/gvalid-parameter-type-struct-example",children:"Struct Validation - Example"}),"."]})]})}function c(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return o}});var n=r(667294);let a={},i=n.createContext(a);function o(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
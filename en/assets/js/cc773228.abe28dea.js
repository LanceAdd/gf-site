"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["7540"],{415585:function(n,e,t){t.r(e),t.d(e,{metadata:()=>a,contentTitle:()=>s,default:()=>m,assets:()=>d,toc:()=>c,frontMatter:()=>r});var a=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u901A\u7528\u7F16\u89E3\u7801-gjson/\u901A\u7528\u7F16\u89E3\u7801-\u52A8\u6001\u521B\u5EFA\u4FEE\u6539","title":"General Codec - Dynamic Creation and Modification","description":"Using gjson in the GoFrame framework for dynamic data creation and modification. gjson not only parses and retrieves unknown data structures flexibly but also dynamically creates and edits data content. Through specific examples, methods for setting data, creating arrays, and modifying JSON content are demonstrated, making the encoding and parsing of data structures more flexible and convenient.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u901A\u7528\u7F16\u89E3\u7801-gjson/\u901A\u7528\u7F16\u89E3\u7801-\u52A8\u6001\u521B\u5EFA\u4FEE\u6539.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u901A\u7528\u7F16\u89E3\u7801-gjson","slug":"/docs/components/encoding-gjson-dynamic-creating-and-editing","permalink":"/en/docs/components/encoding-gjson-dynamic-creating-and-editing","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u901A\u7528\u7F16\u89E3\u7801-gjson/\u901A\u7528\u7F16\u89E3\u7801-\u52A8\u6001\u521B\u5EFA\u4FEE\u6539.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732443619000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/components/encoding-gjson-dynamic-creating-and-editing","title":"General Codec - Dynamic Creation and Modification","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","GoFrame framework","gjson","dynamic creation","dynamic modification","data structure","JSON parsing","encoding","decoding","Go language"],"description":"Using gjson in the GoFrame framework for dynamic data creation and modification. gjson not only parses and retrieves unknown data structures flexibly but also dynamically creates and edits data content. Through specific examples, methods for setting data, creating arrays, and modifying JSON content are demonstrated, making the encoding and parsing of data structures more flexible and convenient."},"sidebar":"mainSidebar","previous":{"title":"General Codec - Struct","permalink":"/en/docs/components/encoding-gjson-struct-converting"},"next":{"title":"General Codec - Data Format","permalink":"/en/docs/components/encoding-gjson-format-converting"}}'),i=t("785893"),o=t("250065");let r={slug:"/docs/components/encoding-gjson-dynamic-creating-and-editing",title:"General Codec - Dynamic Creation and Modification",sidebar_position:3,hide_title:!0,keywords:["GoFrame","GoFrame framework","gjson","dynamic creation","dynamic modification","data structure","JSON parsing","encoding","decoding","Go language"],description:"Using gjson in the GoFrame framework for dynamic data creation and modification. gjson not only parses and retrieves unknown data structures flexibly but also dynamically creates and edits data content. Through specific examples, methods for setting data, creating arrays, and modifying JSON content are demonstrated, making the encoding and parsing of data structures more flexible and convenient."},s=void 0,d={},c=[{value:"Dynamic Creation",id:"dynamic-creation",level:2},{value:"Example 1, Simple Usage",id:"example-1-simple-usage",level:3},{value:"Example 2, Creating Arrays",id:"example-2-creating-arrays",level:3},{value:"Dynamic Modification",id:"dynamic-modification",level:2}];function l(n){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"gjson"})," can not only flexibly parse and retrieve unknown data structure content but also dynamically create and modify data structure content."]}),"\n",(0,i.jsx)(e.h2,{id:"dynamic-creation",children:"Dynamic Creation"}),"\n",(0,i.jsx)(e.h3,{id:"example-1-simple-usage",children:"Example 1, Simple Usage"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'func main() {\n    j := gjson.New(nil)\n    j.Set("name", "John")\n    j.Set("score", 99.5)\n    fmt.Printf(\n        "Name: %s, Score: %v\\n",\n        j.Get("name").String(),\n        j.Get("score").Float32(),\n    )\n    fmt.Println(j.MustToJsonString())\n\n    // Output:\n    // Name: John, Score: 99.5\n    // {"name":"John","score":99.5}\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"example-2-creating-arrays",children:"Example 2, Creating Arrays"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'func main() {\n    j := gjson.New(nil)\n    for i := 0; i < 5; i++ {\n        j.Set(fmt.Sprintf(`%d.id`, i), i)\n        j.Set(fmt.Sprintf(`%d.name`, i), fmt.Sprintf(`student-%d`, i))\n    }\n    fmt.Println(j.MustToJsonString())\n\n    // Output:\n    // [{"id":0,"name":"student-0"},{"id":1,"name":"student-1"},{"id":2,"name":"student-2"},{"id":3,"name":"student-3"},{"id":4,"name":"student-4"}]\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"dynamic-modification",children:"Dynamic Modification"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'func main() {\n    data :=\n        `{\n    "users" : {\n        "count" : 2,\n        "list"  : [\n            {"name" : "Ming", "score" : 60},\n            {"name" : "John", "score" : 59}\n        ]\n    }\n}`\n    if j, err := gjson.DecodeToJson(data); err != nil {\n        panic(err)\n    } else {\n        j.Set("users.list.1.score", 100)\n        fmt.Println("John Score:", j.Get("users.list.1.score").Float32())\n        fmt.Println(j.MustToJsonString())\n    }\n    // Output:\n    // John Score: 100\n    // {"users":{"count":2,"list":[{"name":"Ming","score":60},{"name":"John","score":100}]}}\n}\n'})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"JSON"})," data can be read through ",(0,i.jsx)(e.code,{children:"gjson"}),", and the internal variables can be changed using the ",(0,i.jsx)(e.code,{children:"Set"})," method. Of course, you can also ",(0,i.jsx)(e.code,{children:"add/delete"})," content. When you need to delete content, just set the value to ",(0,i.jsx)(e.code,{children:"nil"}),". The runtime modification features of the ",(0,i.jsx)(e.code,{children:"gjson"})," package are very powerful, and with the support of this feature, the encoding/decoding of various data structures becomes extremely flexible and convenient."]})]})}function m(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return s},a:function(){return r}});var a=t(667294);let i={},o=a.createContext(i);function r(n){let e=a.useContext(o);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),a.createElement(o.Provider,{value:e},n.children)}}}]);
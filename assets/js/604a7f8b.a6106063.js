"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["94730"],{41325:function(t,e,n){n.r(e),n.d(e,{metadata:()=>r,contentTitle:()=>c,default:()=>l,assets:()=>u,toc:()=>a,frontMatter:()=>i});var r=JSON.parse('{"id":"\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u901A\u7528\u7F16\u89E3\u7801-gjson/\u901A\u7528\u7F16\u89E3\u7801-Struct\u8F6C\u6362","title":"\u901A\u7528\u7F16\u89E3\u7801-Struct\u8F6C\u6362","description":"Struct \u8F6C\u6362","source":"@site/versioned_docs/version-2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u901A\u7528\u7F16\u89E3\u7801-gjson/\u901A\u7528\u7F16\u89E3\u7801-Struct\u8F6C\u6362.md","sourceDirName":"\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u901A\u7528\u7F16\u89E3\u7801-gjson","slug":"/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u901A\u7528\u7F16\u89E3\u7801-gjson/\u901A\u7528\u7F16\u89E3\u7801-Struct\u8F6C\u6362","permalink":"/2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u901A\u7528\u7F16\u89E3\u7801-gjson/\u901A\u7528\u7F16\u89E3\u7801-Struct\u8F6C\u6362","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u901A\u7528\u7F16\u89E3\u7801-gjson/\u901A\u7528\u7F16\u89E3\u7801-Struct\u8F6C\u6362.md","tags":[],"version":"2.3.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":2,"frontMatter":{"title":"\u901A\u7528\u7F16\u89E3\u7801-Struct\u8F6C\u6362","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u901A\u7528\u7F16\u89E3\u7801-\u5C42\u7EA7\u8BBF\u95EE","permalink":"/2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u901A\u7528\u7F16\u89E3\u7801-gjson/\u901A\u7528\u7F16\u89E3\u7801-\u5C42\u7EA7\u8BBF\u95EE"},"next":{"title":"\u901A\u7528\u7F16\u89E3\u7801-\u52A8\u6001\u521B\u5EFA\u4FEE\u6539","permalink":"/2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u901A\u7528\u7F16\u89E3\u7801-gjson/\u901A\u7528\u7F16\u89E3\u7801-\u52A8\u6001\u521B\u5EFA\u4FEE\u6539"}}'),s=n("785893"),o=n("250065");let i={title:"\u901A\u7528\u7F16\u89E3\u7801-Struct\u8F6C\u6362",sidebar_position:2,hide_title:!0},c=void 0,u={},a=[{value:"<code>Struct</code> \u8F6C\u6362",id:"struct-\u8F6C\u6362",level:2}];function d(t){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h2,{id:"struct-\u8F6C\u6362",children:[(0,s.jsx)(e.code,{children:"Struct"})," \u8F6C\u6362"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Struct"})," \u65B9\u6CD5\u7528\u4E8E\u5C06\u6574\u4E2A ",(0,s.jsx)(e.code,{children:"Json"})," \u5305\u542B\u7684\u6570\u636E\u5185\u5BB9\u8F6C\u6362\u4E3A\u6307\u5B9A\u7684\u6570\u636E\u683C\u5F0F\u6216\u8005\u5BF9\u8C61\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'data :=\n    `\n{\n    "count" : 1,\n    "array" : ["John", "Ming"]\n}`\nif j, err := gjson.DecodeToJson(data); err != nil {\n    panic(err)\n} else {\n    type Users struct {\n        Count int\n        Array []string\n    }\n    users := new(Users)\n    if err := j.Scan(users); err != nil {\n        panic(err)\n    }\n    fmt.Printf(`%+v`, users)\n}\n\n// Output:\n// &{Count:1 Array:[John Ming]}\n'})})]})}function l(t={}){let{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},250065:function(t,e,n){n.d(e,{Z:function(){return c},a:function(){return i}});var r=n(667294);let s={},o=r.createContext(s);function i(t){let e=r.useContext(o);return r.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),r.createElement(o.Provider,{value:e},t.children)}}}]);
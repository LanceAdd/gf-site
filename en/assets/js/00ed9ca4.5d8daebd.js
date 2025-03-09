"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["85107"],{359295:function(e,s,i){i.r(s),i.d(s,{metadata:()=>n,contentTitle:()=>c,default:()=>x,assets:()=>t,toc:()=>o,frontMatter:()=>l});var n=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5B57\u6BB5\u83B7\u53D6","title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u5B57\u6BB5\u83B7\u53D6","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684ORM\u94FE\u5F0F\u64CD\u4F5C\u6765\u83B7\u53D6\u6570\u636E\u5E93\u8868\u5B57\u6BB5\u7684\u6280\u5DE7\uFF0C\u5305\u62EC\u4F7F\u7528FieldsStr\u548CFieldsExStr\u65B9\u6CD5\u83B7\u53D6\u6307\u5B9A\u8868\u7684\u5B57\u6BB5\u53CA\u6392\u9664\u5B57\u6BB5\u7684\u7528\u6CD5\uFF0C\u652F\u6301\u5B57\u6BB5\u524D\u7F00\u81EA\u5B9A\u4E49\uFF0C\u63D0\u5347\u5F00\u53D1\u6548\u7387\u548C\u4EE3\u7801\u53EF\u8BFB\u6027\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5B57\u6BB5\u83B7\u53D6.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C","slug":"/docs/core/gdb-chaining-fields-retrieving","permalink":"/en/2.7.x/docs/core/gdb-chaining-fields-retrieving","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5B57\u6BB5\u83B7\u53D6.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":7,"frontMatter":{"slug":"/docs/core/gdb-chaining-fields-retrieving","title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u5B57\u6BB5\u83B7\u53D6","sidebar_position":7,"hide_title":true,"keywords":["ORM","\u94FE\u5F0F\u64CD\u4F5C","\u5B57\u6BB5\u83B7\u53D6","FieldsStr","FieldsExStr","GoFrame","GoFrame\u6846\u67B6","\u6570\u636E\u5E93\u5B57\u6BB5","\u5B57\u6BB5\u524D\u7F00","\u5B57\u6BB5\u6392\u9664"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684ORM\u94FE\u5F0F\u64CD\u4F5C\u6765\u83B7\u53D6\u6570\u636E\u5E93\u8868\u5B57\u6BB5\u7684\u6280\u5DE7\uFF0C\u5305\u62EC\u4F7F\u7528FieldsStr\u548CFieldsExStr\u65B9\u6CD5\u83B7\u53D6\u6307\u5B9A\u8868\u7684\u5B57\u6BB5\u53CA\u6392\u9664\u5B57\u6BB5\u7684\u7528\u6CD5\uFF0C\u652F\u6301\u5B57\u6BB5\u524D\u7F00\u81EA\u5B9A\u4E49\uFF0C\u63D0\u5347\u5F00\u53D1\u6548\u7387\u548C\u4EE3\u7801\u53EF\u8BFB\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u5B57\u6BB5\u8FC7\u6EE4","permalink":"/en/2.7.x/docs/core/gdb-chaining-fields-filtering"},"next":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u4E8B\u52A1\u5904\u7406","permalink":"/en/2.7.x/docs/core/gdb-chaining-transaction"}}'),d=i("785893"),r=i("250065");let l={slug:"/docs/core/gdb-chaining-fields-retrieving",title:"ORM\u94FE\u5F0F\u64CD\u4F5C-\u5B57\u6BB5\u83B7\u53D6",sidebar_position:7,hide_title:!0,keywords:["ORM","\u94FE\u5F0F\u64CD\u4F5C","\u5B57\u6BB5\u83B7\u53D6","FieldsStr","FieldsExStr","GoFrame","GoFrame\u6846\u67B6","\u6570\u636E\u5E93\u5B57\u6BB5","\u5B57\u6BB5\u524D\u7F00","\u5B57\u6BB5\u6392\u9664"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684ORM\u94FE\u5F0F\u64CD\u4F5C\u6765\u83B7\u53D6\u6570\u636E\u5E93\u8868\u5B57\u6BB5\u7684\u6280\u5DE7\uFF0C\u5305\u62EC\u4F7F\u7528FieldsStr\u548CFieldsExStr\u65B9\u6CD5\u83B7\u53D6\u6307\u5B9A\u8868\u7684\u5B57\u6BB5\u53CA\u6392\u9664\u5B57\u6BB5\u7684\u7528\u6CD5\uFF0C\u652F\u6301\u5B57\u6BB5\u524D\u7F00\u81EA\u5B9A\u4E49\uFF0C\u63D0\u5347\u5F00\u53D1\u6548\u7387\u548C\u4EE3\u7801\u53EF\u8BFB\u6027\u3002"},c=void 0,t={},o=[{value:"<code>FieldsStr/FieldsExStr</code> \u5B57\u6BB5\u83B7\u53D6",id:"fieldsstrfieldsexstr-\u5B57\u6BB5\u83B7\u53D6",level:2},{value:"<code>FieldsStr</code> \u793A\u4F8B",id:"fieldsstr-\u793A\u4F8B",level:3},{value:"<code>FieldsExStr</code> \u793A\u4F8B",id:"fieldsexstr-\u793A\u4F8B",level:3}];function a(e){let s={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.h2,{id:"fieldsstrfieldsexstr-\u5B57\u6BB5\u83B7\u53D6",children:[(0,d.jsx)(s.code,{children:"FieldsStr/FieldsExStr"})," \u5B57\u6BB5\u83B7\u53D6"]}),"\n",(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"FieldsStr"}),' \u7528\u4E8E\u83B7\u53D6\u6307\u5B9A\u8868\u7684\u5B57\u6BB5\uFF0C\u5E76\u53EF\u7ED9\u5B9A\u5B57\u6BB5\u524D\u7F00\uFF0C\u5B57\u6BB5\u4E4B\u95F4\u4F7F\u7528" ',(0,d.jsx)(s.code,{children:","}),'"\u7B26\u53F7\u8FDE\u63A5\u6210\u5B57\u7B26\u4E32\u8FD4\u56DE\uFF1B']}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"FieldsExStr"}),' \u7528\u4E8E\u83B7\u53D6\u6307\u5B9A\u8868\u4E2D\u4F8B\u5916\u7684\u5B57\u6BB5\uFF0C\u5E76\u53EF\u7ED9\u5B9A\u5B57\u6BB5\u524D\u7F00\uFF0C\u5B57\u6BB5\u4E4B\u95F4\u4F7F\u7528" ',(0,d.jsx)(s.code,{children:","}),'"\u7B26\u53F7\u8FDE\u63A5\u6210\u5B57\u7B26\u4E32\u8FD4\u56DE\uFF1B']}),"\n"]}),"\n",(0,d.jsxs)(s.h3,{id:"fieldsstr-\u793A\u4F8B",children:[(0,d.jsx)(s.code,{children:"FieldsStr"})," \u793A\u4F8B"]}),"\n",(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsxs)(s.p,{children:["\u5047\u5982 ",(0,d.jsx)(s.code,{children:"user"})," \u8868\u67094\u4E2A\u5B57\u6BB5 ",(0,d.jsx)(s.code,{children:"uid"}),", ",(0,d.jsx)(s.code,{children:"nickname"}),", ",(0,d.jsx)(s.code,{children:"passport"}),", ",(0,d.jsx)(s.code,{children:"password"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u67E5\u8BE2\u5B57\u6BB5"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-go",children:'// uid,nickname,passport,password\ng.Model("user").FieldsStr()\n'})}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u67E5\u8BE2\u5B57\u6BB5\u7ED9\u6307\u5B9A\u524D\u7F00"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-go",children:'// gf_uid,gf_nickname,gf_passport,gf_password\ng.Model("user").FieldsStr("gf_")\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(s.h3,{id:"fieldsexstr-\u793A\u4F8B",children:[(0,d.jsx)(s.code,{children:"FieldsExStr"})," \u793A\u4F8B"]}),"\n",(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsxs)(s.p,{children:["\u5047\u5982 ",(0,d.jsx)(s.code,{children:"user"})," \u8868\u67094\u4E2A\u5B57\u6BB5 ",(0,d.jsx)(s.code,{children:"uid"}),", ",(0,d.jsx)(s.code,{children:"nickname"}),", ",(0,d.jsx)(s.code,{children:"passport"}),", ",(0,d.jsx)(s.code,{children:"password"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u67E5\u8BE2\u5B57\u6BB5\u6392\u9664"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-go",children:'// uid,nickname\ng.Model("user").FieldsExStr("passport, password")\n'})}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u67E5\u8BE2\u5B57\u6BB5\u6392\u9664\u5E76\u7ED9\u5B9A\u524D\u7F00"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-go",children:'// gf_uid,gf_nickname\ng.Model("user").FieldsExStr("passport, password", "gf_")\n'})}),"\n"]}),"\n"]})]})}function x(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,s,i){i.d(s,{Z:function(){return c},a:function(){return l}});var n=i(667294);let d={},r=n.createContext(d);function l(e){let s=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);
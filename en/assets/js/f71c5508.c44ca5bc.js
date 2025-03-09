"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["68858"],{367841:function(e,t,o){o.r(t),o.d(t,{metadata:()=>n,contentTitle:()=>i,default:()=>m,assets:()=>c,toc:()=>p,frontMatter:()=>a});var n=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u6587\u672C\u5904\u7406/\u6B63\u5219\u8868\u8FBE\u5F0F-gregex/\u6B63\u5219\u8868\u8FBE\u5F0F-\u57FA\u672C\u4F7F\u7528","title":"Regular Expressions - Usage","description":"Demonstrates how to use regular expressions in the GoFrame framework for basic text matching operations. Through a simple example code, you can learn how to extract and process information from strings, providing an important reference for developers in text processing.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u7EC4\u4EF6\u5217\u8868/\u6587\u672C\u5904\u7406/\u6B63\u5219\u8868\u8FBE\u5F0F-gregex/\u6B63\u5219\u8868\u8FBE\u5F0F-\u57FA\u672C\u4F7F\u7528.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u6587\u672C\u5904\u7406/\u6B63\u5219\u8868\u8FBE\u5F0F-gregex","slug":"/docs/components/text-gregex-example","permalink":"/en/docs/components/text-gregex-example","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u6587\u672C\u5904\u7406/\u6B63\u5219\u8868\u8FBE\u5F0F-gregex/\u6B63\u5219\u8868\u8FBE\u5F0F-\u57FA\u672C\u4F7F\u7528.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732443619000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/components/text-gregex-example","title":"Regular Expressions - Usage","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","GoFrame framework","regular expressions","basic usage","programming example","Golang","text processing","software development","open source framework","Go language"],"description":"Demonstrates how to use regular expressions in the GoFrame framework for basic text matching operations. Through a simple example code, you can learn how to extract and process information from strings, providing an important reference for developers in text processing."},"sidebar":"mainSidebar","previous":{"title":"Regular Expression","permalink":"/en/docs/components/text-gregex"},"next":{"title":"Regular Expressions - Methods","permalink":"/en/docs/components/text-gregex-funcs"}}'),r=o("785893"),s=o("250065");let a={slug:"/docs/components/text-gregex-example",title:"Regular Expressions - Usage",sidebar_position:0,hide_title:!0,keywords:["GoFrame","GoFrame framework","regular expressions","basic usage","programming example","Golang","text processing","software development","open source framework","Go language"],description:"Demonstrates how to use regular expressions in the GoFrame framework for basic text matching operations. Through a simple example code, you can learn how to extract and process information from strings, providing an important reference for developers in text processing."},i=void 0,c={},p=[];function g(e){let t={code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"A simple example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/text/gregex"\n)\n\nfunc main() {\n    match, _ := gregex.MatchString(`(\\w+).+\\-\\-\\s*(.+)`, `GoFrame is best! -- John`)\n    fmt.Printf(`%s says "%s" is the one he loves!`, match[2], match[1])\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"After execution, the output result is:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'John says "GoFrame" is the one he loves!\n'})})]})}function m(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},250065:function(e,t,o){o.d(t,{Z:function(){return i},a:function(){return a}});var n=o(667294);let r={},s=n.createContext(r);function a(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
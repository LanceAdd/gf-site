"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["98048"],{988550:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>p,assets:()=>l,toc:()=>d,frontMatter:()=>o});var r=JSON.parse('{"id":"\u5FAE\u670D\u52A1\u5F00\u53D1/\u73AF\u5883\u51C6\u5907","title":"\u73AF\u5883\u51C6\u5907","description":"\u540E\u7EED\u5FAE\u670D\u52A1\u7AE0\u8282\u4E3B\u8981\u4EE5 GRPC \u534F\u8BAE\u4E3A\u4E3B\uFF0C\u4ECB\u7ECD\u5FAE\u670D\u52A1\u7684\u5F00\u53D1\u3001\u7EC4\u4EF6\u53CA\u5DE5\u5177\u4F7F\u7528\u3002","source":"@site/versioned_docs/version-2.5.x/\u5FAE\u670D\u52A1\u5F00\u53D1/\u73AF\u5883\u51C6\u5907.md","sourceDirName":"\u5FAE\u670D\u52A1\u5F00\u53D1","slug":"/\u5FAE\u670D\u52A1\u5F00\u53D1/\u73AF\u5883\u51C6\u5907","permalink":"/en/2.5.x/\u5FAE\u670D\u52A1\u5F00\u53D1/\u73AF\u5883\u51C6\u5907","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u5FAE\u670D\u52A1\u5F00\u53D1/\u73AF\u5883\u51C6\u5907.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"\u73AF\u5883\u51C6\u5907","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u5FAE\u670D\u52A1\u5F00\u53D1","permalink":"/en/2.5.x/\u5FAE\u670D\u52A1\u5F00\u53D1/"},"next":{"title":"\u5DE5\u7A0B\u7BA1\u7406","permalink":"/en/2.5.x/\u5FAE\u670D\u52A1\u5F00\u53D1/\u5DE5\u7A0B\u7BA1\u7406"}}'),i=t("785893"),s=t("250065");let o={title:"\u73AF\u5883\u51C6\u5907",sidebar_position:0,hide_title:!0},c=void 0,l={},d=[{value:"\u4F9D\u8D56\u5B89\u88C5",id:"\u4F9D\u8D56\u5B89\u88C5",level:2},{value:"\u6846\u67B6\u5DE5\u5177",id:"\u6846\u67B6\u5DE5\u5177",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u540E\u7EED\u5FAE\u670D\u52A1\u7AE0\u8282\u4E3B\u8981\u4EE5 ",(0,i.jsx)(n.code,{children:"GRPC"})," \u534F\u8BAE\u4E3A\u4E3B\uFF0C\u4ECB\u7ECD\u5FAE\u670D\u52A1\u7684\u5F00\u53D1\u3001\u7EC4\u4EF6\u53CA\u5DE5\u5177\u4F7F\u7528\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4F9D\u8D56\u5B89\u88C5",children:"\u4F9D\u8D56\u5B89\u88C5"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u8FDB\u4E00\u6B65\u5B66\u4E60\u4E4B\u524D\uFF0C\u8BF7\u5148\u4E86\u89E3 ",(0,i.jsx)(n.code,{children:"GRPC"})," \u76F8\u5173\u6982\u5FF5\uFF0C\u5E76\u4E14\u5B89\u88C5\u5BF9\u5E94\u7684\u5DE5\u5177\u5230\u672C\u5730\u5F00\u53D1\u73AF\u5883\uFF1A"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://grpc.io/",children:"https://grpc.io/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://grpc.io/docs/languages/go/quickstart/",children:"https://grpc.io/docs/languages/go/quickstart/"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C\u662F ",(0,i.jsx)(n.code,{children:"MacOS"})," \u73AF\u5883\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"brew"})," \u5DE5\u5177\u5B89\u88C5\u4F9D\u8D56\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"brew install grpc protoc-gen-go protoc-gen-go-grpc\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4F9D\u8D56\u5DE5\u5177\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u8BF7\u53C2\u8003 ",(0,i.jsx)(n.a,{href:"https://grpc.io/docs/languages/go/quickstart/",children:"https://grpc.io/docs/languages/go/quickstart/"})," \u7AE0\u8282\u7684\u4ECB\u7ECD\u5B8C\u6210\u57FA\u7840\u7684 ",(0,i.jsx)(n.code,{children:"protoc"})," \u5DE5\u5177\u4F7F\u7528\u5B66\u4E60\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6846\u67B6\u5DE5\u5177",children:"\u6846\u67B6\u5DE5\u5177"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u7684CLI\u5F00\u53D1\u5DE5\u5177\u8BF7\u4FDD\u8BC1\u7248\u672C ",(0,i.jsx)(n.code,{children:">= v2.4"}),"\u3002\u5DE5\u5177\u5B89\u88C5\u3001\u5347\u7EA7\u8BF7\u53C2\u8003\u7AE0\u8282\uFF1A ",(0,i.jsx)(n.a,{href:"/en/2.5.x/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/",children:"\u5F00\u53D1\u5DE5\u5177"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u6846\u67B6\u5DE5\u5177\u9488\u5BF9 ",(0,i.jsx)(n.code,{children:"GRPC"})," \u534F\u8BAE\uFF0C\u63D0\u4F9B\u4E86\u989D\u5916\u7684\u547D\u4EE4\u652F\u6301\uFF0C\u6781\u5927\u5730\u7B80\u5316\u4E86\u57FA\u4E8E ",(0,i.jsx)(n.code,{children:"GRPC"})," \u534F\u8BAE\u7684\u5FAE\u670D\u52A1\u5F00\u53D1\u3002"]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var r=t(667294);let i={},s=r.createContext(i);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
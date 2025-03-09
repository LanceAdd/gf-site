"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["79020"],{351508:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>l,default:()=>T,assets:()=>c,toc:()=>a,frontMatter:()=>s});var i=JSON.parse('{"id":"WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u8BF7\u6C42\u4FE1\u606F\u6253\u5370","title":"HTTPClient-\u8BF7\u6C42\u4FE1\u606F\u6253\u5370","description":"\u57FA\u672C\u4ECB\u7ECD","source":"@site/versioned_docs/version-2.3.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u8BF7\u6C42\u4FE1\u606F\u6253\u5370.md","sourceDirName":"WEB\u670D\u52A1\u5F00\u53D1/HTTPClient","slug":"/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u8BF7\u6C42\u4FE1\u606F\u6253\u5370","permalink":"/2.3.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u8BF7\u6C42\u4FE1\u606F\u6253\u5370","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u8BF7\u6C42\u4FE1\u606F\u6253\u5370.md","tags":[],"version":"2.3.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":5,"frontMatter":{"title":"HTTPClient-\u8BF7\u6C42\u4FE1\u606F\u6253\u5370","sidebar_position":5,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"HTTPClient-\u81EA\u5B9A\u4E49ContentType","permalink":"/2.3.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49ContentType"},"next":{"title":"HTTPClient-\u4EE3\u7406Proxy\u8BBE\u7F6E","permalink":"/2.3.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u4EE3\u7406Proxy\u8BBE\u7F6E"}}'),o=t("785893"),r=t("250065");let s={title:"HTTPClient-\u8BF7\u6C42\u4FE1\u606F\u6253\u5370",sidebar_position:5,hide_title:!0},l=void 0,c={},a=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"http"})," \u5BA2\u6237\u7AEF\u652F\u6301\u5BF9HTTP\u8BF7\u6C42\u7684\u8F93\u5165\u4E0E\u8F93\u51FA\u539F\u59CB\u4FE1\u606F\u83B7\u53D6\u4E0E\u6253\u5370\uFF0C\u65B9\u4FBF\u8C03\u8BD5\uFF0C\u76F8\u5173\u65B9\u6CD5\u5982\u4E0B\uFF1A"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:"func (r *Response) Raw() string\nfunc (r *Response) RawDump()\nfunc (r *Response) RawRequest() string\nfunc (r *Response) RawResponse() string\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u6240\u6709\u7684\u65B9\u6CD5\u5747\u7ED1\u5B9A\u5728 ",(0,o.jsx)(e.code,{children:"Response"})," \u5BF9\u8C61\u4E0A\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5FC5\u987B\u8981\u8BF7\u6C42\u7ED3\u675F\u540E\u624D\u80FD\u6253\u5370\u3002"]}),"\n",(0,o.jsx)(e.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    response, err := g.Client().Post(\n        gctx.New(),\n        "https://goframe.org",\n        g.Map{\n            "name": "john",\n        },\n    )\n    if err != nil {\n        panic(err)\n    }\n    response.RawDump()\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\u4E3A\uFF1A"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"+---------------------------------------------+\n|                   REQUEST                   |\n+---------------------------------------------+\nPOST / HTTP/1.1\nHost: goframe.org\nUser-Agent: GoFrameHTTPClient v2.0.0-beta\nContent-Length: 9\nContent-Type: application/x-www-form-urlencoded\nAccept-Encoding: gzip\n\nname=john\n\n+---------------------------------------------+\n|                   RESPONSE                  |\n+---------------------------------------------+\nHTTP/1.1 405 Method Not Allowed\nConnection: close\nTransfer-Encoding: chunked\nAllow: GET\nCache-Control: no-store\nContent-Security-Policy: frame-ancestors 'self'\nContent-Type: text/html;charset=UTF-8\nDate: Fri, 03 Dec 2021 09:43:29 GMT\nExpires: Thu, 01 Jan 1970 00:00:00 GMT\nServer: nginx\n...\n"})})]})}function T(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return s}});var i=t(667294);let o={},r=i.createContext(o);function s(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);
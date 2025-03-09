"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["8354"],{3657:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>a,default:()=>d,assets:()=>c,toc:()=>l,frontMatter:()=>i});var o=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u8BF7\u6C42\u4FE1\u606F\u6253\u5370","title":"HTTPClient-\u8BF7\u6C42\u4FE1\u606F\u6253\u5370","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684HTTP\u5BA2\u6237\u7AEF\u529F\u80FD\u83B7\u53D6\u548C\u6253\u5370HTTP\u8BF7\u6C42\u7684\u539F\u59CB\u8F93\u5165\u548C\u8F93\u51FA\u4FE1\u606F\u3002\u4E3B\u8981\u65B9\u6CD5\u5305\u62ECRaw\u3001RawDump\u3001RawRequest\u548CRawResponse\uFF0C\u9002\u7528\u4E8E\u8C03\u8BD5HTTP\u8BF7\u6C42\u3002\u793A\u4F8B\u5C55\u793A\u4E86\u4F7F\u7528GoFrame\u6846\u67B6\u53D1\u9001POST\u8BF7\u6C42\u5E76\u6253\u5370\u8BF7\u6C42\u548C\u54CD\u5E94\u7684\u5177\u4F53\u65B9\u6CD5\u3002","source":"@site/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u8BF7\u6C42\u4FE1\u606F\u6253\u5370.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient","slug":"/docs/web/http-client-raw-request-response","permalink":"/docs/web/http-client-raw-request-response","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u8BF7\u6C42\u4FE1\u606F\u6253\u5370.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/web/http-client-raw-request-response","title":"HTTPClient-\u8BF7\u6C42\u4FE1\u606F\u6253\u5370","sidebar_position":6,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","HTTP\u5BA2\u6237\u7AEF","\u8BF7\u6C42\u4FE1\u606F\u6253\u5370","\u539F\u59CB\u8BF7\u6C42","\u8C03\u8BD5","\u54CD\u5E94\u4FE1\u606F","HTTP\u8BF7\u6C42","Go\u8BED\u8A00","Web\u5F00\u53D1"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684HTTP\u5BA2\u6237\u7AEF\u529F\u80FD\u83B7\u53D6\u548C\u6253\u5370HTTP\u8BF7\u6C42\u7684\u539F\u59CB\u8F93\u5165\u548C\u8F93\u51FA\u4FE1\u606F\u3002\u4E3B\u8981\u65B9\u6CD5\u5305\u62ECRaw\u3001RawDump\u3001RawRequest\u548CRawResponse\uFF0C\u9002\u7528\u4E8E\u8C03\u8BD5HTTP\u8BF7\u6C42\u3002\u793A\u4F8B\u5C55\u793A\u4E86\u4F7F\u7528GoFrame\u6846\u67B6\u53D1\u9001POST\u8BF7\u6C42\u5E76\u6253\u5370\u8BF7\u6C42\u548C\u54CD\u5E94\u7684\u5177\u4F53\u65B9\u6CD5\u3002"},"sidebar":"mainSidebar","previous":{"title":"HTTPClient-\u81EA\u5B9A\u4E49Transport","permalink":"/docs/web/http-client-transport"},"next":{"title":"HTTPClient-\u4EE3\u7406Proxy\u8BBE\u7F6E","permalink":"/docs/web/http-client-proxy"}}'),r=t("785893"),s=t("250065");let i={slug:"/docs/web/http-client-raw-request-response",title:"HTTPClient-\u8BF7\u6C42\u4FE1\u606F\u6253\u5370",sidebar_position:6,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","HTTP\u5BA2\u6237\u7AEF","\u8BF7\u6C42\u4FE1\u606F\u6253\u5370","\u539F\u59CB\u8BF7\u6C42","\u8C03\u8BD5","\u54CD\u5E94\u4FE1\u606F","HTTP\u8BF7\u6C42","Go\u8BED\u8A00","Web\u5F00\u53D1"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684HTTP\u5BA2\u6237\u7AEF\u529F\u80FD\u83B7\u53D6\u548C\u6253\u5370HTTP\u8BF7\u6C42\u7684\u539F\u59CB\u8F93\u5165\u548C\u8F93\u51FA\u4FE1\u606F\u3002\u4E3B\u8981\u65B9\u6CD5\u5305\u62ECRaw\u3001RawDump\u3001RawRequest\u548CRawResponse\uFF0C\u9002\u7528\u4E8E\u8C03\u8BD5HTTP\u8BF7\u6C42\u3002\u793A\u4F8B\u5C55\u793A\u4E86\u4F7F\u7528GoFrame\u6846\u67B6\u53D1\u9001POST\u8BF7\u6C42\u5E76\u6253\u5370\u8BF7\u6C42\u548C\u54CD\u5E94\u7684\u5177\u4F53\u65B9\u6CD5\u3002"},a=void 0,c={},l=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2}];function p(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"http"})," \u5BA2\u6237\u7AEF\u652F\u6301\u5BF9HTTP\u8BF7\u6C42\u7684\u8F93\u5165\u4E0E\u8F93\u51FA\u539F\u59CB\u4FE1\u606F\u83B7\u53D6\u4E0E\u6253\u5370\uFF0C\u65B9\u4FBF\u8C03\u8BD5\uFF0C\u76F8\u5173\u65B9\u6CD5\u5982\u4E0B\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func (r *Response) Raw() string\nfunc (r *Response) RawDump()\nfunc (r *Response) RawRequest() string\nfunc (r *Response) RawResponse() string\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u6240\u6709\u7684\u65B9\u6CD5\u5747\u7ED1\u5B9A\u5728 ",(0,r.jsx)(n.code,{children:"Response"})," \u5BF9\u8C61\u4E0A\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5FC5\u987B\u8981\u8BF7\u6C42\u7ED3\u675F\u540E\u624D\u80FD\u6253\u5370\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    response, err := g.Client().Post(\n        gctx.New(),\n        "https://goframe.org",\n        g.Map{\n            "name": "john",\n        },\n    )\n    if err != nil {\n        panic(err)\n    }\n    response.RawDump()\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\u4E3A\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"+---------------------------------------------+\n|                   REQUEST                   |\n+---------------------------------------------+\nPOST / HTTP/1.1\nHost: goframe.org\nUser-Agent: GoFrameHTTPClient v2.0.0-beta\nContent-Length: 9\nContent-Type: application/x-www-form-urlencoded\nAccept-Encoding: gzip\n\nname=john\n\n+---------------------------------------------+\n|                   RESPONSE                  |\n+---------------------------------------------+\nHTTP/1.1 405 Method Not Allowed\nConnection: close\nTransfer-Encoding: chunked\nAllow: GET\nCache-Control: no-store\nContent-Security-Policy: frame-ancestors 'self'\nContent-Type: text/html;charset=UTF-8\nDate: Fri, 03 Dec 2021 09:43:29 GMT\nExpires: Thu, 01 Jan 1970 00:00:00 GMT\nServer: nginx\n...\n"})})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var o=t(667294);let r={},s=o.createContext(r);function i(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
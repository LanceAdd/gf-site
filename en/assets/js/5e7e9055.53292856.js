"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["14789"],{631323:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>p,assets:()=>s,toc:()=>l,frontMatter:()=>a});var r=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49Header","title":"HTTPClient-\u81EA\u5B9A\u4E49Header","description":"\u901A\u8FC7GoFrame\u6846\u67B6\u7684HTTPClient\u529F\u80FD\uFF0C\u7528\u6237\u53EF\u4EE5\u81EA\u5B9A\u4E49HTTP\u8BF7\u6C42\u7684Header\u4FE1\u606F\u3002\u672C\u6587\u4ECB\u7ECD\u4E86\u5982\u4F55\u5229\u7528SetHeader\u3001SetHeaderMap\u548CSetHeaderRaw\u7B49\u65B9\u6CD5\u8BBE\u7F6E\u548C\u53D1\u9001Header\uFF0C\u4ECE\u800C\u5B9E\u73B0\u81EA\u5B9A\u4E49\u94FE\u8DEF\u8DDF\u8E2A\u4FE1\u606F\uFF0C\u5982Span-Id\u548CTrace-Id\u3002\u901A\u8FC7\u7B80\u5355\u7684\u4EE3\u7801\u793A\u4F8B\uFF0C\u5C55\u793A\u4E86\u5BA2\u6237\u7AEF\u5982\u4F55\u4E0E\u670D\u52A1\u7AEF\u4EA4\u4E92\u5E76\u8FD4\u56DE\u7ED3\u679C\u3002","source":"@site/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49Header.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient","slug":"/docs/web/http-client-header","permalink":"/en/2.7.x/docs/web/http-client-header","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49Header.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/web/http-client-header","title":"HTTPClient-\u81EA\u5B9A\u4E49Header","sidebar_position":3,"hide_title":true,"keywords":["HTTPClient","\u81EA\u5B9A\u4E49Header","GoFrame","GoFrame\u6846\u67B6","SetHeader","Header\u65B9\u6CD5","Span-Id","Trace-Id","HTTP\u8BF7\u6C42","\u5BA2\u6237\u7AEF"],"description":"\u901A\u8FC7GoFrame\u6846\u67B6\u7684HTTPClient\u529F\u80FD\uFF0C\u7528\u6237\u53EF\u4EE5\u81EA\u5B9A\u4E49HTTP\u8BF7\u6C42\u7684Header\u4FE1\u606F\u3002\u672C\u6587\u4ECB\u7ECD\u4E86\u5982\u4F55\u5229\u7528SetHeader\u3001SetHeaderMap\u548CSetHeaderRaw\u7B49\u65B9\u6CD5\u8BBE\u7F6E\u548C\u53D1\u9001Header\uFF0C\u4ECE\u800C\u5B9E\u73B0\u81EA\u5B9A\u4E49\u94FE\u8DEF\u8DDF\u8E2A\u4FE1\u606F\uFF0C\u5982Span-Id\u548CTrace-Id\u3002\u901A\u8FC7\u7B80\u5355\u7684\u4EE3\u7801\u793A\u4F8B\uFF0C\u5C55\u793A\u4E86\u5BA2\u6237\u7AEF\u5982\u4F55\u4E0E\u670D\u52A1\u7AEF\u4EA4\u4E92\u5E76\u8FD4\u56DE\u7ED3\u679C\u3002"},"sidebar":"mainSidebar","previous":{"title":"HTTPClient-\u81EA\u5B9A\u4E49Cookie","permalink":"/en/2.7.x/docs/web/http-client-cookie"},"next":{"title":"HTTPClient-\u81EA\u5B9A\u4E49ContentType","permalink":"/en/2.7.x/docs/web/http-client-content-type"}}'),d=t("785893"),i=t("250065");let a={slug:"/docs/web/http-client-header",title:"HTTPClient-\u81EA\u5B9A\u4E49Header",sidebar_position:3,hide_title:!0,keywords:["HTTPClient","\u81EA\u5B9A\u4E49Header","GoFrame","GoFrame\u6846\u67B6","SetHeader","Header\u65B9\u6CD5","Span-Id","Trace-Id","HTTP\u8BF7\u6C42","\u5BA2\u6237\u7AEF"],description:"\u901A\u8FC7GoFrame\u6846\u67B6\u7684HTTPClient\u529F\u80FD\uFF0C\u7528\u6237\u53EF\u4EE5\u81EA\u5B9A\u4E49HTTP\u8BF7\u6C42\u7684Header\u4FE1\u606F\u3002\u672C\u6587\u4ECB\u7ECD\u4E86\u5982\u4F55\u5229\u7528SetHeader\u3001SetHeaderMap\u548CSetHeaderRaw\u7B49\u65B9\u6CD5\u8BBE\u7F6E\u548C\u53D1\u9001Header\uFF0C\u4ECE\u800C\u5B9E\u73B0\u81EA\u5B9A\u4E49\u94FE\u8DEF\u8DDF\u8E2A\u4FE1\u606F\uFF0C\u5982Span-Id\u548CTrace-Id\u3002\u901A\u8FC7\u7B80\u5355\u7684\u4EE3\u7801\u793A\u4F8B\uFF0C\u5C55\u793A\u4E86\u5BA2\u6237\u7AEF\u5982\u4F55\u4E0E\u670D\u52A1\u7AEF\u4EA4\u4E92\u5E76\u8FD4\u56DE\u7ED3\u679C\u3002"},c=void 0,s={},l=[{value:"\u670D\u52A1\u7AEF",id:"\u670D\u52A1\u7AEF",level:3},{value:"\u5BA2\u6237\u7AEF",id:"\u5BA2\u6237\u7AEF",level:3}];function o(e){let n={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["HTTP\u5BA2\u6237\u7AEF\u53D1\u8D77\u8BF7\u6C42\u65F6\u53EF\u4EE5\u81EA\u5B9A\u4E49\u53D1\u9001\u7ED9\u670D\u52A1\u7AEF\u7684 ",(0,d.jsx)(n.code,{children:"Header"})," \u5185\u5BB9\uFF0C\u8BE5\u7279\u6027\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"SetHeader*"})," \u76F8\u5173\u65B9\u6CD5\u5B9E\u73B0\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u65B9\u6CD5\u5217\u8868\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:"func (c *Client) SetHeader(key, value string) *Client\nfunc (c *Client) SetHeaderMap(m map[string]string) *Client\nfunc (c *Client) SetHeaderRaw(headers string) *Client\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u5BA2\u6237\u7AEF\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"Header"})," \u6765\u81EA\u5B9A\u4E49\u53D1\u9001\u81EA\u5B9A\u4E49\u94FE\u8DEF\u8DDF\u8E2A\u4FE1\u606F ",(0,d.jsx)(n.code,{children:"Span-Id"})," \u53CA ",(0,d.jsx)(n.code,{children:"Trace-Id"})," \u6D88\u606F\u5934\u7684\u793A\u4F8B\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u670D\u52A1\u7AEF",children:"\u670D\u52A1\u7AEF"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Response.Writef(\n            "Span-Id:%s,Trace-Id:%s",\n            r.Header.Get("Span-Id"),\n            r.Header.Get("Trace-Id"),\n        )\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u7531\u4E8E\u662F\u4F5C\u4E3A\u793A\u4F8B\uFF0C\u670D\u52A1\u7AEF\u7684\u903B\u8F91\u5F88\u7B80\u5355\uFF0C\u76F4\u63A5\u5C06\u63A5\u6536\u5230\u7684 ",(0,d.jsx)(n.code,{children:"Span-Id"})," \u53CA ",(0,d.jsx)(n.code,{children:"Trace-Id"})," \u53C2\u6570\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u5BA2\u6237\u7AEF",children:"\u5BA2\u6237\u7AEF"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"SetHeader"})," \u65B9\u6CD5"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n       "fmt"\n\n       "github.com/gogf/gf/v2/frame/g"\n       "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n       c := g.Client()\n       c.SetHeader("Span-Id", "0.0.1")\n       c.SetHeader("Trace-Id", "NBC56410N97LJ016FQA")\n       if r, e := c.Get(gctx.New(), "http://127.0.0.1:8199/"); e != nil {\n           panic(e)\n       } else {\n           fmt.Println(r.ReadAllString())\n       }\n}\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"g.Client()"})," \u521B\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684HTTP\u8BF7\u6C42\u5BA2\u6237\u7AEF\u5BF9\u8C61\uFF0C\u5E76\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"c.SetHeader"})," \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u7684 ",(0,d.jsx)(n.code,{children:"Header"})," \u4FE1\u606F\u3002"]}),"\n",(0,d.jsxs)(n.ol,{start:"2",children:["\n",(0,d.jsxs)(n.li,{children:["\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"SetHeaderRaw"})," \u65B9\u6CD5"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u8FD9\u4E2A\u65B9\u6CD5\u66F4\u52A0\u7B80\u5355\uFF0C\u53EF\u4EE5\u901A\u8FC7\u539F\u59CB\u7684Header\u5B57\u7B26\u4E32\u6765\u8BBE\u7F6E\u5BA2\u6237\u7AEF\u8BF7\u6C42Header\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n       "fmt"\n\n       "github.com/gogf/gf/v2/frame/g"\n       "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n       c := g.Client()\n       c.SetHeaderRaw(`\n           Referer: https://localhost\n           Span-Id: 0.0.1\n           Trace-Id: NBC56410N97LJ016FQA\n           User-Agent: MyTestClient\n       `)\n       if r, e := c.Get(gctx.New(), "http://127.0.0.1:8199/"); e != nil {\n           panic(e)\n       } else {\n           fmt.Println(r.ReadAllString())\n       }\n}\n'})}),"\n",(0,d.jsxs)(n.ol,{start:"3",children:["\n",(0,d.jsx)(n.li,{children:"\u6267\u884C\u7ED3\u679C"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u5BA2\u6237\u7AEF\u4EE3\u7801\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u5C06\u4F1A\u6253\u5370\u51FA\u670D\u52A1\u7AEF\u7684\u8FD4\u56DE\u7ED3\u679C\uFF0C\u5982\u4E0B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"Span-Id:0.0.1,Trace-Id:NBC56410N97LJ016FQA\n"})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var r=t(667294);let d={},i=r.createContext(d);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
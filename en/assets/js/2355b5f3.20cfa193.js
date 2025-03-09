"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["99294"],{299417:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>s,toc:()=>d,frontMatter:()=>r});var t=JSON.parse('{"id":"WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49Cookie","title":"HTTPClient-\u81EA\u5B9A\u4E49Cookie","description":"HTTP\u5BA2\u6237\u7AEF\u53D1\u8D77\u8BF7\u6C42\u65F6\u53EF\u4EE5\u81EA\u5B9A\u4E49\u53D1\u9001\u7ED9\u670D\u52A1\u7AEF\u7684 Cookie \u5185\u5BB9\uFF0C\u8BE5\u7279\u6027\u4F7F\u7528 SetCookie* \u76F8\u5173\u65B9\u6CD5\u5B9E\u73B0\u3002","source":"@site/versioned_docs/version-2.2.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49Cookie.md","sourceDirName":"WEB\u670D\u52A1\u5F00\u53D1/HTTPClient","slug":"/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49Cookie","permalink":"/en/2.2.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49Cookie","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49Cookie.md","tags":[],"version":"2.2.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":2,"frontMatter":{"title":"HTTPClient-\u81EA\u5B9A\u4E49Cookie","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"HTTPClient-\u6587\u4EF6\u4E0A\u4F20","permalink":"/en/2.2.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u6587\u4EF6\u4E0A\u4F20"},"next":{"title":"HTTPClient-\u81EA\u5B9A\u4E49Header","permalink":"/en/2.2.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49Header"}}'),o=i("785893"),l=i("250065");let r={title:"HTTPClient-\u81EA\u5B9A\u4E49Cookie",sidebar_position:2,hide_title:!0},c=void 0,s={},d=[{value:"\u670D\u52A1\u7AEF",id:"\u670D\u52A1\u7AEF",level:3},{value:"\u5BA2\u6237\u7AEF",id:"\u5BA2\u6237\u7AEF",level:3}];function a(e){let n={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["HTTP\u5BA2\u6237\u7AEF\u53D1\u8D77\u8BF7\u6C42\u65F6\u53EF\u4EE5\u81EA\u5B9A\u4E49\u53D1\u9001\u7ED9\u670D\u52A1\u7AEF\u7684 ",(0,o.jsx)(n.code,{children:"Cookie"})," \u5185\u5BB9\uFF0C\u8BE5\u7279\u6027\u4F7F\u7528 ",(0,o.jsx)(n.code,{children:"SetCookie*"})," \u76F8\u5173\u65B9\u6CD5\u5B9E\u73B0\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u65B9\u6CD5\u5217\u8868\uFF1A"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"func (c *Client) SetCookie(key, value string) *Client\nfunc (c *Client) SetCookieMap(m map[string]string) *Client\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u5BA2\u6237\u7AEF\u81EA\u5B9A\u4E49 ",(0,o.jsx)(n.code,{children:"Cookie"})," \u7684\u793A\u4F8B\u3002"]}),"\n",(0,o.jsx)(n.h3,{id:"\u670D\u52A1\u7AEF",children:"\u670D\u52A1\u7AEF"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request){\n        r.Response.Write(r.Cookie.Map())\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u7531\u4E8E\u662F\u4F5C\u4E3A\u793A\u4F8B\uFF0C\u670D\u52A1\u7AEF\u7684\u903B\u8F91\u5F88\u7B80\u5355\uFF0C\u76F4\u63A5\u5C06\u63A5\u6536\u5230\u7684 ",(0,o.jsx)(n.code,{children:"Cookie"})," \u53C2\u6570\u5168\u90E8\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002"]}),"\n",(0,o.jsx)(n.h3,{id:"\u5BA2\u6237\u7AEF",children:"\u5BA2\u6237\u7AEF"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\u4F7F\u7528 ",(0,o.jsx)(n.code,{children:"SetCookie"})," \u65B9\u6CD5"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n       "fmt"\n\n       "github.com/gogf/gf/v2/frame/g"\n       "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n       c := g.Client()\n       c.SetCookie("name", "john")\n       c.SetCookie("score", "100")\n       if r, e := c.Get(gctx.New(), "http://127.0.0.1:8199/"); e != nil {\n           panic(e)\n       } else {\n           fmt.Println(r.ReadAllString())\n       }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,o.jsx)(n.code,{children:"g.Client()"})," \u521B\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684HTTP\u8BF7\u6C42\u5BA2\u6237\u7AEF\u5BF9\u8C61\uFF0C\u5E76\u901A\u8FC7 ",(0,o.jsx)(n.code,{children:"c.SetCookie"})," \u65B9\u6CD5\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u7684 ",(0,o.jsx)(n.code,{children:"Cookie"}),"\uFF0C\u8FD9\u91CC\u6211\u4EEC\u8BBE\u7F6E\u4E86\u4E24\u4E2A\u793A\u4F8B\u7528\u7684 ",(0,o.jsx)(n.code,{children:"Cookie"})," \u53C2\u6570\uFF0C\u4E00\u4E2A ",(0,o.jsx)(n.code,{children:"name"}),"\uFF0C\u4E00\u4E2A ",(0,o.jsx)(n.code,{children:"score"}),"\u3002"]}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["\u4F7F\u7528 ",(0,o.jsx)(n.code,{children:"SetCookieMap"})," \u65B9\u6CD5"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["\u8FD9\u4E2A\u65B9\u6CD5\u66F4\u52A0\u7B80\u5355\uFF0C\u53EF\u4EE5\u6279\u91CF\u8BBE\u7F6E ",(0,o.jsx)(n.code,{children:"Cookie"})," \u952E\u503C\u5BF9\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n       "fmt"\n\n       "github.com/gogf/gf/v2/frame/g"\n       "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n       c := g.Client()\n       c.SetCookieMap(g.MapStrStr{\n           "name":  "john",\n           "score": "100",\n       })\n       if r, e := c.Get(gctx.New(), "http://127.0.0.1:8199/"); e != nil {\n           panic(e)\n       } else {\n           fmt.Println(r.ReadAllString())\n       }\n}\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"\u6267\u884C\u7ED3\u679C"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u5BA2\u6237\u7AEF\u4EE3\u7801\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u5C06\u4F1A\u6253\u5370\u51FA\u670D\u52A1\u7AEF\u7684\u8FD4\u56DE\u7ED3\u679C\uFF0C\u5982\u4E0B\uFF1A"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"map[name:john score:100]\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u670D\u52A1\u7AEF\u5DF2\u7ECF\u63A5\u6536\u5230\u4E86\u5BA2\u6237\u7AEF\u81EA\u5B9A\u4E49\u7684 ",(0,o.jsx)(n.code,{children:"Cookie"})," \u53C2\u6570\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return r}});var t=i(667294);let o={},l=t.createContext(o);function r(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);
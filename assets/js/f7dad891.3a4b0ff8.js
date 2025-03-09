"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["36481"],{616741:function(n,e,t){t.r(e),t.d(e,{metadata:()=>r,contentTitle:()=>l,default:()=>g,assets:()=>c,toc:()=>a,frontMatter:()=>o});var r=JSON.parse('{"id":"WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u62E6\u622A\u5668\u4E2D\u95F4\u4EF6","title":"HTTPClient-\u62E6\u622A\u5668/\u4E2D\u95F4\u4EF6","description":"\u57FA\u672C\u4ECB\u7ECD","source":"@site/versioned_docs/version-2.3.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u62E6\u622A\u5668\u4E2D\u95F4\u4EF6.md","sourceDirName":"WEB\u670D\u52A1\u5F00\u53D1/HTTPClient","slug":"/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u62E6\u622A\u5668\u4E2D\u95F4\u4EF6","permalink":"/2.3.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u62E6\u622A\u5668\u4E2D\u95F4\u4EF6","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u62E6\u622A\u5668\u4E2D\u95F4\u4EF6.md","tags":[],"version":"2.3.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":7,"frontMatter":{"title":"HTTPClient-\u62E6\u622A\u5668/\u4E2D\u95F4\u4EF6","sidebar_position":7,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"HTTPClient-\u4EE3\u7406Proxy\u8BBE\u7F6E","permalink":"/2.3.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u4EE3\u7406Proxy\u8BBE\u7F6E"},"next":{"title":"HTTPClient-\u5E38\u89C1\u95EE\u9898","permalink":"/2.3.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u5E38\u89C1\u95EE\u9898"}}'),i=t("785893"),s=t("250065");let o={title:"HTTPClient-\u62E6\u622A\u5668/\u4E2D\u95F4\u4EF6",sidebar_position:7,hide_title:!0},l=void 0,c={},a=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u4E2D\u95F4\u4EF6\u7C7B\u578B",id:"\u4E2D\u95F4\u4EF6\u7C7B\u578B",level:2},{value:"\u524D\u7F6E\u4E2D\u95F4\u4EF6",id:"\u524D\u7F6E\u4E2D\u95F4\u4EF6",level:3},{value:"\u540E\u7F6E\u4E2D\u95F4\u4EF6",id:"\u540E\u7F6E\u4E2D\u95F4\u4EF6",level:3},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"\u670D\u52A1\u7AEF",id:"\u670D\u52A1\u7AEF",level:3},{value:"\u5BA2\u6237\u7AEF",id:"\u5BA2\u6237\u7AEF",level:3},{value:"\u8FD0\u884C\u6D4B\u8BD5",id:"\u8FD0\u884C\u6D4B\u8BD5",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"HTTPClient"})," \u652F\u6301\u5F3A\u5927\u7684\u62E6\u622A\u5668/\u4E2D\u95F4\u4EF6\u7279\u6027\uFF0C\u8BE5\u7279\u6027\u4F7F\u5F97\u5BF9\u4E8E\u5BA2\u6237\u7AEF\u7684\u5168\u5C40\u8BF7\u6C42\u62E6\u622A\u53CA\u6CE8\u5165\u6210\u4E3A\u4E86\u53EF\u80FD\uFF0C\u4F8B\u5982\u4FEE\u6539/\u6CE8\u5165\u63D0\u4EA4\u53C2\u6570\u3001\u4FEE\u6539/\u6CE8\u5165\u8FD4\u56DE\u53C2\u6570\u3001\u57FA\u4E8E\u5BA2\u6237\u7AEF\u7684\u53C2\u6570\u6821\u9A8C\u7B49\u7B49\u3002\u4E2D\u95F4\u4EF6\u7684\u6CE8\u5165\u901A\u8FC7\u4EE5\u4E0B\u65B9\u6CD5\u5B9E\u73B0\uFF1A"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"func (c *Client) Use(handlers ...HandlerFunc) *Client\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u4E2D\u95F4\u4EF6\u4E2D\u901A\u8FC7 ",(0,i.jsx)(e.code,{children:"Next"})," \u65B9\u6CD5\u6267\u884C\u4E0B\u4E00\u6B65\u6D41\u7A0B\uFF0C ",(0,i.jsx)(e.code,{children:"Next"})," \u65B9\u6CD5\u5B9A\u4E49\u5982\u4E0B\uFF1A"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"func (c *Client) Next(req *http.Request) (*Response, error)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u4E2D\u95F4\u4EF6\u7C7B\u578B",children:"\u4E2D\u95F4\u4EF6\u7C7B\u578B"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"HTTPClient"})," \u4E2D\u95F4\u4EF6\u529F\u80FD\u540C ",(0,i.jsx)(e.code,{children:"HTTPServer"})," \u7684\u4E2D\u95F4\u4EF6\u529F\u80FD\u7C7B\u4F3C\uFF0C\u540C\u6837\u4E5F\u662F\u5206\u4E3A\u4E86\u524D\u7F6E\u4E2D\u95F4\u4EF6\u548C\u540E\u7F6E\u4E2D\u95F4\u4EF6\u4E24\u79CD\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u524D\u7F6E\u4E2D\u95F4\u4EF6",children:"\u524D\u7F6E\u4E2D\u95F4\u4EF6"}),"\n",(0,i.jsxs)(e.p,{children:["\u5904\u7406\u903B\u8F91\u4F4D\u4E8E ",(0,i.jsx)(e.code,{children:"Next"})," \u65B9\u6CD5\u4E4B\u524D\uFF0C\u683C\u5F0F\u5F62\u5982\uFF1A"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"c := g.Client()\nc.Use(func(c *gclient.Client, r *http.Request) (resp *gclient.Response, err error) {\n    // \u81EA\u5B9A\u4E49\u5904\u7406\u903B\u8F91\n    resp, err = c.Next(r)\n    return resp, err\n})\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u540E\u7F6E\u4E2D\u95F4\u4EF6",children:"\u540E\u7F6E\u4E2D\u95F4\u4EF6"}),"\n",(0,i.jsxs)(e.p,{children:["\u5904\u7406\u903B\u8F91\u4F4D\u4E8E ",(0,i.jsx)(e.code,{children:"Next"})," \u65B9\u6CD5\u4E4B\u540E\uFF0C\u683C\u5F0F\u5F62\u5982\uFF1A"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"c := g.Client()\nc.Use(func(c *gclient.Client, r *http.Request) (resp *gclient.ClientResponse, err error) {\n    resp, err = c.Next(r)\n    // \u81EA\u5B9A\u4E49\u5904\u7406\u903B\u8F91\n    return resp, err\n})\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u4EEC\u6765\u4E00\u4E2A\u4EE3\u7801\u793A\u4F8B\u66F4\u597D\u4ECB\u7ECD\u4F7F\u7528\uFF0C\u8BE5\u793A\u4F8B\u901A\u8FC7\u7ED9\u5BA2\u6237\u7AEF\u589E\u52A0\u62E6\u622A\u5668\uFF0C\u5BF9\u63D0\u4EA4\u7684JSON\u6570\u636E\u6CE8\u5165\u81EA\u5B9A\u4E49\u7684\u989D\u5916\u53C2\u6570\uFF0C\u8FD9\u4E9B\u989D\u5916\u53C2\u6570\u5B9E\u73B0\u5BF9\u63D0\u4EA4\u53C2\u6570\u7684\u7B7E\u540D\u751F\u6210\u4F53\u79EF\u7B7E\u540D\u76F8\u5173\u53C2\u6570\u63D0\u4EA4\uFF0C\u4E5F\u5C31\u662F\u5B9E\u73B0\u4E00\u7248\u7B80\u5355\u7684\u63A5\u53E3\u53C2\u6570\u5B89\u5168\u6821\u9A8C\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u670D\u52A1\u7AEF",children:"\u670D\u52A1\u7AEF"}),"\n",(0,i.jsxs)(e.p,{children:["\u670D\u52A1\u7AEF\u7684\u903B\u8F91\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u628A\u5BA2\u6237\u7AEF\u63D0\u4EA4\u7684 ",(0,i.jsx)(e.code,{children:"JSON"})," \u53C2\u6570\u6309\u7167 ",(0,i.jsx)(e.code,{children:"map"})," \u89E3\u6790\u540E\u518D\u6784\u9020\u6210 ",(0,i.jsx)(e.code,{children:"JSON"})," \u5B57\u7B26\u4E32\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u5F80\u5F80\u670D\u52A1\u7AEF\u4E5F\u9700\u8981\u901A\u8FC7\u4E2D\u95F4\u4EF6\u8FDB\u884C\u7B7E\u540D\u6821\u9A8C\uFF0C\u6211\u8FD9\u91CC\u5077\u4E86\u4E00\u4E2A\u61D2\uFF0C\u76F4\u63A5\u8FD4\u56DE\u4E86\u5BA2\u6237\u7AEF\u63D0\u4EA4\u7684\u6570\u636E\u3002\u4F53\u8C05\u4E00\u4E0B\u6587\u6863\u7EF4\u62A4\u4F5C\u8005\uD83D\uDE38\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.ALL("/", func(r *ghttp.Request) {\n            r.Response.Write(r.GetMap())\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"\u5BA2\u6237\u7AEF",children:"\u5BA2\u6237\u7AEF"}),"\n",(0,i.jsx)(e.p,{children:"\u5BA2\u6237\u7AEF\u7684\u903B\u8F91\u662F\u5B9E\u73B0\u57FA\u672C\u7684\u5BA2\u6237\u7AEF\u53C2\u6570\u63D0\u4EA4\u3001\u62E6\u622A\u5668\u6CE8\u5165\u3001\u7B7E\u540D\u76F8\u5173\u53C2\u6570\u6CE8\u5165\u4EE5\u53CA\u7B7E\u540D\u53C2\u6570\u751F\u6210\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "bytes"\n    "fmt"\n    "io/ioutil"\n    "net/http"\n\n    "github.com/gogf/gf/v2/container/garray"\n    "github.com/gogf/gf/v2/crypto/gmd5"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/internal/json"\n    "github.com/gogf/gf/v2/net/gclient"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gtime"\n    "github.com/gogf/gf/v2/util/gconv"\n    "github.com/gogf/gf/v2/util/guid"\n    "github.com/gogf/gf/v2/util/gutil"\n)\n\nconst (\n    appId     = "123"\n    appSecret = "456"\n)\n\n// \u6CE8\u5165\u7EDF\u4E00\u7684\u63A5\u53E3\u7B7E\u540D\u53C2\u6570\nfunc injectSignature(jsonContent []byte) []byte {\n    var m map[string]interface{}\n    _ = json.Unmarshal(jsonContent, &m)\n    if len(m) > 0 {\n        m["appid"] = appId\n        m["nonce"] = guid.S()\n        m["timestamp"] = gtime.Timestamp()\n        var (\n            keyArray   = garray.NewSortedStrArrayFrom(gutil.Keys(m))\n            sigContent string\n        )\n        keyArray.Iterator(func(k int, v string) bool {\n            sigContent += v\n            sigContent += gconv.String(m[v])\n            return true\n        })\n        m["signature"] = gmd5.MustEncryptString(gmd5.MustEncryptString(sigContent) + appSecret)\n        jsonContent, _ = json.Marshal(m)\n    }\n    return jsonContent\n}\n\nfunc main() {\n    c := g.Client()\n    c.Use(func(c *gclient.Client, r *http.Request) (resp *gclient.Response, err error) {\n        bodyBytes, _ := ioutil.ReadAll(r.Body)\n        if len(bodyBytes) > 0 {\n            // \u6CE8\u5165\u7B7E\u540D\u76F8\u5173\u53C2\u6570\uFF0C\u4FEE\u6539Request\u539F\u6709\u7684\u63D0\u4EA4\u53C2\u6570\n            bodyBytes = injectSignature(bodyBytes)\n            r.Body = ioutil.NopCloser(bytes.NewBuffer(bodyBytes))\n            r.ContentLength = int64(len(bodyBytes))\n        }\n        return c.Next(r)\n    })\n    content := c.ContentJson().PostContent(gctx.New(), "http://127.0.0.1:8199/", g.Map{\n        "name": "goframe",\n        "site": "https://goframe.org",\n    })\n    fmt.Println(content)\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"\u8FD0\u884C\u6D4B\u8BD5",children:"\u8FD0\u884C\u6D4B\u8BD5"}),"\n",(0,i.jsx)(e.p,{children:"\u5148\u8FD0\u884C\u670D\u52A1\u7AEF\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"$ go run server.go\n\n  SERVER  | DOMAIN  | ADDRESS | METHOD | ROUTE |      HANDLER      | MIDDLEWARE\n----------|---------|---------|--------|-------|-------------------|-------------\n  default | default | :8199   | ALL    | /     | main.main.func1.1 |\n----------|---------|---------|--------|-------|-------------------|-------------\n\n2021-05-18 09:23:41.865 97906: http server started listening on [:8199]\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u518D\u8FD0\u884C\u5BA2\u6237\u7AEF\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'$ go run client.go\n{"appid":"123","name":"goframe","nonce":"12vd8tx23l6cbfz9k59xehk1002pixfo","signature":"578a90b67bdc63d551d6a18635307ba2","site":"https://goframe.org","timestamp":1621301076}\n$\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u670D\u52A1\u7AEF\u63A5\u53D7\u5230\u7684\u53C2\u6570\u591A\u4E86\u591A\u4E86\u51E0\u9879\uFF0C\u5305\u62EC ",(0,i.jsx)(e.code,{children:"appid/nonce/timestamp/signature"}),"\uFF0C\u8FD9\u4E9B\u53C2\u6570\u5F80\u5F80\u90FD\u662F\u7B7E\u540D\u6821\u9A8C\u7B97\u6CD5\u6240\u9700\u8981\u7684\u53C2\u6570\u3002"]})]})}function g(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return o}});var r=t(667294);let i={},s=r.createContext(i);function o(n){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);
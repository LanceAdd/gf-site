"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["95039"],{832783:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>g,assets:()=>a,toc:()=>l,frontMatter:()=>c});var i=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u4F7F\u7528\u793A\u4F8B","title":"Redis-\u4F7F\u7528\u793A\u4F8B","description":"Set/Get \u64CD\u4F5C","source":"@site/versioned_docs/version-2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u4F7F\u7528\u793A\u4F8B.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u4F7F\u7528\u793A\u4F8B","permalink":"/2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u4F7F\u7528\u793A\u4F8B","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u4F7F\u7528\u793A\u4F8B.md","tags":[],"version":"2.4.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":1,"frontMatter":{"title":"Redis-\u4F7F\u7528\u793A\u4F8B","sidebar_position":1,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"Redis-\u914D\u7F6E\u7BA1\u7406","permalink":"/2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u914D\u7F6E\u7BA1\u7406"},"next":{"title":"Redis-\u547D\u4EE4\u4EA4\u4E92","permalink":"/2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u547D\u4EE4\u4EA4\u4E92"}}'),r=t("785893"),s=t("250065");let c={title:"Redis-\u4F7F\u7528\u793A\u4F8B",sidebar_position:1,hide_title:!0},o=void 0,a={},l=[{value:"<code>Set/Get</code> \u64CD\u4F5C",id:"setget-\u64CD\u4F5C",level:2},{value:"<code>SetEx</code> \u64CD\u4F5C",id:"setex-\u64CD\u4F5C",level:2},{value:"<code>HSet/HGetAll</code> \u64CD\u4F5C",id:"hsethgetall-\u64CD\u4F5C",level:2},{value:"<code>HMSet/HMGet</code> \u64CD\u4F5C",id:"hmsethmget-\u64CD\u4F5C",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h2,{id:"setget-\u64CD\u4F5C",children:[(0,r.jsx)(n.code,{children:"Set/Get"})," \u64CD\u4F5C"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var ctx = gctx.New()\n    _, err := g.Redis().Set(ctx, "key", "value")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    value, err := g.Redis().Get(ctx, "key")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.String())\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-value"})}),"\n",(0,r.jsxs)(n.h2,{id:"setex-\u64CD\u4F5C",children:[(0,r.jsx)(n.code,{children:"SetEx"})," \u64CD\u4F5C"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var ctx = gctx.New()\n    err := g.Redis().SetEX(ctx, "key", "value", 1)\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    value, err := g.Redis().Get(ctx, "key")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.IsNil())\n    fmt.Println(value.String())\n\n    time.Sleep(time.Second)\n\n    value, err = g.Redis().Get(ctx, "key")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.IsNil())\n    fmt.Println(value.Val())\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-false",children:"value\ntrue\n<nil>\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"hsethgetall-\u64CD\u4F5C",children:[(0,r.jsx)(n.code,{children:"HSet/HGetAll"})," \u64CD\u4F5C"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n        key = "key"\n    )\n    _, err := g.Redis().HSet(ctx, key, g.Map{\n        "id":    1,\n        "name":  "john",\n        "score": 100,\n    })\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n\n    // retrieve hash map\n    value, err := g.Redis().HGetAll(ctx, key)\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.Map())\n\n    // scan to struct\n    type User struct {\n        Id    uint64\n        Name  string\n        Score float64\n    }\n    var user *User\n    if err = value.Scan(&user); err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    g.Dump(user)\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'map[id:1 name:john score:100]\n{\n    Id:    1,\n    Name:  "john",\n    Score: 100,\n}\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"hmsethmget-\u64CD\u4F5C",children:[(0,r.jsx)(n.code,{children:"HMSet/HMGet"})," \u64CD\u4F5C"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n        key = "key"\n    )\n    err := g.Redis().HMSet(ctx, key, g.Map{\n        "id":    1,\n        "name":  "john",\n        "score": 100,\n    })\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n\n    // retrieve hash map\n    values, err := g.Redis().HMGet(ctx, key, "id", "name")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    g.Dump(values.Strings())\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'[\n    "1",\n    "john",\n]\n'})}),"\n",(0,r.jsx)(n.p,{children:"As per Redis 4.0.0, HMSET is considered deprecated. Please use HSET innew code."}),"\n",(0,r.jsx)(n.p,{children:"\u6839\u636ERedis 4.0.0\uFF0CHMSET\u88AB\u89C6\u4E3A\u5DF2\u5F03\u7528\u3002\u8BF7\u5728\u65B0\u4EE3\u7801\u4E2D\u4F7F\u7528HSET\u3002"})]})}function g(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return c}});var i=t(667294);let r={},s=i.createContext(r);function c(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
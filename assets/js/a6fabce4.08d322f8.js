"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["91779"],{721902:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>l,assets:()=>c,toc:()=>a,frontMatter:()=>d});var t=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/NoSQL Redis/Redis-\u63A5\u53E3\u5316\u8BBE\u8BA1","title":"Redis-\u63A5\u53E3\u5316\u8BBE\u8BA1","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684gredis\u5B9E\u73B0\u4E00\u4E2A\u63A5\u53E3\u5316\u8BBE\u8BA1\u7684Redis\u7EC4\u4EF6\uFF0C\u5177\u5907\u5F3A\u5927\u7075\u6D3B\u6027\u548C\u6269\u5C55\u6027\u3002\u901A\u8FC7\u5B9E\u73B0\u81EA\u5B9A\u4E49Redis Adapter\uFF0C\u53EF\u4EE5\u8F7B\u677E\u8986\u76D6\u9ED8\u8BA4\u5B9E\u73B0\u7684\u65B9\u6CD5\u3002\u6587\u4E2D\u63D0\u4F9B\u4E86\u8BE6\u7EC6\u793A\u4F8B\uFF0C\u5C55\u793A\u4E86\u5982\u4F55\u5728\u81EA\u5B9A\u4E49Do\u65B9\u6CD5\u4E2D\u5B9E\u73B0\u65E5\u5FD7\u6253\u5370\uFF0C\u5E76\u5728\u4E1A\u52A1\u4E2D\u4F7F\u7528\u3002","source":"@site/docs/docs/\u7EC4\u4EF6\u5217\u8868/NoSQL Redis/Redis-\u63A5\u53E3\u5316\u8BBE\u8BA1.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/NoSQL Redis","slug":"/docs/components/contrib-nosql-redis-interface","permalink":"/docs/components/contrib-nosql-redis-interface","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/NoSQL Redis/Redis-\u63A5\u53E3\u5316\u8BBE\u8BA1.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731511511000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/components/contrib-nosql-redis-interface","title":"Redis-\u63A5\u53E3\u5316\u8BBE\u8BA1","sidebar_position":4,"hide_title":true,"keywords":["Redis","\u63A5\u53E3\u5316\u8BBE\u8BA1","GoFrame","GoFrame\u6846\u67B6","gredis","\u81EA\u5B9A\u4E49Redis Adapter","\u6269\u5C55Redis\u65B9\u6CD5","Redis\u793E\u533A\u7EC4\u4EF6","SetAdapter\u65B9\u6CD5","GetAdapter\u65B9\u6CD5"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684gredis\u5B9E\u73B0\u4E00\u4E2A\u63A5\u53E3\u5316\u8BBE\u8BA1\u7684Redis\u7EC4\u4EF6\uFF0C\u5177\u5907\u5F3A\u5927\u7075\u6D3B\u6027\u548C\u6269\u5C55\u6027\u3002\u901A\u8FC7\u5B9E\u73B0\u81EA\u5B9A\u4E49Redis Adapter\uFF0C\u53EF\u4EE5\u8F7B\u677E\u8986\u76D6\u9ED8\u8BA4\u5B9E\u73B0\u7684\u65B9\u6CD5\u3002\u6587\u4E2D\u63D0\u4F9B\u4E86\u8BE6\u7EC6\u793A\u4F8B\uFF0C\u5C55\u793A\u4E86\u5982\u4F55\u5728\u81EA\u5B9A\u4E49Do\u65B9\u6CD5\u4E2D\u5B9E\u73B0\u65E5\u5FD7\u6253\u5370\uFF0C\u5E76\u5728\u4E1A\u52A1\u4E2D\u4F7F\u7528\u3002"},"sidebar":"mainSidebar","previous":{"title":"Redis-Conn\u5BF9\u8C61","permalink":"/docs/components/contrib-nosql-redis-conn"},"next":{"title":"\u5FAE\u670D\u52A1\u5F00\u53D1","permalink":"/docs/micro-service"}}'),i=r("785893"),s=r("250065");let d={slug:"/docs/components/contrib-nosql-redis-interface",title:"Redis-\u63A5\u53E3\u5316\u8BBE\u8BA1",sidebar_position:4,hide_title:!0,keywords:["Redis","\u63A5\u53E3\u5316\u8BBE\u8BA1","GoFrame","GoFrame\u6846\u67B6","gredis","\u81EA\u5B9A\u4E49Redis Adapter","\u6269\u5C55Redis\u65B9\u6CD5","Redis\u793E\u533A\u7EC4\u4EF6","SetAdapter\u65B9\u6CD5","GetAdapter\u65B9\u6CD5"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684gredis\u5B9E\u73B0\u4E00\u4E2A\u63A5\u53E3\u5316\u8BBE\u8BA1\u7684Redis\u7EC4\u4EF6\uFF0C\u5177\u5907\u5F3A\u5927\u7075\u6D3B\u6027\u548C\u6269\u5C55\u6027\u3002\u901A\u8FC7\u5B9E\u73B0\u81EA\u5B9A\u4E49Redis Adapter\uFF0C\u53EF\u4EE5\u8F7B\u677E\u8986\u76D6\u9ED8\u8BA4\u5B9E\u73B0\u7684\u65B9\u6CD5\u3002\u6587\u4E2D\u63D0\u4F9B\u4E86\u8BE6\u7EC6\u793A\u4F8B\uFF0C\u5C55\u793A\u4E86\u5982\u4F55\u5728\u81EA\u5B9A\u4E49Do\u65B9\u6CD5\u4E2D\u5B9E\u73B0\u65E5\u5FD7\u6253\u5370\uFF0C\u5E76\u5728\u4E1A\u52A1\u4E2D\u4F7F\u7528\u3002"},o=void 0,c={},a=[{value:"\u63A5\u53E3\u5B9A\u4E49",id:"\u63A5\u53E3\u5B9A\u4E49",level:2},{value:"\u76F8\u5173\u65B9\u6CD5",id:"\u76F8\u5173\u65B9\u6CD5",level:2},{value:"\u81EA\u5B9E\u73B0Redis Adapter",id:"\u81EA\u5B9E\u73B0redis-adapter",level:2}];function g(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"gredis"})," \u91C7\u7528\u63A5\u53E3\u5316\u8BBE\u8BA1\uFF0C\u5177\u6709\u5F3A\u5927\u7684\u7075\u6D3B\u6027\u548C\u6269\u5C55\u6027\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u63A5\u53E3\u5B9A\u4E49",children:"\u63A5\u53E3\u5B9A\u4E49"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gredis#Adapter",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gredis#Adapter"})}),"\n",(0,i.jsx)(n.h2,{id:"\u76F8\u5173\u65B9\u6CD5",children:"\u76F8\u5173\u65B9\u6CD5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// SetAdapter sets custom adapter for current redis client.\nfunc (r *Redis) SetAdapter(adapter Adapter)\n\n// GetAdapter returns the adapter that is set in current redis client.\nfunc (r *Redis) GetAdapter() Adapter\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u81EA\u5B9E\u73B0redis-adapter",children:"\u81EA\u5B9E\u73B0Redis Adapter"}),"\n",(0,i.jsxs)(n.p,{children:["\u6846\u67B6\u793E\u533A\u7EC4\u4EF6\u63D0\u4F9B\u4E86 ",(0,i.jsx)(n.code,{children:"Redis Adapter"})," \u7684\u9ED8\u8BA4\u5B9E\u73B0\uFF0C\u5982\u679C\u5F00\u53D1\u8005\u9700\u8981\u81EA\u5B9E\u73B0 ",(0,i.jsx)(n.code,{children:"Redis Adapter"})," \u6216\u8005\u60F3\u8981\u8986\u76D6\u5176\u4E2D\u7684\u67D0\u4E00\u4E9B\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u57FA\u4E8E\u8BE5\u5B9E\u73B0\u6765\u6269\u5C55\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u5728\u8BE5\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5B9E\u73B0\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684 ",(0,i.jsx)(n.code,{children:"Redis Adapter"}),"\uFF0C\u5E76\u4E14\u8986\u76D6\u5B83\u7684 ",(0,i.jsx)(n.code,{children:"Do"})," \u5E95\u5C42\u65B9\u6CD5\u3002\u4E3A\u7B80\u5316\u793A\u4F8B\uFF0C\u6211\u4EEC\u8FD9\u91CC\u5728\u81EA\u5B9E\u73B0\u7684 ",(0,i.jsx)(n.code,{children:"Do"})," \u65B9\u6CD5\u4E2D\u6253\u5370\u4E00\u6761\u65E5\u5FD7\u5373\u53EF\uFF0C\u540E\u7EED\u903B\u8F91\u4ECD\u7136\u8D70\u793E\u533A ",(0,i.jsx)(n.code,{children:"Redis Adapter"})," \u7684\u5B9E\u73B0\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n\n    "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/container/gvar"\n    "github.com/gogf/gf/v2/database/gredis"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nvar (\n    ctx    = gctx.New()\n    group  = "cache"\n    config = gredis.Config{\n        Address: "127.0.0.1:6379",\n        Db:      1,\n    }\n)\n\n// MyRedis description\ntype MyRedis struct {\n    *redis.Redis\n}\n\n// Do implements and overwrites the underlying function Do from Adapter.\nfunc (r *MyRedis) Do(ctx context.Context, command string, args ...interface{}) (*gvar.Var, error) {\n    fmt.Println("MyRedis Do:", command, args)\n    return r.Redis.Do(ctx, command, args...)\n}\n\nfunc main() {\n    gredis.RegisterAdapterFunc(func(config *gredis.Config) gredis.Adapter {\n        r := &MyRedis{redis.New(config)}\n        r.AdapterOperation = r // This is necessary.\n        return r\n    })\n    gredis.SetConfig(&config, group)\n\n    _, err := g.Redis(group).Set(ctx, "key", "value")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    value, err := g.Redis(group).Get(ctx, "key")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.String())\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"MyRedis Do: Set [key value]\nMyRedis Do: Get [key]\nvalue\n"})})]})}function l(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return d}});var t=r(667294);let i={},s=t.createContext(i);function d(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
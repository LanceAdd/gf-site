"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["40887"],{926125:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>u,assets:()=>d,toc:()=>o,frontMatter:()=>s});var i=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u7F13\u5B58\u7BA1\u7406/\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58","title":"\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58","description":"\u57FA\u672C\u4ECB\u7ECD","source":"@site/versioned_docs/version-2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u7F13\u5B58\u7BA1\u7406/\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u7F13\u5B58\u7BA1\u7406","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u7F13\u5B58\u7BA1\u7406/\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58","permalink":"/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u7F13\u5B58\u7BA1\u7406/\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u7F13\u5B58\u7BA1\u7406/\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58.md","tags":[],"version":"2.2.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":2,"frontMatter":{"title":"\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u7F13\u5B58\u7BA1\u7406-\u5185\u5B58\u7F13\u5B58","permalink":"/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u7F13\u5B58\u7BA1\u7406/\u7F13\u5B58\u7BA1\u7406-\u5185\u5B58\u7F13\u5B58"},"next":{"title":"\u7F13\u5B58\u7BA1\u7406-\u65B9\u6CD5\u4ECB\u7ECD","permalink":"/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u7F13\u5B58\u7BA1\u7406/\u7F13\u5B58\u7BA1\u7406-\u65B9\u6CD5\u4ECB\u7ECD"}}'),r=t("785893"),c=t("250065");let s={title:"\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58",sidebar_position:2,hide_title:!0},a=void 0,d={},o=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2}];function l(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,r.jsxs)(n.p,{children:["\u7F13\u5B58\u7EC4\u4EF6\u540C\u65F6\u63D0\u4F9B\u4E86 ",(0,r.jsx)(n.code,{children:"gcache"})," \u7684 ",(0,r.jsx)(n.code,{children:"Redis"})," \u7F13\u5B58\u9002\u914D\u5B9E\u73B0\u3002 ",(0,r.jsx)(n.code,{children:"Redis"})," \u7F13\u5B58\u5728\u591A\u8282\u70B9\u4FDD\u8BC1\u7F13\u5B58\u7684\u6570\u636E\u4E00\u81F4\u6027\u65F6\u975E\u5E38\u6709\u7528\uFF0C\u7279\u522B\u662F ",(0,r.jsx)(n.code,{children:"Session"})," \u5171\u4EAB\u3001\u6570\u636E\u5E93\u67E5\u8BE2\u7F13\u5B58\u7B49\u573A\u666F\u4E2D\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func ExampleCache_SetAdapter() {\n    var (\n        err         error\n        ctx         = gctx.New()\n        cache       = gcache.New()\n        redisConfig = &gredis.Config{\n            Address: "127.0.0.1:6379",\n            Db:      9,\n        }\n        cacheKey   = `key`\n        cacheValue = `value`\n    )\n    // Create redis client object.\n    redis, err := gredis.New(redisConfig)\n    if err != nil {\n        panic(err)\n    }\n    // Create redis cache adapter and set it to cache object.\n    cache.SetAdapter(gcache.NewAdapterRedis(redis))\n\n    // Set and Get using cache object.\n    err = cache.Set(ctx, cacheKey, cacheValue, time.Second)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(cache.MustGet(ctx, cacheKey).String())\n\n    // Get using redis client.\n    fmt.Println(redis.MustDo(ctx, "GET", cacheKey).String())\n\n    // Output:\n    // value\n    // value\n}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var i=t(667294);let r={},c=i.createContext(r);function s(e){let n=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);
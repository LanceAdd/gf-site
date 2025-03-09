"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["13638"],{19923:function(e,s,t){t.r(s),t.d(s,{metadata:()=>n,contentTitle:()=>a,default:()=>g,assets:()=>c,toc:()=>d,frontMatter:()=>r});var n=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Storage\u63A5\u53E3\u5F00\u53D1","title":"Session-Storage\u63A5\u53E3\u5F00\u53D1","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528gsession\u7EC4\u4EF6\u8FDB\u884CSession-Storage\u63A5\u53E3\u5F00\u53D1\u3002\u901A\u8FC7\u7EC4\u4EF6\u5185\u7F6E\u7684Storage\u5B9E\u73B0\uFF0C\u53EF\u4EE5\u6EE1\u8DB3\u5927\u90E8\u5206\u4E1A\u52A1\u573A\u666F\u7684\u9700\u6C42\u3002\u5F00\u53D1\u8005\u8FD8\u53EF\u4EE5\u6839\u636E\u7279\u5B9A\u60C5\u51B5\uFF0C\u81EA\u5B9A\u4E49Session\u5B58\u50A8\u3002\u6587\u4E2D\u8BE6\u7EC6\u63CF\u8FF0\u4E86Storage\u63A5\u53E3\u7684\u5B9A\u4E49\u53CA\u8C03\u7528\u65F6\u673A\uFF0C\u4E3A\u63D0\u9AD8Session\u6027\u80FD\uFF0C\u5EFA\u8BAE\u4F7F\u7528gmap\u5BB9\u5668\u7C7B\u578B\u3002\u672C\u6307\u5357\u5C06\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u597D\u5730\u5B9E\u73B0\u548C\u4F18\u5316\u5B58\u50A8\u63A5\u53E3\u3002","source":"@site/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Storage\u63A5\u53E3\u5F00\u53D1.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/Session","slug":"/docs/web/session-storage","permalink":"/docs/web/session-storage","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Storage\u63A5\u53E3\u5F00\u53D1.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1740621099000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/web/session-storage","title":"Session-Storage\u63A5\u53E3\u5F00\u53D1","sidebar_position":4,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","gsession","Session-Storage","\u81EA\u5B9A\u4E49\u5B58\u50A8","\u63A5\u53E3\u5F00\u53D1","Storage\u63A5\u53E3","TTL","gmap","session\u7BA1\u7406"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528gsession\u7EC4\u4EF6\u8FDB\u884CSession-Storage\u63A5\u53E3\u5F00\u53D1\u3002\u901A\u8FC7\u7EC4\u4EF6\u5185\u7F6E\u7684Storage\u5B9E\u73B0\uFF0C\u53EF\u4EE5\u6EE1\u8DB3\u5927\u90E8\u5206\u4E1A\u52A1\u573A\u666F\u7684\u9700\u6C42\u3002\u5F00\u53D1\u8005\u8FD8\u53EF\u4EE5\u6839\u636E\u7279\u5B9A\u60C5\u51B5\uFF0C\u81EA\u5B9A\u4E49Session\u5B58\u50A8\u3002\u6587\u4E2D\u8BE6\u7EC6\u63CF\u8FF0\u4E86Storage\u63A5\u53E3\u7684\u5B9A\u4E49\u53CA\u8C03\u7528\u65F6\u673A\uFF0C\u4E3A\u63D0\u9AD8Session\u6027\u80FD\uFF0C\u5EFA\u8BAE\u4F7F\u7528gmap\u5BB9\u5668\u7C7B\u578B\u3002\u672C\u6307\u5357\u5C06\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u597D\u5730\u5B9E\u73B0\u548C\u4F18\u5316\u5B58\u50A8\u63A5\u53E3\u3002"},"sidebar":"mainSidebar","previous":{"title":"Session-Redis-HashTable","permalink":"/docs/web/session-redis-hash-table"},"next":{"title":"\u5F02\u5E38\u5904\u7406","permalink":"/docs/web/panic-handling"}}'),o=t("785893"),i=t("250065");let r={slug:"/docs/web/session-storage",title:"Session-Storage\u63A5\u53E3\u5F00\u53D1",sidebar_position:4,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","gsession","Session-Storage","\u81EA\u5B9A\u4E49\u5B58\u50A8","\u63A5\u53E3\u5F00\u53D1","Storage\u63A5\u53E3","TTL","gmap","session\u7BA1\u7406"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528gsession\u7EC4\u4EF6\u8FDB\u884CSession-Storage\u63A5\u53E3\u5F00\u53D1\u3002\u901A\u8FC7\u7EC4\u4EF6\u5185\u7F6E\u7684Storage\u5B9E\u73B0\uFF0C\u53EF\u4EE5\u6EE1\u8DB3\u5927\u90E8\u5206\u4E1A\u52A1\u573A\u666F\u7684\u9700\u6C42\u3002\u5F00\u53D1\u8005\u8FD8\u53EF\u4EE5\u6839\u636E\u7279\u5B9A\u60C5\u51B5\uFF0C\u81EA\u5B9A\u4E49Session\u5B58\u50A8\u3002\u6587\u4E2D\u8BE6\u7EC6\u63CF\u8FF0\u4E86Storage\u63A5\u53E3\u7684\u5B9A\u4E49\u53CA\u8C03\u7528\u65F6\u673A\uFF0C\u4E3A\u63D0\u9AD8Session\u6027\u80FD\uFF0C\u5EFA\u8BAE\u4F7F\u7528gmap\u5BB9\u5668\u7C7B\u578B\u3002\u672C\u6307\u5357\u5C06\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u597D\u5730\u5B9E\u73B0\u548C\u4F18\u5316\u5B58\u50A8\u63A5\u53E3\u3002"},a=void 0,c={},d=[{value:"Storage\u5B9A\u4E49",id:"storage\u5B9A\u4E49",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2}];function l(e){let s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:["\u5927\u90E8\u5206\u573A\u666F\u4E0B\uFF0C\u901A\u8FC7 ",(0,o.jsx)(s.code,{children:"gsession"})," \u7EC4\u4EF6\u5185\u7F6E\u63D0\u4F9B\u7684\u5E38\u89C1 ",(0,o.jsx)(s.code,{children:"Storage"})," \u5B9E\u73B0\u5DF2\u7ECF\u80FD\u591F\u6EE1\u8DB3\u9700\u6C42\u3002\u5982\u679C\u6709\u7279\u6B8A\u7684\u573A\u666F\u9700\u8981\u5236\u5B9A\u4E0D\u6613\u5F00\u53D1 ",(0,o.jsx)(s.code,{children:"Storage"})," \u5F53\u7136\u4E5F\u662F\u652F\u6301\u7684\uFF0C\u56E0\u4E3A ",(0,o.jsx)(s.code,{children:"gsession"})," \u7684\u529F\u80FD\u90FD\u91C7\u7528\u4E86\u63A5\u53E3\u5316\u8BBE\u8BA1\u3002"]}),"\n",(0,o.jsx)(s.h2,{id:"storage\u5B9A\u4E49",children:"Storage\u5B9A\u4E49"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"https://github.com/gogf/gf/blob/master/os/gsession/gsession_storage.go",children:"https://github.com/gogf/gf/blob/master/os/gsession/gsession_storage.go"})}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-go",children:"// Storage is the interface definition for session storage.\ntype Storage interface {\n    // New creates a custom session id.\n    // This function can be used for custom session creation.\n    New(ctx context.Context, ttl time.Duration) (id string, err error)\n\n    // Get retrieves and returns session value with given key.\n    // It returns nil if the key does not exist in the session.\n    Get(ctx context.Context, id string, key string) (value interface{}, err error)\n\n    // GetMap retrieves all key-value pairs as map from storage.\n    GetMap(ctx context.Context, id string) (data map[string]interface{}, err error)\n\n    // GetSize retrieves and returns the size of key-value pairs from storage.\n    GetSize(ctx context.Context, id string) (size int, err error)\n\n    // Set sets one key-value session pair to the storage.\n    // The parameter `ttl` specifies the TTL for the session id.\n    Set(ctx context.Context, id string, key string, value interface{}, ttl time.Duration) error\n\n    // SetMap batch sets key-value session pairs as map to the storage.\n    // The parameter `ttl` specifies the TTL for the session id.\n    SetMap(ctx context.Context, id string, data map[string]interface{}, ttl time.Duration) error\n\n    // Remove deletes key with its value from storage.\n    Remove(ctx context.Context, id string, key string) error\n\n    // RemoveAll deletes all key-value pairs from storage.\n    RemoveAll(ctx context.Context, id string) error\n\n    // GetSession returns the session data as `*gmap.StrAnyMap` for given session id from storage.\n    //\n    // The parameter `ttl` specifies the TTL for this session.\n    // The parameter `data` is the current old session data stored in memory,\n    // and for some storage it might be nil if memory storage is disabled.\n    //\n    // This function is called ever when session starts. It returns nil if the TTL is exceeded.\n    GetSession(ctx context.Context, id string, ttl time.Duration, data *gmap.StrAnyMap) (*gmap.StrAnyMap, error)\n\n    // SetSession updates the data for specified session id.\n    // This function is called ever after session, which is changed dirty, is closed.\n    // This copy all session data map from memory to storage.\n    SetSession(ctx context.Context, id string, data *gmap.StrAnyMap, ttl time.Duration) error\n\n    // UpdateTTL updates the TTL for specified session id.\n    // This function is called ever after session, which is not dirty, is closed.\n    UpdateTTL(ctx context.Context, id string, ttl time.Duration) error\n}\n"})}),"\n",(0,o.jsxs)(s.p,{children:["\u6BCF\u4E00\u4E2A\u65B9\u6CD5\u7684\u8C03\u7528\u65F6\u673A\u90FD\u5728\u6CE8\u91CA\u4E2D\u8BE6\u7EC6\u4ECB\u7ECD\u4E86\uFF0C\u5F00\u53D1\u8005\u5728\u5B9E\u73B0\u81EA\u5B9A\u4E49\u7684 ",(0,o.jsx)(s.code,{children:"Storage"})," \u65F6\uFF0C\u53EF\u4EE5\u5145\u5206\u53C2\u8003\u5185\u7F6E\u7684\u51E0\u79CD ",(0,o.jsx)(s.code,{children:"Storage"})," \u5B9E\u73B0\u3002"]}),"\n",(0,o.jsx)(s.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"Storage"})," \u63A5\u53E3\u4E2D\uFF0C\u5E76\u4E0D\u662F\u6240\u6709\u7684\u63A5\u53E3\u65B9\u6CD5\u90FD\u9700\u8981\u5B9E\u73B0\uFF0C\u5F00\u53D1\u8005\u4EC5\u9700\u8981\u6839\u636E\u4E1A\u52A1\u9700\u8981\uFF0C\u5B9E\u73B0\u7279\u5B9A\u8C03\u7528\u65F6\u673A\u7684\u4E00\u4E9B\u63A5\u53E3\u5373\u53EF\u3002"]}),"\n",(0,o.jsxs)(s.li,{children:["\u4E3A\u4E86\u63D0\u9AD8 ",(0,o.jsx)(s.code,{children:"Session"})," \u7684\u6267\u884C\u6027\u80FD\uFF0C\u63A5\u53E3\u6709 ",(0,o.jsx)(s.code,{children:"gmap.StrAnyMap"})," \u5BB9\u5668\u7C7B\u578B\u7684\u4F7F\u7528\uFF0C\u5F00\u53D1\u65F6\u53EF\u4EE5\u53C2\u8003\u4E00\u4E0B\u7AE0\u8282\uFF1A ",(0,o.jsx)(s.a,{href:"/docs/components/container-gmap",children:"\u5B57\u5178\u7C7B\u578B-gmap"})]}),"\n"]})]})}function g(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return a},a:function(){return r}});var n=t(667294);let o={},i=n.createContext(o);function r(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);
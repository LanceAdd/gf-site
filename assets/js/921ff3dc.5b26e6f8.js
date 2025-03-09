"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["95158"],{810802:function(n,e,c){c.r(e),c.d(e,{metadata:()=>o,contentTitle:()=>l,default:()=>g,assets:()=>u,toc:()=>r,frontMatter:()=>s});var o=JSON.parse('{"id":"\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u4E92\u65A5\u9501-gmutex","title":"\u4E92\u65A5\u9501-gmutex","description":"gmutex \u6A21\u5757\u662F\u57FA\u4E8E atomic \\\\+ channel \u5B9E\u73B0\u7684\u9AD8\u7EA7\u4E92\u65A5\u9501\u6A21\u5757\uFF0C\u652F\u6301\u66F4\u4E30\u5BCC\u7684\u4E92\u65A5\u9501\u7279\u6027\u3002","source":"@site/versioned_docs/version-2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u4E92\u65A5\u9501-gmutex.md","sourceDirName":"\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173","slug":"/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u4E92\u65A5\u9501-gmutex","permalink":"/2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u4E92\u65A5\u9501-gmutex","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u4E92\u65A5\u9501-gmutex.md","tags":[],"version":"2.3.x","lastUpdatedBy":"John","lastUpdatedAt":1740621099000,"sidebarPosition":2,"frontMatter":{"title":"\u4E92\u65A5\u9501-gmutex","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u5185\u5B58\u9501-gmlock","permalink":"/2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5185\u5B58\u9501-gmlock"},"next":{"title":"\u4E0A\u4E0B\u6587-gctx","permalink":"/2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u4E0A\u4E0B\u6587-gctx"}}'),t=c("785893"),i=c("250065");let s={title:"\u4E92\u65A5\u9501-gmutex",sidebar_position:2,hide_title:!0},l=void 0,u={},r=[{value:"\u57FA\u51C6\u6D4B\u8BD5",id:"\u57FA\u51C6\u6D4B\u8BD5",level:3},{value:"\u793A\u4F8B1\uFF0C\u57FA\u672C\u4F7F\u7528",id:"\u793A\u4F8B1\u57FA\u672C\u4F7F\u7528",level:3},{value:"\u793A\u4F8B2\uFF0C <code>*Func</code> \u4F7F\u7528",id:"\u793A\u4F8B2-func-\u4F7F\u7528",level:3}];function d(n){let e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"gmutex"})," \u6A21\u5757\u662F\u57FA\u4E8E ",(0,t.jsx)(e.code,{children:"atomic"})," + ",(0,t.jsx)(e.code,{children:"channel"})," \u5B9E\u73B0\u7684\u9AD8\u7EA7\u4E92\u65A5\u9501\u6A21\u5757\uFF0C\u652F\u6301\u66F4\u4E30\u5BCC\u7684\u4E92\u65A5\u9501\u7279\u6027\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"gmutex.Mutex"})," \u4E92\u65A5\u9501\u5BF9\u8C61\u652F\u6301\u8BFB\u5199\u63A7\u5236\uFF0C\u4E92\u65A5\u9501\u529F\u80FD\u903B\u8F91\u4E0E\u6807\u51C6\u5E93 ",(0,t.jsx)(e.code,{children:"sync.RWMutex"})," \u7C7B\u4F3C\uFF0C\u53EF\u5E76\u53D1\u8BFB\u4F46\u4E0D\u53EF\u5E76\u53D1\u5199\u3002"]}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u4E92\u65A5\u9501\u7684\u8BBE\u8BA1\u7EC6\u8282\uFF0C\u63A8\u8350\u9605\u8BFB\u8F7B\u91CF\u7EA7\u9AD8\u6E05\u7248\u7684\u5B9E\u73B0\u6E90\u7801\uFF1A ",(0,t.jsx)(e.a,{href:"https://github.com/gogf/gf/blob/master/os/gmutex/gmutex.go",children:"https://github.com/gogf/gf/blob/master/os/gmutex/gmutex.go"})]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/os/gmutex"\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gmutex",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gmutex"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:"type Mutex\n    func New() *Mutex\n    func (m *Mutex) IsLocked() bool\n    func (m *Mutex) IsRLocked() bool\n    func (m *Mutex) IsWLocked() bool\n    func (m *Mutex) Lock()\n    func (m *Mutex) LockFunc(f func())\n    func (m *Mutex) RLock()\n    func (m *Mutex) RLockFunc(f func())\n    func (m *Mutex) RUnlock()\n    func (m *Mutex) TryLock() bool\n    func (m *Mutex) TryLockFunc(f func()) bool\n    func (m *Mutex) TryRLock() bool\n    func (m *Mutex) TryRLockFunc(f func()) bool\n    func (m *Mutex) Unlock()\n"})}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\u8BE5\u4E92\u65A5\u9501\u6A21\u5757\u6700\u5927\u7684\u7279\u70B9\u662F\u652F\u6301 ",(0,t.jsx)(e.code,{children:"Try*"})," \u65B9\u6CD5\u4EE5\u53CA ",(0,t.jsx)(e.code,{children:"*Func"})," \u65B9\u6CD5\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"Try*"})," \u65B9\u6CD5\u7528\u4E8E\u5B9E\u73B0\u5C1D\u8BD5\u83B7\u5F97\u7279\u5B9A\u7C7B\u578B\u7684\u9501\uFF0C\u5982\u679C\u83B7\u5F97\u9501\u6210\u529F\u5219\u7ACB\u5373\u8FD4\u56DE ",(0,t.jsx)(e.code,{children:"true"}),"\uFF0C\u5426\u5219\u7ACB\u5373\u8FD4\u56DE ",(0,t.jsx)(e.code,{children:"false"}),"\uFF0C\u4E0D\u4F1A\u963B\u585E\u7B49\u5F85\uFF0C\u8FD9\u5BF9\u4E8E\u9700\u8981\u4F7F\u7528\u975E\u963B\u585E\u9501\u673A\u5236\u7684\u4E1A\u52A1\u903B\u8F91\u975E\u5E38\u5B9E\u7528\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"*Func"})," \u65B9\u6CD5\u4F7F\u7528\u95ED\u5305\u533F\u540D\u51FD\u6570\u7684\u65B9\u5F0F\u5B9E\u73B0\u7279\u5B9A\u4F5C\u7528\u57DF\u7684\u5E76\u53D1\u5B89\u5168\u9501\u63A7\u5236\uFF0C\u8FD9\u5BF9\u4E8E\u7279\u5B9A\u4EE3\u7801\u5757\u7684\u5E76\u53D1\u5B89\u5168\u63A7\u5236\u7279\u522B\u65B9\u4FBF\uFF0C\u7531\u4E8E\u5185\u90E8\u4F7F\u7528\u4E86 ",(0,t.jsx)(e.code,{children:"defer"})," \u6765\u91CA\u653E\u9501\uFF0C\u56E0\u6B64\u5373\u4F7F\u51FD\u6570\u5185\u90E8\u4EA7\u751F\u5F02\u5E38\u9519\u8BEF\uFF0C\u4E5F\u4E0D\u4F1A\u5F71\u54CD\u9501\u673A\u5236\u7684\u5B89\u5168\u6027\u63A7\u5236\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"\u57FA\u51C6\u6D4B\u8BD5",children:"\u57FA\u51C6\u6D4B\u8BD5"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"gmutex.Mutex"})," \u4E0E\u6807\u51C6\u5E93\u7684 ",(0,t.jsx)(e.code,{children:"sync.Mutex"})," \u53CA ",(0,t.jsx)(e.code,{children:"sync.RWMutex"})," \u7684\u57FA\u51C6\u6D4B\u8BD5\u5BF9\u6BD4\u7ED3\u679C\uFF1A ",(0,t.jsx)(e.a,{href:"https://github.com/gogf/gf/blob/master/os/gmutex/gmutex_bench_test.go",children:"gmutex_bench_test.go"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"goos: linux\ngoarch: amd64\npkg: github.com/gogf/gf/v2/os/gmutex\nBenchmark_Mutex_LockUnlock-4           50000000            31.5 ns/op\nBenchmark_RWMutex_LockUnlock-4         30000000            54.1 ns/op\nBenchmark_RWMutex_RLockRUnlock-4       50000000            27.9 ns/op\nBenchmark_GMutex_LockUnlock-4          50000000            27.2 ns/op\nBenchmark_GMutex_TryLock-4             100000000           16.7 ns/op\nBenchmark_GMutex_RLockRUnlock-4        50000000            38.0 ns/op\nBenchmark_GMutex_TryRLock-4            100000000           16.8 ns/op\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u793A\u4F8B1\u57FA\u672C\u4F7F\u7528",children:"\u793A\u4F8B1\uFF0C\u57FA\u672C\u4F7F\u7528"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "time"\n\n    "github.com/gogf/gf/v2/os/glog"\n    "github.com/gogf/gf/v2/os/gmutex"\n)\n\nfunc main() {\n    mu := gmutex.New()\n    for i := 0; i < 10; i++ {\n        go func(n int) {\n            mu.Lock()\n            defer mu.Unlock()\n            glog.Println("Lock:", n)\n            time.Sleep(time.Second)\n        }(i)\n    }\n    for i := 0; i < 10; i++ {\n        go func(n int) {\n            mu.RLock()\n            defer mu.RUnlock()\n            glog.Println("RLock:", n)\n            time.Sleep(time.Second)\n        }(i)\n    }\n    time.Sleep(11 * time.Second)\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",children:"2019-07-13 16:19:55.417 Lock: 0\n2019-07-13 16:19:56.421 Lock: 1\n2019-07-13 16:19:57.424 RLock: 0\n2019-07-13 16:19:57.424 RLock: 4\n2019-07-13 16:19:57.425 RLock: 8\n2019-07-13 16:19:57.425 RLock: 2\n2019-07-13 16:19:57.425 RLock: 7\n2019-07-13 16:19:57.425 RLock: 5\n2019-07-13 16:19:57.425 RLock: 9\n2019-07-13 16:19:57.425 RLock: 1\n2019-07-13 16:19:57.425 RLock: 6\n2019-07-13 16:19:57.425 RLock: 3\n2019-07-13 16:19:58.429 Lock: 3\n2019-07-13 16:19:59.433 Lock: 4\n2019-07-13 16:20:00.438 Lock: 5\n2019-07-13 16:20:01.443 Lock: 6\n2019-07-13 16:20:02.448 Lock: 7\n2019-07-13 16:20:03.452 Lock: 8\n2019-07-13 16:20:04.456 Lock: 9\n2019-07-13 16:20:05.461 Lock: 2\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u8FD9\u91CC\u4F7F\u7528 ",(0,t.jsx)(e.code,{children:"glog"})," \u6253\u5370\u7684\u76EE\u7684\uFF0C\u662F\u53EF\u4EE5\u65B9\u4FBF\u5730\u770B\u5230\u6253\u5370\u8F93\u51FA\u7684\u65F6\u95F4\u3002\u53EF\u4EE5\u770B\u5230\uFF0C\u5728\u7B2C3\u79D2\u7684\u65F6\u5019\uFF0C\u8BFB\u9501\u62A2\u5360\u5230\u4E86\u673A\u4F1A\uFF0C\u7531\u4E8E ",(0,t.jsx)(e.code,{children:"gmutex.Mutex"})," \u5BF9\u8C61\u652F\u6301\u5E76\u53D1\u8BFB\u4F46\u4E0D\u652F\u6301\u5E76\u53D1\u5199\uFF0C\u56E0\u6B64\u8BFB\u9501\u62A2\u5360\u540E\u8FC5\u901F\u6267\u884C\u5B8C\u6BD5\uFF1B\u800C\u5199\u9501\u4F9D\u65E7\u4FDD\u6301\u6BCF\u79D2\u6253\u5370\u4E00\u6761\u65E5\u5FD7\u7EE7\u7EED\u6267\u884C\u3002"]}),"\n",(0,t.jsxs)(e.h3,{id:"\u793A\u4F8B2-func-\u4F7F\u7528",children:["\u793A\u4F8B2\uFF0C ",(0,t.jsx)(e.code,{children:"*Func"})," \u4F7F\u7528"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "time"\n\n    "github.com/gogf/gf/v2/os/glog"\n\n    "github.com/gogf/gf/v2/os/gmutex"\n)\n\nfunc main() {\n    mu := gmutex.New()\n    go mu.LockFunc(func() {\n        glog.Println("lock func1")\n        time.Sleep(1 * time.Second)\n    })\n    time.Sleep(time.Millisecond)\n    go mu.LockFunc(func() {\n        glog.Println("lock func2")\n    })\n    time.Sleep(2 * time.Second)\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",children:"2019-07-13 16:28:10.381 lock func1\n2019-07-13 16:28:11.385 lock func2\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u4F7F\u7528 ",(0,t.jsx)(e.code,{children:"*Func"})," \u65B9\u6CD5\u5B9E\u73B0\u7279\u5B9A\u4F5C\u7528\u57DF\u7684\u9501\u63A7\u5236\u975E\u5E38\u65B9\u4FBF\u3002"]})]})}function g(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},250065:function(n,e,c){c.d(e,{Z:function(){return l},a:function(){return s}});var o=c(667294);let t={},i=o.createContext(t);function s(n){let e=o.useContext(i);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);
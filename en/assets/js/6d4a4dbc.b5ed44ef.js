"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["37813"],{866847:function(e,o,n){n.r(o),n.d(o,{metadata:()=>i,contentTitle:()=>r,default:()=>a,assets:()=>d,toc:()=>l,frontMatter:()=>c});var i=JSON.parse('{"id":"WEB\u670D\u52A1\u5F00\u53D1/Cookie","title":"Cookie","description":"\u57FA\u672C\u4ECB\u7ECD","source":"@site/versioned_docs/version-2.6.x/WEB\u670D\u52A1\u5F00\u53D1/Cookie.md","sourceDirName":"WEB\u670D\u52A1\u5F00\u53D1","slug":"/WEB\u670D\u52A1\u5F00\u53D1/Cookie","permalink":"/en/2.6.x/WEB\u670D\u52A1\u5F00\u53D1/Cookie","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/WEB\u670D\u52A1\u5F00\u53D1/Cookie.md","tags":[],"version":"2.6.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":6,"frontMatter":{"title":"Cookie","sidebar_position":6,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u670D\u52A1\u914D\u7F6E-\u914D\u7F6E\u65B9\u6CD5","permalink":"/en/2.6.x/WEB\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u914D\u7F6E/\u670D\u52A1\u914D\u7F6E-\u914D\u7F6E\u65B9\u6CD5"},"next":{"title":"Session","permalink":"/en/2.6.x/WEB\u670D\u52A1\u5F00\u53D1/Session/"}}'),t=n("785893"),s=n("250065");let c={title:"Cookie",sidebar_position:6,hide_title:!0},r=void 0,d={},l=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"<code>Cookie</code> \u4F1A\u8BDD\u8FC7\u671F",id:"cookie-\u4F1A\u8BDD\u8FC7\u671F",level:2}];function h(e){let o={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,t.jsxs)(o.p,{children:["\u63A5\u53E3\u6587\u6863\uFF1A ",(0,t.jsx)(o.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#Cookie",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#Cookie"})]}),"\n",(0,t.jsx)(o.p,{children:"\u5E38\u7528\u65B9\u6CD5\uFF1A"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:"type Cookie\n    func GetCookie(r *Request) *Cookie\n    func (c *Cookie) Contains(key string) bool\n    func (c *Cookie) Flush()\n    func (c *Cookie) Get(key string, def ...string) string\n    func (c *Cookie) GetSessionId() string\n    func (c *Cookie) Map() map[string]string\n    func (c *Cookie) Remove(key string)\n    func (c *Cookie) RemoveCookie(key, domain, path string)\n    func (c *Cookie) Set(key, value string)\n    func (c *Cookie) SetCookie(key, value, domain, path string, maxAge time.Duration, httpOnly ...bool)\n    func (c *Cookie) SetHttpCookie(httpCookie *http.Cookie)\n    func (c *Cookie) SetSessionId(id string)\n"})}),"\n",(0,t.jsxs)(o.p,{children:["\u4EFB\u4F55\u65F6\u5019\u90FD\u53EF\u4EE5\u901A\u8FC7 ",(0,t.jsx)(o.code,{children:"*ghttp.Request"})," \u5BF9\u8C61\u83B7\u53D6\u5230\u5F53\u524D\u8BF7\u6C42\u5BF9\u5E94\u7684 ",(0,t.jsx)(o.code,{children:"Cookie"})," \u5BF9\u8C61\uFF0C\u56E0\u4E3A ",(0,t.jsx)(o.code,{children:"Cookie"})," \u548C ",(0,t.jsx)(o.code,{children:"Session"})," \u90FD\u662F\u548C\u8BF7\u6C42\u4F1A\u8BDD\u76F8\u5173\uFF0C\u56E0\u6B64\u90FD\u5C5E\u4E8E ",(0,t.jsx)(o.code,{children:"ghttp.Request"})," \u7684\u6210\u5458\u5BF9\u8C61\uFF0C\u5E76\u5BF9\u5916\u516C\u5F00\u3002 ",(0,t.jsx)(o.code,{children:"Cookie"})," \u5BF9\u8C61\u4E0D\u9700\u8981\u624B\u52A8 ",(0,t.jsx)(o.code,{children:"Close"}),"\uFF0C\u8BF7\u6C42\u6D41\u7A0B\u7ED3\u675F\u540E\uFF0C ",(0,t.jsx)(o.code,{children:"HTTP Server"})," \u4F1A\u81EA\u52A8\u5173\u95ED\u6389\u3002"]}),"\n",(0,t.jsxs)(o.p,{children:["\u6B64\u5916\uFF0C ",(0,t.jsx)(o.code,{children:"Cookie"})," \u4E2D\u5C01\u88C5\u4E86\u4E24\u4E2A ",(0,t.jsx)(o.code,{children:"SessionId"})," \u76F8\u5173\u7684\u65B9\u6CD5\uFF1A"]}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Cookie.GetSessionId()"})," \u7528\u4E8E\u83B7\u53D6\u5F53\u524D\u8BF7\u6C42\u63D0\u4EA4\u7684 ",(0,t.jsx)(o.code,{children:"SessionId"}),"\uFF0C\u6BCF\u4E2A\u8BF7\u6C42\u7684 ",(0,t.jsx)(o.code,{children:"SessionId"})," \u90FD\u662F\u552F\u4E00\u7684\uFF0C\u5E76\u4E14\u4F34\u968F\u6574\u4E2A\u8BF7\u6C42\u6D41\u7A0B\uFF0C\u8BE5\u503C\u53EF\u80FD\u4E3A\u7A7A\u3002"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Cookie.SetSessionId(id string)"})," \u7528\u4E8E\u81EA\u5B9A\u4E49\u8BBE\u7F6E ",(0,t.jsx)(o.code,{children:"SessionId"})," \u5230 ",(0,t.jsx)(o.code,{children:"Cookie"})," \u4E2D\uFF0C\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\uFF08\u5F80\u5F80\u662F\u6D4F\u89C8\u5668\uFF09\u5B58\u50A8\uFF0C\u968F\u540E\u5BA2\u6237\u7AEF\u6BCF\u4E00\u6B21\u8BF7\u6C42\u5728 ",(0,t.jsx)(o.code,{children:"Cookie"})," \u4E2D\u53EF\u5E26\u4E0A\u8BE5 ",(0,t.jsx)(o.code,{children:"SessionId"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["\u5728\u8BBE\u7F6E ",(0,t.jsx)(o.code,{children:"Cookie"})," \u53D8\u91CF\u7684\u65F6\u5019\u53EF\u4EE5\u7ED9\u5B9A\u8FC7\u671F\u65F6\u95F4\uFF0C\u8BE5\u65F6\u95F4\u4E3A\u53EF\u9009\u53C2\u6570\uFF0C\u9ED8\u8BA4\u7684 ",(0,t.jsx)(o.code,{children:"Cookie"})," \u8FC7\u671F\u65F6\u95F4\u4E3A\u4E00\u5E74\u3002"]}),"\n",(0,t.jsxs)(o.p,{children:["\u9ED8\u8BA4\u7684 ",(0,t.jsx)(o.code,{children:"SessionId"})," \u5728 ",(0,t.jsx)(o.code,{children:"Cookie"})," \u4E2D\u7684\u5B58\u50A8\u540D\u79F0\u4E3A ",(0,t.jsx)(o.code,{children:"gfsession"}),"\u3002"]}),"\n",(0,t.jsx)(o.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gtime"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/cookie", func(r *ghttp.Request) {\n        datetime := r.Cookie.Get("datetime")\n        r.Cookie.Set("datetime", gtime.Datetime())\n        r.Response.Write("datetime:", datetime)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,t.jsxs)(o.p,{children:["\u6267\u884C\u5916\u5C42\u7684 ",(0,t.jsx)(o.code,{children:"main.go"}),"\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u5237\u65B0\u9875\u9762 ",(0,t.jsx)(o.a,{href:"http://127.0.0.1:8199/cookie",children:"http://127.0.0.1:8199/cookie"})," \uFF0C\u663E\u793A\u7684\u65F6\u95F4\u5728\u4E00\u76F4\u53D8\u5316\u3002"]}),"\n",(0,t.jsx)(o.p,{children:"\u5BF9\u4E8E\u63A7\u5236\u5668\u5BF9\u8C61\u800C\u8A00\uFF0C\u4ECE\u57FA\u7C7B\u63A7\u5236\u5668\u4E2D\u7EE7\u627F\u4E86\u5F88\u591A\u4F1A\u8BDD\u76F8\u5173\u7684\u5BF9\u8C61\u6307\u9488\uFF0C\u53EF\u4EE5\u770B\u505Aalias\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\uFF0C\u4ED6\u4EEC\u90FD\u662F\u6307\u5411\u7684\u540C\u4E00\u4E2A\u5BF9\u8C61\uFF1A"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:"type Controller struct {\n    Request  *ghttp.Request  // \u8BF7\u6C42\u6570\u636E\u5BF9\u8C61\n    Response *ghttp.Response // \u8FD4\u56DE\u6570\u636E\u5BF9\u8C61(r.Response)\n    Server   *ghttp.Server   // WebServer\u5BF9\u8C61(r.Server)\n    Cookie   *ghttp.Cookie   // COOKIE\u64CD\u4F5C\u5BF9\u8C61(r.Cookie)\n    Session  *ghttp.Session  // SESSION\u64CD\u4F5C\u5BF9\u8C61\n    View     *View           // \u89C6\u56FE\u5BF9\u8C61\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["\u7531\u4E8E\u5BF9\u4E8EWeb\u5F00\u53D1\u8005\u6765\u8BB2\uFF0C ",(0,t.jsx)(o.code,{children:"Cookie"})," \u90FD\u5DF2\u7ECF\u662F\u975E\u5E38\u719F\u6089\u7684\u7EC4\u4EF6\u4E86\uFF0C\u76F8\u5173 ",(0,t.jsx)(o.code,{children:"API"})," \u4E5F\u975E\u5E38\u7B80\u5355\uFF0C\u8FD9\u91CC\u4FBF\u4E0D\u518D\u8D58\u8FF0\u3002"]}),"\n",(0,t.jsxs)(o.h2,{id:"cookie-\u4F1A\u8BDD\u8FC7\u671F",children:[(0,t.jsx)(o.code,{children:"Cookie"})," \u4F1A\u8BDD\u8FC7\u671F"]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Cookie"})," \u7684\u6709\u6548\u671F\u9ED8\u8BA4\u662F1\u5E74\uFF0C\u5982\u679C\u6211\u4EEC\u671F\u671BCookie\u968F\u7740\u7528\u6237\u7684\u6D4F\u89C8\u4F1A\u8BDD\u8FC7\u671F\uFF0C\u50CF\u8FD9\u6837\uFF1A"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{src:n(108753).Z+"",width:"2758",height:"736"})}),"\n",(0,t.jsxs)(o.p,{children:["\u90A3\u4E48\u6211\u4EEC\u4EC5\u9700\u8981\u901A\u8FC7 ",(0,t.jsx)(o.code,{children:"SetCookie"})," \u6765\u8BBE\u7F6E ",(0,t.jsx)(o.code,{children:"Cookie"})," \u952E\u503C\u5BF9\u5E76\u5C06 ",(0,t.jsx)(o.code,{children:"maxAge"})," \u53C2\u6570\u8BBE\u7F6E\u4E3A ",(0,t.jsx)(o.code,{children:"0"})," \u5373\u53EF\u3002\u50CF\u8FD9\u6837\uFF1A"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:'r.Cookie.SetCookie("MyCookieKey", "MyCookieValue", "", "/", 0)\n'})})]})}function a(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},108753:function(e,o,n){n.d(o,{Z:function(){return i}});let i=n.p+"assets/images/fa72a0710a32e7340a5505adbaec01d1-883a1673a01ec06c663cb3b6431a7c94.png"},250065:function(e,o,n){n.d(o,{Z:function(){return r},a:function(){return c}});var i=n(667294);let t={},s=i.createContext(t);function c(e){let o=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(s.Provider,{value:o},e.children)}}}]);
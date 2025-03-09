"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["62264"],{38068:function(e,o,t){t.r(o),t.d(o,{metadata:()=>i,contentTitle:()=>c,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>r});var i=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/Cookie","title":"Cookie","description":"Use Cookie for session management in the GoFrame framework. Developers can easily get, set, and delete cookies through the ghttp.Request object. It also discusses obtaining and setting SessionId, handling cookie expiration, and simple methods to inherit and use session objects in controllers. These features provide powerful tools for web developers to manage user sessions, ensuring the flexibility and adaptability of web applications.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/WEB\u670D\u52A1\u5F00\u53D1/Cookie.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1","slug":"/docs/web/cookie","permalink":"/en/docs/web/cookie","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/Cookie.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732440306000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/web/cookie","title":"Cookie","sidebar_position":6,"hide_title":true,"keywords":["Cookie","GoFrame","GoFrame Framework","ghttp","SessionId","API Documentation","SetCookie","HTTP Server","Session","Web Development"],"description":"Use Cookie for session management in the GoFrame framework. Developers can easily get, set, and delete cookies through the ghttp.Request object. It also discusses obtaining and setting SessionId, handling cookie expiration, and simple methods to inherit and use session objects in controllers. These features provide powerful tools for web developers to manage user sessions, ensuring the flexibility and adaptability of web applications."},"sidebar":"mainSidebar","previous":{"title":"Configuration - Methods","permalink":"/en/docs/web/server-config-funcs"},"next":{"title":"Session","permalink":"/en/docs/web/session"}}'),n=t("785893"),s=t("250065");let r={slug:"/docs/web/cookie",title:"Cookie",sidebar_position:6,hide_title:!0,keywords:["Cookie","GoFrame","GoFrame Framework","ghttp","SessionId","API Documentation","SetCookie","HTTP Server","Session","Web Development"],description:"Use Cookie for session management in the GoFrame framework. Developers can easily get, set, and delete cookies through the ghttp.Request object. It also discusses obtaining and setting SessionId, handling cookie expiration, and simple methods to inherit and use session objects in controllers. These features provide powerful tools for web developers to manage user sessions, ensuring the flexibility and adaptability of web applications."},c=void 0,a={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Usage Example",id:"usage-example",level:2},{value:"<code>Cookie</code> Session Expiry",id:"cookie-session-expiry",level:2}];function l(e){let o={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(o.p,{children:["API Documentation: ",(0,n.jsx)(o.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#Cookie",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#Cookie"})]}),"\n",(0,n.jsx)(o.p,{children:"Common Methods:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-go",children:"type Cookie\n    func GetCookie(r *Request) *Cookie\n    func (c *Cookie) Contains(key string) bool\n    func (c *Cookie) Flush()\n    func (c *Cookie) Get(key string, def ...string) string\n    func (c *Cookie) GetSessionId() string\n    func (c *Cookie) Map() map[string]string\n    func (c *Cookie) Remove(key string)\n    func (c *Cookie) RemoveCookie(key, domain, path string)\n    func (c *Cookie) Set(key, value string)\n    func (c *Cookie) SetCookie(key, value, domain, path string, maxAge time.Duration, httpOnly ...bool)\n    func (c *Cookie) SetHttpCookie(httpCookie *http.Cookie)\n    func (c *Cookie) SetSessionId(id string)\n"})}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"Cookie"})," object corresponding to the current request can be obtained at any time through the ",(0,n.jsx)(o.code,{children:"*ghttp.Request"})," object since both ",(0,n.jsx)(o.code,{children:"Cookie"})," and ",(0,n.jsx)(o.code,{children:"Session"})," are related to the request session and are therefore member objects of ",(0,n.jsx)(o.code,{children:"ghttp.Request"}),", accessible to the public. The ",(0,n.jsx)(o.code,{children:"Cookie"})," object does not need to be manually closed; the ",(0,n.jsx)(o.code,{children:"HTTP Server"})," will automatically close it after the request cycle ends."]}),"\n",(0,n.jsxs)(o.p,{children:["Additionally, ",(0,n.jsx)(o.code,{children:"Cookie"})," encapsulates two methods related to ",(0,n.jsx)(o.code,{children:"SessionId"}),":"]}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"Cookie.GetSessionId()"})," is used to obtain the ",(0,n.jsx)(o.code,{children:"SessionId"})," submitted by the current request. Each request's ",(0,n.jsx)(o.code,{children:"SessionId"})," is unique and accompanies the entire request cycle. The value may be empty."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"Cookie.SetSessionId(id string)"})," is used to custom-set the ",(0,n.jsx)(o.code,{children:"SessionId"})," into the ",(0,n.jsx)(o.code,{children:"Cookie"}),", which is then returned to the client (often the browser) for storage. Subsequently, the client can carry the ",(0,n.jsx)(o.code,{children:"SessionId"})," in ",(0,n.jsx)(o.code,{children:"Cookie"})," with each request."]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["When setting the ",(0,n.jsx)(o.code,{children:"Cookie"})," variable, an expiration time can be given, which is an optional parameter. The default ",(0,n.jsx)(o.code,{children:"Cookie"})," expiration time is one year."]}),"\n",(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsxs)(o.p,{children:["The default storage name for ",(0,n.jsx)(o.code,{children:"SessionId"})," in ",(0,n.jsx)(o.code,{children:"Cookie"})," is ",(0,n.jsx)(o.code,{children:"gfsession"}),"."]})}),"\n",(0,n.jsx)(o.h2,{id:"usage-example",children:"Usage Example"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gtime"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/cookie", func(r *ghttp.Request) {\n        datetime := r.Cookie.Get("datetime")\n        r.Cookie.Set("datetime", gtime.Datetime())\n        r.Response.Write("datetime:", datetime)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,n.jsxs)(o.p,{children:["Execute the outer ",(0,n.jsx)(o.code,{children:"main.go"}),", and try refreshing the page ",(0,n.jsx)(o.a,{href:"http://127.0.0.1:8199/cookie",children:"http://127.0.0.1:8199/cookie"}),", the displayed time keeps changing."]}),"\n",(0,n.jsx)(o.p,{children:"For controller objects, many session-related object pointers inherited from the base class controller can be regarded as aliases and used directly, all pointing to the same object:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-go",children:"type Controller struct {\n    Request  *ghttp.Request  // Request data object\n    Response *ghttp.Response // Response data object (r.Response)\n    Server   *ghttp.Server   // WebServer object (r.Server)\n    Cookie   *ghttp.Cookie   // COOKIE operation object (r.Cookie)\n    Session  *ghttp.Session  // SESSION operation object\n    View     *View           // View object\n}\n"})}),"\n",(0,n.jsxs)(o.p,{children:["Since ",(0,n.jsx)(o.code,{children:"Cookie"})," is already a very familiar component to web developers, and the related ",(0,n.jsx)(o.code,{children:"API"})," is very simple, further elaboration is not needed here."]}),"\n",(0,n.jsxs)(o.h2,{id:"cookie-session-expiry",children:[(0,n.jsx)(o.code,{children:"Cookie"})," Session Expiry"]}),"\n",(0,n.jsxs)(o.p,{children:["The default validity period for ",(0,n.jsx)(o.code,{children:"Cookie"})," is 1 year. If we want the Cookie to expire with the user's browsing session, like this:"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:t(148306).Z+"",width:"2758",height:"736"})}),"\n",(0,n.jsxs)(o.p,{children:["Then we only need to set the ",(0,n.jsx)(o.code,{children:"Cookie"})," key-value pair via ",(0,n.jsx)(o.code,{children:"SetCookie"})," and set the ",(0,n.jsx)(o.code,{children:"maxAge"})," parameter to ",(0,n.jsx)(o.code,{children:"0"}),". Like this:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:'r.Cookie.SetCookie("MyCookieKey", "MyCookieValue", "", "/", 0)\n'})})]})}function h(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},148306:function(e,o,t){t.d(o,{Z:function(){return i}});let i=t.p+"assets/images/6aca8ffefa9db267e2a4ecf1423ba6be-883a1673a01ec06c663cb3b6431a7c94.png"},250065:function(e,o,t){t.d(o,{Z:function(){return c},a:function(){return r}});var i=t(667294);let n={},s=i.createContext(n);function r(e){let o=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:o},e.children)}}}]);
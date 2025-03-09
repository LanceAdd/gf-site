"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["52266"],{664692:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>c,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>s});var o=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/CSRF\u9632\u5FA1\u8BBE\u7F6E","title":"CSRF","description":"Explains how to protect web application security through CSRF defense settings in the GoFrame framework. We will introduce the use of token verification mechanisms and implement plugin-based protection through middleware. Includes installation and configuration of plugins, as well as key steps and code examples for front-end integration to help developers effectively resist CSRF attacks.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/CSRF\u9632\u5FA1\u8BBE\u7F6E.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027","slug":"/docs/web/senior-csrf","permalink":"/en/docs/web/senior-csrf","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/CSRF\u9632\u5FA1\u8BBE\u7F6E.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732451468000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/web/senior-csrf","title":"CSRF","sidebar_position":5,"hide_title":true,"keywords":["CSRF Defense","GoFrame Framework","Cross-Site Request Forgery","CSRF Attack","XSRF","Token Verification","Middleware","Plugin Batch Processing","Network Security","Web Application Security"],"description":"Explains how to protect web application security through CSRF defense settings in the GoFrame framework. We will introduce the use of token verification mechanisms and implement plugin-based protection through middleware. Includes installation and configuration of plugins, as well as key steps and code examples for front-end integration to help developers effectively resist CSRF attacks."},"sidebar":"mainSidebar","previous":{"title":"CORS","permalink":"/en/docs/web/senior-cors"},"next":{"title":"HOOK Callbacks","permalink":"/en/docs/web/senior-hook"}}'),i=t("785893"),r=t("250065");let s={slug:"/docs/web/senior-csrf",title:"CSRF",sidebar_position:5,hide_title:!0,keywords:["CSRF Defense","GoFrame Framework","Cross-Site Request Forgery","CSRF Attack","XSRF","Token Verification","Middleware","Plugin Batch Processing","Network Security","Web Application Security"],description:"Explains how to protect web application security through CSRF defense settings in the GoFrame framework. We will introduce the use of token verification mechanisms and implement plugin-based protection through middleware. Includes installation and configuration of plugins, as well as key steps and code examples for front-end integration to help developers effectively resist CSRF attacks."},c=void 0,a={},d=[{value:"How to Defend",id:"how-to-defend",level:2},{value:"Usage",id:"usage",level:2},{value:"Import Plugin Package",id:"import-plugin-package",level:3},{value:"Configure API Middleware",id:"configure-api-middleware",level:3},{value:"Front-end Integration",id:"front-end-integration",level:3},{value:"Code Example",id:"code-example",level:2},{value:"Using Default Configuration",id:"using-default-configuration",level:3},{value:"Using Custom Configuration",id:"using-custom-configuration",level:3},{value:"Experience the Effect Through Request",id:"experience-the-effect-through-request",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Cross-Site Request Forgery"})," (abbreviated as ",(0,i.jsx)(n.strong,{children:"CSRF"})," or ",(0,i.jsx)(n.strong,{children:"XSRF"}),"), also known as ",(0,i.jsx)(n.strong,{children:"one-click attack"})," or ",(0,i.jsx)(n.strong,{children:"session riding"}),", is an attack method that coerces a user to perform unintended actions on a currently authenticated web application. Compared to Cross-Site Scripting (",(0,i.jsx)(n.code,{children:"XSS"}),"), ",(0,i.jsx)(n.strong,{children:"XSS"})," exploits the trust a user has in a particular site, while ",(0,i.jsx)(n.code,{children:"CSRF"})," exploits the trust that a site has in a user's web browser."]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-defend",children:"How to Defend"}),"\n",(0,i.jsxs)(n.p,{children:["Here, we choose to validate requests using ",(0,i.jsx)(n.code,{children:"token"})," through middleware, with the ",(0,i.jsx)(n.code,{children:"CSRF"})," cross-site defense plugin provided by the community package."]}),"\n",(0,i.jsxs)(n.p,{children:["Developers can add middleware to the API to include ",(0,i.jsx)(n.code,{children:"token"})," verification functionality."]}),"\n",(0,i.jsxs)(n.p,{children:["Interested parties can read the plugin source code at ",(0,i.jsx)(n.a,{href:"https://github.com/gogf/csrf",children:"https://github.com/gogf/csrf"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.h3,{id:"import-plugin-package",children:"Import Plugin Package"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/csrf"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"configure-api-middleware",children:"Configure API Middleware"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"csrf"})," plugin supports custom ",(0,i.jsx)(n.code,{children:"csrf.Config"})," configuration. In ",(0,i.jsx)(n.code,{children:"Config"}),", ",(0,i.jsx)(n.code,{children:"Cookie.Name"})," is the name of the ",(0,i.jsx)(n.code,{children:"token"})," set by the middleware in the returned ",(0,i.jsx)(n.code,{children:"Cookie"}),", ",(0,i.jsx)(n.code,{children:"ExpireTime"})," is the timeout for the ",(0,i.jsx)(n.code,{children:"token"}),", ",(0,i.jsx)(n.code,{children:"TokenLength"})," is the ",(0,i.jsx)(n.code,{children:"token"})," length, and ",(0,i.jsx)(n.code,{children:"TokenRequestKey"})," is the name of the parameter required to be included in subsequent requests."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'s := g.Server()\ns.Group("/api.v2", func(group *ghttp.RouterGroup) {\n    group.Middleware(csrf.NewWithCfg(csrf.Config{\n        Cookie: &http.Cookie{\n            Name: "_csrf", // token name in cookie\n        },\n        ExpireTime:      time.Hour * 24,\n        TokenLength:     32,\n        TokenRequestKey: "X-Token", // use this key to read token in request param\n    }))\n    group.ALL("/csrf", func(r *ghttp.Request) {\n        r.Response.Writeln(r.Method + ": " + r.RequestURI)\n    })\n})\n'})}),"\n",(0,i.jsx)(n.h3,{id:"front-end-integration",children:"Front-end Integration"}),"\n",(0,i.jsxs)(n.p,{children:["After configuration, the front-end reads the value of ",(0,i.jsx)(n.code,{children:"_csrf"})," (i.e., ",(0,i.jsx)(n.code,{children:"token"}),") from the ",(0,i.jsx)(n.code,{children:"Cookie"})," before making a POST request, and includes the ",(0,i.jsx)(n.code,{children:"token"})," in the request as the ",(0,i.jsx)(n.code,{children:"X-Token"})," (set by ",(0,i.jsx)(n.code,{children:"TokenRequestKey"}),") parameter name (either in ",(0,i.jsx)(n.code,{children:"Header"})," or ",(0,i.jsx)(n.code,{children:"Form"}),") to pass the ",(0,i.jsx)(n.code,{children:"token"})," verification."]}),"\n",(0,i.jsx)(n.h2,{id:"code-example",children:"Code Example"}),"\n",(0,i.jsx)(n.h3,{id:"using-default-configuration",children:"Using Default Configuration"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "net/http"\n    "time"\n\n    "github.com/gogf/csrf"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\n// default cfg\nfunc main() {\n    s := g.Server()\n    s.Group("/api.v2", func(group *ghttp.RouterGroup) {\n        group.Middleware(csrf.New())\n        group.ALL("/csrf", func(r *ghttp.Request) {\n            r.Response.Writeln(r.Method + ": " + r.RequestURI)\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"using-custom-configuration",children:"Using Custom Configuration"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "net/http"\n    "time"\n\n    "github.com/gogf/csrf"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\n// set cfg\nfunc main() {\n    s := g.Server()\n    s.Group("/api.v2", func(group *ghttp.RouterGroup) {\n        group.Middleware(csrf.NewWithCfg(csrf.Config{\n            Cookie: &http.Cookie{\n                Name: "_csrf", // token name in cookie\n                Secure:   true,\n                SameSite: http.SameSiteNoneMode, // custom samesite\n            },\n            ExpireTime:      time.Hour * 24,\n            TokenLength:     32,\n            TokenRequestKey: "X-Token", // use this key to read token in request param\n        }))\n        group.ALL("/csrf", func(r *ghttp.Request) {\n            r.Response.Writeln(r.Method + ": " + r.RequestURI)\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"experience-the-effect-through-request",children:"Experience the Effect Through Request"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"http://localhost:8199/api.v2/csrf",children:"http://localhost:8199/api.v2/csrf"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var o=t(667294);let i={},r=o.createContext(i);function s(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);
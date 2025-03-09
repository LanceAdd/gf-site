"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["34444"],{499514:function(e,n,s){s.r(n),s.d(n,{metadata:()=>o,contentTitle:()=>d,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>i});var o=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/CORS\u8DE8\u57DF\u5904\u7406","title":"CORS","description":"Handling CORS cross-domain requests using the GoFrame framework, setting cross-domain rules with routing management and middleware, allowing WebSocket cross-domain access. Provides CORS object and its configuration parameters, including default and restricted Origin settings. Additionally, it demonstrates basic usage methods, authorizing cross-domain Origin, and custom detection methods to achieve more flexible cross-domain request management.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/CORS\u8DE8\u57DF\u5904\u7406.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027","slug":"/docs/web/senior-cors","permalink":"/en/docs/web/senior-cors","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/CORS\u8DE8\u57DF\u5904\u7406.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732541616000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/web/senior-cors","title":"CORS","sidebar_position":4,"hide_title":true,"keywords":["CORS","Cross-Domain Requests","GoFrame","Middleware","AJAX","Origin","CORSOptions","Cross-Domain Access","GoFrame Framework","WebSocket"],"description":"Handling CORS cross-domain requests using the GoFrame framework, setting cross-domain rules with routing management and middleware, allowing WebSocket cross-domain access. Provides CORS object and its configuration parameters, including default and restricted Origin settings. Additionally, it demonstrates basic usage methods, authorizing cross-domain Origin, and custom detection methods to achieve more flexible cross-domain request management."},"sidebar":"mainSidebar","previous":{"title":"Graceful Restart","permalink":"/en/docs/web/senior-hot-reload"},"next":{"title":"CSRF","permalink":"/en/docs/web/senior-csrf"}}'),r=s("785893"),t=s("250065");let i={slug:"/docs/web/senior-cors",title:"CORS",sidebar_position:4,hide_title:!0,keywords:["CORS","Cross-Domain Requests","GoFrame","Middleware","AJAX","Origin","CORSOptions","Cross-Domain Access","GoFrame Framework","WebSocket"],description:"Handling CORS cross-domain requests using the GoFrame framework, setting cross-domain rules with routing management and middleware, allowing WebSocket cross-domain access. Provides CORS object and its configuration parameters, including default and restricted Origin settings. Additionally, it demonstrates basic usage methods, authorizing cross-domain Origin, and custom detection methods to achieve more flexible cross-domain request management."},d=void 0,a={},c=[{value:"<code>CORS</code> Object",id:"cors-object",level:3},{value:"<code>CORS</code> Configuration",id:"cors-configuration",level:3},{value:"Default <code>CORSOptions</code>",id:"default-corsoptions",level:4},{value:"Restricting <code>Origin</code> Sources",id:"restricting-origin-sources",level:4},{value:"<code>OPTIONS</code> Request",id:"options-request",level:3},{value:"Example 1, Basic Usage",id:"example-1-basic-usage",level:3},{value:"Example 2, Authorizing Cross-Domain <code>Origin</code>",id:"example-2-authorizing-cross-domain-origin",level:3},{value:"Example 3, Custom Detection and Authorization",id:"example-3-custom-detection-and-authorization",level:3}];function l(e){let n={a:"a",code:"code",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Allowing cross-domain access to APIs often requires using it in conjunction with ",(0,r.jsx)(n.a,{href:"/en/docs/web/router-middleware-intro",children:"Middleware - Intro"})," to uniformly set which API under certain routing rules can be accessed cross-domain. This method is also used to allow cross-domain access for ",(0,r.jsx)(n.code,{children:"WebSocket"})," requests."]}),"\n",(0,r.jsxs)(n.p,{children:["Related methods: ",(0,r.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#Response",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#Response"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func (r *Response) CORS(options CORSOptions)\nfunc (r *Response) CORSAllowedOrigin(options CORSOptions) bool\nfunc (r *Response) CORSDefault()\nfunc (r *Response) DefaultCORSOptions() CORSOptions\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"cors-object",children:[(0,r.jsx)(n.code,{children:"CORS"})," Object"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"CORS"})," is the standard for HTTP cross-domain requests by the ",(0,r.jsx)(n.code,{children:"W3"})," internet standard organization. In the ",(0,r.jsx)(n.code,{children:"ghttp"})," module, we can manage the corresponding cross-domain request options through the ",(0,r.jsx)(n.code,{children:"CORSOptions"})," object. Defined as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"// See https://www.w3.org/TR/cors/ .\n// Server allows cross-domain request options\ntype CORSOptions struct {\n    AllowDomain      []string // Used for allowing requests from custom domains\n    AllowOrigin      string   // Access-Control-Allow-Origin\n    AllowCredentials string   // Access-Control-Allow-Credentials\n    ExposeHeaders    string   // Access-Control-Expose-Headers\n    MaxAge           int      // Access-Control-Max-Age\n    AllowMethods     string   // Access-Control-Allow-Methods\n    AllowHeaders     string   // Access-Control-Allow-Headers\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For specific parameter introductions, please refer to the W3 organization ",(0,r.jsx)(n.a,{href:"https://www.w3.org/TR/cors/",children:"official manual"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"cors-configuration",children:[(0,r.jsx)(n.code,{children:"CORS"})," Configuration"]}),"\n",(0,r.jsxs)(n.h4,{id:"default-corsoptions",children:["Default ",(0,r.jsx)(n.code,{children:"CORSOptions"})]}),"\n",(0,r.jsxs)(n.p,{children:["For ease of cross-domain settings, the ",(0,r.jsx)(n.code,{children:"ghttp"})," module also provides default cross-domain request options, available through the ",(0,r.jsx)(n.code,{children:"DefaultCORSOptions"})," method. In most cases, we can directly use ",(0,r.jsx)(n.code,{children:"CORSDefault()"})," to allow cross-domain access for APIs that need to allow cross-domain requests (generally using middleware)."]}),"\n",(0,r.jsxs)(n.h4,{id:"restricting-origin-sources",children:["Restricting ",(0,r.jsx)(n.code,{children:"Origin"})," Sources"]}),"\n",(0,r.jsxs)(n.p,{children:["Most of the time, we need to limit the request source to our trusted domain list. We can use the ",(0,r.jsx)(n.code,{children:"AllowDomain"})," configuration, as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// Allow cross-domain request middleware\nfunc Middleware(r *ghttp.Request) {\n    corsOptions := r.Response.DefaultCORSOptions()\n    corsOptions.AllowDomain = []string{"goframe.org", "johng.cn"}\n    r.Response.CORS(corsOptions)\n    r.Middleware.Next()\n}\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"options-request",children:[(0,r.jsx)(n.code,{children:"OPTIONS"})," Request"]}),"\n",(0,r.jsxs)(n.p,{children:["Some clients and certain browsers will send an ",(0,r.jsx)(n.code,{children:"OPTIONS"})," preflight request before sending an ",(0,r.jsx)(n.code,{children:"AJAX"})," request to check whether subsequent requests are allowed. The ",(0,r.jsx)(n.code,{children:"GoFrame"})," framework's ",(0,r.jsx)(n.code,{children:"Server"})," fully complies with the ",(0,r.jsx)(n.code,{children:"W3C"})," specifications for the ",(0,r.jsx)(n.code,{children:"OPTIONS"})," request method. Therefore, as long as the server is set up with ",(0,r.jsx)(n.code,{children:"CORS"})," middleware, ",(0,r.jsx)(n.code,{children:"OPTIONS"})," requests will also be automatically supported."]}),"\n",(0,r.jsx)(n.h3,{id:"example-1-basic-usage",children:"Example 1, Basic Usage"}),"\n",(0,r.jsx)(n.p,{children:"Let's look at a simple API example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc Order(r *ghttp.Request) {\n    r.Response.Write("GET")\n}\n\nfunc main() {\n    s := g.Server()\n    s.Group("/api.v1", func(group *ghttp.RouterGroup) {\n        group.GET("/order", Order)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The API address is ",(0,r.jsx)(n.a,{href:"http://localhost/api.v1/order",children:"http://localhost/api.v1/order"}),", and of course, this API does not allow cross-domain access. We open a different domain, for example, the Baidu homepage (which uses ",(0,r.jsx)(n.code,{children:"jQuery"}),", convenient for debugging), then press ",(0,r.jsx)(n.code,{children:"F12"})," to open the developer panel and execute the following ",(0,r.jsx)(n.code,{children:"AJAX"})," request under ",(0,r.jsx)(n.code,{children:"console"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'$.get("http://localhost:8199/api.v1/order", function(result){\n    console.log(result)\n});\n'})}),"\n",(0,r.jsx)(n.p,{children:"The result is as follows:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(908266).Z+"",width:"1304",height:"465"})}),"\n",(0,r.jsx)(n.p,{children:"It returned an error indicating that cross-domain requests are not allowed. Next, we modify the server-side API test code as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc MiddlewareCORS(r *ghttp.Request) {\n    r.Response.CORSDefault()\n    r.Middleware.Next()\n}\n\nfunc Order(r *ghttp.Request) {\n    r.Response.Write("GET")\n}\n\nfunc main() {\n    s := g.Server()\n    s.Group("/api.v1", func(group *ghttp.RouterGroup) {\n        group.Middleware(MiddlewareCORS)\n        group.GET("/order", Order)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["We added the pre-middleware ",(0,r.jsx)(n.code,{children:"MiddlewareCORS"})," for the route ",(0,r.jsx)(n.code,{children:"/api.v1"}),", which will be called before all services are executed. By calling the ",(0,r.jsx)(n.code,{children:"CORSDefault"})," method, we use the default cross-domain settings to allow cross-domain requests. The bound event routing rule uses a fuzzy matching rule, indicating that all API addresses starting with ",(0,r.jsx)(n.code,{children:"/api.v1"})," allow cross-domain requests."]}),"\n",(0,r.jsxs)(n.p,{children:["Returning to the Baidu homepage, executing the ",(0,r.jsx)(n.code,{children:"AJAX"})," request again, this time it succeeds:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(643417).Z+"",width:"1298",height:"551"})}),"\n",(0,r.jsxs)(n.p,{children:["Of course, we can also set more cross-domain request settings using the ",(0,r.jsx)(n.code,{children:"CORSOptions"})," object and ",(0,r.jsx)(n.code,{children:"CORS"})," method."]}),"\n",(0,r.jsxs)(n.h3,{id:"example-2-authorizing-cross-domain-origin",children:["Example 2, Authorizing Cross-Domain ",(0,r.jsx)(n.code,{children:"Origin"})]}),"\n",(0,r.jsxs)(n.p,{children:["In most scenarios, we need to customize and authorize cross-domain ",(0,r.jsx)(n.code,{children:"Origin"}),". We can improve the example above as follows. In this example, we only allow cross-domain requests from ",(0,r.jsx)(n.code,{children:"goframe.org"})," and ",(0,r.jsx)(n.code,{children:"baidu.com"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc MiddlewareCORS(r *ghttp.Request) {\n    corsOptions := r.Response.DefaultCORSOptions()\n    corsOptions.AllowDomain = []string{"goframe.org", "baidu.com"}\n    r.Response.CORS(corsOptions)\n    r.Middleware.Next()\n}\n\nfunc Order(r *ghttp.Request) {\n    r.Response.Write("GET")\n}\n\nfunc main() {\n    s := g.Server()\n    s.Group("/api.v1", func(group *ghttp.RouterGroup) {\n        group.Middleware(MiddlewareCORS)\n        group.GET("/order", Order)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"example-3-custom-detection-and-authorization",children:"Example 3, Custom Detection and Authorization"}),"\n",(0,r.jsxs)(n.p,{children:["I wonder if you noticed a detail in the above examples: even if the current API does not allow cross-domain access, once the API is called, the complete logic of the API will still be executed, and a full request process will have occurred on the server. To address this issue, we can customize the authorization ",(0,r.jsx)(n.code,{children:"Origin"})," and use the ",(0,r.jsx)(n.code,{children:"CORSAllowedOrigin"})," method in middleware to determine whether the current request ",(0,r.jsx)(n.code,{children:"Origin"})," is allowed by the server to execute. Only then will the subsequent process be executed; otherwise, execution will be terminated."]}),"\n",(0,r.jsxs)(n.p,{children:["In the following example, only cross-domain requests from the ",(0,r.jsx)(n.code,{children:"goframe.org"})," domain are allowed, while requests from other domains will fail and return ",(0,r.jsx)(n.code,{children:"403"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc MiddlewareCORS(r *ghttp.Request) {\n    corsOptions := r.Response.DefaultCORSOptions()\n    corsOptions.AllowDomain = []string{"goframe.org"}\n    if !r.Response.CORSAllowedOrigin(corsOptions) {\n        r.Response.WriteStatus(http.StatusForbidden)\n        return\n    }\n    r.Response.CORS(corsOptions)\n    r.Middleware.Next()\n}\n\nfunc Order(r *ghttp.Request) {\n    r.Response.Write("GET")\n}\n\nfunc main() {\n    s := g.Server()\n    s.Group("/api.v1", func(group *ghttp.RouterGroup) {\n        group.Middleware(MiddlewareCORS)\n        group.GET("/order", Order)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},908266:function(e,n,s){s.d(n,{Z:function(){return o}});let o=s.p+"assets/images/06b316cb2a487071cf4be67a3481dac3-036a662a4b30a58e1a61a77ee68f4c98.png"},643417:function(e,n,s){s.d(n,{Z:function(){return o}});let o=s.p+"assets/images/46045bd28217115525ef3db08eec309b-c5c9e0b2dc0dde744148a4f2024d1bbc.png"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var o=s(667294);let r={},t=o.createContext(r);function i(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);
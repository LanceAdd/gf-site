"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["41914"],{249453:function(e,i,t){t.r(i),t.d(i,{metadata:()=>n,contentTitle:()=>a,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>l});var n=JSON.parse('{"id":"examples/httpserver/rate-limit/rate-limit","title":"Rate Limit","description":"Rate limiting in a HTTP server using GoFrame framework","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/examples/httpserver/rate-limit/rate-limit.md","sourceDirName":"examples/httpserver/rate-limit","slug":"/examples/httpserver/rate-limit","permalink":"/en/examples/httpserver/rate-limit","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/examples/httpserver/rate-limit/rate-limit.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1740107000000,"frontMatter":{"title":"Rate Limit","slug":"/examples/httpserver/rate-limit","keywords":["http","server","rate limit","middleware","goframe"],"description":"Rate limiting in a HTTP server using GoFrame framework","hide_title":true},"sidebar":"examplesSidebar","previous":{"title":"Proxy","permalink":"/en/examples/httpserver/proxy"},"next":{"title":"Response with JSON Array","permalink":"/en/examples/httpserver/response-json-array"}}'),r=t("785893"),s=t("250065");let l={title:"Rate Limit",slug:"/examples/httpserver/rate-limit",keywords:["http","server","rate limit","middleware","goframe"],description:"Rate limiting in a HTTP server using GoFrame framework",hide_title:!0},a="HTTP Server Rate Limit",o={},d=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Structure",id:"structure",level:2},{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Notes",id:"notes",level:2}];function c(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"http-server-rate-limit",children:"HTTP Server Rate Limit"})}),"\n",(0,r.jsxs)(i.p,{children:["Github Source: ",(0,r.jsx)(i.a,{href:"https://github.com/gogf/examples/tree/main/httpserver/rate-limit",children:"https://github.com/gogf/examples/tree/main/httpserver/rate-limit"})]}),"\n",(0,r.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["This example demonstrates how to implement rate limiting in a HTTP server using ",(0,r.jsx)(i.code,{children:"GoFrame"}),". It showcases how to protect your API endpoints from being overwhelmed by too many requests using the token bucket algorithm implemented by ",(0,r.jsx)(i.code,{children:"golang.org/x/time/rate"})," package."]}),"\n",(0,r.jsx)(i.p,{children:"The example implements:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["A simple HTTP endpoint ",(0,r.jsx)(i.code,{children:"/hello"})," that returns a greeting message"]}),"\n",(0,r.jsx)(i.li,{children:"A rate limiting middleware that restricts requests to 10 per second"}),"\n",(0,r.jsx)(i.li,{children:"Proper error handling when rate limit is exceeded (HTTP 429 Too Many Requests)"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"https://golang.org/dl/",children:"Go"})," ",(0,r.jsx)(i.code,{children:"1.22"})," or higher"]}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://goframe.org",children:"GoFrame"})}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"structure",children:"Structure"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"go.mod"}),": The Go module file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"main.go"}),": The main application entry point."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Token bucket based rate limiting"}),"\n",(0,r.jsx)(i.li,{children:"Configurable request rate and burst size"}),"\n",(0,r.jsx)(i.li,{children:"Global middleware implementation"}),"\n",(0,r.jsx)(i.li,{children:"Clean API endpoint implementation using GoFrame's binding feature"}),"\n",(0,r.jsx)(i.li,{children:"Request validation and documentation using metadata"}),"\n",(0,r.jsx)(i.li,{children:"Proper error handling and status codes"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Run the example:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"go run main.go\n"})}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["The server will start at ",(0,r.jsx)(i.a,{href:"http://127.0.0.1:8080",children:"http://127.0.0.1:8080"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Test the rate limiting:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:'# Normal request\ncurl "http://127.0.0.1:8080/hello?name=world"\n\n# To test rate limiting, send multiple requests quickly:\nfor i in {1..20}; do curl "http://127.0.0.1:8080/hello?name=world"; done\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"implementation-details",children:"Implementation Details"}),"\n",(0,r.jsx)(i.p,{children:"The rate limiting is implemented using:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"golang.org/x/time/rate.Limiter"})," for token bucket algorithm"]}),"\n",(0,r.jsx)(i.li,{children:"GoFrame's middleware system for request interception"}),"\n",(0,r.jsx)(i.li,{children:"Clean request/response structs with validation and documentation"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Key components:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Rate limit is set to 10 requests per second"}),"\n",(0,r.jsx)(i.li,{children:"Burst size is set to 1 (no bursting allowed)"}),"\n",(0,r.jsx)(i.li,{children:"Requests exceeding the limit receive HTTP 429 status code"}),"\n",(0,r.jsx)(i.li,{children:"Request validation ensures required parameters are provided"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"The rate limit is global (applies to all clients)"}),"\n",(0,r.jsx)(i.li,{children:"No persistence of rate limit state (resets on server restart)"}),"\n",(0,r.jsx)(i.li,{children:"Rate limit can be configured by modifying the limiter parameters"}),"\n",(0,r.jsx)(i.li,{children:"Consider using distributed rate limiting for production environments"}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,i,t){t.d(i,{Z:function(){return a},a:function(){return l}});var n=t(667294);let r={},s=n.createContext(r);function l(e){let i=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);
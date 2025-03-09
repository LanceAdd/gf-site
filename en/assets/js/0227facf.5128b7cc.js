"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["29241"],{606267:function(e,t,s){s.r(t),s.d(t,{metadata:()=>r,contentTitle:()=>d,default:()=>a,assets:()=>o,toc:()=>l,frontMatter:()=>c});var r=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u76D1\u63A7\u6307\u6807","title":"HTTPClient - Metrics","description":"The monitoring metrics feature of the HTTP client is disabled by default to avoid performance impact. It provides a variety of metrics for users to reference, such as the time cost of request execution, connection creation time, and the total size of request bytes, among others. These metrics are enabled only when the metric feature is globally enabled, helping users perform better performance analysis.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u76D1\u63A7\u6307\u6807.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient","slug":"/docs/web/http-client-metrics","permalink":"/en/docs/web/http-client-metrics","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u76D1\u63A7\u6307\u6807.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732451468000,"sidebarPosition":10,"frontMatter":{"slug":"/docs/web/http-client-metrics","title":"HTTPClient - Metrics","sidebar_position":10,"hide_title":true,"keywords":["HTTP Client","Monitoring Metrics","Performance Optimization","Request Time","GoFrame","Connection Time","Total Requests","Request Size","GoFrame Framework","Response Size"],"description":"The monitoring metrics feature of the HTTP client is disabled by default to avoid performance impact. It provides a variety of metrics for users to reference, such as the time cost of request execution, connection creation time, and the total size of request bytes, among others. These metrics are enabled only when the metric feature is globally enabled, helping users perform better performance analysis."},"sidebar":"mainSidebar","previous":{"title":"HTTPClient - FAQ","permalink":"/en/docs/web/http-client-faq"},"next":{"title":"Pagination","permalink":"/en/docs/web/paging"}}'),i=s("785893"),n=s("250065");let c={slug:"/docs/web/http-client-metrics",title:"HTTPClient - Metrics",sidebar_position:10,hide_title:!0,keywords:["HTTP Client","Monitoring Metrics","Performance Optimization","Request Time","GoFrame","Connection Time","Total Requests","Request Size","GoFrame Framework","Response Size"],description:"The monitoring metrics feature of the HTTP client is disabled by default to avoid performance impact. It provides a variety of metrics for users to reference, such as the time cost of request execution, connection creation time, and the total size of request bytes, among others. These metrics are enabled only when the metric feature is globally enabled, helping users perform better performance analysis."},d=void 0,o={},l=[{value:"Metrics List",id:"metrics-list",level:2},{value:"Attributes List",id:"attributes-list",level:2}];function h(e){let t={code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"HTTP"})," client supports monitoring capabilities, which are off by default to avoid performance impact. The monitoring and metrics calculation features are enabled by default only when the global ",(0,i.jsx)(t.code,{children:"metric"})," feature is activated."]}),"\n",(0,i.jsx)(t.h2,{id:"metrics-list",children:"Metrics List"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Metric Name"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Metric Type"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Metric Unit"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Metric Description"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"http.client.request.duration"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Histogram"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"ms"})}),(0,i.jsx)(t.td,{children:"Time cost of client request execution."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"http.client.request.duration_total"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Counter"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"ms"})}),(0,i.jsx)(t.td,{children:"Total time cost used by each request."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"http.client.connection.duration"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Histogram"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"ms"})}),(0,i.jsx)(t.td,{children:"Time cost used for creating a connection."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"http.client.request.total"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Counter"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Total number of requests completed."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"http.client.request.active"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Gauge"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Number of requests currently being processed."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"http.client.request.body_size"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Counter"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"bytes"})}),(0,i.jsx)(t.td,{children:"Total size of request bytes."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"http.client.response.body_size"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Counter"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"bytes"})}),(0,i.jsx)(t.td,{children:"Total size of returned bytes."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"attributes-list",children:"Attributes List"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Label Name"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Label Description"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Label Example"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"server.address"})}),(0,i.jsx)(t.td,{children:"Target service address of the request. It could be a domain name or IP address."}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"goframe.org"}),(0,i.jsx)("br",{}),(0,i.jsx)(t.code,{children:"10.0.1.132"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"server.port"})}),(0,i.jsx)(t.td,{children:"Target service port of the request."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"8000"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"http.request.method"})}),(0,i.jsx)(t.td,{children:"Request method name."}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"GET"}),";\xa0",(0,i.jsx)(t.code,{children:"POST"}),";\xa0",(0,i.jsx)(t.code,{children:"DELETE"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"http.response.status_code"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"HTTP"})," status code of the response."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"200"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"url.schema"})}),(0,i.jsx)(t.td,{children:"Protocol used for the request."}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"http"}),(0,i.jsx)("br",{}),(0,i.jsx)(t.code,{children:"https"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"network.protocol.version"})}),(0,i.jsx)(t.td,{children:"Version of the request protocol."}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"1.0"}),(0,i.jsx)("br",{}),(0,i.jsx)(t.code,{children:"1.1"})]})]})]})]})]})}function a(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return d},a:function(){return c}});var r=s(667294);let i={},n=r.createContext(i);function c(e){let t=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);
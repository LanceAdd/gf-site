"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["38563"],{883628:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>p,assets:()=>a,toc:()=>d,frontMatter:()=>c});var r=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE","title":"\u6570\u636E\u8FD4\u56DE","description":"GoFrame\u6846\u67B6\u4E2DHTTP Server\u7684\u6570\u636E\u8FD4\u56DE\u5904\u7406\u3002\u901A\u8FC7\u4F7F\u7528ghttp.Response\u5BF9\u8C61\u53CA\u5176\u63D0\u4F9B\u7684\u591A\u79CDWrite\u65B9\u6CD5\uFF0C\u7528\u6237\u53EF\u4EE5\u5B9E\u73B0\u9AD8\u6548\u7684\u6570\u636E\u8F93\u51FA\uFF0C\u5305\u62ECJson\u3001Xml\u683C\u5F0F\u7684\u8FD4\u56DE\u4EE5\u53CA\u6A21\u677F\u8F93\u51FA\u3002\u6B64\u5916\uFF0C\u6587\u4E2D\u8FD8\u6D89\u53CA\u6570\u636E\u7F13\u51B2\u533A\u7684\u4F7F\u7528\u548CHTTP\u5934\u90E8\u4FE1\u606F\u7684\u8BBE\u7F6E\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u597D\u5730\u5904\u7406HTTP\u54CD\u5E94\u3002","source":"@site/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE","slug":"/docs/web/response","permalink":"/en/2.7.x/docs/web/response","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/web/response","title":"\u6570\u636E\u8FD4\u56DE","sidebar_position":4,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","HTTP Server","ghttp.Response","\u6570\u636E\u8FD4\u56DE","Buffer\u673A\u5236","Write\u65B9\u6CD5","WriteJson","WriteTpl","Header\u64CD\u4F5C"],"description":"GoFrame\u6846\u67B6\u4E2DHTTP Server\u7684\u6570\u636E\u8FD4\u56DE\u5904\u7406\u3002\u901A\u8FC7\u4F7F\u7528ghttp.Response\u5BF9\u8C61\u53CA\u5176\u63D0\u4F9B\u7684\u591A\u79CDWrite\u65B9\u6CD5\uFF0C\u7528\u6237\u53EF\u4EE5\u5B9E\u73B0\u9AD8\u6548\u7684\u6570\u636E\u8F93\u51FA\uFF0C\u5305\u62ECJson\u3001Xml\u683C\u5F0F\u7684\u8FD4\u56DE\u4EE5\u53CA\u6A21\u677F\u8F93\u51FA\u3002\u6B64\u5916\uFF0C\u6587\u4E2D\u8FD8\u6D89\u53CA\u6570\u636E\u7F13\u51B2\u533A\u7684\u4F7F\u7528\u548CHTTP\u5934\u90E8\u4FE1\u606F\u7684\u8BBE\u7F6E\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u597D\u5730\u5904\u7406HTTP\u54CD\u5E94\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u8BF7\u6C42\u8F93\u5165-\u6587\u4EF6\u4E0A\u4F20","permalink":"/en/2.7.x/docs/web/request-file-uploading"},"next":{"title":"\u6570\u636E\u8FD4\u56DE-\u7F13\u51B2\u63A7\u5236","permalink":"/en/2.7.x/docs/web/response-buffering"}}'),s=t("785893"),i=t("250065"),o=t("203105");let c={slug:"/docs/web/response",title:"\u6570\u636E\u8FD4\u56DE",sidebar_position:4,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","HTTP Server","ghttp.Response","\u6570\u636E\u8FD4\u56DE","Buffer\u673A\u5236","Write\u65B9\u6CD5","WriteJson","WriteTpl","Header\u64CD\u4F5C"],description:"GoFrame\u6846\u67B6\u4E2DHTTP Server\u7684\u6570\u636E\u8FD4\u56DE\u5904\u7406\u3002\u901A\u8FC7\u4F7F\u7528ghttp.Response\u5BF9\u8C61\u53CA\u5176\u63D0\u4F9B\u7684\u591A\u79CDWrite\u65B9\u6CD5\uFF0C\u7528\u6237\u53EF\u4EE5\u5B9E\u73B0\u9AD8\u6548\u7684\u6570\u636E\u8F93\u51FA\uFF0C\u5305\u62ECJson\u3001Xml\u683C\u5F0F\u7684\u8FD4\u56DE\u4EE5\u53CA\u6A21\u677F\u8F93\u51FA\u3002\u6B64\u5916\uFF0C\u6587\u4E2D\u8FD8\u6D89\u53CA\u6570\u636E\u7F13\u51B2\u533A\u7684\u4F7F\u7528\u548CHTTP\u5934\u90E8\u4FE1\u606F\u7684\u8BBE\u7F6E\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u597D\u5730\u5904\u7406HTTP\u54CD\u5E94\u3002"},l=void 0,a={},d=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u76F8\u5173\u6587\u6863",id:"\u76F8\u5173\u6587\u6863",level:2}];function u(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"HTTP Server"})," \u7684\u6570\u636E\u8FD4\u56DE\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"ghttp.Response"})," \u5BF9\u8C61\u5B9E\u73B0\uFF0C ",(0,s.jsx)(n.code,{children:"ghttp.Response"})," \u5BF9\u8C61\u5B9E\u73B0\u4E86\u6807\u51C6\u5E93\u7684 ",(0,s.jsx)(n.code,{children:"http.ResponseWriter"})," \u63A5\u53E3\u3002\u6570\u636E\u8F93\u51FA\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"Write*"})," \u76F8\u5173\u65B9\u6CD5\u5B9E\u73B0\uFF0C\u5E76\u4E14\u6570\u636E\u8F93\u51FA\u91C7\u7528\u4E86 ",(0,s.jsx)(n.code,{children:"Buffer"})," \u673A\u5236\uFF0C\u56E0\u6B64\u6570\u636E\u7684\u5904\u7406\u6548\u7387\u6BD4\u8F83\u9AD8\u3002\u4EFB\u4F55\u65F6\u5019\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"OutputBuffer"})," \u65B9\u6CD5\u8F93\u51FA\u7F13\u51B2\u533A\u6570\u636E\u5230\u5BA2\u6237\u7AEF\uFF0C\u5E76\u6E05\u7A7A\u7F13\u51B2\u533A\u6570\u636E\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5E38\u7528\u65B9\u6CD5\uFF1A\u66F4\u8BE6\u7EC6\u7684\u63A5\u53E3\u5217\u8868\u8BF7\u53C2\u8003 ",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#Response",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#Response"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func (r *Response) Write(content ...interface{})\nfunc (r *Response) WriteExit(content ...interface{})\nfunc (r *Response) WriteJson(content interface{}) error\nfunc (r *Response) WriteJsonExit(content interface{}) error\nfunc (r *Response) WriteJsonP(content interface{}) error\nfunc (r *Response) WriteJsonPExit(content interface{}) error\nfunc (r *Response) WriteOver(content ...interface{})\nfunc (r *Response) WriteOverExit(content ...interface{})\nfunc (r *Response) WriteStatus(status int, content ...interface{})\nfunc (r *Response) WriteStatusExit(status int, content ...interface{})\nfunc (r *Response) WriteTpl(tpl string, params ...gview.Params) error\nfunc (r *Response) WriteTplContent(content string, params ...gview.Params) error\nfunc (r *Response) WriteTplDefault(params ...gview.Params) error\nfunc (r *Response) WriteXml(content interface{}, rootTag ...string) error\nfunc (r *Response) WriteXmlExit(content interface{}, rootTag ...string) error\nfunc (r *Response) Writef(format string, params ...interface{})\nfunc (r *Response) WritefExit(format string, params ...interface{})\nfunc (r *Response) Writefln(format string, params ...interface{})\nfunc (r *Response) WriteflnExit(format string, params ...interface{})\nfunc (r *Response) Writeln(content ...interface{})\nfunc (r *Response) WritelnExit(content ...interface{})\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7B80\u8981\u8BF4\u660E:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Write*"})," \u65B9\u6CD5\u7528\u4E8E\u5F80\u8FD4\u56DE\u7684\u6570\u636E\u7F13\u51B2\u533A\u8FFD\u52A0\u5199\u5165\u6570\u636E\uFF0C\u53C2\u6570\u53EF\u4E3A\u4EFB\u610F\u7684\u6570\u636E\u683C\u5F0F\uFF0C\u5185\u90E8\u901A\u8FC7\u65AD\u8A00\u5BF9\u53C2\u6570\u505A\u81EA\u52A8\u5206\u6790\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Write*Exit"})," \u65B9\u6CD5\u7528\u4E8E\u5F80\u8FD4\u56DE\u7684\u6570\u636E\u7F13\u51B2\u533A\u8FFD\u52A0\u5199\u5165\u6570\u636E\u540E\u9000\u51FA\u5F53\u524D\u6267\u884C\u7684 ",(0,s.jsx)(n.code,{children:"HTTP Handler"})," \u65B9\u6CD5\uFF0C\u53EF\u7528\u4E8E\u66FF\u4EE3 ",(0,s.jsx)(n.code,{children:"return"})," \u8FD4\u56DE\u65B9\u6CD5\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WriteOver*"})," \u65B9\u6CD5\u7528\u4E8E\u8986\u76D6\u7F13\u51B2\u533A\u5199\u5165\uFF0C\u539F\u6709\u7F13\u51B2\u533A\u7684\u6570\u636E\u5C06\u4F1A\u88AB\u8986\u76D6\u4E3A\u65B0\u5199\u5165\u7684\u6570\u636E\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WriteStatus*"})," \u65B9\u6CD5\u7528\u4E8E\u8BBE\u7F6E\u5F53\u524D\u8BF7\u6C42\u6267\u884C\u8FD4\u56DE\u7684\u72B6\u6001\u7801\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WriteJson*"}),"/ ",(0,s.jsx)(n.code,{children:"WriteXml"})," \u65B9\u6CD5\u7528\u4E8E\u7279\u5B9A\u6570\u636E\u683C\u5F0F\u7684\u8F93\u51FA\uFF0C\u8FD9\u662F\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u7684\u7B80\u4FBF\u65B9\u6CD5\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WriteTpl*"})," \u65B9\u6CD5\u7528\u4E8E\u6A21\u677F\u8F93\u51FA\uFF0C\u89E3\u6790\u5E76\u8F93\u51FA\u6A21\u677F\u6587\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u89E3\u6790\u5E76\u8F93\u51FA\u7ED9\u5B9A\u7684\u6A21\u677F\u5185\u5BB9\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u5176\u4ED6\u65B9\u6CD5\u8BE6\u89C1\u63A5\u53E3\u6587\u6863\uFF1B"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6B64\u5916\uFF0C\u9700\u8981\u63D0\u4E00\u4E0B\uFF0C ",(0,s.jsx)(n.code,{children:"Header"})," \u7684\u64CD\u4F5C\u53EF\u4EE5\u901A\u8FC7\u6807\u51C6\u5E93\u7684\u65B9\u6CD5\u6765\u5B9E\u73B0\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Response.Header().Set("Content-Type", "text/plain; charset=utf-8")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u76F8\u5173\u6587\u6863",children:"\u76F8\u5173\u6587\u6863"}),"\n","\n",(0,s.jsx)(o.Z,{})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},203105:function(e,n,t){t.d(n,{Z:()=>j});var r=t("785893");t("667294");var s=t("467026"),i=t("96693"),o=t("531183"),c=t("633876"),l=t("266026"),a=t("434751"),d=t("58608");let u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:n,children:t}=e;return(0,r.jsx)(o.Z,{href:n,className:(0,s.Z)("card padding--lg",u.cardContainer),children:t})}function f(e){let{href:n,icon:t,title:i,description:o}=e;return(0,r.jsxs)(p,{href:n,children:[(0,r.jsxs)(d.Z,{as:"h2",className:(0,s.Z)("text--truncate",u.cardTitle),title:i,children:[t," ",i]}),o&&(0,r.jsx)("p",{className:(0,s.Z)("text--truncate",u.cardDescription),title:o,children:o})]})}function h(e){let{item:n}=e,t=(0,i.LM)(n),s=function(){let{selectMessage:e}=(0,c.c)();return n=>e(n,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,r.jsx)(f,{href:t,icon:"\uD83D\uDDC3\uFE0F",title:n.label,description:n.description??s(n.items.length)}):null}function m(e){let{item:n}=e,t=(0,l.Z)(n.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",s=(0,i.xz)(n.docId??void 0);return(0,r.jsx)(f,{href:n.href,icon:t,title:n.label,description:n.description??s?.description})}function x(e){let{item:n}=e;switch(n.type){case"link":return(0,r.jsx)(m,{item:n});case"category":return(0,r.jsx)(h,{item:n});default:throw Error(`unknown item type ${JSON.stringify(n)}`)}}function g(e){let{className:n}=e,t=(0,i.jA)();return(0,r.jsx)(j,{items:t.items,className:n})}function j(e){let{items:n,className:t}=e;if(!n)return(0,r.jsx)(g,{...e});let o=(0,i.MN)(n);return(0,r.jsx)("section",{className:(0,s.Z)("row",t),children:o.map((e,n)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(x,{item:e})},n))})}},633876:function(e,n,t){t.d(n,{c:function(){return l}});var r=t(667294),s=t(49931);let i=["zero","one","two","few","many","other"];function o(e){return i.filter(n=>e.includes(n))}let c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){let e=function(){let{i18n:{currentLocale:e}}=(0,s.Z)();return(0,r.useMemo)(()=>{try{return function(e){let n=new Intl.PluralRules(e);return{locale:e,pluralForms:o(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${n.message}
`),c}},[e])}();return{selectMessage:(n,t)=>(function(e,n,t){let r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let s=t.select(n);return r[Math.min(t.pluralForms.indexOf(s),r.length-1)]})(t,n,e)}}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var r=t(667294);let s={},i=r.createContext(s);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["30110"],{530105:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>l,default:()=>m,assets:()=>a,toc:()=>u,frontMatter:()=>c});var r=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u7F16\u7801\u89E3\u7801","title":"\u7F16\u7801\u89E3\u7801","description":"\u7F16\u7801\u548C\u89E3\u7801\u7684\u57FA\u672C\u6982\u5FF5\u53CA\u5E94\u7528\uFF0C\u63A2\u8BA8\u5982\u4F55\u5229\u7528GoFrame\u6846\u67B6\u5B9E\u73B0\u9AD8\u6548\u7684\u6570\u636E\u8F6C\u6362\u4E0E\u4FE1\u606F\u5904\u7406\u3002\u6DB5\u76D6\u4E86\u5404\u79CD\u7F16\u7801\u6807\u51C6\u53CA\u5176\u5728\u7F16\u7A0B\u6280\u672F\u4E2D\u7684\u5B9E\u9645\u5E94\u7528\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u638C\u63E1\u5B57\u7B26\u7F16\u7801\u548C\u6570\u636E\u538B\u7F29\u7684\u6280\u5DE7\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u7F16\u7801\u89E3\u7801.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801","slug":"/docs/components/encoding","permalink":"/2.7.x/docs/components/encoding","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u7F16\u7801\u89E3\u7801.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/components/encoding","title":"\u7F16\u7801\u89E3\u7801","sidebar_position":3,"hide_title":true,"keywords":["\u7F16\u7801","\u89E3\u7801","\u6570\u636E\u8F6C\u6362","\u4FE1\u606F\u5904\u7406","\u7F16\u7A0B\u6280\u672F","\u5B57\u7B26\u7F16\u7801","GoFrame","GoFrame\u6846\u67B6","\u7F16\u7801\u6807\u51C6","\u6570\u636E\u538B\u7F29"],"description":"\u7F16\u7801\u548C\u89E3\u7801\u7684\u57FA\u672C\u6982\u5FF5\u53CA\u5E94\u7528\uFF0C\u63A2\u8BA8\u5982\u4F55\u5229\u7528GoFrame\u6846\u67B6\u5B9E\u73B0\u9AD8\u6548\u7684\u6570\u636E\u8F6C\u6362\u4E0E\u4FE1\u606F\u5904\u7406\u3002\u6DB5\u76D6\u4E86\u5404\u79CD\u7F16\u7801\u6807\u51C6\u53CA\u5176\u5728\u7F16\u7A0B\u6280\u672F\u4E2D\u7684\u5B9E\u9645\u5E94\u7528\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u638C\u63E1\u5B57\u7B26\u7F16\u7801\u548C\u6570\u636E\u538B\u7F29\u7684\u6280\u5DE7\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6B63\u5219\u8868\u8FBE\u5F0F-\u65B9\u6CD5\u4ECB\u7ECD","permalink":"/2.7.x/docs/components/text-gregex-funcs"},"next":{"title":"\u901A\u7528\u7F16\u89E3\u7801-gjson","permalink":"/2.7.x/docs/components/encoding-gjson"}}'),o=n("785893"),i=n("250065"),s=n("203105");let c={slug:"/docs/components/encoding",title:"\u7F16\u7801\u89E3\u7801",sidebar_position:3,hide_title:!0,keywords:["\u7F16\u7801","\u89E3\u7801","\u6570\u636E\u8F6C\u6362","\u4FE1\u606F\u5904\u7406","\u7F16\u7A0B\u6280\u672F","\u5B57\u7B26\u7F16\u7801","GoFrame","GoFrame\u6846\u67B6","\u7F16\u7801\u6807\u51C6","\u6570\u636E\u538B\u7F29"],description:"\u7F16\u7801\u548C\u89E3\u7801\u7684\u57FA\u672C\u6982\u5FF5\u53CA\u5E94\u7528\uFF0C\u63A2\u8BA8\u5982\u4F55\u5229\u7528GoFrame\u6846\u67B6\u5B9E\u73B0\u9AD8\u6548\u7684\u6570\u636E\u8F6C\u6362\u4E0E\u4FE1\u606F\u5904\u7406\u3002\u6DB5\u76D6\u4E86\u5404\u79CD\u7F16\u7801\u6807\u51C6\u53CA\u5176\u5728\u7F16\u7A0B\u6280\u672F\u4E2D\u7684\u5B9E\u9645\u5E94\u7528\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u638C\u63E1\u5B57\u7B26\u7F16\u7801\u548C\u6570\u636E\u538B\u7F29\u7684\u6280\u5DE7\u3002"},l=void 0,a={},u=[];function d(e){return(0,o.jsx)(s.Z,{})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},203105:function(e,t,n){n.d(t,{Z:()=>j});var r=n("785893");n("667294");var o=n("467026"),i=n("698404"),s=n("531183"),c=n("633876"),l=n("266026"),a=n("434751"),u=n("58608");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:n}=e;return(0,r.jsx)(s.Z,{href:t,className:(0,o.Z)("card padding--lg",d.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:i,description:s}=e;return(0,r.jsxs)(m,{href:t,children:[(0,r.jsxs)(u.Z,{as:"h2",className:(0,o.Z)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),s&&(0,r.jsx)("p",{className:(0,o.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e,n=(0,i.LM)(t),o=function(){let{selectMessage:e}=(0,c.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(f,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??o(t.items.length)}):null}function h(e){let{item:t}=e,n=(0,l.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",o=(0,i.xz)(t.docId??void 0);return(0,r.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(h,{item:t});case"category":return(0,r.jsx)(p,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,n=(0,i.jA)();return(0,r.jsx)(j,{items:n.items,className:t})}function j(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(x,{...e});let s=(0,i.MN)(t);return(0,r.jsx)("section",{className:(0,o.Z)("row",n),children:s.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(g,{item:e})},t))})}},633876:function(e,t,n){n.d(t,{c:function(){return l}});var r=n(667294),o=n(49931);let i=["zero","one","two","few","many","other"];function s(e){return i.filter(t=>e.includes(t))}let c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function l(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),c}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let o=n.select(t);return r[Math.min(n.pluralForms.indexOf(o),r.length-1)]})(n,t,e)}}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return s}});var r=n(667294);let o={},i=r.createContext(o);function s(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["17454"],{629494:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>l,default:()=>m,assets:()=>a,toc:()=>u,frontMatter:()=>c});var r=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u6570\u636E\u7ED3\u6784","title":"\u6570\u636E\u7ED3\u6784","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u5982\u4F55\u521B\u5EFA\u548C\u7BA1\u7406\u6570\u636E\u7ED3\u6784\u3002\u901A\u8FC7\u5BB9\u5668\u7EC4\u4EF6\uFF0C\u7528\u6237\u53EF\u4EE5\u9AD8\u6548\u5730\u7EC4\u7EC7\u548C\u4F18\u5316\u9879\u76EE\u7684\u4EE3\u7801\u7ED3\u6784\u3002\u540C\u65F6\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86\u8BE6\u5C3D\u7684\u5F00\u53D1\u6307\u5357\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u597D\u5730\u7406\u89E3\u548C\u4F7F\u7528GoFrame\u6846\u67B6\u7684\u5F3A\u5927\u529F\u80FD\u3002","source":"@site/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u6570\u636E\u7ED3\u6784.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784","slug":"/docs/components/container","permalink":"/docs/components/container","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u6570\u636E\u7ED3\u6784.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/components/container","title":"\u6570\u636E\u7ED3\u6784","sidebar_position":0,"hide_title":true,"keywords":["\u6570\u636E\u7ED3\u6784","GoFrame","GoFrame\u6846\u67B6","\u5BB9\u5668\u7EC4\u4EF6","\u7F51\u9875\u7EC4\u4EF6","\u5F00\u53D1\u6307\u5357","\u9879\u76EE\u7ED3\u6784","\u4EE3\u7801\u7ED3\u6784","\u7F16\u7A0B\u6846\u67B6","\u6280\u672F\u6587\u6863"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u5982\u4F55\u521B\u5EFA\u548C\u7BA1\u7406\u6570\u636E\u7ED3\u6784\u3002\u901A\u8FC7\u5BB9\u5668\u7EC4\u4EF6\uFF0C\u7528\u6237\u53EF\u4EE5\u9AD8\u6548\u5730\u7EC4\u7EC7\u548C\u4F18\u5316\u9879\u76EE\u7684\u4EE3\u7801\u7ED3\u6784\u3002\u540C\u65F6\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86\u8BE6\u5C3D\u7684\u5F00\u53D1\u6307\u5357\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u597D\u5730\u7406\u89E3\u548C\u4F7F\u7528GoFrame\u6846\u67B6\u7684\u5F3A\u5927\u529F\u80FD\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u7EC4\u4EF6\u5217\u8868","permalink":"/docs/components"},"next":{"title":"\u5B57\u5178\u7C7B\u578B-gmap","permalink":"/docs/components/container-gmap"}}'),o=n("785893"),i=n("250065"),s=n("203105");let c={slug:"/docs/components/container",title:"\u6570\u636E\u7ED3\u6784",sidebar_position:0,hide_title:!0,keywords:["\u6570\u636E\u7ED3\u6784","GoFrame","GoFrame\u6846\u67B6","\u5BB9\u5668\u7EC4\u4EF6","\u7F51\u9875\u7EC4\u4EF6","\u5F00\u53D1\u6307\u5357","\u9879\u76EE\u7ED3\u6784","\u4EE3\u7801\u7ED3\u6784","\u7F16\u7A0B\u6846\u67B6","\u6280\u672F\u6587\u6863"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u5982\u4F55\u521B\u5EFA\u548C\u7BA1\u7406\u6570\u636E\u7ED3\u6784\u3002\u901A\u8FC7\u5BB9\u5668\u7EC4\u4EF6\uFF0C\u7528\u6237\u53EF\u4EE5\u9AD8\u6548\u5730\u7EC4\u7EC7\u548C\u4F18\u5316\u9879\u76EE\u7684\u4EE3\u7801\u7ED3\u6784\u3002\u540C\u65F6\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86\u8BE6\u5C3D\u7684\u5F00\u53D1\u6307\u5357\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u597D\u5730\u7406\u89E3\u548C\u4F7F\u7528GoFrame\u6846\u67B6\u7684\u5F3A\u5927\u529F\u80FD\u3002"},l=void 0,a={},u=[];function d(e){return(0,o.jsx)(s.Z,{})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},203105:function(e,t,n){n.d(t,{Z:()=>F});var r=n("785893");n("667294");var o=n("467026"),i=n("698404"),s=n("531183"),c=n("633876"),l=n("266026"),a=n("434751"),u=n("58608");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:n}=e;return(0,r.jsx)(s.Z,{href:t,className:(0,o.Z)("card padding--lg",d.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:i,description:s}=e;return(0,r.jsxs)(m,{href:t,children:[(0,r.jsxs)(u.Z,{as:"h2",className:(0,o.Z)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),s&&(0,r.jsx)("p",{className:(0,o.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e,n=(0,i.LM)(t),o=function(){let{selectMessage:e}=(0,c.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(f,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??o(t.items.length)}):null}function h(e){let{item:t}=e,n=(0,l.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",o=(0,i.xz)(t.docId??void 0);return(0,r.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(h,{item:t});case"category":return(0,r.jsx)(p,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,n=(0,i.jA)();return(0,r.jsx)(F,{items:n.items,className:t})}function F(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(x,{...e});let s=(0,i.MN)(t);return(0,r.jsx)("section",{className:(0,o.Z)("row",n),children:s.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(g,{item:e})},t))})}},633876:function(e,t,n){n.d(t,{c:function(){return l}});var r=n(667294),o=n(49931);let i=["zero","one","two","few","many","other"];function s(e){return i.filter(t=>e.includes(t))}let c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function l(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),c}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let o=n.select(t);return r[Math.min(n.pluralForms.indexOf(o),r.length-1)]})(n,t,e)}}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return s}});var r=n(667294);let o={},i=r.createContext(o);function s(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
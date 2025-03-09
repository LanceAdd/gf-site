"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["55479"],{147182:function(e,t,n){n.r(t),n.d(t,{metadata:()=>o,contentTitle:()=>c,default:()=>d,assets:()=>a,toc:()=>u,frontMatter:()=>l});var o=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u6587\u672C\u5904\u7406/\u6587\u672C\u5904\u7406","title":"Text","description":"Using the GoFrame framework for text processing, helping developers efficiently build and manage text content in the GoFrame environment. Leverage the powerful features of GoFrame to simplify the programming process, enhance development efficiency, and allow developers to focus on implementing core business logic.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u7EC4\u4EF6\u5217\u8868/\u6587\u672C\u5904\u7406/\u6587\u672C\u5904\u7406.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u6587\u672C\u5904\u7406","slug":"/docs/components/text","permalink":"/en/docs/components/text","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u6587\u672C\u5904\u7406/\u6587\u672C\u5904\u7406.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732443619000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/components/text","title":"Text","sidebar_position":2,"hide_title":true,"keywords":["Text Processing","GoFrame","GoFrame Framework","Components","Programming","Development","Tools","Frontend Development","Backend Development","Web Development"],"description":"Using the GoFrame framework for text processing, helping developers efficiently build and manage text content in the GoFrame environment. Leverage the powerful features of GoFrame to simplify the programming process, enhance development efficiency, and allow developers to focus on implementing core business logic."},"sidebar":"mainSidebar","previous":{"title":"Object Information","permalink":"/en/docs/components/os-gstructs"},"next":{"title":"String Processing","permalink":"/en/docs/components/text-gstr"}}'),r=n("785893"),i=n("250065"),s=n("203105");let l={slug:"/docs/components/text",title:"Text",sidebar_position:2,hide_title:!0,keywords:["Text Processing","GoFrame","GoFrame Framework","Components","Programming","Development","Tools","Frontend Development","Backend Development","Web Development"],description:"Using the GoFrame framework for text processing, helping developers efficiently build and manage text content in the GoFrame environment. Leverage the powerful features of GoFrame to simplify the programming process, enhance development efficiency, and allow developers to focus on implementing core business logic."},c=void 0,a={},u=[];function m(e){return(0,r.jsx)(s.Z,{})}function d(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},203105:function(e,t,n){n.d(t,{Z:()=>v});var o=n("785893");n("667294");var r=n("467026"),i=n("96693"),s=n("531183"),l=n("633876"),c=n("266026"),a=n("434751"),u=n("58608");let m={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:n}=e;return(0,o.jsx)(s.Z,{href:t,className:(0,r.Z)("card padding--lg",m.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:i,description:s}=e;return(0,o.jsxs)(d,{href:t,children:[(0,o.jsxs)(u.Z,{as:"h2",className:(0,r.Z)("text--truncate",m.cardTitle),title:i,children:[n," ",i]}),s&&(0,o.jsx)("p",{className:(0,r.Z)("text--truncate",m.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e,n=(0,i.LM)(t),r=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,o.jsx)(p,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??r(t.items.length)}):null}function g(e){let{item:t}=e,n=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",r=(0,i.xz)(t.docId??void 0);return(0,o.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,o.jsx)(g,{item:t});case"category":return(0,o.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,n=(0,i.jA)();return(0,o.jsx)(v,{items:n.items,className:t})}function v(e){let{items:t,className:n}=e;if(!t)return(0,o.jsx)(x,{...e});let s=(0,i.MN)(t);return(0,o.jsx)("section",{className:(0,r.Z)("row",n),children:s.map((e,t)=>(0,o.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,o.jsx)(h,{item:e})},t))})}},633876:function(e,t,n){n.d(t,{c:function(){return c}});var o=n(667294),r=n(49931);let i=["zero","one","two","few","many","other"];function s(e){return i.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,r.Z)();return(0,o.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let o=e.split("|");if(1===o.length)return o[0];o.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);let r=n.select(t);return o[Math.min(n.pluralForms.indexOf(r),o.length-1)]})(n,t,e)}}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return s}});var o=n(667294);let r={},i=o.createContext(r);function s(e){let t=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);
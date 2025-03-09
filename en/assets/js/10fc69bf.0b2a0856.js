"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["47743"],{16076:function(e,t,n){n.r(t),n.d(t,{metadata:()=>o,contentTitle:()=>c,default:()=>p,assets:()=>a,toc:()=>u,frontMatter:()=>s});var o=JSON.parse('{"id":"docs/\u9879\u76EE\u90E8\u7F72/\u9879\u76EE\u90E8\u7F72","title":"Project Deployment","description":"A detailed guide to project deployment using the GoFrame framework, including complete steps from preparing the server environment to launching the application, helping developers smoothly complete the deployment process.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u9879\u76EE\u90E8\u7F72/\u9879\u76EE\u90E8\u7F72.md","sourceDirName":"docs/\u9879\u76EE\u90E8\u7F72","slug":"/docs/deploy","permalink":"/en/docs/deploy","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u9879\u76EE\u90E8\u7F72/\u9879\u76EE\u90E8\u7F72.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732411910000,"sidebarPosition":10,"frontMatter":{"slug":"/docs/deploy","title":"Project Deployment","sidebar_position":10,"hide_title":true,"keywords":["Project Deployment","GoFrame","GoFrame Framework","Documentation","Guide","How to Deploy","Deployment Steps","Development Framework","Server Configuration","Application Launch"],"description":"A detailed guide to project deployment using the GoFrame framework, including complete steps from preparing the server environment to launching the application, helping developers smoothly complete the deployment process."},"sidebar":"mainSidebar","previous":{"title":"Frequently Asked Questions (FAQ)","permalink":"/en/docs/faq"},"next":{"title":"Deployment - Standalone","permalink":"/en/docs/deploy/standalone"}}'),r=n("785893"),i=n("250065"),l=n("203105");let s={slug:"/docs/deploy",title:"Project Deployment",sidebar_position:10,hide_title:!0,keywords:["Project Deployment","GoFrame","GoFrame Framework","Documentation","Guide","How to Deploy","Deployment Steps","Development Framework","Server Configuration","Application Launch"],description:"A detailed guide to project deployment using the GoFrame framework, including complete steps from preparing the server environment to launching the application, helping developers smoothly complete the deployment process."},c=void 0,a={},u=[];function d(e){return(0,r.jsx)(l.Z,{})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},203105:function(e,t,n){n.d(t,{Z:()=>x});var o=n("785893");n("667294");var r=n("467026"),i=n("96693"),l=n("531183"),s=n("633876"),c=n("266026"),a=n("434751"),u=n("58608");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:n}=e;return(0,o.jsx)(l.Z,{href:t,className:(0,r.Z)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:i,description:l}=e;return(0,o.jsxs)(p,{href:t,children:[(0,o.jsxs)(u.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),l&&(0,o.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:l,children:l})]})}function f(e){let{item:t}=e,n=(0,i.LM)(t),r=function(){let{selectMessage:e}=(0,s.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,o.jsx)(m,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e,n=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",r=(0,i.xz)(t.docId??void 0);return(0,o.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,o.jsx)(h,{item:t});case"category":return(0,o.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e,n=(0,i.jA)();return(0,o.jsx)(x,{items:n.items,className:t})}function x(e){let{items:t,className:n}=e;if(!t)return(0,o.jsx)(y,{...e});let l=(0,i.MN)(t);return(0,o.jsx)("section",{className:(0,r.Z)("row",n),children:l.map((e,t)=>(0,o.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,o.jsx)(g,{item:e})},t))})}},633876:function(e,t,n){n.d(t,{c:function(){return c}});var o=n(667294),r=n(49931);let i=["zero","one","two","few","many","other"];function l(e){return i.filter(t=>e.includes(t))}let s={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,r.Z)();return(0,o.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),s}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let o=e.split("|");if(1===o.length)return o[0];o.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);let r=n.select(t);return o[Math.min(n.pluralForms.indexOf(r),o.length-1)]})(n,t,e)}}},250065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return l}});var o=n(667294);let r={},i=o.createContext(r);function l(e){let t=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);
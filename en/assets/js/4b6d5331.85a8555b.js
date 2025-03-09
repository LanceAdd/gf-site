"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["72878"],{456308:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>c,default:()=>p,assets:()=>a,toc:()=>u,frontMatter:()=>o});var n=JSON.parse('{"id":"examples/grpc/grpc","title":"gRPC","description":"","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/examples/grpc/grpc.md","sourceDirName":"examples/grpc","slug":"/examples/grpc","permalink":"/en/examples/grpc","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/examples/grpc/grpc.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1737624670000,"sidebarPosition":0,"frontMatter":{"slug":"/examples/grpc","title":"gRPC","hide_title":true,"sidebar_position":0},"sidebar":"examplesSidebar","next":{"title":"Basic Usage","permalink":"/en/examples/grpc/basic"}}'),i=r("785893"),l=r("250065"),s=r("203105");let o={slug:"/examples/grpc",title:"gRPC",hide_title:!0,sidebar_position:0},c=void 0,a={},u=[];function d(e){return(0,i.jsx)(s.Z,{})}function p(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},203105:function(e,t,r){r.d(t,{Z:()=>b});var n=r("785893");r("667294");var i=r("467026"),l=r("96693"),s=r("531183"),o=r("633876"),c=r("266026"),a=r("434751"),u=r("58608");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return(0,n.jsx)(s.Z,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:l,description:s}=e;return(0,n.jsxs)(p,{href:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:l,children:[r," ",l]}),s&&(0,n.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e,r=(0,l.LM)(t),i=function(){let{selectMessage:e}=(0,o.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(m,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??i(t.items.length)}):null}function g(e){let{item:t}=e,r=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",i=(0,l.xz)(t.docId??void 0);return(0,n.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(g,{item:t});case"category":return(0,n.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,r=(0,l.jA)();return(0,n.jsx)(b,{items:r.items,className:t})}function b(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(x,{...e});let s=(0,l.MN)(t);return(0,n.jsx)("section",{className:(0,i.Z)("row",r),children:s.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(h,{item:e})},t))})}},633876:function(e,t,r){r.d(t,{c:function(){return c}});var n=r(667294),i=r(49931);let l=["zero","one","two","few","many","other"];function s(e){return l.filter(t=>e.includes(t))}let o={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,i.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),o}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let i=r.select(t);return n[Math.min(r.pluralForms.indexOf(i),n.length-1)]})(r,t,e)}}},250065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return s}});var n=r(667294);let i={},l=n.createContext(i);function s(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
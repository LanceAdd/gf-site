"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["68"],{928100:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>a,default:()=>p,assets:()=>c,toc:()=>u,frontMatter:()=>o});var n=JSON.parse('{"id":"examples/httpserver/httpserver","title":"HTTP Server","description":"","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/examples/httpserver/httpserver.md","sourceDirName":"examples/httpserver","slug":"/examples/httpserver","permalink":"/en/examples/httpserver","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/examples/httpserver/httpserver.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1737624670000,"sidebarPosition":2,"frontMatter":{"slug":"/examples/httpserver","title":"HTTP Server","hide_title":true,"sidebar_position":2},"sidebar":"examplesSidebar","previous":{"title":"MongoDB","permalink":"/en/examples/nosql/mongodb"},"next":{"title":"JWT Authentication","permalink":"/en/examples/httpserver/jwt"}}'),s=r("785893"),l=r("250065"),i=r("203105");let o={slug:"/examples/httpserver",title:"HTTP Server",hide_title:!0,sidebar_position:2},a=void 0,c={},u=[];function d(e){return(0,s.jsx)(i.Z,{})}function p(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},203105:function(e,t,r){r.d(t,{Z:()=>v});var n=r("785893");r("667294");var s=r("467026"),l=r("96693"),i=r("531183"),o=r("633876"),a=r("266026"),c=r("434751"),u=r("58608");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return(0,n.jsx)(i.Z,{href:t,className:(0,s.Z)("card padding--lg",d.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:l,description:i}=e;return(0,n.jsxs)(p,{href:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,s.Z)("text--truncate",d.cardTitle),title:l,children:[r," ",l]}),i&&(0,n.jsx)("p",{className:(0,s.Z)("text--truncate",d.cardDescription),title:i,children:i})]})}function f(e){let{item:t}=e,r=(0,l.LM)(t),s=function(){let{selectMessage:e}=(0,o.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(m,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??s(t.items.length)}):null}function h(e){let{item:t}=e,r=(0,a.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",s=(0,l.xz)(t.docId??void 0);return(0,n.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??s?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(h,{item:t});case"category":return(0,n.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e,r=(0,l.jA)();return(0,n.jsx)(v,{items:r.items,className:t})}function v(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(g,{...e});let i=(0,l.MN)(t);return(0,n.jsx)("section",{className:(0,s.Z)("row",r),children:i.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(x,{item:e})},t))})}},633876:function(e,t,r){r.d(t,{c:function(){return a}});var n=r(667294),s=r(49931);let l=["zero","one","two","few","many","other"];function i(e){return l.filter(t=>e.includes(t))}let o={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function a(){let e=function(){let{i18n:{currentLocale:e}}=(0,s.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),o}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let s=r.select(t);return n[Math.min(r.pluralForms.indexOf(s),n.length-1)]})(r,t,e)}}},250065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return i}});var n=r(667294);let s={},l=n.createContext(s);function i(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
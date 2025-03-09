"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["59331"],{53920:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>c,default:()=>m,assets:()=>l,toc:()=>u,frontMatter:()=>s});var n=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u6570\u636E\u7ED3\u6784","title":"Container","description":"How to create and manage data structures in the GoFrame framework. With container components, users can efficiently organize and optimize the code structure of projects. We also provide detailed development guides to help developers better understand and utilize the powerful features of the GoFrame framework.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u6570\u636E\u7ED3\u6784.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784","slug":"/docs/components/container","permalink":"/en/docs/components/container","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u6570\u636E\u7ED3\u6784.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732443619000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/components/container","title":"Container","sidebar_position":0,"hide_title":true,"keywords":["data structures","GoFrame","GoFrame framework","container components","web components","development guide","project structure","code structure","programming framework","technical documentation"],"description":"How to create and manage data structures in the GoFrame framework. With container components, users can efficiently organize and optimize the code structure of projects. We also provide detailed development guides to help developers better understand and utilize the powerful features of the GoFrame framework."},"sidebar":"mainSidebar","previous":{"title":"Components Category","permalink":"/en/docs/components"},"next":{"title":"Map","permalink":"/en/docs/components/container-gmap"}}'),o=r("785893"),i=r("250065"),a=r("203105");let s={slug:"/docs/components/container",title:"Container",sidebar_position:0,hide_title:!0,keywords:["data structures","GoFrame","GoFrame framework","container components","web components","development guide","project structure","code structure","programming framework","technical documentation"],description:"How to create and manage data structures in the GoFrame framework. With container components, users can efficiently organize and optimize the code structure of projects. We also provide detailed development guides to help developers better understand and utilize the powerful features of the GoFrame framework."},c=void 0,l={},u=[];function d(e){return(0,o.jsx)(a.Z,{})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},203105:function(e,t,r){r.d(t,{Z:()=>x});var n=r("785893");r("667294");var o=r("467026"),i=r("96693"),a=r("531183"),s=r("633876"),c=r("266026"),l=r("434751"),u=r("58608");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:r}=e;return(0,n.jsx)(a.Z,{href:t,className:(0,o.Z)("card padding--lg",d.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:i,description:a}=e;return(0,n.jsxs)(m,{href:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,o.Z)("text--truncate",d.cardTitle),title:i,children:[r," ",i]}),a&&(0,n.jsx)("p",{className:(0,o.Z)("text--truncate",d.cardDescription),title:a,children:a})]})}function f(e){let{item:t}=e,r=(0,i.LM)(t),o=function(){let{selectMessage:e}=(0,s.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(p,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??o(t.items.length)}):null}function h(e){let{item:t}=e,r=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",o=(0,i.xz)(t.docId??void 0);return(0,n.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(h,{item:t});case"category":return(0,n.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function w(e){let{className:t}=e,r=(0,i.jA)();return(0,n.jsx)(x,{items:r.items,className:t})}function x(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(w,{...e});let a=(0,i.MN)(t);return(0,n.jsx)("section",{className:(0,o.Z)("row",r),children:a.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(g,{item:e})},t))})}},633876:function(e,t,r){r.d(t,{c:function(){return c}});var n=r(667294),o=r(49931);let i=["zero","one","two","few","many","other"];function a(e){return i.filter(t=>e.includes(t))}let s={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),s}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let o=r.select(t);return n[Math.min(r.pluralForms.indexOf(o),n.length-1)]})(r,t,e)}}},250065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return a}});var n=r(667294);let o={},i=n.createContext(o);function a(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
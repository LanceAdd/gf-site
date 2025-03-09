"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["531"],{468719:function(e,t,r){r.r(t),r.d(t,{metadata:()=>o,contentTitle:()=>s,default:()=>d,assets:()=>c,toc:()=>u,frontMatter:()=>l});var o=JSON.parse('{"id":"course/starbook/\u7B2C\u4E00\u7AE0-\u57FA\u7840\u4FE1\u606F/\u7B2C\u4E00\u7AE0-\u57FA\u7840\u4FE1\u606F","title":"Chapter 1 - Basic Information","description":"The GoFrame framework is an open-source, high-performance web application development framework that supports modular design, suitable for enterprise-level application development. Its user-friendly features and powerful functionality make it a reliable tool for developers to achieve efficient backend development.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/course/starbook/\u7B2C\u4E00\u7AE0-\u57FA\u7840\u4FE1\u606F/\u7B2C\u4E00\u7AE0-\u57FA\u7840\u4FE1\u606F.md","sourceDirName":"course/starbook/\u7B2C\u4E00\u7AE0-\u57FA\u7840\u4FE1\u606F","slug":"/course/starbook/about","permalink":"/en/course/starbook/about","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/course/starbook/\u7B2C\u4E00\u7AE0-\u57FA\u7840\u4FE1\u606F/\u7B2C\u4E00\u7AE0-\u57FA\u7840\u4FE1\u606F.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732458699000,"sidebarPosition":1,"frontMatter":{"title":"Chapter 1 - Basic Information","hide_title":true,"sidebar_position":1,"slug":"/course/starbook/about","keywords":["GoFrame","GoFrame Framework","Programming Framework","Open Source","Web Development","Application Development","High Performance","Modular Design","Enterprise Applications","Backend Development"],"description":"The GoFrame framework is an open-source, high-performance web application development framework that supports modular design, suitable for enterprise-level application development. Its user-friendly features and powerful functionality make it a reliable tool for developers to achieve efficient backend development."},"sidebar":"courseStarBookSidebar","previous":{"title":"Practical Tutorial - Star English Book","permalink":"/en/course/starbook"},"next":{"title":"1.1 Project Introduction","permalink":"/en/course/starbook/about-intro"}}'),n=r("785893"),i=r("250065"),a=r("203105");let l={title:"Chapter 1 - Basic Information",hide_title:!0,sidebar_position:1,slug:"/course/starbook/about",keywords:["GoFrame","GoFrame Framework","Programming Framework","Open Source","Web Development","Application Development","High Performance","Modular Design","Enterprise Applications","Backend Development"],description:"The GoFrame framework is an open-source, high-performance web application development framework that supports modular design, suitable for enterprise-level application development. Its user-friendly features and powerful functionality make it a reliable tool for developers to achieve efficient backend development."},s=void 0,c={},u=[];function p(e){return(0,n.jsx)(a.Z,{})}function d(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},203105:function(e,t,r){r.d(t,{Z:()=>k});var o=r("785893");r("667294");var n=r("467026"),i=r("96693"),a=r("531183"),l=r("633876"),s=r("266026"),c=r("434751"),u=r("58608");let p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return(0,o.jsx)(a.Z,{href:t,className:(0,n.Z)("card padding--lg",p.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:i,description:a}=e;return(0,o.jsxs)(d,{href:t,children:[(0,o.jsxs)(u.Z,{as:"h2",className:(0,n.Z)("text--truncate",p.cardTitle),title:i,children:[r," ",i]}),a&&(0,o.jsx)("p",{className:(0,n.Z)("text--truncate",p.cardDescription),title:a,children:a})]})}function f(e){let{item:t}=e,r=(0,i.LM)(t),n=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,o.jsx)(m,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??n(t.items.length)}):null}function h(e){let{item:t}=e,r=(0,s.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",n=(0,i.xz)(t.docId??void 0);return(0,o.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,o.jsx)(h,{item:t});case"category":return(0,o.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e,r=(0,i.jA)();return(0,o.jsx)(k,{items:r.items,className:t})}function k(e){let{items:t,className:r}=e;if(!t)return(0,o.jsx)(b,{...e});let a=(0,i.MN)(t);return(0,o.jsx)("section",{className:(0,n.Z)("row",r),children:a.map((e,t)=>(0,o.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,o.jsx)(g,{item:e})},t))})}},633876:function(e,t,r){r.d(t,{c:function(){return s}});var o=r(667294),n=r(49931);let i=["zero","one","two","few","many","other"];function a(e){return i.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function s(){let e=function(){let{i18n:{currentLocale:e}}=(0,n.Z)();return(0,o.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let o=e.split("|");if(1===o.length)return o[0];o.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);let n=r.select(t);return o[Math.min(r.pluralForms.indexOf(n),o.length-1)]})(r,t,e)}}},250065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return a}});var o=r(667294);let n={},i=o.createContext(n);function a(e){let t=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);
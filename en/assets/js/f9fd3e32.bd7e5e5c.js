"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["78709"],{63994:function(e,t,a){a.r(t),a.d(t,{metadata:()=>r,contentTitle:()=>s,default:()=>p,assets:()=>c,toc:()=>d,frontMatter:()=>l});var r=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-\u53C2\u6570\u7C7B\u578B/\u6570\u636E\u6821\u9A8C-Map\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-Map\u6821\u9A8C","title":"Data Type - Map","description":"Data validation using the GoFrame framework, particularly for Map type data validation methods. With the GoFrame framework, developers can easily implement input data validation to ensure data validity and integrity. The page details the steps for using validation rules to enhance the security and reliability of applications.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-\u53C2\u6570\u7C7B\u578B/\u6570\u636E\u6821\u9A8C-Map\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-Map\u6821\u9A8C.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-\u53C2\u6570\u7C7B\u578B/\u6570\u636E\u6821\u9A8C-Map\u6821\u9A8C","slug":"/docs/core/gvalid-parameter-type-map","permalink":"/en/docs/core/gvalid-parameter-type-map","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-\u53C2\u6570\u7C7B\u578B/\u6570\u636E\u6821\u9A8C-Map\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-Map\u6821\u9A8C.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732440306000,"frontMatter":{"slug":"/docs/core/gvalid-parameter-type-map","title":"Data Type - Map","hide_title":true,"keywords":["GoFrame","Data Validation","Map Validation","Parameter Validation","GoFrame Framework","Validation Rules","Input Validation","Data Integrity","Golang","Development Framework"],"description":"Data validation using the GoFrame framework, particularly for Map type data validation methods. With the GoFrame framework, developers can easily implement input data validation to ensure data validity and integrity. The page details the steps for using validation rules to enhance the security and reliability of applications."},"sidebar":"mainSidebar","previous":{"title":"Data Type - Value","permalink":"/en/docs/core/gvalid-parameter-type-basic"},"next":{"title":"Map Validation - Example","permalink":"/en/docs/core/gvalid-parameter-type-map-example"}}'),n=a("785893"),i=a("250065"),o=a("203105");let l={slug:"/docs/core/gvalid-parameter-type-map",title:"Data Type - Map",hide_title:!0,keywords:["GoFrame","Data Validation","Map Validation","Parameter Validation","GoFrame Framework","Validation Rules","Input Validation","Data Integrity","Golang","Development Framework"],description:"Data validation using the GoFrame framework, particularly for Map type data validation methods. With the GoFrame framework, developers can easily implement input data validation to ensure data validity and integrity. The page details the steps for using validation rules to enhance the security and reliability of applications."},s=void 0,c={},d=[];function u(e){return(0,n.jsx)(o.Z,{})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},203105:function(e,t,a){a.d(t,{Z:()=>v});var r=a("785893");a("667294");var n=a("467026"),i=a("96693"),o=a("531183"),l=a("633876"),s=a("266026"),c=a("434751"),d=a("58608");let u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:a}=e;return(0,r.jsx)(o.Z,{href:t,className:(0,n.Z)("card padding--lg",u.cardContainer),children:a})}function m(e){let{href:t,icon:a,title:i,description:o}=e;return(0,r.jsxs)(p,{href:t,children:[(0,r.jsxs)(d.Z,{as:"h2",className:(0,n.Z)("text--truncate",u.cardTitle),title:i,children:[a," ",i]}),o&&(0,r.jsx)("p",{className:(0,n.Z)("text--truncate",u.cardDescription),title:o,children:o})]})}function f(e){let{item:t}=e,a=(0,i.LM)(t),n=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return a?(0,r.jsx)(m,{href:a,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??n(t.items.length)}):null}function h(e){let{item:t}=e,a=(0,s.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",n=(0,i.xz)(t.docId??void 0);return(0,r.jsx)(m,{href:t.href,icon:a,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(h,{item:t});case"category":return(0,r.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e,a=(0,i.jA)();return(0,r.jsx)(v,{items:a.items,className:t})}function v(e){let{items:t,className:a}=e;if(!t)return(0,r.jsx)(y,{...e});let o=(0,i.MN)(t);return(0,r.jsx)("section",{className:(0,n.Z)("row",a),children:o.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(g,{item:e})},t))})}},633876:function(e,t,a){a.d(t,{c:function(){return s}});var r=a(667294),n=a(49931);let i=["zero","one","two","few","many","other"];function o(e){return i.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function s(){let e=function(){let{i18n:{currentLocale:e}}=(0,n.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,a)=>(function(e,t,a){let r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let n=a.select(t);return r[Math.min(a.pluralForms.indexOf(n),r.length-1)]})(a,t,e)}}},250065:function(e,t,a){a.d(t,{Z:function(){return l},a:function(){return o}});var r=a(667294);let n={},i=r.createContext(n);function o(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
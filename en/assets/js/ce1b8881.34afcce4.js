"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["91139"],{182110:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>a,default:()=>d,assets:()=>l,toc:()=>u,frontMatter:()=>s});var r=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u5B89\u5168\u7C7B\u578B-gtype/\u5B89\u5168\u7C7B\u578B-gtype","title":"Safe Type","description":"The safe type gtype in the GoFrame framework is suitable for any scenario requiring concurrency safety. By providing concurrency safety support for the most commonly used basic data types, gtype has higher performance than mutex locks, simplifies concurrency control using atomic operations, and facilitates developers in efficient concurrent programming in complex scenarios.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u5B89\u5168\u7C7B\u578B-gtype/\u5B89\u5168\u7C7B\u578B-gtype.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u5B89\u5168\u7C7B\u578B-gtype","slug":"/docs/components/container-gtype","permalink":"/en/docs/components/container-gtype","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u5B89\u5168\u7C7B\u578B-gtype/\u5B89\u5168\u7C7B\u578B-gtype.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732716970000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/components/container-gtype","title":"Safe Type","sidebar_position":5,"hide_title":true,"keywords":["GoFrame","safe type","concurrent programming","concurrency safety","gtype","basic type","atomic operations","performance optimization","data type","lock mechanism"],"description":"The safe type gtype in the GoFrame framework is suitable for any scenario requiring concurrency safety. By providing concurrency safety support for the most commonly used basic data types, gtype has higher performance than mutex locks, simplifies concurrency control using atomic operations, and facilitates developers in efficient concurrent programming in complex scenarios."},"sidebar":"mainSidebar","previous":{"title":"Generic - Precautions","permalink":"/en/docs/components/container-gvar-notice"},"next":{"title":"Safe Type - Usage","permalink":"/en/docs/components/container-gtype-example"}}'),o=n("785893"),i=n("250065"),c=n("203105");let s={slug:"/docs/components/container-gtype",title:"Safe Type",sidebar_position:5,hide_title:!0,keywords:["GoFrame","safe type","concurrent programming","concurrency safety","gtype","basic type","atomic operations","performance optimization","data type","lock mechanism"],description:"The safe type gtype in the GoFrame framework is suitable for any scenario requiring concurrency safety. By providing concurrency safety support for the most commonly used basic data types, gtype has higher performance than mutex locks, simplifies concurrency control using atomic operations, and facilitates developers in efficient concurrent programming in complex scenarios."},a=void 0,l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Documentation",id:"documentation",level:2}];function p(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(t.p,{children:"Concurrency-safe basic types."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Use Scenarios"}),":"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"gtype"})," is used very frequently and is applicable in any scenario requiring concurrency safety."]}),"\n",(0,o.jsxs)(t.p,{children:["In common concurrency-safe scenarios, a variable of a basic type, especially a ",(0,o.jsx)(t.code,{children:"struct"})," containing several attributes, often uses mutex (read/write) locks or multiple (read/write) locks for safe management. However, in such usage, the operation performance of ",(0,o.jsx)(t.code,{children:"variables/struct/attributes"})," is ",(0,o.jsx)(t.strong,{children:"very low"}),", and the presence of the mutex lock mechanism often makes the operation quite complex, requiring careful maintenance of ",(0,o.jsx)(t.code,{children:"variable/attribute"})," concurrency safety control (especially ",(0,o.jsx)(t.code,{children:"(RW)Mutex"}),")."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"gtype"})," provides corresponding concurrency-safe data types for the most commonly used basic data types, making it easier to maintain variables/attributes in concurrency-safe scenarios. Developers no longer need to create and maintain cumbersome ",(0,o.jsx)(t.code,{children:"(RW)Mutex"})," in ",(0,o.jsx)(t.code,{children:"struct"}),". Since ",(0,o.jsx)(t.code,{children:"gtype"})," maintains concurrency safety for basic types, it mostly uses ",(0,o.jsx)(t.code,{children:"atomic"})," operations internally to maintain concurrency safety, often resulting in efficiency that is tens of times higher than ",(0,o.jsx)(t.code,{children:"(RW)Mutex"})," mutex locks."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Usage"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/container/gtype"\n'})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Interface Documentation"}),":"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/container/gtype",children:"https://pkg.go.dev/github.com/gogf/gf/v2/container/gtype"})}),"\n",(0,o.jsx)(t.h2,{id:"documentation",children:"Documentation"}),"\n","\n",(0,o.jsx)(c.Z,{})]})}function d(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},203105:function(e,t,n){n.d(t,{Z:()=>x});var r=n("785893");n("667294");var o=n("467026"),i=n("96693"),c=n("531183"),s=n("633876"),a=n("266026"),l=n("434751"),u=n("58608");let p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:n}=e;return(0,r.jsx)(c.Z,{href:t,className:(0,o.Z)("card padding--lg",p.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:i,description:c}=e;return(0,r.jsxs)(d,{href:t,children:[(0,r.jsxs)(u.Z,{as:"h2",className:(0,o.Z)("text--truncate",p.cardTitle),title:i,children:[n," ",i]}),c&&(0,r.jsx)("p",{className:(0,o.Z)("text--truncate",p.cardDescription),title:c,children:c})]})}function f(e){let{item:t}=e,n=(0,i.LM)(t),o=function(){let{selectMessage:e}=(0,s.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(m,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??o(t.items.length)}):null}function g(e){let{item:t}=e,n=(0,a.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",o=(0,i.xz)(t.docId??void 0);return(0,r.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(g,{item:t});case"category":return(0,r.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e,n=(0,i.jA)();return(0,r.jsx)(x,{items:n.items,className:t})}function x(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(y,{...e});let c=(0,i.MN)(t);return(0,r.jsx)("section",{className:(0,o.Z)("row",n),children:c.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(h,{item:e})},t))})}},633876:function(e,t,n){n.d(t,{c:function(){return a}});var r=n(667294),o=n(49931);let i=["zero","one","two","few","many","other"];function c(e){return i.filter(t=>e.includes(t))}let s={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function a(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),s}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let o=n.select(t);return r[Math.min(n.pluralForms.indexOf(o),r.length-1)]})(n,t,e)}}},250065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return c}});var r=n(667294);let o={},i=r.createContext(o);function c(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
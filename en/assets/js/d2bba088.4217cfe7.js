"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["95795"],{674699:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>s,default:()=>m,assets:()=>u,toc:()=>l,frontMatter:()=>a});var r=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u961F\u5217\u7C7B\u578B-gqueue/\u961F\u5217\u7C7B\u578B-gqueue","title":"Queue","description":"The dynamic size concurrency-safe queue gqueue in the GoFrame framework supports both fixed and dynamic size queue features, achieving efficiency comparable to the standard library channel. gqueue is particularly suitable for data communication between multiple goroutines and provides developers with simple yet powerful concurrency handling capabilities.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u961F\u5217\u7C7B\u578B-gqueue/\u961F\u5217\u7C7B\u578B-gqueue.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u961F\u5217\u7C7B\u578B-gqueue","slug":"/docs/components/container-gqueue","permalink":"/en/docs/components/container-gqueue","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u961F\u5217\u7C7B\u578B-gqueue/\u961F\u5217\u7C7B\u578B-gqueue.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732716970000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/components/container-gqueue","title":"Queue","sidebar_position":6,"hide_title":true,"keywords":["GoFrame","GoFrame framework","gqueue","queue","concurrency safe","dynamic queue","fixed queue","goroutine","data communication","Go language"],"description":"The dynamic size concurrency-safe queue gqueue in the GoFrame framework supports both fixed and dynamic size queue features, achieving efficiency comparable to the standard library channel. gqueue is particularly suitable for data communication between multiple goroutines and provides developers with simple yet powerful concurrency handling capabilities."},"sidebar":"mainSidebar","previous":{"title":"Safe Type - Performance","permalink":"/en/docs/components/container-gtype-benchmark"},"next":{"title":"Queue - Usage","permalink":"/en/docs/components/container-gqueue-example"}}'),i=t("785893"),o=t("250065"),c=t("203105");let a={slug:"/docs/components/container-gqueue",title:"Queue",sidebar_position:6,hide_title:!0,keywords:["GoFrame","GoFrame framework","gqueue","queue","concurrency safe","dynamic queue","fixed queue","goroutine","data communication","Go language"],description:"The dynamic size concurrency-safe queue gqueue in the GoFrame framework supports both fixed and dynamic size queue features, achieving efficiency comparable to the standard library channel. gqueue is particularly suitable for data communication between multiple goroutines and provides developers with simple yet powerful concurrency handling capabilities."},s=void 0,u={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Documentation",id:"documentation",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["A dynamic size concurrency-safe queue. At the same time, ",(0,i.jsx)(n.code,{children:"gqueue"})," also supports fixed queue size, achieving efficiency comparable to the standard library's ",(0,i.jsx)(n.code,{children:"channel"})," when using a fixed queue size."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Usage Scenarios"}),":"]}),"\n",(0,i.jsxs)(n.p,{children:["This queue is concurrency safe and is often used in scenarios where multiple ",(0,i.jsx)(n.code,{children:"goroutine"})," data communication and dynamic queue size are supported."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"How to Use"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/container/gqueue"\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"API Documentation"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/container/gqueue",children:"https://pkg.go.dev/github.com/gogf/gf/v2/container/gqueue"})}),"\n",(0,i.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n","\n",(0,i.jsx)(c.Z,{})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},203105:function(e,n,t){t.d(n,{Z:()=>y});var r=t("785893");t("667294");var i=t("467026"),o=t("96693"),c=t("531183"),a=t("633876"),s=t("266026"),u=t("434751"),l=t("58608");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:n,children:t}=e;return(0,r.jsx)(c.Z,{href:n,className:(0,i.Z)("card padding--lg",d.cardContainer),children:t})}function p(e){let{href:n,icon:t,title:o,description:c}=e;return(0,r.jsxs)(m,{href:n,children:[(0,r.jsxs)(l.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:o,children:[t," ",o]}),c&&(0,r.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:c,children:c})]})}function f(e){let{item:n}=e,t=(0,o.LM)(n),i=function(){let{selectMessage:e}=(0,a.c)();return n=>e(n,(0,u.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,r.jsx)(p,{href:t,icon:"\uD83D\uDDC3\uFE0F",title:n.label,description:n.description??i(n.items.length)}):null}function h(e){let{item:n}=e,t=(0,s.Z)(n.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",i=(0,o.xz)(n.docId??void 0);return(0,r.jsx)(p,{href:n.href,icon:t,title:n.label,description:n.description??i?.description})}function g(e){let{item:n}=e;switch(n.type){case"link":return(0,r.jsx)(h,{item:n});case"category":return(0,r.jsx)(f,{item:n});default:throw Error(`unknown item type ${JSON.stringify(n)}`)}}function x(e){let{className:n}=e,t=(0,o.jA)();return(0,r.jsx)(y,{items:t.items,className:n})}function y(e){let{items:n,className:t}=e;if(!n)return(0,r.jsx)(x,{...e});let c=(0,o.MN)(n);return(0,r.jsx)("section",{className:(0,i.Z)("row",t),children:c.map((e,n)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(g,{item:e})},n))})}},633876:function(e,n,t){t.d(n,{c:function(){return s}});var r=t(667294),i=t(49931);let o=["zero","one","two","few","many","other"];function c(e){return o.filter(n=>e.includes(n))}let a={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function s(){let e=function(){let{i18n:{currentLocale:e}}=(0,i.Z)();return(0,r.useMemo)(()=>{try{return function(e){let n=new Intl.PluralRules(e);return{locale:e,pluralForms:c(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${n.message}
`),a}},[e])}();return{selectMessage:(n,t)=>(function(e,n,t){let r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let i=t.select(n);return r[Math.min(t.pluralForms.indexOf(i),r.length-1)]})(t,n,e)}}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return c}});var r=t(667294);let i={},o=r.createContext(i);function c(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
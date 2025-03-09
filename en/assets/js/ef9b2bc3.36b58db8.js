"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["11271"],{47316:function(e,r,n){n.r(r),n.d(r,{metadata:()=>t,contentTitle:()=>c,default:()=>m,assets:()=>l,toc:()=>d,frontMatter:()=>s});var t=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u9519\u8BEF\u5904\u7406/\u9519\u8BEF\u5904\u7406","title":"Error Handling","description":"The GoFrame framework provides powerful error handling capabilities implemented through the gerror component, with all components returning errors accompanied by stack information, allowing developers to quickly pinpoint issues. Using this framework can effectively enhance programming efficiency and application stability.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u6838\u5FC3\u7EC4\u4EF6/\u9519\u8BEF\u5904\u7406/\u9519\u8BEF\u5904\u7406.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u9519\u8BEF\u5904\u7406","slug":"/docs/core/gerror","permalink":"/en/docs/core/gerror","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u9519\u8BEF\u5904\u7406/\u9519\u8BEF\u5904\u7406.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732716970000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/core/gerror","title":"Error Handling","sidebar_position":5,"hide_title":true,"keywords":["GoFrame","GoFrame framework","error handling","gerror","stack information","developers","API documentation","unified error handling","Go","programming"],"description":"The GoFrame framework provides powerful error handling capabilities implemented through the gerror component, with all components returning errors accompanied by stack information, allowing developers to quickly pinpoint issues. Using this framework can effectively enhance programming efficiency and application stability."},"sidebar":"mainSidebar","previous":{"title":"Logging - FAQ","permalink":"/en/docs/core/glog-faq"},"next":{"title":"Error Handling - Methods","permalink":"/en/docs/core/gerror-funcs"}}'),o=n("785893"),i=n("250065"),a=n("203105");let s={slug:"/docs/core/gerror",title:"Error Handling",sidebar_position:5,hide_title:!0,keywords:["GoFrame","GoFrame framework","error handling","gerror","stack information","developers","API documentation","unified error handling","Go","programming"],description:"The GoFrame framework provides powerful error handling capabilities implemented through the gerror component, with all components returning errors accompanied by stack information, allowing developers to quickly pinpoint issues. Using this framework can effectively enhance programming efficiency and application stability."},c=void 0,l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Documentation",id:"documentation",level:2}];function u(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"GoFrame"})," framework offers powerful, rich, and unified error handling capabilities implemented through the ",(0,o.jsx)(r.code,{children:"gerror"})," component. This component is also the unified error handling component of the framework. All components of the framework, if there is an error returned, are accompanied by stack information to facilitate developers in quickly identifying issues."]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Usage"}),":"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/errors/gerror"\n'})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"API Documentation"}),":"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/errors/gerror",children:"https://pkg.go.dev/github.com/gogf/gf/v2/errors/gerror"})}),"\n",(0,o.jsx)(r.h2,{id:"documentation",children:"Documentation"}),"\n","\n",(0,o.jsx)(a.Z,{})]})}function m(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},203105:function(e,r,n){n.d(r,{Z:()=>k});var t=n("785893");n("667294");var o=n("467026"),i=n("96693"),a=n("531183"),s=n("633876"),c=n("266026"),l=n("434751"),d=n("58608");let u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:r,children:n}=e;return(0,t.jsx)(a.Z,{href:r,className:(0,o.Z)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:r,icon:n,title:i,description:a}=e;return(0,t.jsxs)(m,{href:r,children:[(0,t.jsxs)(d.Z,{as:"h2",className:(0,o.Z)("text--truncate",u.cardTitle),title:i,children:[n," ",i]}),a&&(0,t.jsx)("p",{className:(0,o.Z)("text--truncate",u.cardDescription),title:a,children:a})]})}function f(e){let{item:r}=e,n=(0,i.LM)(r),o=function(){let{selectMessage:e}=(0,s.c)();return r=>e(r,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r}))}();return n?(0,t.jsx)(p,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:r.label,description:r.description??o(r.items.length)}):null}function g(e){let{item:r}=e,n=(0,c.Z)(r.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",o=(0,i.xz)(r.docId??void 0);return(0,t.jsx)(p,{href:r.href,icon:n,title:r.label,description:r.description??o?.description})}function h(e){let{item:r}=e;switch(r.type){case"link":return(0,t.jsx)(g,{item:r});case"category":return(0,t.jsx)(f,{item:r});default:throw Error(`unknown item type ${JSON.stringify(r)}`)}}function x(e){let{className:r}=e,n=(0,i.jA)();return(0,t.jsx)(k,{items:n.items,className:r})}function k(e){let{items:r,className:n}=e;if(!r)return(0,t.jsx)(x,{...e});let a=(0,i.MN)(r);return(0,t.jsx)("section",{className:(0,o.Z)("row",n),children:a.map((e,r)=>(0,t.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,t.jsx)(h,{item:e})},r))})}},633876:function(e,r,n){n.d(r,{c:function(){return c}});var t=n(667294),o=n(49931);let i=["zero","one","two","few","many","other"];function a(e){return i.filter(r=>e.includes(r))}let s={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.Z)();return(0,t.useMemo)(()=>{try{return function(e){let r=new Intl.PluralRules(e);return{locale:e,pluralForms:a(r.resolvedOptions().pluralCategories),select:e=>r.select(e)}}(e)}catch(r){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${r.message}
`),s}},[e])}();return{selectMessage:(r,n)=>(function(e,r,n){let t=e.split("|");if(1===t.length)return t[0];t.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);let o=n.select(r);return t[Math.min(n.pluralForms.indexOf(o),t.length-1)]})(n,r,e)}}},250065:function(e,r,n){n.d(r,{Z:function(){return s},a:function(){return a}});var t=n(667294);let o={},i=t.createContext(o);function a(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);
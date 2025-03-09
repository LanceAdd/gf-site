"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["45355"],{939063:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>m,assets:()=>a,toc:()=>d,frontMatter:()=>l});var i=JSON.parse('{"id":"docs/\u6846\u67B6\u8BBE\u8BA1/\u5DE5\u7A0B\u5F00\u53D1\u8BBE\u8BA1/\u5DE5\u7A0B\u5F00\u53D1\u8BBE\u8BA1","title":"Engineering Design \uD83D\uDD25","description":"The GoFrame framework is a modular design utility library suitable for developing business projects, especially microservices projects. This documentation provides engineering development design and practice, helping developers solve common problems with rich experience, emphasizing the understanding of design background and ideas to promote the value of the team development.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u6846\u67B6\u8BBE\u8BA1/\u5DE5\u7A0B\u5F00\u53D1\u8BBE\u8BA1/\u5DE5\u7A0B\u5F00\u53D1\u8BBE\u8BA1.md","sourceDirName":"docs/\u6846\u67B6\u8BBE\u8BA1/\u5DE5\u7A0B\u5F00\u53D1\u8BBE\u8BA1","slug":"/docs/design/project","permalink":"/en/docs/design/project","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6846\u67B6\u8BBE\u8BA1/\u5DE5\u7A0B\u5F00\u53D1\u8BBE\u8BA1/\u5DE5\u7A0B\u5F00\u53D1\u8BBE\u8BA1.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732716970000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/design/project","title":"Engineering Design \uD83D\uDD25","sidebar_position":2,"hide_title":true,"keywords":["GoFrame","GoFrame Framework","Engineering Development","Design Practice","Microservices Project","Modular Design","Utility Library","Out-of-the-box","Project Pitfalls","Development Team"],"description":"The GoFrame framework is a modular design utility library suitable for developing business projects, especially microservices projects. This documentation provides engineering development design and practice, helping developers solve common problems with rich experience, emphasizing the understanding of design background and ideas to promote the value of the team development."},"sidebar":"mainSidebar","previous":{"title":"Unified Framework Design","permalink":"/en/docs/design/unified"},"next":{"title":"Code Layering","permalink":"/en/docs/design/project-layer"}}'),r=t("785893"),o=t("250065"),s=t("203105");let l={slug:"/docs/design/project",title:"Engineering Design \uD83D\uDD25",sidebar_position:2,hide_title:!0,keywords:["GoFrame","GoFrame Framework","Engineering Development","Design Practice","Microservices Project","Modular Design","Utility Library","Out-of-the-box","Project Pitfalls","Development Team"],description:"The GoFrame framework is a modular design utility library suitable for developing business projects, especially microservices projects. This documentation provides engineering development design and practice, helping developers solve common problems with rich experience, emphasizing the understanding of design background and ideas to promote the value of the team development."},c=void 0,a={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Precautions",id:"precautions",level:2},{value:"Documentation",id:"documentation",level:2}];function u(e){let n={code:"code",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["Due to its modular design, the ",(0,r.jsx)(n.code,{children:"GoFrame"})," framework can be used as a utility library or for complete business project development."]}),"\n",(0,r.jsx)(n.p,{children:"Considering that most scenarios for using the framework are for developing business projects (microservices projects), the framework also provides some design and practices for engineering development for direct out-of-the-box use."}),"\n",(0,r.jsx)(n.h2,{id:"precautions",children:"Precautions"}),"\n",(0,r.jsxs)(n.p,{children:['Engineering development design is a complex "discipline." Different teams have different design styles, and in some scenarios, it is often influenced by the preferences of the team ',(0,r.jsx)(n.code,{children:"leader"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The engineering development design provided on the framework's official website is based on the author's experience in writing this section and through project pitfalls encountered in ",(0,r.jsx)(n.code,{children:"Go"})," practice. It can help solve common engineering development problems, but we do not believe it can meet the preferences of all development teams."]}),"\n",(0,r.jsx)(n.p,{children:"Reviewing all the design sections here and understanding the background and ideas of each piece of design itself is more valuable than directly using framework components and tools."}),"\n",(0,r.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n","\n",(0,r.jsx)(s.Z,{})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},203105:function(e,n,t){t.d(n,{Z:()=>b});var i=t("785893");t("667294");var r=t("467026"),o=t("96693"),s=t("531183"),l=t("633876"),c=t("266026"),a=t("434751"),d=t("58608");let u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:n,children:t}=e;return(0,i.jsx)(s.Z,{href:n,className:(0,r.Z)("card padding--lg",u.cardContainer),children:t})}function p(e){let{href:n,icon:t,title:o,description:s}=e;return(0,i.jsxs)(m,{href:n,children:[(0,i.jsxs)(d.Z,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:o,children:[t," ",o]}),s&&(0,i.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:s,children:s})]})}function g(e){let{item:n}=e,t=(0,o.LM)(n),r=function(){let{selectMessage:e}=(0,l.c)();return n=>e(n,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,i.jsx)(p,{href:t,icon:"\uD83D\uDDC3\uFE0F",title:n.label,description:n.description??r(n.items.length)}):null}function h(e){let{item:n}=e,t=(0,c.Z)(n.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",r=(0,o.xz)(n.docId??void 0);return(0,i.jsx)(p,{href:n.href,icon:t,title:n.label,description:n.description??r?.description})}function f(e){let{item:n}=e;switch(n.type){case"link":return(0,i.jsx)(h,{item:n});case"category":return(0,i.jsx)(g,{item:n});default:throw Error(`unknown item type ${JSON.stringify(n)}`)}}function v(e){let{className:n}=e,t=(0,o.jA)();return(0,i.jsx)(b,{items:t.items,className:n})}function b(e){let{items:n,className:t}=e;if(!n)return(0,i.jsx)(v,{...e});let s=(0,o.MN)(n);return(0,i.jsx)("section",{className:(0,r.Z)("row",t),children:s.map((e,n)=>(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(f,{item:e})},n))})}},633876:function(e,n,t){t.d(n,{c:function(){return c}});var i=t(667294),r=t(49931);let o=["zero","one","two","few","many","other"];function s(e){return o.filter(n=>e.includes(n))}let l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,r.Z)();return(0,i.useMemo)(()=>{try{return function(e){let n=new Intl.PluralRules(e);return{locale:e,pluralForms:s(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${n.message}
`),l}},[e])}();return{selectMessage:(n,t)=>(function(e,n,t){let i=e.split("|");if(1===i.length)return i[0];i.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);let r=t.select(n);return i[Math.min(t.pluralForms.indexOf(r),i.length-1)]})(t,n,e)}}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var i=t(667294);let r={},o=i.createContext(r);function s(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
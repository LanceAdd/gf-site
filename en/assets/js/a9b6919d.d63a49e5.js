"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["78995"],{192771:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>l,default:()=>m,assets:()=>d,toc:()=>c,frontMatter:()=>s});var i=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4","title":"ORM Model - Time Fields","description":"The time maintenance feature when using ORM chaining operations in the gdb module of the GoFrame framework. By automatically filling in creation, update, and deletion times, development efficiency is significantly improved. The article elaborates on how to enable these features and implement them during database operations such as insertions, updates, and deletions. Additionally, it provides solutions for scenarios like soft deletion and ignoring time maintenance.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4","slug":"/docs/core/gdb-chaining-soft-time","permalink":"/en/docs/core/gdb-chaining-soft-time","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732716970000,"sidebarPosition":11,"frontMatter":{"slug":"/docs/core/gdb-chaining-soft-time","title":"ORM Model - Time Fields","sidebar_position":11,"hide_title":true,"keywords":["GoFrame","GoFrame Framework","ORM","Chaining Operations","Time Maintenance","gdb","Auto-Fill","Soft Delete","Presentation Layer","Data Operation"],"description":"The time maintenance feature when using ORM chaining operations in the gdb module of the GoFrame framework. By automatically filling in creation, update, and deletion times, development efficiency is significantly improved. The article elaborates on how to enable these features and implement them during database operations such as insertions, updates, and deletions. Additionally, it provides solutions for scenarios like soft deletion and ignoring time maintenance."},"sidebar":"mainSidebar","previous":{"title":"ORM Model - Query Cache","permalink":"/en/docs/core/gdb-chaining-query-cache"},"next":{"title":"Time Fields - Intro","permalink":"/en/docs/core/gdb-chaining-soft-time-example"}}'),a=n("785893"),o=n("250065"),r=n("203105");let s={slug:"/docs/core/gdb-chaining-soft-time",title:"ORM Model - Time Fields",sidebar_position:11,hide_title:!0,keywords:["GoFrame","GoFrame Framework","ORM","Chaining Operations","Time Maintenance","gdb","Auto-Fill","Soft Delete","Presentation Layer","Data Operation"],description:"The time maintenance feature when using ORM chaining operations in the gdb module of the GoFrame framework. By automatically filling in creation, update, and deletion times, development efficiency is significantly improved. The article elaborates on how to enable these features and implement them during database operations such as insertions, updates, and deletions. Additionally, it provides solutions for scenarios like soft deletion and ignoring time maintenance."},l=void 0,d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Feature Configuration",id:"feature-configuration",level:2},{value:"Feature Activation",id:"feature-activation",level:2},{value:"Documentation",id:"documentation",level:2}];function u(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"Note that this feature is only effective for chaining operations."})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"gdb"})," module supports the automatic filling of creation, update, and deletion times for data records, improving development and maintenance efficiency. To facilitate unified maintenance of time field names and types, if using this feature, we have the following conventions:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The field type can be a time type, numeric integer, or boolean, such as: ",(0,a.jsx)(t.code,{children:"date"}),", ",(0,a.jsx)(t.code,{children:"datetime"}),", ",(0,a.jsx)(t.code,{children:"timestamp"}),", ",(0,a.jsx)(t.code,{children:"int"}),", ",(0,a.jsx)(t.code,{children:"uint"}),", ",(0,a.jsx)(t.code,{children:"big int"}),", ",(0,a.jsx)(t.code,{children:"bool"}),", etc."]}),"\n",(0,a.jsxs)(t.li,{children:["Field names can be customized, with default naming conventions being:","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"created_at"})," is updated during record creation and is only written once."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"updated_at"})," is updated during record modification and is updated each time the record changes."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"deleted_at"})," is for the soft delete feature of the record and is only written once when the record is deleted.\nField names are case-insensitive and ignore special characters, for example, ",(0,a.jsx)(t.code,{children:"CreatedAt"}),", ",(0,a.jsx)(t.code,{children:"UpdatedAt"}),", ",(0,a.jsx)(t.code,{children:"DeletedAt"})," are also supported."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"feature-configuration",children:"Feature Configuration"}),"\n",(0,a.jsxs)(t.p,{children:["Time field names can be customized in the configuration file, and the feature can be completely disabled on the database instance using the ",(0,a.jsx)(t.code,{children:"timeMaintainDisabled"})," configuration."]}),"\n",(0,a.jsx)(t.p,{children:"Corresponding configuration items in the configuration file:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:'database:\n  default:                      # Group name, customizable, default is "default"\n    createdAt: "created_at"     # (Optional) Auto-create time field name\n    updatedAt: "updated_time"   # (Optional) Auto-update time field name\n    deletedAt: "is_deleted"     # (Optional) Soft delete time field name\n    timeMaintainDisabled: false # (Optional) Whether to completely disable the time update feature. If true, CreatedAt/UpdatedAt/DeletedAt will be ineffective\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"Especially for historical projects, where different time field names already exist, the time field names can be flexibly configured using configuration items."})}),"\n",(0,a.jsxs)(t.p,{children:["For a complete database configuration, please refer to the ",(0,a.jsx)(t.a,{href:"/en/docs/core/gdb-config",children:"ORM - Configuration"})," section."]}),"\n",(0,a.jsx)(t.h2,{id:"feature-activation",children:"Feature Activation"}),"\n",(0,a.jsxs)(t.p,{children:["When a data table contains any or multiple fields such as ",(0,a.jsx)(t.code,{children:"created_at"}),", ",(0,a.jsx)(t.code,{children:"updated_at"}),", ",(0,a.jsx)(t.code,{children:"deleted_at"}),", or contains corresponding configuration fields in the configuration file, this feature is automatically enabled."]}),"\n",(0,a.jsx)(t.h2,{id:"documentation",children:"Documentation"}),"\n","\n",(0,a.jsx)(r.Z,{})]})}function m(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},203105:function(e,t,n){n.d(t,{Z:()=>j});var i=n("785893");n("667294");var a=n("467026"),o=n("96693"),r=n("531183"),s=n("633876"),l=n("266026"),d=n("434751"),c=n("58608");let u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:n}=e;return(0,i.jsx)(r.Z,{href:t,className:(0,a.Z)("card padding--lg",u.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:o,description:r}=e;return(0,i.jsxs)(m,{href:t,children:[(0,i.jsxs)(c.Z,{as:"h2",className:(0,a.Z)("text--truncate",u.cardTitle),title:o,children:[n," ",o]}),r&&(0,i.jsx)("p",{className:(0,a.Z)("text--truncate",u.cardDescription),title:r,children:r})]})}function h(e){let{item:t}=e,n=(0,o.LM)(t),a=function(){let{selectMessage:e}=(0,s.c)();return t=>e(t,(0,d.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,i.jsx)(f,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??a(t.items.length)}):null}function p(e){let{item:t}=e,n=(0,l.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",a=(0,o.xz)(t.docId??void 0);return(0,i.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??a?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,i.jsx)(p,{item:t});case"category":return(0,i.jsx)(h,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,n=(0,o.jA)();return(0,i.jsx)(j,{items:n.items,className:t})}function j(e){let{items:t,className:n}=e;if(!t)return(0,i.jsx)(x,{...e});let r=(0,o.MN)(t);return(0,i.jsx)("section",{className:(0,a.Z)("row",n),children:r.map((e,t)=>(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(g,{item:e})},t))})}},633876:function(e,t,n){n.d(t,{c:function(){return l}});var i=n(667294),a=n(49931);let o=["zero","one","two","few","many","other"];function r(e){return o.filter(t=>e.includes(t))}let s={locale:"en",pluralForms:r(["one","other"]),select:e=>1===e?"one":"other"};function l(){let e=function(){let{i18n:{currentLocale:e}}=(0,a.Z)();return(0,i.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:r(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),s}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let i=e.split("|");if(1===i.length)return i[0];i.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);let a=n.select(t);return i[Math.min(n.pluralForms.indexOf(a),i.length-1)]})(n,t,e)}}},250065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return r}});var i=n(667294);let a={},o=i.createContext(a);function r(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
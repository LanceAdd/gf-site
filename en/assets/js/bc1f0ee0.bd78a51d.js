"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["84907"],{45501:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>c,default:()=>m,assets:()=>l,toc:()=>u,frontMatter:()=>s});var o=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u914D\u7F6E\u7BA1\u7406/\u914D\u7F6E\u7BA1\u7406","title":"Configuration","description":"The configuration management component gcfg of the GoFrame framework, which supports concurrent safe operations, provides a file system interface implementation, supports various configuration file formats such as yaml, toml, json, etc., and allows reading environment variables or command line arguments when configuration items are missing, with features such as automatic detection of configuration file hot updates and singleton management.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u6838\u5FC3\u7EC4\u4EF6/\u914D\u7F6E\u7BA1\u7406/\u914D\u7F6E\u7BA1\u7406.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u914D\u7F6E\u7BA1\u7406","slug":"/docs/core/gcfg","permalink":"/en/docs/core/gcfg","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u914D\u7F6E\u7BA1\u7406/\u914D\u7F6E\u7BA1\u7406.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732716970000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/core/gcfg","title":"Configuration","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","GoFrame Framework","gcfg","Configuration Management","File System Interface","Configuration File Format","Environment Variables","Command Line Arguments","Hot Update Feature","Singleton Management Model"],"description":"The configuration management component gcfg of the GoFrame framework, which supports concurrent safe operations, provides a file system interface implementation, supports various configuration file formats such as yaml, toml, json, etc., and allows reading environment variables or command line arguments when configuration items are missing, with features such as automatic detection of configuration file hot updates and singleton management."},"sidebar":"mainSidebar","previous":{"title":"Command - Tracing","permalink":"/en/docs/core/gcmd-tracing"},"next":{"title":"Configuration - Object","permalink":"/en/docs/core/gcfg-cfg"}}'),i=t("785893"),r=t("250065"),a=t("203105");let s={slug:"/docs/core/gcfg",title:"Configuration",sidebar_position:3,hide_title:!0,keywords:["GoFrame","GoFrame Framework","gcfg","Configuration Management","File System Interface","Configuration File Format","Environment Variables","Command Line Arguments","Hot Update Feature","Singleton Management Model"],description:"The configuration management component gcfg of the GoFrame framework, which supports concurrent safe operations, provides a file system interface implementation, supports various configuration file formats such as yaml, toml, json, etc., and allows reading environment variables or command line arguments when configuration items are missing, with features such as automatic detection of configuration file hot updates and singleton management."},c=void 0,l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Features",id:"features",level:2},{value:"Precautions",id:"precautions",level:2},{value:"Documentation",id:"documentation",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"GoFrame"}),"'s configuration management is implemented by the ",(0,i.jsx)(n.code,{children:"gcfg"})," component, and all methods of the ",(0,i.jsx)(n.code,{children:"gcfg"})," component are concurrent safe. The ",(0,i.jsx)(n.code,{children:"gcfg"})," component adopts an interface-based design and provides a file system-based interface implementation by default."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/os/gcfg"\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Interface Documentation:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gcfg",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gcfg"})}),"\n",(0,i.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"gcfg"})," component has the following notable features:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Interface-based design, providing high flexibility and extensibility, with a default file system interface implementation"}),"\n",(0,i.jsxs)(n.li,{children:["Supports various common configuration file formats: ",(0,i.jsx)(n.code,{children:"yaml/toml/json/xml/ini/properties"})]}),"\n",(0,i.jsx)(n.li,{children:"Supports reading specified environment variables or command line arguments when configuration items do not exist"}),"\n",(0,i.jsx)(n.li,{children:"Supports retrieval and reading of configuration files from the resource management component"}),"\n",(0,i.jsx)(n.li,{children:"Supports automatic detection of hot update features for configuration files"}),"\n",(0,i.jsx)(n.li,{children:"Supports hierarchical access to configuration items"}),"\n",(0,i.jsx)(n.li,{children:"Supports a singleton management model"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"precautions",children:"Precautions"}),"\n",(0,i.jsxs)(n.p,{children:["The framework's configuration component supports a variety of common data formats, but the subsequent example code will be demonstrated using the ",(0,i.jsx)(n.code,{children:"yaml"})," data format. In use, feel free to use the data format of your choice ",(0,i.jsxs)(n.strong,{children:["without being restricted to the ",(0,i.jsx)(n.code,{children:"yaml"})," data format used in the official examples"]}),". For example, if the business project template provides a ",(0,i.jsx)(n.code,{children:"config.yaml"})," configuration file template (because the default template can only provide one), you can also directly modify it to ",(0,i.jsx)(n.code,{children:"config.toml"})," or ",(0,i.jsx)(n.code,{children:"config.ini"})," and other supported data formats, ",(0,i.jsx)(n.strong,{children:"the configuration component can also automatically recognize and read based on the file name suffix"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n","\n",(0,i.jsx)(a.Z,{})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},203105:function(e,n,t){t.d(n,{Z:()=>j});var o=t("785893");t("667294");var i=t("467026"),r=t("96693"),a=t("531183"),s=t("633876"),c=t("266026"),l=t("434751"),u=t("58608");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:n,children:t}=e;return(0,o.jsx)(a.Z,{href:n,className:(0,i.Z)("card padding--lg",d.cardContainer),children:t})}function f(e){let{href:n,icon:t,title:r,description:a}=e;return(0,o.jsxs)(m,{href:n,children:[(0,o.jsxs)(u.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:r,children:[t," ",r]}),a&&(0,o.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:a,children:a})]})}function g(e){let{item:n}=e,t=(0,r.LM)(n),i=function(){let{selectMessage:e}=(0,s.c)();return n=>e(n,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,o.jsx)(f,{href:t,icon:"\uD83D\uDDC3\uFE0F",title:n.label,description:n.description??i(n.items.length)}):null}function h(e){let{item:n}=e,t=(0,c.Z)(n.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",i=(0,r.xz)(n.docId??void 0);return(0,o.jsx)(f,{href:n.href,icon:t,title:n.label,description:n.description??i?.description})}function p(e){let{item:n}=e;switch(n.type){case"link":return(0,o.jsx)(h,{item:n});case"category":return(0,o.jsx)(g,{item:n});default:throw Error(`unknown item type ${JSON.stringify(n)}`)}}function x(e){let{className:n}=e,t=(0,r.jA)();return(0,o.jsx)(j,{items:t.items,className:n})}function j(e){let{items:n,className:t}=e;if(!n)return(0,o.jsx)(x,{...e});let a=(0,r.MN)(n);return(0,o.jsx)("section",{className:(0,i.Z)("row",t),children:a.map((e,n)=>(0,o.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,o.jsx)(p,{item:e})},n))})}},633876:function(e,n,t){t.d(n,{c:function(){return c}});var o=t(667294),i=t(49931);let r=["zero","one","two","few","many","other"];function a(e){return r.filter(n=>e.includes(n))}let s={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,i.Z)();return(0,o.useMemo)(()=>{try{return function(e){let n=new Intl.PluralRules(e);return{locale:e,pluralForms:a(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${n.message}
`),s}},[e])}();return{selectMessage:(n,t)=>(function(e,n,t){let o=e.split("|");if(1===o.length)return o[0];o.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);let i=t.select(n);return o[Math.min(t.pluralForms.indexOf(i),o.length-1)]})(t,n,e)}}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return a}});var o=t(667294);let i={},r=o.createContext(i);function a(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);
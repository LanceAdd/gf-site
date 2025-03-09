"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["54930"],{729376:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>s,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>o});var r=JSON.parse('{"id":"release/\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v1.x/v1.16 2021-06-01","title":"v1.16 2021-06-01","description":"GoFrame v1.16 version is newly released, introducing full tracing features, with multiple improvements such as database ORM model association, nested transactions, subqueries, and more. The HTTP client has a middleware interceptor added, the data validation component supports enhanced Context and I18N, the timer component is newly restructured, and there are many code optimizations.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/release/\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v1.x/v1.16 2021-06-01.md","sourceDirName":"release/\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v1.x","slug":"/release/v1.16.0","permalink":"/en/release/v1.16.0","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/release/\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v1.x/v1.16 2021-06-01.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732541616000,"sidebarPosition":0,"frontMatter":{"slug":"/release/v1.16.0","title":"v1.16 2021-06-01","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","GoFrame framework","Golang","Full tracing","Database ORM","HTTP client","Data validation","Timer component","Error stack","Development toolchain"],"description":"GoFrame v1.16 version is newly released, introducing full tracing features, with multiple improvements such as database ORM model association, nested transactions, subqueries, and more. The HTTP client has a middleware interceptor added, the data validation component supports enhanced Context and I18N, the timer component is newly restructured, and there are many code optimizations."},"sidebar":"releaseSidebar","previous":{"title":"Historical Version v1.x","permalink":"/en/release/v1.x"},"next":{"title":"v1.15 2020-12-31","permalink":"/en/release/v1.15.0"}}'),t=i("785893"),d=i("250065");let o={slug:"/release/v1.16.0",title:"v1.16 2021-06-01",sidebar_position:0,hide_title:!0,keywords:["GoFrame","GoFrame framework","Golang","Full tracing","Database ORM","HTTP client","Data validation","Timer component","Error stack","Development toolchain"],description:"GoFrame v1.16 version is newly released, introducing full tracing features, with multiple improvements such as database ORM model association, nested transactions, subqueries, and more. The HTTP client has a middleware interceptor added, the data validation component supports enhanced Context and I18N, the timer component is newly restructured, and there are many code optimizations."},s=void 0,a={},c=[{value:"Important Features",id:"important-features",level:2},{value:"Functionality Improvements",id:"functionality-improvements",level:2},{value:"Development Toolchain",id:"development-toolchain",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Hello"}),", everyone! You've been waiting! It's been just six months since the last release, and many things have happened in this half-year. Schr\xf6dinger's cat determines different outcomes for the kitten by different means of observation, and similarly, the way we view the world shapes how the world appears to us. This time we bring you the latest ",(0,t.jsx)(n.code,{children:"GoFrame v1.16"})," version! ",(0,t.jsx)(n.code,{children:"GoFrame"})," is a modular, high-performance, enterprise-grade ",(0,t.jsx)(n.code,{children:"Go"})," foundational development framework: ",(0,t.jsx)(n.a,{href:"https://wiki.goframe.org",children:"https://goframe.org"}),", a low-key, pragmatic enterprise-grade ",(0,t.jsx)(n.code,{children:"Golang"})," development framework in the true sense! This update includes numerous new features and enhancements, especially full tracing, ",(0,t.jsx)(n.code,{children:"ORM"})," model association/nested transactions/subqueries/dozens of new methods, ",(0,t.jsx)(n.code,{children:"HTTP"})," client interceptor, data validation and ",(0,t.jsx)(n.code,{children:"I18N"})," enhancements, refactored timer, and more. There are a lot of updates this time, below are the major updates, hope you like them! ",(0,t.jsx)(n.code,{children:"Enjoy!"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(485559).Z+"",width:"1920",height:"1003"})}),"\n",(0,t.jsx)(n.p,{children:"This documentation has been extensively updated, with the total development documentation now containing over 200,000 words. It is recommended to read according to the official directory structure."}),"\n",(0,t.jsx)(n.h2,{id:"important-features",children:"Important Features"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["The framework introduces ",(0,t.jsx)(n.strong,{children:"full tracing"}),", adopting the ",(0,t.jsx)(n.code,{children:"OpenTelemetry"})," standard, currently integrating ",(0,t.jsx)(n.code,{children:"HTTP Client&Server/GRPC Client&Server/ORM/Redis/Logging"})," components. For detailed introduction, please refer to the sections:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/en/docs/obs/tracing-example",children:"Tracing - Basic Example"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/en/docs/obs/tracing-http-example",children:"Tracing - HTTP Example"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/en/docs/obs/tracing-grpc-example",children:"Tracing - GRPC Example"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["The core database components have added the following features:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Model Association"}),":","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/en/docs/core/gdb-chaining-relation-scan-list",children:"Model Association - ScanList"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/en/docs/core/gdb-chaining-relation-with",children:"Model Association - With"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Nested Transactions"}),": ",(0,t.jsx)(n.a,{href:"/en/docs/core/gdb-transaction",children:"ORM - Transaction"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Subquery"})," feature: ",(0,t.jsx)(n.a,{href:"/en/docs/core/gdb-chaining-query-sub-query",children:"Model Query - Subquery"})]}),"\n",(0,t.jsxs)(n.li,{children:["Added ",(0,t.jsx)(n.strong,{children:"dozens"})," of ORM model operation methods (referencing ",(0,t.jsx)(n.code,{children:"PHP Laravel"}),"), it is highly recommended for those using ",(0,t.jsx)(n.code,{children:"goframe"})," to take a look:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/en/docs/core/gdb-chaining",children:"ORM - Model \uD83D\uDD25"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/en/docs/core/gdb-chaining-insert-save",children:"ORM Model - Insert/Save"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/en/docs/core/gdb-chaining-update-delete",children:"ORM Model - Update/Delete"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/en/docs/core/gdb-chaining-query",children:"ORM Model - Query"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["HTTP ",(0,t.jsx)(n.strong,{children:"client adds middleware interceptor"})," functionality, for details, please refer to the section: ",(0,t.jsx)(n.a,{href:"/en/docs/web/http-client-middleware",children:"HTTPClient - Middleware"})]}),"\n",(0,t.jsxs)(n.li,{children:["Extensive improvements to the data validation component:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Added chain operation verification objects: ",(0,t.jsx)(n.a,{href:"/en/docs/core/gvalid-validator",children:"Data Validation - Object"})]}),"\n",(0,t.jsxs)(n.li,{children:["Added support for ",(0,t.jsx)(n.code,{children:"Context"}),", and enhanced support for powerful ",(0,t.jsx)(n.code,{children:"I18N"})," international error information management. For details, please refer to the sections:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/en/docs/core/gi18n",children:"I18N"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/en/docs/core/gvalid-custom-validating-message",children:"Data Validation - Error Msg"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Custom validation rules have been improved, with added features for local validation rule registration and full data validation: ",(0,t.jsx)(n.a,{href:"/en/docs/core/gvalid-custom-rules",children:"Data Validation - Custom"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["The timer component ",(0,t.jsx)(n.code,{children:"gtimer"})," is fully restructured, removing the ",(0,t.jsx)(n.code,{children:"TimingWheel"})," implementation and adopting a more robust ",(0,t.jsx)(n.code,{children:"PriorityQueue"})," improved implementation. For details, refer to the section: ",(0,t.jsx)(n.a,{href:"/en/docs/components/os-gtimer",children:"Timer"})]}),"\n",(0,t.jsx)(n.li,{children:"The framework's core foundational components have added a full error stack feature, allowing complete retrieval of error stack information for related components in the event of an error. This feature is only available in a well-designed, comprehensive foundational component framework."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"functionality-improvements",children:"Functionality Improvements"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ORM"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Added full tracing context ",(0,t.jsx)(n.code,{children:"Context"})," parameter passing: ",(0,t.jsx)(n.a,{href:"/en/docs/core/gdb-context",children:"ORM - Context"})," During tracing, it will record ",(0,t.jsx)(n.code,{children:"SQL"})," and database connection information (excluding sensitive configurations), and the component tracing information can be configured to be turned off."]}),"\n",(0,t.jsxs)(n.li,{children:["Further improved the ",(0,t.jsx)(n.code,{children:"ORM"})," component logging, which is only valid in debug mode. For detailed introduction, refer to the section: ",(0,t.jsx)(n.a,{href:"/en/docs/core/gdb-senior",children:"ORM - Senior Features"})]}),"\n",(0,t.jsxs)(n.li,{children:["Added dozens of ",(0,t.jsx)(n.code,{children:"ORM"})," model operation methods referencing ",(0,t.jsx)(n.code,{children:"PHP Laravel"}),", such as ",(0,t.jsx)(n.code,{children:"InsertAndGetId"}),", ",(0,t.jsx)(n.code,{children:"Min/Max/Avg/Sum"}),", ",(0,t.jsx)(n.code,{children:"Increment/Decrement"}),", ",(0,t.jsx)(n.code,{children:"WhereBetween/WhereLike/WhereIn/WhereNull"}),", ",(0,t.jsx)(n.code,{children:"OrderAsc/OrderDesc/OrderRandom"}),", etc. It is highly recommended for those using ",(0,t.jsx)(n.code,{children:"goframe"})," to take a look, for details, refer to the section:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/en/docs/core/gdb-chaining",children:"ORM - Model \uD83D\uDD25"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/en/docs/core/gdb-chaining-insert-save",children:"ORM Model - Insert/Save"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/en/docs/core/gdb-chaining-update-delete",children:"ORM Model - Update/Delete"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/en/docs/core/gdb-chaining-query",children:"ORM Model - Query"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["In the new version, the database ",(0,t.jsx)(n.code,{children:"ORM"})," chain operation has enabled field filtering by default. Parameters that cannot be intelligently matched with table fields will be automatically filtered. For details, refer to the section: ",(0,t.jsx)(n.a,{href:"/en/docs/core/gdb-chaining-fields-filtering",children:"ORM Model - Fields Filtering"})]}),"\n",(0,t.jsxs)(n.li,{children:["Improved the conversion of ",(0,t.jsx)(n.code,{children:"pgsql"})," database type ",(0,t.jsx)(n.code,{children:"int8"})," to ",(0,t.jsx)(n.code,{children:"Golang"})," type, from ",(0,t.jsx)(n.code,{children:"int"})," type adjusted to ",(0,t.jsx)(n.code,{children:"int64"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Extensive refactoring and improvement work have been done, too detailed to describe each. The key result is richer component functionality, more rigorous code, simpler design, and easier use."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"HTTP"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"HTTP Client"})," adds middleware interceptor functionality: ",(0,t.jsx)(n.a,{href:"/en/docs/web/http-client-middleware",children:"HTTPClient - Middleware"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"HTTP Client&Server"})," adds tracing support: ",(0,t.jsx)(n.a,{href:"/en/docs/obs/tracing-http-example",children:"Tracing - HTTP Example"})]}),"\n",(0,t.jsxs)(n.li,{children:["The client request method in the ",(0,t.jsx)(n.code,{children:"ghttp"})," package is marked deprecated, and will be unified to use the ",(0,t.jsx)(n.code,{children:"HTTP Client"})," object in the future."]}),"\n",(0,t.jsxs)(n.li,{children:["Improved the data validation of ",(0,t.jsx)(n.code,{children:"Request.Parse"})," method, directly validating submitted parameters instead of the ",(0,t.jsx)(n.code,{children:"struct"})," object converted from data: ",(0,t.jsx)(n.a,{href:"/en/docs/web/request-validation",children:"Request - Validation"})]}),"\n",(0,t.jsxs)(n.li,{children:["Added ",(0,t.jsx)(n.code,{children:"WrapF/WrapH"})," methods to convert standard library ",(0,t.jsx)(n.code,{children:"http.HandlerFunc/http.Handler"})," to service method types supported by ",(0,t.jsx)(n.code,{children:"ghttp.Server"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Numerous other improvements, with many details. The key outcome is richer component functionality, more rigorous code, and easier use."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"gvalid"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"Check"})," method name is changed to ",(0,t.jsx)(n.code,{children:"CheckValue"}),", for details, refer to the section: ",(0,t.jsx)(n.a,{href:"/en/docs/core/gvalid-parameter-type-basic",children:"Data Type - Value"})]}),"\n",(0,t.jsxs)(n.li,{children:["Added ",(0,t.jsx)(n.code,{children:"CheckStructWithData"})," method to validate the ",(0,t.jsx)(n.code,{children:"struct"})," object of specified parameters: ",(0,t.jsx)(n.a,{href:"/en/docs/core/gvalid-parameter-type-struct-example",children:"Struct Validation - Example"})]}),"\n",(0,t.jsxs)(n.li,{children:["Added ",(0,t.jsx)(n.code,{children:"Validator"})," validation object for convenient chain operation, allowing further expansion later: ",(0,t.jsx)(n.a,{href:"/en/docs/core/gvalid-validator",children:"Data Validation - Object"})]}),"\n",(0,t.jsxs)(n.li,{children:["Custom rule method definitions now include ",(0,t.jsx)(n.code,{children:"Context"})," variables and added ",(0,t.jsx)(n.code,{children:"RuleFunc"})," and ",(0,t.jsx)(n.code,{children:"RuleFuncMap"})," local validation rule registration methods: ",(0,t.jsx)(n.a,{href:"/en/docs/core/gvalid-custom-rules",children:"Data Validation - Custom"})]}),"\n",(0,t.jsxs)(n.li,{children:["Validation methods have added ",(0,t.jsx)(n.code,{children:"Context"})," parameter support, and improved to support powerful ",(0,t.jsx)(n.code,{children:"I18N"})," international error information management capabilities:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/en/docs/core/gi18n",children:"I18N"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/en/docs/core/gvalid-custom-validating-message",children:"Data Validation - Error Msg"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Error"})," object is modified to interface implementation, note that previous usage with ",(0,t.jsx)(n.code,{children:"*Error"})," pointer will result in errors."]}),"\n",(0,t.jsx)(n.li,{children:"Some other detail improvements."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"gcache"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Added ",(0,t.jsx)(n.code,{children:"Ctx"})," chain operation method for context parameter input, for details, refer to the section: ",(0,t.jsx)(n.a,{href:"/en/docs/core/gcache",children:"Caching"})]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"Adapter"})," interface adds ",(0,t.jsx)(n.code,{children:"Context"})," parameter input, facilitating context parameter passing, and improved adapters in built-in implementation supporting context parameter passing: ",(0,t.jsx)(n.a,{href:"/en/docs/core/gcache-interface",children:"Caching - Interface"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"gredis"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Added support for tracing, for details, refer to the section: Redis-Context"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"gjson"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"Option"})," type name was changed to ",(0,t.jsx)(n.code,{children:"Options"}),", this is a breaking change."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"NewWithOption"})," method name was changed to ",(0,t.jsx)(n.code,{children:"NewWithOptions"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"gcmd"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Added ",(0,t.jsx)(n.code,{children:"GetOptWithEnv"})," method and marked ",(0,t.jsx)(n.code,{children:"GetWithEnv"})," method as deprecated."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"glog"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Added tracing support based on the ",(0,t.jsx)(n.code,{children:"OpenTelemetry"})," standard: ",(0,t.jsx)(n.a,{href:"/en/docs/core/glog-context",children:"Logging - Context"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"gproc"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Added unified signal registration listening callback feature: ",(0,t.jsx)(n.a,{href:"/en/docs/components/os-gproc-signal",children:"Process - Signal"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"gres"})}),"\n",(0,t.jsxs)(n.li,{children:["Best practices for resource management can be found here: ",(0,t.jsx)(n.a,{href:"/en/docs/core/gres-practice",children:"Resource - Best Practices"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"gtimer"})}),"\n",(0,t.jsxs)(n.li,{children:["Timer component ",(0,t.jsx)(n.code,{children:"gtimer"})," is fully restructured, removing the ",(0,t.jsx)(n.code,{children:"TimingWheel"})," implementation, and adopting a more robust ",(0,t.jsx)(n.code,{children:"PriorityQueue"})," improved implementation. Details can be found here: ",(0,t.jsx)(n.a,{href:"/en/docs/components/os-gtimer",children:"Timer"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"gview"})}),"\n",(0,t.jsxs)(n.li,{children:["All template parsing methods added a ",(0,t.jsx)(n.code,{children:"Context"})," parameter input: ",(0,t.jsx)(n.a,{href:"/en/docs/core/gview",children:"Template Engine"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"gconv"})}),"\n",(0,t.jsxs)(n.li,{children:["Improved ",(0,t.jsx)(n.code,{children:"Scan"})," method by adding automatic conversion support for ",(0,t.jsx)(n.code,{children:"Map/Maps"})," parameter types: ",(0,t.jsx)(n.a,{href:"/en/docs/core/gconv-scan",children:"Type Conversion - Scan"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"gi18n"})}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"I18N"})," internationalization component adds support for ",(0,t.jsx)(n.code,{children:"Context"}),", for details, refer to the section: ",(0,t.jsx)(n.a,{href:"/en/docs/core/gi18n",children:"I18N"})]}),"\n",(0,t.jsxs)(n.li,{children:["Note that all methods now have a ",(0,t.jsx)(n.code,{children:"ctx"})," parameter input, and some methods have removed the ",(0,t.jsx)(n.code,{children:"language"})," parameter, instead controlled by ",(0,t.jsx)(n.code,{children:"ctx"})," to input ",(0,t.jsx)(n.code,{children:"language"}),", enhancing extensibility: ",(0,t.jsx)(n.a,{href:"/en/docs/core/gi18n-example",children:"I18N - Example"})]}),"\n",(0,t.jsxs)(n.li,{children:["Removed ",(0,t.jsx)(n.code,{children:"TranslateFormatLang"})," and ",(0,t.jsx)(n.code,{children:"Tfl"})," methods."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"gmeta"})}),"\n",(0,t.jsxs)(n.li,{children:["Newly added ",(0,t.jsx)(n.code,{children:"gmeta"})," metadata package, for details, refer to the section: ",(0,t.jsx)(n.a,{href:"/en/docs/components/util-gmeta",children:"Metadata"})]}),"\n",(0,t.jsx)(n.li,{children:"Other detailed improvements in various components, not necessary to specifically detail in the release documentation."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"development-toolchain",children:"Development Toolchain"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"CLI"})," tools have been updated, mainly simplifying ",(0,t.jsx)(n.code,{children:"dao"})," model code generation, eliminating redundant method generation, and removing methods that directly return model objects. The ",(0,t.jsx)(n.code,{children:"dao"})," object is modified to directly inherit the ",(0,t.jsx)(n.code,{children:"GoFrame ORM"})," component's ",(0,t.jsx)(n.code,{children:"Model"})," object, accepting query data through the specified model, hence the ways of using some methods may require adjustments."]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},485559:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/86fedaae17d9c3ed7be8d93a1f31d5bd-bf503eb828f9a07cbfe2a5a34c79699f.png"},250065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return o}});var r=i(667294);let t={},d=r.createContext(t);function o(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);
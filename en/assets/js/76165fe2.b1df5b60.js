"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["75073"],{456588:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>o});var i=JSON.parse('{"id":"release/\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v0.x/v0.2 2018-05-21","title":"v0.2 2018-05-21","description":"This version v0.2 includes multiple new features and updates, such as the graceful restart feature for the GoFrame framework, the gflock file lock module, the gproc process management module, and the powerful gpage pagination management module. Additionally, new features include multi-port listening for ghttp.Server and the gspath directory search tool. Function improvements cover enhanced gredis client, performance optimization of gdb methods, and enhanced request logging in the ghttp package. Various issue fixes ensure the stability and reliability of the GoFrame framework.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/release/\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v0.x/v0.2 2018-05-21.md","sourceDirName":"release/\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v0.x","slug":"/release/v0.2.0","permalink":"/en/release/v0.2.0","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/release/\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v0.x/v0.2 2018-05-21.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732411910000,"sidebarPosition":1,"frontMatter":{"slug":"/release/v0.2.0","title":"v0.2 2018-05-21","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","GoFrame framework","v0.2","graceful restart","gflock","gproc","gpage","ghttp","gdb","function improvement"],"description":"This version v0.2 includes multiple new features and updates, such as the graceful restart feature for the GoFrame framework, the gflock file lock module, the gproc process management module, and the powerful gpage pagination management module. Additionally, new features include multi-port listening for ghttp.Server and the gspath directory search tool. Function improvements cover enhanced gredis client, performance optimization of gdb methods, and enhanced request logging in the ghttp package. Various issue fixes ensure the stability and reliability of the GoFrame framework."},"sidebar":"releaseSidebar","previous":{"title":"v0.3 2018-08-07","permalink":"/en/release/v0.3.0"},"next":{"title":"v0.1 2018-04-23","permalink":"/en/release/v0.1.0"}}'),r=t("785893"),s=t("250065");let o={slug:"/release/v0.2.0",title:"v0.2 2018-05-21",sidebar_position:1,hide_title:!0,keywords:["GoFrame","GoFrame framework","v0.2","graceful restart","gflock","gproc","gpage","ghttp","gdb","function improvement"],description:"This version v0.2 includes multiple new features and updates, such as the graceful restart feature for the GoFrame framework, the gflock file lock module, the gproc process management module, and the powerful gpage pagination management module. Additionally, new features include multi-port listening for ghttp.Server and the gspath directory search tool. Function improvements cover enhanced gredis client, performance optimization of gdb methods, and enhanced request logging in the ghttp package. Various issue fixes ensure the stability and reliability of the GoFrame framework."},a=void 0,l={},d=[{value:"New Features",id:"new-features",level:3},{value:"New Functions",id:"new-functions",level:3},{value:"Function Improvements",id:"function-improvements",level:3},{value:"Issue Fixes",id:"issue-fixes",level:3}];function c(e){let n={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"new-features",children:"New Features"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Graceful restart feature (",(0,r.jsx)(n.a,{href:"http://gf.johng.cn/625833",children:"http://gf.johng.cn/625833"}),");"]}),"\n",(0,r.jsxs)(n.li,{children:["gflock file lock module (",(0,r.jsx)(n.a,{href:"http://gf.johng.cn/626062",children:"http://gf.johng.cn/626062"}),");"]}),"\n",(0,r.jsxs)(n.li,{children:["gproc process management and communication module (",(0,r.jsx)(n.a,{href:"http://gf.johng.cn/626063",children:"http://gf.johng.cn/626063"}),");"]}),"\n",(0,r.jsxs)(n.li,{children:["gpage pagination management module, with powerful dynamic and static pagination features, and high flexibility for developers to customize pagination styles (",(0,r.jsx)(n.a,{href:"http://gf.johng.cn/597431",children:"http://gf.johng.cn/597431"}),");"]}),"\n",(0,r.jsxs)(n.li,{children:["ghttp.Server adds multi-port listening feature and supports HTTP/HTTPS (",(0,r.jsx)(n.a,{href:"http://gf.johng.cn/494366",children:"http://gf.johng.cn/494366"}),", ",(0,r.jsx)(n.a,{href:"http://gf.johng.cn/598802",children:"http://gf.johng.cn/598802"}),");"]}),"\n",(0,r.jsx)(n.li,{children:"Added gspath directory search package management tool, supporting file search features across multiple directories;"}),"\n",(0,r.jsxs)(n.li,{children:["ghttp package controller and execution object registration adds more flexible dynamic routing features, with added support for ",(0,r.jsx)(n.code,{children:"{method}"})," variable in routing rules;"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"new-functions",children:"New Functions"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"gutil package adds MapToStruct method, supporting mapping of map data types to struct objects;"}),"\n",(0,r.jsxs)(n.li,{children:["gconv","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"gconv package adds type conversion based on type name strings;"}),"\n",(0,r.jsx)(n.li,{children:"gconv package adds Time/TimeDuration type conversion methods;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["ghttp","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Adds WebServer directory security access control mechanism;"}),"\n",(0,r.jsx)(n.li,{children:"ghttp.Server adds custom status code callback function registration handling;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["gdb","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"gdb package adds gdb.GetStruct/gdb.Model.Struct methods for automatic conversion of query result records to specified objects;"}),"\n",(0,r.jsx)(n.li,{children:"gdb adds Value/Record/Result types and a series of type conversion methods for Value type;"}),"\n",(0,r.jsx)(n.li,{children:"gdb package adds db.GetCount, tx.GetCount, model.Count count query methods;"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"function-improvements",children:"Function Improvements"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Improved gredis client function encapsulation;"}),"\n",(0,r.jsx)(n.li,{children:"Improved performance of grand package random number generation;"}),"\n",(0,r.jsx)(n.li,{children:"Added benchmark performance testing scripts for grand/gdb/gredis packages;"}),"\n",(0,r.jsx)(n.li,{children:"Improved implementation of ToStruct method in gjson/gparser packages;"}),"\n",(0,r.jsx)(n.li,{children:"gdb: Improved performance of gdb.New in obtaining ORM operation objects;"}),"\n",(0,r.jsx)(n.li,{children:"gcfg: Improved configuration file retrieval function;"}),"\n",(0,r.jsx)(n.li,{children:"gview: Template engine adds multiple directory search capabilities;"}),"\n",(0,r.jsx)(n.li,{children:"gfile: Adds method MainPkgPath to obtain source main package directory;"}),"\n",(0,r.jsxs)(n.li,{children:["ghttp","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ghttp.Request adds logging of request entry and completion times, including these in default log content;"}),"\n",(0,r.jsx)(n.li,{children:"ghttp.Server event callbacks support parameter passing through ghttp.Request.Param with custom parameters;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["gdb","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Improved type conversion between gdb.Result and gdb.List, gdb.Record, and gdb.Map for easier data encoding processing (like json/xml) at the business layer;"}),"\n",(0,r.jsx)(n.li,{children:"Improved return type for gdb.Tx.GetValue;"}),"\n",(0,r.jsx)(n.li,{children:"gdb.Model.Data parameter supports more flexible map parameters;"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"issue-fixes",children:"Issue Fixes"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["ghttp","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed caching issue in ghttp package routing;"}),"\n",(0,r.jsx)(n.li,{children:"Fixed controller and execution object method loss issue during service registration;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["gconv","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Corrected bit size setting issue in gconv.Float64 method;"}),"\n",(0,r.jsx)(n.li,{children:"Fixed issue with gconv.Int64(float64(xxx));"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["gdb","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed issue with gdb.GetAll where for..range.. returns slice with same pointer for returned data list;"}),"\n",(0,r.jsx)(n.li,{children:"Fixed error in gdb.Delete method;"}),"\n",(0,r.jsx)(n.li,{children:"Fixed gdb.Model.And/Or method;"}),"\n",(0,r.jsx)(n.li,{children:"Fixed parameter handling issue in gdb.Model.Where method;"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"garray: Fixed lock mechanism issue with garray package Remove method;"}),"\n",(0,r.jsx)(n.li,{children:"gtype: Fixed logical error in methods of gtype.Float32/gtype.Float64 object types;"}),"\n",(0,r.jsx)(n.li,{children:"gfsnotify: Fixed issue of hot update mechanism failure caused by different file separators in file parameters on Windows;"}),"\n",(0,r.jsx)(n.li,{children:"Fixed gvalid package validation issue: if value is nil and require* validation is not needed, other validations would fail. Added unit test items, all tests passed."}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var i=t(667294);let r={},s=i.createContext(r);function o(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
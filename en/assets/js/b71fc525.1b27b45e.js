"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["81922"],{586501:function(e,i,t){t.r(i),t.d(i,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>l,frontMatter:()=>c});var r=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/\u9759\u6001\u6587\u4EF6\u670D\u52A1","title":"Static File Service","description":"Learn how to configure and use static file services in the GoFrame framework, including setting up static file directories, enabling static file service conditions, mapping URIs to static directories, customizing URI rewrite rules, and cross-origin configuration examples, to help developers effectively manage and optimize static resource access in their projects.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/\u9759\u6001\u6587\u4EF6\u670D\u52A1.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027","slug":"/docs/web/senior-static-server","permalink":"/en/docs/web/senior-static-server","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/\u9759\u6001\u6587\u4EF6\u670D\u52A1.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732411910000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/web/senior-static-server","title":"Static File Service","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","Static File Service","Static File Configuration","File Service Enablement","Static File Directory","Static File Mapping","URI Rewrite","Cross-Origin Support","Static Directory Priority","Directory Listing"],"description":"Learn how to configure and use static file services in the GoFrame framework, including setting up static file directories, enabling static file service conditions, mapping URIs to static directories, customizing URI rewrite rules, and cross-origin configuration examples, to help developers effectively manage and optimize static resource access in their projects."},"sidebar":"mainSidebar","previous":{"title":"Advanced Features","permalink":"/en/docs/web/senior"},"next":{"title":"Logging","permalink":"/en/docs/web/senior-logging"}}'),n=t("785893"),s=t("250065");let c={slug:"/docs/web/senior-static-server",title:"Static File Service",sidebar_position:0,hide_title:!0,keywords:["GoFrame","Static File Service","Static File Configuration","File Service Enablement","Static File Directory","Static File Mapping","URI Rewrite","Cross-Origin Support","Static Directory Priority","Directory Listing"],description:"Learn how to configure and use static file services in the GoFrame framework, including setting up static file directories, enabling static file service conditions, mapping URIs to static directories, customizing URI rewrite rules, and cross-origin configuration examples, to help developers effectively manage and optimize static resource access in their projects."},o=void 0,a={},l=[{value:"Static File Service Configuration",id:"static-file-service-configuration",level:2},{value:"Example 1, Basic Usage",id:"example-1-basic-usage",level:2},{value:"Example 2, Static Directory Mapping",id:"example-2-static-directory-mapping",level:2},{value:"Example 3, Static Directory Mapping, Priority Control",id:"example-3-static-directory-mapping-priority-control",level:2},{value:"Example 4, URI Rewrite",id:"example-4-uri-rewrite",level:2},{value:"Example 5, Cross-Origin",id:"example-5-cross-origin",level:2}];function d(e){let i={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"static-file-service-configuration",children:"Static File Service Configuration"}),"\n",(0,n.jsxs)(i.p,{children:["By default, the ",(0,n.jsx)(i.code,{children:"GoFrame Server"})," disables the static file service feature. If the developer configures a ",(0,n.jsx)(i.strong,{children:"static file directory"}),", the static file service will be automatically enabled."]}),"\n",(0,n.jsx)(i.p,{children:"Common configuration methods involving the static file service are as follows:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-go",children:"// Set HTTP server parameter - ServerRoot\nfunc (s *Server) SetServerRoot(root string)\n\n// Add static file search directories; the absolute path of the directory must be specified\nfunc (s *Server) AddSearchPath(path string)\n\n// Set HTTP server parameter - IndexFiles, default displayed files, such as: index.html, index.htm\nfunc (s *Server) SetIndexFiles(index []string)\n\n// Allow or disallow displaying the directory listing of accessible directories\nfunc (s *Server) SetIndexFolder(enabled bool)\n\n// Add mapping of URI to static directory\nfunc (s *Server) AddStaticPath(prefix string, path string)\n\n// Main switch for static file service: enable/disable static file service\nfunc (s *Server) SetFileServerEnabled(enabled bool)\n\n// Set URI rewrite rule\nfunc (s *Server) SetRewrite(uri string, rewrite string)\n\n// Set URI rewrite rules (batch)\nfunc (s *Server) SetRewriteMap(rewrites map[string]string)\n"})}),"\n",(0,n.jsx)(i.p,{children:"Brief introduction:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"IndexFiles"})," is the list of default file names searched when accessing directories (searched in the order of the slice). If the searched file exists, the file content is returned; otherwise, the directory listing is displayed (when ",(0,n.jsx)(i.code,{children:"SetIndexFolder"})," is ",(0,n.jsx)(i.code,{children:"true"}),"). The default ",(0,n.jsx)(i.code,{children:"IndexFiles"})," are: ",(0,n.jsx)(i.code,{children:"index.html, index.htm"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"SetIndexFolder"})," is set to allow displaying the file list in the directory when users access a file directory and no ",(0,n.jsx)(i.code,{children:"IndexFiles"})," are found in the directory. It is disabled by default."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"SetServerRoot"})," sets the default static file directory for services. This directory is automatically added as the first search path in ",(0,n.jsx)(i.code,{children:"SearchPath"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"AddSearchPath"})," adds static file search directories, which can be multiple, and priority searches are performed in the order of added file directories."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"AddStaticPath"})," adds mapping relationships between ",(0,n.jsx)(i.code,{children:"URI"})," and directory paths, allowing customization of static file directory access URI rules."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"SetRewrite"}),"/",(0,n.jsx)(i.code,{children:"SetRewriteMap"})," sets rewrite rules (similar to ",(0,n.jsx)(i.code,{children:"nginx"})," ",(0,n.jsx)(i.code,{children:"rewrite"}),"), which technically apply not only to static file services but also support dynamic route registration ",(0,n.jsx)(i.code,{children:"rewrite"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(i.admonition,{type:"tip",children:[(0,n.jsxs)(i.p,{children:["When setting the directory path for the static file service, you can use either absolute or relative paths. For example, to set the current running directory to provide static file services, use ",(0,n.jsx)(i.code,{children:'SetServerRoot(".")'}),"."]}),(0,n.jsxs)(i.p,{children:["Developers can set multiple file directories to provide static file services and prioritize directories and URIs. However, if the static service is disabled via ",(0,n.jsx)(i.code,{children:"SetFileServerEnabled"}),", all static file/directory access will become invalid."]})]}),"\n",(0,n.jsx)(i.h2,{id:"example-1-basic-usage",children:"Example 1, Basic Usage"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-go",children:'package main\n\nimport "github.com/gogf/gf/v2/frame/g"\n\n// Basic usage of static file server\nfunc main() {\n    s := g.Server()\n    s.SetIndexFolder(true)\n    s.SetServerRoot("/Users/john/Temp")\n    s.AddSearchPath("/Users/john/Documents")\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,n.jsx)(i.h2,{id:"example-2-static-directory-mapping",children:"Example 2, Static Directory Mapping"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-go",children:'package main\n\nimport "github.com/gogf/gf/v2/frame/g"\n\n// Static file server supports custom static directory mapping\nfunc main() {\n    s := g.Server()\n    s.SetIndexFolder(true)\n    s.SetServerRoot("/Users/john/Temp")\n    s.AddSearchPath("/Users/john/Documents")\n    s.AddStaticPath("/my-doc", "/Users/john/Documents")\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,n.jsx)(i.h2,{id:"example-3-static-directory-mapping-priority-control",children:"Example 3, Static Directory Mapping, Priority Control"}),"\n",(0,n.jsxs)(i.p,{children:["The priority of static directory mapping is controlled according to the precision of the bound ",(0,n.jsx)(i.code,{children:"URI"}),". The more precise the bound URI (depth-first matching), the higher the priority."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-go",children:'package main\n\nimport "github.com/gogf/gf/v2/frame/g"\n\n// Static file server supports custom static directory mapping\nfunc main() {\n    s := g.Server()\n    s.SetIndexFolder(true)\n    s.SetServerRoot("/Users/john/Temp")\n    s.AddSearchPath("/Users/john/Documents")\n    s.AddStaticPath("/my-doc", "/Users/john/Documents")\n    s.AddStaticPath("/my-doc/test", "/Users/john/Temp")\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,n.jsxs)(i.p,{children:["Here, accessing ",(0,n.jsx)(i.code,{children:"/my-doc/test"})," has a higher priority than ",(0,n.jsx)(i.code,{children:"/my-doc"}),". Therefore, if there is a ",(0,n.jsx)(i.code,{children:"test"})," directory under ",(0,n.jsx)(i.code,{children:"/Users/john/Documents"})," (conflicting with the custom ",(0,n.jsx)(i.code,{children:"/my-doc/test"}),"), it cannot be accessed."]}),"\n",(0,n.jsx)(i.h2,{id:"example-4-uri-rewrite",children:"Example 4, URI Rewrite"}),"\n",(0,n.jsxs)(i.p,{children:["The static file service of the ",(0,n.jsx)(i.code,{children:"GoFrame"})," framework supports rewriting any ",(0,n.jsx)(i.code,{children:"URI"})," to replace it with a designated ",(0,n.jsx)(i.code,{children:"URI"}),", using ",(0,n.jsx)(i.code,{children:"SetRewrite/SetRewriteMap"})," methods."]}),"\n",(0,n.jsxs)(i.p,{children:["Example: In the ",(0,n.jsx)(i.code,{children:"/Users/john/Temp"})," directory, there are only two files ",(0,n.jsx)(i.code,{children:"test1.html"})," and ",(0,n.jsx)(i.code,{children:"test2.html"}),"."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-go",children:'package main\n\nimport "github.com/gogf/gf/v2/frame/g"\n\nfunc main() {\n    s := g.Server()\n    s.SetServerRoot("/Users/john/Temp")\n    s.SetRewrite("/test.html", "/test1.html")\n    s.SetRewriteMap(g.MapStrStr{\n        "/my-test1": "/test1.html",\n        "/my-test2": "/test2.html",\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,n.jsx)(i.p,{children:"After execution,"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["When accessing ",(0,n.jsx)(i.code,{children:"/test.html"}),", it is eventually rewritten to ",(0,n.jsx)(i.code,{children:"test1.html"}),", and the content of this file is returned."]}),"\n",(0,n.jsxs)(i.li,{children:["When accessing ",(0,n.jsx)(i.code,{children:"/my-test1"}),", it is eventually rewritten to ",(0,n.jsx)(i.code,{children:"test1.html"}),", and the content of this file is returned."]}),"\n",(0,n.jsxs)(i.li,{children:["When accessing ",(0,n.jsx)(i.code,{children:"/my-test2"}),", it is eventually rewritten to ",(0,n.jsx)(i.code,{children:"test2.html"}),", and the content of this file is returned."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"example-5-cross-origin",children:"Example 5, Cross-Origin"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc beforeServeHook(r *ghttp.Request) {\n    glog.Debugf(r.GetCtx(), "beforeServeHook [is file:%v] URI:%s", r.IsFileRequest(), r.RequestURI)\n    r.Response.CORSDefault()\n}\n\n// Use hooks to inject cross-origin configuration\nfunc main() {\n    s := g.Server()\n    s.BindHookHandler("/*", ghttp.HookBeforeServe, beforeServeHook)\n    s.SetServerRoot(".")\n    s.SetFileServerEnabled(true)\n    s.SetAddr(":8080")\n    s.Run()\n}\n'})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{})})]})}function h(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},250065:function(e,i,t){t.d(i,{Z:function(){return o},a:function(){return c}});var r=t(667294);let n={},s=r.createContext(n);function c(e){let i=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);
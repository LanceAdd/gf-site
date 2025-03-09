"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["30398"],{182267:function(e,n,i){i.r(n),i.d(n,{metadata:()=>o,contentTitle:()=>a,default:()=>u,assets:()=>l,toc:()=>d,frontMatter:()=>s});var o=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u914D\u7F6E/\u670D\u52A1\u914D\u7F6E-\u914D\u7F6E\u6587\u4EF6","title":"Configuration - File","description":"Utilize the Server object of the GoFrame framework for service configuration, supporting configuration through a configuration file, including address, log settings, and upload limits, etc. It provides detailed explanations on how to obtain configurations for singleton objects, default values, and methods for multi-configuration management, helping users optimize service configuration strategies.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/WEB\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u914D\u7F6E/\u670D\u52A1\u914D\u7F6E-\u914D\u7F6E\u6587\u4EF6.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u914D\u7F6E","slug":"/docs/web/server-config-file","permalink":"/en/docs/web/server-config-file","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u914D\u7F6E/\u670D\u52A1\u914D\u7F6E-\u914D\u7F6E\u6587\u4EF6.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732541616000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/web/server-config-file","title":"Configuration - File","sidebar_position":0,"hide_title":true,"keywords":["Service Configuration","Configuration File","GoFrame","Server Object","Singleton","http server","Upload Limit","Log Configuration","Configuration File Example","ServerConfig"],"description":"Utilize the Server object of the GoFrame framework for service configuration, supporting configuration through a configuration file, including address, log settings, and upload limits, etc. It provides detailed explanations on how to obtain configurations for singleton objects, default values, and methods for multi-configuration management, helping users optimize service configuration strategies."},"sidebar":"mainSidebar","previous":{"title":"Configuration","permalink":"/en/docs/web/server-config"},"next":{"title":"Configuration - File Template","permalink":"/en/docs/web/server-config-file-template"}}'),r=i("785893"),t=i("250065");let s={slug:"/docs/web/server-config-file",title:"Configuration - File",sidebar_position:0,hide_title:!0,keywords:["Service Configuration","Configuration File","GoFrame","Server Object","Singleton","http server","Upload Limit","Log Configuration","Configuration File Example","ServerConfig"],description:"Utilize the Server object of the GoFrame framework for service configuration, supporting configuration through a configuration file, including address, log settings, and upload limits, etc. It provides detailed explanations on how to obtain configurations for singleton objects, default values, and methods for multi-configuration management, helping users optimize service configuration strategies."},a=void 0,l={},d=[{value:"Example 1, Default Configuration Items",id:"example-1-default-configuration-items",level:2},{value:"Example 2, Multiple Configuration Items",id:"example-2-multiple-configuration-items",level:2},{value:"Example 3, More Complete Example",id:"example-3-more-complete-example",level:2},{value:"Upload Limit",id:"upload-limit",level:2},{value:"Log Configuration",id:"log-configuration",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Server"})," objects support convenient configuration through configuration files. Please refer to the API documentation for supported configuration options and explanations; the documentation provides detailed information, and the following sections will not introduce configuration options."]}),"\n",(0,r.jsxs)(n.p,{children:["When using ",(0,r.jsx)(n.code,{children:"g.Server(singleton name)"})," to obtain a ",(0,r.jsx)(n.code,{children:"Server"})," singleton object, it will automatically obtain the corresponding ",(0,r.jsx)(n.code,{children:"Server"})," configuration through the default configuration management object. By default, it reads the ",(0,r.jsx)(n.code,{children:"server.singleton name"})," configuration item, and if that does not exist, it will read the ",(0,r.jsx)(n.code,{children:"server"})," configuration item."]}),"\n",(0,r.jsxs)(n.p,{children:["For supported configuration file options, refer to the ",(0,r.jsx)(n.code,{children:"Server"})," configuration management object properties: ",(0,r.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#ServerConfig",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#ServerConfig"})]}),"\n",(0,r.jsx)(n.h2,{id:"example-1-default-configuration-items",children:"Example 1, Default Configuration Items"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'server:\n    address:    ":80"\n    serverRoot: "/var/www/Server"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Later, you can use ",(0,r.jsx)(n.code,{children:"g.Server()"})," to automatically obtain and set this configuration when acquiring the default singleton object."]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"address"})," is not configured, the ",(0,r.jsx)(n.code,{children:"http server"})," will start using all ",(0,r.jsx)(n.code,{children:"ip"})," addresses of the local network card plus a ",(0,r.jsx)(n.strong,{children:"random free port"})," (default configuration ",(0,r.jsx)(n.code,{children:":0"}),"). If you want to specify an ",(0,r.jsx)(n.code,{children:"ip"})," but start the ",(0,r.jsx)(n.code,{children:"http server"})," with a random free port, you can configure ",(0,r.jsx)(n.code,{children:"address"})," in the format of ",(0,r.jsx)(n.code,{children:"ip:0"}),", for example: ",(0,r.jsx)(n.code,{children:"192.168.1.1:0, 10.0.1.1:0"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"example-2-multiple-configuration-items",children:"Example 2, Multiple Configuration Items"}),"\n",(0,r.jsxs)(n.p,{children:["Example for multiple ",(0,r.jsx)(n.code,{children:"Server"})," configurations:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'server:\n    address:    ":80"\n    serverRoot: "/var/www/Server"\n    server1:\n        address:    ":8080"\n        serverRoot: "/var/www/Server1"\n    server2:\n        address:    ":8088"\n        serverRoot: "/var/www/Server2"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["We can obtain the corresponding ",(0,r.jsx)(n.code,{children:"Server"})," singleton object through the singleton object name:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// Corresponding to server.server1 configuration item\ns1 := g.Server("server1")\n// Corresponding to server.server2 configuration item\ns2 := g.Server("server2")\n// Corresponding to default configuration item server\ns3 := g.Server("none")\n// Corresponding to default configuration item server\ns4 := g.Server()\n'})}),"\n",(0,r.jsx)(n.h2,{id:"example-3-more-complete-example",children:"Example 3, More Complete Example"}),"\n",(0,r.jsx)(n.p,{children:"For example, for the example in the previous section, the corresponding configuration file is as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'server:\n    address:          ":8199"\n    serverRoot:       "/var/www/Server"\n    indexFiles:       ["index.html", "main.html"]\n    accessLogEnabled: true\n    errorLogEnabled:  true\n    pprofEnabled:     true\n    logPath:          "/var/log/ServerLog"\n    sessionIdName:    "MySessionId"\n    sessionPath:      "/tmp/MySessionStoragePath"\n    sessionMaxAge:    "24h"\n    dumpRouterMap:    false\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Similarly, the names of configuration property items are not case-sensitive, and it also supports using ",(0,r.jsx)(n.code,{children:"-"}),"/",(0,r.jsx)(n.code,{children:"_"})," symbols to connect words. That means the following configuration file has the same effect as the above one:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'server:\n    address:          ":8199"\n    serverRoot:       "/var/www/Server"\n    indexFiles:       ["index.html", "main.html"]\n    accessLogEnabled: true\n    errorLogEnabled:  true\n    pprofEnabled:     true\n    log-path:         "/var/log/ServerLog"\n    session_Id_Name:  "MySessionId"\n    Session-path:     "/tmp/MySessionStoragePath"\n    session_MaxAge:   "24h"\n    DumpRouterMap:    false\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"We recommend using camelCase format for configuration item names in configuration files."})}),"\n",(0,r.jsx)(n.h2,{id:"upload-limit",children:"Upload Limit"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Server"})," has size limits for data submitted by clients, controlled by two main configuration parameters:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"MaxHeaderBytes"}),": Request header size limit, the request header includes ",(0,r.jsx)(n.code,{children:"Cookie"})," data submitted by the client, default is ",(0,r.jsx)(n.code,{children:"10KB"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ClientMaxBodySize"}),": Body size limit submitted by the client, also affecting file upload size, default is ",(0,r.jsx)(n.code,{children:"8MB"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Due to security considerations, the default upload limits are not very high, especially the size limit of ",(0,r.jsx)(n.code,{children:"ClientMaxBodySize"}),". In scenarios where file uploads are needed, you may consider adjusting, and it can be configured through a configuration file, for example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'server:\n    maxHeaderBytes:    "20KB"\n    clientMaxBodySize: "200MB"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This way, the request header size limit is modified to ",(0,r.jsx)(n.code,{children:"20KB"}),", and the file upload size limit is ",(0,r.jsx)(n.code,{children:"200MB"}),". If you do not want to impose any limit on the upload size, set ",(0,r.jsx)(n.code,{children:"clientMaxBodySize"})," to ",(0,r.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"log-configuration",children:"Log Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Starting from version ",(0,r.jsx)(n.code,{children:"v2"}),", ",(0,r.jsx)(n.code,{children:"Server"})," added support for ",(0,r.jsx)(n.code,{children:"Logger"})," configuration item in configuration files, mainly to unify log component configuration and solve log rolling split issues. Configuration example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'server:\n    address: ":8080"\n    logger:\n        path:                 "/var/log/server"\n        file:                 "{Y-m-d}.log"\n        stdout:               false\n        rotateSize:           "100M"\n        rotateBackupLimit:    10\n        rotateBackupExpire:   "60d"\n        rotateBackupCompress: 9\n        rotateCheckInterval:  "24h"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["For detailed information on the ",(0,r.jsx)(n.code,{children:"logger"})," item, please refer to the section ",(0,r.jsx)(n.a,{href:"/en/docs/core/glog-config",children:"Logging - Configuration"}),"."]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return s}});var o=i(667294);let r={},t=o.createContext(r);function s(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["93514"],{890027:function(e,n,i){i.r(n),i.d(n,{metadata:()=>o,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>s});var o=JSON.parse('{"id":"release/v2.3 2023-01-18","title":"v2.3 2023-01-18","description":"This update of the GoFrame framework includes an interface design to reduce coupling with third-party components, enhancing system flexibility. It also introduces community components like redis, increasing usability and performance. New implementations for nacos and zookeeper component interfaces are added to support common services, and tool upgrades enhance the framework usage experience. These updates pave the way for future microservice component expansions.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/release/v2.3 2023-01-18.md","sourceDirName":"release","slug":"/release/v2.3.0","permalink":"/en/release/v2.3.0","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/release/v2.3 2023-01-18.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732541616000,"sidebarPosition":4,"frontMatter":{"slug":"/release/v2.3.0","title":"v2.3 2023-01-18","sidebar_position":4,"hide_title":true,"keywords":["GoFrame framework","interface design","microservice development","redis component","database ORM","configuration management","registration and discovery","nacos","zookeeper","ghttp"],"description":"This update of the GoFrame framework includes an interface design to reduce coupling with third-party components, enhancing system flexibility. It also introduces community components like redis, increasing usability and performance. New implementations for nacos and zookeeper component interfaces are added to support common services, and tool upgrades enhance the framework usage experience. These updates pave the way for future microservice component expansions."},"sidebar":"releaseSidebar","previous":{"title":"v2.4 2023-04-24","permalink":"/en/release/v2.4.0"},"next":{"title":"v2.2 2022-10-11","permalink":"/en/release/v2.2.0"}}'),r=i("785893"),t=i("250065");let s={slug:"/release/v2.3.0",title:"v2.3 2023-01-18",sidebar_position:4,hide_title:!0,keywords:["GoFrame framework","interface design","microservice development","redis component","database ORM","configuration management","registration and discovery","nacos","zookeeper","ghttp"],description:"This update of the GoFrame framework includes an interface design to reduce coupling with third-party components, enhancing system flexibility. It also introduces community components like redis, increasing usability and performance. New implementations for nacos and zookeeper component interfaces are added to support common services, and tool upgrades enhance the framework usage experience. These updates pave the way for future microservice component expansions."},d=void 0,c={},l=[{value:"New Features",id:"new-features",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Community Components",id:"community-components",level:3},{value:"Configuration Management",id:"configuration-management",level:4},{value:"Registration Discovery",id:"registration-discovery",level:4},{value:"Database Driver",id:"database-driver",level:4},{value:"NoSQL Components",id:"nosql-components",level:4},{value:"Database Components",id:"database-components",level:3},{value:"Container Components",id:"container-components",level:3},{value:"Error Handling",id:"error-handling",level:3},{value:"Object Management",id:"object-management",level:3},{value:"Network Components",id:"network-components",level:3},{value:"System Components",id:"system-components",level:3},{value:"Text Processing",id:"text-processing",level:3},{value:"Utility Components",id:"utility-components",level:3},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Development Tools",id:"development-tools",level:2},{value:"Compatibility Warning",id:"compatibility-warning",level:2},{value:"Next Version Goals",id:"next-version-goals",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Hello everyone! This version is the last one for the year ",(0,r.jsx)(n.code,{children:"2022"})," and the first one for ",(0,r.jsx)(n.code,{children:"2023"}),". The main goals of this version are:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Using an interface design to solve the coupling issue of the main framework with the third-party open-source component ",(0,r.jsx)(n.code,{children:"go-redis"}),", making the main framework lighter and more friendly for tool-based usage scenarios."]}),"\n",(0,r.jsx)(n.li,{children:"Providing upgrade commands for the main framework, community components, and development tools via development tools, improving the overall usability of the framework and addressing the common issue of version inconsistency between community components and the main framework."}),"\n",(0,r.jsx)(n.li,{children:"Further designing according to the separation of interfaces and implementations, enhancing the integration of registration discovery and configuration management for common services through community components, preparing for the subsequent release of microservice components."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Complete change list: ",(0,r.jsx)(n.a,{href:"https://github.com/gogf/gf/compare/v2.2.0...v2.3.1",children:"https://github.com/gogf/gf/compare/v2.2.0...v2.3.1"})]}),"\n",(0,r.jsx)(n.h2,{id:"new-features",children:"New Features"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["The heavily coupled ",(0,r.jsx)(n.code,{children:"redis"})," component is decoupled from the main framework and provided as a community component. The main framework adds a ",(0,r.jsx)(n.code,{children:"redis"})," interface definition, while the community component ",(0,r.jsx)(n.code,{children:"redis"})," provides a concrete implementation. Therefore, please note that the usage of the main framework's ",(0,r.jsx)(n.code,{children:"gredis"})," component has changed, and in projects relying on ",(0,r.jsx)(n.code,{children:"redis"}),", it is necessary to introduce the community component ",(0,r.jsx)(n.code,{children:"redis"})," implementation, otherwise method execution will return an error. The original ",(0,r.jsx)(n.code,{children:"Do/DoVar"})," methods are retained for compatibility, and more than ",(0,r.jsx)(n.code,{children:"100"})," commonly used ",(0,r.jsx)(n.code,{children:"redis"})," operation methods are added: ",(0,r.jsx)(n.a,{href:"/en/docs/components/contrib-nosql-redis",children:"NoSQL Redis"})]}),"\n",(0,r.jsxs)(n.li,{children:["New common service interface implementations for configuration management and registration discovery components:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Configuration Management"})," (",(0,r.jsx)(n.code,{children:"nacos"}),"): ",(0,r.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/config/nacos",children:"https://github.com/gogf/gf/tree/master/contrib/config/nacos"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Registration Discovery"})," (",(0,r.jsx)(n.code,{children:"zookeeper"}),"): ",(0,r.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/registry/zookeeper",children:"https://github.com/gogf/gf/tree/master/contrib/registry/zookeeper"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Added tool command ",(0,r.jsx)(n.code,{children:"gf up"})," for convenient framework upgrades, see: ",(0,r.jsx)(n.a,{href:"/en/docs/cli/up",children:"Version Upgrade"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"improvements",children:"Improvements"}),"\n",(0,r.jsx)(n.h3,{id:"community-components",children:"Community Components"}),"\n",(0,r.jsx)(n.h4,{id:"configuration-management",children:"Configuration Management"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Added ",(0,r.jsx)(n.code,{children:"nacos"})," interface implementation: ",(0,r.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/config/nacos",children:"https://github.com/gogf/gf/tree/master/contrib/config/nacos"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"registration-discovery",children:"Registration Discovery"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Added ",(0,r.jsx)(n.code,{children:"zookeeper"})," interface implementation: ",(0,r.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/registry/zookeeper",children:"https://github.com/gogf/gf/tree/master/contrib/registry/zookeeper"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"database-driver",children:"Database Driver"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Fixed the error issue when configuring the ",(0,r.jsx)(n.code,{children:"Charset"})," parameter for ",(0,r.jsx)(n.code,{children:"clickhouse"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Improved the retrieval of data table structure results for ",(0,r.jsx)(n.code,{children:"clickhouse"}),", with the returned ",(0,r.jsx)(n.code,{children:"Index"})," order consistently starting from ",(0,r.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Improved the ",(0,r.jsx)(n.code,{children:"oracle"})," table structure retrieval SQL to support the ",(0,r.jsx)(n.code,{children:"float64"})," data type."]}),"\n",(0,r.jsxs)(n.li,{children:["Fixed the implementation of the ",(0,r.jsx)(n.code,{children:"CheckLocalTypeForField"})," interface for ",(0,r.jsx)(n.code,{children:"pgsql"}),", where the name was incorrectly defined as ",(0,r.jsx)(n.code,{children:"CheckLocalTypeForValue"}),", causing attribute field type errors when generating ",(0,r.jsx)(n.code,{children:"dao"})," code files."]}),"\n",(0,r.jsxs)(n.li,{children:["Improved ",(0,r.jsx)(n.code,{children:"pgsql"})," to add support for ",(0,r.jsx)(n.code,{children:"schema"}),". Since ",(0,r.jsx)(n.code,{children:"schema"}),' represents "database name" in most database services, and to maintain backward compatibility, a ',(0,r.jsx)(n.code,{children:"Namespace"})," configuration parameter is added to represent ",(0,r.jsx)(n.code,{children:"pgsql"}),"'s ",(0,r.jsx)(n.code,{children:"Schema"}),", while the original ",(0,r.jsx)(n.code,{children:"Schema"})," object represents ",(0,r.jsx)(n.code,{children:"pgsql"}),"'s ",(0,r.jsx)(n.code,{children:"catalog"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"nosql-components",children:"NoSQL Components"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Added ",(0,r.jsx)(n.code,{children:"redis"})," community component to implement ",(0,r.jsx)(n.code,{children:"gredis"})," related interfaces: ",(0,r.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/nosql/redis",children:"https://github.com/gogf/gf/tree/master/contrib/nosql/redis"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"database-components",children:"Database Components"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"gdb"})}),"\n",(0,r.jsxs)(n.li,{children:["To enhance extensibility, the ",(0,r.jsx)(n.code,{children:"TX"})," transaction object is changed to an interface definition, and the original ",(0,r.jsx)(n.code,{children:"TX"})," object is renamed to ",(0,r.jsx)(n.code,{children:"TXCore"})," for convenient custom interface implementation object nesting: ",(0,r.jsx)(n.a,{href:"/en/docs/core/gdb-transaction",children:"ORM - Transaction"})]}),"\n",(0,r.jsxs)(n.li,{children:["Added ",(0,r.jsx)(n.code,{children:"Namespace"})," configuration item to support issues of distinguishing ",(0,r.jsx)(n.code,{children:"Catalog&Schema"})," in some database services. The original ",(0,r.jsx)(n.code,{children:"Schema"})," continues to represent the database name, while the new ",(0,r.jsx)(n.code,{children:"Namespace"})," represents the ",(0,r.jsx)(n.code,{children:"Schema"})," configuration in some database services: ",(0,r.jsx)(n.a,{href:"/en/docs/core/gdb-config",children:"ORM - Configuration"})]}),"\n",(0,r.jsx)(n.li,{children:"Improved database name configuration to support Chinese database names."}),"\n",(0,r.jsxs)(n.li,{children:["Added the current database name printout in the ",(0,r.jsx)(n.code,{children:"SQL"})," execution log."]}),"\n",(0,r.jsxs)(n.li,{children:["Fixed the cache issue of the ",(0,r.jsx)(n.code,{children:"Count"})," method."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"gredis"})}),"\n",(0,r.jsxs)(n.li,{children:["Added ",(0,r.jsx)(n.code,{children:"redis"})," community component to decouple the heavily coupled ",(0,r.jsx)(n.code,{children:"redis"})," component from the main framework, and provide it as a community component. The main framework adds a ",(0,r.jsx)(n.code,{children:"redis"})," interface definition, and the community component ",(0,r.jsx)(n.code,{children:"redis"})," provides a concrete implementation. Therefore, please note that the usage of the main framework's ",(0,r.jsx)(n.code,{children:"gredis"})," component has changed, and in projects relying on ",(0,r.jsx)(n.code,{children:"redis"}),", it is necessary to introduce the community component ",(0,r.jsx)(n.code,{children:"redis"})," implementation, otherwise method execution will return an error. The original ",(0,r.jsx)(n.code,{children:"Do/DoVar"})," methods are retained for compatibility, and more than ",(0,r.jsx)(n.code,{children:"100"})," commonly used ",(0,r.jsx)(n.code,{children:"redis"})," operation methods are added: ",(0,r.jsx)(n.a,{href:"/en/docs/components/contrib-nosql-redis",children:"NoSQL Redis"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"container-components",children:"Container Components"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"gpool"})}),"\n",(0,r.jsxs)(n.li,{children:["Added the ",(0,r.jsx)(n.code,{children:"MustPut"})," method to directly ",(0,r.jsx)(n.code,{children:"panic"})," instead of returning an error object when ",(0,r.jsx)(n.code,{children:"Put"})," execution errors occur."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"gqueue"})}),"\n",(0,r.jsxs)(n.li,{children:["Improved the ",(0,r.jsx)(n.code,{children:"Len/Size"})," methods to resolve potential queue count inaccuracies."]}),"\n",(0,r.jsxs)(n.li,{children:["Improved the ",(0,r.jsx)(n.code,{children:"Len/Size"})," methods, with the return parameter type changed from ",(0,r.jsx)(n.code,{children:"int"})," to ",(0,r.jsx)(n.code,{children:"int64"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"error-handling",children:"Error Handling"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"gcode"})}),"\n",(0,r.jsxs)(n.li,{children:["Added ",(0,r.jsx)(n.code,{children:"CodeNecessaryPackageNotImport"})," error code."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"gerror"})}),"\n",(0,r.jsxs)(n.li,{children:["Improved stack prints, using spaces to replace ",(0,r.jsx)(n.code,{children:"\\t"})," to ensure the print format is compatible with different display terminals."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"object-management",children:"Object Management"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"gins"})}),"\n",(0,r.jsx)(n.li,{children:"Added group lock mechanism for singleton objects to enhance lock mechanism performance under high concurrency."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"network-components",children:"Network Components"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"ghttp"})}),"\n",(0,r.jsx)(n.li,{children:"Support for obtaining the current execution route method in middleware."}),"\n",(0,r.jsxs)(n.li,{children:["When the execution result of the route method is not ",(0,r.jsx)(n.code,{children:"200"}),", support obtaining internal errors through the ",(0,r.jsx)(n.code,{children:"Request.GetError"})," method in middleware."]}),"\n",(0,r.jsxs)(n.li,{children:["Added ",(0,r.jsx)(n.code,{children:"Response.ServeContent"})," method for custom content output interface implementation."]}),"\n",(0,r.jsxs)(n.li,{children:["Improved reverse proxy support and added reverse proxy example: ",(0,r.jsx)(n.a,{href:"https://github.com/gogf/gf/blob/master/example/httpserver/proxy/main.go",children:"https://github.com/gogf/gf/blob/master/example/httpserver/proxy/main.go"})]}),"\n",(0,r.jsxs)(n.li,{children:["Improved error log output, using the ",(0,r.jsx)(n.code,{children:"error"})," log level, making it easier for developers to identify log types in custom log ",(0,r.jsx)(n.code,{children:"Handlers"}),"."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"goai"})}),"\n",(0,r.jsxs)(n.li,{children:["Added support for the ",(0,r.jsx)(n.code,{children:"security"})," tag to configure ",(0,r.jsx)(n.code,{children:"OpenAPIv3"})," security keys."]}),"\n",(0,r.jsxs)(n.li,{children:["Improved structure attribute name retrieval when the ",(0,r.jsx)(n.code,{children:"json"})," tag contains ",(0,r.jsx)(n.code,{children:","}),"."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"gtcp"})}),"\n",(0,r.jsxs)(n.li,{children:["Renamed ",(0,r.jsx)(n.code,{children:"SetSendDeadline"})," method to ",(0,r.jsx)(n.code,{children:"SetDeadlineSend"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Renamed ",(0,r.jsx)(n.code,{children:"SetReceiveDeadline"})," method to ",(0,r.jsx)(n.code,{children:"SetDeadlineRecv"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Renamed ",(0,r.jsx)(n.code,{children:"SetReceiveBufferWait"})," method to ",(0,r.jsx)(n.code,{children:"SetBufferWaitRecv"}),"."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"gudp"})}),"\n",(0,r.jsxs)(n.li,{children:["Renamed ",(0,r.jsx)(n.code,{children:"SetSendDeadline"})," method to ",(0,r.jsx)(n.code,{children:"SetDeadlineSend"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Renamed ",(0,r.jsx)(n.code,{children:"SetReceiveDeadline"})," method to ",(0,r.jsx)(n.code,{children:"SetDeadlineRecv"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Renamed ",(0,r.jsx)(n.code,{children:"SetReceiveBufferWait"})," method to ",(0,r.jsx)(n.code,{children:"SetBufferWaitRecv"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"system-components",children:"System Components"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"gcache"})}),"\n",(0,r.jsxs)(n.li,{children:["Fixed the ",(0,r.jsx)(n.code,{children:"MustGetOrSetFunc"})," method logic issue."]}),"\n",(0,r.jsxs)(n.li,{children:["Improved the ",(0,r.jsx)(n.code,{children:"LRU"})," cache expiration recycling mechanism implementation."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"gcmd"})}),"\n",(0,r.jsxs)(n.li,{children:["Improved structured command line object generation, automatically reading ",(0,r.jsx)(n.code,{children:"dc"})," tag content as ",(0,r.jsx)(n.code,{children:"brief"})," when the ",(0,r.jsx)(n.code,{children:"brief"})," tag is empty, ensuring that command line and interface definition tag habits are the same."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"gcron"})}),"\n",(0,r.jsxs)(n.li,{children:["Improved log handling, using ",(0,r.jsx)(n.code,{children:"glog.DefaultLogger"})," to output error logs when a scheduled task method ",(0,r.jsx)(n.code,{children:"panic"})," occurs and the developer hasn't set the ",(0,r.jsx)(n.code,{children:"Logger"})," interface."]}),"\n",(0,r.jsx)(n.li,{children:"Improved scheduled trigger judgment logic, resolving scheduled task triggering issues caused by inaccurate execution intervals of the underlying timer."}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"glog"})}),"\n",(0,r.jsx)(n.li,{children:"Improved initialization logic when rolling split feature is enabled, resolving failure of rolling split execution due to initialization failure in some scenarios."}),"\n",(0,r.jsxs)(n.li,{children:["Improved the ",(0,r.jsx)(n.code,{children:"Clone"})," method for further shallow copying to enhance chain operation performance."]}),"\n",(0,r.jsxs)(n.li,{children:["Added ",(0,r.jsx)(n.code,{children:"LevelPrint"})," configuration to control whether the default log ",(0,r.jsx)(n.code,{children:"Handler"})," prints the log level string."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"gres"})}),"\n",(0,r.jsxs)(n.li,{children:["Added ",(0,r.jsx)(n.code,{children:"Pack*WithOption"})," methods to provide finer-grained resource packaging option control."]}),"\n",(0,r.jsxs)(n.li,{children:["Deprecated methods: ",(0,r.jsx)(n.code,{children:"Pack/PackToFile/PackToGoFile"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Added ",(0,r.jsx)(n.code,{children:"KeepPath"})," packaging option to control whether to retain the given relative path in the packaged file instead of using a path with a local packaging directory prefix (equivalent to removing the directory prefix)."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"grpool"})}),"\n",(0,r.jsxs)(n.li,{children:["Added ",(0,r.jsx)(n.code,{children:"supervisor"})," feature to solve the issue of low probability of quitting at the same time in scenarios with a small number of ",(0,r.jsx)(n.code,{children:"workers"}),"."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"gstructs"})}),"\n",(0,r.jsxs)(n.li,{children:["Added ",(0,r.jsx)(n.code,{children:"Tag*"})," methods to obtain common tag values."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"gtime"})}),"\n",(0,r.jsxs)(n.li,{children:["Improved ",(0,r.jsx)(n.code,{children:"Equal/After/Sub"})," methods to resolve detailed issues in some scenarios."]}),"\n",(0,r.jsxs)(n.li,{children:["Improved ",(0,r.jsx)(n.code,{children:"EndOf*"})," methods, allowing developers to control the granularity of ",(0,r.jsx)(n.code,{children:"EndOf"})," calculation in the returned time object. The default granularity is changed from nanoseconds to seconds for calculation."]}),"\n",(0,r.jsxs)(n.li,{children:["Improved the ",(0,r.jsx)(n.code,{children:"SetTimeZone"})," method to achieve cross-system compatibility, allowing only a global setting of the time zone once, with errors returned for multiple calls with different time zones: ",(0,r.jsx)(n.a,{href:"/en/docs/components/os-gtime-timezone",children:"Time - Time Zone"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"text-processing",children:"Text Processing"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"gstr"})}),"\n",(0,r.jsxs)(n.li,{children:["Fixed ",(0,r.jsx)(n.code,{children:"IsSubDomain"})," issue of determining that the main domain is a subdomain of a subdomain."]}),"\n",(0,r.jsxs)(n.li,{children:["Improved ",(0,r.jsx)(n.code,{children:"SubStr/SubStrRune"})," methods to support the use of a negative ",(0,r.jsx)(n.code,{children:"start"})," parameter to specify right-side substring extraction."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"utility-components",children:"Utility Components"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"gconv"})}),"\n",(0,r.jsxs)(n.li,{children:["Added ",(0,r.jsx)(n.code,{children:"Ptr*"})," methods for arbitrary type to specific type pointer variable conversion."]}),"\n",(0,r.jsxs)(n.li,{children:["Improved ",(0,r.jsx)(n.code,{children:"Map*"})," conversion methods for handling recursive conversions, by default, only recursively converting nested structure attributes."]}),"\n",(0,r.jsxs)(n.li,{children:["Improved ",(0,r.jsx)(n.code,{children:"Scan"})," method to resolve conversion issues from attributes of the same type and the same type pointer to target object/pointer."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"gtag"})}),"\n",(0,r.jsx)(n.li,{children:"Unified all tag names in the framework to be maintained under this module through constants."}),"\n",(0,r.jsxs)(n.li,{children:["Added ",(0,r.jsx)(n.code,{children:"SetOver/SetsOver"})," methods for overriding custom tag key-value pairs."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"gutil"})}),"\n",(0,r.jsxs)(n.li,{children:["Improved ",(0,r.jsx)(n.code,{children:"Dump*"})," methods to support printing of circular nested object pointers."]}),"\n",(0,r.jsxs)(n.li,{children:["Fixed ",(0,r.jsx)(n.code,{children:"Dump*"})," method reflection error issues in some scenarios."]}),"\n",(0,r.jsxs)(n.li,{children:["Added ",(0,r.jsx)(n.code,{children:"OriginValueAndKind/OriginTypeAndKind"})," methods to obtain the reflect value/type object of a given variable, as well as the original reflect value/type object under pointer variables."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed the issue of utility installation failure in some environments."}),"\n",(0,r.jsxs)(n.li,{children:["Fixed array boundary issue in ",(0,r.jsx)(n.code,{children:"New*ArrayRange"})," method for array object creation in some scenarios."]}),"\n",(0,r.jsxs)(n.li,{children:["Fixed the error issue when configuring the ",(0,r.jsx)(n.code,{children:"Charset"})," parameter for ",(0,r.jsx)(n.code,{children:"contrib/drivers/clickhouse"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Fixed attribute field type error issue in ",(0,r.jsx)(n.code,{children:"pgsql"})," database generated ",(0,r.jsx)(n.code,{children:"dao"})," code files."]}),"\n",(0,r.jsxs)(n.li,{children:["Fixed cache issue with the ",(0,r.jsx)(n.code,{children:"Count"})," method in the database ORM component."]}),"\n",(0,r.jsxs)(n.li,{children:["Fixed ",(0,r.jsx)(n.code,{children:"gstr.IsSubDomain"})," issue of determining that the main domain is a subdomain of a subdomain."]}),"\n",(0,r.jsxs)(n.li,{children:["Fixed ",(0,r.jsx)(n.code,{children:"gutil.Dump*"})," method reflection error issues in some scenarios."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"development-tools",children:"Development Tools"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Added ",(0,r.jsx)(n.code,{children:"gf fix"})," command for automatically updating local code incompatible changes when upgrading from lower to higher versions: ",(0,r.jsx)(n.a,{href:"/en/docs/cli/fix",children:"Compatibility Fix"})]}),"\n",(0,r.jsxs)(n.li,{children:["Added ",(0,r.jsx)(n.code,{children:"gf up"})," command to upgrade local framework versions to the latest framework version: ",(0,r.jsx)(n.a,{href:"/en/docs/cli/up",children:"Version Upgrade"})]}),"\n",(0,r.jsxs)(n.li,{children:["Improved ",(0,r.jsx)(n.code,{children:"gf build"})," command to add environment variable information printing before building."]}),"\n",(0,r.jsxs)(n.li,{children:["Improved ",(0,r.jsx)(n.code,{children:"gf pack"})," command to add ",(0,r.jsx)(n.code,{children:"KeepPath"})," parameter to control whether to keep the relative path after resource packaging: ",(0,r.jsx)(n.a,{href:"/en/docs/cli/pack",children:"Resource Packing"})]}),"\n",(0,r.jsxs)(n.li,{children:["Improved ",(0,r.jsx)(n.code,{children:"gf gen dao"})," command with ",(0,r.jsx)(n.code,{children:"tx"})," parameter in generated ",(0,r.jsx)(n.code,{children:"Transaction"})," methods changed from object pointer to interface."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"compatibility-warning",children:"Compatibility Warning"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["The usage of ",(0,r.jsx)(n.code,{children:"Redis"})," has changed. The old methods remain compatible, but additional community components need to be imported (interface and implementation separation). Please see the documentation for details."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"TX"})," object of the database ",(0,r.jsx)(n.code,{children:"ORM"})," is changed from a concrete implementation to an interface. This can be automatically upgraded and fixed using the new ",(0,r.jsx)(n.code,{children:"up"})," or ",(0,r.jsx)(n.code,{children:"fix"})," command in the development tools."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"next-version-goals",children:"Next Version Goals"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Improve and release the ",(0,r.jsx)(n.code,{children:"grpcx"})," community component to provide extended support for the ",(0,r.jsx)(n.code,{children:"grpc"})," interface protocol and enhance the usability of microservice development."]}),"\n",(0,r.jsxs)(n.li,{children:["Add a [Microservice Development] series chapter on the official website, mainly introducing microservice development using ",(0,r.jsx)(n.code,{children:"goframe"})," with a focus on ",(0,r.jsx)(n.code,{children:"grpc"})," development."]}),"\n",(0,r.jsxs)(n.li,{children:["Remove coupling with the third-party open-source component ",(0,r.jsx)(n.code,{children:"gorilla/websocket"})," in the main framework, interface the support of ",(0,r.jsx)(n.code,{children:"WebSocket"}),", and provide concrete implementations through community components according to the general decoupling design of the framework, providing extensibility and flexibility."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return s}});var o=i(667294);let r={},t=o.createContext(r);function s(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);
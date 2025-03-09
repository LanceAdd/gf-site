"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["4297"],{494468:function(e,n,o){o.r(n),o.d(n,{metadata:()=>a,contentTitle:()=>s,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>r});var a=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4F7F\u7528\u914D\u7F6E/ORM\u4F7F\u7528\u914D\u7F6E-\u914D\u7F6E\u65B9\u6CD5","title":"ORM Configuration - Methods","description":"Configure the gdb database module in the GoFrame framework. It mainly covers data structure design, features, and specific configuration methods. By configuring ConfigNode and ConfigGroup, developers can flexibly manage multi-node database clusters to achieve efficient load balancing and read-write separation. Additionally, examples of default group and custom global configuration are provided.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4F7F\u7528\u914D\u7F6E/ORM\u4F7F\u7528\u914D\u7F6E-\u914D\u7F6E\u65B9\u6CD5.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4F7F\u7528\u914D\u7F6E","slug":"/docs/core/gdb-config-funcs","permalink":"/en/docs/core/gdb-config-funcs","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4F7F\u7528\u914D\u7F6E/ORM\u4F7F\u7528\u914D\u7F6E-\u914D\u7F6E\u65B9\u6CD5.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732440306000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/core/gdb-config-funcs","title":"ORM Configuration - Methods","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","ORM Usage Configuration","Database Node Management","Connection Property Configuration","Database Cluster","Relational Database","Read-Write Separation","Load Balancing","Configuration Management Features","GoFrame Framework"],"description":"Configure the gdb database module in the GoFrame framework. It mainly covers data structure design, features, and specific configuration methods. By configuring ConfigNode and ConfigGroup, developers can flexibly manage multi-node database clusters to achieve efficient load balancing and read-write separation. Additionally, examples of default group and custom global configuration are provided."},"sidebar":"mainSidebar","previous":{"title":"ORM Configuration - File","permalink":"/en/docs/core/gdb-config-file"},"next":{"title":"ORM Configuration - FAQ","permalink":"/en/docs/core/gdb-config-faq"}}'),t=o("785893"),i=o("250065");let r={slug:"/docs/core/gdb-config-funcs",title:"ORM Configuration - Methods",sidebar_position:1,hide_title:!0,keywords:["GoFrame","ORM Usage Configuration","Database Node Management","Connection Property Configuration","Database Cluster","Relational Database","Read-Write Separation","Load Balancing","Configuration Management Features","GoFrame Framework"],description:"Configure the gdb database module in the GoFrame framework. It mainly covers data structure design, features, and specific configuration methods. By configuring ConfigNode and ConfigGroup, developers can flexibly manage multi-node database clusters to achieve efficient load balancing and read-write separation. Additionally, examples of default group and custom global configuration are provided."},s=void 0,d={},c=[{value:"Data Structure",id:"data-structure",level:2},{value:"Configuration Method",id:"configuration-method",level:2}];function l(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Below is an introduction to the configuration of database underlying management. If you are interested in the underlying configuration management of databases, you can continue reading the following sections."})}),"\n",(0,t.jsx)(n.h2,{id:"data-structure",children:"Data Structure"}),"\n",(0,t.jsxs)(n.p,{children:["The internal configuration management data structure of the ",(0,t.jsx)(n.code,{children:"gdb"})," database management module is as follows:"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ConfigNode"})," is used to store database node information; ",(0,t.jsx)(n.code,{children:"ConfigGroup"})," manages configuration groups consisting of multiple database nodes (typically, a group corresponds to a business database cluster); ",(0,t.jsx)(n.code,{children:"Config"})," manages multiple ",(0,t.jsx)(n.code,{children:"ConfigGroup"})," configuration groups."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Configuration Management Features:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Supports management of multi-node database clusters;"}),"\n",(0,t.jsx)(n.li,{children:"Each node can individually configure connection properties;"}),"\n",(0,t.jsx)(n.li,{children:"Uses a singleton pattern to manage database instance objects;"}),"\n",(0,t.jsx)(n.li,{children:"Supports database cluster group management and access to instantiated database operation objects according to group names;"}),"\n",(0,t.jsxs)(n.li,{children:["Supports management of various relational databases, configurable through the ",(0,t.jsx)(n.code,{children:"ConfigNode.Type"})," attribute;"]}),"\n",(0,t.jsxs)(n.li,{children:["Supports ",(0,t.jsx)(n.code,{children:"Master-Slave"})," read-write separation, configurable through the ",(0,t.jsx)(n.code,{children:"ConfigNode.Role"})," attribute;"]}),"\n",(0,t.jsxs)(n.li,{children:["Supports client load balancing management, configurable through the ",(0,t.jsx)(n.code,{children:"ConfigNode.Weight"})," attribute, where a higher value indicates a higher priority;"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type Config      map[string]ConfigGroup // Database configuration object\ntype ConfigGroup []ConfigNode           // Database group configuration\n// Database configuration item (one configuration item corresponds to multiple configuration items)\ntype ConfigNode  struct {\n    Host             string        // Address\n    Port             string        // Port\n    User             string        // User\n    Pass             string        // Password\n    Name             string        // Database name\n    Type             string        // Database type: mysql, sqlite, mssql, pgsql, oracle\n    Link             string        // (Optional) Custom link information. When set, the above link fields (Host,Port,User,Pass,Name) will be invalid (this field is an extension feature)\n    Extra            string        // (Optional) Additional feature configuration for different databases, defined by the underlying database driver\n    Role             string        // (Optional, default is master) Database role, used for master-slave operation separation, at least one master is required, parameter value: master, slave\n    Debug            bool          // (Optional) Enable debug mode\n    Charset          string        // (Optional, default is utf8) Encoding, default is utf8\n    Prefix           string        // (Optional) Table name prefix\n    Weight           int           // (Optional) Weight for load balancing calculation. When there is only one node in the cluster, the weight is meaningless\n    MaxIdleConnCount int           // (Optional) Maximum number of idle connections in the connection pool\n    MaxOpenConnCount int           // (Optional) Maximum number of open connections in the connection pool\n    MaxConnLifetime  time.Duration // (Optional, in seconds) Time duration for which a connection object can be reused\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["It is worth mentioning that the greatest ",(0,t.jsx)(n.strong,{children:"feature"})," of ",(0,t.jsx)(n.code,{children:"gdb"})," configuration management is that (within the same process), all database cluster information is uniformly maintained by the same configuration management module, and ",(0,t.jsx)(n.strong,{children:"different businesses use different group names"})," for database cluster configuration and retrieval."]}),"\n",(0,t.jsx)(n.h2,{id:"configuration-method",children:"Configuration Method"}),"\n",(0,t.jsxs)(n.p,{children:["This is a native call to the ",(0,t.jsx)(n.code,{children:"gdb"})," module to configure database management. Developers who want to control their database configuration management independently can refer to the following methods. If not needed, this section can be ignored."]}),"\n",(0,t.jsxs)(n.p,{children:["API Documentation: ",(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"// Add a database node to a specified group\nfunc AddConfigNode(group string, node ConfigNode)\n// Add a configuration group to database configuration management (overwrites if the same name exists)\nfunc AddConfigGroup(group string, nodes ConfigGroup)\n\n// Add a database node to the default group (default is 'default', can be changed)\nfunc AddDefaultConfigNode(node ConfigNode)\n// Add a configuration group to the database configuration management (default group is 'default', can be changed)\nfunc AddDefaultConfigGroup(nodes ConfigGroup)\n\n// Set the default group name, which will be automatically read when obtaining the default database object\nfunc SetDefaultGroup(groupName string)\n\n// Set the database configuration to defined configuration information, overriding the original configuration\nfunc SetConfig(c Config)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The default group means that if you do not specify a configuration group name when obtaining a database object, the ",(0,t.jsx)(n.code,{children:"gdb"})," will default to reading the configuration group. For example, ",(0,t.jsx)(n.code,{children:"gdb.NewByGroup()"})," can be used to obtain a database object of the default group. As a simple approach, we can use the ",(0,t.jsx)(n.code,{children:"SetConfig"})," configuration management method of the ",(0,t.jsx)(n.code,{children:"gdb"})," package to perform custom global database configuration, for example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'gdb.SetConfig(gdb.Config {\n    "default" : gdb.ConfigGroup {\n        gdb.ConfigNode {\n            Host     : "192.168.1.100",\n            Port     : "3306",\n            User     : "root",\n            Pass     : "123456",\n            Name     : "test",\n            Type     : "mysql",\n            Role     : "master",\n            Weight   : 100,\n        },\n        gdb.ConfigNode {\n            Host     : "192.168.1.101",\n            Port     : "3306",\n            User     : "root",\n            Pass     : "123456",\n            Name     : "test",\n            Type     : "mysql",\n            Role     : "slave",\n            Weight   : 100,\n        },\n    },\n    "user-center" : gdb.ConfigGroup {\n        gdb.ConfigNode {\n            Host     : "192.168.1.110",\n            Port     : "3306",\n            User     : "root",\n            Pass     : "123456",\n            Name     : "test",\n            Type     : "mysql",\n            Role     : "master",\n            Weight   : 100,\n        },\n    },\n})\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Subsequently, we can use ",(0,t.jsx)(n.code,{children:'gdb.NewByGroup("database group name")'})," to obtain a database operation object. This object is used for a series of subsequent database methods/chain operations."]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return s},a:function(){return r}});var a=o(667294);let t={},i=a.createContext(t);function r(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);
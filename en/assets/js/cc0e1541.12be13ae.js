"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["37812"],{815518:function(e,n,i){i.r(n),i.d(n,{metadata:()=>o,contentTitle:()=>a,default:()=>g,assets:()=>c,toc:()=>l,frontMatter:()=>s});var o=JSON.parse('{"id":"docs/\u5FAE\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u914D\u7F6E\u7BA1\u7406","title":"Service Configuration","description":"Using the configuration management component in the GoFrame framework, it supports various third-party configuration centers like Polaris, Apollo, Nacos, Consul, etc., through decoupled design. Detailed code is provided to showcase how to initialize and enable the Polaris configuration client, including usage examples and error handling methods.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u5FAE\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u914D\u7F6E\u7BA1\u7406.md","sourceDirName":"docs/\u5FAE\u670D\u52A1\u5F00\u53D1","slug":"/docs/micro-service/config-service","permalink":"/en/docs/micro-service/config-service","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u5FAE\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u914D\u7F6E\u7BA1\u7406.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732451468000,"sidebarPosition":7,"frontMatter":{"slug":"/docs/micro-service/config-service","title":"Service Configuration","sidebar_position":7,"hide_title":true,"keywords":["GoFrame","configuration management","microservices","Polaris","Apollo","Nacos","Consul","Kubernetes","container orchestration","configuration center"],"description":"Using the configuration management component in the GoFrame framework, it supports various third-party configuration centers like Polaris, Apollo, Nacos, Consul, etc., through decoupled design. Detailed code is provided to showcase how to initialize and enable the Polaris configuration client, including usage examples and error handling methods."},"sidebar":"mainSidebar","previous":{"title":"Service Load Balancing","permalink":"/en/docs/micro-service/load-balance"},"next":{"title":"Service Observability","permalink":"/en/docs/obs"}}'),t=i("785893"),r=i("250065");let s={slug:"/docs/micro-service/config-service",title:"Service Configuration",sidebar_position:7,hide_title:!0,keywords:["GoFrame","configuration management","microservices","Polaris","Apollo","Nacos","Consul","Kubernetes","container orchestration","configuration center"],description:"Using the configuration management component in the GoFrame framework, it supports various third-party configuration centers like Polaris, Apollo, Nacos, Consul, etc., through decoupled design. Detailed code is provided to showcase how to initialize and enable the Polaris configuration client, including usage examples and error handling methods."},a=void 0,c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Component Activation",id:"component-activation",level:2},{value:"Common Components",id:"common-components",level:2},{value:"Usage Example",id:"usage-example",level:2},{value:"Run <code>polaris</code>",id:"run-polaris",level:3},{value:"Run the example",id:"run-the-example",level:3},{value:"Add Test Data",id:"add-test-data",level:3},{value:"Run the example again",id:"run-the-example-again",level:3}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"GoFrame"})," framework provides a configuration management component designed with a decoupled and interface-oriented approach, allowing flexible integration with various third-party configuration management centers. The component default implementation is based on local system files. For more implementations, refer to community components: ",(0,t.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/config",children:"https://github.com/gogf/gf/tree/master/contrib/config"})]}),"\n",(0,t.jsxs)(n.p,{children:["The community components provide implementations for various popular configuration centers, such as ",(0,t.jsx)(n.code,{children:"polaris, apollo, nacos, consul"}),", and container orchestration ",(0,t.jsx)(n.code,{children:"kubernetes configmap"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"component-activation",children:"Component Activation"}),"\n",(0,t.jsxs)(n.p,{children:["The activation of the configuration management component is achieved through package initialization. Since the configuration management feature is quite fundamental, it is necessary to ensure that the community package is introduced at the very top of the ",(0,t.jsx)(n.code,{children:"main"})," package to avoid pitfalls. Here we take ",(0,t.jsx)(n.code,{children:"polaris"})," as an example, for how to use the community component: ",(0,t.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/config/polaris",children:"https://github.com/gogf/gf/tree/master/contrib/config/polaris"})]}),"\n",(0,t.jsxs)(n.p,{children:["An independent import package is needed, such as ",(0,t.jsx)(n.code,{children:"boot"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package boot\n\nimport (\n    "github.com/gogf/gf/contrib/config/polaris/v2"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc init() {\n    var (\n        ctx       = gctx.GetInitCtx()\n        namespace = "default"\n        fileGroup = "TestGroup"\n        fileName  = "config.yaml"\n        path      = "manifest/config/polaris.yaml"\n        logDir    = "/tmp/polaris/log"\n    )\n    // Create polaris Client that implements gcfg.Adapter.\n    adapter, err := polaris.New(ctx, polaris.Config{\n        Namespace: namespace,\n        FileGroup: fileGroup,\n        FileName:  fileName,\n        Path:      path,\n        LogDir:    logDir,\n        Watch:     true,\n    })\n    if err != nil {\n        g.Log().Fatalf(ctx, `%+v`, err)\n    }\n    // Change the adapter of default configuration instance.\n    g.Cfg().SetAdapter(adapter)\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Where:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Namespace"})," specifies the namespace in the ",(0,t.jsx)(n.code,{children:"polaris"})," configuration."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"FileGroup"})," specifies the file group in ",(0,t.jsx)(n.code,{children:"polaris"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"FileName"})," specifies the name of the configuration file to read in ",(0,t.jsx)(n.code,{children:"polaris"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Path"})," specifies the server-side configuration of ",(0,t.jsx)(n.code,{children:"polaris"}),", including the connection address, listening address, component output log path, etc."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The configuration file of ",(0,t.jsx)(n.code,{children:"Polaris"})," is as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'global:\n  serverConnector:\n    addresses:\n      - 127.0.0.1:8091\nconfig:\n  configConnector:\n    addresses:\n      - 127.0.0.1:8093\nconsumer:\n  localCache:\n    persistDir: "/tmp/polaris/backup"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Then introduce the ",(0,t.jsx)(n.code,{children:"boot"})," package at the top of ",(0,t.jsx)(n.code,{children:"main.go"}),", ensuring that its import is before all other components:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    _ "github.com/gogf/gf/example/config/polaris/boot"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var ctx = gctx.GetInitCtx()\n\n    // Available checks.\n    g.Dump(g.Cfg().Available(ctx))\n\n    // All key-value configurations.\n    g.Dump(g.Cfg().Data(ctx))\n\n    // Retrieve certain value by key.\n    g.Dump(g.Cfg().MustGet(ctx, "server.address"))\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Note the import statement at the top:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'_ "github.com/gogf/gf/example/config/polaris/boot"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"common-components",children:"Common Components"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Component Name"}),(0,t.jsx)(n.th,{children:"Documentation"}),(0,t.jsx)(n.th,{children:"Remark"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"file"})}),(0,t.jsx)(n.td,{children:"Built-in framework"}),(0,t.jsx)(n.td,{children:"Default implementation"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"apollo"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/config/apollo",children:"https://github.com/gogf/gf/tree/master/contrib/config/apollo"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"kubecm"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/config/kubecm",children:"https://github.com/gogf/gf/tree/master/contrib/config/kubecm"})}),(0,t.jsx)(n.td,{children:"Commonly used in container deployment environments"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"nacos"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/config/nacos",children:"https://github.com/gogf/gf/tree/master/contrib/config/nacos"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"polaris"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/config/polaris",children:"https://github.com/gogf/gf/tree/master/contrib/config/polaris"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"consul"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/config/consul",children:"https://github.com/gogf/gf/tree/master/contrib/config/consul"})}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["For more components, refer to: ",(0,t.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/config",children:"https://github.com/gogf/gf/tree/master/contrib/config"})]}),"\n",(0,t.jsx)(n.h2,{id:"usage-example",children:"Usage Example"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/example/config/polaris",children:"https://github.com/gogf/gf/tree/master/example/config/polaris"})}),"\n",(0,t.jsxs)(n.h3,{id:"run-polaris",children:["Run ",(0,t.jsx)(n.code,{children:"polaris"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run -d --name polaris -p 8080:8080 -p 8090:8090 -p 8091:8091 -p 8093:8093 loads/polaris-server-standalone:1.11.2\n"})}),"\n",(0,t.jsx)(n.h3,{id:"run-the-example",children:"Run the example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'$ go run main.go\ntrue\n{}\n"failed to update local value: config file is empty"\npanic: failed to update local value: config file is empty\n\ngoroutine 1 [running]:\ngithub.com/gogf/gf/v2/os/gcfg.(*Config).MustGet(0x0?, {0x1c1c4f8?, 0xc0000c2000?}, {0x1ac11ad?, 0x0?}, {0x0?, 0xc000002340?, 0xc000064738?})\n        /Users/john/Workspace/gogf/gf/os/gcfg/gcfg.go:167 +0x5e\nmain.main()\n        /Users/john/Workspace/gogf/gf/example/config/polaris/main.go:20 +0x1b8\n'})}),"\n",(0,t.jsxs)(n.p,{children:["As seen, the ",(0,t.jsx)(n.code,{children:"MustGet"})," method execution at the end reports an error because there is no specified namespace, configuration group, and configuration file in ",(0,t.jsx)(n.code,{children:"polaris"}),". Even if no data is retrieved, it returns an error due to configuration issues. Because the ",(0,t.jsx)(n.code,{children:"Must*"})," method is used here, when an error is returned upon execution, it will ",(0,t.jsx)(n.code,{children:"panic"})," directly instead of returning an error."]}),"\n",(0,t.jsxs)(n.p,{children:["So let's add some test data in the ",(0,t.jsx)(n.code,{children:"polaris"})," backend and try again."]}),"\n",(0,t.jsx)(n.h3,{id:"add-test-data",children:"Add Test Data"}),"\n",(0,t.jsxs)(n.p,{children:["Log in to ",(0,t.jsx)(n.a,{href:"http://127.0.0.1:8080/#/login",children:"http://127.0.0.1:8080/#/login"})," with default username ",(0,t.jsx)(n.code,{children:"polaris"})," and password ",(0,t.jsx)(n.code,{children:"polaris"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(544624).Z+"",width:"3068",height:"846"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(55021).Z+"",width:"3066",height:"1152"})}),"\n",(0,t.jsx)(n.h3,{id:"run-the-example-again",children:"Run the example again"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'$ go run main.go\ntrue\n{\n    "server": {\n        "openapiPath": "/api.json",\n        "swaggerPath": "/swagger",\n        "address":     ":8199",\n    },\n}\n<nil>\n":8199"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["We can see that the configuration data in ",(0,t.jsx)(n.code,{children:"polaris"})," has been correctly retrieved."]})]})}function g(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},55021:function(e,n,i){i.d(n,{Z:function(){return o}});let o=i.p+"assets/images/acaecb43af69ec5f149e1fbe8f74dc4b-39364e4b31cc81703969669270f9dd28.png"},544624:function(e,n,i){i.d(n,{Z:function(){return o}});let o=i.p+"assets/images/b6aa368b0594187558a778aa54a428a2-35c6edba1ffa55e3aab1270919741148.png"},250065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return s}});var o=i(667294);let t={},r=o.createContext(t);function s(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);
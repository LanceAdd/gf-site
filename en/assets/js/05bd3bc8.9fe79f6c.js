"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["47512"],{287590:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>d,toc:()=>s,frontMatter:()=>c});var r=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u914D\u7F6E\u7BA1\u7406/\u914D\u7F6E\u7BA1\u7406-\u5E38\u7528\u65B9\u6CD5","title":"Configuration - Methods","description":"Common methods in configuration management using the GoFrame framework, including how to obtain configuration data from environmental variables and command line, the Data method for acquiring and assembling configuration data, and the use of configuration adapters. Through example code, help developers better grasp the technical key points related to configuration management.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u6838\u5FC3\u7EC4\u4EF6/\u914D\u7F6E\u7BA1\u7406/\u914D\u7F6E\u7BA1\u7406-\u5E38\u7528\u65B9\u6CD5.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u914D\u7F6E\u7BA1\u7406","slug":"/docs/core/gcfg-funcs","permalink":"/en/docs/core/gcfg-funcs","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u914D\u7F6E\u7BA1\u7406/\u914D\u7F6E\u7BA1\u7406-\u5E38\u7528\u65B9\u6CD5.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732541616000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/core/gcfg-funcs","title":"Configuration - Methods","sidebar_position":2,"hide_title":true,"keywords":["GoFrame","Configuration Management","GetWithEnv","GetWithCmd","MustGetWithCmd","Data Method","Golang Configuration","Environmental Variables","Command Line Acquisition","GoFrame Framework"],"description":"Common methods in configuration management using the GoFrame framework, including how to obtain configuration data from environmental variables and command line, the Data method for acquiring and assembling configuration data, and the use of configuration adapters. Through example code, help developers better grasp the technical key points related to configuration management."},"sidebar":"mainSidebar","previous":{"title":"Configuration - File","permalink":"/en/docs/core/gcfg-file"},"next":{"title":"Configuration - Interface","permalink":"/en/docs/core/gcfg-interface"}}'),i=t("785893"),a=t("250065");let c={slug:"/docs/core/gcfg-funcs",title:"Configuration - Methods",sidebar_position:2,hide_title:!0,keywords:["GoFrame","Configuration Management","GetWithEnv","GetWithCmd","MustGetWithCmd","Data Method","Golang Configuration","Environmental Variables","Command Line Acquisition","GoFrame Framework"],description:"Common methods in configuration management using the GoFrame framework, including how to obtain configuration data from environmental variables and command line, the Data method for acquiring and assembling configuration data, and the use of configuration adapters. Through example code, help developers better grasp the technical key points related to configuration management."},o=void 0,d={},s=[{value:"<code>GetWithEnv</code>",id:"getwithenv",level:2},{value:"<code>GetWithCmd</code>",id:"getwithcmd",level:2},{value:"<code>MustGetWithCmd</code>",id:"mustgetwithcmd",level:2},{value:"<code>MustGetWithEnv</code>",id:"mustgetwithenv",level:2},{value:"<code>Data</code>",id:"data",level:2},{value:"<code>MustData</code>",id:"mustdata",level:2},{value:"<code>Get</code>",id:"get",level:2},{value:"<code>MustGet</code>",id:"mustget",level:2},{value:"<code>GetAdapter</code>",id:"getadapter",level:2},{value:"<code>SetAdapter</code>",id:"setadapter",level:2}];function l(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The following common method list may lag behind code updates in the documentation. For more methods and examples, please refer to the code documentation: ",(0,i.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gcfg",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gcfg"})]})}),"\n",(0,i.jsx)(n.h2,{id:"getwithenv",children:(0,i.jsx)(n.code,{children:"GetWithEnv"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Description","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"GetWithEnv"})," method first obtains configuration data from the default configuration file. If the result is empty, it will try to get it from the current environment variables. Note the naming conversion rules:"]}),"\n",(0,i.jsxs)(n.li,{children:["Environment variables convert the name to uppercase, and the ",(0,i.jsx)(n.code,{children:"."})," character in the name is converted to the ",(0,i.jsx)(n.code,{children:"_"})," character."]}),"\n",(0,i.jsxs)(n.li,{children:["Parameter names convert the name to lowercase, and the ",(0,i.jsx)(n.code,{children:"_"})," character in the name is converted to the ",(0,i.jsx)(n.code,{children:"."})," character."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Format:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"GetWithEnv(ctx context.Context, pattern string, def ...interface{}) (*gvar.Var, error)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Example:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func ExampleConfig_GetWithEnv() {\n      var (\n          key = `env.test`\n          ctx = gctx.New()\n      )\n      v, err := g.Cfg().GetWithEnv(ctx, key)\n      if err != nil {\n          panic(err)\n      }\n      fmt.Printf("env:%s\\n", v)\n      if err = genv.Set(`ENV_TEST`, "gf"); err != nil {\n          panic(err)\n      }\n      v, err = g.Cfg().GetWithEnv(ctx, key)\n      if err != nil {\n          panic(err)\n      }\n      fmt.Printf("env:%s", v)\n\n      // Output:\n      // env:\n      // env:gf\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"getwithcmd",children:(0,i.jsx)(n.code,{children:"GetWithCmd"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Description: The ",(0,i.jsx)(n.code,{children:"GetWithCmd"})," method is similar to the ",(0,i.jsx)(n.code,{children:"GetWithEnv"})," method. It first obtains configuration data from the default configuration object, but if the data is empty, it obtains configuration information from the command line."]}),"\n",(0,i.jsx)(n.li,{children:"Format:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"GetWithCmd(ctx context.Context, pattern string, def ...interface{}) (*gvar.Var, error)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Example:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func ExampleConfig_GetWithCmd() {\n      var (\n          key = `cmd.test`\n          ctx = gctx.New()\n      )\n      v, err := g.Cfg().GetWithCmd(ctx, key)\n      if err != nil {\n          panic(err)\n      }\n      fmt.Printf("cmd:%s\\n", v)\n      // Re-Initialize custom command arguments.\n      os.Args = append(os.Args, fmt.Sprintf(`--%s=yes`, key))\n      gcmd.Init(os.Args...)\n      // Retrieve the configuration and command option again.\n      v, err = g.Cfg().GetWithCmd(ctx, key)\n      if err != nil {\n          panic(err)\n      }\n      fmt.Printf("cmd:%s", v)\n\n      // Output:\n      // cmd:\n      // cmd:yes\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"mustgetwithcmd",children:(0,i.jsx)(n.code,{children:"MustGetWithCmd"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Description: The ",(0,i.jsx)(n.code,{children:"MustGetWithCmd"})," method is similar to the ",(0,i.jsx)(n.code,{children:"GetWithCmd"})," method. It only returns configuration content; if any error occurs internally, a ",(0,i.jsx)(n.code,{children:"panic"})," will occur."]}),"\n",(0,i.jsx)(n.li,{children:"Format:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"MustGetWithCmd(ctx context.Context, pattern string, def ...interface{}) *gvar.Var\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Example:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func ExampleConfig_MustGetWithCmd() {\n      var (\n          key = `cmd.test`\n          ctx = gctx.New()\n      )\n      v := g.Cfg().MustGetWithCmd(ctx, key)\n\n      fmt.Printf("cmd:%s\\n", v)\n      // Re-Initialize custom command arguments.\n      os.Args = append(os.Args, fmt.Sprintf(`--%s=yes`, key))\n      gcmd.Init(os.Args...)\n      // Retrieve the configuration and command option again.\n      v = g.Cfg().MustGetWithCmd(ctx, key)\n\n      fmt.Printf("cmd:%s", v)\n\n      // Output:\n      // cmd:\n      // cmd:yes\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"mustgetwithenv",children:(0,i.jsx)(n.code,{children:"MustGetWithEnv"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Description: The ",(0,i.jsx)(n.code,{children:"MustGetWithEnv"})," method is similar to the ",(0,i.jsx)(n.code,{children:"GetWithEnv"})," method. It only returns configuration content; if any error occurs internally, a ",(0,i.jsx)(n.code,{children:"panic"})," will occur."]}),"\n",(0,i.jsx)(n.li,{children:"Format:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"MustGetWithEnv(ctx context.Context, pattern string, def ...interface{}) *gvar.Var\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Example:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func ExampleConfig_MustGetWithEnv() {\n      var (\n          key = `env.test`\n          ctx = gctx.New()\n      )\n      v := g.Cfg().MustGetWithEnv(ctx, key)\n\n      fmt.Printf("env:%s\\n", v)\n      if err := genv.Set(`ENV_TEST`, "gf"); err != nil {\n          panic(err)\n      }\n      v = g.Cfg().MustGetWithEnv(ctx, key)\n\n      fmt.Printf("env:%s", v)\n\n      // Output:\n      // env:\n      // env:gf\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"data",children:(0,i.jsx)(n.code,{children:"Data"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Description: The ",(0,i.jsx)(n.code,{children:"Data"})," method obtains configuration data from the configuration object and assembles it into the ",(0,i.jsx)(n.code,{children:"map[string]interface{}"})," type."]}),"\n",(0,i.jsx)(n.li,{children:"Format:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"Data(ctx context.Context) (data map[string]interface{}, err error)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Example:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func ExampleConfig_Data() {\n      ctx := gctx.New()\n      content := `\nv1    = 1\nv2    = "true"\nv3    = "off"\nv4    = "1.23"\narray = [1,2,3]\n[redis]\n      disk  = "127.0.0.1:6379,0"\n      cache = "127.0.0.1:6379,1"\n`\n      c, err := gcfg.New()\n      if err != nil{\n          panic(err)\n      }\n      c.GetAdapter().(*gcfg.AdapterFile).SetContent(content)\n      data, err := c.Data(ctx)\n      if err != nil{\n          panic(err)\n      }\n\n      fmt.Println(data)\n\n      // Output:\n      // map[array:[1 2 3] redis:map[cache:127.0.0.1:6379,1 disk:127.0.0.1:6379,0] v1:1 v2:true v3:off v4:1.23]\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"mustdata",children:(0,i.jsx)(n.code,{children:"MustData"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Description: The ",(0,i.jsx)(n.code,{children:"MustData"})," method obtains configuration data from the configuration object and assembles it into the ",(0,i.jsx)(n.code,{children:"map[string]interface{}"})," type. It does not return an error if it encounters one internally, but instead directly ",(0,i.jsx)(n.code,{children:"panic"}),"s."]}),"\n",(0,i.jsx)(n.li,{children:"Format:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"MustData(ctx context.Context) map[string]interface{}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Example:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func ExampleConfig_MustData() {\n      ctx := gctx.New()\n      content := `\nv1    = 1\nv2    = "true"\nv3    = "off"\nv4    = "1.23"\narray = [1,2,3]\n[redis]\n      disk  = "127.0.0.1:6379,0"\n      cache = "127.0.0.1:6379,1"\n`\n      c, err := gcfg.New()\n      if err != nil{\n          panic(err)\n      }\n\n      c.GetAdapter().(*gcfg.AdapterFile).SetContent(content)\n      data := c.MustData(ctx)\n\n      fmt.Println(data)\n\n      // Output:\n      // map[array:[1 2 3] redis:map[cache:127.0.0.1:6379,1 disk:127.0.0.1:6379,0] v1:1 v2:true v3:off v4:1.23]\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"get",children:(0,i.jsx)(n.code,{children:"Get"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Description: The ",(0,i.jsx)(n.code,{children:"Get"})," method obtains configuration data from the configuration object, returning a ",(0,i.jsx)(n.code,{children:"gvar"})," generic object."]}),"\n",(0,i.jsx)(n.li,{children:"Format:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"Get(ctx context.Context, pattern string, def ...interface{}) (*gvar.Var, error)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Example:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func ExampleConfig_Get() {\n      ctx := gctx.New()\n      content := `\nv1    = 1\nv2    = "true"\nv3    = "off"\nv4    = "1.23"\narray = [1,2,3]\n[redis]\n      disk  = "127.0.0.1:6379,0"\n      cache = "127.0.0.1:6379,1"\n`\n      c, err := gcfg.New()\n      if err != nil{\n          panic(err)\n      }\n\n      c.GetAdapter().(*gcfg.AdapterFile).SetContent(content)\n      data,err := c.Get(ctx,"redis")\n\n      if err != nil {\n          panic(err)\n      }\n      fmt.Println(data)\n\n      // Output:\n      // {"cache":"127.0.0.1:6379,1","disk":"127.0.0.1:6379,0"}\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"mustget",children:(0,i.jsx)(n.code,{children:"MustGet"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Description: The ",(0,i.jsx)(n.code,{children:"MustGet"})," method is similar to ",(0,i.jsx)(n.code,{children:"Get"}),"; it also obtains configuration data from the configuration object, assembling it into a ",(0,i.jsx)(n.code,{children:"gvar"})," structure. It only returns one parameter: ",(0,i.jsx)(n.code,{children:"*gvar.Var"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Note: If the configuration file does not exist or if there\u2019s another ",(0,i.jsx)(n.code,{children:"error"}),", it will directly ",(0,i.jsx)(n.code,{children:"panic"}),"; proper exception handling is needed."]}),"\n",(0,i.jsx)(n.li,{children:"Format:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"MustGet(ctx context.Context, pattern string, def ...interface{}) *gvar.Var\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Example:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func ExampleConfig_MustGet() {\n      ctx := gctx.New()\n      content := `\nv1    = 1\nv2    = "true"\nv3    = "off"\nv4    = "1.23"\narray = [1,2,3]\n[redis]\n      disk  = "127.0.0.1:6379,0"\n      cache = "127.0.0.1:6379,1"\n`\n      c, err := gcfg.New()\n      if err != nil{\n          panic(err)\n      }\n\n      c.GetAdapter().(*gcfg.AdapterFile).SetContent(content)\n      data := c.MustGet(ctx,"redis")\n\n      fmt.Println(data)\n\n      // Output:\n      // {"cache":"127.0.0.1:6379,1","disk":"127.0.0.1:6379,0"}\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"getadapter",children:(0,i.jsx)(n.code,{children:"GetAdapter"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Description: The ",(0,i.jsx)(n.code,{children:"GetAdapter"})," method retrieves the current running ",(0,i.jsx)(n.code,{children:"gcfg"})," adapter information. For more about adapters, you can click here ",(0,i.jsx)(n.a,{href:"/en/docs/core/gcfg-interface",children:"Configuration - Interface"})]}),"\n",(0,i.jsx)(n.li,{children:"Format:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"GetAdapter() Adapter\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Example:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func ExampleConfig_GetAdapter() {\n      c, err := gcfg.New()\n      if err != nil{\n          panic(err)\n      }\n\n      adapter := c.GetAdapter()\n      fmt.Println(adapter)\n\n      // Output:\n      // &{config.toml 0xc00014d720 0xc000371880 false}\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"setadapter",children:(0,i.jsx)(n.code,{children:"SetAdapter"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Description: The ",(0,i.jsx)(n.code,{children:"SetAdapter"})," method sets the current running ",(0,i.jsx)(n.code,{children:"gcfg"})," adapter information. For more about adapters, you can click here ",(0,i.jsx)(n.a,{href:"/en/docs/core/gcfg-interface",children:"Configuration - Interface"})]}),"\n",(0,i.jsx)(n.li,{children:"Format:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"SetAdapter(adapter Adapter)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Example:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func ExampleConfig_SetAdapter() {\n      c, err := gcfg.New()\n      if err != nil{\n          panic(err)\n      }\n\n      adapter := c.GetAdapter()\n      c.SetAdapter(adapter)\n      fmt.Println(adapter)\n\n      // Output:\n      // &{config.toml 0xc00014d720 0xc000371880 false}\n}\n"})})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return c}});var r=t(667294);let i={},a=r.createContext(i);function c(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);
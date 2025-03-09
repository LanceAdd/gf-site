"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["42126"],{60326:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>s,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>r});var a=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/I18N\u56FD\u9645\u5316/I18N\u56FD\u9645\u5316-\u4F7F\u7528\u4ECB\u7ECD","title":"I18N - Example","description":"Using the i18n internationalization feature in the GoFrame framework, which includes object creation, language setting, commonly used methods, and integration with the view engine. It describes in detail how to manage language translation through singleton and independent objects, use SetLanguage and WithLanguage methods for language setting, and achieve keyword and template content translation through T and Tf methods. The article also demonstrates examples of performing internationalization operations through context settings and the view engine.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u6838\u5FC3\u7EC4\u4EF6/I18N\u56FD\u9645\u5316/I18N\u56FD\u9645\u5316-\u4F7F\u7528\u4ECB\u7ECD.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/I18N\u56FD\u9645\u5316","slug":"/docs/core/gi18n-example","permalink":"/en/docs/core/gi18n-example","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/I18N\u56FD\u9645\u5316/I18N\u56FD\u9645\u5316-\u4F7F\u7528\u4ECB\u7ECD.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1735092815000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/core/gi18n-example","title":"I18N - Example","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","i18n","internationalization","multilingual","context","template translation","context","T method","independent object","SetLanguage"],"description":"Using the i18n internationalization feature in the GoFrame framework, which includes object creation, language setting, commonly used methods, and integration with the view engine. It describes in detail how to manage language translation through singleton and independent objects, use SetLanguage and WithLanguage methods for language setting, and achieve keyword and template content translation through T and Tf methods. The article also demonstrates examples of performing internationalization operations through context settings and the view engine."},"sidebar":"mainSidebar","previous":{"title":"I18N - Configuration","permalink":"/en/docs/core/gi18n-config"},"next":{"title":"Resource","permalink":"/en/docs/core/gres"}}'),i=t("785893"),o=t("250065");let r={slug:"/docs/core/gi18n-example",title:"I18N - Example",sidebar_position:1,hide_title:!0,keywords:["GoFrame","i18n","internationalization","multilingual","context","template translation","context","T method","independent object","SetLanguage"],description:"Using the i18n internationalization feature in the GoFrame framework, which includes object creation, language setting, commonly used methods, and integration with the view engine. It describes in detail how to manage language translation through singleton and independent objects, use SetLanguage and WithLanguage methods for language setting, and achieve keyword and template content translation through T and Tf methods. The article also demonstrates examples of performing internationalization operations through context settings and the view engine."},s=void 0,l={},d=[{value:"Object Creation",id:"object-creation",level:2},{value:"Singleton Object",id:"singleton-object",level:3},{value:"Independent Object",id:"independent-object",level:3},{value:"Language Setting",id:"language-setting",level:2},{value:"<code>SetLanguage</code>",id:"setlanguage",level:3},{value:"<code>WithLanguage</code>",id:"withlanguage",level:3},{value:"Common Methods",id:"common-methods",level:2},{value:"<code>T</code> Method",id:"t-method",level:3},{value:"1) Directory Structure",id:"1-directory-structure",level:4},{value:"2) Translation Files",id:"2-translation-files",level:4},{value:"3) Sample Code",id:"3-sample-code",level:4},{value:"<code>Tf</code> Method",id:"tf-method",level:3},{value:"1) Directory Structure",id:"1-directory-structure-1",level:4},{value:"2) <strong>Translation Files</strong>",id:"2-translation-files-1",level:4},{value:"3) <strong>Sample Code</strong>",id:"3-sample-code-1",level:4},{value:"Context setting for translation language",id:"context-setting-for-translation-language",level:3},{value:"1) Directory Structure",id:"1-directory-structure-2",level:4},{value:"2) Translation Files",id:"2-translation-files-2",level:4},{value:"3) Sample Code",id:"3-sample-code-2",level:4},{value:"<code>I18N</code> and the View Engine",id:"i18n-and-the-view-engine",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"object-creation",children:"Object Creation"}),"\n",(0,i.jsx)(n.h3,{id:"singleton-object",children:"Singleton Object"}),"\n",(0,i.jsxs)(n.p,{children:["In most scenarios, we recommend using the ",(0,i.jsx)(n.code,{children:"g.I18n"})," singleton object and allowing customization of different singleton objects. However, it is important to note that modifications to the configuration of a singleton object are globally effective. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'g.I18n().T(context.TODO(), "{#hello} {#world}")\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["In all translation methods, the first parameter requires the input of a ",(0,i.jsx)(n.code,{children:"Context"})," context variable parameter, which is used for context variable transmission, specifying the translation language, and for future extensibility. Although this parameter can also be directly passed as ",(0,i.jsx)(n.code,{children:"nil"}),", for the sake of program rigor, it is recommended that you pass ",(0,i.jsx)(n.code,{children:"context.TODO()"})," or ",(0,i.jsx)(n.code,{children:"context.Background()"})," when you are unsure of what to pass or have no special requirements."]})}),"\n",(0,i.jsx)(n.h3,{id:"independent-object",children:"Independent Object"}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, we can modularly use the ",(0,i.jsx)(n.code,{children:"gi18n"})," module independently by creating an independent ",(0,i.jsx)(n.code,{children:"i18n"})," object with the ",(0,i.jsx)(n.code,{children:"gi18n.New()"})," method, then managed by the developer. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'i18n := gi18n.New()\ni18n.T(context.TODO(), "{#hello} {#world}")\n'})}),"\n",(0,i.jsx)(n.h2,{id:"language-setting",children:"Language Setting"}),"\n",(0,i.jsxs)(n.p,{children:["There are two ways to set the translation language: one is through the ",(0,i.jsx)(n.code,{children:"SetLanguage"})," method to set a unified translation language for the current ",(0,i.jsx)(n.code,{children:"I18N"})," object, and the other is through context setting for the language of the currently executing translation."]}),"\n",(0,i.jsx)(n.h3,{id:"setlanguage",children:(0,i.jsx)(n.code,{children:"SetLanguage"})}),"\n",(0,i.jsxs)(n.p,{children:["For example, we can set the current translation object's language with ",(0,i.jsx)(n.code,{children:'g.I18n().SetLanguage("zh-CN")'}),". Thereafter, any usage of this object will perform translation in ",(0,i.jsx)(n.code,{children:"zh-CN"}),". It is important to note that the configuration method of the component is also not concurrency-safe, and this method should be set during program initialization and not be changed during runtime."]}),"\n",(0,i.jsx)(n.h3,{id:"withlanguage",children:(0,i.jsx)(n.code,{children:"WithLanguage"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"WithLanguage"})," method can create a new context variable and temporarily set the language of your current translation. Since this method acts on the ",(0,i.jsx)(n.code,{children:"Context"}),", it is concurrency-safe and is often used for runtime translation language setting. Let's see an example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'ctx := gi18n.WithLanguage(context.TODO(), "zh-CN")\ni18n.Translate(ctx, `hello`)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"WithLanguage"})," method is defined as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// WithLanguage append language setting to the context and returns a new context.\nfunc WithLanguage(ctx context.Context, language string) context.Context\n"})}),"\n",(0,i.jsx)(n.p,{children:"It is used to set the translation language in the context variable and return a new context variable, which can be used for subsequent translation methods."}),"\n",(0,i.jsx)(n.h2,{id:"common-methods",children:"Common Methods"}),"\n",(0,i.jsxs)(n.h3,{id:"t-method",children:[(0,i.jsx)(n.code,{children:"T"})," Method"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"T"})," method is an alias for the ",(0,i.jsx)(n.code,{children:"Translate"})," method, and it's the name we recommend using most of the time. The ",(0,i.jsx)(n.code,{children:"T"})," method can take a keyword name or be directly given template content, and it will automatically translate and return the translated string."]}),"\n",(0,i.jsxs)(n.p,{children:["Additionally, the ",(0,i.jsx)(n.code,{children:"T"})," method can specify the target language name to be translated through a second language parameter. This name should match those in the configuration files/paths and is often a standardized international language abbreviation such as: ",(0,i.jsx)(n.code,{children:"en/ja/ru/zh-CN/zh-TW"}),", etc. Otherwise, it will automatically use the language set in the ",(0,i.jsx)(n.code,{children:"Manager"})," translation object for translation."]}),"\n",(0,i.jsx)(n.p,{children:"Method definition:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// T translates <content> with configured language and returns the translated content.\nfunc T(ctx context.Context, content string)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Keyword Translation"})}),"\n",(0,i.jsxs)(n.p,{children:["For keyword translation, simply pass the keyword to the ",(0,i.jsx)(n.code,{children:"T"})," method, such as: ",(0,i.jsx)(n.code,{children:'T(context.TODO(), "hello")'}),", ",(0,i.jsx)(n.code,{children:'T(context.TODO(), "world")'}),". The ",(0,i.jsx)(n.code,{children:"I18N"})," component will prioritize translating the given keyword and return the translated content; otherwise, the original content is displayed."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Template Content Translation"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"T"})," method supports template content translation, where keywords in the template are by default enclosed using ",(0,i.jsx)(n.code,{children:"{#"})," and ",(0,i.jsx)(n.code,{children:"}"})," tags. During template parsing, it will automatically replace the keyword contents within these tags. Example usage:"]}),"\n",(0,i.jsx)(n.h4,{id:"1-directory-structure",children:"1) Directory Structure"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\u251C\u2500\u2500 main.go\n\u2514\u2500\u2500 i18n\n    \u251C\u2500\u2500 en.toml\n    \u251C\u2500\u2500 ja.toml\n    \u251C\u2500\u2500 ru.toml\n    \u2514\u2500\u2500 zh-CN.toml\n"})}),"\n",(0,i.jsx)(n.h4,{id:"2-translation-files",children:"2) Translation Files"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"ja.toml"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'hello = "\u3053\u3093\u306B\u3061\u306F"\nworld = "\u4E16\u754C"\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"ru.toml"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'hello = "\u041F\u0440\u0438\u0432\u0435\u0442"\nworld = "\u043C\u0438\u0440"\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"zh-CN.toml"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'hello = "\u4F60\u597D"\nworld = "\u4E16\u754C"\n'})}),"\n",(0,i.jsx)(n.h4,{id:"3-sample-code",children:"3) Sample Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/os/gctx"\n\n    "github.com/gogf/gf/v2/i18n/gi18n"\n)\n\nfunc main() {\n    var (\n        ctx  = gctx.New()\n        i18n = gi18n.New()\n    )\n\n    i18n.SetLanguage("en")\n    fmt.Println(i18n.Translate(ctx, `hello`))\n    fmt.Println(i18n.Translate(ctx, `GF says: {#hello}{#world}!`))\n\n    i18n.SetLanguage("ja")\n    fmt.Println(i18n.Translate(ctx, `hello`))\n    fmt.Println(i18n.Translate(ctx, `GF says: {#hello}{#world}!`))\n\n    i18n.SetLanguage("ru")\n    fmt.Println(i18n.Translate(ctx, `hello`))\n    fmt.Println(i18n.Translate(ctx, `GF says: {#hello}{#world}!`))\n\n    ctx = gi18n.WithLanguage(ctx, "zh-CN")\n    fmt.Println(i18n.Translate(ctx, `hello`))\n    fmt.Println(i18n.Translate(ctx, `GF says: {#hello}{#world}!`))\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"After execution, the terminal output is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Hello\nGF says: HelloWorld!\n\u3053\u3093\u306B\u3061\u306F\nGF says: \u3053\u3093\u306B\u3061\u306F\u4E16\u754C!\n\u041F\u0440\u0438\u0432\u0435\u0442\nGF says: \u041F\u0440\u0438\u0432\u0435\u0442\u043C\u0438\u0440!\n\u4F60\u597D\nGF says: \u4F60\u597D\u4E16\u754C!\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"tf-method",children:[(0,i.jsx)(n.code,{children:"Tf"})," Method"]}),"\n",(0,i.jsxs)(n.p,{children:["We know that there will also be some variables in the template content, and these variables can be translated with the ",(0,i.jsx)(n.code,{children:"Tf"})," method."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Tf"})," is an alias for ",(0,i.jsx)(n.code,{children:"TranslateFormat"}),". This method supports formatting translated content, and the string formatting syntax refers to the ",(0,i.jsx)(n.code,{children:"Sprintf"})," method of the standard library ",(0,i.jsx)(n.code,{children:"fmt"})," package."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Method Definition:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// Tf translates, formats and returns the <format> with configured language\n// and given <values>.\nfunc Tf(ctx context.Context, format string, values ...interface{}) string\n"})}),"\n",(0,i.jsx)(n.p,{children:"Let's take a simple example."}),"\n",(0,i.jsx)(n.h4,{id:"1-directory-structure-1",children:"1) Directory Structure"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\u251C\u2500\u2500 main.go\n\u2514\u2500\u2500 i18n\n    \u251C\u2500\u2500 en.toml\n    \u2514\u2500\u2500 zh-CN.toml\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"2-translation-files-1",children:["2) ",(0,i.jsx)(n.strong,{children:"Translation Files"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"en.toml"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'OrderPaid = "You have successfully complete order #%d payment, paid amount: \uFFE5%0.2f."\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"zh-CN.toml"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'OrderPaid = "\u60A8\u5DF2\u6210\u529F\u5B8C\u6210\u8BA2\u5355\u53F7 #%d \u652F\u4ED8\uFF0C\u652F\u4ED8\u91D1\u989D\uFFE5%.2f\u3002"\n'})}),"\n",(0,i.jsxs)(n.h4,{id:"3-sample-code-1",children:["3) ",(0,i.jsx)(n.strong,{children:"Sample Code"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/i18n/gi18n"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx         = gctx.New()\n        orderId     = 865271654\n        orderAmount = 99.8\n    )\n\n    i18n := gi18n.New()\n    i18n.SetLanguage("en")\n    fmt.Println(i18n.Tf(ctx, `{#OrderPaid}`, orderId, orderAmount))\n\n    i18n.SetLanguage("zh-CN")\n    fmt.Println(i18n.Tf(ctx, `{#OrderPaid}`, orderId, orderAmount))\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"After execution, the terminal output is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"You have successfully complete order #865271654 payment, paid amount: \uFFE599.80.\n\u60A8\u5DF2\u6210\u529F\u5B8C\u6210\u8BA2\u5355\u53F7 #865271654 \u652F\u4ED8\uFF0C\u652F\u4ED8\u91D1\u989D\uFFE599.80\u3002\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["For demonstration purposes, the handling of the payment amount in this example is quite simple. In actual projects, it is often necessary to automatically convert the currency unit according to the region in the business code before rendering the ",(0,i.jsx)(n.code,{children:"i18n"})," display content."]})}),"\n",(0,i.jsx)(n.h3,{id:"context-setting-for-translation-language",children:"Context setting for translation language"}),"\n",(0,i.jsx)(n.p,{children:"We will make some changes to the above example for demonstration."}),"\n",(0,i.jsx)(n.h4,{id:"1-directory-structure-2",children:"1) Directory Structure"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\u251C\u2500\u2500 main.go\n\u2514\u2500\u2500 i18n\n    \u251C\u2500\u2500 en.toml\n    \u2514\u2500\u2500 zh-CN.toml\n"})}),"\n",(0,i.jsx)(n.h4,{id:"2-translation-files-2",children:"2) Translation Files"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"en.toml"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'OrderPaid = "You have successfully complete order #%d payment, paid amount: \uFFE5%0.2f."\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"zh-CN.toml"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'OrderPaid = "\u60A8\u5DF2\u6210\u529F\u5B8C\u6210\u8BA2\u5355\u53F7 #%d \u652F\u4ED8\uFF0C\u652F\u4ED8\u91D1\u989D\uFFE5%.2f\u3002"\n'})}),"\n",(0,i.jsx)(n.h4,{id:"3-sample-code-2",children:"3) Sample Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/i18n/gi18n"\n)\n\nfunc main() {\n    var (\n        orderId     = 865271654\n        orderAmount = 99.8\n    )\n    fmt.Println(g.I18n().Tf(\n        gi18n.WithLanguage(context.TODO(), `en`),\n        `{#OrderPaid}`, orderId, orderAmount,\n    ))\n    fmt.Println(g.I18n().Tf(\n        gi18n.WithLanguage(context.TODO(), `zh-CN`),\n        `{#OrderPaid}`, orderId, orderAmount,\n    ))\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"After execution, the terminal output is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"You have successfully complete order #865271654 payment, paid amount: \uFFE599.80.\n\u60A8\u5DF2\u6210\u529F\u5B8C\u6210\u8BA2\u5355\u53F7 #865271654 \u652F\u4ED8\uFF0C\u652F\u4ED8\u91D1\u989D\uFFE599.80\u3002\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["For demonstration purposes, the handling of the payment amount in this example is quite simple. In actual projects, it is often necessary to automatically convert the currency unit according to the region in the business code before rendering the ",(0,i.jsx)(n.code,{children:"i18n"})," display content."]})}),"\n",(0,i.jsxs)(n.h2,{id:"i18n-and-the-view-engine",children:[(0,i.jsx)(n.code,{children:"I18N"})," and the View Engine"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"gi18n"})," is already integrated into the ",(0,i.jsx)(n.code,{children:"GoFrame"})," framework's view engine by default, allowing you to directly use ",(0,i.jsx)(n.code,{children:"gi18n"})," keyword tags in template files/content. We can also set the translation language of the current request through context variables."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Additionally, we can set the template variable ",(0,i.jsx)(n.code,{children:"I18nLanguage"})," to control the parsing language of the current template, allowing different template content to be parsed according to different international languages."]})}),"\n",(0,i.jsx)(n.p,{children:"Usage example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/i18n/gi18n"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.Middleware(func(r *ghttp.Request) {\n            r.SetCtx(gi18n.WithLanguage(r.Context(), r.Get("lang", "zh-CN").String()))\n            r.Middleware.Next()\n        })\n        group.ALL("/", func(r *ghttp.Request) {\n            r.Response.WriteTplContent(`{#hello}{#world}!`)\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"After execution, visit the following pages, and the output will be:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"http://127.0.0.1:8199/",children:"http://127.0.0.1:8199"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\u4F60\u597D\u4E16\u754C!\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"http://127.0.0.1:8199/?lang=ja",children:"http://127.0.0.1:8199/?lang=ja"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\u3053\u3093\u306B\u3061\u306F\u4E16\u754C!\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var a=t(667294);let i={},o=a.createContext(i);function r(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);
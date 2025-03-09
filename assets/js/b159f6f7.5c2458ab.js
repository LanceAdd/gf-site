"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["73537"],{621996:function(e,n,t){t.r(n),t.d(n,{metadata:()=>c,contentTitle:()=>s,default:()=>a,assets:()=>l,toc:()=>o,frontMatter:()=>r});var c=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u547D\u4EE4\u7BA1\u7406/\u547D\u4EE4\u7BA1\u7406-\u57FA\u7840\u65B9\u6CD5","title":"\u547D\u4EE4\u7BA1\u7406-\u57FA\u7840\u65B9\u6CD5","description":"GoFrame\u6846\u67B6\u4E2D\u7684gcmd\u7EC4\u4EF6\u57FA\u672C\u529F\u80FD\uFF0C\u5305\u62EC\u5982\u4F55\u83B7\u53D6\u547D\u4EE4\u884C\u53C2\u6570\u548C\u9009\u9879\u53CA\u5176\u5E38\u7528\u65B9\u6CD5\u3002\u901A\u8FC7\u793A\u4F8B\u8BB2\u89E3\u5982\u4F55\u4F7F\u7528Init\u65B9\u6CD5\u81EA\u5B9A\u4E49\u547D\u4EE4\u884C\u6570\u636E\uFF0C\u4EE5\u53CA\u5982\u4F55\u5229\u7528GetArg\u548CGetOpt\u65B9\u6CD5\u5206\u522B\u83B7\u53D6\u547D\u4EE4\u884C\u53C2\u6570\u548C\u9009\u9879\uFF0C\u8BE6\u7EC6\u5C55\u793A\u4E86\u53C2\u6570\u83B7\u53D6\u548C\u9009\u9879\u83B7\u53D6\u7684\u5B9E\u73B0\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u638C\u63E1GoFrame\u4E2D\u7684\u547D\u4EE4\u7BA1\u7406\u529F\u80FD\u3002","source":"@site/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u547D\u4EE4\u7BA1\u7406/\u547D\u4EE4\u7BA1\u7406-\u57FA\u7840\u65B9\u6CD5.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u547D\u4EE4\u7BA1\u7406","slug":"/docs/core/gcmd-funcs","permalink":"/docs/core/gcmd-funcs","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u547D\u4EE4\u7BA1\u7406/\u547D\u4EE4\u7BA1\u7406-\u57FA\u7840\u65B9\u6CD5.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/core/gcmd-funcs","title":"\u547D\u4EE4\u7BA1\u7406-\u57FA\u7840\u65B9\u6CD5","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u547D\u4EE4\u7BA1\u7406","gcmd\u7EC4\u4EF6","\u57FA\u7840\u65B9\u6CD5","\u547D\u4EE4\u884C\u53C2\u6570","\u547D\u4EE4\u884C\u9009\u9879","\u53C2\u6570\u83B7\u53D6","\u9009\u9879\u83B7\u53D6","\u81EA\u5B9A\u4E49\u547D\u4EE4\u884C"],"description":"GoFrame\u6846\u67B6\u4E2D\u7684gcmd\u7EC4\u4EF6\u57FA\u672C\u529F\u80FD\uFF0C\u5305\u62EC\u5982\u4F55\u83B7\u53D6\u547D\u4EE4\u884C\u53C2\u6570\u548C\u9009\u9879\u53CA\u5176\u5E38\u7528\u65B9\u6CD5\u3002\u901A\u8FC7\u793A\u4F8B\u8BB2\u89E3\u5982\u4F55\u4F7F\u7528Init\u65B9\u6CD5\u81EA\u5B9A\u4E49\u547D\u4EE4\u884C\u6570\u636E\uFF0C\u4EE5\u53CA\u5982\u4F55\u5229\u7528GetArg\u548CGetOpt\u65B9\u6CD5\u5206\u522B\u83B7\u53D6\u547D\u4EE4\u884C\u53C2\u6570\u548C\u9009\u9879\uFF0C\u8BE6\u7EC6\u5C55\u793A\u4E86\u53C2\u6570\u83B7\u53D6\u548C\u9009\u9879\u83B7\u53D6\u7684\u5B9E\u73B0\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u638C\u63E1GoFrame\u4E2D\u7684\u547D\u4EE4\u7BA1\u7406\u529F\u80FD\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u547D\u4EE4\u7BA1\u7406-\u57FA\u672C\u6982\u5FF5","permalink":"/docs/core/gcmd-intro"},"next":{"title":"\u547D\u4EE4\u7BA1\u7406-Parser\u89E3\u6790","permalink":"/docs/core/gcmd-parser"}}'),d=t("785893"),i=t("250065");let r={slug:"/docs/core/gcmd-funcs",title:"\u547D\u4EE4\u7BA1\u7406-\u57FA\u7840\u65B9\u6CD5",sidebar_position:1,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u547D\u4EE4\u7BA1\u7406","gcmd\u7EC4\u4EF6","\u57FA\u7840\u65B9\u6CD5","\u547D\u4EE4\u884C\u53C2\u6570","\u547D\u4EE4\u884C\u9009\u9879","\u53C2\u6570\u83B7\u53D6","\u9009\u9879\u83B7\u53D6","\u81EA\u5B9A\u4E49\u547D\u4EE4\u884C"],description:"GoFrame\u6846\u67B6\u4E2D\u7684gcmd\u7EC4\u4EF6\u57FA\u672C\u529F\u80FD\uFF0C\u5305\u62EC\u5982\u4F55\u83B7\u53D6\u547D\u4EE4\u884C\u53C2\u6570\u548C\u9009\u9879\u53CA\u5176\u5E38\u7528\u65B9\u6CD5\u3002\u901A\u8FC7\u793A\u4F8B\u8BB2\u89E3\u5982\u4F55\u4F7F\u7528Init\u65B9\u6CD5\u81EA\u5B9A\u4E49\u547D\u4EE4\u884C\u6570\u636E\uFF0C\u4EE5\u53CA\u5982\u4F55\u5229\u7528GetArg\u548CGetOpt\u65B9\u6CD5\u5206\u522B\u83B7\u53D6\u547D\u4EE4\u884C\u53C2\u6570\u548C\u9009\u9879\uFF0C\u8BE6\u7EC6\u5C55\u793A\u4E86\u53C2\u6570\u83B7\u53D6\u548C\u9009\u9879\u83B7\u53D6\u7684\u5B9E\u73B0\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u638C\u63E1GoFrame\u4E2D\u7684\u547D\u4EE4\u7BA1\u7406\u529F\u80FD\u3002"},s=void 0,l={},o=[{value:"\u5E38\u7528\u65B9\u6CD5",id:"\u5E38\u7528\u65B9\u6CD5",level:2},{value:"<code>Init</code> \u81EA\u5B9A\u4E49\u547D\u4EE4\u884C",id:"init-\u81EA\u5B9A\u4E49\u547D\u4EE4\u884C",level:2},{value:"<code>GetArg*</code> \u53C2\u6570\u83B7\u53D6",id:"getarg-\u53C2\u6570\u83B7\u53D6",level:2},{value:"<code>GetOpt*</code> \u9009\u9879\u83B7\u53D6",id:"getopt-\u9009\u9879\u83B7\u53D6",level:2},{value:"<code>GetOptWithEnv</code> \u7279\u6027",id:"getoptwithenv-\u7279\u6027",level:2}];function g(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"gcmd"})," \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u5E38\u7528\u7684\u57FA\u7840\u5305\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u6309\u7167\u9ED8\u8BA4\u7684\u89E3\u6790\u89C4\u5219\uFF0C\u76F4\u63A5\u83B7\u53D6\u547D\u4EE4\u884C\u53C2\u6570\u53CA\u9009\u9879\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u5E38\u7528\u65B9\u6CD5",children:"\u5E38\u7528\u65B9\u6CD5"}),"\n",(0,d.jsxs)(n.p,{children:["\u66F4\u591A\u7EC4\u4EF6\u65B9\u6CD5\u8BF7\u53C2\u8003\u63A5\u53E3\u6587\u6863\uFF1A ",(0,d.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gcmd",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gcmd"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:"func Init(args ...string)\n\nfunc GetArg(index int, def ...string) *gvar.Var\nfunc GetArgAll() []string\n\nfunc GetOpt(name string, def ...string) *gvar.Var\nfunc GetOptAll() map[string]string\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"init-\u81EA\u5B9A\u4E49\u547D\u4EE4\u884C",children:[(0,d.jsx)(n.code,{children:"Init"})," \u81EA\u5B9A\u4E49\u547D\u4EE4\u884C"]}),"\n",(0,d.jsxs)(n.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C ",(0,d.jsx)(n.code,{children:"gcmd"})," \u7EC4\u4EF6\u4F1A\u81EA\u52A8\u4ECE ",(0,d.jsx)(n.code,{children:"os.Args"})," \u89E3\u6790\u83B7\u53D6\u53C2\u6570\u53CA\u6570\u636E\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"Init"})," \u65B9\u6CD5\u81EA\u5B9A\u4E49\u547D\u4EE4\u884C\u6570\u636E\u3002\u4F7F\u7528\u793A\u4F8B\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'func ExampleInit() {\n    gcmd.Init("gf", "build", "main.go", "-o=gf.exe", "-y")\n    fmt.Printf(`%#v`, gcmd.GetArgAll())\n\n    // Output:\n    // []string{"gf", "build", "main.go"}\n}\n'})}),"\n",(0,d.jsxs)(n.h2,{id:"getarg-\u53C2\u6570\u83B7\u53D6",children:[(0,d.jsx)(n.code,{children:"GetArg*"})," \u53C2\u6570\u83B7\u53D6"]}),"\n",(0,d.jsx)(n.p,{children:"\u53C2\u6570\u83B7\u53D6\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4E24\u4E2A\u65B9\u6CD5\uFF1A"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"GetArg"})," \u65B9\u6CD5\u7528\u4EE5\u83B7\u53D6\u9ED8\u8BA4\u89E3\u6790\u7684\u547D\u4EE4\u884C\u53C2\u6570\uFF0C\u53C2\u6570\u901A\u8FC7\u8F93\u5165\u7D22\u5F15\u4F4D\u7F6E\u83B7\u53D6\uFF0C\u7D22\u5F15\u4F4D\u7F6E\u4ECE ",(0,d.jsx)(n.code,{children:"0"})," \u5F00\u59CB\uFF0C\u4F46\u5F80\u5F80\u6211\u4EEC\u9700\u8981\u83B7\u53D6\u7684\u53C2\u6570\u662F\u4ECE ",(0,d.jsx)(n.code,{children:"1"})," \u5F00\u59CB\uFF0C\u56E0\u4E3A\u7D22\u5F15 ",(0,d.jsx)(n.code,{children:"0"})," \u7684\u53C2\u6570\u662F\u7A0B\u5E8F\u540D\u79F0\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"GetArgAll"})," \u65B9\u6CD5\u7528\u4E8E\u83B7\u53D6\u6240\u6709\u7684\u547D\u4EE4\u884C\u53C2\u6570\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'func ExampleGetArg() {\n    gcmd.Init("gf", "build", "main.go", "-o=gf.exe", "-y")\n    fmt.Printf(\n        `Arg[0]: "%v", Arg[1]: "%v", Arg[2]: "%v", Arg[3]: "%v"`,\n        gcmd.GetArg(0), gcmd.GetArg(1), gcmd.GetArg(2), gcmd.GetArg(3),\n    )\n\n    // Output:\n    // Arg[0]: "gf", Arg[1]: "build", Arg[2]: "main.go", Arg[3]: ""\n}\n\nfunc ExampleGetArgAll() {\n    gcmd.Init("gf", "build", "main.go", "-o=gf.exe", "-y")\n    fmt.Printf(`%#v`, gcmd.GetArgAll())\n\n    // Output:\n    // []string{"gf", "build", "main.go"}\n}\n'})}),"\n",(0,d.jsxs)(n.h2,{id:"getopt-\u9009\u9879\u83B7\u53D6",children:[(0,d.jsx)(n.code,{children:"GetOpt*"})," \u9009\u9879\u83B7\u53D6"]}),"\n",(0,d.jsx)(n.p,{children:"\u9009\u9879\u83B7\u53D6\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4E24\u4E2A\u65B9\u6CD5\uFF1A"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"GetOpt"})," \u65B9\u6CD5\u7528\u4EE5\u83B7\u53D6\u9ED8\u8BA4\u89E3\u6790\u7684\u547D\u4EE4\u884C\u9009\u9879\uFF0C\u9009\u9879\u901A\u8FC7\u540D\u79F0\u83B7\u53D6\uFF0C\u5E76\u4E14\u9009\u9879\u7684\u8F93\u5165\u6CA1\u6709\u987A\u5E8F\u6027\uFF0C\u53EF\u4EE5\u8F93\u5165\u5230\u4EFB\u610F\u7684\u547D\u4EE4\u884C\u4F4D\u7F6E\u3002\u5F53\u7ED9\u5B9A\u540D\u79F0\u7684\u9009\u9879\u6570\u636E\u4E0D\u5B58\u5728\u65F6\uFF0C\u8FD4\u56DE ",(0,d.jsx)(n.code,{children:"nil"}),"\u3002\u6CE8\u610F\u5224\u65AD\u4E0D\u5E26\u6570\u636E\u7684\u9009\u9879\u662F\u5426\u5B58\u5728\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"GetOpt(name) != nil"})," \u65B9\u5F0F\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"GetOptAll"})," \u65B9\u6CD5\u7528\u4E8E\u83B7\u53D6\u6240\u6709\u7684\u9009\u9879\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'func ExampleGetOpt() {\n    gcmd.Init("gf", "build", "main.go", "-o=gf.exe", "-y")\n    fmt.Printf(\n        `Opt["o"]: "%v", Opt["y"]: "%v", Opt["d"]: "%v"`,\n        gcmd.GetOpt("o"), gcmd.GetOpt("y"), gcmd.GetOpt("d", "default value"),\n    )\n\n    // Output:\n    // Opt["o"]: "gf.exe", Opt["y"]: "", Opt["d"]: "default value"\n}\n\nfunc ExampleGetOptAll() {\n    gcmd.Init("gf", "build", "main.go", "-o=gf.exe", "-y")\n    fmt.Printf(`%#v`, gcmd.GetOptAll())\n\n    // May Output:\n    // map[string]string{"o":"gf.exe", "y":""}\n}\n'})}),"\n",(0,d.jsxs)(n.h2,{id:"getoptwithenv-\u7279\u6027",children:[(0,d.jsx)(n.code,{children:"GetOptWithEnv"})," \u7279\u6027"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:"func GetOptWithEnv(key string, def ...interface{}) *gvar.Var\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8BE5\u65B9\u6CD5\u7528\u4E8E\u83B7\u53D6\u547D\u4EE4\u884C\u4E2D\u6307\u5B9A\u7684\u9009\u9879\u6570\u503C\uFF0C\u5982\u679C\u8BE5\u9009\u9879\u4E0D\u5B58\u5728\u65F6\uFF0C\u5219\u4ECE\u73AF\u5883\u53D8\u91CF\u4E2D\u8BFB\u53D6\u3002\u4F46\u662F\u4E24\u8005\u7684\u540D\u79F0\u89C4\u5219\u4F1A\u4E0D\u4E00\u6837\u3002\u4F8B\u5982\uFF1A ",(0,d.jsx)(n.code,{children:'gcmd.GetOptWithEnv("gf.debug")'})," \u5C06\u4F1A\u4F18\u5148\u53BB\u8BFB\u53D6\u547D\u4EE4\u884C\u4E2D\u7684 ",(0,d.jsx)(n.code,{children:"gf.debug"})," \u9009\u9879\uFF0C\u5F53\u4E0D\u5B58\u5728\u65F6\uFF0C\u5219\u4F1A\u53BB\u8BFB\u53D6 ",(0,d.jsx)(n.code,{children:"GF_DEBUG"})," \u73AF\u5883\u53D8\u91CF\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u9700\u8981\u6CE8\u610F\u7684\u662F\u53C2\u6570\u547D\u540D\u8F6C\u6362\u89C4\u5219\uFF1A"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u73AF\u5883\u53D8\u91CF\u4F1A\u5C06\u540D\u79F0\u8F6C\u6362\u4E3A\u5927\u5199\uFF0C\u540D\u79F0\u4E2D\u7684 ",(0,d.jsx)(n.code,{children:"."})," \u5B57\u7B26\u8F6C\u6362\u4E3A ",(0,d.jsx)(n.code,{children:"_"})," \u5B57\u7B26\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u547D\u4EE4\u884C\u4E2D\u4F1A\u5C06\u540D\u79F0\u8F6C\u6362\u4E3A\u5C0F\u5199\uFF0C\u540D\u79F0\u4E2D\u7684 ",(0,d.jsx)(n.code,{children:"_"})," \u5B57\u7B26\u8F6C\u6362\u4E3A ",(0,d.jsx)(n.code,{children:"."})," \u5B57\u7B26\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'func ExampleGetOptWithEnv() {\n    fmt.Printf("Opt[gf.test]:%s\\n", gcmd.GetOptWithEnv("gf.test"))\n    _ = genv.Set("GF_TEST", "YES")\n    fmt.Printf("Opt[gf.test]:%s\\n", gcmd.GetOptWithEnv("gf.test"))\n\n    // Output:\n    // Opt[gf.test]:\n    // Opt[gf.test]:YES\n}\n'})})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(g,{...e})}):g(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var c=t(667294);let d={},i=c.createContext(d);function r(e){let n=c.useContext(i);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);
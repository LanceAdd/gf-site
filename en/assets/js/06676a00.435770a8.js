"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["71444"],{338953:function(e,n,o){o.r(n),o.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>a});var i=JSON.parse('{"id":"docs/\u5F00\u53D1\u5DE5\u5177/\u81EA\u52A8\u7F16\u8BD1-run","title":"Auto Compiling","description":"When building a project with the GoFrame framework, learn how to achieve automatic compilation through the gf run command. Although Go language does not inherently support hot compilation features, the gf run command can automatically compile and run a new version of the program when go files in the project change, aiming to improve development efficiency.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u5F00\u53D1\u5DE5\u5177/\u81EA\u52A8\u7F16\u8BD1-run.md","sourceDirName":"docs/\u5F00\u53D1\u5DE5\u5177","slug":"/docs/cli/run","permalink":"/en/docs/cli/run","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u5F00\u53D1\u5DE5\u5177/\u81EA\u52A8\u7F16\u8BD1-run.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732451468000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/cli/run","title":"Auto Compiling","sidebar_position":6,"hide_title":true,"keywords":["GoFrame","auto compile","hot compile feature","go file auto monitor","command line arguments","compile run","binary files","file path monitoring","GoFrame framework","gf run command"],"description":"When building a project with the GoFrame framework, learn how to achieve automatic compilation through the gf run command. Although Go language does not inherently support hot compilation features, the gf run command can automatically compile and run a new version of the program when go files in the project change, aiming to improve development efficiency."},"sidebar":"mainSidebar","previous":{"title":"DB Table To Protobuf","permalink":"/en/docs/cli/gen-pbentity"},"next":{"title":"Resource Packing","permalink":"/en/docs/cli/pack"}}'),t=o("785893"),r=o("250065");let a={slug:"/docs/cli/run",title:"Auto Compiling",sidebar_position:6,hide_title:!0,keywords:["GoFrame","auto compile","hot compile feature","go file auto monitor","command line arguments","compile run","binary files","file path monitoring","GoFrame framework","gf run command"],description:"When building a project with the GoFrame framework, learn how to achieve automatic compilation through the gf run command. Although Go language does not inherently support hot compilation features, the gf run command can automatically compile and run a new version of the program when go files in the project change, aiming to improve development efficiency."},s=void 0,c={},l=[{value:"Precautions",id:"precautions",level:2},{value:"Usage Help",id:"usage-help",level:2},{value:"Usage Example",id:"usage-example",level:2},{value:"Common Issues",id:"common-issues",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"precautions",children:"Precautions"}),"\n",(0,t.jsxs)(n.p,{children:["Since ",(0,t.jsx)(n.code,{children:"Go"})," does not support hot compilation features, every code change requires manually stopping, compiling, and running the code files. The ",(0,t.jsx)(n.code,{children:"run"})," command does not implement hot compilation but provides an automatic compilation feature. When developers modify the ",(0,t.jsx)(n.code,{children:"go"})," files in the project, this command will automatically compile the current program, stop the existing one, and run the new version."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"run"})," command will recursively monitor all ",(0,t.jsx)(n.code,{children:"go"})," file changes in the ",(0,t.jsx)(n.strong,{children:"current working directory"})," to implement automatic compilation."]})}),"\n",(0,t.jsx)(n.h2,{id:"usage-help",children:"Usage Help"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'$ gf run -h\nUSAGE\n    gf run FILE [OPTION]\n\nARGUMENT\n    FILE    building file path.\n\nOPTION\n    -p, --path         output directory path for built binary file. it\'s "./" in default\n    -e, --extra        the same options as "go run"/"go build" except some options as follows defined\n    -a, --args         custom arguments for your process\n    -w, --watchPaths   watch additional paths for live reload, separated by ",". i.e. "manifest/config/*.yaml"\n    -h, --help         more information about this command\n\nEXAMPLE\n    gf run main.go\n    gf run main.go --args "server -p 8080"\n    gf run main.go -mod=vendor\n    gf run main.go -w "manifest/config/*.yaml"\n\nDESCRIPTION\n    The "run" command is used for running go codes with hot-compiled-like feature,\n    which compiles and runs the go codes asynchronously when codes change.\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"Example of configuration file format:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'gfcli:\n  run:\n    path:  "./bin"\n    extra: ""\n    args:  "all"\n    watchPaths:\n    - api/*.go\n    - internal/controller/*.go\n'})}),"\n",(0,t.jsx)(n.p,{children:"Parameter introduction:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Meaning"}),(0,t.jsx)(n.th,{children:"Example"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"path"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"./"})}),(0,t.jsx)(n.td,{children:"Specifies the directory to store the compiled binary files."}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"extra"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["Specifies the command arguments for underlying ",(0,t.jsx)(n.code,{children:"go build"})]}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"args"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Specifies the command line arguments for running the binary files"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"watchPath"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["Specifies the file path format for local project file monitoring. Multiple paths can be separated by ",(0,t.jsx)(n.code,{children:","}),". This parameter's format is the same as the ",(0,t.jsx)(n.code,{children:"filepath.Match"})," method parameter in the standard library"]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"internal/*.go"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"usage-example",children:"Usage Example"}),"\n",(0,t.jsxs)(n.p,{children:["Generally, ",(0,t.jsx)(n.code,{children:"gf run main.go"})," is sufficient"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'$ gf run main.go --swagger\n2020-12-31 00:40:16.948 build: main.go\n2020-12-31 00:40:16.994 producing swagger files...\n2020-12-31 00:40:17.145 done!\n2020-12-31 00:40:17.216 gf pack swagger packed/swagger.go -n packed -y\n2020-12-31 00:40:17.279 done!\n2020-12-31 00:40:17.282 go build -o bin/main  main.go\n2020-12-31 00:40:18.696 go file changes: "/Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf-demos/packed/swagger.go": WRITE\n2020-12-31 00:40:18.696 build: main.go\n2020-12-31 00:40:18.775 producing swagger files...\n2020-12-31 00:40:18.911 done!\n2020-12-31 00:40:19.045 gf pack swagger packed/swagger.go -n packed -y\n2020-12-31 00:40:19.136 done!\n2020-12-31 00:40:19.144 go build -o bin/main  main.go\n2020-12-31 00:40:21.367 bin/main\n2020-12-31 00:40:21.372 build running pid: 40954\n2020-12-31 00:40:21.437 [DEBU] [ghttp] SetServerRoot path: /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf-demos/public\n2020-12-31 00:40:21.440 40954: http server started listening on [:8199]\n...\n'})}),"\n",(0,t.jsx)(n.h2,{id:"common-issues",children:"Common Issues"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/fsnotify/fsnotify/issues/129",children:"too many open files on macOS"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return s},a:function(){return a}});var i=o(667294);let t={},r=i.createContext(t);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
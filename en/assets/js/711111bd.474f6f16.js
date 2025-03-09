"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["94864"],{462445:function(e,o,r){r.r(o),r.d(o,{metadata:()=>n,contentTitle:()=>a,default:()=>d,assets:()=>c,toc:()=>s,frontMatter:()=>g});var n=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u5806\u6808\u6253\u5370","title":"Logging - Stack Printing","description":"The stack printing feature in the GoFrame framework log component allows developers to automatically print the stack information of logging method invocations. This feature can be triggered by various error log output methods like Notice*/Warning*/Error*/Critical*/Panic*/Fatal*, or obtained/printed via GetStack/PrintStack. This stack information is very useful for debugging error log information, especially in handling complex applications. This article helps developers better understand and apply the stack printing features of the log component through code examples.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u5806\u6808\u6253\u5370.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6","slug":"/docs/core/glog-stack","permalink":"/en/docs/core/glog-stack","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u5806\u6808\u6253\u5370.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732440306000,"sidebarPosition":9,"frontMatter":{"slug":"/docs/core/glog-stack","title":"Logging - Stack Printing","sidebar_position":9,"hide_title":true,"keywords":["GoFrame","GoFrame framework","log component","stack printing","glog","GetStack","PrintStack","gerror","error log","debugging"],"description":"The stack printing feature in the GoFrame framework log component allows developers to automatically print the stack information of logging method invocations. This feature can be triggered by various error log output methods like Notice*/Warning*/Error*/Critical*/Panic*/Fatal*, or obtained/printed via GetStack/PrintStack. This stack information is very useful for debugging error log information, especially in handling complex applications. This article helps developers better understand and apply the stack printing features of the log component through code examples."},"sidebar":"mainSidebar","previous":{"title":"Logging - Asynchronous Output","permalink":"/en/docs/core/glog-async"},"next":{"title":"Logging - Debug Info","permalink":"/en/docs/core/glog-debug"}}'),t=r("785893"),i=r("250065");let g={slug:"/docs/core/glog-stack",title:"Logging - Stack Printing",sidebar_position:9,hide_title:!0,keywords:["GoFrame","GoFrame framework","log component","stack printing","glog","GetStack","PrintStack","gerror","error log","debugging"],description:"The stack printing feature in the GoFrame framework log component allows developers to automatically print the stack information of logging method invocations. This feature can be triggered by various error log output methods like Notice*/Warning*/Error*/Critical*/Panic*/Fatal*, or obtained/printed via GetStack/PrintStack. This stack information is very useful for debugging error log information, especially in handling complex applications. This article helps developers better understand and apply the stack printing features of the log component through code examples."},a=void 0,c={},s=[{value:"Example 1, Triggered by <code>Error</code> Method",id:"example-1-triggered-by-error-method",level:3},{value:"Example 2, Print via <code>Stack</code> Method",id:"example-2-print-via-stack-method",level:3},{value:"Example 3, Print <code>gerror.Error</code>",id:"example-3-print-gerrorerror",level:3}];function l(e){let o={code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:["Error log information supports the ",(0,t.jsx)(o.code,{children:"Stack"})," feature, which can automatically print the stack information of the current invocation of log component methods. This stack information can be triggered by error log output methods like ",(0,t.jsx)(o.code,{children:"Notice*/Warning*/Error*/Critical*/Panic*/Fatal*"}),", or obtained/printed via ",(0,t.jsx)(o.code,{children:"GetStack/PrintStack"}),". The ",(0,t.jsx)(o.code,{children:"stack"})," information of error messages is quite useful for debugging."]}),"\n",(0,t.jsxs)(o.h3,{id:"example-1-triggered-by-error-method",children:["Example 1, Triggered by ",(0,t.jsx)(o.code,{children:"Error"})," Method"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc Test(ctx context.Context) {\n    glog.Error(ctx, "This is error!")\n}\n\nfunc main() {\n    ctx := context.TODO()\n    Test(ctx)\n}\n\n'})}),"\n",(0,t.jsx)(o.p,{children:"The printed result is as follows:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-html",children:"2022-01-05 15:08:54.998 [ERRO] This is error!\nStack:\n1.  main.Test\n    C:/hailaz/test/main.go:10\n2.  main.main\n    C:/hailaz/test/main.go:15\n"})}),"\n",(0,t.jsxs)(o.h3,{id:"example-2-print-via-stack-method",children:["Example 2, Print via ",(0,t.jsx)(o.code,{children:"Stack"})," Method"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc main() {\n    ctx := context.TODO()\n    glog.PrintStack(ctx)\n    glog.New().PrintStack(ctx)\n\n    fmt.Println(glog.GetStack())\n    fmt.Println(glog.New().GetStack())\n}\n\n'})}),"\n",(0,t.jsx)(o.p,{children:"After execution, the output is:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-html",children:"2019-07-12 22:20:28.070 Stack:\n1. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_stack.go:11\n\n2019-07-12 22:20:28.070 Stack:\n1. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_stack.go:12\n\n1. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_stack.go:14\n\n1. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_stack.go:15\n"})}),"\n",(0,t.jsxs)(o.h3,{id:"example-3-print-gerrorerror",children:["Example 3, Print ",(0,t.jsx)(o.code,{children:"gerror.Error"})]}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"glog"})," logging module supports stack printing for both standard errors and ",(0,t.jsx)(o.code,{children:"gerror"})," errors."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "errors"\n\n    "github.com/gogf/gf/v2/errors/gerror"\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc MakeError() error {\n    return errors.New("connection closed with normal error")\n}\n\nfunc MakeGError() error {\n    return gerror.New("connection closed with gerror")\n}\n\nfunc TestGError(ctx context.Context) {\n    err1 := MakeError()\n    err2 := MakeGError()\n    glog.Error(ctx, err1)\n    glog.Errorf(ctx, "%+v", err2)\n}\n\nfunc main() {\n    ctx := context.TODO()\n    TestGError(ctx)\n}\n\n'})}),"\n",(0,t.jsx)(o.p,{children:"After execution, the terminal output is:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-html",children:"2019-07-12 22:23:11.467 [ERRO] connection closed with normal error\nStack:\n1. main.TestGError\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_gerror.go:20\n2. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_gerror.go:25\n\n2019-07-12 22:23:11.467 [ERRO] connection closed with gerror\n1. connection closed with gerror\n    1). main.MakeGError\n        /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_gerror.go:14\n    2). main.TestGError\n        /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_gerror.go:19\n    3). main.main\n        /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_gerror.go:25\nStack:\n1. main.TestGError\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_gerror.go:21\n2. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_gerror.go:25\n"})})]})}function d(e={}){let{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return a},a:function(){return g}});var n=r(667294);let t={},i=n.createContext(t);function g(e){let o=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:g(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);
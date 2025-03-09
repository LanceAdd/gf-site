"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["1426"],{980919:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>m,assets:()=>r,toc:()=>d,frontMatter:()=>a});var i=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer/\u5B9A\u65F6\u5668-\u57FA\u672C\u4F7F\u7528","title":"Timer - Usage","description":"Using the timer component in the GoFrame framework, including basic usage, singleton tasks, delayed tasks, and scheduled operations through SetTimeout and SetInterval methods. Detailed explanation of the implementation and execution results of these scheduled tasks, and demonstration of how to use the Exit method to exit timed tasks.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer/\u5B9A\u65F6\u5668-\u57FA\u672C\u4F7F\u7528.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer","slug":"/docs/components/os-gtimer-example","permalink":"/en/docs/components/os-gtimer-example","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer/\u5B9A\u65F6\u5668-\u57FA\u672C\u4F7F\u7528.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732443619000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/components/os-gtimer-example","title":"Timer - Usage","sidebar_position":0,"hide_title":true,"keywords":["Timer","Basic Usage","Singleton Task","Delayed Task","SetTimeout","SetInterval","Task Exit","GoFrame","GoFrame Framework","gtimer"],"description":"Using the timer component in the GoFrame framework, including basic usage, singleton tasks, delayed tasks, and scheduled operations through SetTimeout and SetInterval methods. Detailed explanation of the implementation and execution results of these scheduled tasks, and demonstration of how to use the Exit method to exit timed tasks."},"sidebar":"mainSidebar","previous":{"title":"Timer","permalink":"/en/docs/components/os-gtimer"},"next":{"title":"Timer - Performance","permalink":"/en/docs/components/os-gtimer-benchmark"}}'),o=t("785893"),s=t("250065");let a={slug:"/docs/components/os-gtimer-example",title:"Timer - Usage",sidebar_position:0,hide_title:!0,keywords:["Timer","Basic Usage","Singleton Task","Delayed Task","SetTimeout","SetInterval","Task Exit","GoFrame","GoFrame Framework","gtimer"],description:"Using the timer component in the GoFrame framework, including basic usage, singleton tasks, delayed tasks, and scheduled operations through SetTimeout and SetInterval methods. Detailed explanation of the implementation and execution results of these scheduled tasks, and demonstration of how to use the Exit method to exit timed tasks."},c=void 0,r={},d=[{value:"Basic Example",id:"basic-example",level:2},{value:"Singleton Task",id:"singleton-task",level:2},{value:"Delayed Task",id:"delayed-task",level:2},{value:"<code>SetTimeout</code> and <code>SetInterval</code>",id:"settimeout-and-setinterval",level:2},{value:"<code>Exit</code> Method to Exit",id:"exit-method-to-exit",level:2}];function l(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"basic-example",children:"Basic Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gtime"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "time"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n        now = time.Now()\n    )\n    gtimer.AddTimes(ctx, time.Second, 10, func(ctx context.Context) {\n        fmt.Println(gtime.Now(), time.Duration(time.Now().UnixNano()-now.UnixNano()))\n        now = time.Now()\n    })\n\n    select {}\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"After execution, the output is:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"2021-05-27 13:28:19 1.004516s\n2021-05-27 13:28:20 997.262ms\n2021-05-27 13:28:21 999.972ms\n2021-05-27 13:28:22 1.00112s\n2021-05-27 13:28:23 998.773ms\n2021-05-27 13:28:24 999.957ms\n2021-05-27 13:28:25 1.002468s\n2021-05-27 13:28:26 997.468ms\n2021-05-27 13:28:27 999.981ms\n2021-05-27 13:28:28 1.002504s\n"})}),"\n",(0,o.jsx)(n.h2,{id:"singleton-task",children:"Singleton Task"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/glog"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "time"\n)\n\nfunc main() {\n    var (\n        ctx      = gctx.New()\n        interval = time.Second\n    )\n\n    gtimer.AddSingleton(ctx, interval, func(ctx context.Context) {\n        glog.Print(ctx, "doing")\n        time.Sleep(5 * time.Second)\n    })\n\n    select {}\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"After execution, the output is:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"2021-11-14 11:50:42.192 {189cwi9mo40cfp73guzhugo100tnuedg} doing\n2021-11-14 11:50:48.190 {189cwi9mo40cfp73guzhugo100tnuedg} doing\n2021-11-14 11:50:54.192 {189cwi9mo40cfp73guzhugo100tnuedg} doing\n2021-11-14 11:51:00.189 {189cwi9mo40cfp73guzhugo100tnuedg} doing\n...\n"})}),"\n",(0,o.jsx)(n.h2,{id:"delayed-task",children:"Delayed Task"}),"\n",(0,o.jsxs)(n.p,{children:["Delayed tasks refer to scheduled tasks that take effect after a specified time. We can create delayed tasks using ",(0,o.jsx)(n.code,{children:"DelayAdd*"})," related methods."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gtime"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "time"\n)\n\nfunc main() {\n    var (\n        ctx      = gctx.New()\n        delay    = time.Second\n        interval = time.Second\n    )\n    fmt.Println("Start:", gtime.Now())\n    gtimer.DelayAdd(\n        ctx,\n        delay,\n        interval,\n        func(ctx context.Context) {\n            fmt.Println("Running:", gtime.Now())\n        },\n    )\n    select {}\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"After execution, the terminal output is:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Start: 2021-05-27 13:26:02\nRunning: 2021-05-27 13:26:04\nRunning: 2021-05-27 13:26:05\nRunning: 2021-05-27 13:26:06\nRunning: 2021-05-27 13:26:07\nRunning: 2021-05-27 13:26:08\nRunning: 2021-05-27 13:26:09\nRunning: 2021-05-27 13:26:10\nRunning: 2021-05-27 13:26:11\n...\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"settimeout-and-setinterval",children:[(0,o.jsx)(n.code,{children:"SetTimeout"})," and ",(0,o.jsx)(n.code,{children:"SetInterval"})]}),"\n",(0,o.jsxs)(n.p,{children:["These two methods are common scheduling methods from ",(0,o.jsx)(n.code,{children:"JavaScript"}),". ",(0,o.jsx)(n.code,{children:"SetTimeout"})," is used to create a scheduled task that executes only once. However, you can achieve infinite interval execution through recursive calls to ",(0,o.jsx)(n.code,{children:"SetTimeout"}),". ",(0,o.jsx)(n.code,{children:"SetInterval"})," is used to create scheduled tasks that execute at intervals without exiting."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gtime"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "time"\n)\n\nfunc main() {\n    var (\n        ctx      = gctx.New()\n        timeout  = time.Second\n        interval = time.Second\n    )\n    gtimer.SetTimeout(ctx, timeout, func(ctx context.Context) {\n        fmt.Println("SetTimeout:", gtime.Now())\n    })\n    gtimer.SetInterval(ctx, interval, func(ctx context.Context) {\n        fmt.Println("SetInterval:", gtime.Now())\n    })\n    select {}\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"After execution, the terminal output is:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"SetInterval: 2021-05-27 13:20:50\nSetTimeout: 2021-05-27 13:20:50\nSetInterval: 2021-05-27 13:20:51\nSetInterval: 2021-05-27 13:20:52\nSetInterval: 2021-05-27 13:20:53\nSetInterval: 2021-05-27 13:20:54\nSetInterval: 2021-05-27 13:20:55\nSetInterval: 2021-05-27 13:20:56\nSetInterval: 2021-05-27 13:20:57\nSetInterval: 2021-05-27 13:20:58\n...\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"exit-method-to-exit",children:[(0,o.jsx)(n.code,{children:"Exit"})," Method to Exit"]}),"\n",(0,o.jsxs)(n.p,{children:["We can use the ",(0,o.jsx)(n.code,{children:"Exit"})," method in scheduled tasks to forcefully exit the continuation of the task, which will then be removed from the scheduler."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gtime"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "time"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n    )\n    gtimer.SetInterval(ctx, time.Second, func(ctx context.Context) {\n        fmt.Println("exit:", gtime.Now())\n        gtimer.Exit()\n    })\n    select {}\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"After execution, the terminal output is:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"exit: 2021-05-27 13:31:24\n"})})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var i=t(667294);let o={},s=i.createContext(o);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
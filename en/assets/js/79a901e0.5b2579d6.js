"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["67895"],{879637:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>a,assets:()=>s,toc:()=>d,frontMatter:()=>c});var t=JSON.parse('{"id":"\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u8FDB\u7A0B\u7BA1\u7406-gproc/\u8FDB\u7A0B\u7BA1\u7406-\u57FA\u672C\u4F7F\u7528","title":"\u8FDB\u7A0B\u7BA1\u7406-\u57FA\u672C\u4F7F\u7528","description":"\u6267\u884CShell\u547D\u4EE4","source":"@site/versioned_docs/version-2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u8FDB\u7A0B\u7BA1\u7406-gproc/\u8FDB\u7A0B\u7BA1\u7406-\u57FA\u672C\u4F7F\u7528.md","sourceDirName":"\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u8FDB\u7A0B\u7BA1\u7406-gproc","slug":"/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u8FDB\u7A0B\u7BA1\u7406-gproc/\u8FDB\u7A0B\u7BA1\u7406-\u57FA\u672C\u4F7F\u7528","permalink":"/en/2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u8FDB\u7A0B\u7BA1\u7406-gproc/\u8FDB\u7A0B\u7BA1\u7406-\u57FA\u672C\u4F7F\u7528","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u8FDB\u7A0B\u7BA1\u7406-gproc/\u8FDB\u7A0B\u7BA1\u7406-\u57FA\u672C\u4F7F\u7528.md","tags":[],"version":"2.3.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"\u8FDB\u7A0B\u7BA1\u7406-\u57FA\u672C\u4F7F\u7528","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u8FDB\u7A0B\u7BA1\u7406-gproc","permalink":"/en/2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u8FDB\u7A0B\u7BA1\u7406-gproc/"},"next":{"title":"\u8FDB\u7A0B\u7BA1\u7406-\u8FDB\u7A0B\u901A\u4FE1","permalink":"/en/2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u8FDB\u7A0B\u7BA1\u7406-gproc/\u8FDB\u7A0B\u7BA1\u7406-\u8FDB\u7A0B\u901A\u4FE1"}}'),r=i("785893"),o=i("250065");let c={title:"\u8FDB\u7A0B\u7BA1\u7406-\u57FA\u672C\u4F7F\u7528",sidebar_position:0,hide_title:!0},l=void 0,s={},d=[{value:"\u6267\u884CShell\u547D\u4EE4",id:"\u6267\u884Cshell\u547D\u4EE4",level:2},{value:"\u4E3B\u8FDB\u7A0B\u4E0E\u5B50\u8FDB\u7A0B",id:"\u4E3B\u8FDB\u7A0B\u4E0E\u5B50\u8FDB\u7A0B",level:2},{value:"\u591A\u8FDB\u7A0B\u7BA1\u7406",id:"\u591A\u8FDB\u7A0B\u7BA1\u7406",level:2}];function g(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u6267\u884Cshell\u547D\u4EE4",children:"\u6267\u884CShell\u547D\u4EE4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gproc"\n)\n\nfunc main() {\n    r, err := gproc.ShellExec(gctx.New(), `sleep 3; echo "hello gf!";`)\n    fmt.Println("result:", r)\n    fmt.Println(err)\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u53EF\u4EE5\u770B\u5230\u7A0B\u5E8F\u7B49\u5F85\u4E863\u79D2\u4E4B\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"result: hello gf!\n\n<nil>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4E3B\u8FDB\u7A0B\u4E0E\u5B50\u8FDB\u7A0B",children:"\u4E3B\u8FDB\u7A0B\u4E0E\u5B50\u8FDB\u7A0B"}),"\n",(0,r.jsxs)(n.p,{children:["\u7531 ",(0,r.jsx)(n.code,{children:"gproc.Manager"})," \u5BF9\u8C61\u521B\u5EFA\u7684\u8FDB\u7A0B\u90FD\u9ED8\u8BA4\u5E26\u5B50\u8FDB\u7A0B\u6807\u8BC6\uFF0C\u5728\u5B50\u8FDB\u7A0B\u7A0B\u5E8F\u4E2D\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"gproc.IsChild()"})," \u65B9\u6CD5\u6765\u5224\u65AD\u81EA\u8EAB\u662F\u5426\u4E3A\u5B50\u8FDB\u7A0B\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "os"\n    "time"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gproc"\n)\n\nfunc main() {\n    var ctx = gctx.New()\n    if gproc.IsChild() {\n        g.Log().Printf(ctx, "%d: Hi, I am child, waiting 3 seconds to die", gproc.Pid())\n        time.Sleep(time.Second)\n        g.Log().Printf(ctx, "%d: 1", gproc.Pid())\n        time.Sleep(time.Second)\n        g.Log().Printf(ctx, "%d: 2", gproc.Pid())\n        time.Sleep(time.Second)\n        g.Log().Printf(ctx, "%d: 3", gproc.Pid())\n    } else {\n        m := gproc.NewManager()\n        p := m.NewProcess(os.Args[0], os.Args, os.Environ())\n        p.Start(ctx)\n        p.Wait()\n        g.Log().Printf(ctx, "%d: child died", gproc.Pid())\n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u6253\u5370\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"2018-05-18 14:35:41.360 28285: Hi, I am child, waiting 3 seconds to die\n2018-05-18 14:35:42.361 28285: 1\n2018-05-18 14:35:43.361 28285: 2\n2018-05-18 14:35:44.361 28285: 3\n2018-05-18 14:35:44.362 28278: child died\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u591A\u8FDB\u7A0B\u7BA1\u7406",children:"\u591A\u8FDB\u7A0B\u7BA1\u7406"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"gproc"})," \u9664\u4E86\u80FD\u591F\u521B\u5EFA\u5B50\u8FDB\u7A0B\uFF0C\u7BA1\u7406\u5B50\u8FDB\u7A0B\u4E4B\u5916\uFF0C\u4E5F\u80FD\u7BA1\u7406\u975E\u81EA\u8EAB\u521B\u5EFA\u7684\u5176\u4ED6\u8FDB\u7A0B\u3002 ",(0,r.jsx)(n.code,{children:"gproc"})," \u53EF\u4EE5\u540C\u65F6\u7BA1\u7406\u591A\u4E2A\u8FDB\u7A0B\uFF0C\u8FD9\u91CC\u4EE5\u5355\u4E2A\u8FDB\u7A0B\u4E3A\u4F8B\u6765\u6F14\u793A\u5BF9\u8FDB\u7A0B\u7684\u7BA1\u7406\u529F\u80FD\u3002"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u6211\u4EEC\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"gedit"})," \u8F6F\u4EF6(Linux\u4E0B\u5E38\u7528\u7684\u6587\u672C\u7F16\u8F91\u5668)\u968F\u610F\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\uFF0C\u5728\u8FDB\u7A0B\u5F53\u4E2D\u6211\u4EEC\u770B\u5230\u8BE5gedit\u7684\u8FDB\u7A0BID\u4E3A ",(0,r.jsx)(n.code,{children:"28536"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"    $ ps aux | grep gedit\n    john  28536  3.6  0.6 946208 56412 ?  Sl  14:39  0:00 gedit /home/john/Documents/text\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"\u6211\u4EEC\u7684\u7A0B\u5E8F\u5982\u4E0B\uFF1A"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n       "fmt"\n\n       "github.com/gogf/gf/v2/os/gproc"\n)\n\nfunc main() {\n       pid := 28536\n       m := gproc.NewManager()\n       m.AddProcess(pid)\n       m.KillAll()\n       m.WaitAll()\n       fmt.Printf("%d was killed\\n", pid)\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6267\u884C\u540E\uFF0C ",(0,r.jsx)(n.code,{children:"gedit"})," \u88AB\u5173\u95ED\uFF0C\u7EC8\u7AEF\u8F93\u51FA\u4FE1\u606F\u4E3A\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"28536 was killed\n"})})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return c}});var t=i(667294);let r={},o=t.createContext(r);function c(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
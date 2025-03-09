"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["414"],{173837:function(e,n,E){E.r(n),E.d(n,{metadata:()=>L,contentTitle:()=>i,default:()=>d,assets:()=>s,toc:()=>r,frontMatter:()=>t});var L=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u65E5\u5FD7\u7EA7\u522B","title":"\u65E5\u5FD7\u7EC4\u4EF6-\u65E5\u5FD7\u7EA7\u522B","description":"\u65E5\u5FD7\u7EA7\u522B","source":"@site/versioned_docs/version-2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u65E5\u5FD7\u7EA7\u522B.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u65E5\u5FD7\u7EC4\u4EF6","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u65E5\u5FD7\u7EA7\u522B","permalink":"/2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u65E5\u5FD7\u7EA7\u522B","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u65E5\u5FD7\u7EA7\u522B.md","tags":[],"version":"2.4.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":1,"frontMatter":{"title":"\u65E5\u5FD7\u7EC4\u4EF6-\u65E5\u5FD7\u7EA7\u522B","sidebar_position":1,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u65E5\u5FD7\u7EC4\u4EF6-\u914D\u7F6E\u7BA1\u7406","permalink":"/2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u914D\u7F6E\u7BA1\u7406"},"next":{"title":"\u65E5\u5FD7\u7EC4\u4EF6-\u6587\u4EF6\u76EE\u5F55","permalink":"/2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u6587\u4EF6\u76EE\u5F55"}}'),l=E("785893"),c=E("250065");let t={title:"\u65E5\u5FD7\u7EC4\u4EF6-\u65E5\u5FD7\u7EA7\u522B",sidebar_position:1,hide_title:!0},i=void 0,s={},r=[{value:"\u65E5\u5FD7\u7EA7\u522B",id:"\u65E5\u5FD7\u7EA7\u522B",level:2},{value:"<code>SetLevel</code> \u65B9\u6CD5",id:"setlevel-\u65B9\u6CD5",level:3},{value:"<code>SetLevelStr</code> \u65B9\u6CD5",id:"setlevelstr-\u65B9\u6CD5",level:3},{value:"<code>SetLevelPrint</code> \u65B9\u6CD5",id:"setlevelprint-\u65B9\u6CD5",level:3},{value:"\u7EA7\u522B\u540D\u79F0",id:"\u7EA7\u522B\u540D\u79F0",level:2}];function o(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u65E5\u5FD7\u7EA7\u522B",children:"\u65E5\u5FD7\u7EA7\u522B"}),"\n",(0,l.jsx)(n.p,{children:"\u65E5\u5FD7\u7EA7\u522B\u7528\u4E8E\u7BA1\u7406\u65E5\u5FD7\u7684\u8F93\u51FA\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8BBE\u5B9A\u7279\u5B9A\u7684\u65E5\u5FD7\u7EA7\u522B\u6765\u5173\u95ED/\u5F00\u542F\u7279\u5B9A\u7684\u65E5\u5FD7\u5185\u5BB9\u3002 \u65E5\u5FD7\u7EA7\u522B\u7684\u8BBE\u7F6E\u53EF\u4EE5\u901A\u8FC7\u4E24\u4E2A\u65B9\u6CD5\u5B9E\u73B0\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"func (l *Logger) SetLevel(level int)\nfunc (l *Logger) SetLevelStr(levelStr string) error\nfunc (l *Logger) SetLevelPrint(enabled bool)\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"setlevel-\u65B9\u6CD5",children:[(0,l.jsx)(n.code,{children:"SetLevel"})," \u65B9\u6CD5"]}),"\n",(0,l.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,l.jsx)(n.code,{children:"SetLevel"})," \u65B9\u6CD5\u53EF\u4EE5\u8BBE\u7F6E\u65E5\u5FD7\u7EA7\u522B\uFF0C ",(0,l.jsx)(n.code,{children:"glog"})," \u6A21\u5757\u652F\u6301\u4EE5\u4E0B\u51E0\u79CD\u65E5\u5FD7\u7EA7\u522B\u5E38\u91CF\u8BBE\u5B9A\uFF1A"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"LEVEL_ALL\nLEVEL_DEV\nLEVEL_PROD\nLEVEL_DEBU\nLEVEL_INFO\nLEVEL_NOTI\nLEVEL_WARN\nLEVEL_ERRO\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,l.jsx)(n.code,{children:"\u4F4D\u64CD\u4F5C"})," \u7EC4\u5408\u4F7F\u7528\u8FD9\u51E0\u79CD\u7EA7\u522B\uFF0C\u4F8B\u5982\u5176\u4E2D ",(0,l.jsx)(n.code,{children:"LEVEL_ALL"})," \u7B49\u4EF7\u4E8E ",(0,l.jsx)(n.code,{children:"LEVEL_DEBU | LEVEL_INFO | LEVEL_NOTI | LEVEL_WARN | LEVEL_ERRO | LEVEL_CRIT"}),"\u3002\u6211\u4EEC\u8FD8\u53EF\u4EE5\u901A\u8FC7 ",(0,l.jsx)(n.code,{children:"LEVEL_ALL & ^LEVEL_DEBU & ^LEVEL_INFO & ^LEVEL_NOTI"})," \u6765\u8FC7\u6EE4\u6389 ",(0,l.jsx)(n.code,{children:"LEVEL_DEBU/LEVEL_INFO/LEVEL_NOTI"})," \u65E5\u5FD7\u5185\u5BB9\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5F53\u7136\u65E5\u5FD7\u6A21\u5757\u8FD8\u6709\u5176\u4ED6\u7684\u4E00\u4E9B\u7EA7\u522B\uFF0C\u5982 ",(0,l.jsx)(n.code,{children:"CRIT/PANI/FATA"}),"\uFF0C\u4F46\u662F\u8FD9\u51E0\u4E2A\u7EA7\u522B\u662F\u975E\u5E38\u4E25\u91CD\u7684\u9519\u8BEF\uFF0C\u65E0\u6CD5\u5728\u65E5\u5FD7\u7EA7\u522B\u4E2D\u7531\u5F00\u53D1\u8005\u81EA\u5B9A\u4E49\u5C4F\u853D\u3002\u4F8B\u5982\u4EA7\u751F\u4E25\u91CD\u9519\u8BEF\u7684\u65F6\u5019\uFF0C ",(0,l.jsx)(n.code,{children:"PANI/FATA"})," \u9519\u8BEF\u754C\u522B\u5C06\u4F1A\u4EA7\u751F\u4E00\u4E9B\u989D\u5916\u7684\u7CFB\u7EDF\u52A8\u4F5C\uFF1A ",(0,l.jsx)(n.code,{children:"panic"}),"/ ",(0,l.jsx)(n.code,{children:"exit"}),"\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc main() {\n    ctx := context.TODO()\n    l := glog.New()\n    l.Info(ctx, "info1")\n    l.SetLevel(glog.LEVEL_ALL ^ glog.LEVEL_INFO)\n    l.Info(ctx, "info2")\n}\n\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"2021-12-31 11:16:57.272 [INFO] info1\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"setlevelstr-\u65B9\u6CD5",children:[(0,l.jsx)(n.code,{children:"SetLevelStr"})," \u65B9\u6CD5"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5927\u90E8\u5206\u573A\u666F\u4E0B\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,l.jsx)(n.code,{children:"SetLevelStr"})," \u65B9\u6CD5\u6765\u901A\u8FC7\u5B57\u7B26\u4E32\u8BBE\u7F6E\u65E5\u5FD7\u7EA7\u522B\uFF0C\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684 ",(0,l.jsx)(n.code,{children:"level"})," \u914D\u7F6E\u9879\u4E5F\u662F\u901A\u8FC7\u5B57\u7B26\u4E32\u6765\u914D\u7F6E\u65E5\u5FD7\u7EA7\u522B\u3002\u652F\u6301\u7684\u65E5\u5FD7\u7EA7\u522B\u5B57\u7B26\u4E32\u5982\u4E0B\uFF0C\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF1A"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'"ALL":      LEVEL_DEBU | LEVEL_INFO | LEVEL_NOTI | LEVEL_WARN | LEVEL_ERRO | LEVEL_CRIT,\n"DEV":      LEVEL_DEBU | LEVEL_INFO | LEVEL_NOTI | LEVEL_WARN | LEVEL_ERRO | LEVEL_CRIT,\n"DEVELOP":  LEVEL_DEBU | LEVEL_INFO | LEVEL_NOTI | LEVEL_WARN | LEVEL_ERRO | LEVEL_CRIT,\n"PROD":     LEVEL_WARN | LEVEL_ERRO | LEVEL_CRIT,\n"PRODUCT":  LEVEL_WARN | LEVEL_ERRO | LEVEL_CRIT,\n"DEBU":     LEVEL_DEBU | LEVEL_INFO | LEVEL_NOTI | LEVEL_WARN | LEVEL_ERRO | LEVEL_CRIT,\n"DEBUG":    LEVEL_DEBU | LEVEL_INFO | LEVEL_NOTI | LEVEL_WARN | LEVEL_ERRO | LEVEL_CRIT,\n"INFO":     LEVEL_INFO | LEVEL_NOTI | LEVEL_WARN | LEVEL_ERRO | LEVEL_CRIT,\n"NOTI":     LEVEL_NOTI | LEVEL_WARN | LEVEL_ERRO | LEVEL_CRIT,\n"NOTICE":   LEVEL_NOTI | LEVEL_WARN | LEVEL_ERRO | LEVEL_CRIT,\n"WARN":     LEVEL_WARN | LEVEL_ERRO | LEVEL_CRIT,\n"WARNING":  LEVEL_WARN | LEVEL_ERRO | LEVEL_CRIT,\n"ERRO":     LEVEL_ERRO | LEVEL_CRIT,\n"ERROR":    LEVEL_ERRO | LEVEL_CRIT,\n"CRIT":     LEVEL_CRIT,\n"CRITICAL": LEVEL_CRIT,\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u901A\u8FC7\u7EA7\u522B\u540D\u79F0\u8BBE\u7F6E\u7684\u65E5\u5FD7\u7EA7\u522B\u662F\u6309\u7167\u65E5\u5FD7\u7EA7\u522B\u7684\u9AD8\u4F4E\u6765\u8FDB\u884C\u8FC7\u6EE4\u7684\uFF1A ",(0,l.jsx)(n.code,{children:"DEBU < INFO < NOTI < WARN < ERRO < CRIT"}),"\uFF0C\u4E5F\u652F\u6301 ",(0,l.jsx)(n.code,{children:"ALL"}),", ",(0,l.jsx)(n.code,{children:"DEV"}),", ",(0,l.jsx)(n.code,{children:"PROD"})," \u5E38\u89C1\u90E8\u7F72\u6A21\u5F0F\u914D\u7F6E\u540D\u79F0\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc main() {\n    ctx := context.TODO()\n    l := glog.New()\n    l.Info(ctx, "info1")\n    l.SetLevelStr("notice")\n    l.Info(ctx, "info2")\n}\n\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"2021-12-31 11:20:15.019 [INFO] info1\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"setlevelprint-\u65B9\u6CD5",children:[(0,l.jsx)(n.code,{children:"SetLevelPrint"})," \u65B9\u6CD5"]}),"\n",(0,l.jsx)(n.p,{children:"\u63A7\u5236\u9ED8\u8BA4\u65E5\u5FD7\u8F93\u51FA\u662F\u5426\u6253\u5370\u65E5\u5FD7\u7EA7\u522B\u6807\u8BC6\uFF0C\u9ED8\u8BA4\u4F1A\u6253\u5370\u65E5\u5FD7\u7EA7\u522B\u6807\u8BC6\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc main() {\n    ctx := context.TODO()\n    l := glog.New()\n    l.Info(ctx, "info1")\n    l.SetLevelPrint(false)\n    l.Info(ctx, "info2")\n}\n\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"2023-03-14 10:28:18.598 [INFO] info1\n2023-03-14 10:28:18.631 info1\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u7EA7\u522B\u540D\u79F0",children:"\u7EA7\u522B\u540D\u79F0"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u65E5\u5FD7\u4E2D\u6211\u4EEC\u4F1A\u770B\u5230\u4E0D\u540C\u7EA7\u522B\u7684\u6253\u5370\u5185\u5BB9\uFF0C\u4F1A\u5728\u5185\u5BB9\u524D\u9762\u5E26\u6709\u4E0D\u540C\u7684\u65E5\u5FD7\u7EA7\u522B\u540D\u79F0\u3002\u9ED8\u8BA4\u7684\u65E5\u5FD7\u7EA7\u522B\u540D\u79F0\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'LEVEL_DEBU: "DEBU",\nLEVEL_INFO: "INFO",\nLEVEL_NOTI: "NOTI",\nLEVEL_WARN: "WARN",\nLEVEL_ERRO: "ERRO",\nLEVEL_CRIT: "CRIT",\nLEVEL_PANI: "PANI",\nLEVEL_FATA: "FATA",\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u4E3A\u65B9\u4FBF\u7EDF\u4E00\u65E5\u5FD7\u683C\u5F0F\uFF0C\u4FDD\u8BC1\u6BD4\u8F83\u4F18\u96C5\u7684\u6392\u7248\u98CE\u683C\uFF0C\u56E0\u6B64\u65E5\u5FD7\u7EA7\u522B\u7684\u540D\u79F0\u90FD\u4F7F\u7528\u4E86\u7EA7\u522B\u82F1\u6587\u5355\u8BCD\u7684\u524D\u56DB\u4E2A\u5B57\u7B26\u3002\u82E5\u6709\u7279\u6B8A\u9700\u6C42\u9700\u8981\u4FEE\u6539\u65E5\u5FD7\u7EA7\u522B\u540D\u79F0\u7684\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u6CD5\u8FDB\u884C\u8BBE\u7F6E\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"func (l *Logger) SetLevelPrefix(level int, prefix string)\nfunc (l *Logger) SetLevelPrefixes(prefixes map[int]string)\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc main() {\n    ctx := context.TODO()\n    l := glog.New()\n    l.SetLevelPrefix(glog.LEVEL_DEBU, "debug")\n    l.Debug(ctx, "test")\n}\n\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"2021-12-31 11:21:45.754 [debug] test\n"})})]})}function d(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,E){E.d(n,{Z:function(){return i},a:function(){return t}});var L=E(667294);let l={},c=L.createContext(l);function t(e){let n=L.useContext(c);return L.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),L.createElement(c.Provider,{value:n},e.children)}}}]);
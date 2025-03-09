"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["41196"],{942691:function(e,n,r){r.r(n),r.d(n,{metadata:()=>o,contentTitle:()=>a,default:()=>f,assets:()=>l,toc:()=>d,frontMatter:()=>i});var o=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u914D\u7F6E/\u670D\u52A1\u914D\u7F6E-\u914D\u7F6E\u6587\u4EF6\u6A21\u677F","title":"\u670D\u52A1\u914D\u7F6E-\u914D\u7F6E\u6587\u4EF6\u6A21\u677F","description":"\u4E00\u4E2AGoFrame\u6846\u67B6\u670D\u52A1\u914D\u7F6E\u7684\u6587\u4EF6\u6A21\u677F\uFF0C\u8BE6\u7EC6\u4ECB\u7ECD\u4E86\u5404\u9879\u914D\u7F6E\u53C2\u6570\uFF0C\u5982\u5730\u5740\u76D1\u542C\u3001TLS/HTTPS\u914D\u7F6E\u3001\u9759\u6001\u670D\u52A1\u3001Cookie\u548CSessions\u8BBE\u7F6E\u3001\u65E5\u5FD7\u8BB0\u5F55\u7B49\uFF0C\u5E2E\u52A9\u7528\u6237\u66F4\u597D\u5730\u4F7F\u7528\u548C\u914D\u7F6EGoFrame HTTP Server\u3002","source":"@site/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u914D\u7F6E/\u670D\u52A1\u914D\u7F6E-\u914D\u7F6E\u6587\u4EF6\u6A21\u677F.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u914D\u7F6E","slug":"/docs/web/server-config-file-template","permalink":"/2.7.x/docs/web/server-config-file-template","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u914D\u7F6E/\u670D\u52A1\u914D\u7F6E-\u914D\u7F6E\u6587\u4EF6\u6A21\u677F.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/web/server-config-file-template","title":"\u670D\u52A1\u914D\u7F6E-\u914D\u7F6E\u6587\u4EF6\u6A21\u677F","sidebar_position":1,"hide_title":true,"keywords":["GoFrame\u6846\u67B6","\u670D\u52A1\u914D\u7F6E","\u914D\u7F6E\u6587\u4EF6\u6A21\u677F","ServerConfig","HTTP Server","TLS/HTTPS","\u9759\u6001\u6587\u4EF6\u670D\u52A1","\u65E5\u5FD7\u914D\u7F6E","Cookie\u914D\u7F6E","Sessions\u914D\u7F6E"],"description":"\u4E00\u4E2AGoFrame\u6846\u67B6\u670D\u52A1\u914D\u7F6E\u7684\u6587\u4EF6\u6A21\u677F\uFF0C\u8BE6\u7EC6\u4ECB\u7ECD\u4E86\u5404\u9879\u914D\u7F6E\u53C2\u6570\uFF0C\u5982\u5730\u5740\u76D1\u542C\u3001TLS/HTTPS\u914D\u7F6E\u3001\u9759\u6001\u670D\u52A1\u3001Cookie\u548CSessions\u8BBE\u7F6E\u3001\u65E5\u5FD7\u8BB0\u5F55\u7B49\uFF0C\u5E2E\u52A9\u7528\u6237\u66F4\u597D\u5730\u4F7F\u7528\u548C\u914D\u7F6EGoFrame HTTP Server\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u670D\u52A1\u914D\u7F6E-\u914D\u7F6E\u6587\u4EF6","permalink":"/2.7.x/docs/web/server-config-file"},"next":{"title":"\u670D\u52A1\u914D\u7F6E-\u914D\u7F6E\u65B9\u6CD5","permalink":"/2.7.x/docs/web/server-config-funcs"}}'),t=r("785893"),s=r("250065");let i={slug:"/docs/web/server-config-file-template",title:"\u670D\u52A1\u914D\u7F6E-\u914D\u7F6E\u6587\u4EF6\u6A21\u677F",sidebar_position:1,hide_title:!0,keywords:["GoFrame\u6846\u67B6","\u670D\u52A1\u914D\u7F6E","\u914D\u7F6E\u6587\u4EF6\u6A21\u677F","ServerConfig","HTTP Server","TLS/HTTPS","\u9759\u6001\u6587\u4EF6\u670D\u52A1","\u65E5\u5FD7\u914D\u7F6E","Cookie\u914D\u7F6E","Sessions\u914D\u7F6E"],description:"\u4E00\u4E2AGoFrame\u6846\u67B6\u670D\u52A1\u914D\u7F6E\u7684\u6587\u4EF6\u6A21\u677F\uFF0C\u8BE6\u7EC6\u4ECB\u7ECD\u4E86\u5404\u9879\u914D\u7F6E\u53C2\u6570\uFF0C\u5982\u5730\u5740\u76D1\u542C\u3001TLS/HTTPS\u914D\u7F6E\u3001\u9759\u6001\u670D\u52A1\u3001Cookie\u548CSessions\u8BBE\u7F6E\u3001\u65E5\u5FD7\u8BB0\u5F55\u7B49\uFF0C\u5E2E\u52A9\u7528\u6237\u66F4\u597D\u5730\u4F7F\u7528\u548C\u914D\u7F6EGoFrame HTTP Server\u3002"},a=void 0,l={},d=[];function c(e){let n={a:"a",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u6240\u6709\u7684\u914D\u7F6E\u9879\u8BF7\u53C2\u8003 ",(0,t.jsx)(n.code,{children:"ServerConfig"})," \u5BF9\u8C61\u5C5E\u6027\uFF1A ",(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#ServerConfig",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#ServerConfig"})]}),"\n",(0,t.jsx)(n.p,{children:"\u4EE5\u4E0B\u4E3A\u914D\u7F6E\u6587\u4EF6\u6A21\u677F\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'server:\n    # \u57FA\u672C\u914D\u7F6E\n    address:             ":80"                        # \u672C\u5730\u76D1\u542C\u5730\u5740\u3002\u9ED8\u8BA4":80"\uFF0C\u591A\u4E2A\u5730\u5740\u4EE5","\u53F7\u5206\u9694\u3002\u4F8B\u5982\uFF1A"192.168.2.3:8000,10.0.3.10:8001"\n    httpsAddr:           ":443"                       # TLS/HTTPS\u914D\u7F6E\uFF0C\u540C\u65F6\u9700\u8981\u914D\u7F6E\u8BC1\u4E66\u548C\u5BC6\u94A5\u3002\u9ED8\u8BA4\u5173\u95ED\u3002\u914D\u7F6E\u683C\u5F0F\u540C\u4E0A\u3002\n    httpsCertPath:       ""                           # TLS/HTTPS\u8BC1\u4E66\u6587\u4EF6\u672C\u5730\u8DEF\u5F84\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u3002\u9ED8\u8BA4\u5173\u95ED\n    httpsKeyPath:        ""                           # TLS/HTTPS\u5BC6\u94A5\u6587\u4EF6\u672C\u5730\u8DEF\u5F84\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u3002\u9ED8\u8BA4\u5173\u95ED\n    readTimeout:         "60s"                        # \u8BF7\u6C42\u8BFB\u53D6\u8D85\u65F6\u65F6\u95F4\uFF0C\u4E00\u822C\u4E0D\u9700\u8981\u914D\u7F6E\u3002\u9ED8\u8BA4\u4E3A60\u79D2\n    writeTimeout:        "0"                          # \u6570\u636E\u8FD4\u56DE\u5199\u5165\u8D85\u65F6\u65F6\u95F4\uFF0C\u4E00\u822C\u4E0D\u9700\u8981\u914D\u7F6E\u3002\u9ED8\u8BA4\u4E0D\u8D85\u65F6\uFF080\uFF09\n    idleTimeout:         "60s"                        # \u4EC5\u5F53Keep-Alive\u5F00\u542F\u65F6\u6709\u6548\uFF0C\u8BF7\u6C42\u95F2\u7F6E\u65F6\u95F4\u3002\u9ED8\u8BA4\u4E3A60\u79D2\n    maxHeaderBytes:      "10240"                      # \u8BF7\u6C42Header\u5927\u5C0F\u9650\u5236\uFF08Byte\uFF09\u3002\u9ED8\u8BA4\u4E3A10KB\n    keepAlive:           true                         # \u662F\u5426\u5F00\u542FKeep-Alive\u529F\u80FD\u3002\u9ED8\u8BA4true\n    serverAgent:         "GoFrame HTTP Server"        # \u670D\u52A1\u7AEFAgent\u4FE1\u606F\u3002\u9ED8\u8BA4\u4E3A"GoFrame HTTP Server"\n\n    # \u63A5\u53E3\u6587\u6863\n    openapiPath: "/api.json" # OpenAPI\u63A5\u53E3\u6587\u6863\u5730\u5740\n    swaggerPath: "/swagger"  # \u5185\u7F6ESwaggerUI\u5C55\u793A\u5730\u5740\n\n    # \u9759\u6001\u670D\u52A1\u914D\u7F6E\n    indexFiles:          ["index.html","index.htm"]   # \u81EA\u52A8\u9996\u9875\u9759\u6001\u6587\u4EF6\u68C0\u7D22\u3002\u9ED8\u8BA4\u4E3A["index.html", "index.htm"]\n    indexFolder:         false                        # \u5F53\u8BBF\u95EE\u9759\u6001\u6587\u4EF6\u76EE\u5F55\u65F6\uFF0C\u662F\u5426\u5C55\u793A\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u5217\u8868\u3002\u9ED8\u8BA4\u5173\u95ED\uFF0C\u90A3\u4E48\u8BF7\u6C42\u5C06\u8FD4\u56DE403\n    serverRoot:          "/var/www"                   # \u9759\u6001\u6587\u4EF6\u670D\u52A1\u7684\u76EE\u5F55\u6839\u8DEF\u5F84\uFF0C\u914D\u7F6E\u65F6\u81EA\u52A8\u5F00\u542F\u9759\u6001\u6587\u4EF6\u670D\u52A1\u3002\u9ED8\u8BA4\u5173\u95ED\n    searchPaths:         ["/home/www","/var/lib/www"] # \u63D0\u4F9B\u9759\u6001\u6587\u4EF6\u670D\u52A1\u65F6\u989D\u5916\u7684\u6587\u4EF6\u641C\u7D22\u8DEF\u5F84\uFF0C\u5F53\u6839\u8DEF\u5F84\u627E\u4E0D\u5230\u65F6\u5219\u6309\u7167\u987A\u5E8F\u5728\u641C\u7D22\u76EE\u5F55\u67E5\u627E\u3002\u9ED8\u8BA4\u5173\u95ED\n    fileServerEnabled:   false                        # \u9759\u6001\u6587\u4EF6\u670D\u52A1\u603B\u5F00\u5173\u3002\u9ED8\u8BA4false\n\n    # Cookie\u914D\u7F6E\n    cookieMaxAge:        "365d"             # Cookie\u6709\u6548\u671F\u3002\u9ED8\u8BA4\u4E3A365\u5929\n    cookiePath:          "/"                # Cookie\u6709\u6548\u8DEF\u5F84\u3002\u9ED8\u8BA4\u4E3A"/"\u8868\u793A\u5168\u7AD9\u6240\u6709\u8DEF\u5F84\u4E0B\u6709\u6548\n    cookieDomain:        ""                 # Cookie\u6709\u6548\u57DF\u540D\u3002\u9ED8\u8BA4\u4E3A\u5F53\u524D\u914D\u7F6ECookie\u65F6\u7684\u57DF\u540D\n\n    # Sessions\u914D\u7F6E\n    sessionMaxAge:       "24h"              # Session\u6709\u6548\u671F\u3002\u9ED8\u8BA4\u4E3A24\u5C0F\u65F6\n    sessionIdName:       "gfsessionid"      # SessionId\u7684\u952E\u540D\u540D\u79F0\u3002\u9ED8\u8BA4\u4E3Agfsessionid\n    sessionCookieOutput: true               # Session\u7279\u6027\u5F00\u542F\u65F6\uFF0C\u662F\u5426\u5C06SessionId\u8FD4\u56DE\u5230Cookie\u4E2D\u3002\u9ED8\u8BA4true\n    sessionPath:         "/tmp/gsessions"   # Session\u5B58\u50A8\u7684\u6587\u4EF6\u76EE\u5F55\u8DEF\u5F84\u3002\u9ED8\u8BA4\u4E3A\u5F53\u524D\u7CFB\u7EDF\u4E34\u65F6\u76EE\u5F55\u4E0B\u7684gsessions\u76EE\u5F55\n\n    # \u65E5\u5FD7\u57FA\u672C\u914D\u7F6E\n    # \u6B64\u914D\u7F6E\u7C7B\u4F3Cnginx\uFF0C\u4E3B\u8981\u5BF9\u8BF7\u6C42\u65E5\u5FD7\u7684\u8BB0\u5F55\n    logPath:             ""                 # \u65E5\u5FD7\u6587\u4EF6\u5B58\u50A8\u76EE\u5F55\u8DEF\u5F84\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u3002\u9ED8\u8BA4\u4E3A\u7A7A\uFF0C\u8868\u793A\u5173\u95ED\n    logStdout:           true               # \u65E5\u5FD7\u662F\u5426\u8F93\u51FA\u5230\u7EC8\u7AEF\u3002\u9ED8\u8BA4\u4E3Atrue\n    errorStack:          true               # \u5F53Server\u6355\u83B7\u5230\u5F02\u5E38\u65F6\u662F\u5426\u8BB0\u5F55\u5806\u6808\u4FE1\u606F\u5230\u65E5\u5FD7\u4E2D\u3002\u9ED8\u8BA4\u4E3Atrue\n    errorLogEnabled:     true               # \u662F\u5426\u8BB0\u5F55\u5F02\u5E38\u65E5\u5FD7\u4FE1\u606F\u5230\u65E5\u5FD7\u4E2D\u3002\u9ED8\u8BA4\u4E3Atrue\n    errorLogPattern:     "error-{Ymd}.log"  # \u5F02\u5E38\u9519\u8BEF\u65E5\u5FD7\u6587\u4EF6\u683C\u5F0F\u3002\u9ED8\u8BA4\u4E3A"error-{Ymd}.log"\n    accessLogEnabled:    false              # \u662F\u5426\u8BB0\u5F55\u8BBF\u95EE\u65E5\u5FD7\u3002\u9ED8\u8BA4\u4E3Afalse\n    accessLogPattern:    "access-{Ymd}.log" # \u8BBF\u95EE\u65E5\u5FD7\u6587\u4EF6\u683C\u5F0F\u3002\u9ED8\u8BA4\u4E3A"access-{Ymd}.log"\n\n    # \u65E5\u5FD7\u6269\u5C55\u914D\u7F6E(\u53C2\u6570\u65E5\u5FD7\u7EC4\u4EF6\u914D\u7F6E)\n    # \u6B64\u914D\u7F6E\u4E3B\u8981\u5F71\u54CDserver\uFF08ghttp\u6A21\u5757\uFF09\u65E5\u5FD7\uFF0C\u5982web\u670D\u52A1\u76D1\u542C\u7AEF\u53E3\u53F7\u3001web\u670D\u52A1\u8DEF\u7531\uFF0C\u4E0D\u4F1A\u5BF9 g.Log \u4EA7\u751F\u5F71\u54CD\n    logger:\n           path:                  "/var/log/"           # \u65E5\u5FD7\u6587\u4EF6\u8DEF\u5F84\u3002\u9ED8\u8BA4\u4E3A\u7A7A\uFF0C\u8868\u793A\u5173\u95ED\uFF0C\u4EC5\u8F93\u51FA\u5230\u7EC8\u7AEF\n           file:                  "{Y-m-d}.log"         # \u65E5\u5FD7\u6587\u4EF6\u683C\u5F0F\u3002\u9ED8\u8BA4\u4E3A"{Y-m-d}.log"\n           prefix:                ""                    # \u65E5\u5FD7\u5185\u5BB9\u8F93\u51FA\u524D\u7F00\u3002\u9ED8\u8BA4\u4E3A\u7A7A\n           level:                 "all"                 # \u65E5\u5FD7\u8F93\u51FA\u7EA7\u522B\n           timeFormat:            "2006-01-02T15:04:05" # \u81EA\u5B9A\u4E49\u65E5\u5FD7\u8F93\u51FA\u7684\u65F6\u95F4\u683C\u5F0F\uFF0C\u4F7F\u7528Golang\u6807\u51C6\u7684\u65F6\u95F4\u683C\u5F0F\u914D\u7F6E\n        ctxKeys:               []                    # \u81EA\u5B9A\u4E49Context\u4E0A\u4E0B\u6587\u53D8\u91CF\u540D\u79F0\uFF0C\u81EA\u52A8\u6253\u5370Context\u7684\u53D8\u91CF\u5230\u65E5\u5FD7\u4E2D\u3002\u9ED8\u8BA4\u4E3A\u7A7A\n        header:                true                  # \u662F\u5426\u6253\u5370\u65E5\u5FD7\u7684\u5934\u4FE1\u606F\u3002\u9ED8\u8BA4true\n        stdout:                true                  # \u65E5\u5FD7\u662F\u5426\u540C\u65F6\u8F93\u51FA\u5230\u7EC8\u7AEF\u3002\u9ED8\u8BA4true\n        rotateSize:            0                     # \u6309\u7167\u65E5\u5FD7\u6587\u4EF6\u5927\u5C0F\u5BF9\u6587\u4EF6\u8FDB\u884C\u6EDA\u52A8\u5207\u5206\u3002\u9ED8\u8BA4\u4E3A0\uFF0C\u8868\u793A\u5173\u95ED\u6EDA\u52A8\u5207\u5206\u7279\u6027\n        rotateExpire:          0                     # \u6309\u7167\u65E5\u5FD7\u6587\u4EF6\u65F6\u95F4\u95F4\u9694\u5BF9\u6587\u4EF6\u6EDA\u52A8\u5207\u5206\u3002\u9ED8\u8BA4\u4E3A0\uFF0C\u8868\u793A\u5173\u95ED\u6EDA\u52A8\u5207\u5206\u7279\u6027\n        rotateBackupLimit:     0                     # \u6309\u7167\u5207\u5206\u7684\u6587\u4EF6\u6570\u91CF\u6E05\u7406\u5207\u5206\u6587\u4EF6\uFF0C\u5F53\u6EDA\u52A8\u5207\u5206\u7279\u6027\u5F00\u542F\u65F6\u6709\u6548\u3002\u9ED8\u8BA4\u4E3A0\uFF0C\u8868\u793A\u4E0D\u5907\u4EFD\uFF0C\u5207\u5206\u5219\u5220\u9664\n        rotateBackupExpire:    0                     # \u6309\u7167\u5207\u5206\u7684\u6587\u4EF6\u6709\u6548\u671F\u6E05\u7406\u5207\u5206\u6587\u4EF6\uFF0C\u5F53\u6EDA\u52A8\u5207\u5206\u7279\u6027\u5F00\u542F\u65F6\u6709\u6548\u3002\u9ED8\u8BA4\u4E3A0\uFF0C\u8868\u793A\u4E0D\u5907\u4EFD\uFF0C\u5207\u5206\u5219\u5220\u9664\n        rotateBackupCompress:  0                     # \u6EDA\u52A8\u5207\u5206\u6587\u4EF6\u7684\u538B\u7F29\u6BD4\uFF080-9\uFF09\u3002\u9ED8\u8BA4\u4E3A0\uFF0C\u8868\u793A\u4E0D\u538B\u7F29\n        rotateCheckInterval:   "1h"                  # \u6EDA\u52A8\u5207\u5206\u7684\u65F6\u95F4\u68C0\u6D4B\u95F4\u9694\uFF0C\u4E00\u822C\u4E0D\u9700\u8981\u8BBE\u7F6E\u3002\u9ED8\u8BA4\u4E3A1\u5C0F\u65F6\n        stdoutColorDisabled:   false                 # \u5173\u95ED\u7EC8\u7AEF\u7684\u989C\u8272\u6253\u5370\u3002\u9ED8\u8BA4\u5F00\u542F\n        writerColorEnable:     false                 # \u65E5\u5FD7\u6587\u4EF6\u662F\u5426\u5E26\u4E0A\u989C\u8272\u3002\u9ED8\u8BA4false\uFF0C\u8868\u793A\u4E0D\u5E26\u989C\u8272\n\n    # PProf\u914D\u7F6E\n    pprofEnabled:        false              # \u662F\u5426\u5F00\u542FPProf\u6027\u80FD\u8C03\u8BD5\u7279\u6027\u3002\u9ED8\u8BA4\u4E3Afalse\n    pprofPattern:        ""                 # \u5F00\u542FPProf\u65F6\u6709\u6548\uFF0C\u8868\u793APProf\u7279\u6027\u7684\u9875\u9762\u8BBF\u95EE\u8DEF\u5F84\uFF0C\u5BF9\u5F53\u524DServer\u7ED1\u5B9A\u7684\u6240\u6709\u57DF\u540D\u6709\u6548\u3002\n\n    # \u5E73\u6ED1\u91CD\u542F\u7279\u6027\n    graceful:                false          # \u662F\u5426\u5F00\u542F\u5E73\u6ED1\u91CD\u542F\u7279\u6027\uFF0C\u5F00\u542F\u65F6\u5C06\u4F1A\u5728\u672C\u5730\u589E\u52A010000\u7684\u672C\u5730TCP\u7AEF\u53E3\u7528\u4E8E\u8FDB\u7A0B\u95F4\u901A\u4FE1\u3002\u9ED8\u8BA4false\n    gracefulTimeout:         2              # \u7236\u8FDB\u7A0B\u5728\u5E73\u6ED1\u91CD\u542F\u540E\u591A\u5C11\u79D2\u9000\u51FA\uFF0C\u9ED8\u8BA42\u79D2\u3002\u82E5\u8BF7\u6C42\u8017\u65F6\u5927\u4E8E\u8BE5\u503C\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8BF7\u6C42\u4E2D\u65AD\n    gracefulShutdownTimeout: 5              # \u5173\u95EDServer\u65F6\u5982\u679C\u5B58\u5728\u6B63\u5728\u6267\u884C\u7684HTTP\u8BF7\u6C42\uFF0CServer\u7B49\u5F85\u591A\u5C11\u79D2\u624D\u6267\u884C\u5F3A\u884C\u5173\u95ED\n\n    # \u5176\u4ED6\u914D\u7F6E\n    clientMaxBodySize:   810241024          # \u5BA2\u6237\u7AEF\u6700\u5927Body\u4E0A\u4F20\u9650\u5236\u5927\u5C0F\uFF0C\u5F71\u54CD\u6587\u4EF6\u4E0A\u4F20\u5927\u5C0F(Byte)\u3002\u9ED8\u8BA4\u4E3A8*1024*1024=8MB\n    formParsingMemory:   1048576            # \u89E3\u6790\u8868\u5355\u65F6\u7684\u7F13\u51B2\u533A\u5927\u5C0F(Byte)\uFF0C\u4E00\u822C\u4E0D\u9700\u8981\u914D\u7F6E\u3002\u9ED8\u8BA4\u4E3A1024*1024=1MB\n    nameToUriType:       0                  # \u8DEF\u7531\u6CE8\u518C\u4E2D\u4F7F\u7528\u5BF9\u8C61\u6CE8\u518C\u65F6\u7684\u8DEF\u7531\u751F\u6210\u89C4\u5219\u3002\u9ED8\u8BA4\u4E3A0\n    routeOverWrite:      false              # \u5F53\u9047\u5230\u91CD\u590D\u8DEF\u7531\u6CE8\u518C\u65F6\u662F\u5426\u5F3A\u5236\u8986\u76D6\u3002\u9ED8\u8BA4\u4E3Afalse\uFF0C\u91CD\u590D\u8DEF\u7531\u5B58\u5728\u65F6\u5C06\u4F1A\u5728\u542F\u52A8\u65F6\u62A5\u9519\u9000\u51FA\n    dumpRouterMap:       true               # \u662F\u5426\u5728Server\u542F\u52A8\u65F6\u6253\u5370\u6240\u6709\u7684\u8DEF\u7531\u5217\u8868\u3002\u9ED8\u8BA4\u4E3Atrue\n\n'})})]})}function f(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return i}});var o=r(667294);let t={},s=o.createContext(t);function i(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
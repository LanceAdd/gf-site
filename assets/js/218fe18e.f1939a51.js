"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["72041"],{283263:function(e,n,r){r.r(n),r.d(n,{metadata:()=>o,contentTitle:()=>i,default:()=>p,assets:()=>l,toc:()=>t,frontMatter:()=>c});var o=JSON.parse('{"id":"docs/\u9879\u76EE\u90E8\u7F72/\u4EE3\u7406\u90E8\u7F72","title":"\u4EE3\u7406\u90E8\u7F72","description":"\u4F7F\u7528Nginx\u4F5C\u4E3A\u53CD\u5411\u4EE3\u7406\u7684\u524D\u7AEF\u63A5\u5165\u5C42\u6765\u90E8\u7F72GoFrame\u6846\u67B6\u5E94\u7528\u3002\u901A\u8FC7\u914D\u7F6E\u9759\u6001\u6587\u4EF6\u540E\u7F00\u6216\u76EE\u5F55\uFF0C\u53EF\u4EE5\u6709\u6548\u5206\u79BB\u9759\u6001\u548C\u52A8\u6001\u8BF7\u6C42\uFF0C\u4EE5\u63D0\u9AD8\u6027\u80FD\u3002\u914D\u7F6E\u793A\u4F8B\u8BE6\u7EC6\u5C55\u793A\u4E86\u5982\u4F55\u5C06\u8BF7\u6C42\u8F6C\u53D1\u5230Golang\u5E94\u7528\uFF0C\u5B9E\u73B0\u4E13\u4E1A\u6027\u7684WebServer\u90E8\u7F72\u65B9\u6848\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u9879\u76EE\u90E8\u7F72/\u4EE3\u7406\u90E8\u7F72.md","sourceDirName":"docs/\u9879\u76EE\u90E8\u7F72","slug":"/docs/deploy/proxy","permalink":"/2.7.x/docs/deploy/proxy","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u9879\u76EE\u90E8\u7F72/\u4EE3\u7406\u90E8\u7F72.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/deploy/proxy","title":"\u4EE3\u7406\u90E8\u7F72","sidebar_position":1,"hide_title":true,"keywords":["\u4EE3\u7406\u90E8\u7F72","GoFrame","\u53CD\u5411\u4EE3\u7406","Nginx","\u9759\u6001\u6587\u4EF6","Golang\u5E94\u7528","WebServer","\u52A8\u6001\u8BF7\u6C42","\u8D1F\u8F7D\u5747\u8861","\u57DF\u540D\u914D\u7F6E"],"description":"\u4F7F\u7528Nginx\u4F5C\u4E3A\u53CD\u5411\u4EE3\u7406\u7684\u524D\u7AEF\u63A5\u5165\u5C42\u6765\u90E8\u7F72GoFrame\u6846\u67B6\u5E94\u7528\u3002\u901A\u8FC7\u914D\u7F6E\u9759\u6001\u6587\u4EF6\u540E\u7F00\u6216\u76EE\u5F55\uFF0C\u53EF\u4EE5\u6709\u6548\u5206\u79BB\u9759\u6001\u548C\u52A8\u6001\u8BF7\u6C42\uFF0C\u4EE5\u63D0\u9AD8\u6027\u80FD\u3002\u914D\u7F6E\u793A\u4F8B\u8BE6\u7EC6\u5C55\u793A\u4E86\u5982\u4F55\u5C06\u8BF7\u6C42\u8F6C\u53D1\u5230Golang\u5E94\u7528\uFF0C\u5B9E\u73B0\u4E13\u4E1A\u6027\u7684WebServer\u90E8\u7F72\u65B9\u6848\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u72EC\u7ACB\u90E8\u7F72","permalink":"/2.7.x/docs/deploy/standalone"},"next":{"title":"\u5BB9\u5668\u90E8\u7F72","permalink":"/2.7.x/docs/deploy/container"}}'),s=r("785893"),d=r("250065");let c={slug:"/docs/deploy/proxy",title:"\u4EE3\u7406\u90E8\u7F72",sidebar_position:1,hide_title:!0,keywords:["\u4EE3\u7406\u90E8\u7F72","GoFrame","\u53CD\u5411\u4EE3\u7406","Nginx","\u9759\u6001\u6587\u4EF6","Golang\u5E94\u7528","WebServer","\u52A8\u6001\u8BF7\u6C42","\u8D1F\u8F7D\u5747\u8861","\u57DF\u540D\u914D\u7F6E"],description:"\u4F7F\u7528Nginx\u4F5C\u4E3A\u53CD\u5411\u4EE3\u7406\u7684\u524D\u7AEF\u63A5\u5165\u5C42\u6765\u90E8\u7F72GoFrame\u6846\u67B6\u5E94\u7528\u3002\u901A\u8FC7\u914D\u7F6E\u9759\u6001\u6587\u4EF6\u540E\u7F00\u6216\u76EE\u5F55\uFF0C\u53EF\u4EE5\u6709\u6548\u5206\u79BB\u9759\u6001\u548C\u52A8\u6001\u8BF7\u6C42\uFF0C\u4EE5\u63D0\u9AD8\u6027\u80FD\u3002\u914D\u7F6E\u793A\u4F8B\u8BE6\u7EC6\u5C55\u793A\u4E86\u5982\u4F55\u5C06\u8BF7\u6C42\u8F6C\u53D1\u5230Golang\u5E94\u7528\uFF0C\u5B9E\u73B0\u4E13\u4E1A\u6027\u7684WebServer\u90E8\u7F72\u65B9\u6848\u3002"},i=void 0,l={},t=[{value:"<code>Nginx</code>",id:"nginx",level:2},{value:"\u9759\u6001\u6587\u4EF6\u540E\u7F00",id:"\u9759\u6001\u6587\u4EF6\u540E\u7F00",level:3},{value:"\u9759\u6001\u6587\u4EF6\u76EE\u5F55",id:"\u9759\u6001\u6587\u4EF6\u76EE\u5F55",level:3}];function a(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u4EE3\u7406\u90E8\u7F72\u5373\u524D\u7F6E\u4E00\u5C42\u7B2C\u4E09\u65B9\u7684 ",(0,s.jsx)(n.code,{children:"WebServer"})," \u670D\u52A1\u5668\u5904\u7406\u6240\u6709\u7684\u8BF7\u6C42\uFF0C\u5C06\u90E8\u5206\u8BF7\u6C42(\u5F80\u5F80\u662F\u52A8\u6001\u5904\u7406\u8BF7\u6C42)\u6709\u9009\u62E9\u6027\u5730\u8F6C\u4EA4\u7ED9\u540E\u7AEF\u7684 ",(0,s.jsx)(n.code,{children:"Golang"})," \u5E94\u7528\u7A0B\u5E8F\u6267\u884C\uFF0C\u540E\u7AEF\u90E8\u7F72\u7684 ",(0,s.jsx)(n.code,{children:"Golang"})," \u5E94\u7528\u7A0B\u5E8F\u53EF\u4EE5\u914D\u7F6E\u6709\u591A\u4E2A\u3002\u8FD9\u79CD\u6A21\u5F0F\u5E38\u7528\u5728\u590D\u6742\u7684 ",(0,s.jsx)(n.code,{children:"WebServer"})," \u914D\u7F6E\u4E2D\uFF0C\u5E38\u89C1\u7684\u573A\u666F\u4F8B\u5982\uFF1A\u9700\u8981\u9759\u6001\u6587\u4EF6\u5206\u79BB\u3001\u9700\u8981\u914D\u7F6E\u591A\u4E2A\u57DF\u540D\u53CA\u8BC1\u4E66\u3001\u9700\u8981\u81EA\u5EFA\u8D1F\u8F7D\u5747\u8861\u5C42\uFF0C\u7B49\u7B49\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u867D\u7136 ",(0,s.jsx)(n.code,{children:"Golang"})," \u5B9E\u73B0\u7684 ",(0,s.jsx)(n.code,{children:"WebServer"})," \u4E5F\u80FD\u591F\u5904\u7406\u9759\u6001\u6587\u4EF6\uFF0C\u4F46\u662F\u76F8\u6BD4\u8F83\u4E8E\u4E13\u4E1A\u6027\u7684 ",(0,s.jsx)(n.code,{children:"WebServer"})," \u5982 ",(0,s.jsx)(n.code,{children:"nginx"}),"/ ",(0,s.jsx)(n.code,{children:"apache"})," \u6765\u8BF4\u6BD4\u8F83\u7B80\u5355\uFF0C\u6027\u80FD\u4E5F\u8F83\u5F31\u3002\u56E0\u6B64\u4E0D\u63A8\u8350\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"Golang WebServer"})," \u4F5C\u4E3A\u524D\u7AEF\u670D\u52A1\u76F4\u63A5\u5904\u7406\u9759\u6001\u6587\u4EF6\u8BF7\u6C42\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"nginx",children:(0,s.jsx)(n.code,{children:"Nginx"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"Nginx"})," \u4F5C\u4E3A\u53CD\u5411\u4EE3\u7406\u7684\u524D\u7AEF\u63A5\u5165\u5C42\uFF0C\u6709\u4E24\u79CD\u914D\u7F6E\u65B9\u5F0F\u5B9E\u73B0\u52A8\u9759\u6001\u8BF7\u6C42\u7684\u62C6\u5206\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u9759\u6001\u6587\u4EF6\u540E\u7F00",children:"\u9759\u6001\u6587\u4EF6\u540E\u7F00"}),"\n",(0,s.jsxs)(n.p,{children:["\u8FD9\u79CD\u65B9\u5F0F\u901A\u8FC7\u6587\u4EF6\u540D\u540E\u7F00\u533A\u5206\uFF0C\u5C06\u6307\u5B9A\u7684\u9759\u6001\u6587\u4EF6\u8F6C\u4EA4\u7ED9 ",(0,s.jsx)(n.code,{children:"nginx"})," \u5904\u7406\uFF0C\u5176\u4ED6\u7684\u8BF7\u6C42\u8F6C\u4EA4\u7ED9 ",(0,s.jsx)(n.code,{children:"golang"})," \u5E94\u7528\u3002 \u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-conf",children:"server {\n    listen       80;\n    server_name  goframe.org;\n\n    access_log   /var/log/gf-app-access.log;\n    error_log    /var/log/gf-app-error.log;\n\n    location ~ .*\\.(gif|jpg|jpeg|png|js|css|eot|ttf|woff|svg|otf)$ {\n        access_log off;\n        expires    1d;\n        root       /var/www/gf-app/public;\n        try_files  $uri @backend;\n    }\n\n    location / {\n        try_files $uri @backend;\n    }\n\n    location @backend {\n        proxy_pass                 http://127.0.0.1:8199;\n        proxy_redirect             off;\n        proxy_set_header           Host             $host;\n        proxy_set_header           X-Real-IP        $remote_addr;\n        proxy_set_header           X-Forwarded-For  $proxy_add_x_forwarded_for;\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4E2D\uFF0C ",(0,s.jsx)(n.code,{children:"8199"})," \u4E3A\u672C\u5730\u7684 ",(0,s.jsx)(n.code,{children:"golang"})," \u5E94\u7528 ",(0,s.jsx)(n.code,{children:"WebServer"})," \u76D1\u542C\u7AEF\u53E3\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4F8B\u5982\uFF0C\u5728\u8BE5\u914D\u7F6E\u4E0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"http://goframe.org/my.png"})," \u8BBF\u95EE\u5230\u6307\u5B9A\u7684\u9759\u6001\u6587\u4EF6\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u9759\u6001\u6587\u4EF6\u76EE\u5F55",children:"\u9759\u6001\u6587\u4EF6\u76EE\u5F55"}),"\n",(0,s.jsxs)(n.p,{children:["\u8FD9\u79CD\u65B9\u5F0F\u901A\u8FC7\u6587\u4EF6\u76EE\u5F55\u533A\u5206\uFF0C\u5C06\u6307\u5B9A\u76EE\u5F55\u7684\u8BBF\u95EE\u8BF7\u6C42\u8F6C\u4EA4\u7ED9 ",(0,s.jsx)(n.code,{children:"nginx"})," \u5904\u7406\uFF0C\u5176\u4ED6\u7684\u8BF7\u6C42\u8F6C\u4EA4\u7ED9 ",(0,s.jsx)(n.code,{children:"golang"})," \u5E94\u7528\u3002 \u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-conf",children:"server {\n    listen       80;\n    server_name  goframe.org;\n\n    access_log   /var/log/gf-app-access.log;\n    error_log    /var/log/gf-app-error.log;\n\n    location ^~ /public {\n        access_log off;\n        expires    1d;\n        root       /var/www/gf-app;\n        try_files  $uri @backend;\n    }\n\n    location / {\n        try_files $uri @backend;\n    }\n\n    location @backend {\n        proxy_pass                 http://127.0.0.1:8199;\n        proxy_redirect             off;\n        proxy_set_header           Host             $host;\n        proxy_set_header           X-Real-IP        $remote_addr;\n        proxy_set_header           X-Forwarded-For  $proxy_add_x_forwarded_for;\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4E2D\uFF0C ",(0,s.jsx)(n.code,{children:"8199"})," \u4E3A\u672C\u5730\u7684 ",(0,s.jsx)(n.code,{children:"golang"})," \u5E94\u7528 ",(0,s.jsx)(n.code,{children:"WebServer"})," \u76D1\u542C\u7AEF\u53E3\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4F8B\u5982\uFF0C\u5728\u8BE5\u914D\u7F6E\u4E0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"http://goframe.org/public/my.png"})," \u8BBF\u95EE\u9759\u6001\u6587\u4EF6\u3002"]})]})}function p(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return c}});var o=r(667294);let s={},d=o.createContext(s);function c(e){let n=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);
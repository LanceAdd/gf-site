"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["3111"],{263526:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>i});var t=JSON.parse('{"id":"WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/HTTPS & TLS","title":"HTTPS & TLS","description":"HTTPS\u670D\u52A1","source":"@site/versioned_docs/version-2.4.x/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/HTTPS & TLS.md","sourceDirName":"WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027","slug":"/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/HTTPS & TLS","permalink":"/2.4.x/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/HTTPS & TLS","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/HTTPS & TLS.md","tags":[],"version":"2.4.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":2,"frontMatter":{"title":"HTTPS & TLS","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u670D\u52A1\u65E5\u5FD7\u7BA1\u7406","permalink":"/2.4.x/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/\u670D\u52A1\u65E5\u5FD7\u7BA1\u7406"},"next":{"title":"\u5E73\u6ED1\u91CD\u542F\u7279\u6027","permalink":"/2.4.x/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/\u5E73\u6ED1\u91CD\u542F\u7279\u6027"}}'),s=r("785893"),l=r("250065");let i={title:"HTTPS & TLS",sidebar_position:2,hide_title:!0},c=void 0,o={},d=[{value:"HTTPS\u670D\u52A1",id:"https\u670D\u52A1",level:2},{value:"\u51C6\u5907\u5DE5\u4F5C",id:"\u51C6\u5907\u5DE5\u4F5C",level:3},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:3},{value:"HTTPS\u4E0EHTTP\u652F\u6301",id:"https\u4E0Ehttp\u652F\u6301",level:2},{value:"\u4F7F\u7528Let\u2019s Encrypt\u514D\u8D39\u8BC1\u4E66",id:"\u4F7F\u7528lets-encrypt\u514D\u8D39\u8BC1\u4E66",level:2},{value:"\u5B89\u88C5Certbot",id:"\u5B89\u88C5certbot",level:3},{value:"\u7533\u8BF7\u8BC1\u4E66",id:"\u7533\u8BF7\u8BC1\u4E66",level:3},{value:"\u4F7F\u7528\u8BC1\u4E66",id:"\u4F7F\u7528\u8BC1\u4E66",level:3},{value:"\u8BC1\u4E66\u7EED\u671F",id:"\u8BC1\u4E66\u7EED\u671F",level:3}];function a(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"https\u670D\u52A1",children:"HTTPS\u670D\u52A1"}),"\n",(0,s.jsxs)(n.p,{children:["\u5EFA\u7ACB ",(0,s.jsx)(n.code,{children:"HTTPS"})," \u670D\u52A1\u975E\u5E38\u7B80\u5355\uFF0C\u4F7F\u7528\u6846\u67B6WebServer\u63D0\u4F9B\u7684 ",(0,s.jsx)(n.code,{children:"EnableHTTPS(certFile, keyFile string) error"})," \u65B9\u6CD5\u5373\u53EF\u3002\u5F88\u663E\u7136\uFF0C\u8BE5\u65B9\u6CD5\u4E2D\u9700\u8981\u63D0\u4F9B\u4E24\u4E2A\u53C2\u6570\uFF0C\u5373\u4E24\u4E2A\u7528\u4E8EHTTPS\u975E\u5BF9\u79F0\u52A0\u5BC6\u7684\u8BC1\u4E66\u6587\u4EF6\u4EE5\u53CA\u5BF9\u5E94\u7684\u79D8\u94A5\u6587\u4EF6\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u51C6\u5907\u5DE5\u4F5C",children:"\u51C6\u5907\u5DE5\u4F5C"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u672C\u5730\u6F14\u793A\u7684\u9700\u8981\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"openssl"})," \u547D\u4EE4\u751F\u6210\u672C\u5730\u7528\u4E8E\u6D4B\u8BD5\u7684\u8BC1\u4E66\u548C\u5BF9\u5E94\u7684\u79D8\u94A5\u6587\u4EF6\u3002\u547D\u4EE4\u5982\u4E0B\uFF1A"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4F7F\u7528\u5E38\u7528\u7684RSA\u7B97\u6CD5\u751F\u6210\u79D8\u94A5\u6587\u4EF6"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"openssl genrsa -out server.key 2048\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6B64\u5916\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528ECDSA\u7B97\u6CD5\u6765\u751F\u6210\u79D8\u94A5\u6587\u4EF6\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"openssl ecparam -genkey -name secp384r1 -out server.key\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u6839\u636E\u79D8\u94A5\u6587\u4EF6\u751F\u6210\u8BC1\u4E66\u6587\u4EF6"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"openssl req -new -x509 -key server.key -out server.crt -days 365\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"(\u53EF\u9009)\u6839\u636E\u79D8\u94A5\u751F\u6210\u516C\u94A5\u6587\u4EF6\uFF0C\u8BE5\u6587\u4EF6\u7528\u4E8E\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u901A\u4FE1"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"openssl rsa -in server.key -out server.key.public\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"openssl"})," \u652F\u6301\u7684\u7B97\u6CD5\u4EE5\u53CA\u547D\u4EE4\u53C2\u6570\u6BD4\u8F83\u591A\uFF0C\u5982\u679C\u60F3\u8981\u6DF1\u5165\u4E86\u89E3\u8BF7\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"man openssl"})," \u547D\u4EE4\u8FDB\u884C\u67E5\u770B\u3002\u672C\u6B21\u793A\u4F8B\u4E2D\uFF0C\u672C\u5730\u73AF\u5883(Ubuntu)\u4F7F\u7528\u547D\u4EE4\u751F\u6210\u76F8\u5173\u79D8\u94A5\u3001\u516C\u94A5\u3001\u8BC1\u4E66\u6587\u4EF6\u7684\u6D41\u7A0B\u5982\u4E0B\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ openssl genrsa -out server.key 2048\nGenerating RSA private key, 2048 bit long modulus\n.........................+++\n.....................................................................+++\nunable to write 'random state'\ne is 65537 (0x10001)\n\n$ openssl req -new -x509 -key server.key -out server.crt -days 365\nYou are about to be asked to enter information that will be incorporated\ninto your certificate request.\nWhat you are about to enter is what is called a Distinguished Name or a DN.\nThere are quite a few fields but you can leave some blank\nFor some fields there will be a default value,\nIf you enter '.', the field will be left blank.\n-----\nCountry Name (2 letter code) [AU]:CH\nState or Province Name (full name) [Some-State]:SiChuan\nLocality Name (eg, city) []:Chengdu\nOrganization Name (eg, company) [Internet Widgits Pty Ltd]:John.cn\nOrganizational Unit Name (eg, section) []:Dev\nCommon Name (e.g. server FQDN or YOUR name) []:John\nEmail Address []:john@johng.cn\n\n$ openssl rsa -in server.key -out server.key.public\nwriting RSA key\n\n$ ll\ntotal 20\ndrwxrwxr-x  2 john john 4096 Apr 23 21:26 ./\ndrwxr-xr-x 90 john john 4096 Apr 23 20:55 ../\n-rw-rw-r--  1 john john 1383 Apr 23 21:26 server.crt\n-rw-rw-r--  1 john john 1675 Apr 23 21:25 server.key\n-rw-rw-r--  1 john john 1675 Apr 23 21:26 server.key.public\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5176\u4E2D\uFF0C\u751F\u6210\u8BC1\u4E66\u7684\u547D\u4EE4\u63D0\u793A\u9700\u8981\u5F55\u5165\u4E00\u4E9B\u4FE1\u606F\uFF0C\u53EF\u4EE5\u76F4\u63A5\u56DE\u8F66\u7559\u7A7A\u5373\u53EF\uFF0C\u6211\u4EEC\u8FD9\u91CC\u968F\u4FBF\u586B\u5199\u4E86\u4E00\u4E9B\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,s.jsxs)(n.p,{children:["\u6839\u636E\u4EE5\u4E0A\u751F\u6210\u7684\u79D8\u94A5\u548C\u8BC1\u4E66\u6587\u4EF6\uFF0C\u6211\u4EEC\u6765\u6F14\u793A\u5982\u679C\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"ghttp.Server"})," \u5B9E\u73B0\u4E00\u4E2AHTTPS\u670D\u52A1\u3002\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := ghttp.GetServer()\n    s.BindHandler("/", func(r *ghttp.Request){\n        r.Response.Writeln("\u6765\u81EA\u4E8EHTTPS\u7684\uFF1A\u54C8\u55BD\u4E16\u754C\uFF01")\n    })\n    s.EnableHTTPS("/home/john/https/server.crt", "/home/john/https/server.key")\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u4EEC\u76F4\u63A5\u5C06\u4E4B\u524D\u751F\u6210\u7684\u8BC1\u4E66\u548C\u79D8\u94A5\u6587\u4EF6\u5730\u5740\u4F20\u9012\u7ED9 ",(0,s.jsx)(n.code,{children:"EnableHTTPS"})," \u5373\u53EF\uFF0C\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"s.SetPort(8199)"})," \u8BBE\u7F6EHTTPS\u7684\u670D\u52A1\u7AEF\u53E3\uFF0C\u5F53\u7136\u6211\u4EEC\u4E5F\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"s.SetHTTPSPort(8199)"})," \u6765\u5B9E\u73B0\uFF0C\u5728\u5355\u4E00\u670D\u52A1\u4E0B\u4E24\u8005\u6CA1\u6709\u533A\u522B\uFF0C\u5F53WebServer\u9700\u8981\u540C\u65F6\u652F\u6301HTTP\u548CHTTPS\u670D\u52A1\u7684\u65F6\u5019\uFF0C\u4E24\u8005\u7684\u4F5C\u7528\u5C31\u4E0D\u540C\u4E86\uFF0C\u8FD9\u4E2A\u7279\u6027\u6211\u4EEC\u4F1A\u5728\u540E\u9762\u4ECB\u7ECD\u3002\u968F\u540E\u6211\u4EEC\u8BBF\u95EE\u9875\u9762 ",(0,s.jsx)(n.a,{href:"https://127.0.0.1:8199/",children:"https://127.0.0.1:8199/"})," \u6765\u770B\u4E00\u4E0B\u6548\u679C\uFF1A"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(21386).Z+"",width:"728",height:"533"})}),"\n",(0,s.jsx)(n.p,{children:"\u53EF\u4EE5\u770B\u5230\u6D4F\u89C8\u5668\u6709\u63D0\u793A\u4FE1\u606F\uFF0C\u4E3B\u8981\u662F\u56E0\u4E3A\u6211\u4EEC\u751F\u6210\u7684\u8BC1\u4E66\u4E3A\u79C1\u6709\u7684\uFF0C\u975E\u7B2C\u4E09\u65B9\u6388\u4FE1\u4F01\u4E1A\u63D0\u4F9B\u7684\u3002\u6D4F\u89C8\u5668\u5927\u591A\u4F1A\u81EA\u5E26\u4E00\u4E9B\u7B2C\u4E09\u65B9\u6388\u4FE1\u7684HTTPS\u8BC1\u4E66\u673A\u6784\uFF0C\u8FD9\u4E9B\u673A\u6784\u63D0\u4F9B\u7684HTTPS\u8BC1\u4E66\u88AB\u6D4F\u89C8\u5668\u8BA4\u4E3A\u662F\u6743\u5A01\u7684\u3001\u53EF\u4FE1\u7684\uFF0C\u624D\u4E0D\u4F1A\u51FA\u73B0\u8BE5\u63D0\u793A\u4FE1\u606F\u3002\u4E00\u822C\u8FD9\u79CD\u7B2C\u4E09\u65B9\u6743\u5A01\u673A\u6784\u6388\u4FE1\u8BC1\u4E66\u4EF7\u683C\u5728\u6BCF\u5E74\u51E0\u5343\u5230\u51E0\u4E07\u4EBA\u6C11\u5E01\u4E0D\u7B49\uFF0C\u611F\u5174\u8DA3\u7684\u670B\u53CB\u53EF\u5728\u641C\u7D22\u5F15\u64CE\u4E0A\u4E86\u89E3\u4E0B\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(561004).Z+"",width:"732",height:"699"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4EEC\u8FD9\u91CC\u76F4\u63A5\u70B9\u51FB ",(0,s.jsx)(n.code,{children:"Advanced"}),"\uFF0C\u7136\u540E\u70B9\u51FB ",(0,s.jsx)(n.code,{children:"Proceed to 127.0.0.1 (unsafe)"}),"\uFF0C\u6700\u7EC8\u53EF\u4EE5\u770B\u5230\u9875\u9762\u8F93\u51FA\u9884\u671F\u7684\u7ED3\u679C\uFF1A"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(539880).Z+"",width:"729",height:"79"})}),"\n",(0,s.jsx)(n.h2,{id:"https\u4E0Ehttp\u652F\u6301",children:"HTTPS\u4E0EHTTP\u652F\u6301"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4EEC\u7ECF\u5E38\u4F1A\u9047\u5230\u9700\u8981\u901A\u8FC7HTTP\u548CHTTPS\u6765\u63D0\u4F9B\u540C\u4E00\u4E2A\u670D\u52A1\u7684\u60C5\u51B5\uFF0C\u5373\u9664\u4E86\u7AEF\u53E3\u548C\u8BBF\u95EE\u534F\u8BAE\u4E0D\u4E00\u6837\uFF0C\u5176\u4ED6\u90FD\u662F\u76F8\u540C\u7684\u3002\u5982\u679C\u6309\u7167\u4F20\u7EDF\u7684\u4F7F\u7528\u591AWebServer\u7684\u65B9\u5F0F\u6765\u8FD0\u884C\u7684\u8BDD\u4F1A\u6BD4\u8F83\u7E41\u7410\uFF0C\u4E3A\u8F7B\u677E\u5730\u89E3\u51B3\u5F00\u53D1\u8005\u7684\u70E6\u607C\uFF0C ",(0,s.jsx)(n.code,{children:"ghttp"})," \u63D0\u4F9B\u4E86\u975E\u5E38\u65B9\u4FBF\u7684\u7279\u6027\uFF1A\u652F\u6301 \u201C\u540C\u4E00\u4E2A\u201DWebServer\u540C\u65F6\u652F\u6301HTTPS\u53CAHTTP\u8BBF\u95EE\u534F\u8BAE\u3002\u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E2A\u4F8B\u5B50\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := ghttp.GetServer()\n    s.BindHandler("/", func(r *ghttp.Request){\n        r.Response.Writeln("\u60A8\u53EF\u4EE5\u540C\u65F6\u901A\u8FC7HTTP\u548CHTTPS\u65B9\u5F0F\u770B\u5230\u8BE5\u5185\u5BB9\uFF01")\n    })\n    s.EnableHTTPS("/home/john/https/server.crt", "/home/john/https/server.key")\n    s.SetHTTPSPort(443)\n    s.SetPort(80)\n    s.Run()\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884C\u540E\uFF0C\u901A\u8FC7\u672C\u5730\u6D4F\u89C8\u5668\u8BBF\u95EE\u8FD9\u4E24\u4E2A\u5730\u5740 ",(0,s.jsx)(n.a,{href:"http://127.0.0.1/",children:"http://127.0.0.1/"})," \u548C\xa0",(0,s.jsx)(n.a,{href:"https://127.0.0.1/",children:"https://127.0.0.1/"})," \u90FD\u4F1A\u770B\u5230\u540C\u6837\u7684\u5185\u5BB9\uFF08\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u7531\u4E8E\u90E8\u5206\u7CFB\u7EDF\u5BF9\u4E8E\u6743\u9650\u7684\u9650\u5236\uFF0CWebServer\u7ED1\u5B9A ",(0,s.jsx)(n.code,{children:"80"})," \u548C ",(0,s.jsx)(n.code,{children:"443"})," \u7AEF\u53E3\u9700\u8981 ",(0,s.jsx)(n.code,{children:"root/\u7BA1\u7406\u5458"})," \u6743\u9650\uFF0C\u5982\u679C\u542F\u52A8\u62A5\u9519\uFF0C\u53EF\u4EE5\u66F4\u6539\u7AEF\u53E3\u53F7\u540E\u91CD\u65B0\u6267\u884C\u5373\u53EF\uFF09\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u672C\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86\u4E24\u4E2A\u65B9\u6CD5\u6765\u5F00\u542FHTTPS\u7279\u6027\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func (s *Server) EnableHTTPS(certFile, keyFile string) error\nfunc (s *Server) SetHTTPSPort(port ...int) error\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4E00\u4E2A\u662F\u6DFB\u52A0\u8BC1\u4E66\u53CA\u5BC6\u94A5\u6587\u4EF6\uFF0C\u4E00\u4E2A\u662F\u8BBE\u7F6EHTTPS\u534F\u8BAE\u7684\u76D1\u542C\u7AEF\u53E3\uFF0C\u4E00\u65E6\u8FD9\u4E24\u4E2A\u5C5E\u6027\u88AB\u8BBE\u7F6E\u4E86\uFF0C\u90A3\u4E48WebServer\u5C31\u4F1A\u542F\u7528HTTPS\u7279\u6027\u3002\u5E76\u4E14\uFF0C\u5728\u793A\u4F8B\u4E2D\u4E5F\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"SetPort"})," \u65B9\u6CD5\u6765\u8BBE\u7F6E\u4E86HTTP\u670D\u52A1\u7684\u76D1\u542C\u7AEF\u53E3\uFF0C\u56E0\u6B64\u8BE5WebServer\u5C06\u4F1A\u540C\u65F6\u76D1\u542C\u6307\u5B9A\u7684HTTPS\u548CHTTP\u670D\u52A1\u7AEF\u53E3\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F7F\u7528lets-encrypt\u514D\u8D39\u8BC1\u4E66",children:"\u4F7F\u7528Let\u2019s Encrypt\u514D\u8D39\u8BC1\u4E66"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"SSL\u514D\u8D39\u8BC1\u4E66"})," \u673A\u6784\u6BD4\u8F83\u591A\uFF0C\u5982\uFF1A"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"\u817E\u8BAF\u4E91DV SSL \u8BC1\u4E66"}),": ",(0,s.jsx)(n.a,{href:"https://cloud.tencent.com/product/ssl",children:"https://cloud.tencent.com/product/ssl"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Let\u2019s Encrypt"}),": ",(0,s.jsx)(n.a,{href:"https://letsencrypt.org/",children:"https://letsencrypt.org/"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CloudFlare SSL"}),": ",(0,s.jsx)(n.a,{href:"https://www.cloudflare.com/",children:"https://www.cloudflare.com/"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"StartSSL"}),": ",(0,s.jsx)(n.a,{href:"https://www.startcomca.com/",children:"https://www.startcomca.com/"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Wosign\u6C83\u901ASSL"}),": ",(0,s.jsx)(n.a,{href:"https://www.wosign.com/",children:"https://www.wosign.com/"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"             loovit.net AlphaSSL"}),": ",(0,s.jsx)(n.a,{href:"https://www.lowendtalk.com/entry/register?Target=discussion%2Fcomment%2F2306096",children:"https://www.lowendtalk.com/entry/register?Target=discussion%2Fcomment%2F2306096"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4EE5\u4E0B\u4EE5 ",(0,s.jsx)(n.code,{children:"Let's Encrypt"})," \u4E3A\u4F8B\uFF0C\u4ECB\u7ECD\u5982\u4F55\u7533\u8BF7\u3001\u4F7F\u7528\u3001\u7EED\u671F\u514D\u8D39\u8BC1\u4E66\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Let\u2019s Encrypt"})," \u5B98\u7F51\u5730\u5740\uFF1A ",(0,s.jsx)(n.a,{href:"https://letsencrypt.org/",children:"https://letsencrypt.org/"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u4EE5\u4E0B\u4EE5 ",(0,s.jsx)(n.code,{children:"Ubuntu"})," \u7CFB\u7EDF\u4E3A\u4F8B\uFF0C\u5982\u4F55\u7533\u8BF7 ",(0,s.jsx)(n.code,{children:"Let's Encrypt"})," \u514D\u8D39\u8BC1\u4E66\u53CA\u5728 ",(0,s.jsx)(n.code,{children:"gf"})," \u6846\u67B6\u4E0B\u5BF9\u8BC1\u4E66\u7684\u4F7F\u7528\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5B89\u88C5certbot",children:"\u5B89\u88C5Certbot"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Certbot"})," \u5B98\u7F51\u5730\u5740\uFF1A ",(0,s.jsx)(n.a,{href:"https://certbot.eff.org/",children:"https://certbot.eff.org/"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u7533\u8BF7 ",(0,s.jsx)(n.code,{children:"Let\u2019s Encrypt"})," \u514D\u8D39\u8BC1\u4E66\u9700\u8981\u4F7F\u7528\u5230 ",(0,s.jsx)(n.code,{children:"certbot"})," \u5DE5\u5177\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo apt-get update\nsudo apt-get install software-properties-common\nsudo add-apt-repository ppa:certbot/certbot\nsudo apt-get update\nsudo apt-get install certbot\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u7533\u8BF7\u8BC1\u4E66",children:"\u7533\u8BF7\u8BC1\u4E66"}),"\n",(0,s.jsx)(n.p,{children:"\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"certbot certonly --standalone -d \u7533\u8BF7\u57DF\u540D --staple-ocsp -m \u90AE\u7BB1\u5730\u5740 --agree-tos\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4F8B\u5982\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'root@ip-172-31-41-204:~# certbot certonly --standalone -d goframe.org --staple-ocsp -m john@goframe.org --agree-tos\nSaving debug log to /var/log/letsencrypt/letsencrypt.log\nPlugins selected: Authenticator standalone, Installer None\nStarting new HTTPS connection (1): acme-v02.api.letsencrypt.org\nObtaining a new certificate\nPerforming the following challenges:\nhttp-01 challenge for goframe.org\nWaiting for verification...\nCleaning up challenges\n\nIMPORTANT NOTES:\n - Congratulations! Your certificate and chain have been saved at:\n   /etc/letsencrypt/live/goframe.org/fullchain.pem\n   Your key file has been saved at:\n   /etc/letsencrypt/live/goframe.org/privkey.pem\n   Your cert will expire on 2019-01-25. To obtain a new or tweaked\n   version of this certificate in the future, simply run certbot\n   again. To non-interactively renew *all* of your certificates, run\n   "certbot renew"\n - If you like Certbot, please consider supporting our work by:\n\n   Donating to ISRG / Let\'s Encrypt:   https://letsencrypt.org/donate\n   Donating to EFF:                    https://eff.org/donate-le\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8BC1\u4E66\u4F1A\u88AB\u5B89\u88C5\u5230 ",(0,s.jsx)(n.code,{children:"/etc/letsencrypt/"}),"\uFF0C\u8BC1\u4E66\u548C\u79C1\u94A5\u6587\u4EF6\u5206\u522B\u4E3A\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"/etc/letsencrypt/live/goframe.org/fullchain.pem\n/etc/letsencrypt/live/goframe.org/privkey.pem\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u4F7F\u7528\u8BC1\u4E66",children:"\u4F7F\u7528\u8BC1\u4E66"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := ghttp.GetServer()\n    s.BindHandler("/", func(r *ghttp.Request){\n        r.Response.Writeln("\u6765\u81EA\u4E8EHTTPS\u7684\uFF1A\u54C8\u55BD\u4E16\u754C\uFF01")\n    })\n    s.EnableHTTPS("/etc/letsencrypt/live/goframe.org/fullchain.pem", "/etc/letsencrypt/live/goframe.org/privkey.pem")\n    s.Run()\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u8BC1\u4E66\u7EED\u671F",children:"\u8BC1\u4E66\u7EED\u671F"}),"\n",(0,s.jsxs)(n.p,{children:["\u8BC1\u4E66\u9ED8\u8BA4\u6709\u6548\u671F\u4E3A ",(0,s.jsx)(n.code,{children:"3\u4E2A\u6708"}),"\uFF0C\u5230\u671F\u540E\u9700\u8981\u624B\u52A8\u7EED\u671F\uFF0C\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"certbot renew\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u793A\u4F8B1\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"crontab"})," \u5B9A\u65F6\u4EFB\u52A1\u6765\u5B9E\u73B0\u81EA\u52A8\u7EED\u671F\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'# \u6BCF\u5929\u5C1D\u8BD5\u7EED\u671F\u4E00\u6B21\uFF0C\u6210\u529F\u540E\u91CD\u542F`gf`\u6846\u67B6\u8FD0\u884C\u7684WebServer\n0 3 * * * certbot renew --quiet --renew-hook "kill -SIGUSR1 $(pidof \u8FDB\u7A0B\u540D\u79F0)"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u793A\u4F8B2\uFF0C\u5982\u679C\u6211\u4EEC\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"nginx"})," \u7BA1\u7406\u8BC1\u4E66\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u8FD9\u6837\u6765\u8BBE\u7F6E\u5B9A\u65F6\u4EFB\u52A1\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'# \u6BCF\u5929\u5C1D\u8BD5\u7EED\u671F\u4E00\u6B21\uFF0C\u8BC1\u4E66\u7EED\u671F\u9700\u8981\u5148\u5173\u95ED80\u7AEF\u53E3\u7684WebServer\u76D1\u542C\n0 3 * * * service nginx stop && certbot renew --quiet --renew-hook "service nginx start"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4E3A\u4E86\u9632\u6B62 ",(0,s.jsx)(n.code,{children:"certbot renew"})," \u547D\u4EE4\u53EF\u80FD\u7684\u5931\u8D25\u5BFC\u81F4 ",(0,s.jsx)(n.code,{children:"nginx"})," \u65E0\u6CD5\u91CD\u65B0\u542F\u52A8\uFF0C\u4E3A\u4FDD\u8BC1\u7A33\u5B9A\u6027\uFF0C\u53EF\u4EE5\u8FD9\u6837\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'# \u6BCF\u5929\u5C1D\u8BD5\u7EED\u671F\u4E00\u6B21\uFF0C\u8BC1\u4E66\u7EED\u671F\u9700\u8981\u5148\u5173\u95ED80\u7AEF\u53E3\u7684WebServer\u76D1\u542C\n0 3 * * * service nginx stop && certbot renew --quiet --renew-hook "service nginx start"\n5 3 * * * service nginx start\n'})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},539880:function(e,n,r){r.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},561004:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/54df4cea50cb9e60020ba1f0d60d444b-c5fed081f8357feb61290c444a692f54.png"},21386:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/9b4e41f454f165fd932fcc8ad6c7a2cd-d2ad2a10a3ae3705bfecb3f5655ad95f.png"},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var t=r(667294);let s={},l=t.createContext(s);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);
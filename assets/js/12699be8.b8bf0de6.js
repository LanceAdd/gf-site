"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["45386"],{12177:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>r,frontMatter:()=>l});var t=JSON.parse('{"id":"docs/\u5176\u4ED6\u8D44\u6599/\u51C6\u5907\u5F00\u53D1\u73AF\u5883/\u73AF\u5883\u5B89\u88C5","title":"\u73AF\u5883\u5B89\u88C5","description":"\u624B\u628A\u624B\u7684Golang\u5F00\u53D1\u73AF\u5883\u548CIDE\u914D\u7F6E\u6559\u7A0B\uFF0C\u9002\u5408Golang\u521D\u5B66\u8005\u3002\u8BE6\u7EC6\u4ECB\u7ECD\u4E86\u5982\u4F55\u4E0B\u8F7D\u548C\u5B89\u88C5Go\u5F00\u53D1\u5305\uFF0C\u5E76\u63A8\u8350\u4F7F\u7528JetBrains\u7684Goland\u4F5C\u4E3A\u5F00\u53D1IDE\uFF0C\u652F\u6301GoFrame\u6846\u67B6\u5F00\u53D1\u3002\u6B64\u5916\uFF0C\u8FD8\u5305\u62ECVSCode\u7684\u5B89\u88C5\u548C\u4F7F\u7528\u6B65\u9AA4\uFF0C\u5E2E\u52A9\u7528\u6237\u5FEB\u901F\u6784\u5EFA\u7B2C\u4E00\u4E2AGo\u7A0B\u5E8F\u3002","source":"@site/docs/docs/\u5176\u4ED6\u8D44\u6599/\u51C6\u5907\u5F00\u53D1\u73AF\u5883/\u73AF\u5883\u5B89\u88C5.md","sourceDirName":"docs/\u5176\u4ED6\u8D44\u6599/\u51C6\u5907\u5F00\u53D1\u73AF\u5883","slug":"/docs/install-go/index","permalink":"/docs/install-go/index","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u5176\u4ED6\u8D44\u6599/\u51C6\u5907\u5F00\u53D1\u73AF\u5883/\u73AF\u5883\u5B89\u88C5.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1735612971000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/install-go/index","title":"\u73AF\u5883\u5B89\u88C5","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","Go\u5F00\u53D1","Golang\u5B89\u88C5","Go\u73AF\u5883\u914D\u7F6E","Goland","VSCode","IDE\u8BBE\u7F6E","JetBrains","Go\u7A0B\u5E8F","GoFrame\u6846\u67B6"],"description":"\u624B\u628A\u624B\u7684Golang\u5F00\u53D1\u73AF\u5883\u548CIDE\u914D\u7F6E\u6559\u7A0B\uFF0C\u9002\u5408Golang\u521D\u5B66\u8005\u3002\u8BE6\u7EC6\u4ECB\u7ECD\u4E86\u5982\u4F55\u4E0B\u8F7D\u548C\u5B89\u88C5Go\u5F00\u53D1\u5305\uFF0C\u5E76\u63A8\u8350\u4F7F\u7528JetBrains\u7684Goland\u4F5C\u4E3A\u5F00\u53D1IDE\uFF0C\u652F\u6301GoFrame\u6846\u67B6\u5F00\u53D1\u3002\u6B64\u5916\uFF0C\u8FD8\u5305\u62ECVSCode\u7684\u5B89\u88C5\u548C\u4F7F\u7528\u6B65\u9AA4\uFF0C\u5E2E\u52A9\u7528\u6237\u5FEB\u901F\u6784\u5EFA\u7B2C\u4E00\u4E2AGo\u7A0B\u5E8F\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u51C6\u5907\u5F00\u53D1\u73AF\u5883","permalink":"/docs/install-go"},"next":{"title":"Go Module","permalink":"/docs/install-go/go-module"}}'),d=s("785893"),i=s("250065");let l={slug:"/docs/install-go/index",title:"\u73AF\u5883\u5B89\u88C5",sidebar_position:0,hide_title:!0,keywords:["GoFrame","Go\u5F00\u53D1","Golang\u5B89\u88C5","Go\u73AF\u5883\u914D\u7F6E","Goland","VSCode","IDE\u8BBE\u7F6E","JetBrains","Go\u7A0B\u5E8F","GoFrame\u6846\u67B6"],description:"\u624B\u628A\u624B\u7684Golang\u5F00\u53D1\u73AF\u5883\u548CIDE\u914D\u7F6E\u6559\u7A0B\uFF0C\u9002\u5408Golang\u521D\u5B66\u8005\u3002\u8BE6\u7EC6\u4ECB\u7ECD\u4E86\u5982\u4F55\u4E0B\u8F7D\u548C\u5B89\u88C5Go\u5F00\u53D1\u5305\uFF0C\u5E76\u63A8\u8350\u4F7F\u7528JetBrains\u7684Goland\u4F5C\u4E3A\u5F00\u53D1IDE\uFF0C\u652F\u6301GoFrame\u6846\u67B6\u5F00\u53D1\u3002\u6B64\u5916\uFF0C\u8FD8\u5305\u62ECVSCode\u7684\u5B89\u88C5\u548C\u4F7F\u7528\u6B65\u9AA4\uFF0C\u5E2E\u52A9\u7528\u6237\u5FEB\u901F\u6784\u5EFA\u7B2C\u4E00\u4E2AGo\u7A0B\u5E8F\u3002"},o=void 0,c={},r=[{value:"Go\u5F00\u53D1\u73AF\u5883\u5B89\u88C5",id:"go\u5F00\u53D1\u73AF\u5883\u5B89\u88C5",level:2},{value:"Step1 - \u4E0B\u8F7DGo\u5F00\u53D1\u5305",id:"step1---\u4E0B\u8F7Dgo\u5F00\u53D1\u5305",level:3},{value:"Step2 - \u5B89\u88C5\u5F15\u5BFC",id:"step2---\u5B89\u88C5\u5F15\u5BFC",level:3},{value:"IDE\u5F00\u53D1\u73AF\u5883\u5B89\u88C5",id:"ide\u5F00\u53D1\u73AF\u5883\u5B89\u88C5",level:2},{value:"Goland\u7684\u4F7F\u7528",id:"goland\u7684\u4F7F\u7528",level:3},{value:"Step1. \u6253\u5F00IDE",id:"step1-\u6253\u5F00ide",level:4},{value:"Step2. \u521B\u5EFA\u9879\u76EE",id:"step2-\u521B\u5EFA\u9879\u76EE",level:4},{value:"Step3. \u521B\u5EFA\u7A0B\u5E8F",id:"step3-\u521B\u5EFA\u7A0B\u5E8F",level:4},{value:"Step4. \u6267\u884C\u8FD0\u884C",id:"step4-\u6267\u884C\u8FD0\u884C",level:4},{value:"VSCode\u7684\u4F7F\u7528",id:"vscode\u7684\u4F7F\u7528",level:3},{value:"Step1 - \u4E0B\u8F7D\u5B89\u88C5",id:"step1---\u4E0B\u8F7D\u5B89\u88C5",level:4},{value:"Step2 - \u5B89\u88C5Go\u6269\u5C55",id:"step2---\u5B89\u88C5go\u6269\u5C55",level:4},{value:"Step3 - Hello World",id:"step3---hello-world",level:4}];function a(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["\u8BE5\u7AE0\u8282\u4E3A\u624B\u6478\u624B\u5B89\u88C5 ",(0,d.jsx)(n.code,{children:"Golang"})," \u5F00\u53D1\u73AF\u5883\u53CA ",(0,d.jsx)(n.code,{children:"IDE"})," \u914D\u7F6E\u6559\u7A0B\uFF0C\u4EC5\u9488\u5BF9 ",(0,d.jsx)(n.code,{children:"Golang"})," \u840C\u65B0\uFF0C\u8001\u53F8\u673A\u8BF7\u5FFD\u7565\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"go\u5F00\u53D1\u73AF\u5883\u5B89\u88C5",children:"Go\u5F00\u53D1\u73AF\u5883\u5B89\u88C5"}),"\n",(0,d.jsx)(n.h3,{id:"step1---\u4E0B\u8F7Dgo\u5F00\u53D1\u5305",children:"Step1 - \u4E0B\u8F7DGo\u5F00\u53D1\u5305"}),"\n",(0,d.jsxs)(n.p,{children:["\u8BBF\u95EE",(0,d.jsx)(n.code,{children:"Go"}),"\u56FD\u5185\u955C\u50CF\u7AD9\u4E0B\u8F7D\u9875\u9762 ",(0,d.jsx)(n.a,{href:"https://golang.google.cn/dl/",children:"https://golang.google.cn/dl/"}),"\uFF0C\u5E76\u5728\u9875\u9762\u6700\u4E0A\u65B9\u7684\u7248\u672C\u4E2D\u9009\u62E9\u4F60\u5F53\u524D\u7684\u7CFB\u7EDF\u7248\u672C\uFF0C\u4F1A\u4E0B\u8F7D\u6700\u65B0\u7248\u672C\u7684",(0,d.jsx)(n.code,{children:"Go"}),"\u5F00\u53D1\u5305:"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(308248).Z+"",width:"1025",height:"532"})}),"\n",(0,d.jsx)(n.h3,{id:"step2---\u5B89\u88C5\u5F15\u5BFC",children:"Step2 - \u5B89\u88C5\u5F15\u5BFC"}),"\n",(0,d.jsxs)(n.p,{children:["\u8BBF\u95EE\u5B98\u65B9\u5B89\u88C5\u4ECB\u7ECD\u9875\u9762 ",(0,d.jsx)(n.a,{href:"https://golang.google.cn/doc/install",children:"https://golang.google.cn/doc/install"}),"\uFF0C\u6309\u7167\u5F53\u524D\u7CFB\u7EDF\u7248\u672C\u6267\u884C\u5BF9\u5E94\u7684\u5B89\u88C5\u6D41\u7A0B\u5373\u53EF\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["Windows( ",(0,d.jsx)(n.code,{children:"msi"}),")\u548CMacOS( ",(0,d.jsx)(n.code,{children:"pkg"}),")\u63A8\u8350\u4F7F\u7528\u5B89\u88C5\u5305\u7684\u65B9\u5F0F\u6765\u5B89\u88C5\u3002\u4F5C\u8005\u5F53\u524DMacOS\u5B89\u88C5\u5305( ",(0,d.jsx)(n.code,{children:"pkg"}),")\u5B89\u88C5\u8FC7\u7A0B\u5982\u4E0B\u56FE\u6240\u793A\uFF1A"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(947877).Z+"",width:"620",height:"438"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(657545).Z+"",width:"620",height:"438"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(470078).Z+"",width:"620",height:"438"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Go"}),"\u7684\u5F00\u53D1\u5305\u5347\u7EA7\u4E5F\u662F\u540C\u6837\u7684\u8FC7\u7A0B\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"ide\u5F00\u53D1\u73AF\u5883\u5B89\u88C5",children:"IDE\u5F00\u53D1\u73AF\u5883\u5B89\u88C5"}),"\n",(0,d.jsxs)(n.p,{children:["\u76EE\u524D ",(0,d.jsx)(n.code,{children:"Go"})," \u7684 ",(0,d.jsx)(n.code,{children:"IDE"})," \u6709\u4E24\u6B3E\u6BD4\u8F83\u6D41\u884C\uFF0C\u4E00\u6B3E\u662F ",(0,d.jsx)(n.code,{children:"VSCode+Plugins"}),"\uFF08\u514D\u8D39\uFF09\uFF0C\u53E6\u4E00\u6B3E\u662F ",(0,d.jsx)(n.code,{children:"JetBrains"})," \u516C\u53F8\u7684 ",(0,d.jsx)(n.code,{children:"Goland"}),"\uFF08\u6536\u8D39\uFF09\u3002\u7531\u4E8E ",(0,d.jsx)(n.code,{children:"JetBrains"})," \u4E5F\u662F ",(0,d.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u7684\u8D5E\u52A9\u5546\uFF0C\u56E0\u6B64\u6211\u4EEC\u8FD9\u91CC\u4F18\u5148\u63A8\u8350\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"Goland"})," \u6765\u4F5C\u4E3A\u5F00\u53D1IDE\uFF0C\u4E0B\u8F7D\u53CA\u6CE8\u518C\u8BF7\u53C2\u8003\u7F51\u4E0A\u6559\u7A0B\uFF08 ",(0,d.jsx)(n.a,{href:"https://www.baidu.com/s?wd=goland%20%E5%AE%89%E8%A3%85",children:"\u767E\u5EA6"})," \u6216 ",(0,d.jsx)(n.a,{href:"https://www.google.com/search?q=goland+%E5%AE%89%E8%A3%85",children:"Google"}),"\uFF09\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"JetBrains"})," \u7684\u5B98\u65B9\u7F51\u7AD9\u4E3A\uFF1A ",(0,d.jsx)(n.a,{href:"https://www.jetbrains.com/?from=GoFrame",children:"https://www.jetbrains.com"})]}),"\n",(0,d.jsx)(n.h3,{id:"goland\u7684\u4F7F\u7528",children:"Goland\u7684\u4F7F\u7528"}),"\n",(0,d.jsxs)(n.p,{children:["\u6211\u4EEC\u6765\u521B\u5EFA\u7B2C\u4E00\u4E2A ",(0,d.jsx)(n.code,{children:"Go"})," \u7A0B\u5E8F\u5427\uFF0C\u8001\u89C4\u77E9\uFF0C\u4E0A ",(0,d.jsx)(n.code,{children:"hello world"}),"\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"step1-\u6253\u5F00ide",children:"Step1. \u6253\u5F00IDE"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(310366).Z+"",width:"800",height:"500"})}),"\n",(0,d.jsx)(n.h4,{id:"step2-\u521B\u5EFA\u9879\u76EE",children:"Step2. \u521B\u5EFA\u9879\u76EE"}),"\n",(0,d.jsxs)(n.p,{children:["\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u7684\u662F ",(0,d.jsx)(n.code,{children:"Go"})," \u5B89\u88C5\u6587\u4EF6\u7684\u8DEF\u5F84( ",(0,d.jsx)(n.code,{children:"SDK"}),")\uFF0C ",(0,d.jsx)(n.a,{href:"https://golang.google.cn/doc/install",children:"\u5B98\u65B9\u5B89\u88C5\u6587\u6863"})," \u6709\u8BE6\u7EC6\u8BF4\u660E\uFF0C\u8BF7\u4ED4\u7EC6\u9605\u8BFB\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5176\u4E2D\u7684 ",(0,d.jsx)(n.code,{children:"Location"})," \u968F\u610F\u9009\u62E9\u4E00\u4E2A\u672C\u5730\u8DEF\u5F84\u5373\u53EF\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"alt text",src:s(82912).Z+"",width:"1600",height:"1324"})}),"\n",(0,d.jsx)(n.h4,{id:"step3-\u521B\u5EFA\u7A0B\u5E8F",children:"Step3. \u521B\u5EFA\u7A0B\u5E8F"}),"\n",(0,d.jsxs)(n.p,{children:["\u7F16\u8F91 ",(0,d.jsx)(n.code,{children:"main.go"}),"\uFF0C\u5E76\u8F93\u5165\u4EE5\u4E0B\u4EE3\u7801:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("hello world!")\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"alt text",src:s(717294).Z+"",width:"2800",height:"1932"})}),"\n",(0,d.jsx)(n.h4,{id:"step4-\u6267\u884C\u8FD0\u884C",children:"Step4. \u6267\u884C\u8FD0\u884C"}),"\n",(0,d.jsxs)(n.p,{children:["\u83DC\u5355\u680F ",(0,d.jsx)(n.code,{children:"Run"})," - ",(0,d.jsx)(n.code,{children:"Run"})," - ",(0,d.jsx)(n.code,{children:"go build hello.go"}),"\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"alt text",src:s(646866).Z+"",width:"3420",height:"2084"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"alt text",src:s(26717).Z+"",width:"2408",height:"1296"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"alt text",src:s(651413).Z+"",width:"3420",height:"2012"})}),"\n",(0,d.jsxs)(n.p,{children:["\u606D\u559C\u4F60\uFF0C\u7B2C\u4E00\u4E2A ",(0,d.jsx)(n.code,{children:"Go"})," \u7A0B\u5E8F\u4FBF\u6210\u529F\u4E86\uFF01"]}),"\n",(0,d.jsx)(n.h3,{id:"vscode\u7684\u4F7F\u7528",children:"VSCode\u7684\u4F7F\u7528"}),"\n",(0,d.jsx)(n.h4,{id:"step1---\u4E0B\u8F7D\u5B89\u88C5",children:(0,d.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"Step1 - \u4E0B\u8F7D\u5B89\u88C5"})}),"\n",(0,d.jsx)(n.h4,{id:"step2---\u5B89\u88C5go\u6269\u5C55",children:(0,d.jsx)(n.a,{href:"https://docs.microsoft.com/zh-cn/learn/modules/go-get-started/4-install-visual-studio-code?ns-enrollment-type=learningpath&ns-enrollment-id=learn.languages.go-first-steps",children:"Step2 - \u5B89\u88C5Go\u6269\u5C55"})}),"\n",(0,d.jsx)(n.h4,{id:"step3---hello-world",children:(0,d.jsx)(n.a,{href:"https://docs.microsoft.com/zh-cn/learn/modules/go-get-started/5-hello-world",children:"Step3 - Hello World"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},82912:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/QQ_1733020124554-f03a566143ecc642f52d6a9f9ff1e029.png"},717294:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/QQ_1733020331260-6dcfc230cebdbebe770e98e1285b830a.png"},646866:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/QQ_1733020422698-820b07c1fd7f976e2597bd28db0c0701.png"},26717:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/QQ_1733020474019-d84d57ae83bf72822dea0e8b2f515a56.png"},651413:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/QQ_1733020511081-641e796b85aafd28e7bd493db1312910.png"},310366:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/53e952d14b92225b865b2bca6aab7cd2-7c584cace99e641f4c5a904bb220b58e.png"},947877:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/80729ac6360ac646a39b696d32778d66-55d6bd95cd25b0b9677da47b167e2452.png"},657545:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/afc21d8598a0bef86c1a53c8e6784bb6-a63b2b6f05373fa6ee76e4797119bc90.png"},308248:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/d3ce7f0e43ebf678adea8db4c46662d5-f9d11574b304156e13d860b888bf4fc3.png"},470078:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/f3f59daf118e34e16a920bcdcf6391de-9211f606160796bedbb3593a50520b67.png"},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var t=s(667294);let d={},i=t.createContext(d);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
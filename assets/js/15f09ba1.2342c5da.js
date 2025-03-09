"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["89077"],{682378:function(e,n,c){c.r(n),c.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>h,assets:()=>l,toc:()=>t,frontMatter:()=>s});var r=JSON.parse('{"id":"docs/\u9879\u76EE\u90E8\u7F72/\u5BB9\u5668\u90E8\u7F72","title":"\u5BB9\u5668\u90E8\u7F72","description":"\u4F7F\u7528Docker\u5316\u65B9\u5F0F\u90E8\u7F72Golang\u5E94\u7528\uFF0C\u6DF1\u5165\u63A2\u8BA8\u4E86\u4EA4\u53C9\u7F16\u8BD1\u6280\u672F\uFF0C\u5982\u4F55\u5728alpine\u955C\u50CF\u4E0A\u6784\u5EFA\u5E76\u5206\u53D1Docker\u955C\u50CF\u3002\u5728\u4F01\u4E1A\u7EA7\u73AF\u5883\u4E0B\uFF0C\u63A8\u8350\u7ED3\u5408Kubernetes\u6216Docker Swarm\u8FDB\u884C\u5BB9\u5668\u7F16\u6392\u4EE5\u63D0\u9AD8\u7CFB\u7EDF\u6269\u5C55\u6027\u548C\u53EF\u9760\u6027\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u9879\u76EE\u90E8\u7F72/\u5BB9\u5668\u90E8\u7F72.md","sourceDirName":"docs/\u9879\u76EE\u90E8\u7F72","slug":"/docs/deploy/container","permalink":"/2.7.x/docs/deploy/container","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u9879\u76EE\u90E8\u7F72/\u5BB9\u5668\u90E8\u7F72.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/deploy/container","title":"\u5BB9\u5668\u90E8\u7F72","sidebar_position":2,"hide_title":true,"keywords":["\u5BB9\u5668\u90E8\u7F72","docker","golang","\u4EA4\u53C9\u7F16\u8BD1","\u9759\u6001\u7F16\u8BD1","alpine","Dockerfile","\u955C\u50CF\u5206\u53D1","kubernetes","docker swarm"],"description":"\u4F7F\u7528Docker\u5316\u65B9\u5F0F\u90E8\u7F72Golang\u5E94\u7528\uFF0C\u6DF1\u5165\u63A2\u8BA8\u4E86\u4EA4\u53C9\u7F16\u8BD1\u6280\u672F\uFF0C\u5982\u4F55\u5728alpine\u955C\u50CF\u4E0A\u6784\u5EFA\u5E76\u5206\u53D1Docker\u955C\u50CF\u3002\u5728\u4F01\u4E1A\u7EA7\u73AF\u5883\u4E0B\uFF0C\u63A8\u8350\u7ED3\u5408Kubernetes\u6216Docker Swarm\u8FDB\u884C\u5BB9\u5668\u7F16\u6392\u4EE5\u63D0\u9AD8\u7CFB\u7EDF\u6269\u5C55\u6027\u548C\u53EF\u9760\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u4EE3\u7406\u90E8\u7F72","permalink":"/2.7.x/docs/deploy/proxy"},"next":{"title":"\u5176\u4ED6\u8D44\u6599","permalink":"/2.7.x/docs/other"}}'),d=c("785893"),o=c("250065");let s={slug:"/docs/deploy/container",title:"\u5BB9\u5668\u90E8\u7F72",sidebar_position:2,hide_title:!0,keywords:["\u5BB9\u5668\u90E8\u7F72","docker","golang","\u4EA4\u53C9\u7F16\u8BD1","\u9759\u6001\u7F16\u8BD1","alpine","Dockerfile","\u955C\u50CF\u5206\u53D1","kubernetes","docker swarm"],description:"\u4F7F\u7528Docker\u5316\u65B9\u5F0F\u90E8\u7F72Golang\u5E94\u7528\uFF0C\u6DF1\u5165\u63A2\u8BA8\u4E86\u4EA4\u53C9\u7F16\u8BD1\u6280\u672F\uFF0C\u5982\u4F55\u5728alpine\u955C\u50CF\u4E0A\u6784\u5EFA\u5E76\u5206\u53D1Docker\u955C\u50CF\u3002\u5728\u4F01\u4E1A\u7EA7\u73AF\u5883\u4E0B\uFF0C\u63A8\u8350\u7ED3\u5408Kubernetes\u6216Docker Swarm\u8FDB\u884C\u5BB9\u5668\u7F16\u6392\u4EE5\u63D0\u9AD8\u7CFB\u7EDF\u6269\u5C55\u6027\u548C\u53EF\u9760\u6027\u3002"},i=void 0,l={},t=[{value:"1. \u7F16\u8BD1\u7A0B\u5E8F",id:"1-\u7F16\u8BD1\u7A0B\u5E8F",level:2},{value:"2. \u7F16\u8BD1\u955C\u50CF",id:"2-\u7F16\u8BD1\u955C\u50CF",level:2},{value:"3. \u8FD0\u884C\u955C\u50CF",id:"3-\u8FD0\u884C\u955C\u50CF",level:2},{value:"4. \u955C\u50CF\u5206\u53D1",id:"4-\u955C\u50CF\u5206\u53D1",level:2},{value:"5. \u5BB9\u5668\u7F16\u6392",id:"5-\u5BB9\u5668\u7F16\u6392",level:2}];function a(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["\u5BB9\u5668\u90E8\u7F72\u5373\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"docker"})," \u5316\u90E8\u7F72 ",(0,d.jsx)(n.code,{children:"golang"})," \u5E94\u7528\u7A0B\u5E8F\uFF0C\u8FD9\u662F\u5728\u4E91\u670D\u52A1\u65F6\u4EE3\u6700\u6D41\u884C\u7684\u90E8\u7F72\u65B9\u5F0F\uFF0C\u4E5F\u662F\u6700\u63A8\u8350\u7684\u90E8\u7F72\u65B9\u5F0F\u3002"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5728\u4EE5\u4E0B\u6211\u4EEC\u7684\u793A\u4F8B\u4E2D\uFF0C\u7EDF\u4E00\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"main"})," \u4F5C\u4E3A\u9879\u76EE\u540D\u79F0\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"1-\u7F16\u8BD1\u7A0B\u5E8F",children:"1. \u7F16\u8BD1\u7A0B\u5E8F"}),"\n",(0,d.jsxs)(n.p,{children:["\u8DE8\u5E73\u53F0\u4EA4\u53C9\u7F16\u8BD1\u662F ",(0,d.jsx)(n.code,{children:"golang"})," \u7684\u7279\u70B9\u4E4B\u4E00\uFF0C\u53EF\u4EE5\u975E\u5E38\u65B9\u4FBF\u5730\u7F16\u8BD1\u51FA\u6211\u4EEC\u9700\u8981\u7684\u76EE\u6807\u670D\u52A1\u5668\u5E73\u53F0\u7684\u7248\u672C\uFF0C\u800C\u4E14\u662F\u9759\u6001\u7F16\u8BD1\uFF0C\u975E\u5E38\u5BB9\u6613\u5730\u89E3\u51B3\u4E86\u8FD0\u884C\u4F9D\u8D56\u95EE\u9898\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4F7F\u7528\u4EE5\u4E0B\u6307\u4EE4\u53EF\u4EE5\u9759\u6001\u7F16\u8BD1 ",(0,d.jsx)(n.code,{children:"Linux"})," \u5E73\u53F0 ",(0,d.jsx)(n.code,{children:"amd64"})," \u67B6\u6784\u7684\u53EF\u6267\u884C\u6587\u4EF6\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o main main.go\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u751F\u6210\u7684 ",(0,d.jsx)(n.code,{children:"main"})," \u4FBF\u662F\u6211\u4EEC\u9759\u6001\u7F16\u8BD1\u7684\uFF0C\u53EF\u90E8\u7F72\u4E8E ",(0,d.jsx)(n.code,{children:"Linux amd64"})," \u4E0A\u7684\u53EF\u6267\u884C\u6587\u4EF6\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"2-\u7F16\u8BD1\u955C\u50CF",children:"2. \u7F16\u8BD1\u955C\u50CF"}),"\n",(0,d.jsxs)(n.p,{children:["\u6211\u4EEC\u9700\u8981\u5C06\u8BE5\u53EF\u6267\u884C\u6587\u4EF6 ",(0,d.jsx)(n.code,{children:"main"})," \u7F16\u8BD1\u751F\u6210 ",(0,d.jsx)(n.code,{children:"docker"})," \u955C\u50CF\uFF0C\u4EE5\u4FBF\u4E8E\u5206\u53D1\u53CA\u90E8\u7F72\u3002 ",(0,d.jsx)(n.code,{children:"Golang"})," \u7684\u8FD0\u884C\u73AF\u5883\u63A8\u8350\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"alpine"})," \u57FA\u7840\u7CFB\u7EDF\u955C\u50CF\uFF0C\u7F16\u8BD1\u51FA\u7684\u5BB9\u5668\u955C\u50CF\u7EA6\u4E3A ",(0,d.jsx)(n.code,{children:"20MB"})," \u5DE6\u53F3\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4E00\u4E2A\u53C2\u8003\u7684 ",(0,d.jsx)(n.code,{children:"Dockerfile"})," \u6587\u4EF6\u5982\u4E0B\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-dockerfile",children:'FROM loads/alpine:3.8\n\nLABEL maintainer="john@goframe.org"\n\n###############################################################################\n#                                INSTALLATION\n###############################################################################\n\n# \u8BBE\u7F6E\u56FA\u5B9A\u7684\u9879\u76EE\u8DEF\u5F84\nENV WORKDIR /app/main\n\n# \u6DFB\u52A0\u5E94\u7528\u53EF\u6267\u884C\u6587\u4EF6\uFF0C\u5E76\u8BBE\u7F6E\u6267\u884C\u6743\u9650\nADD ./main   $WORKDIR/main\nRUN chmod +x $WORKDIR/main\n\n# \u6DFB\u52A0\u9759\u6001\u8D44\u6E90\u6587\u4EF6\nADD resource $WORKDIR/resource\n\n###############################################################################\n#                                   START\n###############################################################################\nWORKDIR $WORKDIR\nCMD ./main\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u5176\u4E2D\uFF0C\u6211\u4EEC\u7684\u57FA\u7840\u955C\u50CF\u4F7F\u7528\u4E86 ",(0,d.jsx)(n.code,{children:"loads/alpine:3.8"}),"\uFF0C\u4E2D\u56FD\u56FD\u5185\u7684\u7528\u6237\u63A8\u8350\u4F7F\u7528\u8BE5\u57FA\u7840\u955C\u50CF\uFF0C\u57FA\u7840\u955C\u50CF\u7684 ",(0,d.jsx)(n.code,{children:"Dockerfile"})," \u5730\u5740\uFF1A ",(0,d.jsx)(n.a,{href:"https://github.com/gqcn/dockerfiles",children:"https://github.com/gqcn/dockerfiles"})," \uFF0C\u4ED3\u5E93\u5730\u5740\uFF1A ",(0,d.jsx)(n.a,{href:"https://hub.docker.com/u/loads",children:"https://hub.docker.com/u/loads"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u968F\u540E\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"docker build -t main ."})," \u6307\u4EE4\u7F16\u8BD1\u751F\u6210\u540D\u4E3A ",(0,d.jsx)(n.code,{children:"main"})," \u7684 ",(0,d.jsx)(n.code,{children:"docker"})," \u955C\u50CF\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u6CE8\u610F\u4E8B\u9879"})}),"\n",(0,d.jsxs)(n.p,{children:["\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5728\u67D0\u4E9B\u9879\u76EE\u7684\u67B6\u6784\u8BBE\u8BA1\u4E2D\uFF0C ",(0,d.jsx)(n.strong,{children:"\u9759\u6001\u6587\u4EF6"})," \u548C ",(0,d.jsx)(n.strong,{children:"\u914D\u7F6E\u6587\u4EF6"})," \u53EF\u80FD\u4E0D\u4F1A\u968F\u7740\u955C\u50CF\u8FDB\u884C\u7F16\u8BD1\u53D1\u5E03\uFF0C\u800C\u662F\u5206\u5F00\u8FDB\u884C\u7BA1\u7406\u548C\u53D1\u5E03\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4F8B\u5982\uFF0C\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"MVVM"})," \u6A21\u5F0F\u7684\u9879\u76EE\u4E2D(\u4F8B\u5982\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"vue"})," \u6846\u67B6)\uFF0C\u5F80\u5F80\u662F\u524D\u540E\u7AEF\u975E\u5E38\u72EC\u7ACB\u7684\uFF0C\u56E0\u6B64\u5728\u955C\u50CF\u4E2D\u5F80\u5F80\u5E76\u4E0D\u4F1A\u5305\u542B ",(0,d.jsx)(n.code,{children:"public"})," \u76EE\u5F55\u3002\u800C\u4F7F\u7528\u4E86 ",(0,d.jsx)(n.code,{children:"\u914D\u7F6E\u7BA1\u7406\u4E2D\u5FC3"}),"(\u4F8B\u5982\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"consul"}),"/ ",(0,d.jsx)(n.code,{children:"etcd"}),"/ ",(0,d.jsx)(n.code,{children:"zookeeper"}),")\u7684\u9879\u76EE\u4E2D\uFF0C\u4E5F\u5F80\u5F80\u5E76\u4E0D\u9700\u8981 ",(0,d.jsx)(n.code,{children:"config"})," \u76EE\u5F55\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u56E0\u6B64\u5BF9\u4E8E\u4EE5\u4E0A\u793A\u4F8B\u7684 ",(0,d.jsx)(n.code,{children:"Dockerfile"})," \u7684\u4F7F\u7528\uFF0C\u4EC5\u4F5C\u53C2\u8003\uFF0C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8BF7\u8FDB\u884C\u5FC5\u8981\u7684\u8C03\u6574\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"3-\u8FD0\u884C\u955C\u50CF",children:"3. \u8FD0\u884C\u955C\u50CF"}),"\n",(0,d.jsx)(n.p,{children:"\u4F7F\u7528\u4EE5\u4E0B\u6307\u4EE4\u53EF\u76F4\u63A5\u8FD0\u884C\u521A\u624D\u7F16\u8BD1\u6210\u7684\u955C\u50CF\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"docker run main\n"})}),"\n",(0,d.jsx)(n.h2,{id:"4-\u955C\u50CF\u5206\u53D1",children:"4. \u955C\u50CF\u5206\u53D1"}),"\n",(0,d.jsxs)(n.p,{children:["\u5BB9\u5668\u7684\u5206\u53D1\u53EF\u4EE5\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"docker"})," \u5B98\u65B9\u7684\u5E73\u53F0\uFF1A ",(0,d.jsx)(n.a,{href:"https://hub.docker.com/",children:"https://hub.docker.com/"})," \uFF0C\u56FD\u5185\u4E5F\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u963F\u91CC\u4E91\uFF1A ",(0,d.jsx)(n.a,{href:"https://www.aliyun.com/product/acr",children:"https://www.aliyun.com/product/acr"})," \u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"5-\u5BB9\u5668\u7F16\u6392",children:"5. \u5BB9\u5668\u7F16\u6392"}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u4F01\u4E1A\u7EA7\u751F\u4EA7\u73AF\u5883\u4E2D\uFF0C ",(0,d.jsx)(n.code,{children:"docker"})," \u5BB9\u5668\u5F80\u5F80\u9700\u8981\u7ED3\u5408 ",(0,d.jsx)(n.code,{children:"kubernetes"})," \u6216\u8005 ",(0,d.jsx)(n.code,{children:"docker swarm"})," \u5BB9\u5668\u7F16\u6392\u5DE5\u5177\u4E00\u8D77\u4F7F\u7528\u3002 \u5BB9\u5668\u7F16\u6392\u6D89\u53CA\u5230\u7684\u5185\u5BB9\u6BD4\u8F83\u591A\uFF0C\u611F\u5174\u8DA3\u7684\u540C\u5B66\u53EF\u4EE5\u53C2\u8003\u4EE5\u4E0B\u8D44\u6599\uFF1A"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://kubernetes.io/",children:"https://kubernetes.io/"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://docs.docker.com/swarm/",children:"https://docs.docker.com/swarm/"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,c){c.d(n,{Z:function(){return i},a:function(){return s}});var r=c(667294);let d={},o=r.createContext(d);function s(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
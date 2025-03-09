"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["15299"],{729355:function(e,n,i){i.r(n),i.d(n,{metadata:()=>l,contentTitle:()=>d,default:()=>a,assets:()=>h,toc:()=>t,frontMatter:()=>r});var l=JSON.parse('{"id":"examples/practices/injection/injection","title":"\u4F9D\u8D56\u6CE8\u5165","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u548Cdo\u5305\u5B9E\u73B0\u7684\u4F9D\u8D56\u6CE8\u5165\u793A\u4F8B","source":"@site/docs/examples/practices/injection/injection.md","sourceDirName":"examples/practices/injection","slug":"/examples/practices/injection","permalink":"/examples/practices/injection","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/examples/practices/injection/injection.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1740107000000,"frontMatter":{"title":"\u4F9D\u8D56\u6CE8\u5165","slug":"/examples/practices/injection","keywords":["\u4F9D\u8D56\u6CE8\u5165","\u6D4B\u8BD5","goframe","di"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u548Cdo\u5305\u5B9E\u73B0\u7684\u4F9D\u8D56\u6CE8\u5165\u793A\u4F8B","hide_title":true},"sidebar":"examplesSidebar","previous":{"title":"\u5DE5\u7A0B\u5B9E\u8DF5","permalink":"/examples/practices"}}'),s=i("785893"),c=i("250065");let r={title:"\u4F9D\u8D56\u6CE8\u5165",slug:"/examples/practices/injection",keywords:["\u4F9D\u8D56\u6CE8\u5165","\u6D4B\u8BD5","goframe","di"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u548Cdo\u5305\u5B9E\u73B0\u7684\u4F9D\u8D56\u6CE8\u5165\u793A\u4F8B",hide_title:!0},d="\u4F9D\u8D56\u6CE8\u5165\u793A\u4F8B",h={},t=[{value:"\u7B80\u4ECB",id:"\u7B80\u4ECB",level:2},{value:"\u73AF\u5883\u8981\u6C42",id:"\u73AF\u5883\u8981\u6C42",level:2},{value:"\u76EE\u5F55\u7ED3\u6784",id:"\u76EE\u5F55\u7ED3\u6784",level:2},{value:"\u529F\u80FD\u7279\u6027",id:"\u529F\u80FD\u7279\u6027",level:2},{value:"\u5B89\u88C5\u8BBE\u7F6E",id:"\u5B89\u88C5\u8BBE\u7F6E",level:2},{value:"\u4F7F\u7528\u65B9\u6CD5",id:"\u4F7F\u7528\u65B9\u6CD5",level:2},{value:"\u5B9E\u73B0\u7EC6\u8282",id:"\u5B9E\u73B0\u7EC6\u8282",level:2},{value:"\u4F9D\u8D56\u6CE8\u5165\u8BBE\u7F6E",id:"\u4F9D\u8D56\u6CE8\u5165\u8BBE\u7F6E",level:3},{value:"\u670D\u52A1\u5C42",id:"\u670D\u52A1\u5C42",level:3},{value:"\u63A7\u5236\u5668\u5C42",id:"\u63A7\u5236\u5668\u5C42",level:3},{value:"\u53EF\u6D4B\u8BD5\u6027",id:"\u53EF\u6D4B\u8BD5\u6027",level:3},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2}];function o(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u4F9D\u8D56\u6CE8\u5165\u793A\u4F8B",children:"\u4F9D\u8D56\u6CE8\u5165\u793A\u4F8B"})}),"\n",(0,s.jsxs)(n.p,{children:["Github Source: ",(0,s.jsx)(n.a,{href:"https://github.com/gogf/examples/tree/main/practices/injection",children:"https://github.com/gogf/examples/tree/main/practices/injection"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u7B80\u4ECB",children:"\u7B80\u4ECB"}),"\n",(0,s.jsxs)(n.p,{children:["\u672C\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u5728\u4F7F\u7528",(0,s.jsx)(n.code,{children:"GoFrame"}),"\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\u5B9E\u73B0\u4F9D\u8D56\u6CE8\u5165\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4E3B\u8981\u6F14\u793A\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4F7F\u7528\u5927\u4ED3\u6A21\u5F0F\u7BA1\u7406\u4EE3\u7801\u4ED3\u5E93"}),"\n",(0,s.jsx)(n.li,{children:"\u57FA\u7840\u4F9D\u8D56\u6CE8\u5165\u8BBE\u7F6E"}),"\n",(0,s.jsxs)(n.li,{children:["\u4F7F\u7528",(0,s.jsx)(n.code,{children:"DI"}),"\u7684\u670D\u52A1\u5C42\u5B9E\u73B0"]}),"\n",(0,s.jsxs)(n.li,{children:["\u96C6\u6210",(0,s.jsx)(n.code,{children:"gRPC"}),"\u7684\u63A7\u5236\u5668\u5C42"]}),"\n",(0,s.jsx)(n.li,{children:"\u4F7F\u7528\u6A21\u62DF\u4F9D\u8D56\u7684\u5355\u5143\u6D4B\u8BD5"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5B9E\u73B0\u91CD\u70B9\u5728\u4E8E\u4F7F\u6838\u5FC3\u4E1A\u52A1\u903B\u8F91\u6613\u4E8E\u6D4B\u8BD5\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4F7F\u7528\u4F9D\u8D56\u6CE8\u5165\u5206\u79BB\u5173\u6CE8\u70B9"}),"\n",(0,s.jsx)(n.li,{children:"\u4E3A\u670D\u52A1\u4F9D\u8D56\u63D0\u4F9B\u6E05\u6670\u7684\u63A5\u53E3"}),"\n",(0,s.jsx)(n.li,{children:"\u6BCF\u4E00\u5C42\u90FD\u53EF\u4EE5\u72EC\u7ACB\u6267\u884C\u5355\u5143\u6D4B\u8BD5\uFF0C\u4FDD\u969C\u4EE3\u7801\u8D28\u91CF"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u73AF\u5883\u8981\u6C42",children:"\u73AF\u5883\u8981\u6C42"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go"})," ",(0,s.jsx)(n.code,{children:"1.22"})," \u6216\u66F4\u9AD8\u7248\u672C"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://goframe.org",children:"GoFrame"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.mongodb.com",children:"MongoDB"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://redis.io",children:"Redis"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/samber/do",children:"github.com/samber/do"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u76EE\u5F55\u7ED3\u6784",children:"\u76EE\u5F55\u7ED3\u6784"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"injection/\n\u251C\u2500\u2500 app/\n\u2502   \u251C\u2500\u2500 gateway/         # API\u7F51\u5173\u670D\u52A1,\u8C03\u7528user grpc\u670D\u52A1\u5B9E\u73B0\u5916\u90E8\u63A5\u53E3\n\u2502   \u2502   \u251C\u2500\u2500 api/         # API\u5B9A\u4E49\n\u2502   \u2502   \u251C\u2500\u2500 internal/    # \u5185\u90E8\u5B9E\u73B0\n\u2502   \u2502   \u2502   \u251C\u2500\u2500 cmd/         # \u547D\u4EE4\u884C\u5DE5\u5177\n\u2502   \u2502   \u2502   \u251C\u2500\u2500 controller/  # \u63A7\u5236\u5668\n\u2502   \u2502   \u2502   \u251C\u2500\u2500 model/       # \u6570\u636E\u6A21\u578B\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 service/     # \u4E1A\u52A1\u903B\u8F91\n\u2502   \u2502   \u2514\u2500\u2500 manifest/   # \u914D\u7F6E\u6587\u4EF6\n\u2502   \u2514\u2500\u2500 user/           # \u7528\u6237\u670D\u52A1\n\u2502       \u251C\u2500\u2500 api/        # API\u5B9A\u4E49\n\u2502       \u2502   \u251C\u2500\u2500 entity/ # \u5B9E\u4F53\u5B9A\u4E49\n\u2502       \u2502   \u2514\u2500\u2500 user/   # \u7528\u6237API proto\n\u2502       \u251C\u2500\u2500 internal/   # \u5185\u90E8\u5B9E\u73B0\n\u2502       \u2502   \u251C\u2500\u2500 cmd/         # \u547D\u4EE4\u884C\u5DE5\u5177\n\u2502       \u2502   \u251C\u2500\u2500 controller/  # \u4F7F\u7528DI\u7684\u63A7\u5236\u5668\n\u2502       \u2502   \u251C\u2500\u2500 dao/         # \u6570\u636E\u8BBF\u95EE\u5BF9\u8C61\n\u2502       \u2502   \u251C\u2500\u2500 model/       # \u6570\u636E\u6A21\u578B\n\u2502       \u2502   \u2514\u2500\u2500 service/     # \u4F7F\u7528DI\u7684\u4E1A\u52A1\u903B\u8F91\n\u2502       \u2514\u2500\u2500 manifest/   # \u914D\u7F6E\u6587\u4EF6\n\u251C\u2500\u2500 hack/               # \u5F00\u53D1\u5DE5\u5177\n\u2514\u2500\u2500 utility/            # \u901A\u7528\u5DE5\u5177\n    \u251C\u2500\u2500 injection/      # DI\u5DE5\u5177\n    \u2514\u2500\u2500 mongohelper/    # MongoDB\u8F85\u52A9\u5DE5\u5177\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u529F\u80FD\u7279\u6027",children:"\u529F\u80FD\u7279\u6027"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4F9D\u8D56\u6CE8\u5165\u4F7F\u7528"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"MongoDB"}),"\u548C",(0,s.jsx)(n.code,{children:"Redis"}),"\u96C6\u6210"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gRPC"}),"\u670D\u52A1\u5B9E\u73B0"]}),"\n",(0,s.jsx)(n.li,{children:"\u5B8C\u6574\u7684\u5355\u5143\u6D4B\u8BD5"}),"\n",(0,s.jsx)(n.li,{children:"\u6E05\u7406\u8D44\u6E90\u7684\u5173\u95ED\u5904\u7406"}),"\n",(0,s.jsx)(n.li,{children:"\u547D\u540D\u4F9D\u8D56\u652F\u6301"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5B89\u88C5\u8BBE\u7F6E",children:"\u5B89\u88C5\u8BBE\u7F6E"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u514B\u9686\u4ED3\u5E93\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/gogf/examples.git\ncd examples/practices/injection\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5B89\u88C5\u4F9D\u8D56\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go mod tidy\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4F7F\u7528",(0,s.jsx)(n.code,{children:"Docker"}),"\u542F\u52A8\u6240\u9700\u670D\u52A1\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u542F\u52A8MongoDB\ndocker run -d --name mongo -p 27017:27017 mongo:latest\n\n# \u542F\u52A8Redis\ndocker run -d --name redis -p 6379:6379 redis:latest\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F7F\u7528\u65B9\u6CD5",children:"\u4F7F\u7528\u65B9\u6CD5"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u8FD0\u884C",(0,s.jsx)(n.code,{children:"gRPC Server"}),"\u670D\u52A1\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd examples/practices/injection/app/user\ngo run main.go server\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u8FD0\u884C",(0,s.jsx)(n.code,{children:"HTTP Server"}),"\u670D\u52A1\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd examples/practices/injection/app/gateway\ngo run main.go server\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\uFF08\u53EF\u9009\uFF09\u8FD0\u884C\u5F02\u6B65\u5B88\u62A4\u8FDB\u7A0B\uFF0C\u4EC5\u6F14\u793A\u591A\u547D\u4EE4\u529F\u80FD\uFF0C\u65E0\u5B9E\u9645\u903B\u8F91\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd examples/practices/injection/app/gateway\ngo run main.go worker\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\uFF08\u53EF\u9009\uFF09\u8FD0\u884C\u6D4B\u8BD5\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go test ./...\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5B9E\u73B0\u7EC6\u8282",children:"\u5B9E\u73B0\u7EC6\u8282"}),"\n",(0,s.jsx)(n.h3,{id:"\u4F9D\u8D56\u6CE8\u5165\u8BBE\u7F6E",children:"\u4F9D\u8D56\u6CE8\u5165\u8BBE\u7F6E"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4F7F\u7528",(0,s.jsx)(n.code,{children:"github.com/samber/do"}),"\u5305\u8FDB\u884C\u4F9D\u8D56\u7BA1\u7406"]}),"\n",(0,s.jsx)(n.li,{children:"\u652F\u6301\u547D\u540D\u548C\u672A\u547D\u540D\u4F9D\u8D56\u7BA1\u7406"}),"\n",(0,s.jsx)(n.li,{children:"\u63D0\u4F9B\u5E38\u7528\u64CD\u4F5C\u7684\u8F85\u52A9\u51FD\u6570"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u670D\u52A1\u5C42",children:"\u670D\u52A1\u5C42"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6E05\u6670\u7684\u5173\u6CE8\u70B9\u5206\u79BB"}),"\n",(0,s.jsx)(n.li,{children:"\u57FA\u4E8E\u63A5\u53E3\u7684\u8BBE\u8BA1"}),"\n",(0,s.jsx)(n.li,{children:"\u6613\u4E8E\u4F7F\u7528\u6A21\u62DF\u5B9E\u73B0\u8FDB\u884C\u6D4B\u8BD5"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u63A7\u5236\u5668\u5C42",children:"\u63A7\u5236\u5668\u5C42"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u652F\u6301",(0,s.jsx)(n.code,{children:"DI"}),"\u7684",(0,s.jsx)(n.code,{children:"gRPC"}),"\u96C6\u6210"]}),"\n",(0,s.jsx)(n.li,{children:"\u6E05\u6670\u7684\u9519\u8BEF\u5904\u7406"}),"\n",(0,s.jsx)(n.li,{children:"\u5408\u7406\u7684\u8D44\u6E90\u7BA1\u7406"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u53EF\u6D4B\u8BD5\u6027",children:"\u53EF\u6D4B\u8BD5\u6027"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6570\u636E\u5C42(",(0,s.jsx)(n.code,{children:"dao"}),")\u3001\u4E1A\u52A1\u5C42(",(0,s.jsx)(n.code,{children:"service"}),")\u3001\u63A5\u53E3\u5C42(",(0,s.jsx)(n.code,{children:"controller"}),")\u5B8C\u6574\u7684\u5355\u5143\u6D4B\u8BD5"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4F9D\u8D56\u6A21\u62DF\uFF0C\u5355\u5143\u6D4B\u8BD5\u4F7F\u7528\u7684\u6570\u636E\u5E93\u914D\u7F6E\u901A\u8FC7",(0,s.jsx)(n.code,{children:"manifest/config"}),"\u7BA1\u7406"]}),"\n",(0,s.jsx)(n.li,{children:"\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u7BA1\u7406\u5FAE\u670D\u52A1\u94FE\u63A5\u7684\u670D\u52A1\u5730\u5740\u6216\u8005\u57DF\u540D\uFF0C\u4EE5\u4FBF\u4E8E\u63A7\u5236\u4F9D\u8D56\u7684\u670D\u52A1\u6A21\u62DF"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4F9D\u8D56\u6CE8\u5165\u7684\u6CE8\u518C\u65F6\uFF0C\u9700\u8981\u5728",(0,s.jsx)(n.code,{children:"Shutdown"}),"\u65B9\u6CD5\u4E2D\u6B63\u786E\u6E05\u7406\u8D44\u6E90"]}),"\n",(0,s.jsx)(n.li,{children:"\u4F7F\u7528\u4F9D\u8D56\u6CE8\u5165\u65F6\uFF0C\u5982\u679C\u9700\u8981\u540C\u7C7B\u578B\u7684\u591A\u4E2A\u5B9E\u4F8B\u65F6\u4F7F\u7528\u547D\u540D\u4F9D\u8D56"}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return r}});var l=i(667294);let s={},c=l.createContext(s);function r(e){let n=l.useContext(c);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["84746"],{66115:function(e,n,d){d.r(n),d.d(n,{metadata:()=>c,contentTitle:()=>l,default:()=>g,assets:()=>s,toc:()=>t,frontMatter:()=>r});var c=JSON.parse('{"id":"docs/\u5E38\u89C1\u95EE\u9898-FAQ","title":"\u5E38\u89C1\u95EE\u9898(FAQ)","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u548CGolang\u8FDB\u884C\u5F00\u53D1\u65F6\u7684\u5E38\u89C1\u95EE\u9898\u89E3\u7B54\uFF0C\u5305\u62EC\u5982\u4F55\u5904\u7406\u7A0B\u5E8F\u5F02\u5E38\u3001\u65B0goroutine\u7684\u521B\u5EFA\u65B9\u6848\u3001\u5C4F\u853Djson\u8F93\u51FA\u5B57\u6BB5\u3001\u89E3\u51B3\u517C\u5BB9\u6027\u95EE\u9898\u3001\u914D\u7F6E\u73AF\u5883\u53CAglog\u9519\u8BEF\u4FEE\u590D\uFF0C\u901A\u8FC7\u8FD9\u4E9B\u4FE1\u606F\u5E2E\u52A9\u5F00\u53D1\u8005\u4F18\u5316\u8C03\u8BD5\u5E94\u7528\u7A0B\u5E8F\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u5E38\u89C1\u95EE\u9898-FAQ.md","sourceDirName":"docs","slug":"/docs/faq","permalink":"/en/2.7.x/docs/faq","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u5E38\u89C1\u95EE\u9898-FAQ.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":10,"frontMatter":{"slug":"/docs/faq","title":"\u5E38\u89C1\u95EE\u9898(FAQ)","sidebar_position":10,"hide_title":true,"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u548CGolang\u8FDB\u884C\u5F00\u53D1\u65F6\u7684\u5E38\u89C1\u95EE\u9898\u89E3\u7B54\uFF0C\u5305\u62EC\u5982\u4F55\u5904\u7406\u7A0B\u5E8F\u5F02\u5E38\u3001\u65B0goroutine\u7684\u521B\u5EFA\u65B9\u6848\u3001\u5C4F\u853Djson\u8F93\u51FA\u5B57\u6BB5\u3001\u89E3\u51B3\u517C\u5BB9\u6027\u95EE\u9898\u3001\u914D\u7F6E\u73AF\u5883\u53CAglog\u9519\u8BEF\u4FEE\u590D\uFF0C\u901A\u8FC7\u8FD9\u4E9B\u4FE1\u606F\u5E2E\u52A9\u5F00\u53D1\u8005\u4F18\u5316\u8C03\u8BD5\u5E94\u7528\u7A0B\u5E8F\u3002","keywords":["GoFrame","GoFrame\u6846\u67B6","Golang","\u7A0B\u5E8F\u5F02\u5E38\u5904\u7406","goroutine","json\u8F93\u51FA","\u517C\u5BB9\u6027\u95EE\u9898","\u73AF\u5883\u914D\u7F6E","glog\u9519\u8BEF","\u591A\u73AF\u5883\u914D\u7F6E"]},"sidebar":"mainSidebar","previous":{"title":"\u76D1\u63A7\u544A\u8B66-\u7EC4\u4EF6\u6307\u6807","permalink":"/en/2.7.x/docs/obs/metrics-components"},"next":{"title":"\u9879\u76EE\u90E8\u7F72","permalink":"/en/2.7.x/docs/deploy"}}'),o=d("785893"),i=d("250065");let r={slug:"/docs/faq",title:"\u5E38\u89C1\u95EE\u9898(FAQ)",sidebar_position:10,hide_title:!0,description:"\u4F7F\u7528GoFrame\u6846\u67B6\u548CGolang\u8FDB\u884C\u5F00\u53D1\u65F6\u7684\u5E38\u89C1\u95EE\u9898\u89E3\u7B54\uFF0C\u5305\u62EC\u5982\u4F55\u5904\u7406\u7A0B\u5E8F\u5F02\u5E38\u3001\u65B0goroutine\u7684\u521B\u5EFA\u65B9\u6848\u3001\u5C4F\u853Djson\u8F93\u51FA\u5B57\u6BB5\u3001\u89E3\u51B3\u517C\u5BB9\u6027\u95EE\u9898\u3001\u914D\u7F6E\u73AF\u5883\u53CAglog\u9519\u8BEF\u4FEE\u590D\uFF0C\u901A\u8FC7\u8FD9\u4E9B\u4FE1\u606F\u5E2E\u52A9\u5F00\u53D1\u8005\u4F18\u5316\u8C03\u8BD5\u5E94\u7528\u7A0B\u5E8F\u3002",keywords:["GoFrame","GoFrame\u6846\u67B6","Golang","\u7A0B\u5E8F\u5F02\u5E38\u5904\u7406","goroutine","json\u8F93\u51FA","\u517C\u5BB9\u6027\u95EE\u9898","\u73AF\u5883\u914D\u7F6E","glog\u9519\u8BEF","\u591A\u73AF\u5883\u914D\u7F6E"]},l=void 0,s={},t=[{value:"\u4E00\u3001Golang\u57FA\u7840",id:"\u4E00golang\u57FA\u7840",level:2},{value:"1\u3001\u7A0B\u5E8F\u4EA7\u751F\u5F02\u5E38\uFF0C\u4F46\u662F\u7A0B\u5E8F\u76F4\u63A5\u5D29\u6E83\u672A\u88AB\u6846\u67B6\u81EA\u52A8\u6355\u83B7",id:"1\u7A0B\u5E8F\u4EA7\u751F\u5F02\u5E38\u4F46\u662F\u7A0B\u5E8F\u76F4\u63A5\u5D29\u6E83\u672A\u88AB\u6846\u67B6\u81EA\u52A8\u6355\u83B7",level:3},{value:"2\u3001 <code>json</code> \u8F93\u51FA\u65F6\u5C4F\u853D\u6389\u4E00\u4E9B\u5B57\u6BB5",id:"2-json-\u8F93\u51FA\u65F6\u5C4F\u853D\u6389\u4E00\u4E9B\u5B57\u6BB5",level:3},{value:"\u4E8C\u3001\u517C\u5BB9\u6027\u76F8\u5173",id:"\u4E8C\u517C\u5BB9\u6027\u76F8\u5173",level:2},{value:"1\u3001 <code>client_tracing.go:73:3: undefined: attribute.Any</code>",id:"1-client_tracinggo733-undefined-attributeany",level:3},{value:"2\u3001\u4F7F\u7528 <code>gf</code> \u4F9D\u8D56 <code>v1.16.2</code> \u65F6 <code>go mod tidy</code> \u5931\u8D25",id:"2\u4F7F\u7528-gf-\u4F9D\u8D56-v1162-\u65F6-go-mod-tidy-\u5931\u8D25",level:3},{value:"\u4E09\u3001\u6570\u636E\u5E93\u76F8\u5173",id:"\u4E09\u6570\u636E\u5E93\u76F8\u5173",level:2},{value:"\u56DB\u3001\u4F7F\u7528\u76F8\u5173",id:"\u56DB\u4F7F\u7528\u76F8\u5173",level:2},{value:"1\u3001\u4E0D\u540C\u73AF\u5883\u5982\u4F55\uFF0C\u52A0\u8F7D\u4E0D\u540C\u7684\u914D\u7F6E\u6587\u4EF6?",id:"1\u4E0D\u540C\u73AF\u5883\u5982\u4F55\u52A0\u8F7D\u4E0D\u540C\u7684\u914D\u7F6E\u6587\u4EF6",level:3},{value:"2\u3001 <code>glog with &quot;ERROR: logging before flag.Parse&quot;</code>",id:"2-glog-with-error-logging-before-flagparse",level:3},{value:"3\u3001 <code>gcron</code> \u4E0E <code>http</code> \u5982\u4F55\u540C\u65F6\u4F7F\u7528?",id:"3-gcron-\u4E0E-http-\u5982\u4F55\u540C\u65F6\u4F7F\u7528",level:3},{value:"4\u3001 <code>GoFrame</code> \u7684 <code>struct tag</code>(\u6807\u7B7E) \u6709\u54EA\u4E9B\uFF1F",id:"4-goframe-\u7684-struct-tag\u6807\u7B7E-\u6709\u54EA\u4E9B",level:3},{value:"5\u3001 <code>HTTP Server</code> \u51FA\u73B0 <code>context cancel</code> \u62A5\u9519",id:"5-http-server-\u51FA\u73B0-context-cancel-\u62A5\u9519",level:3},{value:"\u4E94\u3001\u73AF\u5883\u76F8\u5173",id:"\u4E94\u73AF\u5883\u76F8\u5173",level:2},{value:"1\u3001 <code>Linux</code> \u4E0B\u6267\u884C <code>go build main.go</code> \u63D0\u793A\u8FDE\u63A5\u8D85\u65F6 <code>connection timed out</code>",id:"1-linux-\u4E0B\u6267\u884C-go-build-maingo-\u63D0\u793A\u8FDE\u63A5\u8D85\u65F6-connection-timed-out",level:3},{value:"2\u3001 <code>Linux</code> \u4E0B\u5B89\u88C5 <code>gf</code> \u63D0\u793A\u547D\u4EE4\u4E0D\u5B58\u5728 <code>command not found</code>",id:"2-linux-\u4E0B\u5B89\u88C5-gf-\u63D0\u793A\u547D\u4EE4\u4E0D\u5B58\u5728-command-not-found",level:3},{value:"3\u3001 <code>Win10</code> \u63D0\u793A <code>gf</code> \u547D\u4EE4\u4E0D\u5B58\u5728",id:"3-win10-\u63D0\u793A-gf-\u547D\u4EE4\u4E0D\u5B58\u5728",level:3}];function h(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"\u5BC4\u8BED\uFF1A"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u8BF7\u4F7F\u7528\u9875\u9762\u53F3\u4E0A\u89D2\u7684\u641C\u7D22\u529F\u80FD\uFF0C\u5168\u6587\u5FEB\u901F\u68C0\u7D22\u5E38\u89C1\u95EE\u9898\u3002"}),"\n",(0,o.jsxs)(n.li,{children:["\u6B22\u8FCE\u5927\u5BB6\u79EF\u6781\u53C2\u4E0E\u7F16\u8F91\uFF0C\u628A\u81EA\u5DF1\u9047\u5230\u7684\u5751\u600E\u4E48\u586B\u7684\u8BB0\u5F55\u8D77\u6765\u3002 ",(0,o.jsx)(n.strong,{children:"\u4F17\u4EBA\u62FE\u67F4\u706B\u7130\u9AD8"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u4E00golang\u57FA\u7840",children:"\u4E00\u3001Golang\u57FA\u7840"}),"\n",(0,o.jsx)(n.h3,{id:"1\u7A0B\u5E8F\u4EA7\u751F\u5F02\u5E38\u4F46\u662F\u7A0B\u5E8F\u76F4\u63A5\u5D29\u6E83\u672A\u88AB\u6846\u67B6\u81EA\u52A8\u6355\u83B7",children:"1\u3001\u7A0B\u5E8F\u4EA7\u751F\u5F02\u5E38\uFF0C\u4F46\u662F\u7A0B\u5E8F\u76F4\u63A5\u5D29\u6E83\u672A\u88AB\u6846\u67B6\u81EA\u52A8\u6355\u83B7"}),"\n",(0,o.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,o.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u662F\u4E25\u8C28\u548C\u5B89\u5168\u7684\uFF0C\u5982\u679C\u7A0B\u5E8F\u4EA7\u751F\u4E86\u5F02\u5E38\uFF0C\u4F1A\u9ED8\u8BA4\u88AB\u6846\u67B6\u6355\u83B7\u3002\u5982\u679C\u672A\u88AB\u81EA\u52A8\u6355\u83B7\uFF0C\u90A3\u4E48\u53EF\u80FD\u662F\u7531\u4E8E\u7A0B\u5E8F\u903B\u8F91\u81EA\u884C\u5F00\u4E86\u65B0\u7684 ",(0,o.jsx)(n.code,{children:"goroutine"}),"\uFF0C\u5728\u65B0\u7684 ",(0,o.jsx)(n.code,{children:"goroutine"})," \u4E2D\u4EA7\u751F\u4E86\u5F02\u5E38\u3002\u56E0\u6B64\u8FD9\u91CC\u6709\u4E24\u4E2A\u65B9\u6848\u53EF\u4F9B\u5927\u5BB6\u9009\u62E9\uFF1A"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u4E0D\u5EFA\u8BAE\u5728\u8BF7\u6C42\u4E2D\u518D\u5F00 ",(0,o.jsx)(n.code,{children:"goroutine"})," \u6765\u5904\u7406\u8BF7\u6C42\uFF0C\u8FD9\u6837\u6216\u4F7F\u5F97 ",(0,o.jsx)(n.code,{children:"goroutine"})," \u5FEB\u901F\u81A8\u80C0\uFF0C\u5F53 ",(0,o.jsx)(n.code,{children:"goroutine"})," \u591A\u4E86\u4E4B\u540E\u4E5F\u4F1A\u5728 ",(0,o.jsx)(n.code,{children:"Go"})," \u5F15\u64CE\u5C42\u9762\u5F71\u54CD\u7A0B\u5E8F\u7684\u6574\u4F53\u8C03\u5EA6\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["\u5982\u679C\u5B9E\u5728\u6709\u5FC5\u8981\u65B0\u5F00 ",(0,o.jsx)(n.code,{children:"goroutine"})," \u7684\u573A\u666F\u4E0B\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 ",(0,o.jsx)(n.code,{children:"grpool.AddWithRecover"})," \u6765\u521B\u5EFA\u65B0\u7684 ",(0,o.jsx)(n.code,{children:"goroutine"}),"\uFF0C\u89C1\u540D\u77E5\u610F\uFF0C\u5B83\u4F1A\u81EA\u52A8\u6355\u83B7\u5F02\u5E38\u3002\u66F4\u8BE6\u7EC6\u7684\u4ECB\u7ECD\u8BF7\u53C2\u8003\uFF1A ",(0,o.jsx)(n.a,{href:"/en/2.7.x/docs/components/os-grpool",children:"\u534F\u7A0B\u7BA1\u7406-grpool"})]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"2-json-\u8F93\u51FA\u65F6\u5C4F\u853D\u6389\u4E00\u4E9B\u5B57\u6BB5",children:["2\u3001 ",(0,o.jsx)(n.code,{children:"json"})," \u8F93\u51FA\u65F6\u5C4F\u853D\u6389\u4E00\u4E9B\u5B57\u6BB5"]}),"\n",(0,o.jsxs)(n.p,{children:["\u53EF\u4EE5\u901A\u8FC7\u7ED3\u6784\u4F53\u5D4C\u5957\u7684\u65B9\u5F0F\u5B9E\u73B0\uFF0C\u901A\u8FC7\u4F7F\u7528 ",(0,o.jsx)(n.code,{children:"*struct{}"})," \u7C7B\u578B\u4E0D\u5360\u7528\u7A7A\u95F4\u4EE5\u53CA ",(0,o.jsx)(n.code,{children:"omitempty"})," \u5B57\u6BB5\u4E3A\u7A7A\u4E0D\u8F93\u51FA\u5B57\u6BB5\u7684\u7279\u6027"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'type User struct {\n    Pwd string `json:"pwd"`\n    Age int    `json:"age"`\n}\n\ntype UserOut struct {\n    User\n    Pwd *struct{} `json:"pwd,omitempty"`// \u8FD9\u91CC\u7684\u5B57\u6BB5json\u540D\u9700\u8981\u548C\u5D4C\u5957\u7684\u5B57\u6BB5json\u540D\u4E00\u81F4\uFF0C\u5426\u5219\u65E0\u6548\n}\n\nfunc TestJson(t *testing.T) {\n    u := User{Pwd: "123", Age: 1}\n    bb := UserOut{User: u}\n    b, _ := json.MarshalIndent(bb, "", "    ")\n    t.Log(string(b))\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u4E8C\u517C\u5BB9\u6027\u76F8\u5173",children:"\u4E8C\u3001\u517C\u5BB9\u6027\u76F8\u5173"}),"\n",(0,o.jsxs)(n.h3,{id:"1-client_tracinggo733-undefined-attributeany",children:["1\u3001 ",(0,o.jsx)(n.code,{children:"client_tracing.go:73:3: undefined: attribute.Any"})]}),"\n",(0,o.jsx)(n.p,{children:"\u4EE5\u4E0B\u9519\u8BEF\uFF1A"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"D:\\Program Files\\Go\\bin\\pkg\\mod\\github.com\\gogf\\gf@v1.16.6\\net\\ghttp\\internal\\client\\client_tracing.go:73:3: undefined: attribute.Any\nD:\\Program Files\\Go\\bin\\pkg\\mod\\github.com\\gogf\\gf@v1.16.6\\net\\ghttp\\internal\\client\\client_tracing_tracer.go:150:3: undefined: attribute.Any\nD:\\Program Files\\Go\\bin\\pkg\\mod\\github.com\\gogf\\gf@v1.16.6\\net\\ghttp\\internal\\client\\client_tracing_tracer.go:151:3: undefined: attribute.Any\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u5BFC\u81F4\u8BE5\u9519\u8BEF\u7684\u539F\u56E0\u5728\u4E8E\u76EE\u524D\u60A8\u6B63\u5728\u4F7F\u7528\u7684 ",(0,o.jsx)(n.code,{children:"goframe"})," \u4F9D\u8D56\u7684 ",(0,o.jsx)(n.code,{children:"otel"})," \u5305\u7248\u672C\u8FC7\u4F4E\uFF08 ",(0,o.jsx)(n.code,{children:"otel"})," \u5305\u662F ",(0,o.jsx)(n.code,{children:"OpenTelemetry"})," \u4F7F\u7528 ",(0,o.jsx)(n.code,{children:"Golang"})," \u5B9E\u73B0\u7684\u7B2C\u4E09\u65B9\u5305\uFF0C\u6BD4\u8F83\u5E38\u7528\uFF0C\u5F88\u591A\u7B2C\u4E09\u65B9\u57FA\u7840\u7EC4\u4EF6\u90FD\u4F1A\u4F9D\u8D56\uFF09\uFF0C\u800C\u9879\u76EE\u4E2D\u5176\u4ED6\u7684\u7B2C\u4E09\u65B9\u4F9D\u8D56\u7684 ",(0,o.jsx)(n.code,{children:"otel"})," \u5305\u8FC7\u9AD8\uFF0C\u6309\u7167 ",(0,o.jsx)(n.code,{children:"Golang module"})," \u7684\u7BA1\u7406\u7B56\u7565\uFF0C\u9879\u76EE\u5C06\u4F1A\u4F7F\u7528\u6700\u65B0\u7684 ",(0,o.jsx)(n.code,{children:"otel"})," \u5305\uFF0C\u4E8E\u662F\u5BFC\u81F4\u4E86\u7248\u672C\u4E0D\u517C\u5BB9\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u6839\u56E0\u8FD8\u662F\u5728\u4E8E ",(0,o.jsx)(n.code,{children:"otel"})," \u7684\u5305\u5728\u8FED\u4EE3\u4E2D\u51FA\u73B0\u4E86\u4E0D\u517C\u5BB9\u5347\u7EA7\u5BFC\u81F4\uFF0C\u4E0D\u8FC7\u76EE\u524D ",(0,o.jsx)(n.code,{children:"otel"})," \u5305\u5DF2\u7ECF\u8F83\u7A33\u5B9A\uFF0C\u51FA\u73B0\u4E0D\u517C\u5BB9\u7684\u53EF\u80FD\u6027\u964D\u4F4E\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u89E3\u51B3\u7684\u529E\u6CD5\u662F\u53EA\u6709\u5347\u7EA7 ",(0,o.jsx)(n.code,{children:"goframe"})," \u7684\u7248\u672C\uFF0C ",(0,o.jsx)(n.code,{children:"goframe"})," \u6700\u65B0\u7248\u672C\u5DF2\u7ECF\u66F4\u65B0\u4F7F\u7528\u4E86\u7A33\u5B9A\u7684 ",(0,o.jsx)(n.code,{children:"otel"})," \u5305\u3002\u5982\u679C\u60A8\u4F7F\u7528\u7684\u5DF2\u7ECF\u662F ",(0,o.jsx)(n.code,{children:"v1"})," \u7684\u6700\u65B0\u7248\u672C\uFF08 ",(0,o.jsx)(n.code,{children:"v1.16"}),"\uFF09\uFF0C\u90A3\u4E48\u8BF7\u5347\u7EA7\u4E3A ",(0,o.jsx)(n.code,{children:"v2"})," \u7248\u672C\u89E3\u51B3\u3002"]}),"\n",(0,o.jsxs)(n.h3,{id:"2\u4F7F\u7528-gf-\u4F9D\u8D56-v1162-\u65F6-go-mod-tidy-\u5931\u8D25",children:["2\u3001\u4F7F\u7528 ",(0,o.jsx)(n.code,{children:"gf"})," \u4F9D\u8D56 ",(0,o.jsx)(n.code,{children:"v1.16.2"})," \u65F6 ",(0,o.jsx)(n.code,{children:"go mod tidy"})," \u5931\u8D25"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"found (v0.36.0), but does not contain package go.opentelemetry.io/otel/metric/registry"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:d(706433).Z+"",width:"1504",height:"306"})}),"\n",(0,o.jsxs)(n.p,{children:["\u89E3\u51B3\u529E\u6CD5\uFF0C\u5347\u7EA7 ",(0,o.jsx)(n.code,{children:"gf"})," \u4F9D\u8D56\u5230 ",(0,o.jsx)(n.code,{children:"v1.16.9"})," \u518D ",(0,o.jsx)(n.code,{children:"go mod tidy"})]}),"\n",(0,o.jsx)(n.h2,{id:"\u4E09\u6570\u636E\u5E93\u76F8\u5173",children:"\u4E09\u3001\u6570\u636E\u5E93\u76F8\u5173"}),"\n",(0,o.jsxs)(n.p,{children:["\u8BF7\u53C2\u8003\u7AE0\u8282\uFF1A ",(0,o.jsx)(n.a,{href:"/en/2.7.x/docs/core/gdb-faq",children:"ORM\u5E38\u89C1\u95EE\u9898"})]}),"\n",(0,o.jsx)(n.h2,{id:"\u56DB\u4F7F\u7528\u76F8\u5173",children:"\u56DB\u3001\u4F7F\u7528\u76F8\u5173"}),"\n",(0,o.jsx)(n.h3,{id:"1\u4E0D\u540C\u73AF\u5883\u5982\u4F55\u52A0\u8F7D\u4E0D\u540C\u7684\u914D\u7F6E\u6587\u4EF6",children:"1\u3001\u4E0D\u540C\u73AF\u5883\u5982\u4F55\uFF0C\u52A0\u8F7D\u4E0D\u540C\u7684\u914D\u7F6E\u6587\u4EF6?"}),"\n",(0,o.jsx)(n.p,{children:"\u4E0D\u540C\u73AF\u5883\u6307\u7684\u662F\uFF1A\u5F00\u53D1\u73AF\u5883/\u6D4B\u8BD5\u73AF\u5883/\u9884\u53D1\u73AF\u5883/\u751F\u4EA7\u73AF\u5883\u7B49\u3002"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u9996\u5148\uFF0C\u5728\u4E00\u4E9B\u4E92\u8054\u7F51\u9879\u76EE\u4E2D\uFF0C\u7279\u522B\u662F\u5206\u5E03\u5F0F\u6216\u8005\u5FAE\u670D\u52A1\u5316\u7684\u67B6\u6784\u4E0B\uFF0C\u4E00\u822C\u4F1A\u4F7F\u7528\u914D\u7F6E\u7BA1\u7406\u4E2D\u5FC3\uFF0C\u4E0D\u540C\u7684\u73AF\u5883\u4F1A\u5BF9\u5E94\u4E0D\u540C\u7684\u914D\u7F6E\u7BA1\u7406\u4E2D\u5FC3\uFF0C\u6240\u4EE5\u8FD9\u6837\u7684\u573A\u666F\u4E0D\u4F1A\u5B58\u5728\u8FD9\u6837\u7684\u95EE\u9898\u3002"}),"\n",(0,o.jsxs)(n.li,{children:["\u5176\u6B21\uFF0C\u5982\u679C\u662F\u4F20\u7EDF\u7684\u9879\u76EE\u7BA1\u7406\u65B9\u5F0F\u4E0B\uFF0C\u53EF\u80FD\u4F1A\u5C06\u914D\u7F6E\u6587\u4EF6\u653E\u5230\u4EE3\u7801\u4ED3\u5E93\u4E2D\u5171\u540C\u7BA1\u7406\uFF0C\u8FD9\u6837\u7684\u65B9\u5F0F\u662F\u4E0D\u63A8\u8350\u7684\u3002\u5982\u679C\u60A8\u4ECD\u7136\u60F3\u8981\u8FD9\u4E48\u505A\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF\u6216\u8005\u547D\u4EE4\u884C\u542F\u52A8\u53C2\u6570\uFF0C\u8BA9\u7A0B\u5E8F\u81EA\u52A8\u9009\u62E9\u914D\u7F6E\u6587\u4EF6\u6216\u8005\u6307\u5B9A\u914D\u7F6E\u76EE\u5F55\uFF0C\u53C2\u8003 ",(0,o.jsx)(n.a,{href:"/en/2.7.x/docs/core/gcfg",children:"\u914D\u7F6E\u7BA1\u7406"})," \u7AE0\u8282\u3002\u4F8B\u5982\uFF1A ",(0,o.jsx)(n.code,{children:"./app --gf.gcfg.file config-prod.toml "})," \u5219\u901A\u8FC7\u547D\u4EE4\u884C\u542F\u52A8\u53C2\u6570\u7684\u65B9\u5F0F\u5C06\u9ED8\u8BA4\u8BFB\u53D6\u7684\u914D\u7F6E\u6587\u4EF6\u4FEE\u6539\u4E3A\u4E86 ",(0,o.jsx)(n.code,{children:"config-prod.toml"})," \u6587\u4EF6\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u6211\u4EEC\u4E0D\u5EFA\u8BAE\u60A8\u5728\u7A0B\u5E8F\u4E2D\u901A\u8FC7\u4EE3\u7801\u903B\u8F91\u6765\u533A\u5206\u548C\u8BFB\u53D6\u4E0D\u540C\u73AF\u5883\u7684\u914D\u7F6E\u6587\u4EF6\u3002"}),"\n",(0,o.jsxs)(n.h3,{id:"2-glog-with-error-logging-before-flagparse",children:["2\u3001 ",(0,o.jsx)(n.code,{children:'glog with "ERROR: logging before flag.Parse"'})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Golang"})," \u5B98\u65B9\u6709\u4E2A\u7B80\u5355\u7684\u65E5\u5FD7\u5E93\u5305\u540D\u4E5F\u53EB\u505A ",(0,o.jsx)(n.code,{children:"glog"}),"\uFF0C\u68C0\u67E5\u4F60\u6587\u4EF6\u9876\u90E8 ",(0,o.jsx)(n.code,{children:"import"})," \u7684\u5305\u540D\uFF0C\u5C06 ",(0,o.jsx)(n.code,{children:"github.com/golang/glog"})," \u4FEE\u6539\u4E3A\u6846\u67B6\u7684\u65E5\u5FD7\u7EC4\u4EF6\u5373\u53EF\uFF0C\u65E5\u5FD7\u7EC4\u4EF6\u4F7F\u7528\u8BF7\u53C2\u8003\uFF1A ",(0,o.jsx)(n.a,{href:"/en/2.7.x/docs/core/glog",children:"\u65E5\u5FD7\u7EC4\u4EF6"})]}),"\n",(0,o.jsxs)(n.h3,{id:"3-gcron-\u4E0E-http-\u5982\u4F55\u540C\u65F6\u4F7F\u7528",children:["3\u3001 ",(0,o.jsx)(n.code,{children:"gcron"})," \u4E0E ",(0,o.jsx)(n.code,{children:"http"})," \u5982\u4F55\u540C\u65F6\u4F7F\u7528?"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'func main() {\n    //\u5B9A\u65F6\u4EFB\u52A11\n    gcron.AddSingleton("*/5 * * * * *", func() {\n        task.Test()\n        glog.Debug("gcron1")\n    })\n\n    //\u5B9A\u65F6\u4EFB\u52A12\n    gcron.AddSingleton("*/10 * * * * *", func() {\n        glog.Debug("gcron2")\n    })\n\n    //\u63A5\u6536http\u8BF7\u6C42\n    g.Server().Run()\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u6CE8\u610F, ",(0,o.jsx)(n.code,{children:"gcron"})," \u4E00\u5B9A\u8981\u5728 ",(0,o.jsx)(n.code,{children:"g.Server().Run"})," \u7684\u524D\u9762\u3002"]}),"\n",(0,o.jsxs)(n.h3,{id:"4-goframe-\u7684-struct-tag\u6807\u7B7E-\u6709\u54EA\u4E9B",children:["4\u3001 ",(0,o.jsx)(n.code,{children:"GoFrame"})," \u7684 ",(0,o.jsx)(n.code,{children:"struct tag"}),"(\u6807\u7B7E) \u6709\u54EA\u4E9B\uFF1F"]}),"\n",(0,o.jsxs)(n.p,{children:["\u53C2\u6570\u8BF7\u6C42\u3001\u6570\u636E\u6821\u9A8C\u3001 ",(0,o.jsx)(n.code,{children:"OpenAPIv3"}),"\u3001\u547D\u4EE4\u7BA1\u7406\u3001\u6570\u636E\u5E93ORM\u3002"]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Tag(\u7B80\u5199)"}),(0,o.jsx)(n.th,{children:"\u5168\u79F0"}),(0,o.jsx)(n.th,{children:"\u63CF\u8FF0"}),(0,o.jsx)(n.th,{children:"\u76F8\u5173\u6587\u6863"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"v"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"valid"})}),(0,o.jsx)(n.td,{children:"\u6570\u636E\u6821\u9A8C\u6807\u7B7E\u3002"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/en/2.7.x/docs/core/gvalid-parameter-type-struct-example",children:"Struct\u6821\u9A8C-\u57FA\u672C\u4F7F\u7528"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"p"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"param"})}),(0,o.jsx)(n.td,{children:"\u81EA\u5B9A\u4E49\u8BF7\u6C42\u53C2\u6570\u5339\u914D\u3002"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/en/2.7.x/docs/web/request-struct-converting",children:"\u8BF7\u6C42\u8F93\u5165-\u5BF9\u8C61\u5904\u7406"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"d"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"default"})}),(0,o.jsx)(n.td,{children:"\u8BF7\u6C42\u53C2\u6570\u9ED8\u8BA4\u503C\u7ED1\u5B9A\u3002"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/en/2.7.x/docs/web/request-default-value",children:"\u8BF7\u6C42\u8F93\u5165-\u9ED8\u8BA4\u503C\u7ED1\u5B9A"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"orm"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"orm"})}),(0,o.jsx)(n.td,{children:"ORM\u6807\u7B7E\uFF0C\u7528\u4E8E\u6307\u5B9A\u8868\u540D\u3001\u5173\u8054\u5173\u7CFB\u3002"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.a,{href:"/en/2.7.x/docs/cli/gen-dao",children:"\u6570\u636E\u89C4\u8303-gen dao"}),(0,o.jsx)("br",{}),(0,o.jsx)(n.a,{href:"/en/2.7.x/docs/core/gdb-chaining-relation-with",children:"\u6A21\u578B\u5173\u8054-\u9759\u6001\u5173\u8054-With\u7279\u6027"})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"dc"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"description"})}),(0,o.jsx)(n.td,{children:"\u901A\u7528\u7ED3\u6784\u4F53\u5C5E\u6027\u63CF\u8FF0\uFF0CORM\u548C\u63A5\u53E3\u90FD\u7528\u5230\u3002\u5C5E\u4E8E\u6846\u67B6\u9ED8\u8BA4\u7684\u5C5E\u6027\u63CF\u8FF0\u6807\u7B7E\u3002"}),(0,o.jsx)(n.td,{})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"\u5176\u4ED6\uFF1A"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u547D\u4EE4\u884C\u7ED3\u6784\u5316\u7BA1\u7406\u53C2\u6570\uFF1A ",(0,o.jsx)(n.a,{href:"/en/2.7.x/docs/core/gcmd-struct",children:"\u547D\u4EE4\u7BA1\u7406-\u7ED3\u6784\u5316\u53C2\u6570"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u6846\u67B6\u5E38\u7528\u6807\u7B7E\u6807\u7B7E\u96C6\u4E2D\u7BA1\u7406\u5230\u4E86 ",(0,o.jsx)(n.code,{children:"gtag"})," \u7EC4\u4EF6\u4E0B\uFF1A ",(0,o.jsx)(n.a,{href:"https://github.com/gogf/gf/blob/master/util/gtag/gtag.go",children:"https://github.com/gogf/gf/blob/master/util/gtag/gtag.go"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u5728\u63A5\u53E3\u6587\u6863\u7AE0\u8282\uFF0C\u7531\u4E8E\u91C7\u7528\u4E86\u6807\u7B7E\u5F62\u5F0F\u751F\u6210 ",(0,o.jsx)(n.code,{children:"OpenAPI"})," \u6587\u6863\uFF0C\u56E0\u6B64\u6807\u7B7E\u6BD4\u8F83\u591A\uFF0C\u5177\u4F53\u8BF7\u53C2\u8003\u7AE0\u8282\uFF1A ",(0,o.jsx)(n.a,{href:"/en/2.7.x/docs/web/api-document",children:"\u63A5\u53E3\u6587\u6863"})]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"5-http-server-\u51FA\u73B0-context-cancel-\u62A5\u9519",children:["5\u3001 ",(0,o.jsx)(n.code,{children:"HTTP Server"})," \u51FA\u73B0 ",(0,o.jsx)(n.code,{children:"context cancel"})," \u62A5\u9519"]}),"\n",(0,o.jsxs)(n.p,{children:["\u4ECE\u6846\u67B6 ",(0,o.jsx)(n.code,{children:"v2.5"})," \u7248\u672C\u5F00\u59CB\uFF0C\u6846\u67B6\u7684 ",(0,o.jsx)(n.code,{children:"HTTP Server"})," \u7684 ",(0,o.jsx)(n.code,{children:"Request"})," \u5BF9\u8C61\u5C06\u4F1A\u76F4\u63A5\u7EE7\u627F\u4E0E\u6807\u51C6\u5E93\u7684 ",(0,o.jsx)(n.code,{children:"http.Request"})," \u5BF9\u8C61\uFF0C\n\u5176\u4E2D\u5C31\u5305\u62EC\u5176\u4E2D\u7684 ",(0,o.jsx)(n.code,{children:"context"})," \u4E0A\u4E0B\u6587\u5BF9\u8C61\u3002\u5F53\u5BA2\u6237\u7AEF\u4F8B\u5982\u6D4F\u89C8\u5668\u3001 ",(0,o.jsx)(n.code,{children:"HTTP Client"})," \u53D6\u6D88\u8BF7\u6C42\u65F6\uFF0C\n\u670D\u52A1\u7AEF\u4F1A\u63A5\u6536\u5230 ",(0,o.jsx)(n.code,{children:"context cancel"})," \u64CD\u4F5C( ",(0,o.jsx)(n.code,{children:"context.Done"}),")\uFF0C\u4F46\u662F\u670D\u52A1\u7AEF\u5E76\u4E0D\u4F1A\u76F4\u63A5\u62A5\u51FA ",(0,o.jsx)(n.code,{children:"context cancel"})," \u7684\u9519\u8BEF\u3002\n\u8FD9\u79CD\u9519\u8BEF\u5F80\u5F80\u5728\u4E1A\u52A1\u903B\u8F91\u8C03\u7528\u4E86\u5E95\u5C42\u7684\u6570\u636E\u5E93\u3001\u6D88\u606F\u7EC4\u4EF6\u7B49\u7EC4\u4EF6\u65F6\uFF0C\u7531\u8FD9\u4E9B\u7EC4\u4EF6\u8BC6\u522B\u5230 ",(0,o.jsx)(n.code,{children:"context cancel"})," \u64CD\u4F5C\uFF0C\n\u5C06\u4F1A\u505C\u6B62\u6267\u884C\u5E76\u5F80\u4E0A\u629B\u51FA ",(0,o.jsx)(n.code,{children:"context cancel"})," \u9519\u8BEF\u63D0\u9192\u4E0A\u5C42\u5DF2\u7ECF\u7EC8\u6B62\u6267\u884C\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u8FD9\u662F\u7B26\u5408\u6807\u51C6\u5E93\u8BBE\u8BA1\u7684\u884C\u4E3A\uFF0C\u5BA2\u6237\u7AEF\u7EC8\u6B62\u8BF7\u6C42\u540E\uFF0C\u670D\u52A1\u7AEF\u4E5F\u6CA1\u6709\u7EE7\u7EED\u6267\u884C\u4E0B\u53BB\u7684\u5FC5\u8981\u3002"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://wiki.goframe.org/pages/viewpage.action?pageId=124387603#id-%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E9%A2%91%E7%B9%81%E5%87%BA%E7%8E%B0contextcancel%E9%94%99%E8%AF%AF",children:"\u670D\u52A1\u7AEF\u9891\u7E41\u51FA\u73B0contextcancel\u9519\u8BEF"})}),"\n",(0,o.jsx)(n.h2,{id:"\u4E94\u73AF\u5883\u76F8\u5173",children:"\u4E94\u3001\u73AF\u5883\u76F8\u5173"}),"\n",(0,o.jsxs)(n.h3,{id:"1-linux-\u4E0B\u6267\u884C-go-build-maingo-\u63D0\u793A\u8FDE\u63A5\u8D85\u65F6-connection-timed-out",children:["1\u3001 ",(0,o.jsx)(n.code,{children:"Linux"})," \u4E0B\u6267\u884C ",(0,o.jsx)(n.code,{children:"go build main.go"})," \u63D0\u793A\u8FDE\u63A5\u8D85\u65F6 ",(0,o.jsx)(n.code,{children:"connection timed out"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'go: github.com/gogf/gf@v1.14.6-0.20201214132204-c685876e6f67: Get "https://proxy.golang.org/github.com/gogf/gf/@v/v1.14.6-0.20201214132204-c685876e6f67.mod":\ndial tcp 172.217.160.113:443:\nconnect: connection timed out\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u89E3\u51B3\u529E\u6CD5\uFF1A"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"export GO111MODULE=on\nexport GOPROXY=https://goproxy.cn\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u5177\u4F53\u8BF7\u770B\uFF1A"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/en/2.7.x/docs/install-go/go-module",children:"Go Module"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://goproxy.cn",children:"https://goproxy.cn"})}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"2-linux-\u4E0B\u5B89\u88C5-gf-\u63D0\u793A\u547D\u4EE4\u4E0D\u5B58\u5728-command-not-found",children:["2\u3001 ",(0,o.jsx)(n.code,{children:"Linux"})," \u4E0B\u5B89\u88C5 ",(0,o.jsx)(n.code,{children:"gf"})," \u63D0\u793A\u547D\u4EE4\u4E0D\u5B58\u5728 ",(0,o.jsx)(n.code,{children:"command not found"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"./gf install\n\u5B89\u88C5\u540E\n\u6267\u884Cgf -v\n\u63D0\u793Agf: command not found\n\u4E14/usr/bin\u76EE\u5F55\u4E0B\u5E76\u6CA1\u6709gf\u6587\u4EF6\n\n\u89E3\u51B3\u65B9\u6CD5:\n\u62F7\u8D1Dsh\u6587\u4EF6\u5230 /usr/bin\u76EE\u5F55\ncp gf /usr/bin\n\n\u7136\u540E\u6267\u884C\ngf -v\n\n\u5C31\u4F1A\u770B\u5230\nGoFrame CLI Tool v1.15.4, https://goframe.org\nInstall Path: /bin/gf\nBuild Detail:\nGo Version: go1.16.2\nGF Version: v1.15.3\nGit Commit: 22011e76dc3e14006936164cc89e2d4c9190a36d\nBuild Time: 2021-03-30 15:43:22\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"3-win10-\u63D0\u793A-gf-\u547D\u4EE4\u4E0D\u5B58\u5728",children:["3\u3001 ",(0,o.jsx)(n.code,{children:"Win10"})," \u63D0\u793A ",(0,o.jsx)(n.code,{children:"gf"})," \u547D\u4EE4\u4E0D\u5B58\u5728"]}),"\n",(0,o.jsxs)(n.p,{children:["\u89E3\u51B3\u529E\u6CD5\uFF1A\u5B89\u88C5 ",(0,o.jsx)(n.code,{children:"gf.exe"})," \u53C2\u8003\uFF1A ",(0,o.jsx)(n.a,{href:"/en/2.7.x/docs/cli",children:"\u5F00\u53D1\u5DE5\u5177"})]})]})}function g(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},706433:function(e,n,d){d.d(n,{Z:function(){return c}});let c=d.p+"assets/images/08e4b24634f2819f4e6439c9cf9e08a8-390e10dd8d09f8166a4c64f959e190b2.png"},250065:function(e,n,d){d.d(n,{Z:function(){return l},a:function(){return r}});var c=d(667294);let o={},i=c.createContext(o);function r(e){let n=c.useContext(i);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);
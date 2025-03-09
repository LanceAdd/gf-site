"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["67539"],{427296:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>h,assets:()=>t,toc:()=>l,frontMatter:()=>c});var i=JSON.parse('{"id":"docs/\u6846\u67B6\u8BBE\u8BA1/\u5168\u9519\u8BEF\u5806\u6808\u8BBE\u8BA1","title":"\u5168\u9519\u8BEF\u5806\u6808\u8BBE\u8BA1","description":"GoFrame\u6846\u67B6\u5728\u9519\u8BEF\u5904\u7406\u65B9\u9762\u7684\u7B56\u7565\u548C\u8BBE\u8BA1\uFF0C\u901A\u8FC7\u7EDF\u4E00\u7684\u9519\u8BEF\u5904\u7406\u65B9\u6848\u548C\u9519\u8BEF\u7EC4\u4EF6\uFF0C\u89E3\u51B3\u4E86\u9879\u76EE\u4E2D\u5E38\u89C1\u7684\u9519\u8BEF\u5806\u6808\u7F3A\u5931\u548C\u65E5\u5FD7\u5197\u4F59\u7B49\u95EE\u9898\u3002GoFrame\u6846\u67B6\u7684\u5168\u7EC4\u4EF6\u652F\u6301\u9519\u8BEF\u5806\u6808\u529F\u80FD\uFF0C\u964D\u4F4E\u4E86\u9519\u8BEF\u6392\u67E5\u548C\u7EF4\u62A4\u7684\u6210\u672C\uFF0C\u63D0\u9AD8\u4E86\u9879\u76EE\u7684\u7A33\u5B9A\u6027\u548C\u6613\u7528\u6027\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6846\u67B6\u8BBE\u8BA1/\u5168\u9519\u8BEF\u5806\u6808\u8BBE\u8BA1.md","sourceDirName":"docs/\u6846\u67B6\u8BBE\u8BA1","slug":"/docs/design/error-stack","permalink":"/en/2.7.x/docs/design/error-stack","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6846\u67B6\u8BBE\u8BA1/\u5168\u9519\u8BEF\u5806\u6808\u8BBE\u8BA1.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/design/error-stack","title":"\u5168\u9519\u8BEF\u5806\u6808\u8BBE\u8BA1","sidebar_position":5,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u9519\u8BEF\u5904\u7406","\u9519\u8BEF\u5806\u6808","\u7EDF\u4E00\u9519\u8BEF\u5904\u7406","\u65E5\u5FD7\u6253\u6869","\u9519\u8BEF\u7EC4\u4EF6","\u5806\u6808\u4FE1\u606F","\u7B2C\u4E09\u65B9\u7EC4\u4EF6","\u9519\u8BEF\u8FD4\u56DE"],"description":"GoFrame\u6846\u67B6\u5728\u9519\u8BEF\u5904\u7406\u65B9\u9762\u7684\u7B56\u7565\u548C\u8BBE\u8BA1\uFF0C\u901A\u8FC7\u7EDF\u4E00\u7684\u9519\u8BEF\u5904\u7406\u65B9\u6848\u548C\u9519\u8BEF\u7EC4\u4EF6\uFF0C\u89E3\u51B3\u4E86\u9879\u76EE\u4E2D\u5E38\u89C1\u7684\u9519\u8BEF\u5806\u6808\u7F3A\u5931\u548C\u65E5\u5FD7\u5197\u4F59\u7B49\u95EE\u9898\u3002GoFrame\u6846\u67B6\u7684\u5168\u7EC4\u4EF6\u652F\u6301\u9519\u8BEF\u5806\u6808\u529F\u80FD\uFF0C\u964D\u4F4E\u4E86\u9519\u8BEF\u6392\u67E5\u548C\u7EF4\u62A4\u7684\u6210\u672C\uFF0C\u63D0\u9AD8\u4E86\u9879\u76EE\u7684\u7A33\u5B9A\u6027\u548C\u6613\u7528\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5168\u94FE\u8DEF\u8DDF\u8E2A\u8BBE\u8BA1","permalink":"/en/2.7.x/docs/design/tracing"},"next":{"title":"\u63A5\u53E3\u5316\u4E0E\u6CDB\u578B\u8BBE\u8BA1","permalink":"/en/2.7.x/docs/design/interface-generic"}}'),d=r("785893"),s=r("250065");let c={slug:"/docs/design/error-stack",title:"\u5168\u9519\u8BEF\u5806\u6808\u8BBE\u8BA1",sidebar_position:5,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u9519\u8BEF\u5904\u7406","\u9519\u8BEF\u5806\u6808","\u7EDF\u4E00\u9519\u8BEF\u5904\u7406","\u65E5\u5FD7\u6253\u6869","\u9519\u8BEF\u7EC4\u4EF6","\u5806\u6808\u4FE1\u606F","\u7B2C\u4E09\u65B9\u7EC4\u4EF6","\u9519\u8BEF\u8FD4\u56DE"],description:"GoFrame\u6846\u67B6\u5728\u9519\u8BEF\u5904\u7406\u65B9\u9762\u7684\u7B56\u7565\u548C\u8BBE\u8BA1\uFF0C\u901A\u8FC7\u7EDF\u4E00\u7684\u9519\u8BEF\u5904\u7406\u65B9\u6848\u548C\u9519\u8BEF\u7EC4\u4EF6\uFF0C\u89E3\u51B3\u4E86\u9879\u76EE\u4E2D\u5E38\u89C1\u7684\u9519\u8BEF\u5806\u6808\u7F3A\u5931\u548C\u65E5\u5FD7\u5197\u4F59\u7B49\u95EE\u9898\u3002GoFrame\u6846\u67B6\u7684\u5168\u7EC4\u4EF6\u652F\u6301\u9519\u8BEF\u5806\u6808\u529F\u80FD\uFF0C\u964D\u4F4E\u4E86\u9519\u8BEF\u6392\u67E5\u548C\u7EF4\u62A4\u7684\u6210\u672C\uFF0C\u63D0\u9AD8\u4E86\u9879\u76EE\u7684\u7A33\u5B9A\u6027\u548C\u6613\u7528\u6027\u3002"},o=void 0,t={},l=[{value:"\u4E00\u3001\u9879\u76EE\u9519\u8BEF\u5904\u7406\u75DB\u70B9",id:"\u4E00\u9879\u76EE\u9519\u8BEF\u5904\u7406\u75DB\u70B9",level:2},{value:"1\u3001\u7F3A\u5C11\u7EDF\u4E00\u9519\u8BEF\u5904\u7406\u65B9\u6848\uFF0C\u4EE3\u7801\u4E2D\u968F\u5904\u53EF\u89C1\u7684\u65E5\u5FD7\u6253\u6869",id:"1\u7F3A\u5C11\u7EDF\u4E00\u9519\u8BEF\u5904\u7406\u65B9\u6848\u4EE3\u7801\u4E2D\u968F\u5904\u53EF\u89C1\u7684\u65E5\u5FD7\u6253\u6869",level:3},{value:"2\u3001\u8BF7\u6C42\u6267\u884C\u62A5\u9519\u540E\u7F3A\u5C11\u9519\u8BEF\u5806\u6808\uFF0C\u96BE\u4EE5\u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898",id:"2\u8BF7\u6C42\u6267\u884C\u62A5\u9519\u540E\u7F3A\u5C11\u9519\u8BEF\u5806\u6808\u96BE\u4EE5\u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898",level:3},{value:"3\u3001\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u6267\u884C\u8FD4\u56DE\u7684\u9519\u8BEF\uFF0C\u672C\u8EAB\u4E0D\u5E26\u6709\u5806\u6808\u4FE1\u606F",id:"3\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u6267\u884C\u8FD4\u56DE\u7684\u9519\u8BEF\u672C\u8EAB\u4E0D\u5E26\u6709\u5806\u6808\u4FE1\u606F",level:3},{value:"4\u3001\u9519\u8BEF\u7EC4\u4EF6\u591A\u6837\uFF0C\u81EA\u8EAB\u9879\u76EE\u5F80\u5F80\u8FD8\u60F3\u5F53\u7136\u518D\u5C01\u88C5\u4E00\u5C42",id:"4\u9519\u8BEF\u7EC4\u4EF6\u591A\u6837\u81EA\u8EAB\u9879\u76EE\u5F80\u5F80\u8FD8\u60F3\u5F53\u7136\u518D\u5C01\u88C5\u4E00\u5C42",level:3},{value:"\u4E8C\u3001\u6846\u67B6\u5168\u9519\u8BEF\u5806\u6808\u8BBE\u8BA1",id:"\u4E8C\u6846\u67B6\u5168\u9519\u8BEF\u5806\u6808\u8BBE\u8BA1",level:2},{value:"1\u3001\u7EDF\u4E00\u9519\u8BEF\u7EC4\u4EF6",id:"1\u7EDF\u4E00\u9519\u8BEF\u7EC4\u4EF6",level:3},{value:"2\u3001\u7EDF\u4E00\u9519\u8BEF\u5904\u7406\u65B9\u6848",id:"2\u7EDF\u4E00\u9519\u8BEF\u5904\u7406\u65B9\u6848",level:3},{value:"3\u3001\u5168\u7EC4\u4EF6\u652F\u6301\u5806\u6808\u9519\u8BEF",id:"3\u5168\u7EC4\u4EF6\u652F\u6301\u5806\u6808\u9519\u8BEF",level:3},{value:"4\u3001\u5173\u952E\u7EC4\u4EF6\u652F\u6301\u9519\u8BEF\u5806\u6808\u6253\u5370",id:"4\u5173\u952E\u7EC4\u4EF6\u652F\u6301\u9519\u8BEF\u5806\u6808\u6253\u5370",level:3}];function a(e){let n={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"\u4E00\u9879\u76EE\u9519\u8BEF\u5904\u7406\u75DB\u70B9",children:"\u4E00\u3001\u9879\u76EE\u9519\u8BEF\u5904\u7406\u75DB\u70B9"}),"\n",(0,d.jsx)(n.p,{children:"\u6211\u4EEC\u5728\u4E1A\u52A1\u9879\u76EE\u4E2D\uFF0C\u7ECF\u5E38\u4F1A\u9047\u5230\u4EE5\u4E0B\u75DB\u70B9\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"1\u7F3A\u5C11\u7EDF\u4E00\u9519\u8BEF\u5904\u7406\u65B9\u6848\u4EE3\u7801\u4E2D\u968F\u5904\u53EF\u89C1\u7684\u65E5\u5FD7\u6253\u6869",children:"1\u3001\u7F3A\u5C11\u7EDF\u4E00\u9519\u8BEF\u5904\u7406\u65B9\u6848\uFF0C\u4EE3\u7801\u4E2D\u968F\u5904\u53EF\u89C1\u7684\u65E5\u5FD7\u6253\u6869"}),"\n",(0,d.jsx)(n.p,{children:"\u4E3A\u4E86\u65B9\u4FBF\u63A5\u53E3\u51FA\u9519\u65F6\u5B9A\u4F4D\u95EE\u9898\uFF0C\u4EE3\u7801\u4E2D\u968F\u5904\u53EF\u89C1\u7684\u65E5\u5FD7\u6253\u6869\uFF0C\u5E76\u5C06\u5176\u770B\u505A\u662F\u4E00\u4EF6\u7406\u6240\u5F53\u7136\u7684\u4E8B\uFF0C\u7136\u800C\u6BEB\u65E0\u7AE0\u6CD5\u7684\u5E9E\u5927\u65E5\u5FD7\u91CF\u9664\u4E86\u63D0\u9AD8\u7EF4\u62A4\u7684\u5DE5\u4F5C\u91CF\uFF0C\u5374\u901A\u5E38\u96BE\u4EE5\u8FBE\u5230\u5B83\u8BE5\u6709\u7684\u76EE\u7684\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"2\u8BF7\u6C42\u6267\u884C\u62A5\u9519\u540E\u7F3A\u5C11\u9519\u8BEF\u5806\u6808\u96BE\u4EE5\u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898",children:"2\u3001\u8BF7\u6C42\u6267\u884C\u62A5\u9519\u540E\u7F3A\u5C11\u9519\u8BEF\u5806\u6808\uFF0C\u96BE\u4EE5\u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898"}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u4E0B\uFF0C\u5F53\u5E95\u5C42\u51FA\u73B0 ",(0,d.jsx)(n.code,{children:"error"})," \u7EA7\u522B\u7684\u9519\u8BEF\u65F6\uFF0C\u5728\u9876\u5C42\u770B\u5230\u7684\u5C31\u4E00\u4E2A\u9519\u8BEF\u4FE1\u606F\uFF0C\u8BF7\u95EE\u5982\u4F55\u6392\u67E5\uFF1F"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:r(594368).Z+"",width:"3570",height:"758"})}),"\n",(0,d.jsx)(n.p,{children:"\u4E00\u5F20\u771F\u5B9E\u7684\u73B0\u7F51\u6848\u4F8B\u6392\u67E5\u622A\u56FE"}),"\n",(0,d.jsx)(n.h3,{id:"3\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u6267\u884C\u8FD4\u56DE\u7684\u9519\u8BEF\u672C\u8EAB\u4E0D\u5E26\u6709\u5806\u6808\u4FE1\u606F",children:"3\u3001\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u6267\u884C\u8FD4\u56DE\u7684\u9519\u8BEF\uFF0C\u672C\u8EAB\u4E0D\u5E26\u6709\u5806\u6808\u4FE1\u606F"}),"\n",(0,d.jsxs)(n.p,{children:["\u4E0D\u4EC5\u4EC5\u662F\u7B2C\u4E09\u65B9\u7EC4\u4EF6\uFF0C\u8FDE\u6807\u51C6\u5E93\u6240\u6709\u65B9\u6CD5\u8FD4\u56DE\u7684 ",(0,d.jsx)(n.code,{children:"error"})," \u90FD\u4E0D\u5E26\u6709\u5806\u6808\uFF0C\u8FD9\u5BF9\u4E1A\u52A1\u5C42\u7EDF\u4E00\u9519\u8BEF\u5904\u7406\u9020\u6210\u4E86\u5F88\u5927\u7684\u6311\u6218\u3002\u51E0\u4E4E\u6240\u6709\u4E1A\u52A1\u5C42\u4EE3\u7801\u8C03\u7528\u8FD4\u56DE\u7684\u9519\u8BEF\uFF0C\u90FD\u9700\u8981\u81EA\u884C\u4F7F\u7528\u7C7B\u4F3C\u4E8E ",(0,d.jsx)(n.code,{children:"Wrap"})," \u65B9\u6CD5\u518D\u5305\u88F9\u4E00\u5C42\uFF0C\u4EE5\u4FBF\u4E8E\u4E1A\u52A1\u5C42\u81EA\u5DF1\u53EF\u4EE5\u5B9E\u73B0\u9519\u8BEF\u5806\u6808\u8FD4\u56DE\u3002\u8FD9\u6837\u7684\u7EF4\u62A4\u6210\u672C\u6BD4\u8F83\u5927\uFF0C\u51E0\u4E4E\u53EA\u80FD\u9760 ",(0,d.jsx)(n.code,{children:"CodeReview"})," \u6765\u4EBA\u8089\u4FDD\u969C\uFF0C\u4E00\u4E0D\u5C0F\u5FC3\u53EF\u80FD\u4F1A\u6F0F\u6389 ",(0,d.jsx)(n.code,{children:"Wrap"})," \u5904\u7406\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"4\u9519\u8BEF\u7EC4\u4EF6\u591A\u6837\u81EA\u8EAB\u9879\u76EE\u5F80\u5F80\u8FD8\u60F3\u5F53\u7136\u518D\u5C01\u88C5\u4E00\u5C42",children:"4\u3001\u9519\u8BEF\u7EC4\u4EF6\u591A\u6837\uFF0C\u81EA\u8EAB\u9879\u76EE\u5F80\u5F80\u8FD8\u60F3\u5F53\u7136\u518D\u5C01\u88C5\u4E00\u5C42"}),"\n",(0,d.jsx)(n.p,{children:"\u9519\u8BEF\u5904\u7406\u7684\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u4E5F\u6BD4\u8F83\u591A\uFF0C\u5982\u4F55\u9009\u62E9\uFF1F\u751A\u81F3\u4E1A\u52A1\u9879\u76EE\u5F80\u5F80\u4E5F\u60F3\u81EA\u5DF1\u518D\u5C01\u88C5\u4E00\u5C42\uFF0C\u8FDB\u4E00\u6B65\u63D0\u9AD8\u9519\u8BEF\u5904\u7406\u7EC4\u4EF6\u7684\u7EF4\u62A4\u6210\u672C\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u4E8C\u6846\u67B6\u5168\u9519\u8BEF\u5806\u6808\u8BBE\u8BA1",children:"\u4E8C\u3001\u6846\u67B6\u5168\u9519\u8BEF\u5806\u6808\u8BBE\u8BA1"}),"\n",(0,d.jsx)(n.h3,{id:"1\u7EDF\u4E00\u9519\u8BEF\u7EC4\u4EF6",children:"1\u3001\u7EDF\u4E00\u9519\u8BEF\u7EC4\u4EF6"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u63D0\u4F9B\u4E86\u4E1A\u5185\u529F\u80FD\u6700\u5F3A\u5927\u7684\u9519\u8BEF\u5904\u7406\u7EC4\u4EF6\uFF0C\u5E76\u4E14\u8BE5\u7EC4\u4EF6\u4E5F\u662F\u6846\u67B6\u5185\u90E8\u5E7F\u6CDB\u4F7F\u7528\u7684\u9519\u8BEF\u7EC4\u4EF6\uFF0C\u964D\u4F4E\u4E1A\u52A1\u56E2\u961F\u7684\u9009\u62E9\u6210\u672C\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"2\u7EDF\u4E00\u9519\u8BEF\u5904\u7406\u65B9\u6848",children:"2\u3001\u7EDF\u4E00\u9519\u8BEF\u5904\u7406\u65B9\u6848"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u5DE5\u7A0B\u8BBE\u8BA1\u89C4\u8303\uFF0C\u5176\u4E2D\u5305\u542B\u4E86\u5FC5\u8981\u7684\u7EDF\u4E00\u7684\u9519\u8BEF\u5904\u7406\u65B9\u6848\u3002\u6309\u7167\u7EDF\u4E00\u6846\u67B6\u7684\u5DE5\u7A0B\u8BBE\u8BA1\uFF0C\u4E00\u4E9B\u901A\u7528\u6027\u7684\u75DB\u70B9\u5DF2\u901A\u8FC7\u7EC4\u4EF6\u3001\u5DE5\u5177\u7684\u65B9\u5F0F\u5F97\u4EE5\u89E3\u51B3\uFF0C\u4F7F\u5F97\u4E1A\u52A1\u56E2\u961F\u80FD\u591F\u5C06\u7CBE\u529B\u805A\u7126\u4E8E\u4E1A\u52A1\u672C\u8EAB\uFF0C\u5F00\u53D1\u5DE5\u4F5C\u5C06\u4F1A\u4E8B\u534A\u529F\u500D\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u7EDF\u4E00\u7684\u9519\u8BEF\u5904\u7406\u65B9\u6848\u4E0B\uFF0C\u9879\u76EE\u4E2D\u6240\u6709\u7684\u65B9\u6CD5\u8C03\u7528\u5C06\u4F1A\u4EE5 ",(0,d.jsx)(n.code,{children:"error"})," \u8FD4\u56DE\u503C\u4F5C\u4E3A\u6267\u884C\u6210\u529F\u4E0E\u5426\u7684\u4F9D\u636E\u3002\u5982\u679C ",(0,d.jsx)(n.code,{children:"error"})," \u4E0D\u4E3A ",(0,d.jsx)(n.code,{children:"nil"})," \u65F6\uFF0C\u53CA\u65F6\u8FD4\u56DE\uFF0C\u5E76\u5C06\u5176\u5C42\u5C42\u5F80\u4E0A\u4F20\u9012\uFF0C\u5728\u6700\u9876\u5C42\u7EDF\u4E00\u505A\u9519\u8BEF\u5904\u7406\u3002\u5E76\u4E14\uFF0C\u5728\u6846\u67B6\u7684\u5173\u952E\u7EC4\u4EF6\u5DF2\u7ECF\u63D0\u4F9B\u4E86\u9ED8\u8BA4\u7684\u9519\u8BEF\u5904\u7406\u903B\u8F91\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:r(419258).Z+"",width:"3072",height:"1576"})}),"\n",(0,d.jsx)(n.h3,{id:"3\u5168\u7EC4\u4EF6\u652F\u6301\u5806\u6808\u9519\u8BEF",children:"3\u3001\u5168\u7EC4\u4EF6\u652F\u6301\u5806\u6808\u9519\u8BEF"}),"\n",(0,d.jsxs)(n.p,{children:["\uD83D\uDD25 ",(0,d.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6 ",(0,d.jsx)(n.strong,{children:"\u6240\u6709\u57FA\u7840\u7EC4\u4EF6"})," \u7684 ",(0,d.jsx)(n.code,{children:"error"})," \u8FD4\u56DE\u5BF9\u8C61\u5747\u5E26\u6709\u9519\u8BEF\u5806\u6808\uFF01\uD83D\uDD25"]}),"\n",(0,d.jsxs)(n.p,{children:["\uD83D\uDD25 ",(0,d.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6 ",(0,d.jsx)(n.strong,{children:"\u6240\u6709\u57FA\u7840\u7EC4\u4EF6"})," \u7684 ",(0,d.jsx)(n.code,{children:"error"})," \u8FD4\u56DE\u5BF9\u8C61\u5747\u5E26\u6709\u9519\u8BEF\u5806\u6808\uFF01\uD83D\uDD25"]}),"\n",(0,d.jsxs)(n.p,{children:["\uD83D\uDD25 ",(0,d.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6 ",(0,d.jsx)(n.strong,{children:"\u6240\u6709\u57FA\u7840\u7EC4\u4EF6"})," \u7684 ",(0,d.jsx)(n.code,{children:"error"})," \u8FD4\u56DE\u5BF9\u8C61\u5747\u5E26\u6709\u9519\u8BEF\u5806\u6808\uFF01\uD83D\uDD25"]}),"\n",(0,d.jsx)(n.p,{children:"\uD83D\uDD25\u91CD\u8981\u7684\u4E8B\u60C5\u8BF4\u4E09\u904D\uFF01\uD83D\uDD25"}),"\n",(0,d.jsxs)(n.p,{children:["\u8FD9\u662F\u4E00\u4EF6\u5F88\u96BE\u505A\u5230\u7684\u4E8B\u60C5\uFF0C\u56E0\u4E3A\u6846\u67B6\u63D0\u4F9B\u7684\u7EC4\u4EF6\u51E0\u4E4E\u80FD\u591F\u8986\u76D6\u4E86\u5927\u90E8\u5206\u4E1A\u52A1\u9879\u76EE\u7684\u6240\u6709\u9700\u6C42\uFF0C\u4F46\u662F\u6846\u67B6\u786E\u5B9E\u505A\u5230\u4E86\u3002\u867D\u7136\u6846\u67B6\u5728\u8FD9\u5757\u6295\u5165\u7684\u6210\u672C\u6BD4\u8F83\u5927\uFF08\u5355\u72EC\u4E00\u4E2A\u7248\u672C\u6765\u5B9E\u73B0\u4E86\u8FD9\u4E2A\u7279\u6027\uFF09\uFF0C\u4F46\u5374\u662F\u524D\u671F\u4E00\u6B21\u6027\u6295\u5165\u3001\u957F\u671F\u6536\u76CA\u7684\u4E8B\u60C5\u3002\u8FD9\u4E5F\u5C31\u610F\u5473\u7740\uFF0C\u5982\u679C\u4E1A\u52A1\u9879\u76EE\u5728\u4F7F\u7528\u7EDF\u4E00\u7684 ",(0,d.jsx)(n.code,{children:"GoFrame"})," \u57FA\u7840\u6846\u67B6\u4E0B\uFF0C\u9519\u8BEF\u5904\u7406\u5C06\u4F1A\u66F4\u52A0\u7B80\u4FBF\uFF0C\u9519\u8BEF\u5806\u6808\u4E22\u5931\u7684\u98CE\u9669\u5F97\u5230\u4E86\u6781\u5927\u7684\u964D\u4F4E\uFF0C\u9879\u76EE\u5C06\u4F1A\u66F4\u52A0\u7A33\u5065\u3001\u6613\u4E8E\u5FEB\u901F\u6392\u9519\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"4\u5173\u952E\u7EC4\u4EF6\u652F\u6301\u9519\u8BEF\u5806\u6808\u6253\u5370",children:"4\u3001\u5173\u952E\u7EC4\u4EF6\u652F\u6301\u9519\u8BEF\u5806\u6808\u6253\u5370"}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u6846\u67B6\u7684\u5173\u952E\u7EC4\u4EF6\u4E2D\uFF0C\u63D0\u4F9B\u4E86\u5BF9\u9519\u8BEF\u5806\u6808\u6253\u5370\u7684 ",(0,d.jsx)(n.strong,{children:"\u9ED8\u8BA4\u5904\u7406"}),"\uFF0C\u4EE5\u63D0\u9AD8\u6613\u7528\u6027\uFF0C\u7B80\u5316\u4F7F\u7528\u8005\u8D1F\u62C5\u3002\u8FD9\u4E9B\u5173\u952E\u7684\u7EC4\u4EF6\u662F\u7A0B\u5E8F\u7684\u5165\u53E3\uFF0C\u5982 ",(0,d.jsx)(n.code,{children:"HTTP/GRPC Server"}),"\u3001 ",(0,d.jsx)(n.code,{children:"Command"})," \u547D\u4EE4\u884C\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},419258:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/0237be84e57c222bd476dad67a883253-a941be83645aaf91c743e5c94f5efd35.png"},594368:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/d0a2ecfa83e3b3107e38a519bacf0f17-c777903d0df81e08ec27159774de1654.png"},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return c}});var i=r(667294);let d={},s=i.createContext(d);function c(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
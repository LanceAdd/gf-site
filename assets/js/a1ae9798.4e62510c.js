"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["21702"],{408138:function(e,r,n){n.r(r),n.d(r,{metadata:()=>o,contentTitle:()=>c,default:()=>f,assets:()=>d,toc:()=>a,frontMatter:()=>t});var o=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u9519\u8BEF\u5904\u7406/\u9519\u8BEF\u5904\u7406-\u5E38\u7528\u65B9\u6CD5","title":"\u9519\u8BEF\u5904\u7406-\u5E38\u7528\u65B9\u6CD5","description":"GoFrame\u6846\u67B6\u4E2D\u5173\u4E8E\u9519\u8BEF\u5904\u7406\u7684\u5E38\u7528\u65B9\u6CD5\uFF0C\u5305\u62EC\u9519\u8BEF\u521B\u5EFA\u3001\u9519\u8BEF\u5305\u88C5\u4EE5\u53CA\u9519\u8BEF\u7801\u76F8\u5173\u7684\u51FD\u6570\uFF0C\u63D0\u4F9B\u4E86\u521B\u5EFA\u548C\u5305\u88C5\u81EA\u5B9A\u4E49\u9519\u8BEF\u4FE1\u606F\u7684\u591A\u79CD\u65B9\u5F0F\uFF0C\u4EE5\u4FBF\u5F00\u53D1\u8005\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u65F6\u80FD\u591F\u6709\u6548\u7BA1\u7406\u9519\u8BEF\u548C\u8C03\u8BD5\u4EE3\u7801\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u9519\u8BEF\u5904\u7406/\u9519\u8BEF\u5904\u7406-\u5E38\u7528\u65B9\u6CD5.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u9519\u8BEF\u5904\u7406","slug":"/docs/core/gerror-funcs","permalink":"/2.7.x/docs/core/gerror-funcs","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u9519\u8BEF\u5904\u7406/\u9519\u8BEF\u5904\u7406-\u5E38\u7528\u65B9\u6CD5.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/core/gerror-funcs","title":"\u9519\u8BEF\u5904\u7406-\u5E38\u7528\u65B9\u6CD5","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u9519\u8BEF\u5904\u7406","\u9519\u8BEF\u521B\u5EFA","New","Wrap","NewSkip","\u9519\u8BEF\u7801","gerror","\u5806\u6808\u4FE1\u606F"],"description":"GoFrame\u6846\u67B6\u4E2D\u5173\u4E8E\u9519\u8BEF\u5904\u7406\u7684\u5E38\u7528\u65B9\u6CD5\uFF0C\u5305\u62EC\u9519\u8BEF\u521B\u5EFA\u3001\u9519\u8BEF\u5305\u88C5\u4EE5\u53CA\u9519\u8BEF\u7801\u76F8\u5173\u7684\u51FD\u6570\uFF0C\u63D0\u4F9B\u4E86\u521B\u5EFA\u548C\u5305\u88C5\u81EA\u5B9A\u4E49\u9519\u8BEF\u4FE1\u606F\u7684\u591A\u79CD\u65B9\u5F0F\uFF0C\u4EE5\u4FBF\u5F00\u53D1\u8005\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u65F6\u80FD\u591F\u6709\u6548\u7BA1\u7406\u9519\u8BEF\u548C\u8C03\u8BD5\u4EE3\u7801\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u9519\u8BEF\u5904\u7406","permalink":"/2.7.x/docs/core/gerror"},"next":{"title":"\u9519\u8BEF\u5904\u7406-\u5806\u6808\u7279\u6027","permalink":"/2.7.x/docs/core/gerror-stack"}}'),i=n("785893"),s=n("250065");let t={slug:"/docs/core/gerror-funcs",title:"\u9519\u8BEF\u5904\u7406-\u5E38\u7528\u65B9\u6CD5",sidebar_position:0,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u9519\u8BEF\u5904\u7406","\u9519\u8BEF\u521B\u5EFA","New","Wrap","NewSkip","\u9519\u8BEF\u7801","gerror","\u5806\u6808\u4FE1\u606F"],description:"GoFrame\u6846\u67B6\u4E2D\u5173\u4E8E\u9519\u8BEF\u5904\u7406\u7684\u5E38\u7528\u65B9\u6CD5\uFF0C\u5305\u62EC\u9519\u8BEF\u521B\u5EFA\u3001\u9519\u8BEF\u5305\u88C5\u4EE5\u53CA\u9519\u8BEF\u7801\u76F8\u5173\u7684\u51FD\u6570\uFF0C\u63D0\u4F9B\u4E86\u521B\u5EFA\u548C\u5305\u88C5\u81EA\u5B9A\u4E49\u9519\u8BEF\u4FE1\u606F\u7684\u591A\u79CD\u65B9\u5F0F\uFF0C\u4EE5\u4FBF\u5F00\u53D1\u8005\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u65F6\u80FD\u591F\u6709\u6548\u7BA1\u7406\u9519\u8BEF\u548C\u8C03\u8BD5\u4EE3\u7801\u3002"},c=void 0,d={},a=[{value:"\u9519\u8BEF\u521B\u5EFA",id:"\u9519\u8BEF\u521B\u5EFA",level:2},{value:"<code>New/Newf</code>",id:"newnewf",level:3},{value:"<code>Wrap/Wrapf</code>",id:"wrapwrapf",level:3},{value:"<code>NewSkip/NewSkipf</code>",id:"newskipnewskipf",level:3},{value:"\u9519\u8BEF\u7801\u76F8\u5173\u65B9\u6CD5",id:"\u9519\u8BEF\u7801\u76F8\u5173\u65B9\u6CD5",level:2}];function l(e){let r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["\u672C\u7AE0\u8282\u4EC5\u4ECB\u7ECD\u4E00\u4E9B\u5E38\u7528\u65B9\u6CD5\uFF0C\u5B8C\u6574\u7684\u9519\u8BEF\u65B9\u6CD5\u8BF7\u53C2\u8003\u63A5\u53E3\u6587\u6863\uFF1A ",(0,i.jsx)(r.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/errors/gerror",children:"https://pkg.go.dev/github.com/gogf/gf/v2/errors/gerror"})]}),"\n",(0,i.jsx)(r.h2,{id:"\u9519\u8BEF\u521B\u5EFA",children:"\u9519\u8BEF\u521B\u5EFA"}),"\n",(0,i.jsx)(r.h3,{id:"newnewf",children:(0,i.jsx)(r.code,{children:"New/Newf"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\u8BF4\u660E\uFF1A\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u9519\u8BEF\u4FE1\u606F\u7684 ",(0,i.jsx)(r.code,{children:"error"})," \u5BF9\u8C61\uFF0C\u5E76\u5305\u542B\u5806\u6808\u4FE1\u606F\u3002"]}),"\n",(0,i.jsx)(r.li,{children:"\u683C\u5F0F\uFF1A"}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-go",children:"New(text string) error\nNewf(format string, args ...interface{}) error\n"})}),"\n",(0,i.jsx)(r.h3,{id:"wrapwrapf",children:(0,i.jsx)(r.code,{children:"Wrap/Wrapf"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\u8BF4\u660E\uFF1A\u7528\u4E8E\u5305\u88F9\u5176\u4ED6\u9519\u8BEF ",(0,i.jsx)(r.code,{children:"error"})," \u5BF9\u8C61\uFF0C\u6784\u9020\u6210\u591A\u7EA7\u7684\u9519\u8BEF\u4FE1\u606F\uFF0C\u5305\u542B\u5806\u6808\u4FE1\u606F\u3002"]}),"\n",(0,i.jsx)(r.li,{children:"\u683C\u5F0F\uFF1A"}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-go",children:"func Wrap(err error, text string) error\nfunc Wrapf(err error, format string, args ...interface{}) error\n"})}),"\n",(0,i.jsx)(r.h3,{id:"newskipnewskipf",children:(0,i.jsx)(r.code,{children:"NewSkip/NewSkipf"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\u8BF4\u660E\uFF1A\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u9519\u8BEF\u4FE1\u606F\u7684 ",(0,i.jsx)(r.code,{children:"error"})," \u5BF9\u8C61\uFF0C\u5E76\u4E14\u5FFD\u7565\u90E8\u5206\u5806\u6808\u4FE1\u606F\uFF08\u6309\u7167\u5F53\u524D\u8C03\u7528\u65B9\u6CD5\u4F4D\u7F6E\u5F80\u4E0A\u5FFD\u7565\uFF09\u3002\u9AD8\u7EA7\u529F\u80FD\uFF0C\u4E00\u822C\u5F00\u53D1\u8005\u5F88\u5C11\u7528\u5F97\u5230\u3002"]}),"\n",(0,i.jsx)(r.li,{children:"\u683C\u5F0F\uFF1A"}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-go",children:"func NewSkip(skip int, text string) error\nfunc NewSkipf(skip int, format string, args ...interface{}) error\n"})}),"\n",(0,i.jsx)(r.h2,{id:"\u9519\u8BEF\u7801\u76F8\u5173\u65B9\u6CD5",children:"\u9519\u8BEF\u7801\u76F8\u5173\u65B9\u6CD5"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-go",children:"func NewCode(code int, text string) error\nfunc NewCodef(code int, format string, args ...interface{}) error\nfunc NewCodeSkip(code, skip int, text string) error\nfunc NewCodeSkipf(code, skip int, format string, args ...interface{}) error\nfunc WrapCode(code int, err error, text string) error\nfunc WrapCodef(code int, err error, format string, args ...interface{}) error\n"})}),"\n",(0,i.jsxs)(r.p,{children:["\u5177\u4F53\u4ECB\u7ECD\u8BF7\u53C2\u8003\u540E\u7EED ",(0,i.jsx)(r.a,{href:"/2.7.x/docs/core/gerror-code-example",children:"\u9519\u8BEF\u5904\u7406-\u9519\u8BEF\u7801\u4F7F\u7528"})," \u7AE0\u8282\u3002"]})]})}function f(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return t}});var o=n(667294);let i={},s=o.createContext(i);function t(e){let r=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["5196"],{514384:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>p,assets:()=>a,toc:()=>l,frontMatter:()=>o});var r=JSON.parse('{"id":"WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE","title":"\u6570\u636E\u8FD4\u56DE","description":"HTTP Server \u7684\u6570\u636E\u8FD4\u56DE\u901A\u8FC7 ghttp.Response \u5BF9\u8C61\u5B9E\u73B0\uFF0C ghttp.Response \u5BF9\u8C61\u5B9E\u73B0\u4E86\u6807\u51C6\u5E93\u7684 http.ResponseWriter \u63A5\u53E3\u3002\u6570\u636E\u8F93\u51FA\u4F7F\u7528 Write* \u76F8\u5173\u65B9\u6CD5\u5B9E\u73B0\uFF0C\u5E76\u4E14\u6570\u636E\u8F93\u51FA\u91C7\u7528\u4E86 Buffer \u673A\u5236\uFF0C\u56E0\u6B64\u6570\u636E\u7684\u5904\u7406\u6548\u7387\u6BD4\u8F83\u9AD8\u3002\u4EFB\u4F55\u65F6\u5019\u53EF\u4EE5\u901A\u8FC7 OutputBuffer \u65B9\u6CD5\u8F93\u51FA\u7F13\u51B2\u533A\u6570\u636E\u5230\u5BA2\u6237\u7AEF\uFF0C\u5E76\u6E05\u7A7A\u7F13\u51B2\u533A\u6570\u636E\u3002","source":"@site/versioned_docs/version-2.3.x/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE.md","sourceDirName":"WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE","slug":"/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/","permalink":"/en/2.3.x/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE.md","tags":[],"version":"2.3.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":4,"frontMatter":{"title":"\u6570\u636E\u8FD4\u56DE","sidebar_position":4,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u8BF7\u6C42\u8F93\u5165-\u6587\u4EF6\u4E0A\u4F20","permalink":"/en/2.3.x/WEB\u670D\u52A1\u5F00\u53D1/\u8BF7\u6C42\u8F93\u5165/\u8BF7\u6C42\u8F93\u5165-\u6587\u4EF6\u4E0A\u4F20"},"next":{"title":"\u6570\u636E\u8FD4\u56DE-\u7F13\u51B2\u63A7\u5236","permalink":"/en/2.3.x/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-\u7F13\u51B2\u63A7\u5236"}}'),s=t("785893"),i=t("250065");let o={title:"\u6570\u636E\u8FD4\u56DE",sidebar_position:4,hide_title:!0},c=void 0,a={},l=[];function d(e){let n={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"HTTP Server"})," \u7684\u6570\u636E\u8FD4\u56DE\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"ghttp.Response"})," \u5BF9\u8C61\u5B9E\u73B0\uFF0C ",(0,s.jsx)(n.code,{children:"ghttp.Response"})," \u5BF9\u8C61\u5B9E\u73B0\u4E86\u6807\u51C6\u5E93\u7684 ",(0,s.jsx)(n.code,{children:"http.ResponseWriter"})," \u63A5\u53E3\u3002\u6570\u636E\u8F93\u51FA\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"Write*"})," \u76F8\u5173\u65B9\u6CD5\u5B9E\u73B0\uFF0C\u5E76\u4E14\u6570\u636E\u8F93\u51FA\u91C7\u7528\u4E86 ",(0,s.jsx)(n.code,{children:"Buffer"})," \u673A\u5236\uFF0C\u56E0\u6B64\u6570\u636E\u7684\u5904\u7406\u6548\u7387\u6BD4\u8F83\u9AD8\u3002\u4EFB\u4F55\u65F6\u5019\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"OutputBuffer"})," \u65B9\u6CD5\u8F93\u51FA\u7F13\u51B2\u533A\u6570\u636E\u5230\u5BA2\u6237\u7AEF\uFF0C\u5E76\u6E05\u7A7A\u7F13\u51B2\u533A\u6570\u636E\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5E38\u7528\u65B9\u6CD5\uFF1A\u66F4\u8BE6\u7EC6\u7684\u63A5\u53E3\u5217\u8868\u8BF7\u53C2\u8003 ",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#Response",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#Response"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func (r *Response) Write(content ...interface{})\nfunc (r *Response) WriteExit(content ...interface{})\nfunc (r *Response) WriteJson(content interface{}) error\nfunc (r *Response) WriteJsonExit(content interface{}) error\nfunc (r *Response) WriteJsonP(content interface{}) error\nfunc (r *Response) WriteJsonPExit(content interface{}) error\nfunc (r *Response) WriteOver(content ...interface{})\nfunc (r *Response) WriteOverExit(content ...interface{})\nfunc (r *Response) WriteStatus(status int, content ...interface{})\nfunc (r *Response) WriteStatusExit(status int, content ...interface{})\nfunc (r *Response) WriteTpl(tpl string, params ...gview.Params) error\nfunc (r *Response) WriteTplContent(content string, params ...gview.Params) error\nfunc (r *Response) WriteTplDefault(params ...gview.Params) error\nfunc (r *Response) WriteXml(content interface{}, rootTag ...string) error\nfunc (r *Response) WriteXmlExit(content interface{}, rootTag ...string) error\nfunc (r *Response) Writef(format string, params ...interface{})\nfunc (r *Response) WritefExit(format string, params ...interface{})\nfunc (r *Response) Writefln(format string, params ...interface{})\nfunc (r *Response) WriteflnExit(format string, params ...interface{})\nfunc (r *Response) Writeln(content ...interface{})\nfunc (r *Response) WritelnExit(content ...interface{})\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7B80\u8981\u8BF4\u660E:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Write*"})," \u65B9\u6CD5\u7528\u4E8E\u5F80\u8FD4\u56DE\u7684\u6570\u636E\u7F13\u51B2\u533A\u8FFD\u52A0\u5199\u5165\u6570\u636E\uFF0C\u53C2\u6570\u53EF\u4E3A\u4EFB\u610F\u7684\u6570\u636E\u683C\u5F0F\uFF0C\u5185\u90E8\u901A\u8FC7\u65AD\u8A00\u5BF9\u53C2\u6570\u505A\u81EA\u52A8\u5206\u6790\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Write*Exit"})," \u65B9\u6CD5\u7528\u4E8E\u5F80\u8FD4\u56DE\u7684\u6570\u636E\u7F13\u51B2\u533A\u8FFD\u52A0\u5199\u5165\u6570\u636E\u540E\u9000\u51FA\u5F53\u524D\u6267\u884C\u7684 ",(0,s.jsx)(n.code,{children:"HTTP Handler"})," \u65B9\u6CD5\uFF0C\u53EF\u7528\u4E8E\u66FF\u4EE3 ",(0,s.jsx)(n.code,{children:"return"})," \u8FD4\u56DE\u65B9\u6CD5\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WriteOver*"})," \u65B9\u6CD5\u7528\u4E8E\u8986\u76D6\u7F13\u51B2\u533A\u5199\u5165\uFF0C\u539F\u6709\u7F13\u51B2\u533A\u7684\u6570\u636E\u5C06\u4F1A\u88AB\u8986\u76D6\u4E3A\u65B0\u5199\u5165\u7684\u6570\u636E\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WriteStatus*"})," \u65B9\u6CD5\u7528\u4E8E\u8BBE\u7F6E\u5F53\u524D\u8BF7\u6C42\u6267\u884C\u8FD4\u56DE\u7684\u72B6\u6001\u7801\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WriteJson*"}),"/ ",(0,s.jsx)(n.code,{children:"WriteXml"})," \u65B9\u6CD5\u7528\u4E8E\u7279\u5B9A\u6570\u636E\u683C\u5F0F\u7684\u8F93\u51FA\uFF0C\u8FD9\u662F\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u7684\u7B80\u4FBF\u65B9\u6CD5\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WriteTpl*"})," \u65B9\u6CD5\u7528\u4E8E\u6A21\u677F\u8F93\u51FA\uFF0C\u89E3\u6790\u5E76\u8F93\u51FA\u6A21\u677F\u6587\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u89E3\u6790\u5E76\u8F93\u51FA\u7ED9\u5B9A\u7684\u6A21\u677F\u5185\u5BB9\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u5176\u4ED6\u65B9\u6CD5\u8BE6\u89C1\u63A5\u53E3\u6587\u6863\uFF1B"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6B64\u5916\uFF0C\u9700\u8981\u63D0\u4E00\u4E0B\uFF0C ",(0,s.jsx)(n.code,{children:"Header"})," \u7684\u64CD\u4F5C\u53EF\u4EE5\u901A\u8FC7\u6807\u51C6\u5E93\u7684\u65B9\u6CD5\u6765\u5B9E\u73B0\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Response.Header().Set("Content-Type", "text/plain; charset=utf-8")\n'})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var r=t(667294);let s={},i=r.createContext(s);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
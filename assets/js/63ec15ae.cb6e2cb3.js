"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["10370"],{14523:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>s,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>d});var r=JSON.parse('{"id":"\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6/UDP\u7EC4\u4EF6-\u5DE5\u5177\u65B9\u6CD5","title":"UDP\u7EC4\u4EF6-\u5DE5\u5177\u65B9\u6CD5","description":"gudp \u6A21\u5757\u4E5F\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5E38\u7528\u7684\u5DE5\u5177\u65B9\u6CD5\u3002","source":"@site/versioned_docs/version-1.16.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6/UDP\u7EC4\u4EF6-\u5DE5\u5177\u65B9\u6CD5.md","sourceDirName":"\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6","slug":"/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6/UDP\u7EC4\u4EF6-\u5DE5\u5177\u65B9\u6CD5","permalink":"/1.16.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6/UDP\u7EC4\u4EF6-\u5DE5\u5177\u65B9\u6CD5","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6/UDP\u7EC4\u4EF6-\u5DE5\u5177\u65B9\u6CD5.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":1,"frontMatter":{"title":"UDP\u7EC4\u4EF6-\u5DE5\u5177\u65B9\u6CD5","sidebar_position":1,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"UDP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61","permalink":"/1.16.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6/UDP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61"},"next":{"title":"WebSocket","permalink":"/1.16.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/WebSocket"}}'),i=n("785893"),o=n("250065");let d={title:"UDP\u7EC4\u4EF6-\u5DE5\u5177\u65B9\u6CD5",sidebar_position:1,hide_title:!0},s=void 0,c={},a=[];function l(e){let t={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"gudp"})," \u6A21\u5757\u4E5F\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5E38\u7528\u7684\u5DE5\u5177\u65B9\u6CD5\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'import "github.com/gogf/gf/net/gudp"\n\n'})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://godoc.org/github.com/gogf/gf/net/gudp",children:"https://godoc.org/github.com/gogf/gf/net/gudp"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func Checksum(buffer []byte) uint32\nfunc NewNetConn(raddr string, laddr ...string) (*net.UDPConn, error)\nfunc Send(addr string, data []byte, retry ...Retry) error\nfunc SendPkg(addr string, data []byte, retry ...Retry) error\nfunc SendPkgWithTimeout(addr string, data []byte, timeout time.Duration, retry ...Retry) error\nfunc SendRecv(addr string, data []byte, receive int, retry ...Retry) ([]byte, error)\nfunc SendRecvPkg(addr string, data []byte, retry ...Retry) ([]byte, error)\nfunc SendRecvPkgWithTimeout(addr string, data []byte, timeout time.Duration, retry ...Retry) ([]byte, error)\n\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"gudp"})," \u7684\u5DE5\u5177\u76F8\u5BF9\u6BD4\u8F83\u7B80\u5355\u3002"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\u5176\u4E2D\uFF0C ",(0,i.jsx)(t.code,{children:"NewNetConn"})," \u65B9\u6CD5\u7528\u4E8E\u521B\u5EFA\u6807\u51C6\u5E93\u7684 ",(0,i.jsx)(t.code,{children:"net.UDPConn"})," \u901A\u4FE1\u5BF9\u8C61\u3002"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Send"})," \u4E0E ",(0,i.jsx)(t.code,{children:"SendRecv"})," \u7528\u4E8E\u6839\u636E\u7ED9\u5B9A\u7684 ",(0,i.jsx)(t.code,{children:"UDP Server"})," \u5730\u5740\u76F4\u63A5\u5730\u8FDB\u884C ",(0,i.jsx)(t.code,{children:"UDP"})," \u901A\u4FE1\uFF0C\u6570\u636E\u5199\u5165\u53CA\u8BFB\u53D6\u3002"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"*Pkg"})," \u65B9\u6CD5\u7528\u4E8E\u7B80\u4FBF\u7684\u7B80\u5355\u5305\u534F\u8BAE\u6570\u636E\u4F20\u8F93\u3002"]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return d}});var r=n(667294);let i={},o=r.createContext(i);function d(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);
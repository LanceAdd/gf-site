"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["98258"],{676800:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>o});var r=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u5185\u5D4C\u7ED3\u6784\u652F\u6301","title":"ORM\u9AD8\u7EA7\u7279\u6027-\u5185\u5D4C\u7ED3\u6784\u652F\u6301","description":"GoFrame ORM \u7EC4\u4EF6\u9488\u5BF9\u4E8E struct \u5185\u5D4C\u7ED3\u6784\u63D0\u4F9B\u4E86\u826F\u597D\u7684\u652F\u6301\uFF0C\u5305\u62EC\u53C2\u6570\u4F20\u9012\u3001\u7ED3\u679C\u5904\u7406\u3002\u4F8B\u5982\uFF1A","source":"@site/versioned_docs/version-2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u5185\u5D4C\u7ED3\u6784\u652F\u6301.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u5185\u5D4C\u7ED3\u6784\u652F\u6301","permalink":"/en/2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u5185\u5D4C\u7ED3\u6784\u652F\u6301","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u5185\u5D4C\u7ED3\u6784\u652F\u6301.md","tags":[],"version":"2.4.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":6,"frontMatter":{"title":"ORM\u9AD8\u7EA7\u7279\u6027-\u5185\u5D4C\u7ED3\u6784\u652F\u6301","sidebar_position":6,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u9AD8\u7EA7\u7279\u6027-\u7C7B\u578B\u8F6C\u6362","permalink":"/en/2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u7C7B\u578B\u8F6C\u6362"},"next":{"title":"ORM\u9AD8\u7EA7\u7279\u6027-\u81EA\u5B9A\u4E49\u7C7B\u578B\u8F6C\u6362","permalink":"/en/2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u81EA\u5B9A\u4E49\u7C7B\u578B\u8F6C\u6362"}}'),i=n("785893"),s=n("250065");let o={title:"ORM\u9AD8\u7EA7\u7279\u6027-\u5185\u5D4C\u7ED3\u6784\u652F\u6301",sidebar_position:6,hide_title:!0},a=void 0,c={},d=[];function l(e){let t={code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"GoFrame ORM"})," \u7EC4\u4EF6\u9488\u5BF9\u4E8E ",(0,i.jsx)(t.code,{children:"struct"})," \u5185\u5D4C\u7ED3\u6784\u63D0\u4F9B\u4E86\u826F\u597D\u7684\u652F\u6301\uFF0C\u5305\u62EC\u53C2\u6570\u4F20\u9012\u3001\u7ED3\u679C\u5904\u7406\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'type Base struct {\n    Uid        int         `orm:"uid"`\n    CreateAt   *gtime.Time `orm:"create_at"`\n    UpdateAt   *gtime.Time `orm:"update_at"`\n    DeleteAt   *gtime.Time `orm:"delete_at"`\n}\ntype User struct {\n    Base\n    Passport   string `orm:"passport"`\n    Password   string `orm:"password"`\n    Nickname   string `orm:"nickname"`\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["\u5E76\u4E14\uFF0C\u65E0\u8BBA\u591A\u5C11\u5C42\u7EA7\u7684 ",(0,i.jsx)(t.code,{children:"struct"})," \u5D4C\u5957\uFF0C ",(0,i.jsx)(t.code,{children:"ORM"})," \u7684\u53C2\u6570\u4F20\u9012\u548C\u7ED3\u679C\u5904\u7406\u90FD\u652F\u6301\u3002"]})]})}function u(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var r=n(667294);let i={},s=r.createContext(i);function o(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
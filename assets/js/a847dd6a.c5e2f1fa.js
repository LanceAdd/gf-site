"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["72176"],{709312:function(e,o,n){n.r(o),n.d(o,{metadata:()=>t,contentTitle:()=>d,default:()=>u,assets:()=>i,toc:()=>l,frontMatter:()=>s});var t=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-Hook\u7279\u6027","title":"ORM\u94FE\u5F0F\u64CD\u4F5C-Hook\u7279\u6027","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528Hook\u7279\u6027\uFF0C\u4E3AModel\u5BF9\u8C61\u7ED1\u5B9ACRUD\u94A9\u5B50\uFF0C\u4ECE\u800C\u5B9E\u73B0\u5BF9\u6570\u636E\u5E93\u64CD\u4F5C\u7684\u589E\u5F3A\u548C\u4F18\u5316\u3002\u6587\u4E2D\u8BE6\u7EC6\u4ECB\u7ECD\u4E86\u76F8\u5173\u5B9A\u4E49\u3001Hook\u6CE8\u518C\u65B9\u6CD5\u4EE5\u53CA\u4F7F\u7528\u793A\u4F8B\uFF0C\u901A\u8FC7\u6302\u94A9\u51FD\u6570\u5BF9\u67E5\u8BE2\u64CD\u4F5C\u8FDB\u884C\u4E86\u6F14\u793A\u3002","source":"@site/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-Hook\u7279\u6027.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C","slug":"/docs/core/gdb-chaining-hook","permalink":"/docs/core/gdb-chaining-hook","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-Hook\u7279\u6027.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1733708461000,"sidebarPosition":13,"frontMatter":{"slug":"/docs/core/gdb-chaining-hook","title":"ORM\u94FE\u5F0F\u64CD\u4F5C-Hook\u7279\u6027","sidebar_position":13,"hide_title":true,"keywords":["GoFrame\u6846\u67B6","ORM\u94FE\u5F0F\u64CD\u4F5C","Hook\u7279\u6027","CRUD\u94A9\u5B50","\u6A21\u578B","\u6570\u636E\u5E93\u67E5\u8BE2","gdb","Go\u8BED\u8A00","\u7F16\u7A0B\u793A\u4F8B","\u4EE3\u7801\u4F18\u5316"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528Hook\u7279\u6027\uFF0C\u4E3AModel\u5BF9\u8C61\u7ED1\u5B9ACRUD\u94A9\u5B50\uFF0C\u4ECE\u800C\u5B9E\u73B0\u5BF9\u6570\u636E\u5E93\u64CD\u4F5C\u7684\u589E\u5F3A\u548C\u4F18\u5316\u3002\u6587\u4E2D\u8BE6\u7EC6\u4ECB\u7ECD\u4E86\u76F8\u5173\u5B9A\u4E49\u3001Hook\u6CE8\u518C\u65B9\u6CD5\u4EE5\u53CA\u4F7F\u7528\u793A\u4F8B\uFF0C\u901A\u8FC7\u6302\u94A9\u51FD\u6570\u5BF9\u67E5\u8BE2\u64CD\u4F5C\u8FDB\u884C\u4E86\u6F14\u793A\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u5E93\u5207\u6362","permalink":"/docs/core/gdb-chaining-schema"},"next":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-Handler\u7279\u6027","permalink":"/docs/core/gdb-chaining-handler"}}'),r=n("785893"),c=n("250065");let s={slug:"/docs/core/gdb-chaining-hook",title:"ORM\u94FE\u5F0F\u64CD\u4F5C-Hook\u7279\u6027",sidebar_position:13,hide_title:!0,keywords:["GoFrame\u6846\u67B6","ORM\u94FE\u5F0F\u64CD\u4F5C","Hook\u7279\u6027","CRUD\u94A9\u5B50","\u6A21\u578B","\u6570\u636E\u5E93\u67E5\u8BE2","gdb","Go\u8BED\u8A00","\u7F16\u7A0B\u793A\u4F8B","\u4EE3\u7801\u4F18\u5316"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528Hook\u7279\u6027\uFF0C\u4E3AModel\u5BF9\u8C61\u7ED1\u5B9ACRUD\u94A9\u5B50\uFF0C\u4ECE\u800C\u5B9E\u73B0\u5BF9\u6570\u636E\u5E93\u64CD\u4F5C\u7684\u589E\u5F3A\u548C\u4F18\u5316\u3002\u6587\u4E2D\u8BE6\u7EC6\u4ECB\u7ECD\u4E86\u76F8\u5173\u5B9A\u4E49\u3001Hook\u6CE8\u518C\u65B9\u6CD5\u4EE5\u53CA\u4F7F\u7528\u793A\u4F8B\uFF0C\u901A\u8FC7\u6302\u94A9\u51FD\u6570\u5BF9\u67E5\u8BE2\u64CD\u4F5C\u8FDB\u884C\u4E86\u6F14\u793A\u3002"},d=void 0,i={},l=[{value:"\u76F8\u5173\u5B9A\u4E49",id:"\u76F8\u5173\u5B9A\u4E49",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2}];function a(e){let o={code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"Hook"})," \u7279\u6027\u5141\u8BB8\u6211\u4EEC\u5BF9\u7279\u6027\u7684 ",(0,r.jsx)(o.code,{children:"Model"})," \u7ED1\u5B9A ",(0,r.jsx)(o.code,{children:"CRUD"})," \u94A9\u5B50\u5904\u7406\u3002"]}),"\n",(0,r.jsx)(o.h2,{id:"\u76F8\u5173\u5B9A\u4E49",children:"\u76F8\u5173\u5B9A\u4E49"}),"\n",(0,r.jsxs)(o.p,{children:["\u76F8\u5173 ",(0,r.jsx)(o.code,{children:"Hook"})," \u51FD\u6570\uFF1A"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-go",children:"type (\n    HookFuncSelect func(ctx context.Context, in *HookSelectInput) (result Result, err error)\n    HookFuncInsert func(ctx context.Context, in *HookInsertInput) (result sql.Result, err error)\n    HookFuncUpdate func(ctx context.Context, in *HookUpdateInput) (result sql.Result, err error)\n    HookFuncDelete func(ctx context.Context, in *HookDeleteInput) (result sql.Result, err error)\n)\n\n// HookHandler manages all supported hook functions for Model.\ntype HookHandler struct {\n    Select HookFuncSelect\n    Insert HookFuncInsert\n    Update HookFuncUpdate\n    Delete HookFuncDelete\n}\n"})}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"Hook"})," \u6CE8\u518C\u65B9\u6CD5\uFF1A"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-go",children:"// Hook sets the hook functions for current model.\nfunc (m *Model) Hook(hook HookHandler) *Model\n"})}),"\n",(0,r.jsx)(o.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,r.jsxs)(o.p,{children:["\u67E5\u8BE2 ",(0,r.jsx)(o.code,{children:"birth_day"})," \u5B57\u6BB5\u65F6\uFF0C\u540C\u65F6\u8BA1\u7B97\u51FA\u5F53\u524D\u7528\u6237\u7684\u5E74\u9F84\uFF1A"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-go",children:'// Hook function definition.\nvar hook = gdb.HookHandler{\n    Select: func(ctx context.Context, in *gdb.HookSelectInput) (result gdb.Result, err error) {\n        result, err = in.Next(ctx)\n        if err != nil {\n            return\n        }\n        for i, record := range result {\n            if !record["birth_day"].IsEmpty() {\n                age := gtime.Now().Sub(record["birth_day"].GTime()).Hours() / 24 / 365\n                record["age"] = gvar.New(age)\n            }\n            result[i] = record\n        }\n        return\n    },\n}\n// It registers hook function, creates and returns a new `model`.\nmodel := g.Model("user").Hook(hook)\n\n// The hook function takes effect on each ORM operation when using the `model`.\nall, err := model.Where("status", "online").OrderAsc(`id`).All()\n'})})]})}function u(e={}){let{wrapper:o}={...(0,c.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return d},a:function(){return s}});var t=n(667294);let r={},c=t.createContext(r);function s(e){let o=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(c.Provider,{value:o},e.children)}}}]);
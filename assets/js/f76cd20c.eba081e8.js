"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["545"],{737:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>s,default:()=>d,assets:()=>l,toc:()=>u,frontMatter:()=>o});var t=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-\u81EA\u5B9A\u4E49\u89C4\u5219/\u81EA\u5B9A\u4E49\u89C4\u5219-\u89C4\u5219\u6CE8\u518C","title":"\u81EA\u5B9A\u4E49\u89C4\u5219-\u89C4\u5219\u6CE8\u518C","description":"\u5728GoFrame\u6846\u67B6\u4E0B\u5982\u4F55\u8FDB\u884C\u81EA\u5B9A\u4E49\u89C4\u5219\u6CE8\u518C\u53CA\u6570\u636E\u6821\u9A8C\u3002\u8BE6\u7EC6\u8BB2\u89E3\u4E86\u81EA\u5B9A\u4E49\u89C4\u5219\u7684\u5B9A\u4E49\u65B9\u6CD5\u3001\u53C2\u6570\u8BF4\u660E\u4EE5\u53CA\u5168\u5C40\u548C\u5C40\u90E8\u89C4\u5219\u7684\u6CE8\u518C\u65B9\u5F0F\u3002\u901A\u8FC7\u793A\u4F8B\u4EE3\u7801\u5C55\u793A\u4E86\u8BA2\u5355ID\u5B58\u5728\u6821\u9A8C\u548C\u7528\u6237\u552F\u4E00\u6027\u6821\u9A8C\u4E24\u79CD\u5E38\u89C1\u573A\u666F\u7684\u5B9E\u73B0\uFF0C\u4F7F\u5F00\u53D1\u8005\u80FD\u591F\u7075\u6D3B\u5E94\u7528\u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u529F\u80FD\u3002","source":"@site/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-\u81EA\u5B9A\u4E49\u89C4\u5219/\u81EA\u5B9A\u4E49\u89C4\u5219-\u89C4\u5219\u6CE8\u518C.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-\u81EA\u5B9A\u4E49\u89C4\u5219","slug":"/docs/core/gvalid-custom-rules-register","permalink":"/docs/core/gvalid-custom-rules-register","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-\u81EA\u5B9A\u4E49\u89C4\u5219/\u81EA\u5B9A\u4E49\u89C4\u5219-\u89C4\u5219\u6CE8\u518C.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/core/gvalid-custom-rules-register","title":"\u81EA\u5B9A\u4E49\u89C4\u5219-\u89C4\u5219\u6CE8\u518C","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u81EA\u5B9A\u4E49\u89C4\u5219","\u6570\u636E\u6821\u9A8C","\u89C4\u5219\u6CE8\u518C","\u5168\u5C40\u6821\u9A8C\u89C4\u5219","\u5C40\u90E8\u6821\u9A8C\u89C4\u5219","i18n\u7279\u6027","validation","gvalid"],"description":"\u5728GoFrame\u6846\u67B6\u4E0B\u5982\u4F55\u8FDB\u884C\u81EA\u5B9A\u4E49\u89C4\u5219\u6CE8\u518C\u53CA\u6570\u636E\u6821\u9A8C\u3002\u8BE6\u7EC6\u8BB2\u89E3\u4E86\u81EA\u5B9A\u4E49\u89C4\u5219\u7684\u5B9A\u4E49\u65B9\u6CD5\u3001\u53C2\u6570\u8BF4\u660E\u4EE5\u53CA\u5168\u5C40\u548C\u5C40\u90E8\u89C4\u5219\u7684\u6CE8\u518C\u65B9\u5F0F\u3002\u901A\u8FC7\u793A\u4F8B\u4EE3\u7801\u5C55\u793A\u4E86\u8BA2\u5355ID\u5B58\u5728\u6821\u9A8C\u548C\u7528\u6237\u552F\u4E00\u6027\u6821\u9A8C\u4E24\u79CD\u5E38\u89C1\u573A\u666F\u7684\u5B9E\u73B0\uFF0C\u4F7F\u5F00\u53D1\u8005\u80FD\u591F\u7075\u6D3B\u5E94\u7528\u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u529F\u80FD\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6570\u636E\u6821\u9A8C-\u81EA\u5B9A\u4E49\u89C4\u5219","permalink":"/docs/core/gvalid-custom-rules"},"next":{"title":"\u81EA\u5B9A\u4E49\u89C4\u5219-\u5B8C\u6574\u6570\u636E\u6821\u9A8C","permalink":"/docs/core/gvalid-custom-rules-handle-input-parameters"}}'),i=r("785893"),c=r("250065");let o={slug:"/docs/core/gvalid-custom-rules-register",title:"\u81EA\u5B9A\u4E49\u89C4\u5219-\u89C4\u5219\u6CE8\u518C",sidebar_position:0,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u81EA\u5B9A\u4E49\u89C4\u5219","\u6570\u636E\u6821\u9A8C","\u89C4\u5219\u6CE8\u518C","\u5168\u5C40\u6821\u9A8C\u89C4\u5219","\u5C40\u90E8\u6821\u9A8C\u89C4\u5219","i18n\u7279\u6027","validation","gvalid"],description:"\u5728GoFrame\u6846\u67B6\u4E0B\u5982\u4F55\u8FDB\u884C\u81EA\u5B9A\u4E49\u89C4\u5219\u6CE8\u518C\u53CA\u6570\u636E\u6821\u9A8C\u3002\u8BE6\u7EC6\u8BB2\u89E3\u4E86\u81EA\u5B9A\u4E49\u89C4\u5219\u7684\u5B9A\u4E49\u65B9\u6CD5\u3001\u53C2\u6570\u8BF4\u660E\u4EE5\u53CA\u5168\u5C40\u548C\u5C40\u90E8\u89C4\u5219\u7684\u6CE8\u518C\u65B9\u5F0F\u3002\u901A\u8FC7\u793A\u4F8B\u4EE3\u7801\u5C55\u793A\u4E86\u8BA2\u5355ID\u5B58\u5728\u6821\u9A8C\u548C\u7528\u6237\u552F\u4E00\u6027\u6821\u9A8C\u4E24\u79CD\u5E38\u89C1\u573A\u666F\u7684\u5B9E\u73B0\uFF0C\u4F7F\u5F00\u53D1\u8005\u80FD\u591F\u7075\u6D3B\u5E94\u7528\u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u529F\u80FD\u3002"},s=void 0,l={},u=[{value:"\u76F8\u5173\u6570\u636E\u7ED3\u6784",id:"\u76F8\u5173\u6570\u636E\u7ED3\u6784",level:2},{value:"\u5168\u5C40\u6821\u9A8C\u89C4\u5219\u6CE8\u518C",id:"\u5168\u5C40\u6821\u9A8C\u89C4\u5219\u6CE8\u518C",level:2},{value:"\u793A\u4F8B1\uFF0C\u8BA2\u5355ID\u5B58\u5728\u6821\u9A8C",id:"\u793A\u4F8B1\u8BA2\u5355id\u5B58\u5728\u6821\u9A8C",level:3},{value:"\u793A\u4F8B2\uFF0C\u7528\u6237\u552F\u4E00\u6027\u89C4\u5219",id:"\u793A\u4F8B2\u7528\u6237\u552F\u4E00\u6027\u89C4\u5219",level:3},{value:"\u5C40\u90E8\u6821\u9A8C\u89C4\u5219\u6CE8\u518C",id:"\u5C40\u90E8\u6821\u9A8C\u89C4\u5219\u6CE8\u518C",level:2}];function a(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u76F8\u5173\u6570\u636E\u7ED3\u6784",children:"\u76F8\u5173\u6570\u636E\u7ED3\u6784"}),"\n",(0,i.jsx)(n.p,{children:"\u81EA\u5B9A\u4E49\u89C4\u5219\u65B9\u6CD5\u5B9A\u4E49\uFF0C\u4EE5\u53CA\u5BF9\u5E94\u7684\u8F93\u5165\u53C2\u6570\u6570\u636E\u7ED3\u6784\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// RuleFuncInput holds the input parameters that passed to custom rule function RuleFunc.\ntype RuleFuncInput struct {\n    // Rule specifies the validation rule string, like "required", "between:1,100", etc.\n    Rule string\n\n    // Message specifies the custom error message or configured i18n message for this rule.\n    Message string\n\n    // Value specifies the value for this rule to validate.\n    Value *gvar.Var\n\n    // Data specifies the `data` which is passed to the Validator. It might be a type of map/struct or a nil value.\n    // You can ignore the parameter `Data` if you do not really need it in your custom validation rule.\n    Data *gvar.Var\n}\n\n// RuleFunc is the custom function for data validation.\ntype RuleFunc func(ctx context.Context, in RuleFuncInput) error\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u65B9\u6CD5\u53C2\u6570\u7B80\u8981\u8BF4\u660E\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4E0A\u4E0B\u6587\u53C2\u6570 ",(0,i.jsx)(n.code,{children:"ctx"})," \u662F\u5FC5\u987B\u7684\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"RuleFuncInput"})," \u6570\u636E\u7ED3\u6784\u8BF4\u660E\uFF1A","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Rule"})," \u8868\u793A\u5F53\u524D\u7684\u6821\u9A8C\u89C4\u5219\uFF0C\u5305\u542B\u89C4\u5219\u7684\u53C2\u6570\uFF0C\u4F8B\u5982\uFF1A ",(0,i.jsx)(n.code,{children:"required"}),", ",(0,i.jsx)(n.code,{children:"between:1,100"}),", ",(0,i.jsx)(n.code,{children:"length:6"})," \u7B49\u7B49\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Message"})," \u53C2\u6570\u8868\u793A\u5728\u6821\u9A8C\u5931\u8D25\u540E\u8FD4\u56DE\u7684\u6821\u9A8C\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Value"})," \u53C2\u6570\u8868\u793A\u88AB\u6821\u9A8C\u7684\u6570\u636E\u503C\uFF0C\u6CE8\u610F\u7C7B\u578B\u662F\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"*gvar.Var"})," \u6CDB\u578B\uFF0C\u56E0\u6B64\u60A8\u53EF\u4EE5\u4F20\u9012\u4EFB\u610F\u7C7B\u578B\u7684\u53C2\u6570\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Data"})," \u53C2\u6570\u8868\u793A\u6821\u9A8C\u65F6\u4F20\u9012\u7684\u53C2\u6570\uFF0C\u4F8B\u5982\u6821\u9A8C\u7684\u662F\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"map"})," \u6216\u8005 ",(0,i.jsx)(n.code,{children:"struct"})," \u65F6\uFF0C\u5F80\u5F80\u5728\u8054\u5408\u6821\u9A8C\u65F6\u6709\u7528\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8FD9\u4E2A\u503C\u662F\u8FD0\u884C\u65F6\u8F93\u5165\u7684\uFF0C\u503C\u53EF\u80FD\u662F ",(0,i.jsx)(n.code,{children:"nil"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u81EA\u5B9A\u4E49\u9519\u8BEF\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5DF2\u652F\u6301 ",(0,i.jsx)(n.code,{children:"i18n"})," \u7279\u6027\uFF0C\u56E0\u6B64\u60A8\u53EA\u9700\u8981\u6309\u7167 ",(0,i.jsx)(n.code,{children:"gf.gvalid.rule.\u81EA\u5B9A\u4E49\u89C4\u5219\u540D\u79F0 "})," \u914D\u7F6E ",(0,i.jsx)(n.code,{children:"i18n"})," \u8F6C\u8BD1\u4FE1\u606F\u5373\u53EF\uFF0C\u8BE5\u4FE1\u606F\u5728\u6821\u9A8C\u5931\u8D25\u65F6\u4F1A\u81EA\u52A8\u4ECE ",(0,i.jsx)(n.code,{children:"i18n"})," \u7BA1\u7406\u5668\u83B7\u53D6\u540E\uFF0C\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"Message"})," \u53C2\u6570\u4F20\u5165\u7ED9\u60A8\u6CE8\u518C\u7684\u81EA\u5B9A\u4E49\u6821\u9A8C\u65B9\u6CD5\u4E2D\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"\u5168\u5C40\u6821\u9A8C\u89C4\u5219\u6CE8\u518C",children:"\u5168\u5C40\u6821\u9A8C\u89C4\u5219\u6CE8\u518C"}),"\n",(0,i.jsx)(n.p,{children:"\u81EA\u5B9A\u4E49\u89C4\u5219\u5206\u4E3A\u4E24\u79CD\uFF1A\u5168\u5C40\u89C4\u5219\u6CE8\u518C\u548C\u5C40\u90E8\u89C4\u5219\u6CE8\u518C\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5168\u5C40\u89C4\u5219\u662F\u5168\u5C40\u751F\u6548\u7684\u89C4\u5219\uFF0C\u6CE8\u518C\u4E4B\u540E\u65E0\u8BBA\u662F\u4F7F\u7528\u65B9\u6CD5\u8FD8\u662F\u5BF9\u8C61\u6765\u6267\u884C\u6570\u636E\u6821\u9A8C\u90FD\u53EF\u4EE5\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u89C4\u5219\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6CE8\u518C\u6821\u9A8C\u65B9\u6CD5\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// RegisterRule registers custom validation rule and function for package.\nfunc RegisterRule(rule string, f RuleFunc) {\n    customRuleFuncMap[rule] = f\n}\n\n// RegisterRuleByMap registers custom validation rules using map for package.\nfunc RegisterRuleByMap(m map[string]RuleFunc) {\n    for k, v := range m {\n        customRuleFuncMap[k] = v\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u60A8\u9700\u8981\u6309\u7167 ",(0,i.jsx)(n.code,{children:"RuleFunc"})," \u7C7B\u578B\u7684\u65B9\u6CD5\u5B9A\u4E49\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u60A8\u9700\u8981\u7684\u6821\u9A8C\u65B9\u6CD5\uFF0C\u968F\u540E\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"RegisterRule"})," \u6CE8\u518C\u5230 ",(0,i.jsx)(n.code,{children:"gvalid"})," \u6A21\u5757\u4E2D\u5168\u5C40\u7BA1\u7406\u3002\u8BE5\u6CE8\u518C\u903B\u8F91\u5F80\u5F80\u662F\u5728\u7A0B\u5E8F\u521D\u59CB\u5316\u65F6\u6267\u884C\u3002\u8BE5\u65B9\u6CD5\u5728\u5BF9\u6570\u636E\u8FDB\u884C\u6821\u9A8C\u65F6\u5C06\u4F1A\u88AB\u81EA\u52A8\u8C03\u7528\uFF0C\u65B9\u6CD5\u8FD4\u56DE ",(0,i.jsx)(n.code,{children:"nil"})," \u8868\u793A\u6821\u9A8C\u901A\u8FC7\uFF0C\u5426\u5219\u5E94\u5F53\u8FD4\u56DE\u4E00\u4E2A\u975E\u7A7A\u7684 ",(0,i.jsx)(n.code,{children:"error"})," \u7C7B\u578B\u503C\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["\u6CE8\u610F\u4E8B\u9879\uFF1A\u81EA\u5B9A\u4E49\u89C4\u5219\u7684\u6CE8\u518C\u65B9\u6CD5\u4E0D\u652F\u6301\u5E76\u53D1\u8C03\u7528\uFF0C\u60A8\u9700\u8981\u5728\u7A0B\u5E8F\u542F\u52A8\u65F6\u8FDB\u884C\u6CE8\u518C\uFF08\u4F8B\u5982\u5728 ",(0,i.jsx)(n.code,{children:"boot"})," \u5305\u4E2D\u5904\u7406\uFF09\uFF0C\u65E0\u6CD5\u5728\u8FD0\u884C\u65F6\u52A8\u6001\u6CE8\u518C\uFF0C\u5426\u5219\u4F1A\u4EA7\u751F\u5E76\u53D1\u5B89\u5168\u95EE\u9898\u3002"]})}),"\n",(0,i.jsx)(n.h3,{id:"\u793A\u4F8B1\u8BA2\u5355id\u5B58\u5728\u6821\u9A8C",children:"\u793A\u4F8B1\uFF0C\u8BA2\u5355ID\u5B58\u5728\u6821\u9A8C"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u7535\u5546\u4E1A\u52A1\u4E2D\uFF0C\u5F53\u6211\u4EEC\u5BF9\u8BA2\u5355\u8FDB\u884C\u64CD\u4F5C\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49\u89C4\u5219\u6821\u9A8C\u7ED9\u5B9A\u7684\u8BA2\u5355ID\u662F\u5426\u5B58\u5728\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u6CE8\u518C\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"order-exist"})," \u7684\u5168\u5C40\u89C4\u5219\u6765\u5B9E\u73B0\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/database/gdb"\n    "github.com/gogf/gf/v2/errors/gerror"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/util/gvalid"\n    "time"\n)\n\ntype Request struct {\n    OrderId     int64 `v:"required|order-exist"`\n    ProductName string\n    Amount      int64\n    // ...\n}\n\nfunc init() {\n    rule := "order-exist"\n    gvalid.RegisterRule(rule, RuleOrderExist)\n}\n\nfunc RuleOrderExist(ctx context.Context, in gvalid.RuleFuncInput) error {\n    // SELECT COUNT(*) FROM `order` WHERE `id` = xxx\n    count, err := g.Model("order").\n        Ctx(ctx).\n        Cache(gdb.CacheOption{\n            Duration: time.Hour,\n            Name:     "",\n            Force:    false,\n        }).\n        WhereNot("id", in.Value.Int64()).\n        Count()\n    if err != nil {\n        return err\n    }\n    if count == 0 {\n        return gerror.Newf(`invalid order id "%d"`, in.Value.Int64())\n    }\n    return nil\n}\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n        req = &Request{\n            OrderId:     65535,\n            ProductName: "HikingShoe",\n            Amount:      10000,\n        }\n    )\n    err := g.Validator().CheckStruct(ctx, req)\n    fmt.Println(err)\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u793A\u4F8B2\u7528\u6237\u552F\u4E00\u6027\u89C4\u5219",children:"\u793A\u4F8B2\uFF0C\u7528\u6237\u552F\u4E00\u6027\u89C4\u5219"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u7528\u6237\u6CE8\u518C\u65F6\uFF0C\u6211\u4EEC\u5F80\u5F80\u9700\u8981\u6821\u9A8C\u5F53\u524D\u7528\u6237\u63D0\u4EA4\u7684\u540D\u79F0/\u8D26\u53F7\u662F\u5426\u552F\u4E00\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u6CE8\u518C\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"unique-name"})," \u7684\u5168\u5C40\u89C4\u5219\u6765\u5B9E\u73B0\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/database/gdb"\n    "github.com/gogf/gf/v2/errors/gerror"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/util/gvalid"\n    "time"\n)\n\ntype User struct {\n    Id   int\n    Name string `v:"required|unique-name#\u8BF7\u8F93\u5165\u7528\u6237\u540D\u79F0|\u7528\u6237\u540D\u79F0\u5DF2\u88AB\u5360\u7528"`\n    Pass string `v:"required|length:6,18"`\n}\n\nfunc init() {\n    rule := "unique-name"\n    gvalid.RegisterRule(rule, RuleUniqueName)\n}\n\nfunc RuleUniqueName(ctx context.Context, in gvalid.RuleFuncInput) error {\n    var user *User\n    if err := in.Data.Scan(&user); err != nil {\n        return gerror.Wrap(err, `Scan data to user failed`)\n    }\n    // SELECT COUNT(*) FROM `user` WHERE `id` != xxx AND `name` != xxx\n    count, err := g.Model("user").\n        Ctx(ctx).\n        Cache(gdb.CacheOption{\n            Duration: time.Hour,\n            Name:     "",\n            Force:    false,\n        }).\n        WhereNot("id", user.Id).\n        WhereNot("name", user.Name).\n        Count()\n    if err != nil {\n        return err\n    }\n    if count > 0 {\n        if in.Message != "" {\n            return gerror.New(in.Message)\n        }\n        return gerror.Newf(`user name "%s" is already token by others`, user.Name)\n    }\n    return nil\n}\n\nfunc main() {\n    var (\n        ctx  = gctx.New()\n        user = &User{\n            Id:   1,\n            Name: "john",\n            Pass: "123456",\n        }\n    )\n    err := g.Validator().CheckStruct(ctx, user)\n    fmt.Println(err)\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u5C40\u90E8\u6821\u9A8C\u89C4\u5219\u6CE8\u518C",children:"\u5C40\u90E8\u6821\u9A8C\u89C4\u5219\u6CE8\u518C"}),"\n",(0,i.jsx)(n.p,{children:"\u5C40\u90E8\u89C4\u5219\u662F\u4EC5\u5728\u5F53\u524D\u6821\u9A8C\u5BF9\u8C61\u4E0B\u751F\u6548\u89C4\u5219\uFF0C\u6821\u9A8C\u89C4\u5219\u662F\u6CE8\u518C\u5230\u5F53\u524D\u4F7F\u7528\u7684\u94FE\u5F0F\u64CD\u4F5C\u6D41\u7A0B\u4E2D\u800C\u4E0D\u662F\u5168\u5C40\u4E2D\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6CE8\u518C\u65B9\u6CD5\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// RuleFunc registers one custom rule function to current Validator.\nfunc (v *Validator) RuleFunc(rule string, f RuleFunc) *Validator\n\n// RuleFuncMap registers multiple custom rule functions to current Validator.\nfunc (v *Validator) RuleFuncMap(m map[string]RuleFunc) *Validator\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7B80\u8981\u4ECB\u7ECD\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"RuleFunc"})," \u65B9\u6CD5\u7528\u4E8E\u6CE8\u518C\u5355\u4E2A\u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u5230\u5F53\u524D\u5BF9\u8C61\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"RuleFuncMap"})," \u65B9\u6CD5\u7528\u4E8E\u6CE8\u518C\u591A\u4E2A\u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u5230\u5F53\u524D\u5BF9\u8C61\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4EEC\u5C06\u4E0A\u9762\u5176\u4E2D\u4E00\u4E2A\u4F8B\u5B50\u6539\u4E3A\u5C40\u90E8\u6821\u9A8C\u89C4\u5219\u6CE8\u518C\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/database/gdb"\n    "github.com/gogf/gf/v2/errors/gerror"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/util/gvalid"\n    "time"\n)\n\ntype Request struct {\n    OrderId     int64\n    ProductName string\n    Amount      int64\n    // ...\n}\n\nfunc RuleOrderExist(ctx context.Context, in gvalid.RuleFuncInput) error {\n    // SELECT COUNT(*) FROM `order` WHERE `id` = xxx\n    count, err := g.Model("order").\n        Ctx(ctx).\n        Cache(gdb.CacheOption{\n            Duration: time.Hour,\n            Name:     "",\n            Force:    false,\n        }).\n        WhereNot("id", in.Value.Int64()).\n        Count()\n    if err != nil {\n        return err\n    }\n    if count == 0 {\n        return gerror.Newf(`invalid order id "%d"`, in.Value.Int64())\n    }\n    return nil\n}\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n        req = &Request{\n            OrderId:     65535,\n            ProductName: "HikingShoe",\n            Amount:      10000,\n        }\n    )\n    err := g.Validator().RuleFunc("order-exist", RuleOrderExist).Data(req).Run(ctx)\n    fmt.Println(err)\n}\n'})})]})}function d(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return o}});var t=r(667294);let i={},c=t.createContext(i);function o(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);
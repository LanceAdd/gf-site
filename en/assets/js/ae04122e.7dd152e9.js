"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["72139"],{239562:function(e,t,a){a.r(t),a.d(t,{metadata:()=>n,contentTitle:()=>i,default:()=>l,assets:()=>u,toc:()=>c,frontMatter:()=>s});var n=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-\u81EA\u5B9A\u4E49\u89C4\u5219/\u81EA\u5B9A\u4E49\u89C4\u5219-\u5B8C\u6574\u6570\u636E\u6821\u9A8C","title":"Custom Rule - Input Object","description":"Use custom rules in the GoFrame framework to perform complete data validation on structs. By adding the metadata g.Meta to a struct, you can register and use custom validation rules such as UserCreateReq to validate user creation requests. Sample code demonstrates how to implement and apply custom validation methods to ensure data uniqueness and validity.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-\u81EA\u5B9A\u4E49\u89C4\u5219/\u81EA\u5B9A\u4E49\u89C4\u5219-\u5B8C\u6574\u6570\u636E\u6821\u9A8C.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-\u81EA\u5B9A\u4E49\u89C4\u5219","slug":"/docs/core/gvalid-custom-rules-handle-input-parameters","permalink":"/en/docs/core/gvalid-custom-rules-handle-input-parameters","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-\u81EA\u5B9A\u4E49\u89C4\u5219/\u81EA\u5B9A\u4E49\u89C4\u5219-\u5B8C\u6574\u6570\u636E\u6821\u9A8C.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732440306000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/core/gvalid-custom-rules-handle-input-parameters","title":"Custom Rule - Input Object","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","Custom Rule","Complete Data Validation","UserCreateReq","Validation Component","Struct Validation","GoFrame Framework","gvalid","Data Validation","Validation Rule"],"description":"Use custom rules in the GoFrame framework to perform complete data validation on structs. By adding the metadata g.Meta to a struct, you can register and use custom validation rules such as UserCreateReq to validate user creation requests. Sample code demonstrates how to implement and apply custom validation methods to ensure data uniqueness and validity."},"sidebar":"mainSidebar","previous":{"title":"Custom Rule - Registration","permalink":"/en/docs/core/gvalid-custom-rules-register"},"next":{"title":"Data Validation - Error Msg","permalink":"/en/docs/core/gvalid-custom-validating-message"}}'),r=a("785893"),o=a("250065");let s={slug:"/docs/core/gvalid-custom-rules-handle-input-parameters",title:"Custom Rule - Input Object",sidebar_position:1,hide_title:!0,keywords:["GoFrame","Custom Rule","Complete Data Validation","UserCreateReq","Validation Component","Struct Validation","GoFrame Framework","gvalid","Data Validation","Validation Rule"],description:"Use custom rules in the GoFrame framework to perform complete data validation on structs. By adding the metadata g.Meta to a struct, you can register and use custom validation rules such as UserCreateReq to validate user creation requests. Sample code demonstrates how to implement and apply custom validation methods to ensure data uniqueness and validity."},i=void 0,u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Usage Example",id:"usage-example",level:2}];function d(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(t.p,{children:["You may have noticed that when we specify a ",(0,r.jsx)(t.code,{children:"struct"}),", our rules can only validate its key-values or attributes. If we want to use the rules to completely validate the ",(0,r.jsx)(t.code,{children:"struct"})," object, we find that we cannot register custom validation rules for the validation component. However, our validation component also supports directly validating the current ",(0,r.jsx)(t.code,{children:"struct"})," object. Let's look at an example where we need to perform complete custom validation on a user creation request and register a validation rule for ",(0,r.jsx)(t.code,{children:"UserCreateReq"})," to achieve this."]}),"\n",(0,r.jsx)(t.h2,{id:"usage-example",children:"Usage Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/database/gdb"\n    "github.com/gogf/gf/v2/errors/gerror"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/util/gvalid"\n    "time"\n)\n\ntype UserCreateReq struct {\n    g.Meta `v:"UserCreateReq"`\n    Name   string\n    Pass   string\n}\n\nfunc RuleUserCreateReq(ctx context.Context, in gvalid.RuleFuncInput) error {\n    var req *UserCreateReq\n    if err := in.Data.Scan(&req); err != nil {\n        return gerror.Wrap(err, `Scan data to UserCreateReq failed`)\n    }\n    // SELECT COUNT(*) FROM `user` WHERE `name` = xxx\n    count, err := g.Model("user").Ctx(ctx).Cache(gdb.CacheOption{\n        Duration: time.Hour,\n        Name:     "",\n        Force:    false,\n    }).Where("name", req.Name).Count()\n    if err != nil {\n        return err\n    }\n    if count > 0 {\n        return gerror.Newf(`The name "%s" is already taken by others`, req.Name)\n    }\n    return nil\n}\n\nfunc main() {\n    var (\n        ctx  = gctx.New()\n        user = &UserCreateReq{\n            Name: "john",\n            Pass: "123456",\n        }\n    )\n    err := g.Validator().RuleFunc("UserCreateReq", RuleUserCreateReq).Data(user).Run(ctx)\n    fmt.Println(err)\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["As you can see, by embedding ",(0,r.jsx)(t.code,{children:"g.Meta"})," metadata into the struct and binding the custom rule ",(0,r.jsx)(t.code,{children:"UserCreateReq"}),", when we validate the struct object through ",(0,r.jsx)(t.code,{children:"CheckStruct"}),", we can use ",(0,r.jsx)(t.code,{children:"UserCreateReq"})," to achieve validation."]}),"\n",(0,r.jsx)(t.p,{children:"After executing the above example, the terminal output:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'The name "john" is already taken\n'})})]})}function l(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,t,a){a.d(t,{Z:function(){return i},a:function(){return s}});var n=a(667294);let r={},o=n.createContext(r);function s(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
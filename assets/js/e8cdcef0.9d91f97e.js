"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["48568"],{362714:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>u,assets:()=>o,toc:()=>l,frontMatter:()=>i});var t=JSON.parse('{"id":"quick/\u9879\u76EE\u811A\u624B\u67B6/\u63A5\u53E3\u5F00\u53D1/Step5 - \u5B8C\u6210\u63A5\u53E3\u903B\u8F91\u5B9E\u73B0","title":"Step5 - \u5B8C\u6210\u63A5\u53E3\u903B\u8F91\u5B9E\u73B0","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u5B8C\u6210\u63A5\u53E3\u903B\u8F91\u5B9E\u73B0\u3002\u901A\u8FC7\u9879\u76EE\u811A\u624B\u67B6\uFF0C\u9884\u5148\u751F\u6210\u4E86\u4E0E\u9879\u76EE\u4E1A\u52A1\u903B\u8F91\u65E0\u5173\u7684\u4EE3\u7801\uFF0C\u96C6\u4E2D\u5728\u4E1A\u52A1\u903B\u8F91\u5B9E\u73B0\u3002\u4ECB\u7ECD\u4E86CRUD\u64CD\u4F5C\u7684\u5177\u4F53\u5B9E\u73B0\u8FC7\u7A0B\uFF0C\u5305\u62EC\u521B\u5EFA\u3001\u66F4\u65B0\u3001\u5220\u9664\u548C\u67E5\u8BE2\u63A5\u53E3\u7684\u5B9E\u73B0\u65B9\u6CD5\u3002\u8BE6\u7EC6\u9610\u8FF0\u4E86\u6570\u636E\u64CD\u4F5C\u8FC7\u7A0B\u4E2D\u5BF9\u53C2\u6570\u7684\u6821\u9A8C\u3001\u8868\u5355\u6570\u636E\u7684\u63D2\u5165\u4E0E\u66F4\u65B0\u3001\u6570\u636E\u7684\u667A\u80FD\u6620\u5C04\u548C\u6821\u9A8C\u673A\u5236\uFF0C\u4EE5\u53CA\u5982\u4F55\u9AD8\u6548\u5730\u5229\u7528GoFrame\u6846\u67B6\u7684\u529F\u80FD\u8FDB\u884C\u5F00\u53D1\u3002","source":"@site/docs/quick/\u9879\u76EE\u811A\u624B\u67B6/\u63A5\u53E3\u5F00\u53D1/Step5 - \u5B8C\u6210\u63A5\u53E3\u903B\u8F91\u5B9E\u73B0.md","sourceDirName":"quick/\u9879\u76EE\u811A\u624B\u67B6/\u63A5\u53E3\u5F00\u53D1","slug":"/quick/scaffold-api-implements","permalink":"/quick/scaffold-api-implements","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/quick/\u9879\u76EE\u811A\u624B\u67B6/\u63A5\u53E3\u5F00\u53D1/Step5 - \u5B8C\u6210\u63A5\u53E3\u903B\u8F91\u5B9E\u73B0.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1733708461000,"sidebarPosition":5,"frontMatter":{"slug":"/quick/scaffold-api-implements","title":"Step5 - \u5B8C\u6210\u63A5\u53E3\u903B\u8F91\u5B9E\u73B0","hide_title":true,"sidebar_position":5,"keywords":["GoFrame","CRUD\u903B\u8F91","\u63A5\u53E3\u521B\u5EFA","\u53C2\u6570\u6821\u9A8C","\u66F4\u65B0\u63A5\u53E3","\u5220\u9664\u63A5\u53E3","\u67E5\u8BE2\u63A5\u53E3","\u6570\u636E\u8868\u64CD\u4F5C","\u811A\u624B\u67B6\u5DE5\u5177","\u4E1A\u52A1\u903B\u8F91\u5B9E\u73B0"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u5B8C\u6210\u63A5\u53E3\u903B\u8F91\u5B9E\u73B0\u3002\u901A\u8FC7\u9879\u76EE\u811A\u624B\u67B6\uFF0C\u9884\u5148\u751F\u6210\u4E86\u4E0E\u9879\u76EE\u4E1A\u52A1\u903B\u8F91\u65E0\u5173\u7684\u4EE3\u7801\uFF0C\u96C6\u4E2D\u5728\u4E1A\u52A1\u903B\u8F91\u5B9E\u73B0\u3002\u4ECB\u7ECD\u4E86CRUD\u64CD\u4F5C\u7684\u5177\u4F53\u5B9E\u73B0\u8FC7\u7A0B\uFF0C\u5305\u62EC\u521B\u5EFA\u3001\u66F4\u65B0\u3001\u5220\u9664\u548C\u67E5\u8BE2\u63A5\u53E3\u7684\u5B9E\u73B0\u65B9\u6CD5\u3002\u8BE6\u7EC6\u9610\u8FF0\u4E86\u6570\u636E\u64CD\u4F5C\u8FC7\u7A0B\u4E2D\u5BF9\u53C2\u6570\u7684\u6821\u9A8C\u3001\u8868\u5355\u6570\u636E\u7684\u63D2\u5165\u4E0E\u66F4\u65B0\u3001\u6570\u636E\u7684\u667A\u80FD\u6620\u5C04\u548C\u6821\u9A8C\u673A\u5236\uFF0C\u4EE5\u53CA\u5982\u4F55\u9AD8\u6548\u5730\u5229\u7528GoFrame\u6846\u67B6\u7684\u529F\u80FD\u8FDB\u884C\u5F00\u53D1\u3002"},"sidebar":"quickSidebar","previous":{"title":"Step4 - \u751F\u6210controller\u4EE3\u7801","permalink":"/quick/scaffold-api-controller"},"next":{"title":"Step6 - \u914D\u7F6E\u4E0E\u8DEF\u7531","permalink":"/quick/scaffold-api-config-and-route"}}'),s=r("785893"),d=r("250065");let i={slug:"/quick/scaffold-api-implements",title:"Step5 - \u5B8C\u6210\u63A5\u53E3\u903B\u8F91\u5B9E\u73B0",hide_title:!0,sidebar_position:5,keywords:["GoFrame","CRUD\u903B\u8F91","\u63A5\u53E3\u521B\u5EFA","\u53C2\u6570\u6821\u9A8C","\u66F4\u65B0\u63A5\u53E3","\u5220\u9664\u63A5\u53E3","\u67E5\u8BE2\u63A5\u53E3","\u6570\u636E\u8868\u64CD\u4F5C","\u811A\u624B\u67B6\u5DE5\u5177","\u4E1A\u52A1\u903B\u8F91\u5B9E\u73B0"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u5B8C\u6210\u63A5\u53E3\u903B\u8F91\u5B9E\u73B0\u3002\u901A\u8FC7\u9879\u76EE\u811A\u624B\u67B6\uFF0C\u9884\u5148\u751F\u6210\u4E86\u4E0E\u9879\u76EE\u4E1A\u52A1\u903B\u8F91\u65E0\u5173\u7684\u4EE3\u7801\uFF0C\u96C6\u4E2D\u5728\u4E1A\u52A1\u903B\u8F91\u5B9E\u73B0\u3002\u4ECB\u7ECD\u4E86CRUD\u64CD\u4F5C\u7684\u5177\u4F53\u5B9E\u73B0\u8FC7\u7A0B\uFF0C\u5305\u62EC\u521B\u5EFA\u3001\u66F4\u65B0\u3001\u5220\u9664\u548C\u67E5\u8BE2\u63A5\u53E3\u7684\u5B9E\u73B0\u65B9\u6CD5\u3002\u8BE6\u7EC6\u9610\u8FF0\u4E86\u6570\u636E\u64CD\u4F5C\u8FC7\u7A0B\u4E2D\u5BF9\u53C2\u6570\u7684\u6821\u9A8C\u3001\u8868\u5355\u6570\u636E\u7684\u63D2\u5165\u4E0E\u66F4\u65B0\u3001\u6570\u636E\u7684\u667A\u80FD\u6620\u5C04\u548C\u6821\u9A8C\u673A\u5236\uFF0C\u4EE5\u53CA\u5982\u4F55\u9AD8\u6548\u5730\u5229\u7528GoFrame\u6846\u67B6\u7684\u529F\u80FD\u8FDB\u884C\u5F00\u53D1\u3002"},c=void 0,o={},l=[{value:"\u521B\u5EFA\u63A5\u53E3",id:"\u521B\u5EFA\u63A5\u53E3",level:2},{value:"\u521B\u5EFA\u903B\u8F91\u5B9E\u73B0",id:"\u521B\u5EFA\u903B\u8F91\u5B9E\u73B0",level:3},{value:"\u53C2\u6570\u6821\u9A8C\u5B9E\u73B0",id:"\u53C2\u6570\u6821\u9A8C\u5B9E\u73B0",level:3},{value:"\u5220\u9664\u63A5\u53E3",id:"\u5220\u9664\u63A5\u53E3",level:2},{value:"\u66F4\u65B0\u63A5\u53E3",id:"\u66F4\u65B0\u63A5\u53E3",level:2},{value:"\u67E5\u8BE2\u63A5\u53E3\uFF08\u5355\u4E2A\uFF09",id:"\u67E5\u8BE2\u63A5\u53E3\u5355\u4E2A",level:2},{value:"\u67E5\u8BE2\u63A5\u53E3\uFF08\u5217\u8868\uFF09",id:"\u67E5\u8BE2\u63A5\u53E3\u5217\u8868",level:2},{value:"\u5B66\u4E60\u5C0F\u7ED3",id:"\u5B66\u4E60\u5C0F\u7ED3",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u901A\u8FC7\u9879\u76EE\u811A\u624B\u67B6\u5DE5\u5177\uFF0C\u5F88\u591A\u4E0E\u9879\u76EE\u4E1A\u52A1\u903B\u8F91\u65E0\u5173\u7684\u4EE3\u7801\u90FD\u5DF2\u7ECF\u9884\u5148\u751F\u6210\u597D\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5173\u6CE8\u4E1A\u52A1\u903B\u8F91\u5B9E\u73B0\u5373\u53EF\u3002\u6211\u4EEC\u63A5\u4E0B\u6765\u770B\u770B\u5982\u4F55\u5B9E\u73B0",(0,s.jsx)(n.code,{children:"CRUD"}),"\u5177\u4F53\u903B\u8F91\u5427\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u521B\u5EFA\u63A5\u53E3",children:"\u521B\u5EFA\u63A5\u53E3"}),"\n",(0,s.jsx)(n.h3,{id:"\u521B\u5EFA\u903B\u8F91\u5B9E\u73B0",children:"\u521B\u5EFA\u903B\u8F91\u5B9E\u73B0"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="internal/controller/user/user_v1_create.go"',children:'package user\n\nimport (\n    "context"\n\n    "demo/api/user/v1"\n    "demo/internal/dao"\n    "demo/internal/model/do"\n)\n\nfunc (c *ControllerV1) Create(ctx context.Context, req *v1.CreateReq) (res *v1.CreateRes, err error) {\n    insertId, err := dao.User.Ctx(ctx).Data(do.User{\n        Name:   req.Name,\n        Status: v1.StatusOK,\n        Age:    req.Age,\n    }).InsertAndGetId()\n    if err != nil {\n        return nil, err\n    }\n    res = &v1.CreateRes{\n        Id: insertId,\n    }\n    return\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728",(0,s.jsx)(n.code,{children:"Create"}),"\u5B9E\u73B0\u65B9\u6CD5\u4E2D\uFF1A"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6211\u4EEC\u901A\u8FC7",(0,s.jsx)(n.code,{children:"dao.User"}),"\u901A\u8FC7",(0,s.jsx)(n.code,{children:"dao"}),"\u7EC4\u4EF6\u64CD\u4F5C",(0,s.jsx)(n.code,{children:"user"}),"\u8868\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6BCF\u4E2A",(0,s.jsx)(n.code,{children:"dao"}),"\u64CD\u4F5C\u90FD\u9700\u8981\u4F20\u9012",(0,s.jsx)(n.code,{children:"ctx"}),"\u53C2\u6570\uFF0C\u56E0\u6B64\u6211\u4EEC\u901A\u8FC7",(0,s.jsx)(n.code,{children:"Ctx(ctx)"}),"\u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A",(0,s.jsx)(n.code,{children:"gdb.Model"}),"\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u662F\u6846\u67B6\u7684\u6A21\u578B\u5BF9\u8C61\uFF0C\u7528\u4E8E\u64CD\u4F5C\u7279\u5B9A\u7684\u6570\u636E\u8868\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u901A\u8FC7",(0,s.jsx)(n.code,{children:"Data"}),"\u4F20\u9012\u9700\u8981\u5199\u5165\u6570\u636E\u8868\u7684\u6570\u636E\uFF0C\u6211\u4EEC\u8FD9\u91CC\u4F7F\u7528",(0,s.jsx)(n.code,{children:"do"}),"\u8F6C\u6362\u6A21\u578B\u5BF9\u8C61\u8F93\u5165\u6211\u4EEC\u7684\u6570\u636E\u3002",(0,s.jsx)(n.code,{children:"do"}),"\u8F6C\u6362\u6A21\u578B\u4F1A\u81EA\u52A8\u8FC7\u6EE4",(0,s.jsx)(n.code,{children:"nil"}),"\u6570\u636E\uFF0C\u5E76\u5728\u5E95\u5C42\u81EA\u52A8\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684\u6570\u636E\u8868\u5B57\u6BB5\u7C7B\u578B\u3002\u5728\u7EDD\u5927\u90E8\u5206\u65F6\u5019\uFF0C\u6211\u4EEC\u90FD\u4F7F\u7528",(0,s.jsx)(n.code,{children:"do"}),"\u8F6C\u6362\u6A21\u578B\u6765\u7ED9\u6570\u636E\u5E93\u64CD\u4F5C\u5BF9\u8C61\u4F20\u9012\u5199\u5165/\u66F4\u65B0\u53C2\u6570\u3001\u67E5\u8BE2\u6761\u4EF6\u7B49\u6570\u636E\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u901A\u8FC7",(0,s.jsx)(n.code,{children:"InsertAndGetId"}),"\u65B9\u6CD5\u5C06",(0,s.jsx)(n.code,{children:"Data"}),"\u7684\u53C2\u6570\u5199\u5165\u6570\u636E\u5E93\uFF0C\u5E76\u8FD4\u56DE\u65B0\u521B\u5EFA\u7684\u8BB0\u5F55\u4E3B\u952E",(0,s.jsx)(n.code,{children:"id"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u53C2\u6570\u6821\u9A8C\u5B9E\u73B0",children:"\u53C2\u6570\u6821\u9A8C\u5B9E\u73B0"}),"\n",(0,s.jsxs)(n.p,{children:["\u7B49\u7B49\uFF0C\u5927\u5BB6\u53EF\u80FD\u4F1A\u95EE\uFF0C\u4E3A\u4EC0\u4E48\u8FD9\u91CC\u6CA1\u6709\u6821\u9A8C\u903B\u8F91\u5462\uFF1F\u56E0\u4E3A\u6821\u9A8C\u903B\u8F91\u90FD\u5DF2\u7ECF\u914D\u7F6E\u5230\u8BF7\u6C42\u53C2\u6570\u5BF9\u8C61",(0,s.jsx)(n.code,{children:"CreateReq"}),"\u4E0A\u4E86\u3002\u8FD8\u8BB0\u5F97\u524D\u9762\u4ECB\u7ECD\u7684",(0,s.jsx)(n.code,{children:"v"}),"\u6807\u7B7E\u5417\uFF1F\u6211\u4EEC\u518D\u6765\u770B\u770B\u8FD9\u4E2A\u8BF7\u6C42\u53C2\u6570\u5BF9\u8C61\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="api/user/v1/user.go"',children:'type CreateReq struct {\n    g.Meta `path:"/user" method:"put" tags:"User" summary:"Create user"`\n    Name   string `v:"required|length:3,10" dc:"user name"`\n    Age    uint   `v:"required|between:18,200" dc:"user age"`\n}\ntype CreateRes struct {\n    Id int64 `json:"id" dc:"user id"`\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u8FD9\u91CC\u7684",(0,s.jsx)(n.code,{children:"required/length/between"}),"\u6821\u9A8C\u89C4\u5219\u5728\u8C03\u7528\u8DEF\u7531\u51FD\u6570",(0,s.jsx)(n.code,{children:"Create"}),"\u4E4B\u524D\u5C31\u5DF2\u7ECF\u7531",(0,s.jsx)(n.code,{children:"GoFrame"}),"\u6846\u67B6\u7684",(0,s.jsx)(n.code,{children:"Server"}),"\u81EA\u52A8\u6267\u884C\u4E86\u3002\n\u5982\u679C\u8BF7\u6C42\u53C2\u6570\u6821\u9A8C\u5931\u8D25\uFF0C\u4F1A\u7ACB\u5373\u8FD4\u56DE\u9519\u8BEF\uFF0C\u4E0D\u4F1A\u8FDB\u5165\u5230\u8DEF\u7531\u51FD\u6570\u3002",(0,s.jsx)(n.code,{children:"GoFrame"}),"\u6846\u67B6\u7684\u8FD9\u79CD\u673A\u5236\u6781\u5927\u5730\u7B80\u4FBF\u4E86\u5F00\u53D1\u6D41\u7A0B\uFF0C\n\u5F00\u53D1\u8005\u5728\u8FD9\u4E2A\u8DEF\u7531\u51FD\u6570\u4E2D\uFF0C\u4EC5\u9700\u8981\u5173\u6CE8\u4E1A\u52A1\u903B\u8F91\u5B9E\u73B0\u5373\u53EF\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"\u5F53\u7136\uFF0C\u5982\u679C\u6709\u4E00\u4E9B\u989D\u5916\u7684\u3001\u5B9A\u5236\u5316\u7684\u4E1A\u52A1\u903B\u8F91\u6821\u9A8C\uFF0C\u662F\u9700\u8981\u5728\u8DEF\u7531\u51FD\u6570\u4E2D\u81EA\u884C\u5B9E\u73B0\u7684\u54DF\u3002"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5220\u9664\u63A5\u53E3",children:"\u5220\u9664\u63A5\u53E3"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="internal/controller/user/user_v1_delete.go"',children:'package user\n\nimport (\n    "context"\n\n    "demo/api/user/v1"\n    "demo/internal/dao"\n)\n\nfunc (c *ControllerV1) Delete(ctx context.Context, req *v1.DeleteReq) (res *v1.DeleteRes, err error) {\n    _, err = dao.User.Ctx(ctx).WherePri(req.Id).Delete()\n    return\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5220\u9664\u903B\u8F91\u6BD4\u8F83\u7B80\u5355\uFF0C\u6211\u4EEC\u8FD9\u91CC\u7528\u5230\u4E00\u4E2A",(0,s.jsx)(n.code,{children:"WherePri"}),"\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u4F1A\u5C06\u7ED9\u5B9A\u7684\u53C2\u6570",(0,s.jsx)(n.code,{children:"req.Id"}),"\u4F5C\u4E3A\u4E3B\u952E\u8FDB\u884C",(0,s.jsx)(n.code,{children:"Where"}),"\u6761\u4EF6\u9650\u5236\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u66F4\u65B0\u63A5\u53E3",children:"\u66F4\u65B0\u63A5\u53E3"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="internal/controller/user/user_v1_update.go"',children:'package user\n\nimport (\n    "context"\n\n    "demo/api/user/v1"\n    "demo/internal/dao"\n    "demo/internal/model/do"\n)\n\nfunc (c *ControllerV1) Update(ctx context.Context, req *v1.UpdateReq) (res *v1.UpdateRes, err error) {\n    _, err = dao.User.Ctx(ctx).Data(do.User{\n        Name:   req.Name,\n        Status: req.Status,\n        Age:    req.Age,\n    }).WherePri(req.Id).Update()\n    return\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u66F4\u65B0\u63A5\u53E3\u4E5F\u6BD4\u8F83\u7B80\u5355\uFF0C\u9664\u4E86\u5DF2\u7ECF\u4ECB\u7ECD\u8FC7\u7684",(0,s.jsx)(n.code,{children:"WherePri"}),"\u65B9\u6CD5\uFF0C\u5728\u66F4\u65B0\u6570\u636E\u65F6\u4E5F\u9700\u8981\u901A\u8FC7",(0,s.jsx)(n.code,{children:"Data"}),"\u65B9\u6CD5\u4F20\u9012\u66F4\u65B0\u7684\u6570\u636E\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u67E5\u8BE2\u63A5\u53E3\u5355\u4E2A",children:"\u67E5\u8BE2\u63A5\u53E3\uFF08\u5355\u4E2A\uFF09"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="internal/controller/user/user_v1_get_one.go"',children:'package user\n\nimport (\n    "context"\n\n    "demo/api/user/v1"\n    "demo/internal/dao"\n)\n\nfunc (c *ControllerV1) GetOne(ctx context.Context, req *v1.GetOneReq) (res *v1.GetOneRes, err error) {\n    res = &v1.GetOneRes{}\n    err = dao.User.Ctx(ctx).WherePri(req.Id).Scan(&res.User)\n    return\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6570\u636E\u67E5\u8BE2\u63A5\u53E3\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86",(0,s.jsx)(n.code,{children:"Scan"}),"\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u5C06\u67E5\u8BE2\u5230\u7684\u5355\u6761\u6570\u636E\u8868\u8BB0\u5F55\u667A\u80FD\u5730\u6620\u5C04\u5230\u7ED3\u6784\u4F53\u5BF9\u8C61\u4E0A\u3002\u5927\u5BB6\u9700\u8981\u6CE8\u610F\u8FD9\u91CC\u7684",(0,s.jsx)(n.code,{children:"&res.User"}),"\u4E2D\u7684",(0,s.jsx)(n.code,{children:"User"}),"\u5C5E\u6027\u5BF9\u8C61\u5176\u5B9E\u662F\u6CA1\u6709\u521D\u59CB\u5316\u7684\uFF0C\u5176\u503C\u4E3A",(0,s.jsx)(n.code,{children:"nil"}),"\u3002\u5982\u679C\u67E5\u8BE2\u5230\u4E86\u6570\u636E\uFF0C",(0,s.jsx)(n.code,{children:"Scan"}),"\u65B9\u6CD5\u4F1A\u5BF9\u5176\u505A\u521D\u59CB\u5316\u5E76\u8D4B\u503C\uFF0C\u5982\u679C\u67E5\u8BE2\u4E0D\u5230\u6570\u636E\uFF0C\u90A3\u4E48",(0,s.jsx)(n.code,{children:"Scan"}),"\u65B9\u6CD5\u4EC0\u4E48\u90FD\u4E0D\u4F1A\u505A\uFF0C\u5176\u503C\u8FD8\u662F",(0,s.jsx)(n.code,{children:"nil"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u67E5\u8BE2\u63A5\u53E3\u5217\u8868",children:"\u67E5\u8BE2\u63A5\u53E3\uFF08\u5217\u8868\uFF09"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="internal/controller/user/user_v1_get_list.go"',children:'package user\n\nimport (\n    "context"\n\n    "demo/api/user/v1"\n    "demo/internal/dao"\n    "demo/internal/model/do"\n)\n\nfunc (c *ControllerV1) GetList(ctx context.Context, req *v1.GetListReq) (res *v1.GetListRes, err error) {\n    res = &v1.GetListRes{}\n    err = dao.User.Ctx(ctx).Where(do.User{\n        Age:    req.Age,\n        Status: req.Status,\n    }).Scan(&res.List)\n    return\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u67E5\u8BE2\u5217\u8868\u6570\u636E\u6211\u4EEC\u540C\u6837\u4F7F\u7528\u5230\u4E86",(0,s.jsx)(n.code,{children:"Scan"}),"\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u662F\u975E\u5E38\u5F3A\u5927\u7684\u3002\u540C\u67E5\u8BE2\u5355\u6761\u6570\u636E\u7684\u903B\u8F91\u4E00\u6837\uFF0C\u5B83\u4EC5\u4F1A\u5728\u67E5\u8BE2\u7684\u6570\u636E\u65F6\u624D\u4F1A\u521D\u59CB\u5316\u8FD9\u91CC\u7684",(0,s.jsx)(n.code,{children:"&res.List"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5B66\u4E60\u5C0F\u7ED3",children:"\u5B66\u4E60\u5C0F\u7ED3"}),"\n",(0,s.jsxs)(n.p,{children:["\u672C\u7AE0\u8282\u7684\u793A\u4F8B\u6E90\u7801\uFF1A",(0,s.jsx)(n.a,{href:"https://github.com/gogf/quick-demo/tree/main/internal/controller/user",children:"https://github.com/gogf/quick-demo/tree/main/internal/controller/user"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u4F7F\u7528",(0,s.jsx)(n.code,{children:"GoFrame"}),"\u6570\u636E\u5E93",(0,s.jsx)(n.code,{children:"ORM"}),"\u7EC4\u4EF6\u53EF\u4EE5\u975E\u5E38\u5FEB\u901F\u3001\u9AD8\u6548\u5730\u5B8C\u6210\u63A5\u53E3\u5F00\u53D1\u5DE5\u4F5C\u3002\u6574\u4E2A",(0,s.jsx)(n.code,{children:"CRUD"}),"\u63A5\u53E3\u5F00\u53D1\u4E0B\u6765\uFF0C\u5F00\u53D1\u8005\u9700\u8981\u5B9E\u73B0\u7684\u4E1A\u52A1\u903B\u8F91\u4EC5\u9700\u8981\u51E0\u884C\u4EE3\u7801\uD83D\uDE3C\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5F00\u53D1\u6548\u7387\u7684\u63D0\u5347\uFF0C\u9664\u4E86\u5F52\u529F\u4E8E\u811A\u624B\u67B6\u5DE5\u5177\u81EA\u52A8\u751F\u6210\u7684",(0,s.jsx)(n.code,{children:"dao"}),"\u548C",(0,s.jsx)(n.code,{children:"controller"}),"\u4EE3\u7801\u4E4B\u5916\uFF0C\u5F3A\u5927\u7684\u6570\u636E\u5E93",(0,s.jsx)(n.code,{children:"ORM"}),"\u7EC4\u4EF6\u4E5F\u662F\u529F\u4E0D\u53EF\u6CA1\u3002\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u4EEC\u5728\u5BF9\u6570\u636E\u5E93\u8868\u8FDB\u884C\u64CD\u4F5C\u65F6\uFF0C\u4EE3\u7801\u91CF\u975E\u5E38\u7B80\u6D01\u4F18\u96C5\uFF0C\u4F46\u5728\u6570\u636E\u5E93",(0,s.jsx)(n.code,{children:"ORM"}),"\u7EC4\u4EF6\u7684\u5185\u90E8\u8BBE\u8BA1\u4E2D\uFF0C\u6D89\u53CA\u5F88\u591A\u7CBE\u7EC6\u7684\u8BBE\u8BA1\u3001\u4E25\u683C\u7684\u4EE3\u7801\u6D4B\u8BD5\u3001\u5E74\u590D\u4E00\u5E74\u7684\u529F\u80FD\u8FED\u4EE3\u7684\u6C89\u6DC0\u7ED3\u679C\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u63A5\u53E3\u903B\u8F91\u5F00\u53D1\u5B8C\u4E86\uFF0C\u5728\u4E0B\u4E00\u6B65\uFF0C\u6211\u4EEC\u9700\u8981\u505A\u4E00\u4E9B\u6570\u636E\u5E93\u914D\u7F6E\u548C\u8DEF\u7531\u6CE8\u518C\u7684\u64CD\u4F5C\uFF0C\u540C\u6837\u4E5F\u662F\u975E\u5E38\u7B80\u4FBF\uFF0C\u4E00\u8D77\u770B\u770B\u5427\u3002"})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var t=r(667294);let s={},d=t.createContext(s);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);
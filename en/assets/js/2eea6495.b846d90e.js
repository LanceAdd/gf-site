"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["27510"],{281488:function(e,n,r){r.r(n),r.d(n,{metadata:()=>d,contentTitle:()=>s,default:()=>u,assets:()=>o,toc:()=>h,frontMatter:()=>c});var d=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-WhereWhereOrWhereNot","title":"ORM\u67E5\u8BE2-Where/WhereOr/WhereNot","description":"ORM \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5E38\u7528\u7684\u6761\u4EF6\u67E5\u8BE2\u65B9\u6CD5\uFF0C\u5E76\u4E14\u6761\u4EF6\u65B9\u6CD5\u652F\u6301\u591A\u79CD\u6570\u636E\u7C7B\u578B\u8F93\u5165\u3002","source":"@site/versioned_docs/version-2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-WhereWhereOrWhereNot.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-WhereWhereOrWhereNot","permalink":"/en/2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-WhereWhereOrWhereNot","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-WhereWhereOrWhereNot.md","tags":[],"version":"2.4.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"ORM\u67E5\u8BE2-Where/WhereOr/WhereNot","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u60B2\u89C2\u9501 & \u4E50\u89C2\u9501","permalink":"/en/2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u60B2\u89C2\u9501 & \u4E50\u89C2\u9501"},"next":{"title":"ORM\u67E5\u8BE2-All/One/Array/Value/Count","permalink":"/en/2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-AllOneArrayValueCount"}}'),l=r("785893"),i=r("250065");let c={title:"ORM\u67E5\u8BE2-Where/WhereOr/WhereNot",sidebar_position:0,hide_title:!0},s=void 0,o={},h=[{value:"<code>Where/WhereOr</code> \u67E5\u8BE2\u6761\u4EF6",id:"wherewhereor-\u67E5\u8BE2\u6761\u4EF6",level:2},{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:3},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:3},{value:"<code>Wheref</code> \u683C\u5F0F\u5316\u6761\u4EF6\u5B57\u7B26\u4E32",id:"wheref-\u683C\u5F0F\u5316\u6761\u4EF6\u5B57\u7B26\u4E32",level:2},{value:"<code>WherePri</code> \u652F\u6301\u4E3B\u952E\u7684\u67E5\u8BE2\u6761\u4EF6",id:"wherepri-\u652F\u6301\u4E3B\u952E\u7684\u67E5\u8BE2\u6761\u4EF6",level:2},{value:"<code>WhereBuilder</code> \u590D\u6742\u6761\u4EF6\u7EC4\u5408",id:"wherebuilder-\u590D\u6742\u6761\u4EF6\u7EC4\u5408",level:2},{value:"\u5BF9\u8C61\u521B\u5EFA",id:"\u5BF9\u8C61\u521B\u5EFA",level:3},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B-1",level:3},{value:"\u6CE8\u610F\u4E8B\u9879\uFF1A\u7A7A\u6570\u7EC4\u6761\u4EF6\u5F15\u53D1\u7684 <code>0=1</code> \u6761\u4EF6",id:"\u6CE8\u610F\u4E8B\u9879\u7A7A\u6570\u7EC4\u6761\u4EF6\u5F15\u53D1\u7684-01-\u6761\u4EF6",level:2}];function t(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"ORM"})," \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5E38\u7528\u7684\u6761\u4EF6\u67E5\u8BE2\u65B9\u6CD5\uFF0C\u5E76\u4E14\u6761\u4EF6\u65B9\u6CD5\u652F\u6301\u591A\u79CD\u6570\u636E\u7C7B\u578B\u8F93\u5165\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"func (m *Model) Where(where interface{}, args...interface{}) *Model\nfunc (m *Model) Wheref(format string, args ...interface{}) *Model\nfunc (m *Model) WherePri(where interface{}, args ...interface{}) *Model\nfunc (m *Model) WhereBetween(column string, min, max interface{}) *Model\nfunc (m *Model) WhereLike(column string, like interface{}) *Model\nfunc (m *Model) WhereIn(column string, in interface{}) *Model\nfunc (m *Model) WhereNull(columns ...string) *Model\nfunc (m *Model) WhereLT(column string, value interface{}) *Model\nfunc (m *Model) WhereLTE(column string, value interface{}) *Model\nfunc (m *Model) WhereGT(column string, value interface{}) *Model\nfunc (m *Model) WhereGTE(column string, value interface{}) *Model\n\nfunc (m *Model) WhereNotBetween(column string, min, max interface{}) *Model\nfunc (m *Model) WhereNotLike(column string, like interface{}) *Model\nfunc (m *Model) WhereNotIn(column string, in interface{}) *Model\nfunc (m *Model) WhereNotNull(columns ...string) *Model\n\nfunc (m *Model) WhereOr(where interface{}, args ...interface{}) *Model\nfunc (m *Model) WhereOrBetween(column string, min, max interface{}) *Model\nfunc (m *Model) WhereOrLike(column string, like interface{}) *Model\nfunc (m *Model) WhereOrIn(column string, in interface{}) *Model\nfunc (m *Model) WhereOrNull(columns ...string) *Model\nfunc (m *Model) WhereOrLT(column string, value interface{}) *Model\nfunc (m *Model) WhereOrLTE(column string, value interface{}) *Model\nfunc (m *Model) WhereOrGT(column string, value interface{}) *Model\nfunc (m *Model) WhereOrGTE(column string, value interface{}) *Model\n\nfunc (m *Model) WhereOrNotBetween(column string, min, max interface{}) *Model\nfunc (m *Model) WhereOrNotLike(column string, like interface{}) *Model\nfunc (m *Model) WhereOrNotIn(column string, in interface{}) *Model\nfunc (m *Model) WhereOrNotNull(columns ...string) *Model\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u4E0B\u9762\u6211\u4EEC\u5BF9\u5176\u4E2D\u7684\u51E0\u4E2A\u5E38\u7528\u65B9\u6CD5\u505A\u7B80\u5355\u4ECB\u7ECD\uFF0C\u5176\u4ED6\u6761\u4EF6\u67E5\u8BE2\u65B9\u6CD5\u7528\u6CD5\u7C7B\u4F3C\u3002"}),"\n",(0,l.jsxs)(n.h2,{id:"wherewhereor-\u67E5\u8BE2\u6761\u4EF6",children:[(0,l.jsx)(n.code,{children:"Where/WhereOr"})," \u67E5\u8BE2\u6761\u4EF6"]}),"\n",(0,l.jsx)(n.h3,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,l.jsxs)(n.p,{children:["\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u7528\u4E8E\u4F20\u9012\u67E5\u8BE2\u6761\u4EF6\u53C2\u6570\uFF0C\u652F\u6301\u7684\u53C2\u6570\u4E3A\u4EFB\u610F\u7684 ",(0,l.jsx)(n.code,{children:"string/map/slice/struct/*struct"})," \u7C7B\u578B\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Where"})," \u6761\u4EF6\u53C2\u6570\u63A8\u8350\u4F7F\u7528\u5B57\u7B26\u4E32\u7684\u53C2\u6570\u4F20\u9012\u65B9\u5F0F\uFF08\u5E76\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"?"})," \u5360\u4F4D\u7B26\u9884\u5904\u7406\uFF09\uFF0C\u56E0\u4E3A ",(0,l.jsx)(n.code,{children:"map"}),"/ ",(0,l.jsx)(n.code,{children:"struct"})," \u7C7B\u578B\u4F5C\u4E3A\u67E5\u8BE2\u53C2\u6570\u65E0\u6CD5\u4FDD\u8BC1\u987A\u5E8F\u6027\uFF0C\u4E14\u5728\u90E8\u5206\u60C5\u51B5\u4E0B\uFF08\u6570\u636E\u5E93\u6709\u65F6\u4F1A\u5E2E\u52A9\u4F60\u81EA\u52A8\u8FDB\u884C\u67E5\u8BE2\u7D22\u5F15\u4F18\u5316\uFF09\uFF0C\u6570\u636E\u5E93\u7684\u7D22\u5F15\u548C\u4F60\u4F20\u9012\u7684\u67E5\u8BE2\u6761\u4EF6\u987A\u5E8F\u6709\u4E00\u5B9A\u5173\u7CFB\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5F53\u4F7F\u7528\u591A\u4E2A ",(0,l.jsx)(n.code,{children:"Where"})," \u65B9\u6CD5\u8FDE\u63A5\u67E5\u8BE2\u6761\u4EF6\u65F6\uFF0C\u591A\u4E2A\u6761\u4EF6\u4E4B\u95F4\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"And"})," \u8FDB\u884C\u8FDE\u63A5\u3002 \u6B64\u5916\uFF0C\u5F53\u5B58\u5728\u591A\u4E2A\u67E5\u8BE2\u6761\u4EF6\u65F6\uFF0C ",(0,l.jsx)(n.code,{children:"gdb"})," \u4F1A\u9ED8\u8BA4\u5C06\u591A\u4E2A\u6761\u4EF6\u5206\u522B\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"()"})," \u7B26\u53F7\u8FDB\u884C\u5305\u542B\uFF0C\u8FD9\u79CD\u8BBE\u8BA1\u53EF\u4EE5\u975E\u5E38\u53CB\u597D\u5730\u652F\u6301\u67E5\u8BE2\u6761\u4EF6\u5206\u7EC4\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'// WHERE `uid`=1\nWhere("uid=1")\nWhere("uid", 1)\nWhere("uid=?", 1)\nWhere(g.Map{"uid" : 1})\n// WHERE `uid` <= 1000 AND `age` >= 18\nWhere(g.Map{\n    "uid <=" : 1000,\n    "age >=" : 18,\n})\n\n// WHERE (`uid` <= 1000) AND (`age` >= 18)\nWhere("uid <=?", 1000).Where("age >=?", 18)\n\n// WHERE `level`=1 OR `money`>=1000000\nWhere("level=? OR money >=?", 1, 1000000)\n\n// WHERE (`level`=1) OR (`money`>=1000000)\nWhere("level", 1).WhereOr("money >=", 1000000)\n\n// WHERE `uid` IN(1,2,3)\nWhere("uid IN(?)", g.Slice{1,2,3})\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"struct"})," \u53C2\u6570\u7684\u793A\u4F8B\uFF0C\u5176\u4E2D ",(0,l.jsx)(n.code,{children:"orm"})," \u7684 ",(0,l.jsx)(n.code,{children:"tag"})," \u7528\u4E8E\u6307\u5B9A ",(0,l.jsx)(n.code,{children:"struct"})," \u5C5E\u6027\u4E0E\u8868\u5B57\u6BB5\u7684\u6620\u5C04\u5173\u7CFB\uFF1A"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'type Condition struct{\n    Sex int `orm:"sex"`\n    Age int `orm:"age"`\n}\nWhere(Condition{1, 18})\n// WHERE `sex`=1 AND `age`=18\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Where + string"}),"\uFF0C\u6761\u4EF6\u53C2\u6570\u4F7F\u7528\u5B57\u7B26\u4E32\u548C\u9884\u5904\u7406\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'// \u67E5\u8BE2\u591A\u6761\u8BB0\u5F55\u5E76\u4F7F\u7528Limit\u5206\u9875\n// SELECT * FROM user WHERE uid>1 LIMIT 0,10\ng.Model("user").Where("uid > ?", 1).Limit(0, 10).All()\n\n// \u4F7F\u7528Fields\u65B9\u6CD5\u67E5\u8BE2\u6307\u5B9A\u5B57\u6BB5\n// \u672A\u4F7F\u7528Fields\u65B9\u6CD5\u6307\u5B9A\u67E5\u8BE2\u5B57\u6BB5\u65F6\uFF0C\u9ED8\u8BA4\u67E5\u8BE2\u4E3A*\n// SELECT uid,name FROM user WHERE uid>1 LIMIT 0,10\ng.Model("user").Fields("uid,name").Where("uid > ?", 1).Limit(0, 10).All()\n\n// \u652F\u6301\u591A\u79CDWhere\u6761\u4EF6\u53C2\u6570\u7C7B\u578B\n// SELECT * FROM user WHERE uid=1 LIMIT 1\ng.Model("user").Where("uid=1").One()\ng.Model("user").Where("uid", 1).One()\ng.Model("user").Where("uid=?", 1).One()\n\n// SELECT * FROM user WHERE (uid=1) AND (name=\'john\') LIMIT 1\ng.Model("user").Where("uid", 1).Where("name", "john").One()\ng.Model("user").Where("uid=?", 1).Where("name=?", "john").One()\n\n// SELECT * FROM user WHERE (uid=1) OR (name=\'john\') LIMIT 1\ng.Model("user").Where("uid=?", 1).WhereOr("name=?", "john").One()\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Where + slice"}),"\uFF0C\u9884\u5904\u7406\u53C2\u6570\u53EF\u76F4\u63A5\u901A\u8FC7 ",(0,l.jsx)(n.code,{children:"slice"})," \u53C2\u6570\u7ED9\u5B9A\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM user WHERE age>18 AND name like \'%john%\'\ng.Model("user").Where("age>? AND name like ?", g.Slice{18, "%john%"}).All()\n\n// SELECT * FROM user WHERE status=1\ng.Model("user").Where("status=?", g.Slice{1}).All()\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Where + map"}),"\uFF0C\u6761\u4EF6\u53C2\u6570\u4F7F\u7528\u4EFB\u610F ",(0,l.jsx)(n.code,{children:"map"})," \u7C7B\u578B\u4F20\u9012\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM user WHERE uid=1 AND name=\'john\' LIMIT 1\ng.Model("user").Where(g.Map{"uid" : 1, "name" : "john"}).One()\n\n// SELECT * FROM user WHERE uid=1 AND age>18 LIMIT 1\ng.Model("user").Where(g.Map{"uid" : 1, "age>" : 18}).One()\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Where + struct/*struct"}),"\uFF0C ",(0,l.jsx)(n.code,{children:"struct"})," \u6807\u7B7E\u652F\u6301 ",(0,l.jsx)(n.code,{children:"orm/json"}),"\uFF0C\u6620\u5C04\u5C5E\u6027\u5230\u5B57\u6BB5\u540D\u79F0\u5173\u7CFB\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'type User struct {\n    Id       int    `json:"uid"`\n    UserName string `orm:"name"`\n}\n// SELECT * FROM user WHERE uid =1 AND name=\'john\' LIMIT 1\ng.Model("user").Where(User{ Id : 1, UserName : "john"}).One()\n\n// SELECT * FROM user WHERE uid =1 LIMIT 1\ng.Model("user").Where(&User{ Id : 1}).One()\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u4EE5\u4E0A\u7684\u67E5\u8BE2\u6761\u4EF6\u76F8\u5BF9\u6BD4\u8F83\u7B80\u5355\uFF0C\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u6BD4\u8F83\u590D\u6742\u7684\u67E5\u8BE2\u793A\u4F8B\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'condition := g.Map{\n    "title like ?"         : "%\u4E5D\u5BE8%",\n    "online"               : 1,\n    "hits between ? and ?" : g.Slice{1, 10},\n    "exp > 0"              : nil,\n    "category"             : g.Slice{100, 200},\n}\n// SELECT * FROM article WHERE title like \'%\u4E5D\u5BE8%\' AND online=1 AND hits between 1 and 10 AND exp > 0 AND category IN(100,200)\ng.Model("article").Where(condition).All()\n'})}),"\n",(0,l.jsxs)(n.h2,{id:"wheref-\u683C\u5F0F\u5316\u6761\u4EF6\u5B57\u7B26\u4E32",children:[(0,l.jsx)(n.code,{children:"Wheref"})," \u683C\u5F0F\u5316\u6761\u4EF6\u5B57\u7B26\u4E32"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u67D0\u4E9B\u573A\u666F\u4E2D\uFF0C\u5728\u8F93\u5165\u5E26\u6709\u5B57\u7B26\u4E32\u7684\u6761\u4EF6\u8BED\u53E5\u65F6\uFF0C\u5F80\u5F80\u9700\u8981\u7ED3\u5408 ",(0,l.jsx)(n.code,{children:"fmt.Sprintf"})," \u6765\u683C\u5F0F\u5316\u6761\u4EF6\uFF08\u5F53\u7136\uFF0C\u6CE8\u610F\u5728\u5B57\u7B26\u4E32\u4E2D\u4F7F\u7528\u5360\u4F4D\u7B26\u4EE3\u66FF\u53D8\u91CF\u7684\u8F93\u5165\u800C\u4E0D\u662F\u76F4\u63A5\u5C06\u53D8\u91CF\u683C\u5F0F\u5316\uFF09\uFF0C\u56E0\u6B64\u6211\u4EEC\u63D0\u4F9B\u4E86 ",(0,l.jsx)(n.code,{children:"Where+fmt.Sprintf"})," \u7ED3\u5408\u7684\u4FBF\u6377\u65B9\u6CD5 ",(0,l.jsx)(n.code,{children:"Wheref"}),"\u3002\u4F7F\u7528\u793A\u4F8B\uFF1A"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"// WHERE score > 100 and status in('succeeded','completed')\nWheref(`score > ? and status in (?)`, 100, g.Slice{\"succeeded\", \"completed\"})\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"wherepri-\u652F\u6301\u4E3B\u952E\u7684\u67E5\u8BE2\u6761\u4EF6",children:[(0,l.jsx)(n.code,{children:"WherePri"})," \u652F\u6301\u4E3B\u952E\u7684\u67E5\u8BE2\u6761\u4EF6"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"WherePri"})," \u65B9\u6CD5\u7684\u529F\u80FD\u540C ",(0,l.jsx)(n.code,{children:"Where"}),"\uFF0C\u4F46\u63D0\u4F9B\u4E86\u5BF9\u8868\u4E3B\u952E\u7684\u667A\u80FD\u8BC6\u522B\uFF0C\u5E38\u7528\u4E8E\u6839\u636E\u4E3B\u952E\u7684\u4FBF\u6377\u6570\u636E\u67E5\u8BE2\u3002\u5047\u5982 ",(0,l.jsx)(n.code,{children:"user"})," \u8868\u7684\u4E3B\u952E\u4E3A ",(0,l.jsx)(n.code,{children:"uid"}),"\uFF0C\u6211\u4EEC\u6765\u770B\u4E00\u4E0B ",(0,l.jsx)(n.code,{children:"Where"})," \u4E0E ",(0,l.jsx)(n.code,{children:"WherePri"})," \u7684\u533A\u522B\uFF1A"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'// WHERE `uid`=1\nWhere("uid", 1)\nWherePri(1)\n\n// WHERE `uid` IN(1,2,3)\nWhere("uid", g.Slice{1,2,3})\nWherePri(g.Slice{1,2,3})\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u5F53\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"WherePri"})," \u65B9\u6CD5\u4E14\u7ED9\u5B9A\u53C2\u6570\u4E3A\u5355\u4E00\u7684\u53C2\u6570\u57FA\u672C\u7C7B\u578B\u6216\u8005 ",(0,l.jsx)(n.code,{children:"slice"})," \u7C7B\u578B\u65F6\uFF0C\u5C06\u4F1A\u88AB\u8BC6\u522B\u4E3A\u4E3B\u952E\u7684\u67E5\u8BE2\u6761\u4EF6\u503C\u3002"]}),"\n",(0,l.jsxs)(n.h2,{id:"wherebuilder-\u590D\u6742\u6761\u4EF6\u7EC4\u5408",children:[(0,l.jsx)(n.code,{children:"WhereBuilder"})," \u590D\u6742\u6761\u4EF6\u7EC4\u5408"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"WhereBuilder"})," \u7528\u4EE5\u7EC4\u5408\u751F\u6210\u590D\u6742\u7684 ",(0,l.jsx)(n.code,{children:"Where"})," \u6761\u4EF6\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u5BF9\u8C61\u521B\u5EFA",children:"\u5BF9\u8C61\u521B\u5EFA"}),"\n",(0,l.jsxs)(n.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"Model"})," \u7684 ",(0,l.jsx)(n.code,{children:"Builder"})," \u65B9\u6CD5\u751F\u6210 ",(0,l.jsx)(n.code,{children:"WhereBuilder"})," \u5BF9\u8C61\u3002\u8BE5\u65B9\u6CD5\u5B9A\u4E49\u5982\u4E0B\uFF1A"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"// Builder creates and returns a WhereBuilder.\nfunc (m *Model) Builder() *WhereBuilder\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u4F7F\u7528\u793A\u4F8B-1",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM `user` WHERE `id`=1 AND `address`="USA" AND (`status`="active" OR `status`="pending")\nm := g.Model("user")\nall, err := m.Where("id", 1).Where("address", "USA").Where(\n    m.Builder().Where("status", "active").WhereOr("status", "pending"),\n).All()\n'})}),"\n",(0,l.jsxs)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879\u7A7A\u6570\u7EC4\u6761\u4EF6\u5F15\u53D1\u7684-01-\u6761\u4EF6",children:["\u6CE8\u610F\u4E8B\u9879\uFF1A\u7A7A\u6570\u7EC4\u6761\u4EF6\u5F15\u53D1\u7684 ",(0,l.jsx)(n.code,{children:"0=1"})," \u6761\u4EF6"]}),"\n",(0,l.jsx)(n.p,{children:"\u6211\u4EEC\u6765\u770B\u4F8B\u5B50\uFF1A"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"SQL1"}),"\uFF1A"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'m := g.Model("auth")\nm.Where("status", g.Slice{"permitted", "inherited"}).Where("uid", 1).All()\n// SELECT * FROM `auth` WHERE (`status` IN(\'permitted\',\'inherited\')) AND (`uid`=1)\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"SQL2"}),"\uFF1A"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'m := g.Model("auth")\nm.Where("status", g.Slice{}).Where("uid", 1).All()\n// SELECT * FROM `auth` WHERE (0=1) AND (`uid`=1)\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u5F53\u7ED9\u5B9A\u7684\u6570\u7EC4\u6761\u4EF6\u4E3A\u7A7A\u6570\u7EC4\u65F6\uFF0C\u751F\u6210\u7684 ",(0,l.jsx)(n.code,{children:"SQL"})," \u51FA\u73B0\u4E86 ",(0,l.jsx)(n.code,{children:"0=1"})," \u7684\u65E0\u6548\u6761\u4EF6\uFF0C\u8FD9\u662F\u4E3A\u4EC0\u4E48\u5462\uFF1F"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u5F00\u53D1\u8005\u6CA1\u6709\u663E\u793A\u58F0\u660E\u53EF\u4EE5\u8FC7\u6EE4\u7A7A\u6570\u7EC4\u6761\u4EF6\u65F6\uFF0C ",(0,l.jsx)(n.code,{children:"ORM"})," \u4E0D\u4F1A\u81EA\u52A8\u8FC7\u6EE4\u7A7A\u6570\u7EC4\u6761\u4EF6\uFF0C\u4EE5\u907F\u514D\u7A0B\u5E8F\u903B\u8F91\u7ED5\u8FC7 ",(0,l.jsx)(n.code,{children:"SQL"})," \u9650\u5236\u6761\u4EF6\uFF0C\u5F15\u53D1\u4E0D\u53EF\u9884\u77E5\u7684\u4E1A\u52A1\u95EE\u9898\u3002\u5982\u679C\u5F00\u53D1\u8005\u786E\u5B9A ",(0,l.jsx)(n.code,{children:"SQL"})," \u9650\u5236\u6761\u4EF6\u662F\u53EF\u4EE5\u8FC7\u6EE4\u7684\uFF0C\u90A3\u4E48\u53EF\u4EE5\u663E\u793A\u8C03\u7528 ",(0,l.jsx)(n.code,{children:"OmitEmpty/OmitEmptyWhere"})," \u65B9\u6CD5\u6765\u6267\u884C\u7A7A\u6761\u4EF6\u8FC7\u6EE4\uFF0C\u5982\u4E0B\uFF1A"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'m := g.Model("auth")\nm.Where("status", g.Slice{}).Where("uid", 1).OmitEmpty().All()\n// SELECT * FROM `auth` WHERE `uid`=1\n'})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return c}});var d=r(667294);let l={},i=d.createContext(l);function c(e){let n=d.useContext(i);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);
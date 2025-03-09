"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["70381"],{557301:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>t,default:()=>a,assets:()=>u,toc:()=>l,frontMatter:()=>s});var r=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-LeftJoinRightJoinInnerJoin","title":"ORM\u67E5\u8BE2-LeftJoin/RightJoin/InnerJoin","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u5982\u4F55\u4F7F\u7528ORM\u8FDB\u884CLeftJoin\u3001RightJoin\u548CInnerJoin\u67E5\u8BE2\uFF0C\u5305\u62EC\u4F7F\u7528\u4E0D\u540C\u7684\u5173\u8054\u67E5\u8BE2\u65B9\u6CD5\u53CA\u5176\u5E94\u7528\u573A\u666F\u3002\u6587\u4E2D\u5F3A\u8C03\u5728\u5927\u6570\u636E\u91CF\u548C\u9AD8\u5E76\u53D1\u73AF\u5883\u4E2D\u8C28\u614E\u4F7F\u7528Join\u64CD\u4F5C\uFF0C\u63A8\u8350\u4F7F\u7528\u4EE3\u7801\u5B9E\u73B0\u6570\u636E\u805A\u5408\u3002\u6B64\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u901A\u8FC7\u81EA\u5B9A\u4E49\u6570\u636E\u8868\u522B\u540D\u548C\u5B57\u6BB5\u64CD\u4F5C\u7B26\u8FDB\u884Cjoin\u67E5\u8BE2\u7684\u793A\u4F8B\uFF0C\u5E76\u7ED3\u5408dao\u5C55\u793A\u5177\u4F53\u7684\u4F7F\u7528\u65B9\u6CD5\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-LeftJoinRightJoinInnerJoin.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2","slug":"/docs/core/gdb-chaining-query-join","permalink":"/2.7.x/docs/core/gdb-chaining-query-join","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-LeftJoinRightJoinInnerJoin.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/core/gdb-chaining-query-join","title":"ORM\u67E5\u8BE2-LeftJoin/RightJoin/InnerJoin","sidebar_position":5,"hide_title":true,"keywords":["ORM\u67E5\u8BE2","LeftJoin","RightJoin","InnerJoin","GoFrame","\u5173\u8054\u67E5\u8BE2","\u6570\u636E\u8868\u522B\u540D","\u5B57\u6BB5\u64CD\u4F5C\u7B26","\u8054\u8868\u67E5\u8BE2","\u6570\u636E\u805A\u5408"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u5982\u4F55\u4F7F\u7528ORM\u8FDB\u884CLeftJoin\u3001RightJoin\u548CInnerJoin\u67E5\u8BE2\uFF0C\u5305\u62EC\u4F7F\u7528\u4E0D\u540C\u7684\u5173\u8054\u67E5\u8BE2\u65B9\u6CD5\u53CA\u5176\u5E94\u7528\u573A\u666F\u3002\u6587\u4E2D\u5F3A\u8C03\u5728\u5927\u6570\u636E\u91CF\u548C\u9AD8\u5E76\u53D1\u73AF\u5883\u4E2D\u8C28\u614E\u4F7F\u7528Join\u64CD\u4F5C\uFF0C\u63A8\u8350\u4F7F\u7528\u4EE3\u7801\u5B9E\u73B0\u6570\u636E\u805A\u5408\u3002\u6B64\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u901A\u8FC7\u81EA\u5B9A\u4E49\u6570\u636E\u8868\u522B\u540D\u548C\u5B57\u6BB5\u64CD\u4F5C\u7B26\u8FDB\u884Cjoin\u67E5\u8BE2\u7684\u793A\u4F8B\uFF0C\u5E76\u7ED3\u5408dao\u5C55\u793A\u5177\u4F53\u7684\u4F7F\u7528\u65B9\u6CD5\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u67E5\u8BE2-ScanAndCount","permalink":"/2.7.x/docs/core/gdb-chaining-query-scan-and-count"},"next":{"title":"ORM\u67E5\u8BE2-Group/Order/Having","permalink":"/2.7.x/docs/core/gdb-chaining-query-group-order-having"}}'),o=i("785893"),d=i("250065");let s={slug:"/docs/core/gdb-chaining-query-join",title:"ORM\u67E5\u8BE2-LeftJoin/RightJoin/InnerJoin",sidebar_position:5,hide_title:!0,keywords:["ORM\u67E5\u8BE2","LeftJoin","RightJoin","InnerJoin","GoFrame","\u5173\u8054\u67E5\u8BE2","\u6570\u636E\u8868\u522B\u540D","\u5B57\u6BB5\u64CD\u4F5C\u7B26","\u8054\u8868\u67E5\u8BE2","\u6570\u636E\u805A\u5408"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u5982\u4F55\u4F7F\u7528ORM\u8FDB\u884CLeftJoin\u3001RightJoin\u548CInnerJoin\u67E5\u8BE2\uFF0C\u5305\u62EC\u4F7F\u7528\u4E0D\u540C\u7684\u5173\u8054\u67E5\u8BE2\u65B9\u6CD5\u53CA\u5176\u5E94\u7528\u573A\u666F\u3002\u6587\u4E2D\u5F3A\u8C03\u5728\u5927\u6570\u636E\u91CF\u548C\u9AD8\u5E76\u53D1\u73AF\u5883\u4E2D\u8C28\u614E\u4F7F\u7528Join\u64CD\u4F5C\uFF0C\u63A8\u8350\u4F7F\u7528\u4EE3\u7801\u5B9E\u73B0\u6570\u636E\u805A\u5408\u3002\u6B64\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u901A\u8FC7\u81EA\u5B9A\u4E49\u6570\u636E\u8868\u522B\u540D\u548C\u5B57\u6BB5\u64CD\u4F5C\u7B26\u8FDB\u884Cjoin\u67E5\u8BE2\u7684\u793A\u4F8B\uFF0C\u5E76\u7ED3\u5408dao\u5C55\u793A\u5177\u4F53\u7684\u4F7F\u7528\u65B9\u6CD5\u3002"},t=void 0,u={},l=[{value:"<code>LeftJoin/RightJoin/InnerJoin</code>",id:"leftjoinrightjoininnerjoin",level:2},{value:"\u81EA\u5B9A\u4E49\u6570\u636E\u8868\u522B\u540D",id:"\u81EA\u5B9A\u4E49\u6570\u636E\u8868\u522B\u540D",level:2},{value:"<code>LeftJoinOnFields/RightJoinOnFields/InnerJoinOnFields</code>",id:"leftjoinonfieldsrightjoinonfieldsinnerjoinonfields",level:2},{value:"\u7ED3\u5408 <code>dao</code> \u4F7F\u7528\u793A\u4F8B",id:"\u7ED3\u5408-dao-\u4F7F\u7528\u793A\u4F8B",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"leftjoinrightjoininnerjoin",children:(0,o.jsx)(n.code,{children:"LeftJoin/RightJoin/InnerJoin"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"LeftJoin"})," \u5DE6\u5173\u8054\u67E5\u8BE2\uFF1B"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"RightJoin"})," \u53F3\u5173\u8054\u67E5\u8BE2\uFF1B"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"InnerJoin"})," \u5185\u5173\u8054\u67E5\u8BE2\uFF1B"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["\u5176\u5B9E\u6211\u4EEC\u5E76\u4E0D\u63A8\u8350\u4F7F\u7528 ",(0,o.jsx)(n.code,{children:"Join"})," \u8FDB\u884C\u8054\u8868\u67E5\u8BE2\uFF0C\u7279\u522B\u662F\u5728\u6570\u636E\u91CF\u6BD4\u8F83\u5927\u3001\u5E76\u53D1\u8BF7\u6C42\u91CF\u6BD4\u8F83\u9AD8\u7684\u573A\u666F\u4E2D\uFF0C\u5BB9\u6613\u4EA7\u751F\u6027\u80FD\u95EE\u9898\uFF0C\u4E5F\u5BB9\u6613\u63D0\u9AD8\u7EF4\u62A4\u7684\u590D\u6742\u5EA6\u3002\u5EFA\u8BAE\u60A8\u5728\u786E\u5B9A\u6709\u6B64\u5FC5\u8981\u7684\u573A\u666F\u4E0B\u4F7F\u7528\u3002\n\u6B64\u5916\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u53C2\u8003\n",(0,o.jsx)(n.a,{href:"/2.7.x/docs/core/gdb-chaining-relation-scan-list",children:"ORM\u94FE\u5F0F\u64CD\u4F5C-\u6A21\u578B\u5173\u8054"}),"\n\u7AE0\u8282\uFF0C\u6570\u636E\u5E93\u53EA\u8D1F\u8D23\u5B58\u50A8\u6570\u636E\u548C\u7B80\u5355\u7684\u5355\u8868\u64CD\u4F5C\uFF0C\u901A\u8FC7 ",(0,o.jsx)(n.code,{children:"ORM"})," \u63D0\u4F9B\u7684\u529F\u80FD\u5728\u4EE3\u7801\u5C42\u9762\u5B9E\u73B0\u6570\u636E\u805A\u5408\u3002"]})}),"\n",(0,o.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// \u67E5\u8BE2\u7B26\u5408\u6761\u4EF6\u7684\u5355\u6761\u8BB0\u5F55(\u7B2C\u4E00\u6761)\n// SELECT u.*,ud.site FROM user u LEFT JOIN user_detail ud ON u.uid=ud.uid WHERE u.uid=1 LIMIT 1\ng.Model("user u").LeftJoin("user_detail ud", "u.uid=ud.uid").Fields("u.*,ud.site").Where("u.uid", 1).One()\n\n// \u67E5\u8BE2\u6307\u5B9A\u5B57\u6BB5\u503C\n// SELECT ud.site FROM user u RIGHT JOIN user_detail ud ON u.uid=ud.uid WHERE u.uid=1 LIMIT 1\ng.Model("user u").RightJoin("user_detail ud", "u.uid=ud.uid").Fields("ud.site").Where("u.uid", 1).Value()\n\n// \u5206\u7EC4\u53CA\u6392\u5E8F\n// SELECT u.*,ud.city FROM user u INNER JOIN user_detail ud ON u.uid=ud.uid GROUP BY city ORDER BY register_time asc\ng.Model("user u").InnerJoin("user_detail ud", "u.uid=ud.uid").Fields("u.*,ud.city").Group("city").Order("register_time asc").All()\n\n// \u4E0D\u4F7F\u7528join\u7684\u8054\u8868\u67E5\u8BE2\n// SELECT u.*,ud.city FROM user u,user_detail ud WHERE u.uid=ud.uid\ng.Model("user u,user_detail ud").Where("u.uid=ud.uid").Fields("u.*,ud.city").All()\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u81EA\u5B9A\u4E49\u6570\u636E\u8868\u522B\u540D",children:"\u81EA\u5B9A\u4E49\u6570\u636E\u8868\u522B\u540D"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM `user` AS u LEFT JOIN `user_detail` as ud ON(ud.id=u.id) WHERE u.id=1 LIMIT 1\ng.Model("user", "u").LeftJoin("user_detail", "ud", "ud.id=u.id").Where("u.id", 1).One()\ng.Model("user").As("u").LeftJoin("user_detail", "ud", "ud.id=u.id").Where("u.id", 1).One()\n'})}),"\n",(0,o.jsx)(n.h2,{id:"leftjoinonfieldsrightjoinonfieldsinnerjoinonfields",children:(0,o.jsx)(n.code,{children:"LeftJoinOnFields/RightJoinOnFields/InnerJoinOnFields"})}),"\n",(0,o.jsx)(n.p,{children:"LeftJoinOnFields/RightJoinOnFields/InnerJoinOnFields \u8FD9\u4E09\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u6307\u5B9A\u5B57\u6BB5\u548C\u64CD\u4F5C\u7B26\u8FDB\u884C join \u67E5\u8BE2\uFF0C\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// \u67E5\u8BE2\u7B26\u5408\u6761\u4EF6\u7684\u5355\u6761\u8BB0\u5F55(\u7B2C\u4E00\u6761)\n// SELECT user.*,user_detail.address FROM user LEFT JOIN user_detail ON (user.id = user_detail.uid) WHERE user.id=1 LIMIT 1\ng.Model("user").LeftJoinOnFields("user_detail", "id", "=", "uid").Fields("user.*,user_detail.address").Where("id", 1).One()\n\n// \u67E5\u8BE2\u591A\u6761\u8BB0\u5F55\n// SELECT user.*,user_detail.address FROM user RIGHT JOIN user_detail ON (user.id = user_detail.uid)\ng.Model("user").RightJoinOnFields("user_detail", "id", "=", "uid").Fields("user.*,user_detail.address").All()\n'})}),"\n",(0,o.jsxs)(n.h2,{id:"\u7ED3\u5408-dao-\u4F7F\u7528\u793A\u4F8B",children:["\u7ED3\u5408 ",(0,o.jsx)(n.code,{children:"dao"})," \u4F7F\u7528\u793A\u4F8B"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// SELECT resource_task_schedule.id,...,time_window.time_window\n// FROM `resource_task_schedule`\n// LEFT JOIN `time_window` ON (`resource_task_schedule`.`resource_id`=`time_window`.`resource_id`)\n// WHERE (time_window.`status`="valid") AND (`time_window`.`start_time` <= 3600)\nvar (\n    orm                = dao.ResourceTaskSchedule.Ctx(ctx)\n    tsTable            = dao.ResourceTaskSchedule.Table()\n    tsCls              = dao.ResourceTaskSchedule.Columns()\n    twTable            = dao.TimeWindow.Table()\n    twCls              = dao.TimeWindow.Columns()\n    scheduleItems      []scheduleItem\n)\norm = orm.FieldsPrefix(tsTable, tsCls)\norm = orm.FieldsPrefix(twTable, twCls.TimeWindow)\norm = orm.LeftJoinOnField(twTable, twCls.ResourceId)\norm = orm.WherePrefix(twTable, twCls.Status, "valid")\norm = orm.WherePrefixLTE(twTable, twCls.StartTime, 3600)\nerr = orm.Scan(&scheduleItems)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// SELECT DISTINCT resource_info.* FROM `resource_info`\n// LEFT JOIN `resource_network` ON (`resource_info`.`resource_id`=`resource_network`.`resource_id`)\n// WHERE (`resource_info`.`resource_id` like \'%10.0.1.3%\')\n// or (`resource_info`.`resource_name` like \'%10.0.1.3%\')\n// or (`resource_network`.`vip`like \'%10.0.1.3%\')\n// ORDER BY `id` Desc LIMIT 0,2\nvar (\n    orm    = dao.ResourceInfo.Ctx(ctx).OmitEmpty()\n    rTable = dao.ResourceInfo.Table()\n    rCls   = dao.ResourceInfo.Columns()\n    nTable = dao.ResourceNetwork.Table()\n    nCls   = dao.ResourceNetwork.Columns()\n)\norm = orm.LeftJoinOnField(nTable, rCls.ResourceId)\norm = orm.WherePrefix(rTable, do.ResourceInfo{\n    AppId:        req.AppIds,\n    ResourceId:   req.ResourceIds,\n    Region:       req.Regions,\n    Zone:         req.Zones,\n    ResourceName: req.ResourceNames,\n    Status:       req.Statuses,\n    BusinessType: req.Products,\n    Engine:       req.Engines,\n    Version:      req.Versions,\n})\norm = orm.WherePrefix(nTable, do.ResourceNetwork{\n    Vip:      req.Vips,\n    VpcId:    req.VpcIds,\n    SubnetId: req.SubnetIds,\n})\n// Fuzzy like querying.\nif req.Key != "" {\n    var (\n        keyLike = "%" + req.Key + "%"\n    )\n    whereFormat := fmt.Sprintf(\n        "(`%s`.`%s` like ?) or (`%s`.`%s` like ?) or (`%s`.`%s`like ?) ",\n        rTable, rCls.ResourceId,\n        rTable, rCls.ResourceName,\n        nTable, nCls.Vip,\n    )\n    orm = orm.Where(whereFormat, keyLike, keyLike, keyLike)\n}\n// Resource items.\nerr = orm.Distinct().FieldsPrefix(rTable, "*").Order(req.Order, req.OrderDirection).Limit(req.Offset, req.Limit).Scan(&res.Items)\n'})})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return s}});var r=i(667294);let o={},d=r.createContext(o);function s(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);
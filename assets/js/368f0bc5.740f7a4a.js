"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["30978"],{508118:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>d,default:()=>c,assets:()=>s,toc:()=>a,frontMatter:()=>i});var o=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-AllAndCount","title":"ORM\u67E5\u8BE2-AllAndCount","description":"\u8BE5\u6587\u6863\u4ECB\u7ECD\u4E86GoFrame\u6846\u67B6\u4E2D\u4ECEv2.5.0\u7248\u672C\u5F00\u59CB\u63D0\u4F9B\u7684AllAndCount\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u7528\u4E8E\u5728\u5206\u9875\u67E5\u8BE2\u573A\u666F\u4E2D\u540C\u65F6\u68C0\u7D22\u6570\u636E\u8BB0\u5F55\u5217\u8868\u53CA\u603B\u6570\u91CF\uFF0C\u7B80\u5316\u67E5\u8BE2\u903B\u8F91\u3002\u901A\u8FC7\u5728\u67E5\u8BE2\u65F6\u5FFD\u7565Limit/Page\u64CD\u4F5C\uFF0CAllAndCount\u65B9\u6CD5\u80FD\u591F\u63D0\u4F9B\u4E00\u79CD\u4FBF\u6377\u7684\u65B9\u5F0F\u5BF9\u6570\u636E\u8FDB\u884C\u68C0\u7D22\u548C\u8BA1\u6570\u3002","source":"@site/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-AllAndCount.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2","slug":"/docs/core/gdb-chaining-query-all-and-count","permalink":"/docs/core/gdb-chaining-query-all-and-count","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-AllAndCount.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731644494000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/core/gdb-chaining-query-all-and-count","title":"ORM\u67E5\u8BE2-AllAndCount","sidebar_position":2,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","ORM\u67E5\u8BE2","AllAndCount","\u5206\u9875\u67E5\u8BE2","\u6570\u636E\u67E5\u8BE2","\u603B\u6570\u91CF\u67E5\u8BE2","v2.5.0","\u8BB0\u5F55\u5217\u8868","\u67E5\u8BE2\u903B\u8F91\u7B80\u5316"],"description":"\u8BE5\u6587\u6863\u4ECB\u7ECD\u4E86GoFrame\u6846\u67B6\u4E2D\u4ECEv2.5.0\u7248\u672C\u5F00\u59CB\u63D0\u4F9B\u7684AllAndCount\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u7528\u4E8E\u5728\u5206\u9875\u67E5\u8BE2\u573A\u666F\u4E2D\u540C\u65F6\u68C0\u7D22\u6570\u636E\u8BB0\u5F55\u5217\u8868\u53CA\u603B\u6570\u91CF\uFF0C\u7B80\u5316\u67E5\u8BE2\u903B\u8F91\u3002\u901A\u8FC7\u5728\u67E5\u8BE2\u65F6\u5FFD\u7565Limit/Page\u64CD\u4F5C\uFF0CAllAndCount\u65B9\u6CD5\u80FD\u591F\u63D0\u4F9B\u4E00\u79CD\u4FBF\u6377\u7684\u65B9\u5F0F\u5BF9\u6570\u636E\u8FDB\u884C\u68C0\u7D22\u548C\u8BA1\u6570\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u67E5\u8BE2-\u5E38\u7528\u67E5\u8BE2\u65B9\u6CD5","permalink":"/docs/core/gdb-chaining-query-all-one-array-value-count"},"next":{"title":"ORM\u67E5\u8BE2-Exist","permalink":"/docs/core/gdb-chaining-query-exist"}}'),r=t("785893"),l=t("250065");let i={slug:"/docs/core/gdb-chaining-query-all-and-count",title:"ORM\u67E5\u8BE2-AllAndCount",sidebar_position:2,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","ORM\u67E5\u8BE2","AllAndCount","\u5206\u9875\u67E5\u8BE2","\u6570\u636E\u67E5\u8BE2","\u603B\u6570\u91CF\u67E5\u8BE2","v2.5.0","\u8BB0\u5F55\u5217\u8868","\u67E5\u8BE2\u903B\u8F91\u7B80\u5316"],description:"\u8BE5\u6587\u6863\u4ECB\u7ECD\u4E86GoFrame\u6846\u67B6\u4E2D\u4ECEv2.5.0\u7248\u672C\u5F00\u59CB\u63D0\u4F9B\u7684AllAndCount\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u7528\u4E8E\u5728\u5206\u9875\u67E5\u8BE2\u573A\u666F\u4E2D\u540C\u65F6\u68C0\u7D22\u6570\u636E\u8BB0\u5F55\u5217\u8868\u53CA\u603B\u6570\u91CF\uFF0C\u7B80\u5316\u67E5\u8BE2\u903B\u8F91\u3002\u901A\u8FC7\u5728\u67E5\u8BE2\u65F6\u5FFD\u7565Limit/Page\u64CD\u4F5C\uFF0CAllAndCount\u65B9\u6CD5\u80FD\u591F\u63D0\u4F9B\u4E00\u79CD\u4FBF\u6377\u7684\u65B9\u5F0F\u5BF9\u6570\u636E\u8FDB\u884C\u68C0\u7D22\u548C\u8BA1\u6570\u3002"},d=void 0,s={},a=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2}];function u(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,r.jsxs)(n.p,{children:["\u8BE5\u65B9\u6CD5\u4ECE ",(0,r.jsx)(n.code,{children:"v2.5.0"})," \u7248\u672C\u5F00\u59CB\u63D0\u4F9B\uFF0C\u7528\u4E8E\u540C\u65F6\u67E5\u8BE2\u6570\u636E\u8BB0\u5F55\u5217\u8868\u53CA\u603B\u6570\u91CF\uFF0C\u4E00\u822C\u7528\u4E8E\u5206\u9875\u67E5\u8BE2\u573A\u666F\u4E2D\uFF0C\u7B80\u5316\u5206\u9875\u67E5\u8BE2\u903B\u8F91\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u65B9\u6CD5\u5B9A\u4E49\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// AllAndCount retrieves all records and the total count of records from the model.\n// If useFieldForCount is true, it will use the fields specified in the model for counting;\n// otherwise, it will use a constant value of 1 for counting.\n// It returns the result as a slice of records, the total count of records, and an error if any.\n// The where parameter is an optional list of conditions to use when retrieving records.\n//\n// Example:\n//\n//    var model Model\n//    var result Result\n//    var count int\n//    where := []interface{}{"name = ?", "John"}\n//    result, count, err := model.AllAndCount(true)\n//    if err != nil {\n//        // Handle error.\n//    }\n//    fmt.Println(result, count)\nfunc (m *Model) AllAndCount(useFieldForCount bool) (result Result, totalCount int, err error)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u65B9\u6CD5\u5185\u90E8\u67E5\u8BE2\u603B\u6570\u91CF\u65F6\uFF0C\u5C06\u4F1A\u5FFD\u7565\u67E5\u8BE2\u4E2D\u7684 ",(0,r.jsx)(n.code,{children:"Limit/Page"})," \u64CD\u4F5C\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// SELECT `uid`,`name` FROM `user` WHERE `status`=\'deleted\' LIMIT 0,10\n// SELECT COUNT(`uid`,`name`) FROM `user` WHERE `status`=\'deleted\'\nall, count, err := Model("user").Fields("uid", "name").Where("status", "deleted").Limit(0, 10).AllAndCount(true)\n\n// SELECT `uid`,`name` FROM `user` WHERE `status`=\'deleted\' LIMIT 0,10\n// SELECT COUNT(1) FROM `user` WHERE `status`=\'deleted\'\nall, count, err := Model("user").Fields("uid", "name").Where("status", "deleted").Limit(0, 10).AllAndCount(false)\n'})})]})}function c(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var o=t(667294);let r={},l=o.createContext(r);function i(e){let n=o.useContext(l);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);
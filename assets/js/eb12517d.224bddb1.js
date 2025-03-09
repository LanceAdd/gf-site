"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["68405"],{107519:function(e,s,n){n.r(s),n.d(s,{metadata:()=>i,contentTitle:()=>r,default:()=>f,assets:()=>d,toc:()=>l,frontMatter:()=>c});var i=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u6587\u4EF6\u76D1\u63A7-gfsnotify/\u6587\u4EF6\u76D1\u63A7-\u7CFB\u7EDF\u53C2\u6570","title":"\u6587\u4EF6\u76D1\u63A7-\u7CFB\u7EDF\u53C2\u6570","description":"\u5728Linux\u7CFB\u7EDF\u4E0Bgfsnotify\u6A21\u5757\u901A\u8FC7inotify\u7279\u6027\u5B9E\u73B0\u6587\u4EF6\u548C\u76EE\u5F55\u76D1\u63A7\uFF0C\u53D7\u9650\u4E8E\u7CFB\u7EDF\u5185\u6838\u53C2\u6570\u5982fs.inotify.max_user_instances\u548Cfs.inotify.max_user_watches\uFF0C\u901A\u8FC7\u547D\u4EE4\u884C\u53EF\u4EE5\u67E5\u770B\u548C\u4FEE\u6539\u8FD9\u4E9B\u53C2\u6570\u4EE5\u9002\u5E94\u4E0D\u540C\u7684\u76D1\u63A7\u9700\u6C42\u3002","source":"@site/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u6587\u4EF6\u76D1\u63A7-gfsnotify/\u6587\u4EF6\u76D1\u63A7-\u7CFB\u7EDF\u53C2\u6570.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u6587\u4EF6\u76D1\u63A7-gfsnotify","slug":"/docs/components/os-gfsnotify-system-variables","permalink":"/docs/components/os-gfsnotify-system-variables","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u6587\u4EF6\u76D1\u63A7-gfsnotify/\u6587\u4EF6\u76D1\u63A7-\u7CFB\u7EDF\u53C2\u6570.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732443619000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/components/os-gfsnotify-system-variables","title":"\u6587\u4EF6\u76D1\u63A7-\u7CFB\u7EDF\u53C2\u6570","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","gfsnotify","\u6587\u4EF6\u76D1\u63A7","inotify","\u7CFB\u7EDF\u53C2\u6570","linux","\u76D1\u63A7\u5B9E\u4F8B","\u7528\u6237\u5B9E\u4F8B\u9650\u5236","\u6587\u4EF6\u961F\u5217\u5927\u5C0F"],"description":"\u5728Linux\u7CFB\u7EDF\u4E0Bgfsnotify\u6A21\u5757\u901A\u8FC7inotify\u7279\u6027\u5B9E\u73B0\u6587\u4EF6\u548C\u76EE\u5F55\u76D1\u63A7\uFF0C\u53D7\u9650\u4E8E\u7CFB\u7EDF\u5185\u6838\u53C2\u6570\u5982fs.inotify.max_user_instances\u548Cfs.inotify.max_user_watches\uFF0C\u901A\u8FC7\u547D\u4EE4\u884C\u53EF\u4EE5\u67E5\u770B\u548C\u4FEE\u6539\u8FD9\u4E9B\u53C2\u6570\u4EE5\u9002\u5E94\u4E0D\u540C\u7684\u76D1\u63A7\u9700\u6C42\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6587\u4EF6\u76D1\u63A7-\u79FB\u9664\u76D1\u63A7","permalink":"/docs/components/os-gfsnotify-remove"},"next":{"title":"\u8FDB\u7A0B\u7BA1\u7406-gproc","permalink":"/docs/components/os-gproc"}}'),t=n("785893"),o=n("250065");let c={slug:"/docs/components/os-gfsnotify-system-variables",title:"\u6587\u4EF6\u76D1\u63A7-\u7CFB\u7EDF\u53C2\u6570",sidebar_position:3,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","gfsnotify","\u6587\u4EF6\u76D1\u63A7","inotify","\u7CFB\u7EDF\u53C2\u6570","linux","\u76D1\u63A7\u5B9E\u4F8B","\u7528\u6237\u5B9E\u4F8B\u9650\u5236","\u6587\u4EF6\u961F\u5217\u5927\u5C0F"],description:"\u5728Linux\u7CFB\u7EDF\u4E0Bgfsnotify\u6A21\u5757\u901A\u8FC7inotify\u7279\u6027\u5B9E\u73B0\u6587\u4EF6\u548C\u76EE\u5F55\u76D1\u63A7\uFF0C\u53D7\u9650\u4E8E\u7CFB\u7EDF\u5185\u6838\u53C2\u6570\u5982fs.inotify.max_user_instances\u548Cfs.inotify.max_user_watches\uFF0C\u901A\u8FC7\u547D\u4EE4\u884C\u53EF\u4EE5\u67E5\u770B\u548C\u4FEE\u6539\u8FD9\u4E9B\u53C2\u6570\u4EE5\u9002\u5E94\u4E0D\u540C\u7684\u76D1\u63A7\u9700\u6C42\u3002"},r=void 0,d={},l=[{value:"\u7CFB\u7EDF\u53C2\u6570\u5F71\u54CD",id:"\u7CFB\u7EDF\u53C2\u6570\u5F71\u54CD",level:2},{value:"\u67E5\u770B\u4E0E\u4FEE\u6539",id:"\u67E5\u770B\u4E0E\u4FEE\u6539",level:2}];function a(e){let s={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"\u7CFB\u7EDF\u53C2\u6570\u5F71\u54CD",children:"\u7CFB\u7EDF\u53C2\u6570\u5F71\u54CD"}),"\n",(0,t.jsxs)(s.p,{children:["\u5728 ",(0,t.jsx)(s.code,{children:"linux"})," \u7CFB\u7EDF\u4E0B\uFF0C ",(0,t.jsx)(s.code,{children:"gfsnotify"})," \u6A21\u5757\u4F7F\u7528\u7684\u662F\u7CFB\u7EDF\u7684 ",(0,t.jsx)(s.code,{children:"inotify"})," \u7279\u6027\u6765\u5B9E\u73B0\u7684\u6587\u4EF6/\u76EE\u5F55\u76D1\u63A7\uFF0C\u56E0\u6B64\u8BE5\u529F\u80FD\u5728\u4F7F\u7528\u65F6\u4F1A\u53D7\u5230\u7CFB\u7EDF\u7684\u4E24\u4E2A\u5185\u6838\u53C2\u6570\u9650\u5236\uFF1A"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"fs.inotify.max_user_instances"}),"\uFF1A\u8868\u793A\u5F53\u524D\u7528\u6237\u53EF\u521B\u5EFA\u7684 ",(0,t.jsx)(s.code,{children:"inotify"})," \u76D1\u63A7\u5B9E\u4F8B\u6570\u91CF\uFF0C\u5373 ",(0,t.jsx)(s.code,{children:"gfsnotify.New"})," \u65B9\u6CD5\u521B\u5EFA\u7684 ",(0,t.jsx)(s.code,{children:"Watcher"})," \u5BF9\u8C61\u6570\u91CF\uFF0C\u4E00\u4E2A ",(0,t.jsx)(s.code,{children:"Watcher"})," \u5BF9\u8C61\u5BF9\u5E94\u7CFB\u7EDF\u7684\u4E00\u4E2A ",(0,t.jsx)(s.code,{children:"inotify"})," \u5B9E\u4F8B\uFF0C\u7CFB\u7EDF\u9ED8\u8BA4\u6570\u91CF\u4E3A\uFF1A ",(0,t.jsx)(s.code,{children:"128"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"fs.inotify.max_user_watches"}),"\uFF1A\u8868\u793A\u4E00\u4E2A ",(0,t.jsx)(s.code,{children:"inotify"})," \u5B9E\u4F8B\u53EF\u6DFB\u52A0\u7684\u76D1\u63A7\u6587\u4EF6\u961F\u5217\u5927\u5C0F\uFF0C\u5F80\u540C\u4E00\u4E2A ",(0,t.jsx)(s.code,{children:"inotify"})," \u6DFB\u52A0\u7684\u76D1\u63A7\u6587\u4EF6\u8D85\u8FC7\u8BE5\u6570\u91CF\u9650\u5236\u5219\u4F1A\u5931\u8D25\uFF0C\u5E76\u4E14\u4F1A\u6709\u7CFB\u7EDF\u9519\u8BEF\u65E5\u5FD7\uFF0C\u7CFB\u7EDF\u9ED8\u8BA4\u6570\u91CF\u5F80\u5F80\u4E3A\uFF1A ",(0,t.jsx)(s.code,{children:"8192"}),"(\u6709\u7684\u7CFB\u7EDF\u8BE5\u6570\u503C\u4F1A\u6BD4\u8F83\u5927\u4E00\u4E9B)\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\u67E5\u770B\u4E0E\u4FEE\u6539",children:"\u67E5\u770B\u4E0E\u4FEE\u6539"}),"\n",(0,t.jsxs)(s.p,{children:["\u4EE5",(0,t.jsx)(s.code,{children:"fs.inotify.max_user_instances"}),"\u4E3A\u4F8B\uFF0C\u5728",(0,t.jsx)(s.code,{children:"linux"}),"\u7CFB\u7EDF\u4E0B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B",(0,t.jsx)(s.code,{children:"fs.inotify.max_user_instances"}),"\u7684\u5F53\u524D\u503C\uFF1A"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"cat /proc/sys/fs/inotify/max_user_instances\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u5982\u679C\u9700\u8981\u4FEE\u6539\u8BE5\u503C\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\uFF08\u4F8B\u5982\u5C06\u503C\u4FEE\u6539\u4E3A ",(0,t.jsx)(s.code,{children:"1024"}),"\uFF09\uFF1A"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo sysctl -w fs.inotify.max_user_instances=1024\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u8981\u6C38\u4E45\u4FEE\u6539\u8BE5\u503C\uFF0C\u53EF\u4EE5\u5C06\u4EE5\u4E0B\u5185\u5BB9\u6DFB\u52A0\u5230",(0,t.jsx)(s.code,{children:"/etc/sysctl.conf"}),"\u6587\u4EF6\u4E2D\uFF1A"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"fs.inotify.max_user_instances=1024\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u7136\u540E\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u4F7F\u66F4\u6539\u751F\u6548\uFF1A"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo sysctl -p\n"})})]})}function f(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return r},a:function(){return c}});var i=n(667294);let t={},o=i.createContext(t);function c(e){let s=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);
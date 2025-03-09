"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["97479"],{708456:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>c,default:()=>f,assets:()=>r,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u6587\u4EF6\u76D1\u63A7-gfsnotify/\u6587\u4EF6\u76D1\u63A7-\u7CFB\u7EDF\u53C2\u6570","title":"File Watching - System Vars","description":"In the Linux system, the gfsnotify module implements file and directory watching through the inotify feature, limited by system kernel parameters such as fs.inotify.max_user_instances and fs.inotify.max_user_watches. These parameters can be viewed and modified via command line to suit different watching needs.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u6587\u4EF6\u76D1\u63A7-gfsnotify/\u6587\u4EF6\u76D1\u63A7-\u7CFB\u7EDF\u53C2\u6570.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u6587\u4EF6\u76D1\u63A7-gfsnotify","slug":"/docs/components/os-gfsnotify-system-variables","permalink":"/en/docs/components/os-gfsnotify-system-variables","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u6587\u4EF6\u76D1\u63A7-gfsnotify/\u6587\u4EF6\u76D1\u63A7-\u7CFB\u7EDF\u53C2\u6570.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732443619000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/components/os-gfsnotify-system-variables","title":"File Watching - System Vars","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","GoFrame framework","gfsnotify","file watching","inotify","system parameters","linux","watching instance","user instance limit","file queue size"],"description":"In the Linux system, the gfsnotify module implements file and directory watching through the inotify feature, limited by system kernel parameters such as fs.inotify.max_user_instances and fs.inotify.max_user_watches. These parameters can be viewed and modified via command line to suit different watching needs."},"sidebar":"mainSidebar","previous":{"title":"File Watching - Remove","permalink":"/en/docs/components/os-gfsnotify-remove"},"next":{"title":"Process","permalink":"/en/docs/components/os-gproc"}}'),i=n("785893"),a=n("250065");let o={slug:"/docs/components/os-gfsnotify-system-variables",title:"File Watching - System Vars",sidebar_position:3,hide_title:!0,keywords:["GoFrame","GoFrame framework","gfsnotify","file watching","inotify","system parameters","linux","watching instance","user instance limit","file queue size"],description:"In the Linux system, the gfsnotify module implements file and directory watching through the inotify feature, limited by system kernel parameters such as fs.inotify.max_user_instances and fs.inotify.max_user_watches. These parameters can be viewed and modified via command line to suit different watching needs."},c=void 0,r={},d=[{value:"Impact of System Variables",id:"impact-of-system-variables",level:2},{value:"Viewing and Modifying",id:"viewing-and-modifying",level:2}];function l(e){let s={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"impact-of-system-variables",children:"Impact of System Variables"}),"\n",(0,i.jsxs)(s.p,{children:["In the ",(0,i.jsx)(s.code,{children:"linux"})," system, the ",(0,i.jsx)(s.code,{children:"gfsnotify"})," module uses the system's ",(0,i.jsx)(s.code,{children:"inotify"})," feature to implement file/directory watching. Therefore, this functionality is subject to the limitations of two kernel parameters:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"fs.inotify.max_user_instances"}),": Indicates the number of ",(0,i.jsx)(s.code,{children:"inotify"})," watching instances that the current user can create, which is the number of ",(0,i.jsx)(s.code,{children:"Watcher"})," objects created by the ",(0,i.jsx)(s.code,{children:"gfsnotify.New"})," method. Each ",(0,i.jsx)(s.code,{children:"Watcher"})," object corresponds to an ",(0,i.jsx)(s.code,{children:"inotify"})," instance in the system. The default system quantity is: ",(0,i.jsx)(s.code,{children:"128"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"fs.inotify.max_user_watches"}),": Indicates the size of the watched file queue that an ",(0,i.jsx)(s.code,{children:"inotify"})," instance can add. If you add watched files to the same ",(0,i.jsx)(s.code,{children:"inotify"})," beyond this limit, it will fail, and there will be system error logs. The default system quantity is usually: ",(0,i.jsx)(s.code,{children:"8192"})," (some systems may have a larger value)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"viewing-and-modifying",children:"Viewing and Modifying"}),"\n",(0,i.jsxs)(s.p,{children:["Take ",(0,i.jsx)(s.code,{children:"fs.inotify.max_user_instances"})," as an example, in the ",(0,i.jsx)(s.code,{children:"linux"})," system, you can view the current value of ",(0,i.jsx)(s.code,{children:"fs.inotify.max_user_instances"})," with the following command:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"cat /proc/sys/fs/inotify/max_user_instances\n"})}),"\n",(0,i.jsxs)(s.p,{children:["If you need to modify this value, you can use the following command (for example, to change the value to ",(0,i.jsx)(s.code,{children:"1024"}),"):"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sudo sysctl -w fs.inotify.max_user_instances=1024\n"})}),"\n",(0,i.jsxs)(s.p,{children:["To permanently modify this value, you can add the following content to the ",(0,i.jsx)(s.code,{children:"/etc/sysctl.conf"})," file:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"fs.inotify.max_user_instances=1024\n"})}),"\n",(0,i.jsx)(s.p,{children:"Then execute the following command to make the changes take effect:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sudo sysctl -p\n"})})]})}function f(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return o}});var t=n(667294);let i={},a=t.createContext(i);function o(e){let s=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);
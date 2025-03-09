"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["36120"],{414929:function(d,e,r){r.r(e),r.d(e,{metadata:()=>s,contentTitle:()=>t,default:()=>j,assets:()=>l,toc:()=>h,frontMatter:()=>c});var s=JSON.parse('{"id":"docs/\u5176\u4ED6\u8D44\u6599/\u9644\u5F55\uFF1A\u7CFB\u7EDF\u4FE1\u53F7\u5217\u8868","title":"\u9644\u5F55\uFF1A\u7CFB\u7EDF\u4FE1\u53F7\u5217\u8868","description":"\u5217\u4E3E\u4E86Linux\u548CWindows\u7CFB\u7EDF\u4E2D\u7684\u5E38\u89C1\u4FE1\u53F7\u53CA\u5176\u542B\u4E49\uFF0C\u5305\u62EC\u5982\u4F55\u5904\u7406\u8FD9\u4E9B\u4FE1\u53F7\u3002\u7279\u522B\u662F\u5BF9\u4E8E\u5F00\u53D1\u8005\uFF0C\u7406\u89E3\u5404\u4E2A\u4FE1\u53F7\u7684\u4F5C\u7528\u548C\u53CD\u5E94\u673A\u5236\u662F\u81F3\u5173\u91CD\u8981\u7684\uFF0C\u5C24\u5176\u662F\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884C\u7F16\u7A0B\u65F6\u3002\u672C\u6587\u63D0\u4F9B\u4E86\u4E00\u4E2A\u65B9\u4FBF\u7684\u53C2\u8003\uFF0C\u53EF\u5E2E\u52A9\u5FEB\u901F\u5B9A\u4F4D\u5E76\u7406\u89E3\u4FE1\u53F7\u7684\u7528\u9014\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u5176\u4ED6\u8D44\u6599/\u9644\u5F55\uFF1A\u7CFB\u7EDF\u4FE1\u53F7\u5217\u8868.md","sourceDirName":"docs/\u5176\u4ED6\u8D44\u6599","slug":"/docs/other/system-signals","permalink":"/en/2.7.x/docs/other/system-signals","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u5176\u4ED6\u8D44\u6599/\u9644\u5F55\uFF1A\u7CFB\u7EDF\u4FE1\u53F7\u5217\u8868.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":7,"frontMatter":{"slug":"/docs/other/system-signals","title":"\u9644\u5F55\uFF1A\u7CFB\u7EDF\u4FE1\u53F7\u5217\u8868","sidebar_position":7,"hide_title":true,"keywords":["\u7CFB\u7EDF\u4FE1\u53F7","Linux\u4FE1\u53F7","Windows\u4FE1\u53F7","\u4FE1\u53F7\u5904\u7406","SIGHUP","SIGINT","SIGTERM","GoFrame","\u4FE1\u53F7\u7F16\u7A0B","\u4FE1\u53F7\u5217\u8868"],"description":"\u5217\u4E3E\u4E86Linux\u548CWindows\u7CFB\u7EDF\u4E2D\u7684\u5E38\u89C1\u4FE1\u53F7\u53CA\u5176\u542B\u4E49\uFF0C\u5305\u62EC\u5982\u4F55\u5904\u7406\u8FD9\u4E9B\u4FE1\u53F7\u3002\u7279\u522B\u662F\u5BF9\u4E8E\u5F00\u53D1\u8005\uFF0C\u7406\u89E3\u5404\u4E2A\u4FE1\u53F7\u7684\u4F5C\u7528\u548C\u53CD\u5E94\u673A\u5236\u662F\u81F3\u5173\u91CD\u8981\u7684\uFF0C\u5C24\u5176\u662F\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884C\u7F16\u7A0B\u65F6\u3002\u672C\u6587\u63D0\u4F9B\u4E86\u4E00\u4E2A\u65B9\u4FBF\u7684\u53C2\u8003\uFF0C\u53EF\u5E2E\u52A9\u5FEB\u901F\u5B9A\u4F4D\u5E76\u7406\u89E3\u4FE1\u53F7\u7684\u7528\u9014\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u683C\u5F0F\u5316\u6253\u5370\u5360\u4F4D\u7B26","permalink":"/en/2.7.x/docs/other/printing-format"}}'),n=r("785893"),i=r("250065");let c={slug:"/docs/other/system-signals",title:"\u9644\u5F55\uFF1A\u7CFB\u7EDF\u4FE1\u53F7\u5217\u8868",sidebar_position:7,hide_title:!0,keywords:["\u7CFB\u7EDF\u4FE1\u53F7","Linux\u4FE1\u53F7","Windows\u4FE1\u53F7","\u4FE1\u53F7\u5904\u7406","SIGHUP","SIGINT","SIGTERM","GoFrame","\u4FE1\u53F7\u7F16\u7A0B","\u4FE1\u53F7\u5217\u8868"],description:"\u5217\u4E3E\u4E86Linux\u548CWindows\u7CFB\u7EDF\u4E2D\u7684\u5E38\u89C1\u4FE1\u53F7\u53CA\u5176\u542B\u4E49\uFF0C\u5305\u62EC\u5982\u4F55\u5904\u7406\u8FD9\u4E9B\u4FE1\u53F7\u3002\u7279\u522B\u662F\u5BF9\u4E8E\u5F00\u53D1\u8005\uFF0C\u7406\u89E3\u5404\u4E2A\u4FE1\u53F7\u7684\u4F5C\u7528\u548C\u53CD\u5E94\u673A\u5236\u662F\u81F3\u5173\u91CD\u8981\u7684\uFF0C\u5C24\u5176\u662F\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884C\u7F16\u7A0B\u65F6\u3002\u672C\u6587\u63D0\u4F9B\u4E86\u4E00\u4E2A\u65B9\u4FBF\u7684\u53C2\u8003\uFF0C\u53EF\u5E2E\u52A9\u5FEB\u901F\u5B9A\u4F4D\u5E76\u7406\u89E3\u4FE1\u53F7\u7684\u7528\u9014\u3002"},t=void 0,l={},h=[{value:"Linux",id:"linux",level:2},{value:"Window",id:"window",level:2}];function x(d){let e={code:"code",h2:"h2",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...d.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"linux",children:"Linux"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"\u4FE1\u53F7"}),(0,n.jsx)(e.th,{children:"\u53D6\u503C"}),(0,n.jsx)(e.th,{children:"\u9ED8\u8BA4\u52A8\u4F5C"}),(0,n.jsx)(e.th,{children:"\u542B\u4E49\uFF08\u53D1\u51FA\u4FE1\u53F7\u7684\u539F\u56E0\uFF09"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGHUP"})}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"Term"}),(0,n.jsx)(e.td,{children:"\u7EC8\u7AEF\u7684\u6302\u65AD\u6216\u8FDB\u7A0B\u6B7B\u4EA1"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGINT"})}),(0,n.jsx)(e.td,{children:"2"}),(0,n.jsx)(e.td,{children:"Term"}),(0,n.jsx)(e.td,{children:"\u6765\u81EA\u952E\u76D8\u7684\u4E2D\u65AD\u4FE1\u53F7"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGQUIT"})}),(0,n.jsx)(e.td,{children:"3"}),(0,n.jsx)(e.td,{children:"Core"}),(0,n.jsx)(e.td,{children:"\u6765\u81EA\u952E\u76D8\u7684\u79BB\u5F00\u4FE1\u53F7"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGILL"})}),(0,n.jsx)(e.td,{children:"4"}),(0,n.jsx)(e.td,{children:"Core"}),(0,n.jsx)(e.td,{children:"\u975E\u6CD5\u6307\u4EE4"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGABRT"})}),(0,n.jsx)(e.td,{children:"6"}),(0,n.jsx)(e.td,{children:"Core"}),(0,n.jsx)(e.td,{children:"\u6765\u81EA abort \u7684\u5F02\u5E38\u4FE1\u53F7"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGFPE"})}),(0,n.jsx)(e.td,{children:"8"}),(0,n.jsx)(e.td,{children:"Core"}),(0,n.jsx)(e.td,{children:"\u6D6E\u70B9\u4F8B\u5916"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGKILL"})}),(0,n.jsx)(e.td,{children:"9"}),(0,n.jsx)(e.td,{children:"Term"}),(0,n.jsx)(e.td,{children:"\u6740\u6B7B"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGSEGV"})}),(0,n.jsx)(e.td,{children:"11"}),(0,n.jsx)(e.td,{children:"Core"}),(0,n.jsx)(e.td,{children:"\u6BB5\u975E\u6CD5\u9519\u8BEF (\u5185\u5B58\u5F15\u7528\u65E0\u6548)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGPIPE"})}),(0,n.jsx)(e.td,{children:"13"}),(0,n.jsx)(e.td,{children:"Term"}),(0,n.jsx)(e.td,{children:"\u7BA1\u9053\u635F\u574F\uFF1A\u5411\u4E00\u4E2A\u6CA1\u6709\u8BFB\u8FDB\u7A0B\u7684\u7BA1\u9053\u5199\u6570\u636E"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGALRM"})}),(0,n.jsx)(e.td,{children:"14"}),(0,n.jsx)(e.td,{children:"Term"}),(0,n.jsx)(e.td,{children:"\u6765\u81EA alarm \u7684\u8BA1\u65F6\u5668\u5230\u65F6\u4FE1\u53F7"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGTERM"})}),(0,n.jsx)(e.td,{children:"15"}),(0,n.jsx)(e.td,{children:"Term"}),(0,n.jsx)(e.td,{children:"\u7EC8\u6B62"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGUSR1"})}),(0,n.jsx)(e.td,{children:"30,10,16"}),(0,n.jsx)(e.td,{children:"Term"}),(0,n.jsx)(e.td,{children:"\u7528\u6237\u81EA\u5B9A\u4E49\u4FE1\u53F7 1"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGUSR2"})}),(0,n.jsx)(e.td,{children:"31,12,17"}),(0,n.jsx)(e.td,{children:"Term"}),(0,n.jsx)(e.td,{children:"\u7528\u6237\u81EA\u5B9A\u4E49\u4FE1\u53F7 2"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGCHLD"})}),(0,n.jsx)(e.td,{children:"20,17,18"}),(0,n.jsx)(e.td,{children:"Ign"}),(0,n.jsx)(e.td,{children:"\u5B50\u8FDB\u7A0B\u505C\u6B62\u6216\u7EC8\u6B62"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGCONT"})}),(0,n.jsx)(e.td,{children:"19,18,25"}),(0,n.jsx)(e.td,{children:"Cont"}),(0,n.jsx)(e.td,{children:"\u5982\u679C\u505C\u6B62\uFF0C\u7EE7\u7EED\u6267\u884C"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGSTOP"})}),(0,n.jsx)(e.td,{children:"17,19,23"}),(0,n.jsx)(e.td,{children:"Stop"}),(0,n.jsx)(e.td,{children:"\u975E\u6765\u81EA\u7EC8\u7AEF\u7684\u505C\u6B62\u4FE1\u53F7"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGTSTP"})}),(0,n.jsx)(e.td,{children:"18,20,24"}),(0,n.jsx)(e.td,{children:"Stop"}),(0,n.jsx)(e.td,{children:"\u6765\u81EA\u7EC8\u7AEF\u7684\u505C\u6B62\u4FE1\u53F7"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGTTIN"})}),(0,n.jsx)(e.td,{children:"21,21,26"}),(0,n.jsx)(e.td,{children:"Stop"}),(0,n.jsx)(e.td,{children:"\u540E\u53F0\u8FDB\u7A0B\u8BFB\u7EC8\u7AEF"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGTTOU"})}),(0,n.jsx)(e.td,{children:"22,22,27"}),(0,n.jsx)(e.td,{children:"Stop"}),(0,n.jsx)(e.td,{children:"\u540E\u53F0\u8FDB\u7A0B\u5199\u7EC8\u7AEF"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGBUS"})}),(0,n.jsx)(e.td,{children:"10,7,10"}),(0,n.jsx)(e.td,{children:"Core"}),(0,n.jsx)(e.td,{children:"\u603B\u7EBF\u9519\u8BEF\uFF08\u5185\u5B58\u8BBF\u95EE\u9519\u8BEF\uFF09"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGPOLL"})}),(0,n.jsx)(e.td,{}),(0,n.jsx)(e.td,{children:"Term"}),(0,n.jsx)(e.td,{children:"Pollable \u4E8B\u4EF6\u53D1\u751F (Sys V)\uFF0C\u4E0E SIGIO \u540C\u4E49"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGPROF"})}),(0,n.jsx)(e.td,{children:"27,27,29"}),(0,n.jsx)(e.td,{children:"Term"}),(0,n.jsx)(e.td,{children:"\u7EDF\u8BA1\u5206\u5E03\u56FE\u7528\u8BA1\u65F6\u5668\u5230\u65F6"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGSYS"})}),(0,n.jsx)(e.td,{children:"12,-,12"}),(0,n.jsx)(e.td,{children:"Core"}),(0,n.jsx)(e.td,{children:"\u975E\u6CD5\u7CFB\u7EDF\u8C03\u7528 (SVr4)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGTRAP"})}),(0,n.jsx)(e.td,{children:"5"}),(0,n.jsx)(e.td,{children:"Core"}),(0,n.jsx)(e.td,{children:"\u8DDF\u8E2A / \u65AD\u70B9\u81EA\u9677"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGURG"})}),(0,n.jsx)(e.td,{children:"16,23,21"}),(0,n.jsx)(e.td,{children:"Ign"}),(0,n.jsx)(e.td,{children:"socket \u7D27\u6025\u4FE1\u53F7 (4.2BSD)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGVTALRM"})}),(0,n.jsx)(e.td,{children:"26,26,28"}),(0,n.jsx)(e.td,{children:"Term"}),(0,n.jsx)(e.td,{children:"\u865A\u62DF\u8BA1\u65F6\u5668\u5230\u65F6 (4.2BSD)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGXCPU"})}),(0,n.jsx)(e.td,{children:"24,24,30"}),(0,n.jsx)(e.td,{children:"Core"}),(0,n.jsx)(e.td,{children:"\u8D85\u8FC7 CPU \u65F6\u9650 (4.2BSD)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGXFSZ"})}),(0,n.jsx)(e.td,{children:"25,25,31"}),(0,n.jsx)(e.td,{children:"Core"}),(0,n.jsx)(e.td,{children:"\u8D85\u8FC7\u6587\u4EF6\u957F\u5EA6\u9650\u5236 (4.2BSD)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGIOT"})}),(0,n.jsx)(e.td,{children:"6"}),(0,n.jsx)(e.td,{children:"Core"}),(0,n.jsx)(e.td,{children:"IOT \u81EA\u9677\uFF0C\u4E0E SIGABRT \u540C\u4E49"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGEMT"})}),(0,n.jsx)(e.td,{children:"7,-,7"}),(0,n.jsx)(e.td,{}),(0,n.jsx)(e.td,{children:"Term"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGSTKFLT"})}),(0,n.jsx)(e.td,{children:"-,16,-"}),(0,n.jsx)(e.td,{children:"Term"}),(0,n.jsx)(e.td,{children:"\u534F\u5904\u7406\u5668\u5806\u6808\u9519\u8BEF (\u4E0D\u4F7F\u7528)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGIO"})}),(0,n.jsx)(e.td,{children:"23,29,22"}),(0,n.jsx)(e.td,{children:"Term"}),(0,n.jsx)(e.td,{children:"\u63CF\u8FF0\u7B26\u4E0A\u53EF\u4EE5\u8FDB\u884C I/O \u64CD\u4F5C"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGCLD"})}),(0,n.jsx)(e.td,{children:"-,-,18"}),(0,n.jsx)(e.td,{children:"Ign"}),(0,n.jsx)(e.td,{children:"\u4E0E SIGCHLD \u540C\u4E49"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGPWR"})}),(0,n.jsx)(e.td,{children:"29,30,19"}),(0,n.jsx)(e.td,{children:"Term"}),(0,n.jsx)(e.td,{children:"\u7535\u529B\u6545\u969C (System V)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGINFO"})}),(0,n.jsx)(e.td,{children:"29,-,-"}),(0,n.jsx)(e.td,{}),(0,n.jsx)(e.td,{children:"\u4E0E SIGPWR \u540C\u4E49"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGLOST"})}),(0,n.jsx)(e.td,{children:"-,-,-"}),(0,n.jsx)(e.td,{children:"Term"}),(0,n.jsx)(e.td,{children:"\u6587\u4EF6\u9501\u4E22\u5931"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGWINCH"})}),(0,n.jsx)(e.td,{children:"28,28,20"}),(0,n.jsx)(e.td,{children:"Ign"}),(0,n.jsx)(e.td,{children:"\u7A97\u53E3\u5927\u5C0F\u6539\u53D8 (4.3BSD, Sun)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"SIGUNUSED"})}),(0,n.jsx)(e.td,{children:"-,31,-"}),(0,n.jsx)(e.td,{children:"Term"}),(0,n.jsx)(e.td,{children:"\u672A\u4F7F\u7528\u4FE1\u53F7 (will be SIGSYS)"})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"window",children:"Window"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"\u4FE1\u53F7"}),(0,n.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:(0,n.jsx)(e.code,{children:"SIGABRT"})})}),(0,n.jsx)(e.td,{children:"\u5F02\u5E38\u7EC8\u6B62"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:(0,n.jsx)(e.code,{children:"SIGFPE"})})}),(0,n.jsx)(e.td,{children:"\u6D6E\u70B9\u9519\u8BEF"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:(0,n.jsx)(e.code,{children:"SIGILL"})})}),(0,n.jsx)(e.td,{children:"\u975E\u6CD5\u6307\u4EE4"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:(0,n.jsx)(e.code,{children:"SIGINT"})})}),(0,n.jsx)(e.td,{children:"Ctrl+C \u4FE1\u53F7"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:(0,n.jsx)(e.code,{children:"SIGSEGV"})})}),(0,n.jsx)(e.td,{children:"\u975E\u6CD5\u5B58\u50A8\u533A\u8BBF\u95EE"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:(0,n.jsx)(e.code,{children:"SIGTERM"})})}),(0,n.jsx)(e.td,{children:"\u7EC8\u6B62\u8BF7\u6C42"})]})]})]})]})}function j(d={}){let{wrapper:e}={...(0,i.a)(),...d.components};return e?(0,n.jsx)(e,{...d,children:(0,n.jsx)(x,{...d})}):x(d)}},250065:function(d,e,r){r.d(e,{Z:function(){return t},a:function(){return c}});var s=r(667294);let n={},i=s.createContext(n);function c(d){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof d?d(e):{...e,...d}},[e,d])}function t(d){let e;return e=d.disableParentContext?"function"==typeof d.components?d.components(n):d.components||n:c(d.components),s.createElement(i.Provider,{value:e},d.children)}}}]);
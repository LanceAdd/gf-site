"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["30114"],{769597:function(e,n,i){i.r(n),i.d(n,{metadata:()=>o,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>r});var o=JSON.parse('{"id":"docs/\u6846\u67B6\u8BBE\u8BA1/\u7EDF\u4E00\u6846\u67B6\u8BBE\u8BA1","title":"Unified Framework Design","description":"The unified development framework is key to software architecture and code development. Through technical systematization, development standardization, component unification, and version consistency, it achieves high coordination and maintainability, avoids resource waste, and helps development teams focus on business itself. This framework offers efficient error stack tracing capabilities and possesses strong combat power and cohesion, providing the foundation for a virtuous cycle between enterprises and the community. The GoFrame framework achieves these features and is an essential tool for modern software development.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u6846\u67B6\u8BBE\u8BA1/\u7EDF\u4E00\u6846\u67B6\u8BBE\u8BA1.md","sourceDirName":"docs/\u6846\u67B6\u8BBE\u8BA1","slug":"/docs/design/unified","permalink":"/en/docs/design/unified","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6846\u67B6\u8BBE\u8BA1/\u7EDF\u4E00\u6846\u67B6\u8BBE\u8BA1.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1740621099000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/design/unified","title":"Unified Framework Design","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","GoFrame Framework","Development Framework","Software Architecture","Technical Systematization","Development Standardization","Component Unification","Version Consistency","Solution Precipitation","Resource Waste Avoidance"],"description":"The unified development framework is key to software architecture and code development. Through technical systematization, development standardization, component unification, and version consistency, it achieves high coordination and maintainability, avoids resource waste, and helps development teams focus on business itself. This framework offers efficient error stack tracing capabilities and possesses strong combat power and cohesion, providing the foundation for a virtuous cycle between enterprises and the community. The GoFrame framework achieves these features and is an essential tool for modern software development."},"sidebar":"mainSidebar","previous":{"title":"Modular Design","permalink":"/en/docs/design/modular"},"next":{"title":"Engineering Design \uD83D\uDD25","permalink":"/en/docs/design/project"}}'),t=i("785893"),s=i("250065");let r={slug:"/docs/design/unified",title:"Unified Framework Design",sidebar_position:1,hide_title:!0,keywords:["GoFrame","GoFrame Framework","Development Framework","Software Architecture","Technical Systematization","Development Standardization","Component Unification","Version Consistency","Solution Precipitation","Resource Waste Avoidance"],description:"The unified development framework is key to software architecture and code development. Through technical systematization, development standardization, component unification, and version consistency, it achieves high coordination and maintainability, avoids resource waste, and helps development teams focus on business itself. This framework offers efficient error stack tracing capabilities and possesses strong combat power and cohesion, providing the foundation for a virtuous cycle between enterprises and the community. The GoFrame framework achieves these features and is an essential tool for modern software development."},a=void 0,d={},c=[{value:"1. Technical Systematization",id:"1-technical-systematization",level:2},{value:"2. Development Standardization",id:"2-development-standardization",level:2},{value:"3. Component Unification",id:"3-component-unification",level:2},{value:"4. Version Consistency",id:"4-version-consistency",level:2},{value:"5. Solution Precipitation",id:"5-solution-precipitation",level:2},{value:"6. Avoid Resource Waste",id:"6-avoid-resource-waste",level:2}];function l(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:'The software industry is quite similar to the construction industry. If we say our product is a tall building, then program code is the bricks used to build it (our daily work is like "moving bricks" continuously). If software architecture is seen as the overarching plan, then program code is the key component for accurately implementing software architecture.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(995081).Z+"",width:"600",height:"331"})}),"\n",(0,t.jsx)(n.p,{children:"Given the importance of program code, the importance of development frameworks goes without saying. Development frameworks focus on the code level to solve general technical issues, aiming to allow developers to focus on the business itself, facilitate quick responses to business changes, and improve the overall efficiency of software development and maintenance."}),"\n",(0,t.jsx)(n.p,{children:"This chapter mainly introduces the significance and necessity of building a unified development framework."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Before starting this chapter, it is recommended that you understand the framework's: ",(0,t.jsx)(n.a,{href:"/en/docs/design/modular",children:"Modular Design"}),". Part of the inspiration and insights are from: ",(0,t.jsx)(n.a,{href:"/en/articles/framework-comparison-goframe-beego-iris-gin",children:"Xiaoma's Experience Sharing"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"1-technical-systematization",children:"1. Technical Systematization"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(824402).Z+"",width:"706",height:"838"})}),"\n",(0,t.jsx)(n.p,{children:"Systematization focuses more on the overall combat power of the framework rather than each module itself."}),"\n",(0,t.jsx)(n.p,{children:"Significant features of systematic framework design:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Comprehensive system, rich components"}),"\n",(0,t.jsx)(n.li,{children:"Unified standards, consistent style"}),"\n",(0,t.jsx)(n.li,{children:"Unified abstraction, tight design"}),"\n",(0,t.jsx)(n.li,{children:"Efficient execution, no redundant logic"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The systematization here refers to a top-down unified design of the micro-level code development framework, making the overall framework design thought integrated rather than scattered. Technically, solving a specific problem is relatively straightforward, and developing a specific module is relatively easy. However, abstracting and consolidating common issues, organizing independent modules according to a unified design philosophy, and generating strong overall combat power is not a simple task. This requires the framework designer to have a certain technical background, experience accumulation, vision, and foresight, rather than just focusing on individual modules."}),"\n",(0,t.jsx)(n.p,{children:"For example, even if we have never developed a framework, we should have used one to some extent and know what modules a framework should at least include. When we need to write logs, we know this component framework must provide, so we look for it in the framework and get usage help from the official website. When we need WebServer, database access, template engines, etc., we can also expect such components to be provided by the framework, so we look for them in the framework and get usage help from the official website."}),"\n",(0,t.jsxs)(n.p,{children:["Additionally, when using various modules in the framework, although each module is designed to be loosely coupled for selective use, we find that their configuration management methods are consistent. They use structured configuration management objects, the same configuration management module, and fixed configuration item-to-object attribute mapping rules. Getting and setting are done through methods prefixed with ",(0,t.jsx)(n.code,{children:"Get"}),"/",(0,t.jsx)(n.code,{children:"Set"})," (all component parameter retrievals and settings are also ",(0,t.jsx)(n.code,{children:"Get"}),"/",(0,t.jsx)(n.code,{children:"Set"})," methods). Global environment variables and startup parameter settings are similarly managed. This enables developers to quickly grasp the framework's behavior, facilitating quick integration and reducing learning costs."]}),"\n",(0,t.jsxs)(n.p,{children:["Furthermore, a great feature at the framework level is the full error stack feature, where all component ",(0,t.jsx)(n.code,{children:"errors"})," return with error stacks, allowing top-level business to quickly locate problems through error stacks when errors occur. Currently, only the ",(0,t.jsx)(n.code,{children:"GoFrame"})," framework in the ",(0,t.jsx)(n.code,{children:"Golang"})," development language provides this capability."]}),"\n",(0,t.jsx)(n.p,{children:"These are just a few simple examples. If you're interested, you can discover more intriguing points in the framework."}),"\n",(0,t.jsx)(n.p,{children:'Finally, we can ponder, why can we subconsciously understand the framework\'s behavior, and why does the framework offer high convenience and low integration costs, with modules having high organizational coordination despite a "high cohesion, low coupling" design philosophy? This phenomenon is due to whether a framework uses systematized design or is cobbled together.'}),"\n",(0,t.jsxs)(n.p,{children:["::: tip\nA fitting analogy: ",(0,t.jsx)(n.code,{children:"GoFrame"}),' is a highly disciplined, cohesive, and effective "regular army," not a "scattered team" that\'s "cobbled together."\n:::']}),"\n",(0,t.jsx)(n.h2,{id:"2-development-standardization",children:"2. Development Standardization"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(451826).Z+"",width:"1134",height:"346"})}),"\n",(0,t.jsxs)(n.p,{children:["Code level also requires a series of development standards, such as basic code structure, layering models, encapsulation design, etc. For specifics, please refer to: ",(0,t.jsx)(n.a,{href:"/en/docs/design/project",children:"Engineering Design \uD83D\uDD25"}),". A unified framework design ensures that all business projects are coded following a unified code design, forming uniform development standards. In addition, the framework's development toolchain makes it easier to quickly promote and implement development standards: ",(0,t.jsx)(n.a,{href:"/en/docs/cli",children:"CLI Tool"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"3-component-unification",children:"3. Component Unification"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(755106).Z+"",width:"654",height:"412"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Unification here has two layers:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Multiple identical function components unified into one component."}),"\n",(0,t.jsx)(n.li,{children:"Multiple different function components unified into framework management."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Another pain point is the flourishing development of components:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Multiple modules implementing the same function logic, increasing choice costs"}),"\n",(0,t.jsx)(n.li,{children:"Excessive modules dependencies, affecting project stability"}),"\n",(0,t.jsx)(n.li,{children:"Projects struggle whether to upgrade these module versions due to numerous dependencies"}),"\n",(0,t.jsx)(n.li,{children:"Different modules depending on different versions of the same third-party module, causing version compatibility issues"}),"\n",(0,t.jsx)(n.li,{children:"Isolated module design, making each module's replaceability high individually; hard to establish development systems and unify standards"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(63881).Z+"",width:"636",height:"410"})}),"\n",(0,t.jsxs)(n.p,{children:['Only a unified development framework can bring independent modules from " ',(0,t.jsx)(n.strong,{children:"each going its own way"}),'" to " ',(0,t.jsx)(n.strong,{children:"unified management"}),'":']}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Framework designed from top-down, forming a systematic and unified module design, facilitating the implementation of standardized development"}),"\n",(0,t.jsx)(n.li,{children:"Core framework maintains comprehensive common basic modules, reducing costs of basic module selection"}),"\n",(0,t.jsx)(n.li,{children:"We only need to maintain a unified framework version, not dozens of module versions"}),"\n",(0,t.jsx)(n.li,{children:"We only need to understand changes in one framework, not dozens of modules"}),"\n",(0,t.jsx)(n.li,{children:"During upgrades, only one framework version needs upgrading, not dozens of module versions"}),"\n",(0,t.jsx)(n.li,{children:"Unified modular design reduces unnecessary logic implementation, improving module performance and usability"}),"\n",(0,t.jsx)(n.li,{children:"Reduces mental load on developers, improving module maintainability, and making it easier to ensure module version consistency across business projects"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"4-version-consistency",children:"4. Version Consistency"}),"\n",(0,t.jsxs)(n.p,{children:["Version consistency issues mainly arise from excessive project module dependencies and versions, making it hard to maintain and upgrade versions uniformly. After the framework unifies module management, it's easier to ensure project module version consistency. However, note that this consistency is not strong consistency; it merely reduces module and version maintenance complexity, but inconsistency issues still exist. The pain points and improvements were introduced in previous chapters, and you may refer to: ",(0,t.jsx)(n.a,{href:"/en/docs/design/modular",children:"Modular Design"}),". No further details here."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["There are some ",(0,t.jsx)(n.strong,{children:"version strong consistency"})," code management solutions in the industry, such as using ",(0,t.jsx)(n.code,{children:"Monorepo"})," ",(0,t.jsx)(n.strong,{children:"large repository"})," code management. Each has its pros and cons, which you may explore yourself, and there's no further elaboration here."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"5-solution-precipitation",children:"5. Solution Precipitation"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(668104).Z+"",width:"622",height:"614"})}),"\n",(0,t.jsx)(n.p,{children:"Based on a unified development framework, it's easier to form solution precipitation, creating a virtuous cycle between enterprises and the community. Solution precipitation prioritizes adopting tools and code forms over documentation."}),"\n",(0,t.jsx)(n.h2,{id:"6-avoid-resource-waste",children:"6. Avoid Resource Waste"}),"\n",(0,t.jsx)(n.p,{children:"When every team tries to create their own wheels, not only does it fail to form a unified development standard, but it also leads to significant resource waste."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["This phenomenon is quite evident in the early days of ",(0,t.jsx)(n.code,{children:"Golang"})," or when an emerging company\u2019s technical system is underdeveloped."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(727798).Z+"",width:"640",height:"408"})}),"\n",(0,t.jsx)(n.p,{children:"Getting project teams to focus more on business is believed to be the consensus among most tech companies. A unified development architecture abstracts common technical problems and forms general solutions, avoiding each project independently tackling the multitude of encountered technical challenges, effectively freeing up focus."})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},755106:function(e,n,i){i.d(n,{Z:function(){return o}});let o=i.p+"assets/images/19cac91617dc457b461391e208b675b3-d909aea6b144db551cd4c4c357b38f65.png"},63881:function(e,n,i){i.d(n,{Z:function(){return o}});let o=i.p+"assets/images/1c16c5ec1bae23caaf9509673f782d0a-02e8b7cacbe78104532196e0e957989b.png"},824402:function(e,n,i){i.d(n,{Z:function(){return o}});let o=i.p+"assets/images/2b04e46ddf26d0d9233f84c9ba69c6f3-5d3726aa9af2857a45d2d2b5b4936dbb.png"},451826:function(e,n,i){i.d(n,{Z:function(){return o}});let o=i.p+"assets/images/5f76d7bd6d1a06dce9641fec0c497b77-67eba52a1ae1c7ade20f39231035b41a.png"},668104:function(e,n,i){i.d(n,{Z:function(){return o}});let o=i.p+"assets/images/642e90cfc4809a4f237073c7e80f25d5-cad7bcf03d946bd6976644bf92024742.png"},995081:function(e,n,i){i.d(n,{Z:function(){return o}});let o=i.p+"assets/images/8f8075c3f449ab501c9d25ce5050db52-cdd22f79f4b0ea437f1466a8e50a447d.png"},727798:function(e,n,i){i.d(n,{Z:function(){return o}});let o=i.p+"assets/images/fb5e4135a82ff9ca41c79db9a4c6b89c-558ec728bfc08985f40672afe90b6b0a.jpeg"},250065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return r}});var o=i(667294);let t={},s=o.createContext(t);function r(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
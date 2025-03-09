"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["83250"],{165128:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>t,toc:()=>c,frontMatter:()=>o});var s=JSON.parse('{"id":"examples/nosql/redis/redis","title":"Redis","description":"An example demonstrating Redis integration in GoFrame","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/examples/nosql/redis/redis.md","sourceDirName":"examples/nosql/redis","slug":"/examples/nosql/redis","permalink":"/en/examples/nosql/redis","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/examples/nosql/redis/redis.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1740107000000,"sidebarPosition":1,"frontMatter":{"title":"Redis","slug":"/examples/nosql/redis","keywords":["nosql","redis","cache","database","goframe"],"description":"An example demonstrating Redis integration in GoFrame","hide_title":true,"sidebar_position":1},"sidebar":"examplesSidebar","previous":{"title":"NoSQL","permalink":"/en/examples/nosql"},"next":{"title":"MongoDB","permalink":"/en/examples/nosql/mongodb"}}'),r=i("785893"),d=i("250065");let o={title:"Redis",slug:"/examples/nosql/redis",keywords:["nosql","redis","cache","database","goframe"],description:"An example demonstrating Redis integration in GoFrame",hide_title:!0,sidebar_position:1},l="GoFrame Redis Example",t={},c=[{value:"Overview",id:"overview",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Running Redis with Docker",id:"running-redis-with-docker",level:2},{value:"Running the Example",id:"running-the-example",level:2},{value:"Code Structure",id:"code-structure",level:2},{value:"Features",id:"features",level:2},{value:"Further Reading",id:"further-reading",level:2},{value:"Notes",id:"notes",level:2}];function a(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"goframe-redis-example",children:"GoFrame Redis Example"})}),"\n",(0,r.jsxs)(n.p,{children:["Github Source: ",(0,r.jsx)(n.a,{href:"https://github.com/gogf/examples/tree/main/nosql/redis",children:"https://github.com/gogf/examples/tree/main/nosql/redis"})]}),"\n",(0,r.jsxs)(n.p,{children:["This example demonstrates how to use ",(0,r.jsx)(n.code,{children:"Redis"})," with ",(0,r.jsx)(n.code,{children:"GoFrame"})," framework."]}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"This example shows:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["How to configure ",(0,r.jsx)(n.code,{children:"Redis"})," connection using ",(0,r.jsx)(n.code,{children:"YAML"})," configuration"]}),"\n",(0,r.jsxs)(n.li,{children:["How to create a ",(0,r.jsx)(n.code,{children:"Redis"})," client"]}),"\n",(0,r.jsxs)(n.li,{children:["Basic ",(0,r.jsx)(n.code,{children:"Redis"})," operations (",(0,r.jsx)(n.code,{children:"SET"}),"/",(0,r.jsx)(n.code,{children:"GET"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Go 1.15"})," or higher"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Redis"})," server"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"GoFrame v2"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Redis"})," configuration is stored in ",(0,r.jsx)(n.code,{children:"config.yaml"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'redis:\n  address: "127.0.0.1:6379"\n  password:\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can modify these settings according to your ",(0,r.jsx)(n.code,{children:"Redis"})," server configuration."]}),"\n",(0,r.jsx)(n.h2,{id:"running-redis-with-docker",children:"Running Redis with Docker"}),"\n",(0,r.jsxs)(n.p,{children:["If you don't have ",(0,r.jsx)(n.code,{children:"Redis"})," installed locally, you can quickly start a ",(0,r.jsx)(n.code,{children:"Redis"})," instance using ",(0,r.jsx)(n.code,{children:"Docker"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Run Redis container\ndocker run --name redis-test -p 6379:6379 -d redis:latest\n\n# Verify the container is running\ndocker ps\n\n# If you need to stop the container later\ndocker stop redis-test\n\n# If you need to remove the container\ndocker rm redis-test\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.code,{children:"Redis"})," with password authentication:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# Run Redis with password\ndocker run --name redis-test -p 6379:6379 -d redis:latest redis-server --requirepass your_password\n\n# Remember to update config.yaml accordingly:\n# redis:\n#   address: "127.0.0.1:6379"\n#   password: "your_password"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"running-the-example",children:"Running the Example"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Make sure your ",(0,r.jsx)(n.code,{children:"Redis"})," server is running"]}),"\n",(0,r.jsxs)(n.li,{children:["Update the ",(0,r.jsx)(n.code,{children:"config.yaml"})," if needed"]}),"\n",(0,r.jsx)(n.li,{children:"Run the example:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go run main.go\n"})}),"\n",(0,r.jsx)(n.h2,{id:"code-structure",children:"Code Structure"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"main.go"}),": Contains the main logic and ",(0,r.jsx)(n.code,{children:"Redis"})," client initialization"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"config.yaml"}),": ",(0,r.jsx)(n.code,{children:"Redis"})," configuration file"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Redis"})," client initialization with error handling"]}),"\n",(0,r.jsxs)(n.li,{children:["Configuration management using ",(0,r.jsx)(n.code,{children:"GoFrame"}),"'s configuration system"]}),"\n",(0,r.jsxs)(n.li,{children:["Basic ",(0,r.jsx)(n.code,{children:"Redis"})," operations demonstration"]}),"\n",(0,r.jsx)(n.li,{children:"Proper error handling and logging"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,r.jsxs)(n.p,{children:["For more advanced ",(0,r.jsx)(n.code,{children:"Redis"})," usage, please refer to the third-party package ",(0,r.jsx)(n.a,{href:"https://github.com/redis/go-redis",children:"github.com/redis/go-redis"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The example uses ",(0,r.jsx)(n.code,{children:"go-redis/v9"})," client"]}),"\n",(0,r.jsx)(n.li,{children:"All operations are performed with context for proper cancellation and timeout handling"}),"\n",(0,r.jsx)(n.li,{children:"The code includes proper error handling and logging"}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return o}});var s=i(667294);let r={},d=s.createContext(r);function o(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);
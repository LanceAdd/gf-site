"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["18622"],{552477:function(e,i,n){n.r(i),n.d(i,{metadata:()=>r,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>s});var r=JSON.parse('{"id":"course/proxima-book/\u7B2C\u4E00\u7AE0-\u57FA\u7840\u4FE1\u606F/1.2.\u67B6\u6784\u4ECB\u7ECD","title":"1.2 Architecture Overview","description":"An overview of the Proxima Notebook project\'s microservices architecture, including the functional separation of user and word services, and the role and responsibilities of the API gateway, detailing inter-service communication methods and core gateway functions.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/course/proxima-book/\u7B2C\u4E00\u7AE0-\u57FA\u7840\u4FE1\u606F/1.2.\u67B6\u6784\u4ECB\u7ECD.md","sourceDirName":"course/proxima-book/\u7B2C\u4E00\u7AE0-\u57FA\u7840\u4FE1\u606F","slug":"/course/proxima-book/about-arch","permalink":"/en/course/proxima-book/about-arch","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/course/proxima-book/\u7B2C\u4E00\u7AE0-\u57FA\u7840\u4FE1\u606F/1.2.\u67B6\u6784\u4ECB\u7ECD.md","tags":[],"version":"current","lastUpdatedBy":"oldme","lastUpdatedAt":1734398801000,"frontMatter":{"title":"1.2 Architecture Overview","hide_title":true,"slug":"/course/proxima-book/about-arch","keywords":["GoFrame","microservices","architecture design","API gateway","user service","word service","gRPC","HTTP","load balancing","authentication"],"description":"An overview of the Proxima Notebook project\'s microservices architecture, including the functional separation of user and word services, and the role and responsibilities of the API gateway, detailing inter-service communication methods and core gateway functions."},"sidebar":"courseProximaBookSidebar","previous":{"title":"1.1 Writing Conventions","permalink":"/en/course/proxima-book/about-convention"},"next":{"title":"1.3 Environment Setup","permalink":"/en/course/proxima-book/about-prepare"}}'),o=n("785893"),t=n("250065");let s={title:"1.2 Architecture Overview",hide_title:!0,slug:"/course/proxima-book/about-arch",keywords:["GoFrame","microservices","architecture design","API gateway","user service","word service","gRPC","HTTP","load balancing","authentication"],description:"An overview of the Proxima Notebook project's microservices architecture, including the functional separation of user and word services, and the role and responsibilities of the API gateway, detailing inter-service communication methods and core gateway functions."},a=void 0,c={},l=[{value:"Code Repository",id:"code-repository",level:2}];function d(e){let i={code:"code",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.strong,{children:"Proxima Notebook"})," is a lightweight application designed to help users learn English vocabulary. It includes the following features:"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"User registration"}),"\n",(0,o.jsx)(i.li,{children:"User login"}),"\n",(0,o.jsx)(i.li,{children:"User information queries"}),"\n",(0,o.jsx)(i.li,{children:"Word management (CRUD operations)"}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"We've organized these features into logical groups, resulting in two microservices:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"User Service: Handles user registration, login, and information queries"}),"\n",(0,o.jsx)(i.li,{children:"Word Service: Provides word-related functionality, such as CRUD operations"}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"Rather than exposing microservices directly, all requests are routed through an API gateway. The gateway operates as a web service that doesn't implement business logic directly. Instead, it receives requests, forwards them to appropriate microservices, and aggregates responses to complete business operations."}),"\n",(0,o.jsx)(i.p,{children:"The gateway's responsibilities extend beyond protocol translation, including:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Load balancing"}),"\n",(0,o.jsx)(i.li,{children:"Authentication and authorization"}),"\n",(0,o.jsx)(i.li,{children:"Logging"}),"\n",(0,o.jsx)(i.li,{children:"Monitoring"}),"\n",(0,o.jsx)(i.li,{children:"Rate limiting"}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"Microservices typically communicate using either HTTP or gRPC protocols. In this project, we'll be using gRPC."}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:n(326777).Z+"",width:"408",height:"423"})}),"\n",(0,o.jsx)(i.h2,{id:"code-repository",children:"Code Repository"}),"\n",(0,o.jsx)(i.hr,{}),"\n",(0,o.jsx)(i.p,{children:"When breaking down a monolithic service into microservices, the code naturally separates as well. There are two common approaches to managing the code repository:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.strong,{children:"Multirepo:"})," Each microservice has its own repository."]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Advantages: Smaller, more manageable repositories"}),"\n",(0,o.jsx)(i.li,{children:"Disadvantages: Requires additional tools and processes to coordinate dependencies and versions between services"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.strong,{children:"Monorepo:"})," All microservices code lives in a single repository."]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Advantages: Unified version and dependency management"}),"\n",(0,o.jsx)(i.li,{children:"Disadvantages: Repository can become large and complex to manage"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["Our project uses the ",(0,o.jsx)(i.code,{children:"Monorepo"})," approach. The ",(0,o.jsx)(i.code,{children:"Multirepo"})," approach, with its one-service-per-directory structure, is straightforward enough to not require further explanation."]})]})}function u(e={}){let{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},326777:function(e,i,n){n.d(i,{Z:function(){return r}});let r=n.p+"assets/images/architecture-6e3b3228068308bc6810664b50a01640.png"},250065:function(e,i,n){n.d(i,{Z:function(){return a},a:function(){return s}});var r=n(667294);let o={},t=r.createContext(o);function s(e){let i=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);
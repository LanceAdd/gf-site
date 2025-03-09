"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["38328"],{182542:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>o,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>i});var a=JSON.parse('{"id":"quick/\u9879\u76EE\u811A\u624B\u67B6/\u63A5\u53E3\u5F00\u53D1/Step1 - \u8BBE\u8BA1\u6570\u636E\u8868","title":"Step1 - Design Data Structure","description":"Design and apply MySQL data tables. We define the structure of data tables for user information and practice operations by running MySQL with Docker, including creating table structures and applying SQL statements, helping you quickly master database operation skills.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/quick/\u9879\u76EE\u811A\u624B\u67B6/\u63A5\u53E3\u5F00\u53D1/Step1 - \u8BBE\u8BA1\u6570\u636E\u8868.md","sourceDirName":"quick/\u9879\u76EE\u811A\u624B\u67B6/\u63A5\u53E3\u5F00\u53D1","slug":"/quick/scaffold-api-sql","permalink":"/en/quick/scaffold-api-sql","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/quick/\u9879\u76EE\u811A\u624B\u67B6/\u63A5\u53E3\u5F00\u53D1/Step1 - \u8BBE\u8BA1\u6570\u636E\u8868.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732434661000,"sidebarPosition":0,"frontMatter":{"slug":"/quick/scaffold-api-sql","title":"Step1 - Design Data Structure","hide_title":true,"sidebar_position":0,"keywords":["GoFrame","Data Table Design","MySQL Database","Docker","SQL Statements","InnoDB","Auto Increment","varchar","Database Connection","User Status"],"description":"Design and apply MySQL data tables. We define the structure of data tables for user information and practice operations by running MySQL with Docker, including creating table structures and applying SQL statements, helping you quickly master database operation skills."},"sidebar":"quickSidebar","previous":{"title":"API Development Tutorial\uD83C\uDF1F","permalink":"/en/quick/scaffold-api"},"next":{"title":"Step2 - Generate dao/do/entity","permalink":"/en/quick/scaffold-api-gen-dao"}}'),s=n("785893"),r=n("250065");let i={slug:"/quick/scaffold-api-sql",title:"Step1 - Design Data Structure",hide_title:!0,sidebar_position:0,keywords:["GoFrame","Data Table Design","MySQL Database","Docker","SQL Statements","InnoDB","Auto Increment","varchar","Database Connection","User Status"],description:"Design and apply MySQL data tables. We define the structure of data tables for user information and practice operations by running MySQL with Docker, including creating table structures and applying SQL statements, helping you quickly master database operation skills."},o=void 0,l={},c=[{value:"Design Data Structure SQL",id:"design-data-structure-sql",level:2},{value:"Apply Data Structure SQL",id:"apply-data-structure-sql",level:2},{value:"Learning Summary",id:"learning-summary",level:2}];function d(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"design-data-structure-sql",children:"Design Data Structure SQL"}),"\n",(0,s.jsxs)(t.p,{children:["First, we define a data table. The following is the ",(0,s.jsx)(t.code,{children:"SQL"})," file of the data table to be used in this chapter's example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE `user` (\n  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'user id',\n  `name` varchar(45) DEFAULT NULL COMMENT 'user name',\n  `status` tinyint DEFAULT NULL COMMENT 'user status',\n  `age` tinyint unsigned DEFAULT NULL COMMENT 'user age',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"apply-data-structure-sql",children:"Apply Data Structure SQL"}),"\n",(0,s.jsxs)(t.p,{children:["We need to apply this data table to the ",(0,s.jsx)(t.code,{children:"mysql"})," database for subsequent use. If you don't have a ",(0,s.jsx)(t.code,{children:"mysql"})," database service locally, you can use ",(0,s.jsx)(t.code,{children:"docker"})," to run one:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"docker run -d --name mysql \\\n -p 3306:3306 \\\n -e MYSQL_DATABASE=test \\\n -e MYSQL_ROOT_PASSWORD=12345678 \\\n loads/mysql:5.7\n"})}),"\n",(0,s.jsxs)(t.p,{children:["After starting, connect to the database and apply the table creation ",(0,s.jsx)(t.code,{children:"sql"})," statements:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"$ mysql -h127.0.0.1 -p3306 -uroot -p\nmysql: [Warning] Using a password on the command line API can be insecure.\nEnter password: \nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 57\nServer version: 9.0.1 Homebrew\n\nCopyright (c) 2000, 2024, Oracle and/or its affiliates.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> use test;\nDatabase changed\nmysql> CREATE TABLE `user` (\n    ->   `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'user id',\n    ->   `name` varchar(45) DEFAULT NULL COMMENT 'user name',\n    ->   `status` tinyint DEFAULT NULL COMMENT 'user status',\n    ->   `age` tinyint unsigned DEFAULT NULL COMMENT 'user age',\n    ->   PRIMARY KEY (`id`)\n    -> ) ENGINE=InnoDB DEFAULT CHARSET=utf8;\nQuery OK, 0 rows affected, 2 warnings (0.02 sec)\n\nmysql> \n"})}),"\n",(0,s.jsx)(t.h2,{id:"learning-summary",children:"Learning Summary"}),"\n",(0,s.jsxs)(t.p,{children:["It is a good development practice to design database tables before API development. Here we are using the ",(0,s.jsx)(t.code,{children:"mysql"})," database, which requires setting up/running the database service first."]}),"\n",(0,s.jsx)(t.p,{children:"After designing the database table, we can use a scaffold tool to automatically generate corresponding database operation-related files in the next step."})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return i}});var a=n(667294);let s={},r=a.createContext(s);function i(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);
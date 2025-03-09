"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["87466"],{727171:function(n,e,i){i.r(e),i.d(e,{metadata:()=>l,contentTitle:()=>c,default:()=>u,assets:()=>t,toc:()=>a,frontMatter:()=>o});var l=JSON.parse('{"id":"examples/config/kubecm/kubecm","title":"Kubernetes ConfigMap","description":"Kubernetes ConfigMap configuration integration with GoFrame","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/examples/config/kubecm/kubecm.md","sourceDirName":"examples/config/kubecm","slug":"/examples/config/kubecm","permalink":"/en/examples/config/kubecm","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/examples/config/kubecm/kubecm.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1740107000000,"frontMatter":{"title":"Kubernetes ConfigMap","slug":"/examples/config/kubecm","keywords":["config","kubernetes","configmap","goframe"],"description":"Kubernetes ConfigMap configuration integration with GoFrame","hide_title":true},"sidebar":"examplesSidebar","previous":{"title":"Consul","permalink":"/en/examples/config/consul"},"next":{"title":"Nacos","permalink":"/en/examples/config/nacos"}}'),s=i("785893"),r=i("250065");let o={title:"Kubernetes ConfigMap",slug:"/examples/config/kubecm",keywords:["config","kubernetes","configmap","goframe"],description:"Kubernetes ConfigMap configuration integration with GoFrame",hide_title:!0},c="Kubernetes ConfigMap Configuration Example",t={},a=[{value:"Description",id:"description",level:2},{value:"Directory Structure",id:"directory-structure",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Features",id:"features",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<code>Kubernetes</code> Setup",id:"kubernetes-setup",level:3},{value:"Client Configuration",id:"client-configuration",level:3},{value:"Usage",id:"usage",level:2},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Notes",id:"notes",level:2}];function d(n){let e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsxs)(e.h1,{id:"kubernetes-configmap-configuration-example",children:[(0,s.jsx)(e.code,{children:"Kubernetes ConfigMap"})," Configuration Example"]})}),"\n",(0,s.jsxs)(e.p,{children:["Github Source: ",(0,s.jsx)(e.a,{href:"https://github.com/gogf/examples/tree/main/config/kubecm",children:"https://github.com/gogf/examples/tree/main/config/kubecm"})]}),"\n",(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(e.p,{children:["This directory contains an example demonstrating how to integrate ",(0,s.jsx)(e.code,{children:"Kubernetes ConfigMap"})," with ",(0,s.jsx)(e.code,{children:"GoFrame"})," applications for configuration management. It shows:"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Kubernetes"})," Client Configuration"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"In-Pod configuration setup"}),"\n",(0,s.jsx)(e.li,{children:"Out-of-Pod configuration setup"}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"ConfigMap"})," access and management"]}),"\n",(0,s.jsx)(e.li,{children:"Error handling and logging"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Configuration Management"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Configuration loading and parsing"}),"\n",(0,s.jsx)(e.li,{children:"Dynamic configuration updates"}),"\n",(0,s.jsx)(e.li,{children:"Configuration value retrieval"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"directory-structure",children:"Directory Structure"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:".\n\u251C\u2500\u2500 boot_in_pod/     # Bootstrap configuration for in-pod deployment\n\u2502   \u2514\u2500\u2500 boot.go      # In-pod client initialization\n\u251C\u2500\u2500 boot_out_pod/    # Bootstrap configuration for out-of-pod deployment\n\u2502   \u2514\u2500\u2500 boot.go      # Out-of-pod client initialization\n\u251C\u2500\u2500 main.go          # Main application entry\n\u251C\u2500\u2500 go.mod           # Go module file\n\u2514\u2500\u2500 go.sum           # Go module checksums\n"})}),"\n",(0,s.jsx)(e.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://golang.org/dl/",children:"Go"})," ",(0,s.jsx)(e.code,{children:"1.22"})," or higher"]}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://goframe.org",children:"GoFrame"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/gogf/gf/tree/master/contrib/config/kubecm",children:"GoFrame Kubernetes ConfigMap Config"})}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"features",children:"Features"}),"\n",(0,s.jsx)(e.p,{children:"The example showcases the following features:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Kubernetes"})," Integration"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"In-Pod configuration"}),"\n",(0,s.jsx)(e.li,{children:"Out-of-Pod configuration"}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"ConfigMap"})," management"]}),"\n",(0,s.jsx)(e.li,{children:"Error handling"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Configuration Management"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Configuration loading"}),"\n",(0,s.jsx)(e.li,{children:"Value retrieval"}),"\n",(0,s.jsx)(e.li,{children:"Type conversion"}),"\n",(0,s.jsx)(e.li,{children:"Default values"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Dynamic Updates"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Configuration watching"}),"\n",(0,s.jsx)(e.li,{children:"Change notification"}),"\n",(0,s.jsx)(e.li,{children:"Hot reload support"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(e.h3,{id:"kubernetes-setup",children:[(0,s.jsx)(e.code,{children:"Kubernetes"})," Setup"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Cluster Configuration:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"Kubernetes"})," cluster access"]}),"\n",(0,s.jsx)(e.li,{children:"Namespace management"}),"\n",(0,s.jsx)(e.li,{children:"RBAC permissions"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ConfigMap"})," Setup:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"ConfigMap"})," creation"]}),"\n",(0,s.jsx)(e.li,{children:"Data item management"}),"\n",(0,s.jsx)(e.li,{children:"Access control"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"client-configuration",children:"Client Configuration"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"In-Pod Settings:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Automatic service account"}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"ConfigMap"})," name"]}),"\n",(0,s.jsx)(e.li,{children:"Data item name"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Out-of-Pod Settings:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"KubeConfig"})," path"]}),"\n",(0,s.jsx)(e.li,{children:"Namespace selection"}),"\n",(0,s.jsx)(e.li,{children:"Client configuration"}),"\n",(0,s.jsx)(e.li,{children:"Access permissions"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Create ",(0,s.jsx)(e.code,{children:"ConfigMap"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# Create a ConfigMap with configuration data\nkubectl create configmap test-configmap --from-file=config.yaml=./config.yaml\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Configure Access:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# Ensure proper RBAC permissions\nkubectl create role config-reader --verb=get,list,watch --resource=configmaps\nkubectl create rolebinding config-reader-binding --role=config-reader --serviceaccount=default:default\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Run Example:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# For in-pod deployment\ngo run main.go\n\n# For out-of-pod deployment (local development)\nKUBE_CONFIG=~/.kube/config go run main.go\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"implementation-details",children:"Implementation Details"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["In-Pod Setup (",(0,s.jsx)(e.code,{children:"boot_in_pod/boot.go"}),"):"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Simple configuration for in-pod deployment"}),"\n",(0,s.jsx)(e.li,{children:"Automatic service account usage"}),"\n",(0,s.jsx)(e.li,{children:"Minimal configuration required"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Out-of-Pod Setup (",(0,s.jsx)(e.code,{children:"boot_out_pod/boot.go"}),"):"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"External cluster access configuration"}),"\n",(0,s.jsx)(e.li,{children:"KubeConfig file usage"}),"\n",(0,s.jsx)(e.li,{children:"Namespace specification"}),"\n",(0,s.jsx)(e.li,{children:"Custom client configuration"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Configuration Access (",(0,s.jsx)(e.code,{children:"main.go"}),"):"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Configuration availability check"}),"\n",(0,s.jsx)(e.li,{children:"Bulk configuration retrieval"}),"\n",(0,s.jsx)(e.li,{children:"Single value access"}),"\n",(0,s.jsx)(e.li,{children:"Error handling"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"The example supports both in-pod and out-of-pod deployments"}),"\n",(0,s.jsx)(e.li,{children:"In-pod deployment uses the pod's service account"}),"\n",(0,s.jsx)(e.li,{children:"Out-of-pod deployment requires KubeConfig file"}),"\n",(0,s.jsx)(e.li,{children:"ConfigMap changes are automatically reflected"}),"\n",(0,s.jsx)(e.li,{children:"Proper RBAC permissions are required"}),"\n",(0,s.jsx)(e.li,{children:"Configuration paths can be customized based on needs"}),"\n"]})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return c},a:function(){return o}});var l=i(667294);let s={},r=l.createContext(s);function o(n){let e=l.useContext(r);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);
"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["44093"],{793778:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>m,assets:()=>a,toc:()=>o,frontMatter:()=>l});var i=JSON.parse('{"id":"examples/observability/metric/dynamic_attributes/dynamic_attributes","title":"\u52A8\u6001\u5C5E\u6027","description":"GoFrame\u4E2D\u52A8\u6001\u6307\u6807\u5C5E\u6027\u7684\u5B9E\u73B0","source":"@site/docs/examples/observability/metric/dynamic_attributes/dynamic_attributes.md","sourceDirName":"examples/observability/metric/dynamic_attributes","slug":"/examples/observability/metric/dynamic_attributes","permalink":"/examples/observability/metric/dynamic_attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/examples/observability/metric/dynamic_attributes/dynamic_attributes.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1740107000000,"sidebarPosition":1,"frontMatter":{"title":"\u52A8\u6001\u5C5E\u6027","slug":"/examples/observability/metric/dynamic_attributes","keywords":["\u6307\u6807","\u52A8\u6001\u5C5E\u6027","prometheus","opentelemetry","goframe"],"description":"GoFrame\u4E2D\u52A8\u6001\u6307\u6807\u5C5E\u6027\u7684\u5B9E\u73B0","hide_title":true,"sidebar_position":1},"sidebar":"examplesSidebar","previous":{"title":"\u56DE\u8C03\u5904\u7406","permalink":"/examples/observability/metric/callback"},"next":{"title":"\u5168\u5C40\u5C5E\u6027","permalink":"/examples/observability/metric/global_attributes"}}'),r=t("785893"),s=t("250065");let l={title:"\u52A8\u6001\u5C5E\u6027",slug:"/examples/observability/metric/dynamic_attributes",keywords:["\u6307\u6807","\u52A8\u6001\u5C5E\u6027","prometheus","opentelemetry","goframe"],description:"GoFrame\u4E2D\u52A8\u6001\u6307\u6807\u5C5E\u6027\u7684\u5B9E\u73B0",hide_title:!0,sidebar_position:1},c="\u6307\u6807\u6536\u96C6 - \u52A8\u6001\u5C5E\u6027",a={},o=[{value:"\u7B80\u4ECB",id:"\u7B80\u4ECB",level:2},{value:"\u76EE\u5F55\u7ED3\u6784",id:"\u76EE\u5F55\u7ED3\u6784",level:2},{value:"\u529F\u80FD\u7279\u6027",id:"\u529F\u80FD\u7279\u6027",level:2},{value:"\u73AF\u5883\u8981\u6C42",id:"\u73AF\u5883\u8981\u6C42",level:2},{value:"\u4F7F\u7528\u8BF4\u660E",id:"\u4F7F\u7528\u8BF4\u660E",level:2},{value:"\u5B9E\u73B0\u8BF4\u660E",id:"\u5B9E\u73B0\u8BF4\u660E",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u6307\u6807\u6536\u96C6---\u52A8\u6001\u5C5E\u6027",children:"\u6307\u6807\u6536\u96C6 - \u52A8\u6001\u5C5E\u6027"})}),"\n",(0,r.jsxs)(n.p,{children:["Github Source: ",(0,r.jsx)(n.a,{href:"https://github.com/gogf/examples/tree/main/observability/metric/dynamic_attributes",children:"https://github.com/gogf/examples/tree/main/observability/metric/dynamic_attributes"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u7B80\u4ECB",children:"\u7B80\u4ECB"}),"\n",(0,r.jsxs)(n.p,{children:["\u672C\u793A\u4F8B\u6F14\u793A\u4E86\u5982\u4F55\u5728 ",(0,r.jsx)(n.code,{children:"GoFrame"})," \u4E2D\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"OpenTelemetry"})," \u548C ",(0,r.jsx)(n.code,{children:"Prometheus"})," \u96C6\u6210\u6765\u5B9E\u73B0\u52A8\u6001\u6307\u6807\u5C5E\u6027\u3002\u4E3B\u8981\u5C55\u793A\uFF1A"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5728\u8FD0\u884C\u65F6\u4E3A\u6307\u6807\u6DFB\u52A0\u52A8\u6001\u5C5E\u6027"}),"\n",(0,r.jsx)(n.li,{children:"\u7EC4\u5408\u4F7F\u7528\u5E38\u91CF\u5C5E\u6027\u548C\u52A8\u6001\u5C5E\u6027"}),"\n",(0,r.jsx)(n.li,{children:"\u5728\u5E38\u89C4\u6307\u6807\u548C\u53EF\u89C2\u5BDF\u6307\u6807\u4E2D\u4F7F\u7528\u5C5E\u6027"}),"\n",(0,r.jsx)(n.li,{children:"\u5BFC\u51FA\u5E26\u6709\u52A8\u6001\u5C5E\u6027\u7684\u6307\u6807"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u76EE\u5F55\u7ED3\u6784",children:"\u76EE\u5F55\u7ED3\u6784"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:".\n\u251C\u2500\u2500 go.mod            # Go\u6A21\u5757\u6587\u4EF6\n\u251C\u2500\u2500 go.sum            # Go\u6A21\u5757\u6821\u9A8C\u548C\n\u2514\u2500\u2500 main.go           # \u4E3B\u7A0B\u5E8F\uFF0C\u6F14\u793A\u52A8\u6001\u5C5E\u6027\u4F7F\u7528\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u529F\u80FD\u7279\u6027",children:"\u529F\u80FD\u7279\u6027"}),"\n",(0,r.jsx)(n.p,{children:"\u672C\u793A\u4F8B\u5C55\u793A\u4E86\u4EE5\u4E0B\u529F\u80FD\uFF1A"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u52A8\u6001\u5C5E\u6027"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8FD0\u884C\u65F6\u5C5E\u6027\u8D4B\u503C"}),"\n",(0,r.jsx)(n.li,{children:"\u5C5E\u6027\u7EC4\u5408\u4F7F\u7528"}),"\n",(0,r.jsx)(n.li,{children:"\u57FA\u4E8E\u503C\u7684\u5C5E\u6027"}),"\n",(0,r.jsx)(n.li,{children:"\u7075\u6D3B\u7684\u6807\u7B7E\u7BA1\u7406"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5E26\u5C5E\u6027\u7684\u6307\u6807\u7C7B\u578B"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5E26\u52A8\u6001\u5C5E\u6027\u7684\u8BA1\u6570\u5668"}),"\n",(0,r.jsx)(n.li,{children:"\u5E26\u52A8\u6001\u5C5E\u6027\u7684\u53EF\u89C2\u5BDF\u8BA1\u6570\u5668"}),"\n",(0,r.jsx)(n.li,{children:"\u5E38\u91CF\u5C5E\u6027\u57FA\u7EBF"}),"\n",(0,r.jsx)(n.li,{children:"\u5C5E\u6027\u7EE7\u627F\u673A\u5236"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5C5E\u6027\u7BA1\u7406"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5C5E\u6027\u521B\u5EFA"}),"\n",(0,r.jsx)(n.li,{children:"\u503C\u7C7B\u578B\u5904\u7406"}),"\n",(0,r.jsx)(n.li,{children:"\u5C5E\u6027\u4F5C\u7528\u57DF"}),"\n",(0,r.jsx)(n.li,{children:"\u5C5E\u6027\u751F\u547D\u5468\u671F"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u73AF\u5883\u8981\u6C42",children:"\u73AF\u5883\u8981\u6C42"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Go"})," ",(0,r.jsx)(n.code,{children:"1.22"})," \u6216\u66F4\u9AD8\u7248\u672C"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GoFrame OpenTelemetry Metric"})," \u6269\u5C55"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F7F\u7528\u8BF4\u660E",children:"\u4F7F\u7528\u8BF4\u660E"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u8FD0\u884C\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go run main.go\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u8BBF\u95EE\u6307\u6807\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u4F7F\u7528curl\ncurl http://localhost:8000/metrics\n\n# \u6216\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\nhttp://localhost:8000/metrics\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6307\u6807\u8F93\u51FA\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'# HELP goframe_metric_demo_counter \u8FD9\u662FCounter\u4F7F\u7528\u7684\u7B80\u5355\u6F14\u793A\ngoframe_metric_demo_counter{const_attr_1="1",dynamic_attr_2="2"} 11\n\n# HELP goframe_metric_demo_observable_counter \u8FD9\u662FObservableCounter\u4F7F\u7528\u7684\u7B80\u5355\u6F14\u793A\ngoframe_metric_demo_observable_counter{const_attr_4="4",dynamic_attr_1="1"} 10\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5B9E\u73B0\u8BF4\u660E",children:"\u5B9E\u73B0\u8BF4\u660E"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5E38\u89C4\u6307\u6807\u7684\u52A8\u6001\u5C5E\u6027"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'counter := meter.MustCounter(\n    "goframe.metric.demo.counter",\n    gmetric.MetricOption{\n        Help: "\u8BA1\u6570\u5668\u793A\u4F8B",\n        Unit: "bytes",\n        Attributes: gmetric.Attributes{\n            gmetric.NewAttribute("const_attr_1", 1), // \u5E38\u91CF\u5C5E\u6027\n        },\n    },\n)\n\n// \u6DFB\u52A0\u52A8\u6001\u5C5E\u6027\ncounter.Add(ctx, 10, gmetric.Option{\n    Attributes: gmetric.Attributes{\n        gmetric.NewAttribute("dynamic_attr_2", 2), // \u52A8\u6001\u5C5E\u6027\n    },\n})\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u53EF\u89C2\u5BDF\u6307\u6807\u7684\u52A8\u6001\u5C5E\u6027"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'observableCounter := meter.MustObservableCounter(\n    "goframe.metric.demo.observable_counter",\n    gmetric.MetricOption{\n        Help: "\u53EF\u89C2\u5BDF\u8BA1\u6570\u5668\u793A\u4F8B",\n        Unit: "%",\n        Attributes: gmetric.Attributes{\n            gmetric.NewAttribute("const_attr_4", 4), // \u5E38\u91CF\u5C5E\u6027\n        },\n    },\n)\n\n// \u5728\u56DE\u8C03\u4E2D\u6DFB\u52A0\u52A8\u6001\u5C5E\u6027\nmeter.MustRegisterCallback(func(ctx context.Context, obs gmetric.Observer) error {\n    obs.Observe(observableCounter, 10, gmetric.Option{\n        Attributes: gmetric.Attributes{\n            gmetric.NewAttribute("dynamic_attr_1", 1), // \u52A8\u6001\u5C5E\u6027\n        },\n    })\n    return nil\n}, observableCounter)\n'})}),"\n"]}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var i=t(667294);let r={},s=i.createContext(r);function l(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
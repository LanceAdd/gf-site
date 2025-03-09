"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["59664"],{619281:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>c,default:()=>a,assets:()=>d,toc:()=>l,frontMatter:()=>o});var r=JSON.parse('{"id":"docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u76D1\u63A7\u544A\u8B66/\u76D1\u63A7\u544A\u8B66-\u5185\u7F6E\u6307\u6807","title":"Metrics - Built-in Metrics","description":"Usage of built-in metrics for monitoring alerts in the GoFrame framework, including how to enable Go basic metrics with otelmetric, and how to integrate with Prometheus and OpenTelemetry for performance monitoring and optimization. The document provides example code and detailed descriptions of metrics, including metric names, types, and descriptions, to assist users in understanding and implementing performance monitoring.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u76D1\u63A7\u544A\u8B66/\u76D1\u63A7\u544A\u8B66-\u5185\u7F6E\u6307\u6807.md","sourceDirName":"docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u76D1\u63A7\u544A\u8B66","slug":"/docs/obs/metrics-builtin","permalink":"/en/docs/obs/metrics-builtin","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u76D1\u63A7\u544A\u8B66/\u76D1\u63A7\u544A\u8B66-\u5185\u7F6E\u6307\u6807.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732451468000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/obs/metrics-builtin","title":"Metrics - Built-in Metrics","sidebar_position":5,"hide_title":true,"keywords":["GoFrame","GoFrame Framework","Built-in Metrics","Monitoring Alerts","Metric Types","Performance Monitoring","Prometheus","OpenTelemetry","Performance Optimization","Go Basic Metrics"],"description":"Usage of built-in metrics for monitoring alerts in the GoFrame framework, including how to enable Go basic metrics with otelmetric, and how to integrate with Prometheus and OpenTelemetry for performance monitoring and optimization. The document provides example code and detailed descriptions of metrics, including metric names, types, and descriptions, to assist users in understanding and implementing performance monitoring."},"sidebar":"mainSidebar","previous":{"title":"Metrics - Attributes","permalink":"/en/docs/obs/metrics-attributes"},"next":{"title":"Metrics - Component Metrics","permalink":"/en/docs/obs/metrics-components"}}'),i=n("785893"),s=n("250065");let o={slug:"/docs/obs/metrics-builtin",title:"Metrics - Built-in Metrics",sidebar_position:5,hide_title:!0,keywords:["GoFrame","GoFrame Framework","Built-in Metrics","Monitoring Alerts","Metric Types","Performance Monitoring","Prometheus","OpenTelemetry","Performance Optimization","Go Basic Metrics"],description:"Usage of built-in metrics for monitoring alerts in the GoFrame framework, including how to enable Go basic metrics with otelmetric, and how to integrate with Prometheus and OpenTelemetry for performance monitoring and optimization. The document provides example code and detailed descriptions of metrics, including metric names, types, and descriptions, to assist users in understanding and implementing performance monitoring."},c=void 0,d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Built-in Metrics Description",id:"built-in-metrics-description",level:2}];function h(e){let t={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(t.p,{children:["The framework includes built-in ",(0,i.jsx)(t.code,{children:"Go"})," basic metrics, which are disabled by default and need to be manually enabled. This can be done by enabling ",(0,i.jsx)(t.code,{children:"otelmetric.WithBuiltInMetrics()"})," when creating the ",(0,i.jsx)(t.code,{children:"Provider"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "go.opentelemetry.io/otel/exporters/prometheus"\n\n    "github.com/gogf/gf/contrib/metric/otelmetric/v2"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gmetric"\n)\n\nconst (\n    instrument        = "github.com/gogf/gf/example/metric/basic"\n    instrumentVersion = "v1.0"\n)\n\nvar (\n    meter = gmetric.GetGlobalProvider().Meter(gmetric.MeterOption{\n        Instrument:        instrument,\n        InstrumentVersion: instrumentVersion,\n    })\n    counter = meter.MustCounter(\n        "goframe.metric.demo.counter",\n        gmetric.MetricOption{\n            Help: "This is a simple demo for Counter usage",\n            Unit: "bytes",\n        },\n    )\n)\n\nfunc main() {\n    var ctx = gctx.New()\n\n    // Prometheus exporter to export metrics as Prometheus format.\n    exporter, err := prometheus.New(\n        prometheus.WithoutCounterSuffixes(),\n        prometheus.WithoutUnits(),\n    )\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n\n    // OpenTelemetry provider.\n    provider := otelmetric.MustProvider(\n        otelmetric.WithReader(exporter),\n        otelmetric.WithBuiltInMetrics(),\n    )\n    provider.SetAsGlobal()\n    defer provider.Shutdown(ctx)\n\n    // Counter.\n    counter.Inc(ctx)\n    counter.Add(ctx, 10)\n\n    // HTTP Server for metrics exporting.\n    otelmetric.StartPrometheusMetricsServer(8000, "/metrics")\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["After execution, visit ",(0,i.jsx)(t.a,{href:"http://127.0.0.1:8000/metrics",children:"http://127.0.0.1:8000/metrics"})," to view the results."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(882671).Z+"",width:"2966",height:"2014"})}),"\n",(0,i.jsx)(t.h2,{id:"built-in-metrics-description",children:"Built-in Metrics Description"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Metric Name"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Metric Type"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Metric Unit"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Metric Description"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"process.runtime.go.cgo.calls"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Counter"})}),(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:["Number of ",(0,i.jsx)(t.code,{children:"cgo"})," calls in the current process."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"process.runtime.go.gc.count"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Counter"})}),(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:["Number of completed ",(0,i.jsx)(t.code,{children:"gc"})," cycles."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"process.runtime.go.gc.pause_ns"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Histogram"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"ns"})}),(0,i.jsxs)(t.td,{children:["Number of nanoseconds paused in ",(0,i.jsx)(t.code,{children:"GC stop-the-world "}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"process.runtime.go.gc.pause_total_ns"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Counter"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"ns"})}),(0,i.jsxs)(t.td,{children:["Cumulative microseconds count of ",(0,i.jsx)(t.code,{children:"GC stop-the-world "})," since the program started."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"process.runtime.go.goroutines"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Gauge"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Number of currently running goroutines."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"process.runtime.go.lookups"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Counter"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Number of pointer lookups executed at runtime."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"process.runtime.go.mem.heap_alloc"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Gauge"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"bytes"})}),(0,i.jsx)(t.td,{children:"Number of bytes allocated to heap objects."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"process.runtime.go.mem.heap_idle"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Gauge"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"bytes"})}),(0,i.jsx)(t.td,{children:"Idle (unused) heap memory."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"process.runtime.go.mem.heap_inuse"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Gauge"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"bytes"})}),(0,i.jsx)(t.td,{children:"Heap memory in use."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"process.runtime.go.mem.heap_objects"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Gauge"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Number of heap objects allocated."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"process.runtime.go.mem.live_objects"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Gauge"})}),(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:["Number of live objects (",(0,i.jsx)(t.code,{children:"Mallocs - Frees"}),")."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"process.runtime.go.mem.heap_released"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Gauge"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"bytes"})}),(0,i.jsx)(t.td,{children:"Heap memory returned to the operating system."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"process.runtime.go.mem.heap_sys"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Gauge"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"bytes"})}),(0,i.jsx)(t.td,{children:"Heap memory obtained from the operating system."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"process.runtime.uptime"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Counter"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"ms"})}),(0,i.jsx)(t.td,{children:"Number of milliseconds since the application was initialized."})]})]})]})]})}function a(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},882671:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/daf1d8449208ba307efd483c505b7b5a-643570199582f99bdada658b4dbbe7ee.png"},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return o}});var r=n(667294);let i={},s=r.createContext(i);function o(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[723],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return u}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=n.createContext({}),c=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(d.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,g=m["".concat(d,".").concat(u)]||m[u]||s[u]||o;return t?n.createElement(g,a(a({ref:r},p),{},{components:t})):n.createElement(g,a({ref:r},p))}));function u(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8101:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=t(2122),i=t(9756),o=(t(7294),t(3905)),a={id:"middleware",title:"Middleware",description:"Kratos \u5185\u7f6e\u4e86\u4e00\u7cfb\u5217\u7684 middleware\uff08\u4e2d\u95f4\u4ef6\uff09\u7528\u4e8e\u5904\u7406 logging, metrics \u7b49\u901a\u7528\u573a\u666f\u3002\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0 Middleware \u63a5\u53e3\uff0c\u5f00\u53d1\u81ea\u5b9a\u4e49 middleware\uff0c\u8fdb\u884c\u901a\u7528\u7684\u4e1a\u52a1\u5904\u7406\uff0c\u6bd4\u5982\u7528\u6237\u767b\u5f55\u9274\u6743\u7b49\u3002",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},l={unversionedId:"component/middleware",id:"component/middleware",isDocsHomePage:!1,title:"Middleware",description:"Kratos \u5185\u7f6e\u4e86\u4e00\u7cfb\u5217\u7684 middleware\uff08\u4e2d\u95f4\u4ef6\uff09\u7528\u4e8e\u5904\u7406 logging, metrics \u7b49\u901a\u7528\u573a\u666f\u3002\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0 Middleware \u63a5\u53e3\uff0c\u5f00\u53d1\u81ea\u5b9a\u4e49 middleware\uff0c\u8fdb\u884c\u901a\u7528\u7684\u4e1a\u52a1\u5904\u7406\uff0c\u6bd4\u5982\u7528\u6237\u767b\u5f55\u9274\u6743\u7b49\u3002",source:"@site/docs/component/middleware.md",sourceDirName:"component",slug:"/component/middleware",permalink:"/docs/component/middleware",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/component/middleware.md",version:"current",frontMatter:{id:"middleware",title:"Middleware",description:"Kratos \u5185\u7f6e\u4e86\u4e00\u7cfb\u5217\u7684 middleware\uff08\u4e2d\u95f4\u4ef6\uff09\u7528\u4e8e\u5904\u7406 logging, metrics \u7b49\u901a\u7528\u573a\u666f\u3002\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0 Middleware \u63a5\u53e3\uff0c\u5f00\u53d1\u81ea\u5b9a\u4e49 middleware\uff0c\u8fdb\u884c\u901a\u7528\u7684\u4e1a\u52a1\u5904\u7406\uff0c\u6bd4\u5982\u7528\u6237\u767b\u5f55\u9274\u6743\u7b49\u3002",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Registry",permalink:"/docs/component/registry"},next:{title:"Transport",permalink:"/docs/component/transport"}},d=[{value:"\u5185\u7f6e\u4e2d\u95f4\u4ef6",id:"\u5185\u7f6e\u4e2d\u95f4\u4ef6",children:[{value:"logging",id:"logging",children:[]},{value:"metrics",id:"metrics",children:[]},{value:"recovery",id:"recovery",children:[]},{value:"status",id:"status",children:[]},{value:"tracing",id:"tracing",children:[]},{value:"validate",id:"validate",children:[]}]},{value:"\u4f7f\u7528\u4e2d\u95f4\u4ef6",id:"\u4f7f\u7528\u4e2d\u95f4\u4ef6",children:[]},{value:"\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6",id:"\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6",children:[]}],c={toc:d};function p(e){var r=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kratos \u5185\u7f6e\u4e86\u4e00\u7cfb\u5217\u7684 middleware\uff08\u4e2d\u95f4\u4ef6\uff09\u7528\u4e8e\u5904\u7406 logging\u3001 metrics \u7b49\u901a\u7528\u573a\u666f\u3002\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0 Middleware \u63a5\u53e3\uff0c\u5f00\u53d1\u81ea\u5b9a\u4e49 middleware\uff0c\u8fdb\u884c\u901a\u7528\u7684\u4e1a\u52a1\u5904\u7406\uff0c\u6bd4\u5982\u7528\u6237\u767b\u5f55\u9274\u6743\u7b49\u3002"),(0,o.kt)("h2",{id:"\u5185\u7f6e\u4e2d\u95f4\u4ef6"},"\u5185\u7f6e\u4e2d\u95f4\u4ef6"),(0,o.kt)("p",null,"\u76f8\u5173\u4ee3\u7801\u5747\u53ef\u4ee5\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"middleware"),"\u76ee\u5f55\u4e0b\u627e\u5230\u3002"),(0,o.kt)("h3",{id:"logging"},"logging"),(0,o.kt)("p",null,"\u4ee3\u7801\u4f4d\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"middleware/logging"),"\uff0c\u7528\u4e8e\u8bf7\u6c42\u65e5\u5fd7\u7684\u8bb0\u5f55\u3002"),(0,o.kt)("h3",{id:"metrics"},"metrics"),(0,o.kt)("p",null,"\u4ee3\u7801\u4f4d\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"middleware/metrics"),"\uff0c\u7528\u4e8e\u542f\u7528metric\u3002"),(0,o.kt)("h3",{id:"recovery"},"recovery"),(0,o.kt)("p",null,"\u4ee3\u7801\u4f4d\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"middleware/recovery"),"\uff0c\u7528\u4e8erecovery panic\u3002"),(0,o.kt)("h3",{id:"status"},"status"),(0,o.kt)("p",null,"\u4ee3\u7801\u4f4d\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"middleware/status"),"\uff0c\u7528\u4e8egrpc\u7684error\u4fe1\u606f\u8f6c\u6362\u5904\u7406\u3002"),(0,o.kt)("h3",{id:"tracing"},"tracing"),(0,o.kt)("p",null,"\u4ee3\u7801\u4f4d\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"middleware/tracing"),"\uff0c\u7528\u4e8e\u542f\u7528trace\u3002"),(0,o.kt)("h3",{id:"validate"},"validate"),(0,o.kt)("p",null,"\u4ee3\u7801\u4f4d\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"middleware/validate"),"\uff0c\u7528\u4e8e\u5904\u7406\u53c2\u6570\u6821\u9a8c\u3002"),(0,o.kt)("h3",{id:""}),(0,o.kt)("h2",{id:"\u4f7f\u7528\u4e2d\u95f4\u4ef6"},"\u4f7f\u7528\u4e2d\u95f4\u4ef6"),(0,o.kt)("p",null,"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"NewGRPCServer"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"NewHTTPServer"),"\u4e2d\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"ServerOption"),"\u8fdb\u884c\u6ce8\u518c\u3002\n\u5982"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// http\n// \u5b9a\u4e49opts\nvar opts = []http.ServerOption{\n    http.Middleware(\n        middleware.Chain(\n            recovery.Recovery(), // \u628amiddleware\u6309\u7167\u9700\u8981\u7684\u987a\u5e8f\u52a0\u5165\u5230Chain\u91cc\u9762\n            tracing.Server(),\n            logging.Server(),\n        ),\n    ),\n}\n// \u521b\u5efaserver\nhttp.NewServer(opts...)\n\n\n\n//grpc\nvar opts = []grpc.ServerOption{\n    grpc.Middleware(\n        middleware.Chain(\n            recovery.Recovery(),  // \u628amiddleware\u6309\u7167\u9700\u8981\u7684\u987a\u5e8f\u52a0\u5165\u5230Chain\u91cc\u9762\n            status.Server(),\n            tracing.Server(),\n            logging.Server(),\n        ),\n    ),\n}\n// \u521b\u5efaserver\ngrpc.NewServer(opts...)\n\n")),(0,o.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6"},"\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6"),(0,o.kt)("p",null,"\u9700\u8981\u5b9e\u73b0",(0,o.kt)("inlineCode",{parentName:"p"},"Middleware"),"\u63a5\u53e3\u3002\n","[TBD]"))}p.isMDXComponent=!0}}]);
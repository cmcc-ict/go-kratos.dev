(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{116:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,b=d["".concat(i,".").concat(f)]||d[f]||s[f]||a;return r?o.a.createElement(b,c(c({ref:t},l),{},{components:r})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(116)),i={id:"faq",title:"FAQ",description:"Kratos FAQ \u4f7f\u7528\u6587\u6863",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},c={unversionedId:"getting-started/faq",id:"getting-started/faq",isDocsHomePage:!1,title:"FAQ",description:"Kratos FAQ \u4f7f\u7528\u6587\u6863",source:"@site/docs/getting-started/faq.md",slug:"/getting-started/faq",permalink:"/docs/getting-started/faq",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/getting-started/faq.md",version:"current",sidebar:"docs",previous:{title:"\u6570\u636e\u8bbf\u95ee",permalink:"/docs/getting-started/data"},next:{title:"API",permalink:"/docs/component/api"}},p=[{value:"\u5728\u4f7f\u7528<code>kratos proto</code>\u547d\u4ee4\u65f6\u62a5<code>google/protobuf/descriptor.proto: File not found.</code>\u7684\u9519\u8bef",id:"\u5728\u4f7f\u7528kratos-proto\u547d\u4ee4\u65f6\u62a5googleprotobufdescriptorproto-file-not-found\u7684\u9519\u8bef",children:[]}],l={toc:p};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u5728\u4f7f\u7528kratos-proto\u547d\u4ee4\u65f6\u62a5googleprotobufdescriptorproto-file-not-found\u7684\u9519\u8bef"},"\u5728\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"h3"},"kratos proto"),"\u547d\u4ee4\u65f6\u62a5",Object(a.b)("inlineCode",{parentName:"h3"},"google/protobuf/descriptor.proto: File not found."),"\u7684\u9519\u8bef"),Object(a.b)("p",null,"\u901a\u5e38\u662f\u56e0\u4e3a\u60a8\u7684protoc\u5de5\u5177\u6ca1\u6709\u6b63\u786e\u5b89\u88c5\u5bfc\u81f4\u7684\u3002\u5177\u4f53\u5b89\u88c5\u65b9\u5f0f\u53ef\u4ee5\u53c2\u8003\u6587\u6863",Object(a.b)("a",{parentName:"p",href:"https://grpc.io/docs/protoc-installation/"},"protoc-installation"),"\uff0c\u8bf7\u5c3d\u91cf\u91c7\u7528\u5305\u7ba1\u7406\u5668\u65b9\u5f0f\u8fdb\u884c\u5b89\u88c5\uff0c\u4ee5\u786e\u4fdd\u5b89\u88c5\u7684\u5b8c\u6574\u6027\u3002\u5982\u679c\u60a8\u4e00\u5b9a\u8981\u81ea\u884c\u4e0b\u8f7dzip\u5305\u5b89\u88c5\u9884\u7f16\u8bd1\u7684\u7248\u672c\u6216\u81ea\u884c\u7f16\u8bd1\u5b89\u88c5\uff0c\u8bf7\u53c2\u8003zip\u5305\u4e2d",Object(a.b)("inlineCode",{parentName:"p"},"readme.txt"),"\u6587\u4ef6\u7684\u8bf4\u660e\u8fdb\u884c\u64cd\u4f5c\uff0c\u786e\u4fdd",Object(a.b)("inlineCode",{parentName:"p"},"include"),"\u4e0b\u7684\u6240\u6709\u4e1c\u897f\uff08\u901a\u5e38\u662f",Object(a.b)("inlineCode",{parentName:"p"},"google"),"\u76ee\u5f55\uff0c\u91cc\u9762\u662f\u4e00\u7cfb\u5217",Object(a.b)("inlineCode",{parentName:"p"},".proto"),"\u540e\u7f00\u7684\u6587\u4ef6\uff09\u90fd\u5df2\u7ecf\u6b63\u786e\u653e\u7f6e\u5728\u60a8\u7684include\u8def\u5f84\u4e0b\uff0c\u5982",Object(a.b)("inlineCode",{parentName:"p"},"/usr/local/include/"),"\u76ee\u5f55\u4e2d\uff0c\u4ee5\u786e\u4fddprotoc\u5728\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u80fd\u6210\u529f\u627e\u5230\u3002"))}u.isMDXComponent=!0}}]);
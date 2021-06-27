(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9844],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||c;return t?n.createElement(m,a(a({ref:r},s),{},{components:t})):n.createElement(m,a({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1297:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=t(2122),o=t(9756),c=(t(7294),t(3905)),a={id:"docker",title:"Docker",description:"Docker",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},i=void 0,l={unversionedId:"devops/docker",id:"devops/docker",isDocsHomePage:!1,title:"Docker",description:"Docker",source:"@site/docs/devops/docker.md",sourceDirName:"devops",slug:"/devops/docker",permalink:"/docs/devops/docker",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/devops/docker.md",version:"current",frontMatter:{id:"docker",title:"Docker",description:"Docker",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Ent \u6570\u636e\u5e93\u6846\u67b6\u4f7f\u7528",permalink:"/docs/guide/ent"},next:{title:"\u8d21\u732e\u6307\u5357",permalink:"/docs/community/contribution"}},u=[{value:"\u811a\u672c\u5185\u5bb9",id:"\u811a\u672c\u5185\u5bb9",children:[]},{value:"\u6784\u5efa\u955c\u50cf",id:"\u6784\u5efa\u955c\u50cf",children:[]},{value:"\u521b\u5efa\u5bb9\u5668\u5e76\u8fd0\u884c",id:"\u521b\u5efa\u5bb9\u5668\u5e76\u8fd0\u884c",children:[]}],s={toc:u};function p(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"kratos-layout")," \u4e2d\u9ed8\u8ba4\u63d0\u4f9b\u4e86\u7528\u4e8e\u6784\u5efa\u7a0b\u5e8f\u7684 Dockerfile \u6587\u4ef6\uff0c\u6587\u4ef6\u4e2d\u91c7\u7528\u591a\u9636\u6bb5\u6784\u5efa\uff0c\u4ee5\u83b7\u5f97\u6700\u5c0f\u4f53\u79ef\u7684\u5bb9\u5668\u955c\u50cf\u3002"),(0,c.kt)("h3",{id:"\u811a\u672c\u5185\u5bb9"},"\u811a\u672c\u5185\u5bb9"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM golang:1.15 AS builder\n\nCOPY . /src\nWORKDIR /src\n\nRUN GOPROXY=https://goproxy.cn make build\n\nFROM debian:stable-slim\n\nRUN apt-get update && apt-get install -y --no-install-recommends \\\n        ca-certificates  \\\n        netbase \\\n        && rm -rf /var/lib/apt/lists/ \\\n        && apt-get autoremove -y && apt-get autoclean -y\n\nCOPY --from=builder /src/bin /app\n\nWORKDIR /app\n\nEXPOSE 8000\nEXPOSE 9000\nVOLUME /data/conf\n\nCMD ["./server", "-conf", "/data/conf"]\n')),(0,c.kt)("h3",{id:"\u6784\u5efa\u955c\u50cf"},"\u6784\u5efa\u955c\u50cf"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"docker build -t <your-docker-image-name> .\n")),(0,c.kt)("h3",{id:"\u521b\u5efa\u5bb9\u5668\u5e76\u8fd0\u884c"},"\u521b\u5efa\u5bb9\u5668\u5e76\u8fd0\u884c"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm -p 8000:8000 -p 9000:9000 -v </path/to/your/configs>:/data/conf <your-docker-image-name>\n")))}p.isMDXComponent=!0}}]);
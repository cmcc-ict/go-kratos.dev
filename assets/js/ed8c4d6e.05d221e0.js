(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3774],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return g},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},g=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,m=u["".concat(l,".").concat(d)]||u[d]||s[d]||a;return r?n.createElement(m,p(p({ref:t},g),{},{components:r})):n.createElement(m,p({ref:t},g))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3693:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),p={id:"openapi",title:"OpenAPI Swagger \u4f7f\u7528",description:"OpenAPI Swagger \u4f7f\u7528",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},i=void 0,l={unversionedId:"guide/openapi",id:"guide/openapi",isDocsHomePage:!1,title:"OpenAPI Swagger \u4f7f\u7528",description:"OpenAPI Swagger \u4f7f\u7528",source:"@site/docs/guide/openapi.md",sourceDirName:"guide",slug:"/guide/openapi",permalink:"/docs/guide/openapi",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/guide/openapi.md",version:"current",frontMatter:{id:"openapi",title:"OpenAPI Swagger \u4f7f\u7528",description:"OpenAPI Swagger \u4f7f\u7528",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Protobuf \u4f7f\u7528\u89c4\u8303",permalink:"/docs/guide/api-protobuf"},next:{title:"Wire \u4f9d\u8d56\u6ce8\u5165",permalink:"/docs/guide/wire"}},c=[{value:"\u65b9\u5f0f1: \u4f7f\u7528\u63d2\u4ef6\u63d0\u4f9bswagger\u63a5\u53e3",id:"\u65b9\u5f0f1-\u4f7f\u7528\u63d2\u4ef6\u63d0\u4f9bswagger\u63a5\u53e3",children:[]},{value:"\u65b9\u5f0f2: \u4f7f\u7528protoc\u63d2\u4ef6\u751f\u6210swagger.json\u6587\u4ef6",id:"\u65b9\u5f0f2-\u4f7f\u7528protoc\u63d2\u4ef6\u751f\u6210swaggerjson\u6587\u4ef6",children:[]}],g={toc:c};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6846\u67b6\u53ef\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u63d0\u4f9bOpenAPI/Swagger\u7684\u4f7f\u7528\uff1a1. \u5728\u670d\u52a1\u4e0a\u63d0\u4f9bswagger\u63a5\u53e3\uff0c2. \u4f7f\u7528protoc\u63d2\u4ef6\u751f\u6210swagger.json\u6587\u4ef6\u3002\u4e0b\u9762\u4ecb\u7ecd\u8fd9\u4e24\u79cd\u65b9\u5f0f\u3002"),(0,a.kt)("h3",{id:"\u65b9\u5f0f1-\u4f7f\u7528\u63d2\u4ef6\u63d0\u4f9bswagger\u63a5\u53e3"},"\u65b9\u5f0f1: \u4f7f\u7528\u63d2\u4ef6\u63d0\u4f9bswagger\u63a5\u53e3"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/swagger-api"},"swagger-api"),"\u63d2\u4ef6\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217swagger\u76f8\u5173\u7684API\uff0c\u4ee5\u53ca\u76f8\u5e94\u7684UI\u754c\u9762"),(0,a.kt)("h4",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("p",null,"\u9996\u5148\u5b89\u88c5\u63d2\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get -u github.com/go-kratos/swagger-api\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"internal/server/http.go"),"\u7684NewHTTPServer\u4e2d\u8fdb\u884c\u521d\u59cb\u5316\u548c\u6ce8\u518c\uff0c\u8bf7\u5c3d\u91cf\u5c06\u8fd9\u4e2a\u8def\u7531\u6ce8\u518c\u653e\u5728\u6700\u524d\u9762\uff0c\u4ee5\u514d\u5339\u914d\u4e0d\u5230\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import  "github.com/go-kratos/swagger-api/openapiv2"\n\nopenAPIhandler := openapiv2.NewHandler()\nsrv.HandlePrefix("/q/", openAPIhandler)\n')),(0,a.kt)("h4",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("p",null,"\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee\u670d\u52a1\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"/q/swagger-ui/"),"\u8def\u5f84\u5373\u53ef\u6253\u5f00Swagger UI"),(0,a.kt)("h3",{id:"\u65b9\u5f0f2-\u4f7f\u7528protoc\u63d2\u4ef6\u751f\u6210swaggerjson\u6587\u4ef6"},"\u65b9\u5f0f2: \u4f7f\u7528protoc\u63d2\u4ef6\u751f\u6210swagger.json\u6587\u4ef6"),(0,a.kt)("p",null,"\u65b0\u5efa\u9879\u76eeMakefile\u4e2d\u5df2\u7ecf\u9ed8\u8ba4\u96c6\u6210\u4e86\u751f\u6210swagger.json\u7684\u76f8\u5173\u547d\u4ee4\uff0c\u8fd9\u91cc\u4e5f\u4ecb\u7ecd\u4e0b\u5177\u4f53\u7684\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("h4",{id:"\u5b89\u88c5-1"},"\u5b89\u88c5"),(0,a.kt)("p",null,"\u9996\u5148\u5b89\u88c5protoc\u63d2\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get -u github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2\n")),(0,a.kt)("h4",{id:"\u751f\u6210"},"\u751f\u6210"),(0,a.kt)("p",null,"\uff08\u63a8\u8350\uff09\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c\u4e0b\u5217\u547d\u4ee4\u751f\u6210\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make swagger\n")),(0,a.kt)("p",null,"\u6216\u5728\u9879\u76ee\u6839\u76ee\u5f55\u76f4\u63a5\u4f7f\u7528protoc\u547d\u4ee4\uff0c\u8bf7\u6ce8\u610f\u4fee\u6539\u547d\u4ee4\u6700\u540e\u7684proto\u6587\u4ef6\u8def\u5f84\u4e3a\u5b9e\u9645\u8def\u5f84"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"protoc --proto_path=. \\\n        --proto_path=./third_party \\\n        --openapiv2_out . \\\n        --openapiv2_opt logtostderr=true \\\n        --openapiv2_opt json_names_for_fields=false \\\n        api/helloworld/v1/greeter.proto\n")),(0,a.kt)("h4",{id:"\u4f7f\u7528-1"},"\u4f7f\u7528"),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u547d\u4ee4\u6267\u884c\u6210\u529f\u540e\uff0c\u5c06\u5728\u60a8\u7684proto\u6587\u4ef6\u6240\u5728\u76ee\u5f55\u751f\u6210\u76f8\u5e94\u7684swagger.json\u6587\u4ef6\u3002\n\u60a8\u53ef\u4ee5\u5c06\u5176\u5bfc\u5165\u4efb\u4f55\u652f\u6301OpenAPI\u89c4\u8303\u7684\u5e73\u53f0\u8fdb\u884c\u6d4f\u89c8\uff0c\u4f8b\u5982:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/swagger-api/swagger-ui"},"Swagger UI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://editor.swagger.io/"},"Swagger Editor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Redocly/redoc"},"ReDoc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/YMFE/yapi"},"YApi")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.postman.com/"},"Postman"))))}s.isMDXComponent=!0}}]);
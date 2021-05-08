(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[552],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=p(t),m=o,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||i;return t?n.createElement(d,a(a({ref:r},l),{},{components:t})):n.createElement(d,a({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},861:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var n=t(2122),o=t(9756),i=(t(7294),t(3905)),a={id:"registry",title:"Registry",description:"Kratos Registry \u63a5\u53e3\u5206\u4e3a\u4e24\u4e2a\uff0cRegistrar\u4e3a\u5b9e\u4f8b\u6ce8\u518c\u548c\u53cd\u6ce8\u518c\uff0cDiscovery\u4e3a\u670d\u52a1\u5b9e\u4f8b\u5217\u8868\u83b7\u53d6",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},c={unversionedId:"component/registry",id:"component/registry",isDocsHomePage:!1,title:"Registry",description:"Kratos Registry \u63a5\u53e3\u5206\u4e3a\u4e24\u4e2a\uff0cRegistrar\u4e3a\u5b9e\u4f8b\u6ce8\u518c\u548c\u53cd\u6ce8\u518c\uff0cDiscovery\u4e3a\u670d\u52a1\u5b9e\u4f8b\u5217\u8868\u83b7\u53d6",source:"@site/docs/component/registry.md",sourceDirName:"component",slug:"/component/registry",permalink:"/docs/component/registry",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/component/registry.md",version:"current",frontMatter:{id:"registry",title:"Registry",description:"Kratos Registry \u63a5\u53e3\u5206\u4e3a\u4e24\u4e2a\uff0cRegistrar\u4e3a\u5b9e\u4f8b\u6ce8\u518c\u548c\u53cd\u6ce8\u518c\uff0cDiscovery\u4e3a\u670d\u52a1\u5b9e\u4f8b\u5217\u8868\u83b7\u53d6",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Tracing",permalink:"/docs/component/tracing"},next:{title:"Middleware",permalink:"/docs/component/middleware"}},s=[{value:"\u63a5\u53e3\u5b9e\u73b0",id:"\u63a5\u53e3\u5b9e\u73b0",children:[]},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",children:[]}],p={toc:s};function l(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u63a5\u53e3\u5b9e\u73b0"},"\u63a5\u53e3\u5b9e\u73b0"),(0,i.kt)("p",null,"Registry\u63a5\u53e3\u5206\u4e3a\u4e24\u4e2a\uff0cRegistrar\u4e3a\u5b9e\u4f8b\u6ce8\u518c\u548c\u53cd\u6ce8\u518c\uff0cDiscovery\u4e3a\u670d\u52a1\u5b9e\u4f8b\u5217\u8868\u83b7\u53d6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Registrar interface {\n    // \u6ce8\u518c\u5b9e\u4f8b\n    Register(ctx context.Context, service *ServiceInstance) error\n    // \u53cd\u6ce8\u518c\u5b9e\u4f8b\n    Deregister(ctx context.Context, service *ServiceInstance) error\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Discovery interface {\n    // \u6839\u636eserviceName\u76f4\u63a5\u62c9\u53d6\u5b9e\u4f8b\u5217\u8868\n    Fetch(ctx context.Context, serviceName string) ([]*ServiceInstance, error)\n    // \u6839\u636eserviceName\u963b\u585e\u5f0f\u8ba2\u9605\u4e00\u4e2a\u670d\u52a1\u7684\u5b9e\u4f8b\u5217\u8868\u4fe1\u606f\n    Watch(ctx context.Context, serviceName string) (Watcher, error)\n}\n")),(0,i.kt)("p",null,"\u5df2\u652f\u6301\u7684\u5b9e\u73b0\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/consul"},"consul")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/etcd"},"etcd")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kube"},"kube")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/nacos"},"nacos"))),(0,i.kt)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,i.kt)("h4",{id:"\u6ce8\u518c\u670d\u52a1\u5b9e\u4f8b"},"\u6ce8\u518c\u670d\u52a1\u5b9e\u4f8b"),(0,i.kt)("p",null,"\u521b\u5efa\u4e00\u4e2aRegistrar\uff08\u4ee5consul\u4e3a\u4f8b\uff09\uff0c\u5c06Registrar\u6ce8\u5165\u8fdbKratos\u5e94\u7528\u5b9e\u4f8b\u4e2d\uff0cKratos\u4f1a\u81ea\u52a8\u5b8c\u6210\u5b9e\u4f8b\u6ce8\u518c\u548c\u53cd\u6ce8\u518c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import consul "github.com/go-kratos/consul/registry"\nimport  "github.com/hashicorp/consul/api"\n\ncli, err := api.NewClient(api.DefaultConfig())\nif err != nil {\n    panic(err)\n}\nreg := consul.New(cli)\n\napp := kratos.New(\n    kratos.Name(Name),\n    kratos.Version(Version),\n    kratos.Metadata(map[string]string{}),\n    kratos.Logger(logger),\n    kratos.Server(\n        hs,\n        gs,\n    ),\n    kratos.Registrar(reg),\n)\n')),(0,i.kt)("h4",{id:"\u670d\u52a1\u53d1\u73b0\uff08grpc\uff09"},"\u670d\u52a1\u53d1\u73b0\uff08gRPC\uff09"),(0,i.kt)("p",null,"\u521b\u5efa\u4e00\u4e2aDiscoverer\uff08\u4ee5consul\u4e3a\u4f8b\uff09,\u6839\u636eDial url\u683c\u5f0f",(0,i.kt)("inlineCode",{parentName:"p"},"<schema>://[namespace]/<service-name>"),"\u521b\u5efa\u4e00\u4e2aEndpoint\uff0c\u901a\u8fc7grc.WithDiscoverer ,grpc.WithEndpoint\u521b\u5efa\u4e00\u4e2agrpc connection"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/go-kratos/kratos/transport/http"\nimport "github.com/go-kratos/kratos/v2/transport/grpc"\n\ncli, err := api.NewClient(api.DefaultConfig())\nif err != nil {\n    panic(err)\n}\ndis := consul.New(cli)\n\nendpoint := "discovery://default/provider"\nconn, err := grpc.Dial(context.Background(), grpc.WithEndpoint(endpoint), grpc.WithDiscovery(dis))\nif err != nil {\n    panic(err)\n}\n')))}l.isMDXComponent=!0}}]);
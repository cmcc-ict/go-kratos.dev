(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7598],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6896:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return i},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),l={id:"usage",title:"Usage"},p=void 0,s={unversionedId:"getting-started/usage",id:"getting-started/usage",isDocsHomePage:!1,title:"Usage",description:"Installation",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/getting-started/usage.md",sourceDirName:"getting-started",slug:"/getting-started/usage",permalink:"/en/docs/getting-started/usage",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/getting-started/usage.md",version:"current",frontMatter:{id:"usage",title:"Usage"},sidebar:"docs",previous:{title:"Layout",permalink:"/en/docs/intro/layout"},next:{title:"\u4ee3\u7801\u793a\u4f8b",permalink:"/en/docs/getting-started/examples"}},i=[{value:"Installation",id:"installation",children:[]},{value:"Tool Usage",id:"tool-usage",children:[{value:"Version",id:"version",children:[]}]},{value:"Project Creation",id:"project-creation",children:[]},{value:"Adding Proto files",id:"adding-proto-files",children:[]},{value:"Generate Proto Codes",id:"generate-proto-codes",children:[]},{value:"Generate Service Codes",id:"generate-service-codes",children:[]}],c={toc:i};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get -u github.com/go-kratos/kratos/cmd/kratos/v2@latest\n")),(0,a.kt)("h2",{id:"tool-usage"},"Tool Usage"),(0,a.kt)("h3",{id:"version"},"Version"),(0,a.kt)("p",null,"To show the version"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kratos -v\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kratos version v2.0.0\n")),(0,a.kt)("h2",{id:"project-creation"},"Project Creation"),(0,a.kt)("p",null,"To create a new project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kratos new helloworld\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helloworld\n|____api\n| |____helloworld\n| | |____v1\n| | | |____helloworld_grpc.pb.go\n| | | |____helloworld.proto\n| | | |____helloworld.pb.go\n| | | |____helloworld_http.pb.go\n| | |____errors\n| | | |____helloworld_errors.pb.go\n| | | |____helloworld.proto\n| | | |____helloworld.pb.go\n|____cmd\n| |____helloworld\n| | |____main.go\n|____internal\n| |____biz\n| | |____README.md\n| |____service\n| | |____README.md\n| | |____greeter.go\n| |____data\n| | |____README.md\n|____README.md\n|____Makefile\n|____LICENSE\n|____go.mod\n|____go.sum\n")),(0,a.kt)("h2",{id:"adding-proto-files"},"Adding Proto files"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kratos proto add api/helloworld/demo.proto\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("p",null,"api/helloworld/demo.proto"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage api.helloworld;\n\noption go_package = "helloworld/api/api/helloworld;helloworld";\noption java_multiple_files = true;\noption java_package = "api.helloworld";\n\nservice Demo {\n    rpc CreateDemo (CreateDemoRequest) returns (CreateDemoReply);\n    rpc UpdateDemo (UpdateDemoRequest) returns (UpdateDemoReply);\n    rpc DeleteDemo (DeleteDemoRequest) returns (DeleteDemoReply);\n    rpc GetDemo (GetDemoRequest) returns (GetDemoReply);\n    rpc ListDemo (ListDemoRequest) returns (ListDemoReply);\n}\n\nmessage CreateDemoRequest {}\nmessage CreateDemoReply {}\n\nmessage UpdateDemoRequest {}\nmessage UpdateDemoReply {}\n\nmessage DeleteDemoRequest {}\nmessage DeleteDemoReply {}\n\nmessage GetDemoRequest {}\nmessage GetDemoReply {}\n\nmessage ListDemoRequest {}\nmessage ListDemoReply {}\n')),(0,a.kt)("h2",{id:"generate-proto-codes"},"Generate Proto Codes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kratos proto client api/helloworld/demo.proto\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"api/helloworld/demo.pb.go\napi/helloworld/demo_grpc.pb.go\napi/helloworld/demo_http.pb.go\n")),(0,a.kt)("h2",{id:"generate-service-codes"},"Generate Service Codes"),(0,a.kt)("p",null,"kratos can generate the bootstrap codes from the proto file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kratos proto server api/helloworld/demo.proto -t internal/service\n")),(0,a.kt)("p",null,"Output:\ninternal/service/demo.go"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package service\n\nimport (\n    "context"\n\n    pb "helloworld/api/helloworld"\n)\n\ntype DemoService struct {\n    pb.UnimplementedDemoServer\n}\n\nfunc NewDemoService() pb.DemoServer {\n    return &DemoService{}\n}\n\nfunc (s *DemoService) CreateDemo(ctx context.Context, req *pb.CreateDemoRequest) (*pb.CreateDemoReply, error) {\n    return &pb.CreateDemoReply{}, nil\n}\nfunc (s *DemoService) UpdateDemo(ctx context.Context, req *pb.UpdateDemoRequest) (*pb.UpdateDemoReply, error) {\n    return &pb.UpdateDemoReply{}, nil\n}\nfunc (s *DemoService) DeleteDemo(ctx context.Context, req *pb.DeleteDemoRequest) (*pb.DeleteDemoReply, error) {\n    return &pb.DeleteDemoReply{}, nil\n}\nfunc (s *DemoService) GetDemo(ctx context.Context, req *pb.GetDemoRequest) (*pb.GetDemoReply, error) {\n    return &pb.GetDemoReply{}, nil\n}\nfunc (s *DemoService) ListDemo(ctx context.Context, req *pb.ListDemoRequest) (*pb.ListDemoReply, error) {\n    return &pb.ListDemoReply{}, nil\n}\n')))}u.isMDXComponent=!0}}]);
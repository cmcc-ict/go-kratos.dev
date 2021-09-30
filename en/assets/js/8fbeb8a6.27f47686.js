(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7866],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=u(t),d=o,f=g["".concat(l,".").concat(d)]||g[d]||p[d]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5023:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i={id:"config",title:"Config",description:"Kratos configuration source can be specified multiple, and config will be merged into map[string]interface{}, and then get the value content through Scan or Value.",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},c=void 0,l={unversionedId:"component/config",id:"component/config",isDocsHomePage:!1,title:"Config",description:"Kratos configuration source can be specified multiple, and config will be merged into map[string]interface{}, and then get the value content through Scan or Value.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/config.md",sourceDirName:"component",slug:"/component/config",permalink:"/en/docs/component/config",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/config.md",tags:[],version:"current",frontMatter:{id:"config",title:"Config",description:"Kratos configuration source can be specified multiple, and config will be merged into map[string]interface{}, and then get the value content through Scan or Value.",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Errors",permalink:"/en/docs/component/errors"},next:{title:"Logger",permalink:"/en/docs/component/log"}},u=[{value:"Define configuration through proto",id:"define-configuration-through-proto",children:[]},{value:"Build configuration",id:"build-configuration",children:[]},{value:"Usage",id:"usage",children:[]}],s={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the Kratos project, multiple configuration sources can be specified, and config will be merged into key/value. Then the user obtains the corresponding key-value content through ",(0,a.kt)("inlineCode",{parentName:"p"},"Scan")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Value"),", the main features are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The local file data source is implemented by default"),(0,a.kt)("li",{parentName:"ul"},"Users can customize the data source implementation"),(0,a.kt)("li",{parentName:"ul"},"Supports configuration hot-reloading, and change the existing ",(0,a.kt)("inlineCode",{parentName:"li"},"Value")," through ",(0,a.kt)("inlineCode",{parentName:"li"},"Atomic")),(0,a.kt)("li",{parentName:"ul"},"Supports custom data-source decoding implementation"),(0,a.kt)("li",{parentName:"ul"},"Ability to get the value of environment variables or existing fields through the ",(0,a.kt)("inlineCode",{parentName:"li"},"$")," placeholder")),(0,a.kt)("h3",{id:"define-configuration-through-proto"},"Define configuration through proto"),(0,a.kt)("p",null,"In the Kratos project, we recommend using proto to define the configuration file by default. The main benefits are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A unified template configuration can be defined"),(0,a.kt)("li",{parentName:"ul"},"Add corresponding configuration verification"),(0,a.kt)("li",{parentName:"ul"},"Better management of configuration"),(0,a.kt)("li",{parentName:"ul"},"Cross-language support")),(0,a.kt)("h4",{id:"configuration-file"},"Configuration file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  http:\n    addr: 0.0.0.0:8000\n    timeout: 1s\n  grpc:\n    addr: 0.0.0.0:9000\n    timeout: 1s\ndata:\n  database:\n    driver: mysql\n    source: root:root@tcp(127.0.0.1:3306)/test\n  redis:\n    addr: 127.0.0.1:6379\n    read_timeout: 0.2s\n    write_timeout: 0.2s\n")),(0,a.kt)("h4",{id:"proto-declaration"},"Proto declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\npackage kratos.api;\n\noption go_package = "github.com/go-kratos/kratos-layout/internal/conf;conf";\n\nimport "google/protobuf/duration.proto";\n\nmessage Bootstrap {\n  Server server = 1;\n  Data data = 2;\n}\n\nmessage Server {\n  message HTTP {\n    string network = 1;\n    string addr = 2;\n    google.protobuf.Duration timeout = 3;\n  }\n  message GRPC {\n    string network = 1;\n    string addr = 2;\n    google.protobuf.Duration timeout = 3;\n  }\n  HTTP http = 1;\n  GRPC grpc = 2;\n}\n\nmessage Data {\n  message Database {\n    string driver = 1;\n    string source = 2;\n  }\n  message Redis {\n    string network = 1;\n    string addr = 2;\n    google.protobuf.Duration read_timeout = 3;\n    google.protobuf.Duration write_timeout = 4;\n  }\n  Database database = 1;\n  Redis redis = 2;\n}\n')),(0,a.kt)("h3",{id:"build-configuration"},"Build configuration"),(0,a.kt)("p",null,"Head to the project's root and execute the command below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"make config\n")),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"One or more config sources can be applied."),(0,a.kt)("p",null,"They will be merged into ",(0,a.kt)("inlineCode",{parentName:"p"},"map[string]interface{}"),", then you could use ",(0,a.kt)("inlineCode",{parentName:"p"},"Scan")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Value")," to get the values."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"file"),(0,a.kt)("li",{parentName:"ul"},"env")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'c := config.New(\n    config.WithSource(\n        file.NewSource(path),\n    ),\n    config.WithDecoder(func(kv *config.KeyValue, v map[string]interface{}) error {\n        // kv.Key\n        // kv.Value\n        // kv.Metadata\n        // Configuration center can use the metadata to determine the type of the config.\n        return yaml.Unmarshal(kv.Value, v)\n    }),\n    config.WithResolver(func(map[string]interface{}) error {\n        // The default resolver provides processing\n        // for two $(key:default) and $key placeholders.\n        //\n        // Customize the processing method after loading the configuration data...\n    })\n)\n// load config source\nif err := c.Load(); err != nil {\n    log.Fatal(err)\n}\n// Get the corresponding value\nname, err := c.Value("service").String()\n\n/*\n  // The structure generated by the proto file can also be directly declared for analysis\n  var v struct {\n      Service string `json:"service"`\n      Version string `json:"version"`\n  }\n*/\nvar bc conf.Bootstrap\nif err := c.Scan(&bc); err != nil {\n    log.Fatal(err)\n}\n// watch the changing of the value\nc.Watch("service.name", func(key string, value config.Value) {\n    // callback of this event\n})\n')),(0,a.kt)("p",null,"Kratos can read the value of ",(0,a.kt)("strong",{parentName:"p"},"environment variable")," or ",(0,a.kt)("strong",{parentName:"p"},"existing field")," through placeholders in the configuration file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'service:\n  name: "kratos_app"\nhttp:\n  server:\n    # Use the value of service.name\n    name: "${service.name}"\n    # Replace with the environment variable PORT, if it does not exist, use the default value 8080\n    port: "${PORT:8080}"\n    # Use environment variable TIMEOUT to replace, no default value\n    timeout: "$TIMEOUT"\n')),(0,a.kt)("p",null,"When loading configuration sources from environment variables ",(0,a.kt)("strong",{parentName:"p"},"no need to load in advance"),", the analysis of the environment configuration will be performed after all sources are loaded"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'c := config.New(\n    config.WithSource(\n        // Add environment variables prefixed with KRATOS_\n        env.NewSource("KRATOS_"),\n        // Add configuration file\n        file.NewSource(path),\n    ))\n    \n// \u52a0\u8f7d\u914d\u7f6e\u6e90:\nif err := c.Load(); err != nil {\n    log.Fatal(err)\n}\n\n// Get the value of the environment variable KRATOS_PORT\nport, err := c.Value("PORT").String()\n')))}p.isMDXComponent=!0}}]);
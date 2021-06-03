(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6657],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var g=r.createContext({}),c=function(e){var n=r.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(g.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,g=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=c(t),d=o,m=s["".concat(g,".").concat(d)]||s[d]||p[d]||i;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=s;var a={};for(var g in n)hasOwnProperty.call(n,g)&&(a[g]=n[g]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},5463:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return a},toc:function(){return g},default:function(){return u}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),l={id:"logging",title:"Logging"},a={unversionedId:"component/logging",id:"component/logging",isDocsHomePage:!1,title:"Logging",description:"Interface",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/logging.md",sourceDirName:"component",slug:"/component/logging",permalink:"/en/docs/component/logging",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/logging.md",version:"current",frontMatter:{id:"logging",title:"Logging"},sidebar:"docs",previous:{title:"Config",permalink:"/en/docs/component/config"},next:{title:"Metrics",permalink:"/en/docs/component/metrics"}},g=[{value:"Interface",id:"interface",children:[]},{value:"Usage",id:"usage",children:[]}],c={toc:g};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"interface"},"Interface"),(0,i.kt)("p",null,"To make it easy to integrate with various of logging libraries, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Logger")," interface only requires the ",(0,i.kt)("inlineCode",{parentName:"p"},"Print")," method. You could either use the logger that we provided, or implement the Logger interface by your own."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Logger interface {\n    Print(pairs ...interface{})\n}\n")),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("h4",{id:"print-to-standard-output"},"Print to Standard Output"),(0,i.kt)("p",null,"You could use ",(0,i.kt)("inlineCode",{parentName:"p"},"NewHelper")," create a ",(0,i.kt)("inlineCode",{parentName:"p"},"log.Helper")," to wrap the logger struct, the helper will provide many log methods of different logging levels."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'logger := log.NewStdLogger()\nlog := log.NewHelper("module_name", logger)\n// Levels\nlog.Info("some log")\nlog.Infof("format %s", "some log")\nlog.Infow("field_name", "some log")\n')),(0,i.kt)("h4",{id:"print-to-fluentd"},"Print to Fluentd"),(0,i.kt)("p",null,'To print to fluentd, you could "github.com/go-kratos/fluent".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/go-kratos/fluent"\n\naddr := "unix:///var/run/fluent/fluent.sock"\nlogger,err := fluent.NewLogger(addr)\nif err != nil {\n    return \n}\nlog := log.NewHelper("module_name", logger)\n// Levels\nlog.Info("some log")\nlog.Infof("format %s", "some log")\nlog.Infow("field_name", "some log")\n')),(0,i.kt)("h4",{id:"logging-middleware"},"Logging middleware"),(0,i.kt)("p",null,"To enable logging information of every requests, you could add ",(0,i.kt)("inlineCode",{parentName:"p"},"logging.Server()")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"http.ServerOption"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"var opts = []http.ServerOption{\n        http.Middleware(\n            middleware.Chain(\n                logging.Server(),\n            ),\n        ),\n    }\nhttp.NewServer(opts...)\n")))}u.isMDXComponent=!0}}]);
(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[514,167],{895:function(e,t,n){"use strict";n.d(t,{dK:function(){return r},_k:function(){return i},vc:function(){return l},rx:function(){return c},qo:function(){return s},Hk:function(){return u},Iz:function(){return d}});var a=n(1336),o=n.n(a);n(892)(o()),n(4212).w(o()),n(4182)(o());var r=["en","zh"],i=!1,l=null,c="aafa56ec",s=8,u=50,d={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},3616:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return te}});var a=n(7294),o=n(3905),r=n(2263),i=n(6291),l=n(6591),c=n(2122),s=n(9756),u=n(6010),d=n(6700),m=n(944),b=n(1839),p=n(3783),f=n(7898),h=n(6742),v=n(3919),_=n(5537),E=function(e){return a.createElement("svg",(0,c.Z)({width:"20",height:"20",role:"img"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},k=n(4478),g=n(4973),C="sidebar_15mo",N="sidebarWithHideableNavbar_267A",Z="sidebarHidden_2kNb",S="sidebarLogo_3h0W",I="menu_Bmed",w="menuLinkText_2aKo",y="menuWithAnnouncementBar_2WvA",A="collapseSidebarButton_1CGd",T="collapseSidebarButtonIcon_3E-R",x="sidebarMenuIcon_fgN0",R="sidebarMenuCloseIcon_1lpH",M="menuLinkExternal_1OhN";var L=function e(t,n){return"link"===t.type?(0,d.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},B=(0,a.memo)((function(e){var t=e.items,n=(0,s.Z)(e,["items"]);return t.map((function(e,t){return a.createElement(P,(0,c.Z)({key:t,item:e},n))}))}));function P(e){switch(e.item.type){case"category":return a.createElement(H,e);case"link":default:return a.createElement(F,e)}}function H(e){var t,n,o,r=e.item,i=e.onItemClick,l=e.collapsible,d=e.activePath,m=(0,s.Z)(e,["item","onItemClick","collapsible","activePath"]),b=r.items,p=r.label,f=L(r,d),h=(n=f,o=(0,a.useRef)(n),(0,a.useEffect)((function(){o.current=n}),[n]),o.current),v=(0,a.useState)((function(){return!!l&&(!f&&r.collapsed)})),_=v[0],E=v[1],k=(0,a.useRef)(null),g=(0,a.useState)(void 0),C=g[0],N=g[1],Z=function(e){var t;void 0===e&&(e=!0),N(e?(null==(t=k.current)?void 0:t.scrollHeight)+"px":void 0)};(0,a.useEffect)((function(){f&&!h&&_&&E(!1)}),[f,h,_]);var S=(0,a.useCallback)((function(e){e.preventDefault(),C||Z(),setTimeout((function(){return E((function(e){return!e}))}),100)}),[C]);return 0===b.length?null:a.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":_})},a.createElement("a",(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":l,"menu__link--active":l&&f},t[w]=!l,t)),onClick:l?S:void 0,href:l?"#!":void 0},m),p),a.createElement("ul",{className:"menu__list",ref:k,style:{height:C},onTransitionEnd:function(){_||Z(!1)}},a.createElement(B,{items:b,tabIndex:_?"-1":"0",onItemClick:i,collapsible:l,activePath:d})))}function F(e){var t,n=e.item,o=e.onItemClick,r=e.activePath,i=(e.collapsible,(0,s.Z)(e,["item","onItemClick","activePath","collapsible"])),l=n.href,d=n.label,m=L(n,r);return a.createElement("li",{className:"menu__list-item",key:d},a.createElement(h.Z,(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":m},t[M]=!(0,v.Z)(l),t)),to:l},(0,v.Z)(l)&&{isNavLink:!0,exact:!0,onClick:o},i),d))}function W(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,g.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,g.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",A),onClick:t},a.createElement(E,{className:T}))}function D(e){var t=e.responsiveSidebarOpened,n=e.onClick;return a.createElement("button",{"aria-label":t?(0,g.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,g.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?a.createElement("span",{className:(0,u.Z)(x,R)},"\xd7"):a.createElement(k.Z,{className:x,height:24,width:24}))}var O=function(e){var t,n,o=e.path,r=e.sidebar,i=e.sidebarCollapsible,l=void 0===i||i,c=e.onCollapse,s=e.isHidden,h=function(){var e=(0,m.Z)().isAnnouncementBarClosed,t=(0,a.useState)(!e),n=t[0],o=t[1];return(0,f.Z)((function(t){var n=t.scrollY;e||o(0===n)})),n}(),v=(0,d.LU)(),E=v.navbar.hideOnScroll,k=v.hideableSidebar,g=(0,m.Z)().isAnnouncementBarClosed,w=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];(0,b.Z)(t);var o=(0,p.Z)();return(0,a.useEffect)((function(){o===p.D.desktop&&n(!1)}),[o]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,a.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,a.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),A=w.showResponsiveSidebar,T=w.closeResponsiveSidebar,x=w.toggleResponsiveSidebar;return a.createElement("div",{className:(0,u.Z)(C,(t={},t[N]=E,t[Z]=s,t))},E&&a.createElement(_.Z,{tabIndex:-1,className:S}),a.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",I,(n={"menu--show":A},n[y]=!g&&h,n))},a.createElement(D,{responsiveSidebarOpened:A,onClick:x}),a.createElement("ul",{className:"menu__list"},a.createElement(B,{items:r,onItemClick:T,collapsible:l,activePath:o}))),k&&a.createElement(W,{onClick:c}))},z=n(3541),K=n(4608),J=n(5977),U="docPage_31aa",Y="docMainContainer_3ufF",q="docMainContainerEnhanced_3NYZ",G="docSidebarContainer_3Kbt",Q="docSidebarContainerHidden_3pA8",X="collapsedDocSidebar_2JMH",j="expandSidebarButtonIcon_1naQ",V="docItemWrapperEnhanced_2vyJ",$="docItemWrapper_3FMP";function ee(e){var t,n,i,c,s,m=e.currentDocRoute,b=e.versionMetadata,p=e.children,f=(0,r.default)(),h=f.siteConfig,v=f.isClient,_=b.pluginId,k=b.permalinkToSidebar,C=b.docsSidebars,N=b.version,Z=k[m.path],S=C[Z],I=(0,a.useState)(!1),w=I[0],y=I[1],A=(0,a.useState)(!1),T=A[0],x=A[1],R=(0,a.useCallback)((function(){T&&x(!1),y(!w)}),[T]);return a.createElement(l.Z,{key:v,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:N,tag:(0,d.os)(_,N)}},a.createElement("div",{className:U},S&&a.createElement("div",{className:(0,u.Z)(G,(t={},t[Q]=w,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(G)&&w&&x(!0)},role:"complementary"},a.createElement(O,{key:Z,sidebar:S,path:m.path,sidebarCollapsible:null==(n=null==(i=h.themeConfig)?void 0:i.sidebarCollapsible)||n,onCollapse:R,isHidden:T}),T&&a.createElement("div",{className:X,title:(0,g.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,g.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:R,onClick:R},a.createElement(E,{className:j}))),a.createElement("main",{className:(0,u.Z)(Y,(c={},c[q]=w||!S,c))},a.createElement("div",{className:(0,u.Z)("container padding-vert--lg",$,(s={},s[V]=w,s))},a.createElement(o.Zo,{components:z.Z},p)))))}var te=function(e){var t=e.route.routes,n=e.versionMetadata,o=e.location,r=t.find((function(e){return(0,J.LX)(o.pathname,e)}));return r?a.createElement(ee,{currentDocRoute:r,versionMetadata:n},(0,i.Z)(t)):a.createElement(K.default,e)}},4608:function(e,t,n){"use strict";n.r(t);var a=n(7294),o=n(6591),r=n(4973);t.default=function(){return a.createElement(o.Z,{title:"Page Not Found"},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);
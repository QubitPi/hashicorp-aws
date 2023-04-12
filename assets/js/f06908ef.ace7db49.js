"use strict";(self.webpackChunkaergia=self.webpackChunkaergia||[]).push([[6823],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(r),h=a,m=g["".concat(l,".").concat(h)]||g[h]||u[h]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9235:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={slug:"nexus",title:"Nexus 3 - Setting Up Docker Registry",authors:["jiaqi"],tags:["Nexus","Docker"]},i=void 0,s={permalink:"/aergia/blog/nexus",editUrl:"https://github.com/QubitPi/aergia/tree/gh-pages/blog/2022-09-29-nexus-docker-registry/index.md",source:"@site/blog/2022-09-29-nexus-docker-registry/index.md",title:"Nexus 3 - Setting Up Docker Registry",description:"Docker containers and their usage have revolutionized the way applications and the underlying operating system are",date:"2022-09-29T00:00:00.000Z",formattedDate:"September 29, 2022",tags:[{label:"Nexus",permalink:"/aergia/blog/tags/nexus"},{label:"Docker",permalink:"/aergia/blog/tags/docker"}],readingTime:3.47,hasTruncateMarker:!0,authors:[{name:"Jiaqi Liu",title:"Maintainer of Aergia",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"nexus",title:"Nexus 3 - Setting Up Docker Registry",authors:["jiaqi"],tags:["Nexus","Docker"]},prevItem:{title:"Nexus 3 Repository Manager OSS",permalink:"/aergia/blog/nexus"},nextItem:{title:"Continuous Delivery",permalink:"/aergia/blog/continuous-delivery"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Docker containers and their usage have revolutionized the way applications and the underlying operating system are\npackaged and deployed to development, testing and production systems. The creation of the\n",(0,a.kt)("a",{parentName:"p",href:"https://opencontainers.org/"},"Open Container Initiative"),", and the involvement of a large number of stakeholders,\nguarantees that the ecosystem of tools around the lightweight containers and their usage will continue to flourish.\n",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub")," is the original registry for Docker container images and it is being joined by\nmore and more other publicly available registries such as the\n",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/container-registry/"},"Google Container Registry")," and others."),(0,a.kt)("p",null,"Nexus Repository Manager OSS support Docker registries as the Docker repository format for ",(0,a.kt)("strong",{parentName:"p"},"hosted")," and ",(0,a.kt)("strong",{parentName:"p"},"proxy"),"\nrepositories. We can expose these repositories to the client-side tools directly or as a\n",(0,a.kt)("a",{parentName:"p",href:"#repository-group"},"repository group"),", which is a repository that merges and exposes the contents of multiple\nrepositories in one convenient URL. This allows us to reduce time and bandwidth usage for accessing Docker images in a\nregistry as well as share our images within our organization in a hosted repository. Users can then launch containers\nbased on those images, resulting in a completely private Docker registry with all the features available in the\nrepository manager."))}u.isMDXComponent=!0}}]);
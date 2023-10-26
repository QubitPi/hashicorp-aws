"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[7795],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,g=u["".concat(c,".").concat(h)]||u[h]||p[h]||n;return r?o.createElement(g,i(i({ref:t},d),{},{components:r})):o.createElement(g,i({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2082:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=r(7462),a=(r(7294),r(3905));const n={slug:"docker-c-advisor",title:"Docker cAdvisor",authors:["jiaqi"],tags:["Docker","Virtualization"],date:new Date("2022-07-31T00:00:00.000Z")},i=void 0,s={permalink:"/hashicorp-aws/blog/docker-c-advisor",editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/gh-pages/blog/docker-c-advisor/index.md",source:"@site/blog/docker-c-advisor/index.md",title:"Docker cAdvisor",description:"[//]: # (Copyright Jiaqi Liu)",date:"2022-07-31T00:00:00.000Z",formattedDate:"July 31, 2022",tags:[{label:"Docker",permalink:"/hashicorp-aws/blog/tags/docker"},{label:"Virtualization",permalink:"/hashicorp-aws/blog/tags/virtualization"}],readingTime:1.29,hasTruncateMarker:!0,authors:[{name:"Jiaqi Liu",title:"Maintainer of hashicorp-aws",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"docker-c-advisor",title:"Docker cAdvisor",authors:["jiaqi"],tags:["Docker","Virtualization"],date:"2022-07-31T00:00:00.000Z"},prevItem:{title:"Deploying v.s. Releasing",permalink:"/hashicorp-aws/blog/deploying-vs-releasing"},nextItem:{title:"OpenVPN",permalink:"/hashicorp-aws/blog/openvpn"}},c={authorsImageUrls:[void 0]},l=[{value:"Docker cAdvisor",id:"docker-cadvisor",level:2},{value:"docker-container-stats",id:"docker-container-stats",level:3}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"docker-cadvisor"},"Docker cAdvisor"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/cadvisor"},"cAdvisor")," (Container Advisor) provides Docker container users an understanding of\nthe resource usage and performance characteristics of their running containers. It is a running daemon that collects,\naggregates, processes, and exports information about running containers. Specifically, for each container it keeps\nresource isolation parameters, historical resource usage, histograms of complete historical resource usage and network\nstatistics. This data is exported by container and machine-wide."),(0,a.kt)("p",null,"Although ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/cadvisor"},"cAdvisor")," has some prelimilary (useful though) UI. It also offers"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/google/cadvisor/blob/master/docs/api.md"},"RESTful API to query container stats")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/google/cadvisor/blob/master/docs/storage/README.md"},"Export capability to common data storage, such as Elasticsearch"))),(0,a.kt)("p",null,"To pull the image and run it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker run \\\n    --volume=/:/rootfs:ro \\\n    --volume=/var/run/docker.sock:/var/run/docker.sock:rw \\\n    --volume=/sys:/sys:ro \\\n    --volume=/var/lib/docker/:/var/lib/docker:ro \\\n    --volume=/dev/disk/:/dev/disk:ro \\\n    --publish=8080:8080 \\\n    --detach=true \\\n    --name=cadvisor \\\n    --privileged \\\n    --device=/dev/kmsg \\\n    gcr.io/cadvisor/cadvisor:v0.36.0\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cAdvisor Screenshot 1",src:r(4153).Z,width:"4720",height:"5386"}),"\n",(0,a.kt)("img",{alt:"cAdvisor Screenshot 2",src:r(6091).Z,width:"4320",height:"4522"})),(0,a.kt)("h3",{id:"docker-container-stats"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/virtualzone/docker-container-stats"},"docker-container-stats")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/cadvisor"},"cAdvisor")," is good for customizing container monitoring, but it's heavy. A\nquick-and-lightweight option would be ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/virtualzone/docker-container-stats"},"docker-container-stats")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"docker-container-stats Screenshot",src:r(80).Z,width:"2560",height:"2237"})))}p.isMDXComponent=!0},4153:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/cadvisor-1-f3d37ad695ee8806adcd57ec59893391.png"},6091:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/cadvisor-2-e81d490aab2caa428bfb987f332c7f88.png"},80:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/docker-container-stats-b043603502126026d11f7d14bea837d3.png"}}]);
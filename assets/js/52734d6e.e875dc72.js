"use strict";(self.webpackChunkaergia=self.webpackChunkaergia||[]).push([[9518],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7009:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const i={sidebar_position:8},o="aergia::nexus",c={unversionedId:"recipes/nexus",id:"recipes/nexus",title:"aergia::nexus",description:"Deploys Nexus 3 Repository Manager OSS Using Docker",source:"@site/docs/recipes/nexus.md",sourceDirName:"recipes",slug:"/recipes/nexus",permalink:"/aergia/docs/recipes/nexus",draft:!1,editUrl:"https://github.com/QubitPi/aergia/tree/gh-pages/docs/recipes/nexus.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"aergia::jenkins_github_webhook",permalink:"/aergia/docs/recipes/jenkins-github-webhook"},next:{title:"aergia::keycloak",permalink:"/aergia/docs/recipes/keycloak"}},s={},l=[{value:"Recipe Details",id:"recipe-details",level:2},{value:"Create Docker Volume",id:"create-docker-volume",level:3},{value:"Start Nexus 3 Container",id:"start-nexus-3-container",level:3},{value:"Recipe Verification",id:"recipe-verification",level:2}],u={toc:l};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aergianexus"},"aergia::nexus"),(0,a.kt)("p",null,"Deploys Nexus 3 Repository Manager OSS Using Docker"),(0,a.kt)("h2",{id:"recipe-details"},"Recipe Details"),(0,a.kt)("h3",{id:"create-docker-volume"},"Create Docker Volume"),(0,a.kt)("p",null,"Since docker volumes are persistent, a volume can be created specifically for persisting data. This is the recommended\nbecause it can be used for backup later as well."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker volume create --name nexus-data\n")),(0,a.kt)("h3",{id:"start-nexus-3-container"},"Start Nexus 3 Container"),(0,a.kt)("p",null,"Withe volume created, ",(0,a.kt)("inlineCode",{parentName:"p"},"aergia::nexus")," pulls the Nexus 3 image and run the container using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d -p 8081:8081 --name nexus -v nexus-data:/nexus-data sonatype/nexus3\n")),(0,a.kt)("h2",{id:"recipe-verification"},"Recipe Verification"))}p.isMDXComponent=!0}}]);
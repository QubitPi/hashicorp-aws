"use strict";(self.webpackChunkaergia=self.webpackChunkaergia||[]).push([[9998],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),p=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},k=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),k=p(t),d=n,y=k["".concat(l,".").concat(d)]||k[d]||u[d]||o;return t?a.createElement(y,i(i({ref:r},s),{},{components:t})):a.createElement(y,i({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=k;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3732:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=t(7462),n=(t(7294),t(3905));const o={sidebar_position:9},i="aergia::keycloak",c={unversionedId:"recipes/keycloak",id:"recipes/keycloak",title:"aergia::keycloak",description:"Deploys Keycloak on Docker",source:"@site/docs/recipes/keycloak.md",sourceDirName:"recipes",slug:"/recipes/keycloak",permalink:"/aergia/docs/recipes/keycloak",draft:!1,editUrl:"https://github.com/QubitPi/aergia/tree/gh-pages/docs/recipes/keycloak.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"aergia::nexus",permalink:"/aergia/docs/recipes/nexus"},next:{title:"intro",permalink:"/aergia/docs/intro"}},l={},p=[{value:"Recipe Details",id:"recipe-details",level:2},{value:"Create Docker Volume",id:"create-docker-volume",level:3},{value:"Start Keycloak Container",id:"start-keycloak-container",level:3},{value:"Recipe Verification",id:"recipe-verification",level:2}],s={toc:p};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aergiakeycloak"},"aergia::keycloak"),(0,n.kt)("p",null,"Deploys Keycloak on Docker"),(0,n.kt)("h2",{id:"recipe-details"},"Recipe Details"),(0,n.kt)("h3",{id:"create-docker-volume"},"Create Docker Volume"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker volume create --name keycloak-data\n")),(0,n.kt)("h3",{id:"start-keycloak-container"},"Start Keycloak Container"),(0,n.kt)("p",null,"Withe volume created, ",(0,n.kt)("inlineCode",{parentName:"p"},"aergia::keycloak")," pulls the Keycloak image and run the container using:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:20.0.1 start-dev\n\ndocker run -d -p 8081:8081 --name nexus -v nexus-data:/nexus-data sonatype/nexus3\n")),(0,n.kt)("h2",{id:"recipe-verification"},"Recipe Verification"))}u.isMDXComponent=!0}}]);
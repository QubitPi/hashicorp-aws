"use strict";(self.webpackChunkaergia=self.webpackChunkaergia||[]).push([[8172],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(r),d=a,m=g["".concat(l,".").concat(d)]||g[d]||u[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3198:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={slug:"ssh-ascii-banner",title:"Add Custom ASCII Banner Logo to SSH Login Screen",authors:["jiaqi","mike-andreasen"],tags:["DevOps"]},i=void 0,s={permalink:"/aergia/blog/ssh-ascii-banner",editUrl:"https://github.com/QubitPi/aergia/tree/gh-pages/blog/2022-04-30-ssh-ascii-banner/index.md",source:"@site/blog/2022-04-30-ssh-ascii-banner/index.md",title:"Add Custom ASCII Banner Logo to SSH Login Screen",description:"[//]: # (Copyright Jiaqi Liu)",date:"2022-04-30T00:00:00.000Z",formattedDate:"April 30, 2022",tags:[{label:"DevOps",permalink:"/aergia/blog/tags/dev-ops"}],readingTime:1.68,hasTruncateMarker:!0,authors:[{name:"Jiaqi Liu",title:"Maintainer of Aergia",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"},{name:"Mike Andreasen",url:"https://guides.wp-bullet.com/add-custom-ascii-banner-logo-to-ssh-login/",imageURL:"https://secure.gravatar.com/avatar/0b12d8ba68100a5d983170f913d20d5e?s=100&d=mm&r=g",key:"mike-andreasen"}],frontMatter:{slug:"ssh-ascii-banner",title:"Add Custom ASCII Banner Logo to SSH Login Screen",authors:["jiaqi","mike-andreasen"],tags:["DevOps"]},prevItem:{title:"OpenVPN",permalink:"/aergia/blog/openvpn"}},l={authorsImageUrls:[void 0,void 0]},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the early 90's ASCII art became a thing. It was a way to make logos using regular ASCII characters to decorate readme\nfiles and add some branding. Nowadays we can generate these banners using free tools like ",(0,a.kt)("a",{parentName:"p",href:"http://patorjk.com/software/taag/"},"Text to ASCII Art Generator"),".\nIt can be used to create a server login banner that is displayed each time people log in via SSH."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"./example.png",src:r(5022).Z,width:"1490",height:"510"})),(0,a.kt)("p",null,"Firs generate a ASCII logo with the ",(0,a.kt)("a",{parentName:"p",href:"http://patorjk.com/software/taag/"},"Text to ASCII Art Generator"),". Then open up message of the day file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/motd\n")),(0,a.kt)("p",null,"Add a text such as"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"The programs included with the Debian GNU/Linux system are free software;\nthe exact distribution terms for each program are described in the\nindividual files in /usr/share/doc/*/copyright.\n\nDebian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent\npermitted by applicable law.\n\n\n______     _              ______      _\n| ___ \\   (_)             |  _  \\    | |\n| |_/ /_ _ _  ___  _ __   | | | |__ _| |_ __ _\n|  __/ _` | |/ _ \\| '_ \\  | | | / _` | __/ _` |\n| | | (_| | | (_) | | | | | |/ / (_| | || (_| |\n\\_|  \\__,_|_|\\___/|_| |_| |___/ \\__,_|\\__\\__,_|\n")),(0,a.kt)("p",null,"Save the file and open a new SSH session and log in, we should be greeted with our beautiful banner"))}u.isMDXComponent=!0},5022:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/example-78639df3c1b99be9ab4ea1206b15b69b.png"}}]);
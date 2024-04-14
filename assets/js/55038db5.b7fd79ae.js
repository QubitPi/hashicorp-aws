"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[4865],{7651:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=s(4848),n=s(8453);const i={slug:"jdk-setup",title:"Setting up JDK in GitHub Actions",authors:["jiaqi"],tags:["CI/CD","GitHub","Backend","Java"]},o=void 0,r={permalink:"/hashicorp-aws/blog/jdk-setup",editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/master/docs/blog/2024-04-14-jdk-setup.md",source:"@site/blog/2024-04-14-jdk-setup.md",title:"Setting up JDK in GitHub Actions",description:"[//]: # (Copyright Jiaqi Liu)",date:"2024-04-14T00:00:00.000Z",formattedDate:"April 14, 2024",tags:[{label:"CI/CD",permalink:"/hashicorp-aws/blog/tags/ci-cd"},{label:"GitHub",permalink:"/hashicorp-aws/blog/tags/git-hub"},{label:"Backend",permalink:"/hashicorp-aws/blog/tags/backend"},{label:"Java",permalink:"/hashicorp-aws/blog/tags/java"}],readingTime:.845,hasTruncateMarker:!1,authors:[{name:"Jiaqi Liu",title:"Maintainer of hashicorp-aws",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"jdk-setup",title:"Setting up JDK in GitHub Actions",authors:["jiaqi"],tags:["CI/CD","GitHub","Backend","Java"]},unlisted:!1,prevItem:{title:"Cypress E2E Tests",permalink:"/hashicorp-aws/blog/cypress-e2e"},nextItem:{title:"NPM Release action",permalink:"/hashicorp-aws/blog/npm-release"}},u={authorsImageUrls:[void 0]},l=[{value:"Installing JDK 17",id:"installing-jdk-17",level:2}];function c(t){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"installing-jdk-17",children:"Installing JDK 17"}),"\n",(0,a.jsxs)(e.p,{children:["The standard ",(0,a.jsx)(e.a,{href:"https://github.com/actions/setup-java",children:"actions/setup-java"})," requires us to specify JDK distributions other\nthan JDK version. Looking up JDK distributions wastes user's time and gives opportunities to error."]}),"\n",(0,a.jsx)(e.p,{children:"We offer a no-config action that installs JDK 17 by default. The usage is as follows:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-yaml",children:'name: CI/CD\n\n"on":\n  pull_request:\n  push:\n    branches:\n      - master\n\njobs:\n  tests:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Set up JDK\n        uses: QubitPi/hashicorp-aws/.github/actions/jdk-setup@master\n'})})]})}function p(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(c,{...t})}):c(t)}},8453:(t,e,s)=>{s.d(e,{R:()=>o,x:()=>r});var a=s(6540);const n={},i=a.createContext(n);function o(t){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:o(t.components),a.createElement(i.Provider,{value:e},t.children)}}}]);
"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[3511],{1446:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=n(4848),i=n(8453);const r={slug:"cypress-e2e",title:"Cypress E2E Tests",authors:["jiaqi"],tags:["CI/CD","GitHub","Frontend"]},a=void 0,o={permalink:"/hashicorp-aws/blog/cypress-e2e",editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/master/docs/blog/2024-04-14-cypress-e2e.md",source:"@site/blog/2024-04-14-cypress-e2e.md",title:"Cypress E2E Tests",description:"This action assumes the yarn package manager is used.",date:"2024-04-14T00:00:00.000Z",formattedDate:"April 14, 2024",tags:[{label:"CI/CD",permalink:"/hashicorp-aws/blog/tags/ci-cd"},{label:"GitHub",permalink:"/hashicorp-aws/blog/tags/git-hub"},{label:"Frontend",permalink:"/hashicorp-aws/blog/tags/frontend"}],readingTime:2.035,hasTruncateMarker:!1,authors:[{name:"Jiaqi Liu",title:"Maintainer of hashicorp-aws",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"cypress-e2e",title:"Cypress E2E Tests",authors:["jiaqi"],tags:["CI/CD","GitHub","Frontend"]},unlisted:!1,nextItem:{title:"Setting up JDK in GitHub Actions",permalink:"/hashicorp-aws/blog/jdk-setup"}},c={authorsImageUrls:[void 0]},l=[];function p(e){const s={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["This action assumes the ",(0,t.jsx)(s.a,{href:"https://yarnpkg.com/",children:"yarn package manager"})," is used."]})}),"\n",(0,t.jsxs)(s.p,{children:["Cypress E2E action offers an easy way to automate, customize, and execute ",(0,t.jsx)(s.strong,{children:"parallel"})," end-to-end tests. The action\nprovides"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["dependency installation via ",(0,t.jsx)(s.strong,{children:"yarn"}),","]}),"\n",(0,t.jsx)(s.li,{children:"scanning of test specs,"}),"\n",(0,t.jsx)(s.li,{children:"running each spec in parallel, and"}),"\n",(0,t.jsx)(s.li,{children:"upload test screenshots and video on test failure."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The example below is a very simple setup:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Install Cypress with ",(0,t.jsx)(s.code,{children:"yarn add cypress --dev"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Initialize Cypress with ",(0,t.jsx)(s.code,{children:"yarn run cypress open"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://qubitpi.github.io/cypress-documentation/guides/tooling/typescript-support/",children:"Support TypeScript"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Put all ",(0,t.jsx)(s.strong,{children:".spec.cy.ts"}),' test files under "cypress/e2e" directory']}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Install ",(0,t.jsx)(s.a,{href:"https://www.npmjs.com/package/wait-on",children:"wait-on"}),": ",(0,t.jsx)(s.code,{children:"yarn add -D wait-on"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Add the following script command to ",(0,t.jsx)(s.code,{children:"package.json"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  ...\n\n  "scripts": {\n    "e2e": "cypress run --browser chrome",\n    "wait-on-dev": "wait-on http-get://localhost:3000/",\n    "wait-on-prod": "wait-on http-get://localhost:3000/"\n  },\n\n  ...\n}\n'})}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"Note that we assume the UI is running at port 3000. Please adjust it accordingly if it's running at a different port."})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Use Cypress E2E Tests workflow:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:'---\nname: CI/CD\n\n"on":\n  pull_request:\n  push:\n    branches:\n      - master\n\nenv:\n  NODE_VERSION: 18\n\njobs:\n  list-e2e-specs:\n    runs-on: ubuntu-latest\n    outputs:\n      paths: ${{ steps.list-e2e-specs.outputs.paths }}\n    steps:\n      - name: List Files\n        id: list-e2e-specs\n        uses: mirko-felice/list-files-action@v3.0.5\n        with:\n          repo: ${{ github.repository }}\n          ref: ${{ github.ref }}\n          path: "cypress/e2e"\n          ext: ".ts"\n\n  e2e-tests:\n    name: E2E Tests\n    needs: list-e2e-specs\n    runs-on: ubuntu-latest\n    strategy:\n      fail-fast: false\n      matrix:\n        node_version: [18]\n        start_strategy: ["yarn-start", "serve"]\n        test_spec: ${{ fromJson(needs.list-e2e-specs.outputs.paths) }}\n    steps:\n      - uses: actions/checkout@v3\n      - name: Set node version to ${{ inputs.node-version }}\n        uses: actions/setup-node@v3\n        with:\n          node-version: ${{ inputs.node-version }}\n      - name: Install dependencies\n        run: yarn\n      - uses: QubitPi/hashicorp-aws/.github/actions/cypress-e2e@master\n        with:\n          node-version: ${{ env.NODE_VERSION }}\n          start-strategy: ${{ matrix.start_strategy }}\n          spec-relative-path: ${{ matrix.test_spec }}\n'})}),"\n",(0,t.jsxs)(s.admonition,{type:"tip",children:[(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"start_strategy"})," in the ",(0,t.jsx)(s.code,{children:"mastrix"})," section above specifies how the UI web app is started during the E2E test.\nThere are 2 strategies:"]}),(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"yarn-start"}),": the web app is started using ",(0,t.jsx)(s.code,{children:"yarn start"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"server"}),": a production build is generated first using ",(0,t.jsx)(s.code,{children:"yarn build"})," and then the web app is started with\n",(0,t.jsx)(s.code,{children:"yarn serve"})]}),"\n"]}),"\n"]}),(0,t.jsx)(s.p,{children:"The reason to support the two strategies is that we assume E2E testing consists of 2 logical parts:"}),(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"The logical tests defined by Cypress spec files"}),"\n",(0,t.jsx)(s.li,{children:"The same tests in the context of integration of web app logic and the production runtime"}),"\n"]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["github-actions-core\nThe app may work perfectly fine in E2E but it's a different question when the same app is packaged up using\n",(0,t.jsx)(s.a,{href:"https://webpack.js.org/",children:"webpack"}),". The later could also be interpreted as integration tests against webpackgithub-actions-core\nconfiguration which makes the tests more comprehensive"]}),"\n",(0,t.jsx)(s.p,{children:":::"})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>o});var t=n(6540);const i={},r=t.createContext(i);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);
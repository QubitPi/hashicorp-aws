"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[2019],{4108:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>r});var i=e(4848),s=e(8453);const o={slug:"github-slack-notification",title:"Sending GitHub Action Results to Slack Channel",authors:["jiaqi"],tags:["CI/CD","Slack","Team Efficiency"]},a=void 0,c={permalink:"/blog/github-slack-notification",editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/master/docs/blog/2024-01-27-github-slack-notification/index.md",source:"@site/blog/2024-01-27-github-slack-notification/index.md",title:"Sending GitHub Action Results to Slack Channel",description:"Sending data into Slack using slack-send.",date:"2024-01-27T00:00:00.000Z",formattedDate:"January 27, 2024",tags:[{label:"CI/CD",permalink:"/blog/tags/ci-cd"},{label:"Slack",permalink:"/blog/tags/slack"},{label:"Team Efficiency",permalink:"/blog/tags/team-efficiency"}],readingTime:2.125,hasTruncateMarker:!0,authors:[{name:"Jiaqi Liu",title:"Maintainer of hashicorp-aws",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"github-slack-notification",title:"Sending GitHub Action Results to Slack Channel",authors:["jiaqi"],tags:["CI/CD","Slack","Team Efficiency"]},unlisted:!1,prevItem:{title:"Reusable GitHub Action - Posting GitHub Secrets",permalink:"/blog/github-secret-action"},nextItem:{title:"Using a GitHub Action Matrix to Define Variations for Each Job",permalink:"/blog/github-matrix"}},l={authorsImageUrls:[void 0]},r=[{value:"slack-send",id:"slack-send",level:2},{value:"Multi-Terminal-Job Configuration",id:"multi-terminal-job-configuration",level:3},{value:"slack-send v.s. Github Slack Integration",id:"slack-send-vs-github-slack-integration",level:2}];function u(n){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Sending data into Slack using ",(0,i.jsx)(t.a,{href:"https://github.com/marketplace/actions/slack-send",children:"slack-send"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"slack-send",children:"slack-send"}),"\n",(0,i.jsxs)(t.p,{children:["This post discusses practical guide for sending data to Slack via a ",(0,i.jsx)(t.strong,{children:"Slack Incoming Webhook URL"}),". The reason we prefer\nwebhook approach is to preserve the privacy of team member. The chatbot invite approach potentially\nallow all Slack member to touch a private app of an individual"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Follow the ",(0,i.jsx)(t.a,{href:"https://github.com/slackapi/slack-github-action?tab=readme-ov-file#setup-2",children:"setup"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Add ",(0,i.jsx)(t.code,{children:"slack-notification"})," job and a trigger in the last CI/CD job:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:"title=.github/workflows/ci-cd.yml",children:"---\nname: My CI/CD\n\njobs:\n  the-last-job:\n    name: The last CI/CD job in workflow\n    outputs:\n      outcome: ${{ job.status }}\n    continue-on-error: true\n    runs-on: ubuntu-latest\n    steps:\n      ...\n\n  slack-notification:\n    name: Send Slack Notification\n    if: ${{ always() }}\n    needs: the-last-job\n    uses: QubitPi/hashicorp-aws/.github/workflows/slack-notification.yml@master\n    with:\n      job-status: ${{ needs.the-last-job.outputs.outcome }}\n    secrets:\n      slack-webhook-url: ${{ secrets.SLACK_WEBHOOK_URL }}\n"})}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.p,{children:["Note the key block in ",(0,i.jsx)(t.code,{children:"the-last-job"}),":"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"outputs:\n  outcome: ${{ job.status }}\ncontinue-on-error: true\n"})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"multi-terminal-job-configuration",children:"Multi-Terminal-Job Configuration"}),"\n",(0,i.jsx)(t.p,{children:'The config above applies to the case with a single last job. We call this job "terminal job". The configuration becomes\na little different when there are multiple terminal jobs such as the one workflow in the figure below:'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Error loading slack-notification-multi-terminal-jobs.png",src:e(2031).A+"",width:"1200",height:"540"})}),"\n",(0,i.jsxs)(t.p,{children:["In this case we change the ",(0,i.jsx)(t.code,{children:"job-status"})," input of ",(0,i.jsx)(t.code,{children:"slack-notification"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:"title=.github/workflows/ci-cd.yml",children:"---\nname: My CI/CD\n\njobs:\n  terminal-job-a:\n    name: Terminal Job A\n    outputs:\n      outcome: ${{ job.status }}\n    continue-on-error: true\n    runs-on: ubuntu-latest\n    steps:\n      ...\n\n  terminal-job-b:\n    name: Terminal Job B\n    outputs:\n      outcome: ${{ job.status }}\n    continue-on-error: true\n    runs-on: ubuntu-latest\n    steps:\n      ...\n\n  slack-notification:\n    name: Send Slack Notification\n    if: ${{ always() }}\n    needs: [terminal-job-a, terminal-job-b]\n    uses: QubitPi/hashicorp-aws/.github/workflows/slack-notification.yml@master\n    with:\n      job-status: ${{ (needs.terminal-job-a.outputs.outcome == 'success' && needs.terminal-job-b.outputs.outcome == 'success') && 'success' || 'failure' }}\n    secrets:\n      slack-webhook-url: ${{ secrets.SLACK_WEBHOOK_URL }}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note we are using the ",(0,i.jsx)(t.a,{href:"https://7tonshark.com/posts/github-actions-ternary-operator/",children:"ternary expression in GitHub Actions"})," for the value of ",(0,i.jsx)(t.code,{children:"job-status"})," above."]}),"\n",(0,i.jsx)(t.h2,{id:"slack-send-vs-github-slack-integration",children:"slack-send v.s. Github Slack Integration"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/integrations/slack",children:"Github Slack Integration"}),' offers "on-click" experience with almost no configurations like the one above. In addition,\nit sends notification on GitHub issues open/close, pull requests, GitHub Action workflow ',(0,i.jsx)(t.em,{children:"status"}),", etc. The easier setup\nand richer notifications makes ",(0,i.jsx)(t.a,{href:"https://github.com/integrations/slack",children:"Github Slack Integration"})," a better choice for team-collaboration managing multiple\nrepositories with a common communication standards"]}),"\n",(0,i.jsxs)(t.p,{children:["slack-send, on the other hands, supports sending any information about GitHub Action workflow, not just ",(0,i.jsx)(t.em,{children:"status"}),". It\nalso supports custom messages; we can inject emoji or custom pictures in the notification messges, which is a big plus\nfor those who love personal customizations and focuses on only success-or-fail of each GitHub action run."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["With slack-send we also do not need to run ",(0,i.jsx)(t.code,{children:"/invite @GitHub"})," so our channel is completely private."]})})]})}function h(n={}){const{wrapper:t}={...(0,s.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},2031:(n,t,e)=>{e.d(t,{A:()=>i});const i=e.p+"assets/images/slack-notification-multi-terminal-jobs-d3c5acd6074cf4be75f50e7f89e55eb6.png"},8453:(n,t,e)=>{e.d(t,{R:()=>a,x:()=>c});var i=e(6540);const s={},o=i.createContext(s);function a(n){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),i.createElement(o.Provider,{value:t},n.children)}}}]);
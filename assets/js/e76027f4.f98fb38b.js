"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[8808],{536:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var t=s(5893),i=s(1151);const a={sidebar_position:5,title:"React App"},r=void 0,l={id:"react",title:"React App",description:"[//]: # (Copyright Jiaqi Liu)",source:"@site/docs/5-react.md",sourceDirName:".",slug:"/react",permalink:"/hashicorp-aws/docs/react",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/master/docs/docs/5-react.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"React App"},sidebar:"tutorialSidebar",previous:{title:"Elastic Stack (ELK)",permalink:"/hashicorp-aws/docs/elk"},next:{title:"Jersey-Jetty Based Webservice",permalink:"/hashicorp-aws/docs/webservice"}},c={},o=[{value:"Manual Deployment",id:"manual-deployment",level:2},{value:"GitHub Action Automatic Deployment",id:"github-action-automatic-deployment",level:2},{value:"General Template in Downstream Repo",id:"general-template-in-downstream-repo",level:3},{value:"Auxiliary Actions",id:"auxiliary-actions",level:3},{value:"Code Style Checks",id:"code-style-checks",level:4},{value:"Unit Tests",id:"unit-tests",level:4},{value:"Cypress E2E Tests",id:"cypress-e2e-tests",level:4},{value:"Release to NPM",id:"release-to-npm",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["EBS volumes during build time will ",(0,t.jsx)(n.a,{href:"https://qubitpi.github.io/hashicorp-packer/packer/integrations/hashicorp/amazon/latest/components/builder/ebs#:~:text=Optional%3A-,delete_on_termination,-(bool)%20%2D%20Indicates%20whether",children:"automatically be removed"})]}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"manual-deployment",children:"Manual Deployment"}),"\n",(0,t.jsx)(n.p,{children:"The following script variables need to be defined:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html",children:(0,t.jsx)(n.strong,{children:"AWS_ACCESS_KEY_ID"})})," & ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html",children:(0,t.jsx)(n.strong,{children:"AWS_SECRET_ACCESS_KEY"})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"IAM user"})," associated with the credentials above must have the following ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_access-management.html",children:"AWS permissions policies"}),":"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"IAMFullAccess"}),"\n",(0,t.jsx)(n.li,{children:"AmazonEC2FullAccess"}),"\n",(0,t.jsx)(n.li,{children:"AmazonRoute53FullAccess"}),"\n"]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"REACT_DIR"}),": The local absolute path to the React project repo"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Should the React App be built with ",(0,t.jsx)(n.a,{href:"https://create-react-app.dev/docs/adding-custom-environment-variables/#adding-development-environment-variables-in-env",children:".env file"}),", this file MUST exist at ",(0,t.jsx)(n.code,{children:"$REACT_DIR/.env"})," at this moment. This .env\nfile is essentially the same one mentioned in the ",(0,t.jsx)(n.code,{children:"HC_CONFIG_DIR"})," part below"]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"HC_DIR"}),": The local absolute path to the ",(0,t.jsx)(n.a,{href:"https://qubitpi.github.io/hashicorp-aws/",children:"hashicorp-aws"})," directory"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"HC_CONFIG_DIR"}),": The local absolute path to a directory containing the following deployment files:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["SSL cert file located (",(0,t.jsx)(n.code,{children:"/abs/path/to/hashicorp-aws-config-dir/server.crt"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["SSL cert key file (",(0,t.jsx)(n.code,{children:"/abs/path/to/hashicorp-aws-config-dir/server.key"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Nginx config file (",(0,t.jsx)(n.code,{children:"/abs/path/to/hashicorp-aws-config-dir/nginx.conf"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[".env file (",(0,t.jsx)(n.code,{children:"/abs/path/to/hashicorp-aws-config-dir/.env"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.a,{href:"https://qubitpi.github.io/hashicorp-packer/packer/guides/hcl/variables#from-a-file",children:"HashiCorp Packer variable file"})," named ",(0,t.jsx)(n.strong,{children:"aws-react.pkrvars.hcl"})," with the following\nvariable values (",(0,t.jsx)(n.code,{children:"/abs/path/to/hashicorp-aws-config-dir/aws-react.pkrvars.hcl"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-hcl",children:'aws_image_region                 = "my-aws-region"\nami_name                         = "my-react-app"\ninstance_type                    = "<one of t2.micro/t2.small/t2.medium/t2.large/t2.xlarge/t2.2xlarge>"\nreact_dist_path                  = "../../../../dist"\naws_react_ssl_cert_file_path     = "../../../../hashicorp-aws-config-dir/server.crt"\naws_react_ssl_cert_key_file_path = "../../../../hashicorp-aws-config-dir/server.key"\naws_react_nginx_config_file_path = "../../../../hashicorp-aws-config-dir/nginx.conf"\naws_react_dot_env_file_path      = "../../../../hashicorp-aws-config-dir/filebeat.yml"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.a,{href:"https://qubitpi.github.io/hashicorp-terraform/terraform/language/values/variables#variable-definitions-tfvars-files",children:"HashiCorp Terraform variable file"})," named ",(0,t.jsx)(n.strong,{children:"aws-react.tfvars"})," with the\nfollowing variable values (",(0,t.jsx)(n.code,{children:"/abs/path/to/hashicorp-aws-config-dir/aws-react.tfvars"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-hcl",children:'aws_deploy_region   = "my-aws-region"\nroute_53_zone_id    = "9DQXLTNSN7ZX9P8V2KZII"\nami_name            = "my-react-app"\ninstance_type       = "<one of t2.micro/t2.small/t2.medium/t2.large/t2.xlarge/t2.2xlarge>"\nec2_instance_name   = "My React App"\nec2_security_groups = ["My React App"]\nreact_domain        = "myreactapp.mycompany.com"\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Then we can execute the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://github.com/QubitPi/hashicorp-aws/blob/master/hashicorp/react/deploy.sh",children:"deploy.sh"})})," to manually deploy any React Apps"]}),"\n",(0,t.jsx)(n.h2,{id:"github-action-automatic-deployment",children:"GitHub Action Automatic Deployment"}),"\n",(0,t.jsx)(n.h3,{id:"general-template-in-downstream-repo",children:"General Template in Downstream Repo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"env:\n  NODE_VERSION: 16\n\njobs:\n  hashicorp:\n    name: Generated React dist in GitHub Action, publish its AMI and deploy the AMI to EC2 through HashiCorp\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v3\n      - name: Set node version to ${{ env.NODE_VERSION }}\n        uses: actions/setup-node@v3\n        with:\n          node-version: ${{ env.NODE_VERSION }}\n      - name: Checkout HashiCorp deployment tool\n        run: git clone https://github.com/QubitPi/hashicorp-aws.git ../hashicorp-aws\n      - name: Load hashicorp-aws-config-dir and put it in the same directory as hashicorp-aws\n        run: ...\n      - name: Load Packer variable file\n        run: cp ../hashicorp-aws-config-dir/aws-react.pkrvars.hcl ../hashicorp-aws/hashicorp/react/images/aws-react.auto.pkrvars.hcl\n      - name: Load Terraform variable file\n        run: cp ../hashicorp-aws-config-dir/aws-react.tfvars ../hashicorp-aws/hashicorp/react/instances/aws-react.auto.tfvars\n      - name: Generate dist\n        run: cp ../hashicorp-aws-config-dir/.env . && yarn && yarn build\n      - name: Move dist to a location for HashiCorp deployment to pickup\n        run: mv dist ../\n      - name: QubitPi/hashicorp-aws\n        uses: QubitPi/hashicorp-aws@master\n        with:\n          hashicorp-dir: ../hashicorp-aws/hashicorp/react\n          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}\n          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n          aws-region: ${{ secrets.AWS_REGION }}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"auxiliary-actions",children:"Auxiliary Actions"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"The following auxiliary actions assumes a yarn-based project"})}),"\n",(0,t.jsx)(n.h4,{id:"code-style-checks",children:"Code Style Checks"}),"\n",(0,t.jsxs)(n.p,{children:["This action assume ",(0,t.jsx)(n.a,{href:"https://eslint.org/",children:"ESLint"}),", ",(0,t.jsx)(n.a,{href:"https://typescript-eslint.io/",children:"typescript-eslint"}),", and ",(0,t.jsx)(n.a,{href:"https://qubitpi.github.io/prettier/docs/en/install.html",children:"Prettier"})," have been installed"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add --dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript\nyarn add --dev --exact prettier\n"})}),"\n",(0,t.jsxs)(n.admonition,{title:"ESLint Configuration",type:"info",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn run eslint --init # https://dev.to/maithanhdanh/configuration-for-eslint-b47\n"})}),(0,t.jsxs)(n.p,{children:["Edit the auto-generated ",(0,t.jsx)(n.strong,{children:".eslintrc.json"})," to make it look like the following:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title=".eslintrc.json"',children:'{\n  "env": {\n    "browser": true,\n    "es2021": true\n  },\n  "extends": [\n    "standard-with-typescript",\n    "plugin:react/recommended",\n    "eslint:recommended",\n    "plugin:@typescript-eslint/recommended",\n    "prettier"\n  ],\n  "parser": "@typescript-eslint/parser",\n  "parserOptions": {\n    "ecmaVersion": "latest",\n    "sourceType": "module"\n  },\n  "plugins": ["react", "@typescript-eslint"],\n  "rules": {\n    "react/react-in-jsx-scope": "off"\n  }\n}\n'})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ignore",children:"docs/**\ndist/**\nconfig/**\nscripts/**\n"})})]}),"\n",(0,t.jsxs)(n.admonition,{title:"Prettier Configuration",type:"info",children:[(0,t.jsxs)(n.p,{children:["Linters usually contain not only code quality rules, but also stylistic rules. Most stylistic rules are unnecessary\nwhen using Prettier, but worse - they might conflict with Prettier! Use Prettier for code formatting concerns, and\nlinters for code-quality concerns, as outlined in\n",(0,t.jsx)(n.a,{href:"https://qubitpi.github.io/prettier/docs/en/comparison",children:"Prettier vs. Linters"}),"."]}),(0,t.jsx)(n.p,{children:"Luckily it's easy to turn off rules that conflict or are unnecessary with Prettier, by using these pre-made configs:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/prettier/eslint-config-prettier",children:"eslint-config-prettier"})}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add --dev eslint-config-prettier\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title=".prettierrc.json"',children:'{\n  "tabWidth": 2,\n  "useTabs": false,\n  "printWidth": 120\n}\n'})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ignore",metastring:".prettierignore",children:"*.md\nbuild\ncoverage\nnode_modules\ndocs\n"})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"---\nname: My CI/CD\n\nenv:\n  NODE_VERSION: 16\n\njobs:\n  code-style:\n    name: Code Style Check\n    runs-on: ubuntu-latest\n    steps:\n      - uses: QubitPi/hashicorp-aws/auxiliary/github/actions/ui-code-style@master\n        with:\n          node-version: ${{ env.NODE_VERSION }}\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"We can fix it by formatting all files at the root of project with:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn prettier . --write\n"})})]}),"\n",(0,t.jsx)(n.h4,{id:"unit-tests",children:"Unit Tests"}),"\n",(0,t.jsxs)(n.p,{children:["Our ",(0,t.jsx)(n.strong,{children:"package.json"})," should have an entry that defines the command ",(0,t.jsx)(n.code,{children:"yarn test"}),", for example, when our unit tests is\nwritten with ",(0,t.jsx)(n.a,{href:"https://qubitpi.github.io/jest/",children:"Jest"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "test": "jest"\n  }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"---\nname: My CI/CD\n\nenv:\n  NODE_VERSION: 16\n\njobs:\n  unit-tests:\n    name: Unit Tests\n    needs: [yml-md-style, code-style]\n    runs-on: ubuntu-latest\n    steps:\n      - uses: QubitPi/hashicorp-aws/auxiliary/github/actions/ui-unit-test@master\n        with:\n          node-version: ${{ env.NODE_VERSION }}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"cypress-e2e-tests",children:"Cypress E2E Tests"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Cypress E2E Tests"})," offers developers Actions that provide an easy way to automate, customize, and execute\n",(0,t.jsx)(n.strong,{children:"parallel"})," end-to-end tests within a GitHub project.  The action provides"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["dependency installation via ",(0,t.jsx)(n.strong,{children:"yarn"}),","]}),"\n",(0,t.jsx)(n.li,{children:"scanning of test specs,"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"running each spec in parallel"}),", and"]}),"\n",(0,t.jsx)(n.li,{children:"upload test screenshots and video on test failure."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The example below is a very simple setup:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Put all ",(0,t.jsx)(n.strong,{children:".spec.cy.ts"}),' test files under "cypress/e2e" directory']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Have a file at the root of project with the name ",(0,t.jsx)(n.strong,{children:".env.test"}),', which will contain all the environment variables used\nduring the test. The action will rename the ".env.test" name to the regular ',(0,t.jsx)(n.em,{children:".env"})," file"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Place a ",(0,t.jsx)(n.strong,{children:"test-setup.sh"})," file under ",(0,t.jsx)(n.em,{children:".github/test-setup.sh"})," directory for any pre-test setup. For example, to start\na ",(0,t.jsx)(n.a,{href:"https://github.com/typicode/lowdb",children:"lowdb"})," server and\n",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/wait-on",children:"run e2e only after the server starts"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\n\ncd packages/lowdb\nyarn install\nyarn start ../../.github/db.json &\nyarn wait-on-server\n"})}),"\n",(0,t.jsx)(n.p,{children:"Don't forget to make the script executable by running"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"chmod u+x .github/test-setup.sh\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If no pre-test setup is needed, please leave this file with only 1 line: ",(0,t.jsx)(n.code,{children:"#!/bin/bash"}),", i.e. no-ops"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use Cypress E2E Tests workflow:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'---\nname: My GitHub Workflow\n\n"on":\n   pull_request:\n   push:\n      branches:\n         - master\n\njobs:\n  list-e2e-specs:\n    runs-on: ubuntu-latest\n    outputs:\n      paths: ${{ steps.list-e2e-specs.outputs.paths }}\n    steps:\n      - name: List Files\n        id: list-e2e-specs\n        uses: mirko-felice/list-files-action@v3.0.5\n        with:\n          repo: ${{ github.repository }}\n          ref: ${{ github.ref }}\n          path: "cypress/e2e"\n          ext: ".ts"\n\n  e2e-tests:\n    name: E2E Tests\n    needs: list-e2e-specs\n    runs-on: ubuntu-latest\n    strategy:\n      fail-fast: false\n      matrix:\n        node_version: [16]\n        start_strategy: ["yarn-start", "serve"]\n        test_spec: ${{ fromJson(needs.list-e2e-specs.outputs.paths) }}\n    steps:\n      - uses: QubitPi/hashicorp-aws/auxiliary/github/actions/cypress-e2e@master\n        with:\n          node-version: ${{ env.NODE_VERSION }}\n          start-strategy: ${{ matrix.start_strategy }}\n          spec-relative-path: ${{ matrix.test_spec }}\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"release-to-npm",children:"Release to NPM"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:'title=".github/upversion.py"',children:"#!/usr/bin/python\nimport os\n\nsplit_tag = (os.environ['LAST_TAG'].split('-')[0]).split(\".\")\nsplit_tag[-1] = str(int(split_tag[-1]) + 1)\nprint(\".\".join(split_tag))\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title=".github/tag-for-release.bash"',children:'#!/bin/bash\n\n# Pick up the tags from the adjusted remote\ngit fetch --tags\n\necho $(git branch -v)\n\n# Get the last tag on this branch\nLAST_TAG=$(git describe --tags)\necho "INFO Last tag: $LAST_TAG"\n\n# Build the new tag to push\nNEW_TAG=$(LAST_TAG=${LAST_TAG} python .github/upversion.py)\necho "INFO Creating tag: $NEW_TAG"\ngit tag $NEW_TAG -a -m "Autogenerated version bump tag"\n\n# Push the new tag\necho "INFO Pushing tag: $NEW_TAG"\ngit push origin $NEW_TAG\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"---\nname: My CI/CD\n\nenv:\n  USER: QubitPi\n  EMAIL: jack20220723@gmail.com\n  NODE_VERSION: 16\n\njobs:\n  unit-tests:\n    name: Unit Tests\n    runs-on: ubuntu-latest\n    steps:\n      - uses: QubitPi/hashicorp-aws/auxiliary/github/actions/npm-release@master\n        with:\n          node-version: ${{ env.NODE_VERSION }}\n          user: ${{ env.USER }}\n          email: ${{ env.EMAIL }}\n          npm-token: ${{ secrets.NPM_TOKEN }}\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"Please make sure to disable 2F authentication before running the CI/CD above so that release can be pushed to NPM from\nwithin GitHub Action without auth errors"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Error loading disable-2fa.png",src:s(842).Z+"",width:"2560",height:"961"})})]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},842:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/disable-2fa-98f1c1067e44bd5bcf4f7fe9be4140ec.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var t=s(7294);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);
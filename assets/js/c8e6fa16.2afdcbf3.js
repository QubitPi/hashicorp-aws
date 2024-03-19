"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[6117],{7276:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var a=n(4848),s=n(8453);const t={sidebar_position:1,title:"General Deployment",description:"Configuring logging & audit"},r="Deploying Kong API Gateway",o={id:"kong-api-gateway/index",title:"General Deployment",description:"Configuring logging & audit",source:"@site/docs/kong-api-gateway/index.md",sourceDirName:"kong-api-gateway",slug:"/kong-api-gateway/",permalink:"/hashicorp-aws/docs/kong-api-gateway/",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/master/docs/docs/kong-api-gateway/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"General Deployment",description:"Configuring logging & audit"},sidebar:"tutorialSidebar",previous:{title:"Kong API Gateway",permalink:"/hashicorp-aws/docs/category/kong-api-gateway"},next:{title:"Deployment via Screwdriver CD",permalink:"/hashicorp-aws/docs/kong-api-gateway/screwdriver-cd-deployment"}},l={},c=[{value:"General Deployments",id:"general-deployments",level:2},{value:"Defining Packer Variables",id:"defining-packer-variables",level:3},{value:"Defining Terraform Variables",id:"defining-terraform-variables",level:3},{value:"Building AMI Image",id:"building-ami-image",level:3},{value:"Deploying to EC2",id:"deploying-to-ec2",level:3},{value:"Deployment via Screwdriver CD",id:"deployment-via-screwdriver-cd",level:2},{value:"Deployment via HACP",id:"deployment-via-hacp",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{id:"deploying-kong-api-gateway",children:"Deploying Kong API Gateway"}),"\n",(0,a.jsxs)(i.p,{children:["hashicorp-aws deploys ",(0,a.jsx)(i.a,{href:"https://qubitpi.github.io/docs.konghq.com/gateway/latest/",children:"Kong API Gateway"})," in the following way:"]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Deploys ",(0,a.jsx)(i.a,{href:"https://qubitpi.github.io/docs.konghq.com/gateway/latest/",children:"Kong API Gateway"})," in ",(0,a.jsx)(i.strong,{children:"HTTP"})," mode"]}),"\n",(0,a.jsxs)(i.li,{children:["Deploys a reverse proxy Nginx in front of the ",(0,a.jsx)(i.a,{href:"https://qubitpi.github.io/docs.konghq.com/gateway/latest/",children:"Kong API Gateway"})," in the same EC2 to redirect all HTTPS request to\ngateway's\n",(0,a.jsx)(i.a,{href:"https://qubitpi.github.io/docs.konghq.com/gateway/latest/production/networking/default-ports/",children:"corresponding"})," HTTP\nports"]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"The diagrams below illustrates the resulting deployment"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"Error loading kong-deployment-diagram.png",src:n(2939).A+"",width:"2778",height:"728"})}),"\n",(0,a.jsx)(i.h2,{id:"general-deployments",children:"General Deployments"}),"\n",(0,a.jsx)(i.admonition,{type:"info",children:(0,a.jsxs)(i.p,{children:["Please complete the ",(0,a.jsx)(i.a,{href:"setup#setup",children:"general setup"})," before proceeding."]})}),"\n",(0,a.jsxs)(i.admonition,{title:"Supporting HTTPS Protocol",type:"tip",children:[(0,a.jsxs)(i.p,{children:["hashicorp-aws uses a ",(0,a.jsx)(i.a,{href:"https://github.com/QubitPi/docker-kong",children:"customized fork of docker-kong"})," to\n",(0,a.jsx)(i.a,{href:"https://github.com/QubitPi/docker-kong/pull/1",children:"fully separate the app and SSL"}),", and, therefore, the Nginx config needs\nmultiple ",(0,a.jsx)(i.a,{href:"https://www.nginx.com/resources/wiki/start/topics/examples/server_blocks/",children:"servers"}),"\nto ensure all HTTPS ports are mapped to their corresponding HTTP ports as shown in the config snippet below:"]}),(0,a.jsxs)(i.admonition,{type:"note",children:[(0,a.jsxs)(i.p,{children:["All relevant HTTP and HTTPS ports are listed in\n",(0,a.jsx)(i.a,{href:"https://qubitpi.github.io/docs.konghq.com/gateway/latest/production/networking/default-ports/",children:"Kong's documentation here"}),".\nIn general, our Nginx should **listen on an HTTPS port and ",(0,a.jsx)(i.code,{children:"proxy_pass"})," to an HTTP port. For example, ports 8443 and\n8444 are ",(0,a.jsx)(i.code,{children:"proxy_pass"}),"ed to 8000 and 8001, respectively, both of which are listed in the doc."]}),(0,a.jsx)(i.p,{children:"One special case is HTTP port 8000, which is the redirect port. hashicorp-aws maps the standard SSL 443 port to 8000 so\nthat any downstream (such as UI web app) simply needs to hit the domain without specifying port number and have its\nrequest be reidrected to upstream services (such as database webservice)"}),(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"Error loading kong-ports-diagram.png",src:n(4516).A+"",width:"1662",height:"1064"})})]})]}),"\n",(0,a.jsx)(i.h3,{id:"defining-packer-variables",children:"Defining Packer Variables"}),"\n",(0,a.jsxs)(i.p,{children:["Create a ",(0,a.jsx)(i.a,{href:"https://qubitpi.github.io/hashicorp-packer/packer/guides/hcl/variables#from-a-file",children:"HashiCorp Packer variable values file"})," named ",(0,a.jsx)(i.strong,{children:"aws-kong.auto.pkrvars.hcl"})," under\n",(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/hashicorp/kong-api-gateway/images",children:"hashicorp-aws/hashicorp/kong-api-gateway/images"})})," directory with the following contents:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-hcl",metastring:'title="hashicorp-aws/hashicorp/kong-api-gateway/images/aws-kong.auto.pkrvars.hcl"',children:'ami_region              = "us-east-1"\nami_name                = "my-kong-ami"\ninstance_type           = "t2.small"\nssl_cert_source         = "/path/to/ssl.crt"\nssl_cert_key_source     = "/path/to/ssl.key"\nkong_api_gateway_domain = "gateway.mycompany.com"\n'})}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"ami_region"})," is the ",(0,a.jsx)(i.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Availability",children:"image region"})," where Kong API Gateway ",(0,a.jsx)(i.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html",children:"AMI"})," will be published to. The\npublished image will be ",(0,a.jsx)(i.em,{children:"private"})]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"ami_name"})," is the published AMI name; it can be arbitrary"]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"instance_type"})," is the ",(0,a.jsx)(i.a,{href:"https://aws.amazon.com/ec2/instance-types/",children:"AWS EC2 instance type"})," running this image"]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"ssl_cert_source"})," is the absolute path or the path relative to ",(0,a.jsx)(i.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/hashicorp/kong-api-gateway/images",children:"hashicorp-aws/hashicorp/kong-api-gateway/images"})," of\nthe ",(0,a.jsx)(i.a,{href:"setup#optional-setup-ssl",children:"SSL certificate file"})," for the Kong API Gateway domain"]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"ssl_cert_key_source"})," is the absolute path or the path relative to ",(0,a.jsx)(i.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/hashicorp/kong-api-gateway/images",children:"hashicorp-aws/hashicorp/kong-api-gateway/images"})," of the\n",(0,a.jsx)(i.a,{href:"setup#optional-setup-ssl",children:"SSL certificate key file"})," for the Kong API Gateway domain"]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"kong_api_gateway_domain"})," is the SSL-enabled domain that will serve the\n",(0,a.jsx)(i.a,{href:"https://qubitpi.github.io/docs.konghq.com/gateway/latest/production/networking/default-ports/",children:"various ports of Kong gateway"})]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"defining-terraform-variables",children:"Defining Terraform Variables"}),"\n",(0,a.jsxs)(i.p,{children:["Create a ",(0,a.jsx)(i.a,{href:"https://qubitpi.github.io/hashicorp-terraform/terraform/language/values/variables#variable-definitions-tfvars-files",children:"HashiCorp Terraform variable values file"})," named ",(0,a.jsx)(i.strong,{children:"aws-kong.auto.tfvars"})," under\n",(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/hashicorp/kong-api-gateway/instances",children:"hashicorp-aws/hashicorp/kong-api-gateway/instances"})})," directory with the following contents:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-hcl",metastring:'title="hashicorp-aws/hashicorp/kong-api-gateway/instances/aws-kong.auto.tfvars"',children:'aws_deploy_region = "us-east-1"\nami_name          = "my-kong-ami"\ninstance_type     = "t2.small"\ninstance_name = "My Kong API Gateway"\nsecurity_groups   = ["My Kong API Gateway Security Group"]\ngateway_domain    = "gateway.mycompany.com"\nroute_53_zone_id  = "MBS8YLKZML18VV2E8M8OK"\n'})}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"aws_deploy_region"})," is the ",(0,a.jsx)(i.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Availability",children:"EC2 runtime region"})," where Kong will be deployed into"]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"ami_name"})," is the name of the published AMI; ",(0,a.jsxs)(i.strong,{children:["it must be the same as the ",(0,a.jsx)(i.code,{children:"ami_name"})," in\n",(0,a.jsx)(i.a,{href:"#defining-packer-variables",children:"Packer variable file"})]})]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"instance_type"})," is the chosen ",(0,a.jsx)(i.a,{href:"https://aws.amazon.com/ec2/instance-types/",children:"AWS EC2 instance type"})," at runtime"]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"instance_name"})," is the deployed EC2 name as appeared in the instance list of AWS console; it can be arbitrary"]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"security_groups"})," is the list of ",(0,a.jsx)(i.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html",children:"AWS Security Group"})," ",(0,a.jsx)(i.em,{children:"names"})," to associate with (yes, not ID, but name...)"]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"gateway_domain"})," is the SSL-enabled domain that will serve ",(0,a.jsx)(i.a,{href:"https://qubitpi.github.io/docs.konghq.com/gateway/latest/kong-manager/",children:"Kong manager UI"})]}),"\n",(0,a.jsxs)(i.admonition,{type:"warning",children:[(0,a.jsxs)(i.p,{children:["hashicorp-aws will bind a ",(0,a.jsx)(i.em,{children:"private"})," IP address to this domain for the following reasons:"]}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"https://serverfault.com/a/967483",children:"AWS security groups works for private IP only for DNS resolving"}),". Services\ninteracting with Kong gateway can use this domain."]}),"\n",(0,a.jsxs)(i.li,{children:["In the case of internal access, for example administrators visiting Kong Manager for config purposes, people can\nstill use ",(0,a.jsx)(i.code,{children:"https://public-dns:port"})]}),"\n"]})]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"route_53_zone_id"})," is the AWS Route 53 hosted Zone ID that hosts the domain ",(0,a.jsx)(i.code,{children:"gateway.mycompany.com"})]}),"\n",(0,a.jsxs)(i.admonition,{type:"tip",children:[(0,a.jsx)(i.p,{children:"To find the zone ID in AWS Route 53, we can:"}),(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsx)(i.li,{children:"Sign in to the AWS Management Console"}),"\n",(0,a.jsxs)(i.li,{children:["Open the Route 53 console at ",(0,a.jsx)(i.a,{href:"https://console.aws.amazon.com/route53/",children:"https://console.aws.amazon.com/route53/"})]}),"\n",(0,a.jsx)(i.li,{children:"Select Hosted zones in the navigation pane"}),"\n",(0,a.jsx)(i.li,{children:"Find the requested ID in the top level Hosted Zones summary in the Route 53 section"}),"\n"]})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"building-ami-image",children:"Building AMI Image"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:'cd hashicorp-aws/hashicorp/kong-api-gateway/images\npacker init .\npacker validate -var "skip_create_ami=true" .\npacker build -var "skip_create_ami=false" .\n'})}),"\n",(0,a.jsx)(i.h3,{id:"deploying-to-ec2",children:"Deploying to EC2"}),"\n",(0,a.jsx)(i.admonition,{type:"caution",children:(0,a.jsxs)(i.p,{children:["Depending on the ",(0,a.jsx)(i.a,{href:"#defining-packer-variables",children:"AMI"})," and ",(0,a.jsx)(i.a,{href:"#defining-terraform-variables",children:"EC2"})," configs, ",(0,a.jsx)(i.strong,{children:"please be aware\nAWS credit charges shall incur after the following commands execute"})]})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"cd ../instances\nterraform init\nterraform validate\nterraform apply -auto-approve\n"})}),"\n",(0,a.jsx)(i.h2,{id:"deployment-via-screwdriver-cd",children:"Deployment via Screwdriver CD"}),"\n",(0,a.jsxs)(i.p,{children:["hashicorp-aws also support deployment using ",(0,a.jsx)(i.a,{href:"screwdriver-cd-deployment",children:"Screwdriver CD"}),". Please check it out."]}),"\n",(0,a.jsx)("img",{src:"https://github.com/QubitPi/QubitPi/blob/master/img/8%E5%A5%BD.gif?raw=true",height:"40px"}),"\n",(0,a.jsx)(i.h2,{id:"deployment-via-hacp",children:"Deployment via HACP"}),"\n",(0,a.jsx)(i.admonition,{type:"tip",children:(0,a.jsx)(i.p,{children:"Please try our HACP platform to deploy a Kong instance. It gives us one-click experience that helps us stand up an API\ngateway in a minute."})})]})}function d(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},2939:(e,i,n)=>{n.d(i,{A:()=>a});const a=n.p+"assets/images/kong-deployment-diagram-0e603dd1e4fb96d8c09f228e1ff31894.png"},4516:(e,i,n)=>{n.d(i,{A:()=>a});const a=n.p+"assets/images/kong-ports-diagram-94dd812152799d6acdc342b76be0588a.png"},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>o});var a=n(6540);const s={},t=a.createContext(s);function r(e){const i=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(t.Provider,{value:i},e.children)}}}]);
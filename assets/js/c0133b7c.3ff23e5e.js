"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[2519],{1511:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>C,contentTitle:()=>k,default:()=>E,frontMatter:()=>T,metadata:()=>I,toc:()=>P});var n=s(4848),a=s(8453),t=s(6540),r=s(53),l=s(3104),o=s(6347),c=s(205),h=s(7485),d=s(1682),u=s(9466);function p(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:i}=e;return!!i&&"object"==typeof i&&"value"in i}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:i,children:s}=e;return(0,t.useMemo)((()=>{const e=i??function(e){return p(e).map((e=>{let{props:{value:i,label:s,attributes:n,default:a}}=e;return{value:i,label:s,attributes:n,default:a}}))}(s);return function(e){const i=(0,d.X)(e,((e,i)=>e.value===i.value));if(i.length>0)throw new Error(`Docusaurus error: Duplicate values "${i.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[i,s])}function b(e){let{value:i,tabValues:s}=e;return s.some((e=>e.value===i))}function g(e){let{queryString:i=!1,groupId:s}=e;const n=(0,o.W6)(),a=function(e){let{queryString:i=!1,groupId:s}=e;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:i,groupId:s});return[(0,h.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const i=new URLSearchParams(n.location.search);i.set(a,e),n.replace({...n.location,search:i.toString()})}),[a,n])]}function x(e){const{defaultValue:i,queryString:s=!1,groupId:n}=e,a=m(e),[r,l]=(0,t.useState)((()=>function(e){let{defaultValue:i,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!b({value:i,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${i}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return i}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:i,tabValues:a}))),[o,h]=g({queryString:s,groupId:n}),[d,p]=function(e){let{groupId:i}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(i),[n,a]=(0,u.Dv)(s);return[n,(0,t.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:n}),x=(()=>{const e=o??d;return b({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{x&&l(x)}),[x]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),p(e)}),[h,p,a]),tabValues:a}}var v=s(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function j(e){let{className:i,block:s,selectedValue:a,selectValue:t,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,l.a_)(),d=e=>{const i=e.currentTarget,s=c.indexOf(i),n=o[s].value;n!==a&&(h(i),t(n))},u=e=>{let i=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;i=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;i=c[s]??c[c.length-1];break}}i?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},i),children:o.map((e=>{let{value:i,label:s,attributes:t}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:a===i?0:-1,"aria-selected":a===i,ref:e=>c.push(e),onKeyDown:u,onClick:d,...t,className:(0,r.A)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":a===i}),children:s??i},i)}))})}function w(e){let{lazy:i,children:s,selectedValue:a}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(i){const e=r.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:r.map(((e,i)=>(0,t.cloneElement)(e,{key:i,hidden:e.props.value!==a})))})}function y(e){const i=x(e);return(0,n.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,n.jsx)(j,{...e,...i}),(0,n.jsx)(w,{...e,...i})]})}function _(e){const i=(0,v.A)();return(0,n.jsx)(y,{...e,children:p(e.children)},String(i))}const S={tabItem:"tabItem_Ymn6"};function A(e){let{children:i,hidden:s,className:a}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.A)(S.tabItem,a),hidden:s,children:i})}const T={sidebar_position:6,title:"Jersey-Jetty Based Webservice"},k="Deploying Jersey-Jetty Based Webservice",I={id:"webservice",title:"Jersey-Jetty Based Webservice",description:"[//]: # (Copyright Jiaqi Liu)",source:"@site/docs/webservice.mdx",sourceDirName:".",slug:"/webservice",permalink:"/hashicorp-aws/docs/webservice",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/master/docs/docs/webservice.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Jersey-Jetty Based Webservice"},sidebar:"tutorialSidebar",previous:{title:"Deployment via Screwdriver CD",permalink:"/hashicorp-aws/docs/kong-api-gateway/screwdriver-cd-deployment"},next:{title:"ELK",permalink:"/hashicorp-aws/docs/category/elk"}},C={},P=[{value:"General Deployments",id:"general-deployments",level:2},{value:"Defining Packer Variables",id:"defining-packer-variables",level:3},{value:"Defining Terraform Variables",id:"defining-terraform-variables",level:3},{value:"Building AMI Image",id:"building-ami-image",level:3},{value:"Deploying to EC2",id:"deploying-to-ec2",level:3},{value:"Deployment via Screwdriver CD",id:"deployment-via-screwdriver-cd",level:2},{value:"Deployment via GitHub Actions",id:"deployment-via-github-actions",level:2},{value:"Deployment via HACP",id:"deployment-via-hacp",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"AWS",id:"aws",level:3},{value:"The Webservice was Running Properly Right After Deployment, but NOT After a While with &quot;503 Service Unavailable&quot;",id:"the-webservice-was-running-properly-right-after-deployment-but-not-after-a-while-with-503-service-unavailable",level:4}];function D(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"deploying-jersey-jetty-based-webservice",children:"Deploying Jersey-Jetty Based Webservice"}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Yes, we DO NOT support Spring, never ever"}),"\n",(0,n.jsxs)(i.li,{children:["EBS volumes during build time will ",(0,n.jsx)(i.a,{href:"https://qubitpi.github.io/hashicorp-packer/packer/integrations/hashicorp/amazon/latest/components/builder/ebs#:~:text=Optional%3A-,delete_on_termination,-(bool)%20%2D%20Indicates%20whether",children:"automatically be removed"})]}),"\n"]})}),"\n",(0,n.jsx)(i.p,{children:"Immutable Webservice by hashicorp-aws supports 2 deployment modes:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"SSL/HTTPS"}),"\n",(0,n.jsx)(i.li,{children:"non-SSL/HTTPS"}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["The first mode is very suitable for MVP such as a web app backed by a single webservice. The second mode is designed for\n",(0,n.jsx)(i.a,{href:"https://dev.to/behalf/authentication-authorization-in-microservices-architecture-part-i-2cn0#global-authentication-api-gateway-and-authorization-per-service",children:"microservices architecture where authentication is delegated to an API gateway"})]}),"\n",(0,n.jsx)(i.h2,{id:"general-deployments",children:"General Deployments"}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["Please complete the ",(0,n.jsx)(i.a,{href:"setup#setup",children:"general setup"})," before proceeding. If you are deploying in ",(0,n.jsx)(i.em,{children:"non-SSL/HTTPS mode"}),", the\n",(0,n.jsx)(i.a,{href:"setup#optional-setup-ssl",children:"SSL section"})," can be skipped."]})}),"\n",(0,n.jsx)(i.admonition,{title:"Nginx Config in SSL/HTTPS mode",type:"tip",children:(0,n.jsxs)(i.p,{children:["We offer a ",(0,n.jsx)(i.a,{href:"setup#optional-setup-ssl",children:"Nginx config file"})," template.\n",(0,n.jsx)(i.a,{href:"https://github.com/QubitPi/hashicorp-aws/blob/master/hashicorp/webservice/images/ssl/nginx-ssl.conf",children:"This template"}),"\nwill be used by hashicorp-aws by default"]})}),"\n",(0,n.jsx)(i.h3,{id:"defining-packer-variables",children:"Defining Packer Variables"}),"\n",(0,n.jsxs)(i.p,{children:["Create a ",(0,n.jsx)(i.a,{href:"https://qubitpi.github.io/hashicorp-packer/packer/guides/hcl/variables#from-a-file",children:"HashiCorp Packer variable values file"})," named ",(0,n.jsx)(i.strong,{children:"aws-ws.auto.pkrvars.hcl"})," under one of the subdirectory of\n",(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/hashicorp/webservice/images",children:"hashicorp-aws/hashicorp/webservice/images"})}),", depending on the deployment mode, with the following contents:"]}),"\n",(0,n.jsxs)(_,{children:[(0,n.jsxs)(A,{value:"non-ssl",label:"non-SSL/HTTPS",default:!0,children:[(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-hcl",metastring:"title=hashicorp-aws/hashicorp/webservice/images/basic/aws-aws.auto.pkrvars.hcl",children:'ami_region                   = "my-aws-region"\nami_name                     = "my-webservice"\ninstance_type                = "<one of t2.micro/t2.small/t2.medium/t2.large/t2.xlarge/t2.2xlarge>"\nws_war_path                  = "my-webservice-1.0-SNAPSHOT.war"\nws_filebeat_config_file_path = "filebeat.yml"\n'})}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"ami_region"})," is the ",(0,n.jsx)(i.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Availability",children:"region"})," where webservice ",(0,n.jsx)(i.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html",children:"AMI"})," will be published to. The published\nimage will be ",(0,n.jsx)(i.em,{children:"private"})]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"ami_name"})," is the published AMI name; it can be arbitrary"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"instance_type"})," is the ",(0,n.jsx)(i.a,{href:"https://aws.amazon.com/ec2/instance-types/",children:"EC2 instance type"})," to use while building the AMI, such as t2.small."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"ws_war_path"})," is the absolute path or the path relative to ",(0,n.jsx)(i.code,{children:"hashicorp-aws/hashicorp/webservice/images/basic"})," of\nthe webservice WAR file we are going to deploy"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"ws_filebeat_config_file_path"})," is the absolute path or the path relative to\n",(0,n.jsx)(i.code,{children:"hashicorp-aws/hashicorp/webservice/images/basic"})," of the filebeat config file if the webservice is sending logs\nto ELK"]}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsx)(i.p,{children:"It is very important to connect webservice to an external logging & auditing service like ELK, because once\nwebservice is deployed as an immutable infrastructure, it is completely sealed in a sense that no one can SSH into\nit. This means logs or other metrics are not available unless they are send to an external logging & auditing\nservice such as ELK. Our HACP offers out-of-the box deployment of ELK and allow the webservice to automatically\nconnect to it to send logs and metrics, which gives us a lot better experience on working with webservice logging\n& auditing."})}),"\n"]}),"\n"]})]}),(0,n.jsxs)(A,{value:"ssl",label:"SSL/HTTPS",children:[(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-hcl",metastring:"title=hashicorp-aws/hashicorp/webservice/images/ssl/aws-aws.auto.pkrvars.hcl",children:'ami_region                    = "my-aws-region"\nami_name                      = "my-webservice"\ninstance_type                 = "<one of t2.micro/t2.small/t2.medium/t2.large/t2.xlarge/t2.2xlarge>"\nws_war_path                   = "my-webservice-1.0-SNAPSHOT.war"\nws_filebeat_config_file_path  = "filebeat.yml"\naws_ws_ssl_cert_file_path     = "server.crt"\naws_ws_ssl_cert_key_file_path = "server.key"\n'})}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"ami_region"})," is the ",(0,n.jsx)(i.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Availability",children:"region"})," where webservice ",(0,n.jsx)(i.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html",children:"AMI"})," will be published to. The\npublished image will be ",(0,n.jsx)(i.em,{children:"private"})]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"ami_name"})," is the published ",(0,n.jsx)(i.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html",children:"AMI"})," name; it can be arbitrary"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"instance_type"})," is the ",(0,n.jsx)(i.a,{href:"https://aws.amazon.com/ec2/instance-types/",children:"EC2 instance type"})," to use while building the AMI, such as t2.small."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"ws_war_path"})," is the absolute path or the path relative to ",(0,n.jsx)(i.code,{children:"hashicorp-aws/hashicorp/webservice/images/basic"})," of\nthe webservice WAR file we are going to deploy"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"ws_filebeat_config_file_path"})," is the absolute path or the path relative to\n",(0,n.jsx)(i.code,{children:"hashicorp-aws/hashicorp/webservice/images/ssl"})," of the filebeat config file if the webservice is sending logs\nto ELK"]}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsx)(i.p,{children:"It is very important to connect webservice to an external logging & auditing service like ELK, because once\nwebservice is deployed as an immutable infrastructure, it is completely sealed in a sense that no one can SSH into\nit. This means logs or other metrics are not available unless they are send to an external logging & auditing\nservice such as ELK. Our HACP offers out-of-the box deployment of ELK and allow the webservice to automatically\nconnect to it to send logs and metrics, which gives us a lot better experience on working with webservice logging\n& auditing."})}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"aws_ws_ssl_cert_file_path"})," is the absolute path or the path relative to ",(0,n.jsx)(i.code,{children:"hashicorp-aws/hashicorp/aws/images/ssl"}),"\nof the ",(0,n.jsx)(i.a,{href:"setup#optional-setup-ssl",children:"SSL certificate file"})," for the webservice API domain"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"aws_ws_ssl_cert_key_file_path"}),"  is the absolute path or the path relative to\n",(0,n.jsx)(i.code,{children:"hashicorp-aws/hashicorp/webservice/images/ssl"})," of the ",(0,n.jsx)(i.a,{href:"setup#optional-setup-ssl",children:"SSL certificate key file"})," for the webservice\nAPI domain"]}),"\n"]}),"\n"]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"defining-terraform-variables",children:"Defining Terraform Variables"}),"\n",(0,n.jsxs)(i.p,{children:["Create a ",(0,n.jsx)(i.a,{href:"https://qubitpi.github.io/hashicorp-terraform/terraform/language/values/variables#variable-definitions-tfvars-files",children:"HashiCorp Terraform variable values file"})," named ",(0,n.jsx)(i.strong,{children:"aws-ws.auto.tfvars"})," under one of the subdirectory of\n",(0,n.jsx)(i.strong,{children:"[hashicorp-aws/hashicorp/webservice/instances]"}),", depending on the deployment mode, with the following contents:"]}),"\n",(0,n.jsxs)(_,{children:[(0,n.jsxs)(A,{value:"non-ssl",label:"non-SSL/HTTPS",default:!0,children:[(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-hcl",metastring:"title=hashicorp-aws/hashicorp/webservice/instances/basic/aws-ws.auto.tfvars",children:'aws_deploy_region = "my-aws-region"\nami_name          = "my-webservice"\ninstance_type     = "<one of t2.micro/t2.small/t2.medium/t2.large/t2.xlarge/t2.2xlarge>"\nec2_instance_name = "My Webservice"\nsecurity_groups   = ["My Webservice"]\n'})}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"aws_deploy_region"})," is the ",(0,n.jsx)(i.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Availability",children:"EC2 runtime region"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"ami_name"})," is the name of the published AMI; ",(0,n.jsxs)(i.strong,{children:["it must be the same as the ",(0,n.jsx)(i.code,{children:"ami_name"})," in\n",(0,n.jsx)(i.a,{href:"#defining-packer-variables",children:"Packer variable file"})]})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"instance_type"})," is the chosen ",(0,n.jsx)(i.a,{href:"https://aws.amazon.com/ec2/instance-types/",children:"AWS EC2 instance type"})," at runtime"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"ec2_instance_name"})," is the deployed EC2 name as appeared in the instance list of AWS console; it can be arbitrary"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"security_groups"})," is the list of ",(0,n.jsx)(i.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html",children:"AWS Security Group"})," ",(0,n.jsx)(i.em,{children:"names"})," to associate with (yes, not ID, but name...)"]}),"\n"]})]}),(0,n.jsxs)(A,{value:"ssl",label:"SSL/HTTPS",children:[(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-hcl",metastring:"title=hashicorp-aws/hashicorp/webservice/instances/ssl/aws-ws.auto.tfvars",children:'aws_deploy_region = "my-aws-region"\nami_name          = "my-webservice"\ninstance_type     = "<one of t2.micro/t2.small/t2.medium/t2.large/t2.xlarge/t2.2xlarge>"\nec2_instance_name = "My Webservice"\nsecurity_groups   = ["My Webservice"]\nroute_53_zone_id  = "9DQXLTNSN7ZX9P8V2KZII"\nws_domain         = "mywebservice.mycompany.com"\n'})}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"aws_deploy_region"})," is the ",(0,n.jsx)(i.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Availability",children:"EC2 runtime region"})]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"ami_name"})," is the name of the published AMI; ",(0,n.jsxs)(i.strong,{children:["it must be the same as the ",(0,n.jsx)(i.code,{children:"ami_name"})," in\n",(0,n.jsx)(i.a,{href:"#defining-packer-variables",children:"Packer variable file"})]})]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"instance_type"})," is the chosen ",(0,n.jsx)(i.a,{href:"https://aws.amazon.com/ec2/instance-types/",children:"AWS EC2 instance type"})," at runtime"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"ec2_instance_name"})," is the deployed EC2 name as appeared in the instance list of AWS console; it can be arbitrary"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"security_groups"})," is the list of ",(0,n.jsx)(i.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html",children:"AWS Security Group"})," ",(0,n.jsx)(i.em,{children:"names"})," to associate with (yes, not ID, but name...)"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"ws_domain"})," is the SSL-enabled domain that will serve webservice API URL"]}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsxs)(i.p,{children:["Although the ",(0,n.jsx)(i.code,{children:"ws_domain"})," is a public identity, hashicorp-aws will bind a ",(0,n.jsx)(i.strong,{children:"private IP"})," address to this domain,\nbecause webservice tend to be deployed in a virtual private network and AWS also requires\n",(0,n.jsx)(i.a,{href:"https://serverfault.com/a/967483",children:"EC2 instances of different Security Groups to communicate through private IP"})]})}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"route_53_zone_id"})," is the AWS Route 53 hosted Zone ID that hosts the domain ",(0,n.jsx)(i.code,{children:"mywebservice.mycompany.com"})]}),"\n",(0,n.jsxs)(i.admonition,{type:"tip",children:[(0,n.jsx)(i.p,{children:"To find the zone ID in AWS Route 53, we can:"}),(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Sign in to the AWS Management Console"}),"\n",(0,n.jsxs)(i.li,{children:["Open the Route 53 console at ",(0,n.jsx)(i.a,{href:"https://console.aws.amazon.com/route53/",children:"https://console.aws.amazon.com/route53/"})]}),"\n",(0,n.jsx)(i.li,{children:"Select Hosted zones in the navigation pane"}),"\n",(0,n.jsx)(i.li,{children:"Find the requested ID in the top level Hosted Zones summary in the Route 53 section"}),"\n"]})]}),"\n"]}),"\n"]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"building-ami-image",children:"Building AMI Image"}),"\n",(0,n.jsxs)(_,{children:[(0,n.jsx)(A,{value:"non-ssl",label:"non-SSL/HTTPS",default:!0,children:(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-console",children:'cd hashicorp-aws/hashicorp/webservice/images/basic\npacker init .\npacker validate -var "skip_create_ami=true" .\npacker build -var "skip_create_ami=false" .\n'})})}),(0,n.jsx)(A,{value:"ssl",label:"SSL/HTTPS",children:(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-console",children:'cd hashicorp-aws/hashicorp/webservice/images/ssl\npacker init .\npacker validate -var "skip_create_ami=true" .\npacker build -var "skip_create_ami=false" .\n'})})})]}),"\n",(0,n.jsx)(i.h3,{id:"deploying-to-ec2",children:"Deploying to EC2"}),"\n",(0,n.jsx)(i.admonition,{type:"caution",children:(0,n.jsxs)(i.p,{children:["Depending on the ",(0,n.jsx)(i.a,{href:"#defining-packer-variables",children:"AMI"})," and ",(0,n.jsx)(i.a,{href:"#defining-terraform-variables",children:"EC2"})," configs, ",(0,n.jsx)(i.strong,{children:"please be aware\nAWS credit charges shall incur after the following commands execute"})]})}),"\n",(0,n.jsxs)(_,{children:[(0,n.jsx)(A,{value:"non-ssl",label:"non-SSL/HTTPS",default:!0,children:(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-console",children:"cd ../instances/basic\nterraform init\nterraform validate\nterraform apply -auto-approve\n"})})}),(0,n.jsx)(A,{value:"ssl",label:"SSL/HTTPS",children:(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-console",children:"cd ../instances/ssl\nterraform init\nterraform validate\nterraform apply -auto-approve\n"})})})]}),"\n",(0,n.jsx)(i.h2,{id:"deployment-via-screwdriver-cd",children:"Deployment via Screwdriver CD"}),"\n",(0,n.jsxs)(i.p,{children:["hashicorp-aws also support deployment using ",(0,n.jsx)(i.a,{href:"https://qubitpi.github.io/screwdriver-cd-homepage/",children:"Screwdriver CD"})," with this ",(0,n.jsx)(i.a,{href:"https://github.com/QubitPi/jersey-webservice-release-definition-templates",children:"Jersey Webservice release definition templates"})]}),"\n",(0,n.jsx)(i.h2,{id:"deployment-via-github-actions",children:"Deployment via GitHub Actions"}),"\n",(0,n.jsx)(i.h2,{id:"deployment-via-hacp",children:"Deployment via HACP"}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsx)(i.p,{children:"Please try our HACP platform to deploy a Webservice instance. It gives us one-click experience that helps us stand up\na webservice in a minute."})}),"\n",(0,n.jsx)(i.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsx)(i.h3,{id:"aws",children:"AWS"}),"\n",(0,n.jsx)(i.h4,{id:"the-webservice-was-running-properly-right-after-deployment-but-not-after-a-while-with-503-service-unavailable",children:'The Webservice was Running Properly Right After Deployment, but NOT After a While with "503 Service Unavailable"'}),"\n",(0,n.jsxs)(i.p,{children:["This could be the resource starvation on EC2 instance. Please try using a bigger EC2 sizes. For example, bumping\n",(0,n.jsx)(i.em,{children:"t2.micro"})," to ",(0,n.jsx)(i.em,{children:"t2.medium"}),". hashicorp-aws currently supports ",(0,n.jsx)(i.strong,{children:"t2.x"})," sizes, i.e. one of the following sizes can be\nselected:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"t2.micro"}),"\n",(0,n.jsx)(i.li,{children:"t2.small"}),"\n",(0,n.jsx)(i.li,{children:"t2.medium"}),"\n",(0,n.jsx)(i.li,{children:"t2.large"}),"\n",(0,n.jsx)(i.li,{children:"t2.xlarge"}),"\n",(0,n.jsx)(i.li,{children:"t2.2xlarge"}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["To modify the size, set the value of ",(0,n.jsx)(i.code,{children:"instance_type"})," in both ",(0,n.jsx)(i.em,{children:"aws-ws.pkrvars.hcl"})," and ",(0,n.jsx)(i.em,{children:"aws-ws.tfvars"}),". For\nexample:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-hcl",children:'instance_type       = "t2.medium"\n'})})]})}function E(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(D,{...e})}):D(e)}},8453:(e,i,s)=>{s.d(i,{R:()=>r,x:()=>l});var n=s(6540);const a={},t=n.createContext(a);function r(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);
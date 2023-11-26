"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[3621],{479:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=n(5893),r=n(1151);const i={slug:"aws-iam",title:"AWS Identity and Access Management (IAM)",authors:["jiaqi"],tags:["Security"]},a=void 0,o={permalink:"/hashicorp-aws/blog/aws-iam",editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/master/docs/blog/2022-10-09-aws-iam/index.md",source:"@site/blog/2022-10-09-aws-iam/index.md",title:"AWS Identity and Access Management (IAM)",description:"[//]: # (Copyright Jiaqi Liu)",date:"2022-10-09T00:00:00.000Z",formattedDate:"October 9, 2022",tags:[{label:"Security",permalink:"/hashicorp-aws/blog/tags/security"}],readingTime:9.845,hasTruncateMarker:!0,authors:[{name:"Jiaqi Liu",title:"Maintainer of hashicorp-aws",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"aws-iam",title:"AWS Identity and Access Management (IAM)",authors:["jiaqi"],tags:["Security"]},unlisted:!1,prevItem:{title:"AWS Troubleshooting",permalink:"/hashicorp-aws/blog/aws-troubleshooting"},nextItem:{title:"Nexus 3 Repository Manager OSS",permalink:"/hashicorp-aws/blog/nexus"}},c={authorsImageUrls:[void 0]},l=[{value:"Create IAM Admin User and User Group",id:"create-iam-admin-user-and-user-group",level:3},{value:"Identities",id:"identities",level:3},{value:"User Groups",id:"user-groups",level:4},{value:"Access Management",id:"access-management",level:3},{value:"Identity-Based Policies",id:"identity-based-policies",level:4},{value:"Resource-Based Policies",id:"resource-based-policies",level:4}];function d(e){const s={a:"a",blockquote:"blockquote",em:"em",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"IAM provides the infrastructure necessary to control authentication and authorization for a user's account."}),"\n",(0,t.jsx)(s.p,{children:"The IAM infrastructure includes the following elements:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Error loading intro-diagram-policies-800.png",src:n(7459).Z+"",width:"800",height:"709"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"IAM Resources"})," The user, group, role, policy, and identity provider objects that are stored in IAM. As with other\nAWS services, we can add, edit, and remove resources from IAM. A resource is an object that exists within a service.\nExamples include an Amazon EC2 instance, an IAM user, and an Amazon S3 bucket. ",(0,t.jsx)(s.strong,{children:"The service defines a set of actions\nthat can be performed on each resource"}),". If you create a request to perform an unrelated action on a resource, that\nrequest is denied. For example, if you request to delete an IAM role but provide an IAM group resource, the request\nfails."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"IAM Identities"})," The IAM resource objects that are used to identify and group. We can attach a policy to an IAM\nidentity. These include users, groups, and roles."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"IAM Entities"})," The IAM resource objects that AWS uses for authentication. These include IAM users and roles."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Principals"})," A person or application that can make a request for an action or operation on an AWS resource. The\nprincipal is authenticated as the AWS account root user or an IAM entity to make requests to AWS. As a best practice,\ndo not use root user credentials for daily work. Instead, create IAM entities (users and roles). We can also support\nfederated users or programmatic access to allow an application to access our AWS account."]}),"\n",(0,t.jsx)(s.p,{children:"When a principal tries to use the AWS Management Console, the AWS API, or the AWS CLI, that principal sends a request\nto AWS. The request includes the following information"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Actions or operations"})," The actions or operations that the principal wants to perform. This can be an action in\nthe AWS Management Console, or an operation in the AWS CLI or AWS API."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Resources"})," The AWS resource object upon which the actions or operations are performed."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Principal"})," The person or application that used an entity (user or role) to send the request. Information about\nthe principal includes the policies that are associated with the entity that the principal used to sign in."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Environment data"})," Information about the IP address, user agent, SSL enabled status, or the time of day."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Resource data"})," Data related to the resource that is being requested. This can include information such as a\nDynamoDB table name or a tag on an Amazon EC2 instance."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"AWS gathers the request information into a request context, which is used to evaluate and authorize the request."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Authentication"}),"  A principal must be authenticated (signed in to AWS) using their credentials to send a request to\nAWS. Some services, such as Amazon S3 and AWS STS, allow a few requests from anonymous users. However, they are the\nexception to the rule."]}),"\n",(0,t.jsx)(s.p,{children:"To authenticate from the console as a root user, we must sign in with our email address and password. As an IAM user,\nprovide our account ID or alias, and then our user name and password. To authenticate from the API or AWS CLI, we must\nprovide our access key and secret key. We might also be required to provide additional security information. For\nexample, AWS recommends that we use multi-factor authentication (MFA) to increase the security of our account."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Authorization"})," We must also be authorized (allowed) to complete our request. During authorization, AWS uses values\nfrom the request context to check for policies that apply to the request. It then uses the policies to determine whether\nto allow or deny the request. ",(0,t.jsx)(s.strong,{children:"Most policies are stored in AWS as JSON documents"})," and specify the permissions for\nprincipal entities. There are several types of policies that can affect whether a request is authorized. ",(0,t.jsx)(s.em,{children:"To provide\nour users with permissions to access the AWS resources in their own account, we need only identity-based policies"}),".\nResource-based policies are popular for granting cross-account access. The other policy types are advanced features\nand should be used carefully."]}),"\n",(0,t.jsxs)(s.p,{children:["AWS checks each policy that applies to the context of a request. If a single permissions policy includes a denied\naction, AWS denies the entire request and stops evaluating. This is called an ",(0,t.jsx)(s.strong,{children:"explicit deny"}),". Because requests are\ndenied by default, AWS authorizes a request only if every part of the request is allowed by the applicable permissions\npolicies."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"create-iam-admin-user-and-user-group",children:"Create IAM Admin User and User Group"}),"\n",(0,t.jsx)(s.p,{children:'As a best practice, do not use the AWS account root user for any task where it\'s not required. Instead,\n[create a new IAM user for each person that requires administrator access][create IAM admin]. Then make those users\nadministrators by placing the users into an "Administrators" user group to which you attach the AdministratorAccess\nmanaged policy.'}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["\u26a0\ufe0f ",(0,t.jsx)(s.strong,{children:"Safeguard our root user credentials and don't use them for everyday tasks"})," \u26a0\ufe0f"]}),"\n",(0,t.jsxs)(s.p,{children:["When we create an AWS account you establish a root username and password to sign in to the AWS Management Console.\nSafeguard our root user credentials the same way we would protect other sensitive personal information. We can do\nthis by configuring MFA for our root user credentials. It is not recommended to generate access keys for our root\nuser, because they allow full access to all our resources for all AWS services, including our billing information.\nDon't use our root user for everyday tasks. Use the root user to complete the tasks that only the root user can\nperform. For the complete list of these tasks, see [Tasks that require root user credentials][root user tasks] in the\n",(0,t.jsx)(s.em,{children:"AWS General Reference"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"identities",children:"Identities"}),"\n",(0,t.jsx)(s.h4,{id:"user-groups",children:"User Groups"}),"\n",(0,t.jsx)(s.p,{children:"An IAM user group is a collection of IAM users. User groups let you specify permissions for multiple users, which can\nmake it easier to manage the permissions for those users. For example, you could have a user group called Admins and\ngive that user group typical administrator permissions. Any user in that user group automatically has Admins group\npermissions. If a new user joins your organization and needs administrator privileges you can assign the appropriate\npermissions by adding the user to the Admins user group. If a person changes jobs in your organization, instead of\nediting that user's permissions you can remove him or her from the old user groups and add him or her to the appropriate\nnew user groups."}),"\n",(0,t.jsx)(s.p,{children:"Here are some important characteristics of user groups:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"A user group can contain many users, and a user can belong to multiple user groups."}),"\n",(0,t.jsx)(s.li,{children:"User groups can't be nested; they can contain only users, not other user groups."}),"\n",(0,t.jsx)(s.li,{children:"There is no default user group that automatically includes all users in the AWS account. If you want to have a user\ngroup like that, you must create it and assign each new user to it."}),"\n",(0,t.jsxs)(s.li,{children:["The number and size of IAM resources in an AWS account, such as the number of groups, and the number of groups that a user can be a member of, are limited. For more information, see\n",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html",children:"IAM and AWS STS quotas, name requirements, and character limits"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["The following diagram shows a simple example of a small company. The company owner creates an ",(0,t.jsx)(s.strong,{children:"Admins"})," user group for\nusers to create and manage other users as the company grows. The Admins user group creates a Developers user group and a\nTest user group. Each of these user groups consists of users (humans and applications) that interact with AWS (Jim,\nBrad, DevApp1, and so on). Each user has an individual set of security credentials. In this example, each user belongs\nto a single user group. However, users can belong to multiple user groups."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Error loading relationship-between-entities-example-diagram.png",src:n(7823).Z+"",width:"399",height:"519"})}),"\n",(0,t.jsx)(s.p,{children:"References"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_create.html",children:"Creating IAM user groups"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage.html",children:"Managing IAM user groups"})}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"access-management",children:"Access Management"}),"\n",(0,t.jsxs)(s.p,{children:["We manage access in AWS by creating policies and attaching them to IAM ",(0,t.jsx)(s.a,{href:"#identities",children:"identities"})," (users, groups of\nusers, or roles) or AWS resources. A policy is an object in AWS that, when associated with an identity or resource,\ndefines their permissions. AWS evaluates these policies when an IAM principal (user or role) makes a request.\nPermissions in the policies determine whether the request is allowed or denied. Most policies are stored in AWS as JSON\ndocuments. AWS supports six types of policies:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#identity-based-policies",children:"identity-based policies"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#resource-based-policies",children:"resource-based policies"})}),"\n",(0,t.jsx)(s.li,{children:"permissions boundaries"}),"\n",(0,t.jsx)(s.li,{children:"Organizations SCPs"}),"\n",(0,t.jsx)(s.li,{children:"ACLs,"}),"\n",(0,t.jsx)(s.li,{children:"and session policies."}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"identity-based-policies",children:"Identity-Based Policies"}),"\n",(0,t.jsx)(s.p,{children:"Identity-based policies are JSON permissions policy documents that control what actions an identity (users, groups of\nusers, and roles) can perform, on which resources, and under what conditions. Identity-based policies can be further\ncategorized:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Managed policies"})," - Standalone identity-based policies that you can attach to multiple users, groups, and roles in\nyour AWS account. There are two types of managed policies:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"AWS managed policies"})," - Managed policies that are created and managed by AWS."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Customer managed policies"})," - Managed policies that you create and manage in your AWS account. Customer managed\npolicies provide more precise control over your policies than AWS managed policies."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Inline policies"})," - Policies that you add directly to a single user, group, or role. Inline policies maintain a\nstrict one-to-one relationship between a policy and an identity. They are deleted when you delete the identity."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["To learn how to choose between managed and inline policies, see\n",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html#choosing-managed-or-inline",children:"Choosing between managed policies and inline policies"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"resource-based-policies",children:"Resource-Based Policies"}),"\n",(0,t.jsxs)(s.p,{children:["Resource-based policies are JSON policy documents that we attach to a resource such as an Amazon S3 bucket. The policies\ngrant the specified principal permission to perform specific actions on that resource and defines under what conditions\nthis applies. ",(0,t.jsx)(s.em,{children:"Resource-based policies are inline policies"}),"; there are no managed resource-based policies."]}),"\n",(0,t.jsxs)(s.p,{children:["To enable cross-account access, we can specify an entire account or IAM entities in another account as the principal in\na resource-based policy. Adding a cross-account principal to a resource-based policy, however, is only half of\nestablishing the trust relationship. When the principal and the resource are in separate AWS account, we must also use\nan identity-based policy to grant the principal access to the resource. However, if a resource-based policy grants\naccess to a principal in the same account, no additional identity-based policy is required.  For step-by step\ninstructions for granting cross-account access, see\n",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html",children:"IAM tutorial: Delegate access across AWS accounts using IAM roles"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The IAM service supports only one type of resource-based policy called ",(0,t.jsx)(s.strong,{children:"role trust policy"}),", which is attached to an\nIAM role. ",(0,t.jsx)(s.em,{children:"An IAM role is both an identity and a resource that supports resource-based policies"}),". For that reason, we\nmust attach both a trust policy and an identity-based policy to an IAM role. Trust policies define which principal\nentities (accounts, users, roles, and federated users) can assume the role. To learn how IAM roles are different from\nother resource-based policies, see\n",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_compare-resource-policies.html",children:"How IAM roles differ from resource-based policies"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["To see which other services support resource-based policies, see\n",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html",children:"AWS services that work with IAM"}),". To learn more about resource-based policies, see ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html",children:"Identity-based policies and resource-based policies"}),". To learn whether principals in accounts outside of your zone of trust (trusted organization or account) have access to assume your roles, see\n",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html",children:"What is IAM Access Analyzer?"}),"."]})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},7459:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/intro-diagram-policies-800-7cb01199ea1fa02446443f875f03bd7a.png"},7823:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/relationship-between-entities-example-diagram-8d9ded7961ddfdc6ea6521fa5cccfc41.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>a});var t=n(7294);const r={},i=t.createContext(r);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);
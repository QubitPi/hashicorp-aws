---
sidebar_position: 2
title: Deployment via Screwdriver CD
description: Deploying ML Models via Screwdriver CD Template
---

[//]: # (Copyright Jiaqi Liu)

[//]: # (Licensed under the Apache License, Version 2.0 &#40;the "License"&#41;;)
[//]: # (you may not use this file except in compliance with the License.)
[//]: # (You may obtain a copy of the License at)

[//]: # (    http://www.apache.org/licenses/LICENSE-2.0)

[//]: # (Unless required by applicable law or agreed to in writing, software)
[//]: # (distributed under the License is distributed on an "AS IS" BASIS,)
[//]: # (WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.)
[//]: # (See the License for the specific language governing permissions and)
[//]: # (limitations under the License.)

Machine Learning Model Release Definition Templates
===================================================

hashicorp-aws offers a [Screwdriver template][Screwdriver CD template] that deploys
[immutable][Immutable Infrastructure] instances of Machine Learning models as REST API to AWS. It uses the
[screwdriver-template-main npm package] to assist with template validation, publishing, and tagging.

This release definition contains the following templates:

- [Deploying ML models via MLflow Docker container](#deploying-ml-models-via-mlflow-docker-container)

All templates tag the latest versions with the `latest` tag.

How to Use the Templates
------------------------

### Installing Template in Screwdriver

The template needs to be installed first in Screwdriver running instance. Installation has two parts:

1. [the template](https://github.com/QubitPi/hashicorp-aws/tree/master/adaptors/screwdriver-cd/templates/mlflow-docker-sd-template.yaml)
2. Some [pre-defined Screwdriver commands][Screwdriver CD - commands] that this template uses

The template and the commands can be automatically installed using the regular [screwdriver.yaml] config file by
following the steps below:

1. [Create a Screwdriver pipeline][Screwdriver CD - creating a pipeline] with the repository link being
   `https://github.com/QubitPi/hashicorp-aws.git`
2. Trigger a pipeline run, which will install the templates and commands automatically. Wait the pipeline to finish
   running.
3. The installed template and commands can be found in [Templates page][Screwdriver CD - finding templates] and
   [Commands page][Screwdriver CD - finding commands], respectively

### Using the Template

[Create a Screwdriver pipeline that uses this template][Screwdriver CD - creating pipeline from template] with the following
contents:

```yaml
---
jobs:
  main:
    requires: [~pr, ~commit]
    template: QubitPi/machine-learning-model-release-definition-template-mlflow-docker@latest
    steps:
      - build-ml-models: ...
    secrets:
      - AWS_ACCESS_KEY_ID
      - AWS_SECRET_ACCESS_KEY
      - AWS_ML_PKRVARS_HCL
      - AWS_ML_TFVARS
```

The following [Screwdriver CD - steps] must be implemented:

- `build-ml-models` - Commands that [package up MLflow Python models](https://mlflow.org/docs/latest/python_api/mlflow.pyfunc.html#creating-custom-pyfunc-models)

The following [Screwdriver Secrets][Screwdriver CD Secrets] needs to be defined before running this template:

- [`AWS_ACCESS_KEY_ID`](../setup#aws)
- [`AWS_SECRET_ACCESS_KEY`](../setup#aws)
- **AWS_ML_PKRVARS_HCL** - A [HashiCorp Packer variable values file] with the following variable values:

  ```hcl
  aws_image_region = "us-east-2"
  ami_name         = "my-ml-ami"
  instance_type    = "t2.small"
  ml_models_path   = "/home/my-nlp-models"
  ```

  - `aws_image_region` is the [image region][AWS regions] of [AWS AMI]
  - `ami_name` is the published AMI name; it can be arbitrary
  - `instance_type` is the recommended [AWS EC2 instance type] running this image
  - `ml_models_path` is the absolute path to the model directory generated by the **build-ml-models** step above

- **AWS_ML_TFVARS** - A [HashiCorp Terraform variable values file] with the following variable values:

  ```hcl
  aws_ec2_region   = "us-east-2"
  ami_name            = "my-ml-ami"
  instance_type       = "t2.small"
  ec2_instance_name   = "My Machine Learning REST Service"
  ec2_security_groups = ["ML REST Service Security Group"]
  ```

  - `aws_ec2_region` is the [EC2 runtime region][AWS regions]
  - `ami_name` is the name of the published AMI; **it must be the same as the `ami_name` in AWS_ML_PKRVARS_HCL**
  - `instance_type` is the chosen [AWS EC2 instance type] at runtime
  - `ec2_instance_name` is the deployed EC2 name as appeared in the instance list of AWS console; it can be arbitrary
  - `ec2_security_groups` is the [AWS Security Group] _name_ (yes, not ID, but name...)

[AWS AMI]: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html
[AWS EC2 instance type]: https://aws.amazon.com/ec2/instance-types/
[AWS regions]: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Availability
[AWS Security Group]: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html

[HashiCorp Packer variable values file]: https://qubitpi.github.io/hashicorp-packer/packer/guides/hcl/variables#from-a-file
[HashiCorp Terraform variable values file]: https://qubitpi.github.io/hashicorp-terraform/terraform/language/values/variables#variable-definitions-tfvars-files

[Immutable Infrastructure]: https://www.hashicorp.com/resources/what-is-mutable-vs-immutable-infrastructure

[publishing a template in Screwdriver]: https://qubitpi.github.io/screwdriver-cd-guide/user-guide/templates/job-templates#publishing-a-template

[screwdriver.yaml]: https://github.com/QubitPi/hashicorp-aws/tree/master/screwdriver.yaml
[Screwdriver CD - commands]: https://github.com/QubitPi/screwdriver-cd-commands
[Screwdriver CD - creating a pipeline]: https://qubitpi.github.io/screwdriver-cd-guide/user-guide/quickstart#create-a-new-pipeline
[Screwdriver CD - creating pipeline from template]: https://qubitpi.github.io/screwdriver-cd-guide/user-guide/templates/job-templates#using-a-template
[Screwdriver CD - finding templates]: https://qubitpi.github.io/screwdriver-cd-guide/user-guide/templates/job-templates#finding-templates
[Screwdriver CD - finding commands]: https://qubitpi.github.io/screwdriver-cd-guide/user-guide/commands#finding-commands
[Screwdriver CD Secrets]: https://qubitpi.github.io/screwdriver-cd-guide/user-guide/configuration/secrets
[Screwdriver CD - steps]: https://qubitpi.github.io/screwdriver-cd-guide/user-guide/configuration/jobconfiguration.html#steps
[Screwdriver CD template]: https://qubitpi.github.io/screwdriver-cd-guide/user-guide/templates/job-templates
[screwdriver-template-main npm package]: https://github.com/QubitPi/screwdriver-cd-template-main
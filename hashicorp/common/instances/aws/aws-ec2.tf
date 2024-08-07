# Copyright Jiaqi Liu
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

variable "ami_name" {
  type        = string
  description = "AMI image name to deploy"
}

variable "instance_type" {
  type        = string
  description = "EC2 instance types defined in https://aws.amazon.com/ec2/instance-types/"

  validation {
    condition     = contains(["t2.micro", "t2.small", "t2.medium", "t2.large", "t2.xlarge", "t2.2xlarge"], var.instance_type)
    error_message = "Allowed values for input_parameter are those specified for T2 ONLY."
  }
}

variable "instance_name" {
  type        = string
  description = "EC2 instance name"
}

# https://github.com/hashicorp/packer/issues/11354
# https://terraform.qubitpi.org/terraform/language/expressions/types#list
variable "security_groups" {
  type        = list(string)
  description = "EC2 Security Groups"
}

data "template_file" "ec2-init" {
  template = file("ec2-tf-init.sh")
}

data "aws_ami" "latest-ami" {
  most_recent = true
  owners      = ["899075777617"]

  filter {
    name   = "name"
    values = [var.ami_name]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

resource "aws_instance" "ec2" {
  ami           = data.aws_ami.latest-ami.id
  instance_type = var.instance_type
  tags = {
    Name = var.instance_name
  }

  security_groups = var.security_groups

  user_data = data.template_file.ec2-init.rendered
}

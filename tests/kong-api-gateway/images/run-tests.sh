#!/bin/bash
set -x
set -e

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

export TEST_DIR="${PWD}"

export PACKER_IMAGE_DIR="${PWD}/../../../hashicorp/kong-api-gateway/images"

cp aws-kong.packer.pkr.hcl $PACKER_IMAGE_DIR
cp aws-kong.source.pkr.hcl $PACKER_IMAGE_DIR
cp aws-kong.build.auto.pkrvars.hcl $PACKER_IMAGE_DIR

cd $PACKER_IMAGE_DIR
packer init .
packer validate .
packer build .

cd $TEST_DIR

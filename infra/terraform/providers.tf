terraform {
  required_version = ">= 1.9"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # Move state to S3 + DynamoDB lock table before any real apply.
  # backend "s3" {
  #   bucket         = "jbtraining-tfstate"
  #   key            = "infra/terraform.tfstate"
  #   region         = "ap-south-1"
  #   dynamodb_table = "jbtraining-tf-locks"
  #   encrypt        = true
  # }
}

provider "aws" {
  region = var.aws_region
}

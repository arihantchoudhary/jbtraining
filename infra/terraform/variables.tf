variable "aws_region" {
  description = "AWS region to deploy into"
  type        = string
  default     = "ap-south-1"
}

variable "project" {
  description = "Project name, used as a resource name prefix"
  type        = string
  default     = "jbtraining"
}

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "prod"
}

variable "vpc_cidr" {
  description = "CIDR block for the VPC"
  type        = string
  default     = "10.20.0.0/16"
}

variable "api_container_port" {
  description = "Port the FastAPI container listens on"
  type        = number
  default     = 8000
}

variable "domain_name" {
  description = "Root domain for the site, e.g. jbtraining.net (leave empty to skip Route53/ACM)"
  type        = string
  default     = ""
}

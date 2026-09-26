output "alb_dns_name" {
  description = "Public DNS name of the load balancer"
  value       = aws_lb.this.dns_name
}

output "ecr_web_repository_url" {
  value = aws_ecr_repository.web.repository_url
}

output "ecr_api_repository_url" {
  value = aws_ecr_repository.api.repository_url
}

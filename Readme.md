# Fluid AI Assignment

This project is a simple containerized application deployed to Kubernetes using Kind.

The main goal of this project is to demonstrate a basic DevOps workflow using Docker, Kubernetes and Jenkins.

## Tech Stack

- Docker
- Kubernetes
- Kind
- Jenkins
- PostgreSQL
- GitHub
- Linux

## Project Flow

The application is built as a Docker image and deployed to a Kubernetes cluster running with Kind.

The CI/CD flow is:

GitHub Push → Jenkins → Docker Build → Kind Load → Kubernetes Deploy → Rollout Check

PostgreSQL runs inside the same Kubernetes cluster as a separate workload.
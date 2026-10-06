# 🚀 DevSecOps CI/CD Pipeline for Microservices on Kubernetes (EKS)

## 📌 Project Overview

This project demonstrates a complete **end-to-end DevSecOps pipeline** for deploying a microservices-based application on AWS EKS.

It automates the entire workflow from **code commit → build → security scan → containerization → deployment → monitoring**, ensuring high reliability, security, and scalability.

---

## 🏗️ Architecture

<img width="1125" height="633" alt="image" src="https://github.com/user-attachments/assets/7907aee1-6163-46d6-a286-44fe9702db2c" />

---

## ⚙️ Tech Stack

* **Version Control:** GitHub
* **CI/CD:** Jenkins
* **Containerization:** Docker
* **Security:** OWASP Dependency Check, Trivy
* **Code Quality:** SonarQube
* **Orchestration:** Kubernetes (AWS EKS)
* **GitOps:** ArgoCD
* **Monitoring:** Prometheus, Grafana
* **Cloud:** AWS

---

## 🔥 Key Features

* **CI Pipeline:** Jenkins-orchestrated builds with automated testing and multi-stage security scans.
* **Security Stack:** SonarQube (Static Analysis), Trivy (Container Scanning), and OWASP Dependency-Check (SCA).
* **GitOps Deployment:** Automated synchronization of Kubernetes manifests using ArgoCD.
* **Orchestration:** Managed Amazon EKS cluster with Helm chart deployments.
* **Observability:** Full-stack monitoring using the Prometheus and Grafana stack.

---

## 📂 Project Structure

```
.
├── K8S/
├── public/
├── src/
├── Dockerfile
├── Jenkinsfile-CI
├── Jenkinsfile-CD
├── Project-Documentation.pdf
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚡ CI/CD Workflow

1. Developer pushes code to GitHub

2. Jenkins CI pipeline triggers:

   * Build application
   * Run SonarQube analysis
   * Perform OWASP & Trivy scans
   * Build Docker image
   * Push image to registry

3. Jenkins CD pipeline:

   * Updates Kubernetes manifests
   * ArgoCD detects changes
   * Deploys application to EKS

---

## 🔐 Security Implementation

* Dependency vulnerability scanning (OWASP)
* Container image scanning (Trivy)
* Code quality gates using SonarQube
* Secure credentials via Jenkins

---

## 📊 Monitoring

* Prometheus for metrics collection
* Grafana dashboards for visualization
* Real-time cluster and application monitoring
+
---

## 🚀 Deployment Steps (High-Level)

### 1️⃣ Setup EC2 Master Node

* Install Docker, Jenkins, AWS CLI, kubectl, eksctl

### 2️⃣ Create EKS Cluster

```bash
eksctl create cluster --name=hotstar-clone
```

### 3️⃣ Configure Jenkins

* Install plugins
* Add credentials (GitHub, Docker, SonarQube)

### 4️⃣ Setup SonarQube & Trivy

* Run SonarQube container
* Install Trivy for scanning

### 5️⃣ Deploy ArgoCD

```bash
kubectl create namespace argocd
helm install argocd argo-cd/argo-cd -n argocd
```

### 6️⃣ Configure Monitoring

* Install Prometheus & Grafana using Helm

---

## 🧪 Output

* Fully automated deployment pipeline
* Running application on EKS
* Monitoring dashboards
* Security scan reports

---

## 📸 Screenshots

* Jenkins CI-Pipeline

<img width="1920" height="667" alt="Screenshot 2025-11-09 023239-1" src="https://github.com/user-attachments/assets/f1341198-5b73-4c47-82a5-64a55bb0bf17" />

* Jenkins CD-Pipeline

<img width="1920" height="1080" alt="Screenshot 2025-11-09 023345" src="https://github.com/user-attachments/assets/bd47da88-d0c9-4183-8e6f-9c2cbb2e14d9" />

* SonarQube Dashboard

<img width="1920" height="1080" alt="Screenshot 2025-11-09 023142" src="https://github.com/user-attachments/assets/6f5ae6fa-0087-45c5-940c-cea3aaae353c" />
  
* ArgoCD UI

<img width="1920" height="1080" alt="Screenshot 2025-11-09 023424" src="https://github.com/user-attachments/assets/793b4bbf-1979-422a-9414-6bdc68aa45aa" />
  
* Grafana Dashboard

<img width="1920" height="1080" alt="Screenshot 2025-11-09 023746" src="https://github.com/user-attachments/assets/10996fc7-3c53-4d91-b4ee-113fa2fd759b" />

---

## 📄 Project Documentation
For a detailed, step-by-step guide on the implementation of this DevSecOps pipeline, including configuration snippets for Jenkins, EKS, and Monitoring, please refer to the full documentation:

[👉 Click here to view the Technical Documentation PDF](./Project-Documentation.pdf)

---

## 🙌 Author

**Goutham Reddy**

DevOps Engineer | Cloud Enthusiast

---


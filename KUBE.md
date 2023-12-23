### Enable kubernete in docker desktop in mac

`kubectl` is a command-line tool for interacting with Kubernetes clusters, allowing you to deploy applications, inspect and manage cluster resources, and view logs.
`kubectx` is a utility to switch between different Kubernetes contexts (clusters). A `cluster` is a set of `node` machines for running containerized applications. Within a cluster, pods are the smallest deployable units that can contain one or more `containers` (such as `Docker containers`), which are the actual running instances of your application. Each pod is typically associated with a single application or service.

## Installation Kubernetes

Kubernetes will be used for handling the scaling based on load

### [Kompose](https://kompose.io/installation/) Conversion tool to go from Docker Compose to Kubernetes

```
brew install kompose
```

### [kubectl](https://kubernetes.io/docs/reference/kubectl)

- kubectl is a command-line tool that allows you to run commands against Kubernetes clusters. It's used to deploy applications, inspect and manage cluster resources, and view logs.

- In kubectl, svc is short for "service." A Service in Kubernetes is an abstraction which defines a logical set of Pods and a policy by which to access them. Services enable network access to a set of Pods, typically providing load balancing and a stable interface regardless of the changes in the underlying pods.

  - List Services: `kubectl get svc`
  - Describe a Specific Service: `kubectl describe svc my-service`
  - Create a Service from a File: `kubectl apply -f my-service.yaml`
  - Delete a Service: `kubectl delete svc my-service`

### kubectx

- kubectx is a utility to manage and switch between kubectl contexts easily. It's useful if you're working with multiple Kubernetes clusters.

```
 brew install kubectx
```

### Useful commands

#### Apply kubectl deployment, service

```
kubectl apply -f database-deployment.yaml,frontend-deployment.yaml,backend-deployment.yaml, database-service.yaml,frontend-service.yaml,backend-service.yaml
```

#### Reduce replicas and delete deplyment

```
kubectl scale deployment <deplyment_name> --replicas=0
kubectl scale deployment frontend --replicas=0
kubectl delete deployment frontend
```

#### View logs

```
docker logs <container_name/id>
```

#### Port forward

use portforwad to connect from svc or assign external ip address to access

```
kubectl port-forward svc/frontend 8080:8080
```

#### Exec in pods

```
kubectl exec -it svc/database -- sh
```

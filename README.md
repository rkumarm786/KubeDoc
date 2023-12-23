# KubeDoc

## Overview

This README outlines the steps to set up and run three Docker containers for our application: a database, a frontend React application, and a backend Node.js application. The frontend communicates with the backend for API requests, and the backend interacts with the database for data storage and retrieval.

## Prerequisites

- Docker installed on your system
- Docker Compose (optional, for simplified multi-container orchestration)

## Containers

1. **Database Container**: Our database server.
2. **Backend Container (Node.js)**: Our API server.
3. **Frontend Container (React)**: Our web interface.

## Steps to Build and Run Containers

### 0. Create a network bridge

- Create a network bridge for all containers to communicate within same network
  `docker network create test-network`

### 1. Database Container

- **Build Image**:
  `docker build -t database-app .`
- **Run Container**:
  `run --name database-container -e POSTGRES_PASSWORD=raj --network test-network  database-app`

- **Exec in Container**:`docker exec -it <container_id> /bin/sh`

  ```
    psql -U postgres
    \l - list database
    \c testing_db - swith to db
  ```

### 2. Backend Container (Node.js)

- **Build Image**:
  `docker build -t backend-app .`
- **Run Container**:
  `docker run -p 3000:3000 --network test-network backend-app`

### 3. Frontend Container (React)

```
  We have not exposed our backend api to the public so to connect our backend container we have to update nginx config to handle api routes. (Also updated nginx config in container)
```

- **Build Image**:
  `docker build -t frontend-app .`
- **Run Container**:
  `docker run -p 8080:80 --network test-network frontend-app`

## Accessing the Applications

- Frontend: [http://localhost:8080](http://localhost:8080)
- Backend API: [http://localhost:3000](http://localhost:3000)

->
RUN

- Executes commands at the time of building the Docker image
- Each RUN command creates a new layer in the image.

CMD

- It's only executed when the container starts.
- There can only be one CMD command in a Dockerfile. If you list more than one, only the last CMD takes effect.

ENTRYPOINT
-Similar to CMD, but used to set the container to run as an executable.

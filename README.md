# Task Management API

This is a simple RESTful API built with **Node.js** and **Express**, created as a practice project during my onboarding process as a developer.

---

## Project Goals

- Build a basic **API basic with one endpoint**  
- Run and test the API locally using **Node.js**
- Use **Docker** to containerize the project
- Test endpoints using **Postman**
- Share the API using **Ngrok**

---

## Technologies and Concepts

| Tool / Concept     | Description                                                       |
|--------------------|-------------------------------------------------------------------|
| **Node.js**        | Runtime for running JavaScript on the backend                     |
| **Express**        | Web framework to handle routes and HTTP requests                  |
| **REST API**       | API design pattern using HTTP verbs (GET, POST, PUT, DELETE)      |
| **Postman**        | Tool for sending requests and testing endpoints                   |
| **Docker**         | Container platform to run the app in an isolated environment      |
| **Ngrok**          | Allows exposing your local server to the public web               |
| **Git + GitHub**   | Version control and code publishing                               |

---

## How to Run This Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/AmandaRez/api-tasks.git
cd api-tasks
```

### 2.Install dependencies

```bash
npm install
```

### 3. Run server

```bash
node index.js
```
Server should be running at:

```arduino
http://localhost:3000
```

---

## API Endpoints


|Method     |Endpoint   |Description   |Body (JSON)                 |
|-----------|-----------|--------------|----------------------------|
| **GET**   | /tasks    |List all tasks| -                          |
| **POST**  | /tasks    |Add a new task|{ "title": "Learn Docker" } |
| **PUT**   | /tasks/:id|Update a task |	{ "done": true }          |
| **DELETE**| /tasks/:id|Delete a task | -                          |

---

## Run with Docker


To run this API using Docker:

```bash
docker build -t api-tasks .
docker run -p 3000:3000 api-tasks
```

---

## Expose your API using Ngrok


```bash
ngrok http 3000
```
Use the generated link (e.g. https://abc123.ngrok.io/tasks) to access your API from anywhere.

---

## What I Learned


- How to create and structure a Node.js + Express API
- The meaning of each HTTP method in REST APIs
- How to use Postman to test requests
- How to create a Dockerfile and run a container
- The basics of Ngrok and exposing local servers
- How to use Git to version and push code to GitHub





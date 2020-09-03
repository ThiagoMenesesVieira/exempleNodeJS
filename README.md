<h1 align="center">
  <strong>🚀 Basic exemple backend with NodeJs (BackEnd - Projects - API 🚀 </strong>
</h1>

## 💻 Project

This project an example was created addressing concepts of nodeJS, API REST, métodos HTTP e middlewares.

This API is used as a backend in the [reactjs-frontend-projects] (https://github.com/ThiagoMenesesVieira/reactjs-frontend-projects) example.

## 🚀 Technology

This project was developed with:

- NODE
- REST API
- HTTP methods
- Middleware


##  💻 Routes
- GET (List)
```powershell
http://localhost:3333/projects
```
- POST (Create)
```powershell
http://localhost:3333/projects

#Send
  {
    "title": "App mobile",
    "owner": "Thiago"
  }
#Preview
  {
    "id": "72bc5a5d-3bab-4e0f-b34b-5df7fed7df67",
    "title": "App mobile",
    "owner": "Thiago"
  }
```
- PUT (Update)
```powershell
http://localhost:3333/projects/72bc5a5d-3bab-4e0f-b34b-5df7fed7df67
#Send
  {
    "title": "App",
    "owner": "Thiago"
  }

#Preview
  {
    "id": "44462423-dbd7-43ed-be03-97e5fb71d807",
    "title": "App",
    "owner": "Thiago"
  }
```

- DELETE
```powershell
http://localhost:3333/projects/72bc5a5d-3bab-4e0f-b34b-5df7fed7df67

#Return status 204 No Content
#Preview: No body returned for response
```
## ℹ How to use

To clone and run this API, you will need [Git] (https://git-scm.com) and [Node.js] (https://nodejs.org/pt-br/) installed on your computer.

On your command line:

```powershell
# Clone this repository
git clone https://github.com/ThiagoMenesesVieira/nodejs-backend-api-projects

# Go to the repository
cd .\exempleNodeJs

# Install the dependencies
npm install

# Start the Backend 
npm run dev

# Use the sample HTTP method routes

```

---
Make with ♥ by Thiago Meneses Vieira <img src="https://img.icons8.com/officexs/16/000000/linkedin.png"/> [Linkedin](https://www.linkedin.com/in/thiago-meneses-vieira-7aa8922a/).

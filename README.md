<h1 align="center">
  <strong>🚀 Basic exemple backend with NodeJs 🚀 </strong>
</h1>

## 💻 Projeto

Neste projeto foi criado um exemplo abordando conceitos de nodeJS, API REST, métodos HTTP e middlewares.

## 🚀 Tecnologias

Esse projeto foi desenvolvido abordando os seguintes temas:

- NODE
- Conceitos API REST
- Métodos HTTP
- Middware


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

DELETE
```powershell
http://localhost:3333/projects/72bc5a5d-3bab-4e0f-b34b-5df7fed7df67

#Return status 204 No Content
#Preview: No body returned for response
```
## ℹ Como usar

Para clonar e executar este API, você precisará do [Git](https://git-scm.com) e [Node.js](https://nodejs.org/pt-br/) instalado em seu computador.

Em sua linha de comando:

```powershell
# Clone este repósitorio
git clone https://github.com/ThiagoMenesesVieira/exempleNodeJs

# Vá para o repósitorio
cd .\exempleNodeJs

# Instale as dependências
npm install

# Start the Backend 
npm run dev

# Utilize as os metodos listados acima para fazer a resquisições HTTP

```

---
Make with ♥ by Thiago Meneses <img src="https://img.icons8.com/officexs/16/000000/linkedin.png"/> [Linkedin](https://www.linkedin.com/in/thiago-meneses-vieira-7aa8922a/).

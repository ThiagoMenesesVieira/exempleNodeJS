const express = require('express');
const cors = require('cors');
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(cors(
   // {
   // origin: 'http://localhost:3000'    
   // }
));
app.use(express.json())


const projects = [];

// Middleware para verificar tempo de cada requisição
function logRequests(request, response, next) {
    const {method, url } = request;

    const logLabel = `[${method.toUpperCase()}] ${url}`;
    
    console.time(logLabel);

    next(); //Proximo middleware

    console.timeEnd(logLabel);

}
// Valida se o ID é valida, os middleware podem ser usados para validar dados que o user envia
function validateProjectId(request, response, next){
    const {id} = request.params;

    if(!isUuid(id)){
        return response.status(400).json({error: 'Invalid project ID.' });
    }
    return next();

}

// utiliza o middleware em todas as chamadas
app.use(logRequests);

//usa o middleware apenas para rotas que tem esse formato '/projects/:id' 
app.use('/projects/:id', validateProjectId)

app.get('/projects', (request, response) => {
const { title } = request.query;

const results = title
    ? projects.filter(project => project.title.includes(title))
    : projects;

    return response.json(results);
});

app.post('/projects', (request, response) => {
   const { title, owner } = request.body;

    const project = { id: uuid(), title, owner  };
console.log('project', project)
    projects.push(project);

    return response.json(project);
});

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
    const {title, owner} = request.body;

    const projectIndex = projects.findIndex(project => project.id === id);
    
    if(projectIndex < 0) {
        return response.status(400).json({error: 'Project not found'})
    }
    const project = {
        id,
        title,
        owner,
    };
    projects[projectIndex] = project;

    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
    const {id} = request.params;

    const projectIndex = projects.findIndex(project => project.id === id);
    

    if(projectIndex < 0) {
        return response.status(400).json({error: 'Project not found'})
    }
   
   projects.splice(projectIndex, 1)
   
   return response.status(204).send();
});

app.listen(3333, () => {
    console.log("Back-end started! port 3333")
});
import {Router} from 'express';
import multer from 'multer';
import OrphanagesController from './controllers/OrphanagesController';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index); // listando os orfanatos cadastrados
routes.get('/orphanages/:id', OrphanagesController.show); // listando os orfanatos cadastrados
routes.post('/orphanages', upload.array('images'), OrphanagesController.create); // criando novos orfanatos. upload cadastra as imagens junto com orfanato

export default routes;


// rota = é conjunto
// recurso = '/users'
// método HTTP = o GET, POST, PUT e DELETE
// GET = buscar um informação (lista, item)
// POST = criando uma informação
// PUT = editando uma informação
// DELETE = deletando uma informação
// parâmetros
// query params = http://localhost:3333/users?search=pleiterson busca de informações
// route params = http://localhost:3333/users/1 identifcar um recurso
// body params = http://localhost:3333/users?search=pleiterson 

// app.get('/users/:id', (request, response) => {
//     console.log(request.query); // { search: 'pleiterson' } query params
//     console.log(request.params); // { id: '1' } route params
//     console.log(request.body); // undefined, pois ainda não definimos o express para ler json
//     // após definir o item da linha 5, ele vai ler o query, params e body
// });

// MVC - 
// Model - representatividade de um dado na aplicação
// Views - como as coisas são visualizadas, disponíveis no front-end
// Controllers - local onde ficam armazenadas a lógica das rotas

// métodos comuns - index, show, create, update, delete
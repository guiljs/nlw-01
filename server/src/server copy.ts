// import express, { response, request } from 'express';

// const app = express();
// app.use(express.json());

// const users = [
//     'Guilherme',
//     'Cibele',
//     'Heitor',
//     'Henrique',
//     'Marcelo'
// ];

// app.get('/users', (request, response) => {

//     const search = request.query.search;

//     const filteredUsers = search ? users.filter(u => u.includes(String(search))) : users;

//     return response.json(filteredUsers);
// });

// app.get('/users/:id', (request, response) => {

//     let id = Number(request.params.id);

//     const user = users[id];

//     return response.json(user);
// });

// app.post('/users', (request, response) => {

//     const data = request.body;
//     console.log(data);

//     const user = {
//         name: data.name,
//         email: data.email
//     };

//     return response.json(user);
// });

// app.get('/', (request, response) => {

//     response.json({ message: 'Hello World' })
// });
// app.listen(3333);
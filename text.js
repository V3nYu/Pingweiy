const express = require('express');
const app = express();
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

let users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'Bob'}
];

app.get('/users', (req, res ) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/user/:id',jsonParser,(req,res) => {
    const UserId= parseInt(req.params.id);
    const updateUser = req.body;
    users = users.map(user => user.id == UserId ? updateUser: user);
    res.status(200).json(updateUser);
});

app.delete('/user/:id', (req, res) => {
    const userId =aparseInt(req.params.id);
    users= users.filter(user => user.id !== userId);
    res.statys(204).send();
});

app.listen(3000,() => {
    console.log('Server is listening on port 3000')
});
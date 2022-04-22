const express = require('express');
const app = express();

const db = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'Living@123',
        database: 'Hollywood',
        port: 5432
    }
});

app.set("db", db);

app.listen(3000, () => console.log('Example app listening on port 3000!'));

// app.get('/', (req, res) => {
//     db
//     .select().from('actors_2')
//     .then(actors_2 =>
//             res.send(actors_2)
//     )

// });

// app.get('/', (req, res) => {
//     db
//     .select().from('actors_2')
//     .where({first_name: 'Matt'})
//     .then(actors_2 =>
//             res.send(actors_2)
//     )
//     // res.json(req.params);

// })

app.get('/actor/:name', (req, res) => {
    db('actors_2')
    .where({firstname: `${req.params.name}`})
    .then(actors =>
            res.send(actors)
    )
   
})
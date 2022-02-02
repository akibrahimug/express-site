const express = require('express');
const app = express();
const {projects} = require('./data.json')

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {projects})
    
})

app.get('/about', (req, res) => {
    res.render('about')
})


app.get('/project/:id', (req, res) => {
    res.render('project', {id:req.params.id, projects})
})

// Error Handling for 404 status errors
app.use((req,res,next) => {
    const err = new Error();
    err.status = 404;
    res.status(404).render('not-found', {err: err.status})
    console.log(err)
})
//Error Handling for Global status errors
app.use((err,req,res,next) => {
    err.status = 500
    res.status(500).render('error', {err: err.status})
    console.log(err)
})

app.listen(3000, () => {
    console.log('Server Listening at Port:3000')
})
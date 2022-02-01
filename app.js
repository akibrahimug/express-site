const express = require('express');
const app = express();
const data = require('./data.json')

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

// app.get('*', (req,res) => [
//     res.send('sorry page not found')
// ])

app.get('/', (req, res) => {
    res.render('index', {projects: data.projects})
    
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/project/:id', (req, res) => {
    res.render('project', {id:req.params.id})
})

app.use((req,res,next) => {
    res.status(404).send('Sorry cant find that!')
})

app.use((err,req,res,next) => {
    res.status(500).send('Something is brocken please try again')
})

app.listen(3000, () => {
    console.log('Server Listening at Port:3000')
})
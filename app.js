
const express = require("express")
const helmet = require("helmet")
const bodyParser = require("body-parser")
const path = require('path')

const urlencoderParser = bodyParser.urlencoded({extended: true})

const app = express()
app.use('/css', express.static(path.join( 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join( 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join( 'node_modules/jquery/dist')))

app.use(helmet())
app.use(express.static('public'))
app.set('view engine', './views')

const port = 3000;

app.get('/', (req, res) => {
    res.render('index.pug')
})
app.get("/signup", (req, res) => {
    res.render('signup.pug')
})

app.post("/signup", urlencoderParser, (req, res) => {
    console.log(req.body)
    res.render('signup.pug')
})

app.get("/signin", (req, res) => {
    res.render('signin.pug')
})

app.post("/signin", urlencoderParser , (req, res) => {
    console.log(req.body)
    res.render('signin.pug')
})

app.get("/admin", (req, res) => {
    res.render('admin.pug')
})
app.get("/chat", (req, res) => {
    res.render('chat.pug')
})
app.get("*", (req, res) => { 
    res.status(404).render('404.pug')
})


app.listen(port, () => console.log(`le port est lancé sur ${port}`));
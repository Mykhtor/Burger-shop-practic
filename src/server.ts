import express from 'express'
import { engine } from 'express-handlebars'
import path from 'path'
import { burgers } from './burger.storage'


const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../public')))

app.engine('.hbs', engine( { extname: '.hbs' } ))
app.set('view engine', '.hbs')
app.set('views', './pages')




app.get('/', (req, res) => {
  
  res.render('index', { burgers })
})

app.get('/buy/:id', (req, res) => {
  let burger = burgers.find( b => b.id == req.params.id)
  // res.render('index', { burgers })
  
})



app.get('/confirm', (req, res) => {
  res.render('confirm')
})





app.listen(8080, () => {
  console.log(`Server is running on http://localhost:8080`);
})
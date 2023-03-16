require('dotenv').config()
const App = require('./src/app')
const filmRouter = require('./routes/filmRouter')
const genreRouter = require('./routes/genreRouter')
const jsonParser = require('./src/parseJSON')
const urlParser = require('./src/parseURL')
const bodyParser = require('./src/parseBody')

const PORT = process.env.PORT
const app = new App()

app.use(urlParser('http://localhost:' + PORT))
app.use(bodyParser(app))
app.use(jsonParser)

app.addRouter(filmRouter)
app.addRouter(genreRouter)

app.listen(PORT, () => console.log('Server started on port', PORT))
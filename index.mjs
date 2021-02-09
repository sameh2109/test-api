import routes from './src/routes/crmRoutes.mjs'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser';


const app = express()
const port = process.env.PORT || 4000
// const {routes} = routes
//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://sameh:ABC12345@cluster0.vaaep.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//body parser setup
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


//routes link
routes(app);
//static Files load
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.send(`Node and express server runing on port ${port}`)
})
//Server up
app.listen(port,()=>{
    console.log(`Server is runing on port ${port}`)
})
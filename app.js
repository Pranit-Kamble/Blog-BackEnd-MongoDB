const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const app = express();
const cors = require('cors')
const bollywoodRoute = require('./routes/bollywood') 
const hollywoodRoute = require('./routes/hollywood') 
const foodRoute = require('./routes/food') 
const travelRoute = require('./routes/travel') 
const animeRoute = require('./routes/anime') 
const technologyRoute = require('./routes/technology') 
const homeRoute = require('./routes/home') 


app.use(cors({origin:'*'}))
app.use(express.json());
app.use('/',bollywoodRoute)
app.use('/',hollywoodRoute)
app.use('/',homeRoute)
app.use('/',travelRoute)
app.use('/',animeRoute)
app.use('/',foodRoute)
app.use('/',technologyRoute)



app.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${process.env.PORT}`);
})
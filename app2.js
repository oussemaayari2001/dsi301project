const db=require('./config/db2')
const express=require('express')
const app=express()
app.use(express.urlencoded())
app.use(express.json())
require('./models/publication2')
const publicationrouter=require('./Routes/publicationRoute2')
app.use('/posts',publicationrouter);
app.listen(5000)
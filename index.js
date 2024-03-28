const express=require('express')
const app=express()
const mongoose=require('mongoose')
const ContatoRoutes=require('./routes/ContatoRouts')




app.use('/contatos',ContatoRoutes)
app.use(
    express.urlencoded({
        extended:true,
    })
)
app.use(express.json())

//usuario, senha e url do banco
const DB_USER="marcosvictor82"
const DB_PASSWORD=encodeURIComponent('YDGq3ZORRRyr8pB0')
const DB_URL=`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ixvmk5o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
//conexao do banco
mongoose.connect(DB_URL)
.then(()=>{
    console.log('Conectamos ao MongoDB!')
    app.listen(3000)
})
.catch((err)=>console.log(err))
 module.exports=mongoose
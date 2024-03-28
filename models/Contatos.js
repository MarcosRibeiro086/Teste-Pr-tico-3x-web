const mongoose=require('mongoose')

const Contatos =mongoose.model('Contato',{
    nome:String,
    telefone:String

})

module.exports =Contatos
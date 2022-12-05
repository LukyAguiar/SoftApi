const userService = require('../services/user.service')


const create = async (req, res) =>{
    //Desestruturando User 
    const {name, document, email, phone, address} = req.body; 
    
    if(!name || !document || !email || !phone || !address){
        res.status(400).send({message:"Preencha todos os atributos!"})
    }

    const user = await userService.create(req.body);

    if(!user){
        return res.status(400).send({message:"Erro na criação do Usuario"})
    }

    res.status(201).send({
        message: "Usuario Criado com Sucesso!",
        user:{
            id: user._id,
            name,
            document,
            email,
            phone,
            address
        }
    });
};



module.exports = { create }
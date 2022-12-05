


const create = (req, res) =>{
    //Desestruturando User 
    const {name, username, email, password} = req.body; 
    
    if(!name || !username || !email || !password){
        res.status(400).send({message:"Preencha todos os atributos!"})
    }

    res.status(201).send({
        message: "Usuario Criado com Sucesso!",
        user:{
            name,
            username,
            email,
        }
    });
};



module.exports = { create }
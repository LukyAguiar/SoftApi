const bcrypt = require('bcrypt');
const authService = require('../services/Auth.service')


const login = async (req, res) => {
      const {email, document} = req.body;
  try{      
        const user = await authService.loginService(email);

        if(!user){
            return res.status(404).send({message:"Documemto ou Email Invalido"})
        }

        const isDocumentIsvalid = bcrypt.compareSync(document, user.document);

        if(!isDocumentIsvalid || !user){
            return res.status(404).send({message:"Documemto ou Email Invalido"})
        }

        res.send(user);
  }catch(err){
        res.status(500).send(err.message);
  }
}

module.exports = { login }
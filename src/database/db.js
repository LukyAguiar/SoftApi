const mongoose = require('mongoose');

const connectcDatabase = () => {
    console.log("Tentando Conectar (MongoDB)")

    mongoose.connect("mongodb+srv://LukyAguiar:XVK9tbsKCXssGpB0@softcluster.b4rt9zl.mongodb.net/?retryWrites=true&w=majority",)
    .then(() => console.log("MongoDB Atlas conectado"))
    .catch((error) => console.log(error))
};

module.exports = connectcDatabase; 
const mongoose = require('mongoose');

const connectcDatabase = () => {
    console.log("Tentando Conectar (MongoDB)")

    mongoose.connect( process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology:true})
    .then(() => console.log("MongoDB Atlas conectado"))
    .catch((error) => console.log(error))
};

module.exports = connectcDatabase; 
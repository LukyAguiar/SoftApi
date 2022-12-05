const express = require('express')
const userRoute = require('./src/routes/User.route')
const app = express()
const connectcDatabase = require('./src/database/db')
const port = 3000; // Definição da porta

connectcDatabase()

app.use(express.json()) //Faz com que ele receba um JSON - 

app.use("/user", userRoute) // Rota para CRUD usuario


app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
const express = require('express')
const connectcDatabase = require('./src/database/db')

const userRoute = require('./src/routes/User.route')
const hubSpotRoute = require('./src/routes/HubSpot.route')
const authRoute = require('./src/routes/Auth.route')

const dotenv = require('dotenv')



dotenv.config();

const app = express()
const port = process.env.PORT || 3000; // Definição da porta

connectcDatabase()

app.use(express.json()) //Faz com que ele receba um JSON - 

app.use('/user', userRoute) // Rota para CRUD usuario
app.use('/auth', authRoute)
app.use('/hubspot', hubSpotRoute) //Rota para Adicionar Contato ao Hubspot



app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
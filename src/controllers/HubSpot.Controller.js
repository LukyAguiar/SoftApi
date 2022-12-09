const Yup = require('yup');
const Contact = require('../models/Contact.model');
const hubspot = require('@hubspot/api-client');

class ContactController {

    async show(req, res) {
        console.log("Função show acessada");
    }

    async showAll(req, res) {
        console.log("Função ShowAll acessada");
    }

    async update(req, res) {
        console.log("Função update acessada");
    }

    async store(req, res) {

        //Validação de dados com Yup
        const schema = Yup.object().shape({
            name: Yup.string().required().min(3),
            lastname: Yup.string().required().min(3),
            email: Yup.string().email().required(),
            phone: Yup.string().required().min(10)
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(402).json({
                error: true,
                message: "Dados inválidos"
            })
        }

        //Recebendo as informações no body
        const { name, lastname ,email, phone, } = req.body;

        const hubspotClient = new hubspot.Client({ "accessToken":  process.env.HUBSPOT_KEY });

        const properties = {
            "company": "Ivory",
            "email": email,
            "firstname": name,
            "lastname": lastname,
            "phone": phone,
            "website": "biglytics.net"
        };
        const SimplePublicObjectInput = { properties };

        try {
            const apiResponse = await hubspotClient.crm.contacts.basicApi.create(SimplePublicObjectInput);
            console.log("Contato cadastrado com sucesso! ")
        } catch (e) {
            e.message === 'HTTP request failed'
                ? console.error(JSON.stringify(e.response, null, 2))
                : console.error(e)
        }
 

        //Construindo constante
        const dados = {
            name,
            lastname,
            email,
            phone
        }

        //Envia para o banco de dados
        const contact = await Contact.create(dados, (err) => {
            if (err) res.status(402).json({
                error: true,
                message: "Não foi possível cadastrar o contato"
            })

            return res.status(200).json({
                error: false,
                message: "Contato cadastrado com sucesso",
            })
        })


    }

    async remove(req, res) {
        console.log("Função remove acessado");
    }

}

module.exports = new ContactController();
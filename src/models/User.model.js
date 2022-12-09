const mongoose = require("mongoose");
const bcrypt = require("bcrypt")


const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    document:{
        type: String,
        unique:true,
        required: true,
        select:false
    },
    email:{
        type: String,
        unique:true,
        lowercase:true,
        required: true,
    },
    phone:{
        type: String, 
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
});

UserSchema.pre("save", async function (next) {
    this.document = await bcrypt.hash(this.document, 10);
    next();
})

const User = mongoose.model("User", UserSchema)

module.exports = User;
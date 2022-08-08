const {Schema, model} = require("mongoose");


const contactSechema = new Schema({
    contactName:{type: String},
    contacLastName:{type: String},
    contactEmail:{type: String},
    contactPhoneNumber:{type: String},
    contactAddress:{type: String},
    contactImageUrl:{type: String},
    contactCompany:{type: String},
},
{
    timestamps: true,
})

const Contact = model("Contact", contactSechema);


module.exports = Contact;
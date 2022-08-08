const Contact = require("../models/Contact.model");

// !--TODO --! Get all contacts
exports.getAllContacts = async (req, res, next) => {
    try{
        const contacts = await Contact.find();
        res.status(200).json({contacts})
    
    }catch(err){
        console.log(error);
    }
}

//---!CREATE
exports.createContact = async (req, res) => {
    
    try{
        console.log(req.body)
        const {name, lastName, email, phone, address, image, company} = req.body;
        const contact = await Contact.create({
            // ...req.body
            contactName:name,
            contacLastName:lastName,
            contactEmail:email,
            contactPhoneNumber:phone,
            contactAddress:address,
            contactImageUrl:image, 
            contactCompany:company
        });
   res.status(201).json(contact)
    }catch(error){
        console.log(error)
    }
}

//---!GET BY ID
exports.getContactById = async (req, res) => {
    try{
        const { id } = req.params
        const oneContact = await Contact.findById(id)
        res.status(302).json(oneContact)
    }catch(error){
        console.log(error)
    }
}

//---!UPDATE
exports.editContact = async (req,res) => {
    try{
        const { id } = req.params
        const {name, lastName, email, phone, address, image, company} = req.body;
        const oneContact = await Contact.findByIdAndUpdate(id, {
            // ...req.body
            contactName:name,
            contacLastName:lastName,
            contactEmail:email,
            contactPhoneNumber:phone,
            contactAddress:address,
            contactImageUrl:image, 
            contactCompany:company
        }, {new: true})
        console.log("antes de respoonder", oneContact)
        res.status(302).json(oneContact)
    }catch(error){
        console.log(error)
    }
    
}

//---!DELETE
exports.deleteContact = async (req, res) =>{
    try{
        const { id } = req.params
        const deletedContact = await Contact.findByIdAndDelete(id)
        res.status(301).json({message:"Contact deleted successfully"})
    }catch(error){
        console.log(error)  
    }
}
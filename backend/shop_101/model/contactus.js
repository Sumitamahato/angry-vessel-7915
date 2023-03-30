const mongoose=require("mongoose");


const contactusSchema=mongoose.Schema({
    name:String,
    mobno:String,
    email:String,
    topic:String,
    message:String
}, { versionKey: false })

const ContactUsModel=mongoose.model("contactus",contactusSchema);

module.exports={
    ContactUsModel
}
const express = require("express");
const { ContactUsModel } = require("../model/contactus");
const route = express.Router();

route.get("/sendlink", async (req, res) => {
    try {
        let mobno = req.query.mobno || '';
        if (mobno.length == 10) {
            console.log("sending link to " + mobno);
            res.send("success");
        }
        else {
            res.send("invalid mobno");
        }
    } catch (error) {
        console.log(error);
        res.send("something went wrong");
    }
})

route.post("/contactus", async (req, res) => {
    try {
        let { name, mobno, email, topic, message } = req.body;
        let postData = new ContactUsModel({ name, mobno, email, topic, message })
        await postData.save()
        res.send({ "msg": "Data submitted" })

    } catch (error) {
        console.log(error);
        res.send({ "msg": "Something went wrong" })
    }
});

module.exports = {
    route
}


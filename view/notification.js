const TwilioProvider = require("../provider/twilio.provider")
const express = require("express")
const app = express()

app.post("/send_whatsapp_trailer",async function(req,res)
{
    try {
        //console.log(req.body.usuarios)
        var result = await TwilioProvider.sendWhatsApp(req.body.usuarios,req.body.body)
        res.status(200).json(result)
    }catch (e) {
        res.status(200).json({errorMessage:e.toString(),errorCode:666})
    }
})


app.post("/send_email_trailer",async function(req,res)
{
    //console.log(req.body)

    try {
        var result = await TwilioProvider.sendGmail(req.body.usuarios,req.body.html_content,req.body.subject)
        res.status(200).json({status_code:result.code == 200 ? 200 : 400,msm:result.msm})
    }catch (e) {
        res.status(200).json({status_code:400,msm:e.toString()})
    }
})

module.exports = app

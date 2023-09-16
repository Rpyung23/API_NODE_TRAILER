const accountSid = 'AC1114314f4b2cb9f365ddc6128d1ed635';
const authToken = '28bbd43934ca2d8c0f9846a057c59fef';
const client = require('twilio')(accountSid, authToken);

const {validacion_phone,validarCorreoElectronico} = require("../util/validacion")
const nodemailer = require("nodemailer");
const NUMERO_TELEFONO_WHATSAPP = 'whatsapp:+14155238886'
/**GOOGLE GUAMAN      udtvzelfzbotcobj  **/

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "trailermovil66@gmail.com",
        pass: 'nrpqbljogyncqnnt'
    }
});
class TwilioProvider
{
    static async sendWhatsApp(usuarios,body)
    {
        //console.log(usuarios)
        try{
            for (var i =0;i<usuarios.length;i++)
            {
                //var respuesta = null
                if(validacion_phone(usuarios[i]))
                {
                    console.log(usuarios[i] +" : VALIDO")
                    await client.messages
                        .create({
                            body: body,
                            from: NUMERO_TELEFONO_WHATSAPP,
                            to: usuarios[i]
                        })

                }else {
                    console.log(usuarios[i] + " NO VALIDO")
                }

            }
            return {errorMessage:null,errorCode:null}
        }catch (e) {
            return {errorMessage:e.toString(),errorCode:666}
        }
    }

    static async sendGmail(usuarios_,html,subject)
    {
        let usuarios = []
        for (var i = 0;i<usuarios_.length;i++)
        {
            if(validarCorreoElectronico(usuarios_[i]))
            {
                usuarios.push(usuarios_[i])
            }
        }

        try {
            const info = await transporter.sendMail({
                from: '"TRAILER MOVIL 🎊" <foo@example.com>', // sender address
                to: usuarios, // list of receivers
                subject: subject, // Subject line
                html: html, // html body
            });
            return {code:200,msm:"ok"}
        }catch (e) {
            return {code:400,msm:e.toString()}
        }

    }
}

module.exports = TwilioProvider
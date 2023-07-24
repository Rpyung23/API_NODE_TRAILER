const PhoneNumber = require('libphonenumber-js');
let validacion_phone = (phone)=>
{
    try {
        // Parsear el número de teléfono utilizando el formato internacional
        const phoneNumber = PhoneNumber.parsePhoneNumberFromString(phone, 'ZZ');

        if (phoneNumber && phoneNumber.isValid()) {
            return true
        } else {
            return false
        }
    } catch (error) {
        return false
    }
}

let validarCorreoElectronico = (correo) =>{
    // Expresión regular para validar el formato del correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(correo);
}

module.exports = {validacion_phone,validarCorreoElectronico}
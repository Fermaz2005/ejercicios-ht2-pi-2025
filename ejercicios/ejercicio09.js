"use strict";
// Paso 3: Crear variable de tipo Usuario
const usuarioActual = {
    nombre: 'Jonatan',
    edad: 19,
    activo: true,
    correo: 'jonatan@example.com'
};
// Paso 4: Implementar función loguear
function loguear(info) {
    const correoValido = info.correo.includes('@') && info.correo.includes('.');
    const claveValida = info.clave.length >= 6;
    const recaptchaValido = info.recaptcha === true;
    if (correoValido && claveValida && recaptchaValido) {
        console.log('Acceso permitido');
    }
    else {
        console.log('Datos inválidos');
    }
}
// Paso 5: Llamar función con datos de prueba
const datosLogin = {
    correo: 'correo@example.com',
    clave: '123456',
    recaptcha: true
};
loguear(datosLogin);

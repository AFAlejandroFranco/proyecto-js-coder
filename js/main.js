let saludo = alert("Hola,gracias por visitar nuestra pagina web!!")
let confirmar = confirm(" Estas registrado?")
let usuarios = [{ nombre: "luca", email: "arias@gmail.com", edad: 20, clave: 5555 }]

function registrarse() {

    const usuario = { nombre: prompt("cual es tu nombre?"), email: prompt("cual es tu email?"), edad: parseInt(prompt("cuantos años tenes?")), clave: parseInt(prompt("contraseña, solo puede ser de tipo numerico")) }
    usuarios.push(usuario)

}

function ingresar() {

    let i = 0
    while (i == 0) {
        let emailUsuario = prompt("ingrese su Email...")
        let claveUsuario = parseInt(prompt("ingrese su contraseña.."))
       
        for (usuario of usuarios) {
            let emailCorrecto = usuario.email
            let claveCorrecta = usuario.clave
            let nombreUsuario = usuario.nombre

            if (emailCorrecto == emailUsuario && claveCorrecta == claveUsuario) {
                alert("Bienbenido " + nombreUsuario + " nos alegra tenerte de vuelta")
                i++
            }
            else if(emailCorrecto !== emailUsuario){
                alert("email incorrecto")
            }
            else if(claveCorrecta !== claveUsuario){
                alert("la clave es incorrecta")
            }
            else {
                alert("tu usuario y contraseña son incorrectos")
            }
        }
    }


}

if (confirmar == false) {
    alert("Hola te vamos a pedir algunos datos para que puedas registrarte en nuestra base de datos")

    registrarse()

    alert("gracias por registrarte ahora vamos a pedirte que ingreses con tu usuario...")

    ingresar()
}

else {
    ingresar()
}
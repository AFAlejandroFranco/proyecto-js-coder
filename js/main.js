let usuarios=[]

class Usuario{
    static id=0
    constructor(nombreUsuario, email,contraseña){
        this.id=++ Usuario.id,
        this.nombreUsuario=nombreUsuario,
        this.email=email,
        this.contraseña=contraseña
    }

}


// Esta es la parte de registrate

let clicks=document.getElementById("regis")
let formu=document.getElementById("form-contain")
let contador=0



clicks.onclick = () =>{
    mail.remove ()
    clave.remove ()
    ingresar.remove ()
    const formulario=document.createElement("form")
    formulario.innerHTML=`<input type="text" placeholder="nombre de ususario" id="name-user">
                <input type="email" placeholder="email" id="mail">
                <input type="password" placeholder="contraseña" id="pasw">
                <button type="button" id="boton">guardar</button>`
                formu.appendChild(formulario)
                
                const botonGuardar = document.getElementById("boton")
                botonGuardar.onclick = () => {
                    carProducto()
                    subirStorage()
                    botonGuardar.type = "submit"
                    formulario.submit()
                }
            }
            
    
//  Esta es la parte de ingresar           


let mail = document.getElementById("email")
let clave = document.getElementById("clave")
let ingresar = document.getElementById("boton-login")
let mensaje=document.getElementById("msj")

ingresar.onclick = () =>{
    recupStorage ()
    let datoUsuario = mail.value
    let datoClave = clave.value
    let comparaUs = usuarios.some ((usuario) => usuario.email == datoUsuario )
    let comparaCl = usuarios.some ((usuario) => usuario.contraseña == datoClave )

    
    

    if (comparaUs && comparaCl ){
        mail.remove ()
        clave.remove ()
        ingresar.remove ()
        clicks.remove ()

        const texto=document.createElement("p")
        mensaje.innerHTML=`ingreso exitoso`
        mensaje.appendChild(texto)


    }else{
        
        const texto=document.createElement("p")
        mensaje.innerHTML=`usuario y/o contraseña incorrecta`
        mensaje.appendChild(texto)
    }

}

            
            // const botonGuardar = document.getElementById("boton")
            // botonGuardar.onclick = () => {
            //     carProducto()
            //     subirStorage()
            //     botonGuardar.type = "submit"
            //     formulario.submit()
            // }

            
            
function carProducto(){
                
     const user=document.getElementById("name-user")
     const mail=document.getElementById("mail")
     const pasw=document.getElementById("pasw")
        
            
     
        const usuario = new Usuario(user.value, mail.value, pasw.value);
        usuarios.push(usuario)
    
}



function subirStorage(){
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}


function recupStorage(){
    usuarios= localStorage.getItem("usuarios")
    usuarios= JSON.parse(usuarios)
}
































// let saludo = alert("Hola,gracias por visitar nuestra pagina web!!")
// let confirmar = confirm(" Estas registrado?")
// let usuarios = [{ nombre: "luca", email: "arias@gmail.com", edad: 20, clave: 5555 }]

// function registrarse() {

//     const usuario = { nombre: prompt("cual es tu nombre?"), email: prompt("cual es tu email?"), edad: parseInt(prompt("cuantos años tenes?")), clave: parseInt(prompt("contraseña, solo puede ser de tipo numerico")) }
//     usuarios.push(usuario)

// }

// function ingresar() {

//     let i = 0
//     while (i == 0) {
//         let emailUsuario = prompt("ingrese su Email...")
//         let claveUsuario = parseInt(prompt("ingrese su contraseña.."))
       
//         for (usuario of usuarios) {
//             let emailCorrecto = usuario.email
//             let claveCorrecta = usuario.clave
//             let nombreUsuario = usuario.nombre

//             if (emailCorrecto == emailUsuario && claveCorrecta == claveUsuario) {
//                 alert("Bienbenido " + nombreUsuario + " nos alegra tenerte de vuelta")
//                 i++
//             }
//             else if(emailCorrecto !== emailUsuario){
//                 alert("email incorrecto")
//             }
//             else if(claveCorrecta !== claveUsuario){
//                 alert("la clave es incorrecta")
//             }
//             else {
//                 alert("tu usuario y/o contraseña son incorrectos")
//             }
//         }
//     }


// }

// if (confirmar == false) {
//     alert("Hola te vamos a pedir algunos datos para que puedas registrarte en nuestra base de datos")

//     registrarse()

//     alert("gracias por registrarte ahora vamos a pedirte que ingreses con tu usuario...")

//     ingresar()
// }

// else {
//     ingresar()
// }
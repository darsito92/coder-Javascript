// localStorage.setItem("nombre","daniel");
// const getItem =localStorage.getItem("nombre");

// //localStorage.clear() elimina todo

// //localStorage.removeItem("nombre"); solo elimina el un key 

// sessionStorage.setItem("nombre","daniel") // solo se ejecuta hasta que cierras la pestaña

console.log("CLASE 11 - login");

const BBDD = [
    {
        usuario: "daniel",
        contraseña: "123patito"
    },
    {
        usuario: "pedro123",
        contraseña: "pedro123"
    },
    {
        usuario: "martin",
        contraseña: "1234567"
    }
  ]

// LOGIN
// PERMITIR LOGUEAR A UN USUARIO, VALIDANDO LAS CREDENCIALES Y EN BASE A ESO, MOSTRAR UNA BIENVENIDA
// SI NO EXISTE, MOSTRAR UN ERROR
// NO PERSISTE EL LOGIN

function verificar(user){
    const contenedor = document.querySelector("#contenedor");
    contenedor.classList.add("bg-green-500")
    contenedor.innerHTML = `<span>Bienvenido sr/sra ${user.usuario} </span>`

}

const isAuth = JSON.parse(localStorage.getItem("user")) // nos trae un objeto o null
if(isAuth){
    const contenedor = document.querySelector("#contenedor");
    contenedor.classList.add("bg-green-500")
    contenedor.innerHTML = `<span>Bienvenido sr/sra ${isAuth.usuario} </span>`
}

const inputUsuario = document.querySelector("#usuario");
const inputPassword = document.querySelector("#password")
const botonIniciar = document.querySelector("#btn-iniciar")

const usuarioALoguear = {
    usuario: '',
    password: ''
}

inputUsuario.addEventListener("input",(e) => { // e -> objeto 
//    console.log(e.target.value) // trae infformacion del NODO - input.value
   usuarioALoguear.usuario = e.target.value
})


inputPassword.addEventListener("input",(e) => {
   usuarioALoguear.password = e.target.value
})


botonIniciar.addEventListener("click",(e)=>{
   const usuarioEncontrado =  BBDD.find((el) => {
        return usuarioALoguear.usuario === el.usuario && usuarioALoguear.password === el.contraseña
    }) // retornar el elemento o undefined

    if(usuarioEncontrado){

        const stringify = JSON.stringify({ usuario: usuarioEncontrado.usuario })
        localStorage.setItem("user", stringify)

        const contenedor = document.querySelector("#contenedor");
        contenedor.classList.add("bg-green-500")
        contenedor.innerHTML = `<span>Bienvenido sr/sra ${usuarioEncontrado.usuario} </span>`

    }else{
        // la parte del usuario no encontrado
        console.log("no se encontro el usuario")
    }

})

// keyup
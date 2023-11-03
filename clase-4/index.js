console.log("clase 4")

//una funcion es un bloque de codigo reutilizable qu se ejecuta

//sintaxis de funcion clasica
//inicializando funcion
function saludar(){
//bloque de codigo a ejecutar
console.log("hola !!")
}

//invocar/ejecutar
saludar();


//funcion anonima 
const funcionAnonima = function(){
    console.log("soy una funcion anonima")
}
funcionAnonima();

//funcion de tipo flecha

const funcionFlecha = ()=> {
    console.log("soy una funcion tipo flecha")
}

funcionFlecha();

// funcion con prametros
function miFuncionConParametros(parametro1,param2,p3){
    console.log(parametro1,"parametro 1")
    console.log(param2,"parametro 2")
    console.log(p3,"parametro 3")
}

miFuncionConParametros(25,"hola soy un parametro",)
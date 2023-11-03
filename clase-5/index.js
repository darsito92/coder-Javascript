console.log("clase 5")


//objetos

//manera facil

const persona = {
    nombre:"daniel", //atributo o propiedad [clave:valor]
    edad:27,
    nacionalidad:"argentino",
    direccion:{
        calle:"Isabel",
        numero:123,
        localidad:{
            nombre:"barraca",
            provincia:"BA AS"
        }
    }
}

persona.edad;
console.log(persona.edad)


//instancia se puede usar un objet muchas veces pero son diferentes entre si
//objetos con constructores
//estatico
function Auto(){

    //this
    this.modelo ="renault";
    this.puertas =3;
    this.año =2022;
    this.estado ="nuevo";
    this.km =25000;
}

const renault = new Auto();
renault.modelo

//dinamico
function Auto2(km,modelo,año,estado,puertas){

    //this
    this.modelo =modelo;
    this.puertas =puertas;
    this.año =año;
    this.estado =estado;
    this.km =km;
}

const ferrari = new Auto2(1500,"468",2023,"nuevo",3);
console.log(ferrari.estado)

//metodos

class Producto{
    constructor(nombre,vencimiento,marca,precio){
        this.nombre=nombre;
        this.vencimiento=vencimiento;
        this.marca=marca;
        this.precio=precio;
    }
    //metodo
    cambiarPrecio(nuevoPrecio){
        this.precio= nuevoPrecio
    }
}

const arroz = new Producto("arroz","12 de octubre","san juan",100)
console.log(arroz.precio)
arroz.cambiarPrecio(200)
console.log(arroz.precio)
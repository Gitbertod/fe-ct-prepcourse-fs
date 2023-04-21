//FUNCION CONSTRUCTORA (FORMA ANTIGUA)

// function Auto(puertas, color, marca, año, ruedas){

//     this.puertas = puertas;
//     this.color = color;
//     this.marca = marca;
//     this.año = año;
//     this.ruedas = ruedas;

//     this.informacion = function(){
//         console.log(`Este es un ${this.marca} de color ${this.color}  `)
//     }
// }

// let miPrimerAuto = new Auto(4,"gris","Tesla",2025,4);

// miPrimerAuto.informacion();

// console.log(miPrimerAuto);
// console.log(miPrimerAuto.marca);

// ------------------ Expresion de clase ------------------ 
// class Auto{
//     constructor(puertas, color, marca, año, ruedas){

//         this.puertas = puertas;
//         this.color = color;
//         this.marca = marca;
//         this.año = año;
//         this.ruedas = ruedas;
//     }

//     informacion(){
//         console.log(`La marca de tu auto es ${this.marca} y viviras feliz en Estados Unidos Gilberto` )
//     }
// }

// let miCarro = new Auto(4,"vinotinto","Tesla",2026,4);

// miCarro.informacion();

// console.log(miCarro);
// console.log(miCarro.marca);


// class Football{
//     constructor(jugador) {
//         this.jugador = jugador;
//     }

//     obtenerNombre(){
//         console.log(this.jugador)
//     }
// }

// let argentina = new Football("Messi");
// let brasil = new Football("Ronaldinho");

// argentina.obtenerNombre();
// brasil.obtenerNombre();

let n1 = 10;
let n2 = 5;

let resultado = n1 && n2;

console.log(resultado)

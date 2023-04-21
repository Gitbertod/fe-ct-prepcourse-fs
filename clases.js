// //Funcion constructora
// function Auto(puertas, color, marca, año, ruedas) {
//     this.puertas = puertas;
//     this.color = color;
//     this.marca = marca;
//     this.año = año;
//     this.ruedas = ruedas;

//     this.informacion = function () {
//         console.log(`Este es un ${marca} del año ${año} de color ${color}`)
//     }
// }

// let miAuto = new Auto(4, "Negro", "Tesla", 2026, 4);
// miAuto.informacion();


//EXPRESION DE CLASE

class Auto {
    constructor(puertas, color, marca, año, ruedas) {
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.año = año;
        this.ruedas = ruedas;

    }

    features() {
        console.log("Tu primer carro en europa sera un " + this.marca)
    }
}

let miSegundoAuto = new Auto(4, "gris", "Renault", 2025, 4);
//miSegundoAuto.features();

class AllTerrain extends Auto{
    constructor(puertas, color, marca, año,ruedas, transmition) {
        super(puertas, color, marca, año,ruedas)
        this.transmition = transmition;
    }

    showTransmition(){
        console.log(`Tu ${this.marca} tiene transmision ${this.transmition}`)
    }
}

let allTerrain = new AllTerrain(4,"Rojo","Jeep",2025,4,"4x4");

allTerrain.showTransmition()

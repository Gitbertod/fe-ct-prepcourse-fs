class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}.Tengo ${this.edad}`);
    }
}

class Programador extends Persona {
    constructor(nombre, edad, añosDeExperiencia) {
        super(nombre, edad);

        this.añosDeExperiencia = añosDeExperiencia;
    }
    codear() {
        console.log(`Soy ${this.nombre} codeo desde hace ${this.añosDeExperiencia} años`);
    }
}
var martin = new Persona("Martin", 26);
var programador = new Programador("Gilberto",36,2);

martin.saludar()
programador.codear();
programador.saludar();
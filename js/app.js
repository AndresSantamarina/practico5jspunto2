/*
2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.

*/
let nuevaPersona;
const btnMostrarGeneracion = document.querySelector('.btn-outline-success');
const btnMayorEdad = document.querySelector('.btn-outline-warning');
const formularioPersona = document.querySelector('form');


class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
        this._nombre = nombre;
        this._edad = edad;
        this._dni = dni;
        this._sexo = sexo;
        this._peso = peso;
        this._altura = altura;
        this._anioNacimiento = anioNacimiento;
    }

    get nombre() {
        return this._nombre;
    }
    get edad() {
        return this._edad;
    }
    get dni() {
        return this._dni;
    }
    get sexo() {
        return this._sexo;
    }
    get peso() {
        return this._peso;
    }
    get altura() {
        return this._altura;
    }
    get anioNacimiento() {
        return this._anioNacimiento;
    }

    set nombre(nuevoNombre) {
        if (nuevoNombre !== '') {
            this._nombre = nuevoNombre;
        } else {
            alert("Ingrese su nombre")
        }
    }
    set edad(nuevoEdad) {
        if (Number.isInteger(nuevoEdad) && nuevoEdad > 0) {
            this._edad = nuevoEdad;
        } else {
            alert("Ingrese una edad válida")
        }
    }
    set dni(nuevoDni) {
        if (Number.isInteger(nuevoDni) && nuevoDni > 9999999) {
            this._dni = nuevoDni;
        } else {
            alert('Ingrese un DNI válido')
        }
    }
    set sexo(nuevoSexo) {
        if (nuevoSexo === 'H' || nuevoSexo === 'M') {
            this._sexo = nuevoSexo;
        } else {
            alert('Ingrese "H" para hombre o "M" para mujer')
        }
    }
    set peso(nuevoPeso) {
        if (Number.isInteger(nuevoPeso) && nuevoPeso > 0) {
            this._peso = nuevoPeso;
        } else {
            alert("Ingrese un peso válido")
        }
    }
    set altura(nuevoAltura) {
        if (nuevoAltura !== '') {
            this._altura = nuevoAltura;
        } else {
            alert("Ingrese una altura válida")
        }

    }
    set anioNacimiento(nuevoAnioNacimiento) {
        if (Number.isInteger(nuevoAnioNacimiento) && nuevoAnioNacimiento >= 1930) {
            this._anioNacimiento = nuevoAnioNacimiento;
        } else {
            alert("Ingrese un año de nacimiento válido")
        }
    }

    mostrarGeneracion() {
        if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
            alert(`La persona pertenece a la generación "Silent Generation" y el rasgo característico es la austeridad.`)
        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
            alert(`La persona pertenece a la generación "Baby Boom" y el rasgo característico es la ambición.`)
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
            alert(`La persona pertenece a la generación "Generación X" y el rasgo característico es la obsesión por el éxito.`)
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
            alert(`La persona pertenece a la generación "Generación Y" y el rasgo característico es la frustración.`)
        }
        else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
            alert(`La persona pertenece a la generación "Generación Z" y el rasgo característico es la irreverencia.`)
        }
    }

    esMayorDeEdad() {
        if (this.edad > 17) {
            alert(`La persona es mayor de edad`)
        } else {
            alert(`La persona es menor de edad`)
        }
    }

    mostrarDatos() {
        document.write(`<ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>DNI: ${this.dni}</li>
        <li>Sexo: ${this.sexo}</li>
        <li>Peso: ${this.peso} kg</li>
        <li>Altura: ${this.altura} metros</li>
        <li>Año de nacimiento: ${this.anioNacimiento}</li>
        </ul>`)
    }
}

function crearPersona(e) {
    e.preventDefault();
    const inputNombre = document.getElementById('inputNombre');
    const inputEdad = document.getElementById('inputEdad');
    const inputDNI = document.getElementById('inputDNI');
    const inputSexo = document.getElementById('inputSexo');
    const inputPeso = document.getElementById('inputPeso');
    const inputAltura = document.getElementById('inputAltura');
    const inputAnioNacimiento = document.getElementById('inputAnioNacimiento');

    nuevaPersona = new Persona(inputNombre.value, parseInt(inputEdad.value), parseInt(inputDNI.value), inputSexo.value, parseInt(inputPeso.value), inputAltura.value, parseInt(inputAnioNacimiento.value));
    formularioPersona.reset();
    console.log(nuevaPersona)

}

formularioPersona.addEventListener('submit', crearPersona);

//No podía llamar a los métodos que necesitaba, y después de investigar, he encontrado que la única forma es usando una función anónima, pero todavía no entiendo muy bien por qué
btnMostrarGeneracion.addEventListener('click', function () {
    nuevaPersona.mostrarGeneracion();
});
btnMayorEdad.addEventListener('click', function () {
    nuevaPersona.esMayorDeEdad();
});


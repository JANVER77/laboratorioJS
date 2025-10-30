// Ejercicio 1: Calculadora de propinas


function calcularPropina(total, porcentaje) {

    total += total * porcentaje / 100;

    return total;
}

console.log(calcularPropina(500000, 15));

// Ejercicio 2: Validar contraseña

const input = require("prompt-sync")();

function validarContraseña(pass) {
    valido = /\d/.test(pass) && /[A-Z]/.test(pass) && pass.lenght >= 8;
    return valido;
};

pass = validarContraseña(input("Ingrese una contraseña: "));
if (pass) {
    console.log("Contraseña valida");
}else{
    console.log("No es una contraseña segura");
}

// Ejercicio 3: Buscar producto

const productos = [
    { nombre: "Tablet", marca: "Lenovo", precio: 850000, cantidad: 0 },
    { nombre: "Movil", marca: "Huawei", precio: 1500000, cantidad: 5 },
    { nombre: "smartwatch", marca: "samsung", precio: 2000000, cantidad: 15 }
]

function buscarProduct(nombre, inventario) {
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].nombre === nombre) {
            console.log(nombre, " se encuentra en el inventario");
            return true;
        } else {

            console.log(nombre, " el producto no lo tenemos");
            return false;
        }

    }
}


console.log(buscarProduct("Tablet", productos));

// Ejercicio 4: Calcular promedio de notas
notas = [4.5, 5, 3.2, 2.5];

function calcularPromedio(n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += n[i];
    }
    let promedio = sum / n.length;
    return promedio.toFixed(2);
};

console.log(calcularPromedio(notas));

// Ejercicio 5: Flitrar usuarios por Edad
    const users = [
        {nombre: "Pedro", edad:25},
        {nombre: "Maria", edad:36},
        {nombre: "Sebastian", edad:17},
        {nombre: "Sara", edad:10},
        {nombre: "Valeria", edad:56},
        {nombre: "Valentina", edad:2},
        {nombre: "Nicolas", edad:9},
        {nombre: "Martha", edad:31},
        {nombre: "Ximena", edad:29},
        {nombre: "Gloria", edad:42},
        {nombre: "Fernando", edad:60},
        {nombre: "Juan", edad:33},
        {nombre: "Danna", edad:18},
        {nombre: "Adrian", edad:43},
        {nombre: "German", edad:27},
    ];


    function filtrarUsuarios(usuarios, edadMinima){
        userlist = [];
        for (let i = 0; i < usuarios.length; i++){
            if (usuarios[i].edad > edadMinima){
                userlist.push(usuarios[i].nombre);                
        }}
        return userlist
    }
    let edadMin = parseInt(input("Ingrese lo edad minima deseada: \n"))

    console.log(filtrarUsuarios(users, edadMin));

// Ejercicio 6: Contador de Palabras

    function contarPalabras(cadena){
        
    }

// Ejercico 7: Simulador de cajero Automatico

// Ejercico 8: Cambio de Moneda





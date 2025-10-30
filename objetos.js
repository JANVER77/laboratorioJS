let usuario = {
    "name":"Ana",
    "edad":"42",
    "profesion": "Desarrolladora",
    "gustos":["carros", "lectura"]};
                        

usuario.gustos.push("Correr");
console.log(usuario);
usuario.pais = "Colombia";

console.log(usuario);

delete usuario.pais;


console.log(Object.keys(usuario));

usuario = "lo cambie a un string";
console.log(usuario);

edad = 19;

esCierto = 0 > edad > 18;

console.log(esCierto);




function esMayor(edad){
    let mayor = edad >= 18;
    return mayor;
}


edad = 17;
let mayor = esMayor(edad);
let puedesConducir = mayor;

if (mayor){
    console.log("Eres mayor, puedes conducir")}

else{
    console.log("Eres menor")};
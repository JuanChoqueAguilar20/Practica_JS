//Ejercicio 1 Condicional

let temperaturaLunes, temperaturaMartes, temperaturaMiercoles, temperaturaJueves, temperaturaViernes
let promedioTemperaturas;

temperaturaLunes = parseFloat(prompt("Ingrese la temperatura del lunes en grados Celsius:"))
temperaturaMartes = parseFloat(prompt("Ingrese la temperatura del martes en grados Celsius:"))
temperaturaMiercoles = parseFloat(prompt("Ingrese la temperatura del miércoles en grados Celsius:"))

promedioTemperaturas = (temperaturaLunes + temperaturaMartes + temperaturaMiercoles) / 3

// Verificar si el promedio supera los 23 grados
if (promedioTemperaturas > 23) {
    alert("ALERTA por ola de calor")
} else {
    alert("Temperatura normal")
}


//Ejercicio 2 Bucle

/*Crear un algoritmo que eleve un número a la "N" 
potencia empleando la estructura While*/

let num = prompt("Ingrese un número:")
let potencia = prompt("Ingrese la potencia:")
let resultado = 1

num = parseFloat(num)
potencia= parseInt(potencia)

let contador = 0

while (contador < potencia) {
  resultado *= num
  contador++
}

alert(num + "^" + potencia + " = " + resultado)



//Ejercicio 3 Interactivo

function convertir(){
    let valor = parseInt(document.getElementById("valor").value)
    let resultado = 0
    let dolar = 349.93
    let euro = 377.38
    if(document.getElementById("uno").checked){
        resultado = valor / dolar
        alert("El cambio de moneda es: USD " + resultado.toFixed(2))
    }
    else if(document.getElementById("dos").checked){
        resultado = valor / euro
        alert (" El cambio en Euros es: EUR " + resultado.toFixed(2))
    }
    else{
        alert("Escoge un tipo de cambio, por favor")
    }
 

}
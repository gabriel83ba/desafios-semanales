let titulo = document.querySelector("title");
console.log(titulo.innerHTML);

let nombreCompleto = document.querySelectorAll("dd")

let nombre1 = nombreCompleto[0]
let nombre2 = nombreCompleto[1]
let nombre3 = nombreCompleto[2]
let nombre4 = nombreCompleto[3]

let nombre5 = nombreCompleto[4]
let nombre6 = nombreCompleto[5]
let nombre7 = nombreCompleto[6]
let nombre8 = nombreCompleto[7]

let imprimirNombre1 = nombre1.innerText + " " + nombre2.innerText + " " + nombre3.innerText.toUpperCase() + " " + nombre4.innerText.toUpperCase() + " ";
imprimirNombre1 = imprimirNombre1.replace("  ", " ")

let imprimirNombre2 = nombre5.innerText + " " + nombre6.innerText + " " + nombre7.innerText.toUpperCase() + " " + nombre8.innerText.toUpperCase() + " ";
imprimirNombre2 = imprimirNombre2.replace("  ", " ")

console.log("-----\nIntegrante 1: " + imprimirNombre1.trim() + "\nIntegrante 2: " + imprimirNombre2.trim() + "\n-----")

if (nombre1.innerText == nombre5.innerText) {
    console.log("Hubo coincidencia");
    let color = prompt("Color");
    nombre1.style.color = color
    nombre5.style.color = color
} else {
    if (nombre1.innerText == nombre6.innerText) {
        console.log("Hubo coincidencia");
        let color = prompt("Color");
        nombre1.style.color = color
        nombre6.style.color = color
    } else {
        if (nombre2.innerText == nombre5.innerText) {
            console.log("Hubo coincidencia");
            let color = prompt("Color");
            nombre2.style.color = color
            nombre5.style.color = color
        } else {
            if (nombre2.innerText == nombre6.innerText && nombre2.innerText != "") {
                console.log("Hubo coincidencia");
                let color = prompt("Color");
                nombre2.style.color = color
                nombre6.style.color = color
            } else { console.log("No hubo coincidencia"); }
        }
    }

}

let compape = window.confirm("¿Comparar apellidos?");
if (compape == true) {
    if ((nombre3.innerText == nombre7.innerText)) {
        console.log("Hubo coincidencia");
        let color = prompt("Color");
        nombre3.style.color = color
        nombre7.style.color = color
    } else {
        if (nombre3.innerText == nombre8.innerText) {
            console.log("Hubo coincidencia");
            let color = prompt("Color");
            nombre3.style.color = color
            nombre8.style.color = color
        } else {
            if (nombre4.innerText == nombre7.innerText) {
                console.log("Hubo coincidencia");
                let color = prompt("Color");
                nombre4.style.color = color
                nombre7.style.color = color
            } else {
                if (nombre4.innerText == nombre8.innerText && nombre4.innerText != "") {
                    console.log("Hubo coincidencia");
                    let color = prompt("Color");
                    nombre4.style.color = color
                    nombre8.style.color = color
                } else { console.log("No hubo coincidencia"); }
            }
        }

    }
}
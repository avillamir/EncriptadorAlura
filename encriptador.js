let campoTexto = document.querySelector("#textoEncriptar");
let campoMensaje = document.querySelector("#textoModificado");

let matriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
    ];


function encriptarTexto(){
    let texto = encriptar(campoTexto.value);
    console.log(texto);
    campoMensaje.value = texto;
}

function encriptar(oracionEncriptada){
    for(let i = 0; i < matriz.length; i++){
        if(oracionEncriptada.includes(matriz[i][0])){
            oracionEncriptada = oracionEncriptada.replaceAll(
                matriz[i][0],
                matriz[i][1]

            )
        }
    }
    return oracionEncriptada
}


function desencriptarTexto() {
    let textoDesencriptado = desencriptar(campoTexto.value);

    campoMensaje.value = textoDesencriptado;
}



function desencriptar(oracionEncriptada1) {
    for (let i = 0; i < matriz.length; i++) {
        if (oracionEncriptada1.includes(matriz[i][1])) {
            oracionEncriptada1 = oracionEncriptada1.replaceAll(
                matriz[i][1],
                matriz[i][0]
            );
        }
    }


    return oracionEncriptada1; // Asignar el resultado al campo de texto original
}
function BorrarTexto() {
    campoMensaje.select();
    navigator.clipboard.writeText(campoMensaje.value);
   document.querySelector("#textoModificado").value = ""; // Limpiar el campo de texto de salida
    document.querySelector("#textoEncriptar").value = ""; // Limpiar el campo de texto de entrada
}


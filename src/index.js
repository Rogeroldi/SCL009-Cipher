let textoingresado = document.getElementById("textocifrado");

document.getElementById("codificando").addEventListener("click"), () =>{
    let toEncode = document.getElementById("textoporcifrar").value;
    toEncode.toUpperCase();
    let offSet = parseInt(document.getElementById("desplazamiento").value);
    textoCifrado.innerHTML = cipher.encode(offSet,toEncode);
}









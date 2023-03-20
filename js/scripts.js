function saludar(){
    alert("hola querida mascota");
}

function presentarse(){
    alert("te saluda Josue");

}

const botonSaludo = document.getElementById("saludo");
botonSaludo.addEventListener("click", presentarse);
    

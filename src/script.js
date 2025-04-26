function ajustarTexto() {
    let width = window.innerWidth;

    if (width <= 475) {
        document.getElementById("name").innerText = "Victor da Silva Santos";
    } else {
        document.getElementById("name").innerText = "Victor da Silva Santos | ";
    }
}

// Executa no carregamento
ajustarTexto();

// Executa sempre que redimensionar a tela
window.addEventListener("resize", ajustarTexto);
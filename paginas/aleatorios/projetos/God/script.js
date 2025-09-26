function openModal(src) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

/* Mostra texto*/

function mostrarTextoGradualmente(elemento) {
    const textoCompleto = elemento.getAttribute('data-text'); // Pega o texto do atributo data-text
    let indice = 0;
    elemento.innerHTML = ""; // Limpa o conteúdo anterior

    function adicionarProximoCaractere() {
        if (indice < textoCompleto.length) {
            elemento.innerHTML += textoCompleto.charAt(indice); // Adiciona o próximo caractere
            indice++;
            setTimeout(adicionarProximoCaractere, 100); // Controla a velocidade de exibição
        }
    }

    adicionarProximoCaractere();
}

/* Exibir a fórmula do Amor */


window.onload = function () {
    const elementosTexto = document.querySelectorAll('.dynamic-text');
    elementosTexto.forEach((elemento) => {
        mostrarTextoGradualmente(elemento);
    });
};

function seletorPrato(prato) {
    let itemEscolhido = document.querySelector(".prato").querySelector(".escolhido")

    if (itemEscolhido !== null) {
        itemEscolhido.classList.remove("escolhido")
        itemEscolhido.querySelector("ion-icon").classList.add("escondido")
    }
    prato.classList.add("escolhido");
    prato.querySelector("ion-icon").classList.remove("escondido")
}

function seletorBebida(bebida) {
    let itemEscolhido = document.querySelector(".bebida").querySelector(".escolhido")

    if (itemEscolhido !== null) {
        itemEscolhido.classList.remove("escolhido")
        itemEscolhido.querySelector("ion-icon").classList.add("escondido")
    }
    bebida.classList.add("escolhido");
    bebida.querySelector("ion-icon").classList.remove("escondido")
}

function seletorSobremesa(sobremesa) {
    let itemEscolhido = document.querySelector(".sobremesa").querySelector(".escolhido")

    if (itemEscolhido !== null) {
        itemEscolhido.classList.remove("escolhido")
        itemEscolhido.querySelector("ion-icon").classList.add("escondido")
    }
    sobremesa.classList.add("escolhido");
    sobremesa.querySelector("ion-icon").classList.remove("escondido")
}


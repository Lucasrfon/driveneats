let nomePrato;
let preçoPrato;
let nomeBebida;
let preçoBebida;
let nomeSobremesa;
let preçoSobremesa;
let total;
let nome;
let endereço

function seletorPrato(prato) {
    let itemEscolhido = document.querySelector(".prato").querySelector(".escolhido")

    if (itemEscolhido !== null) {
        itemEscolhido.classList.remove("escolhido")
        itemEscolhido.querySelector("ion-icon").classList.add("escondido")
    }
    prato.classList.add("escolhido");
    prato.querySelector("ion-icon").classList.remove("escondido")
    nomePrato = prato.querySelector("h3").innerText
    preçoPrato = prato.querySelector("h4").innerText.replace(",", ".")
    preçoPrato = preçoPrato.replace("R$ ", "")

    if (nomePrato && nomeBebida && nomeSobremesa) {
        document.querySelector(".aberto").classList.add("escondido")
        document.querySelector(".fechado").classList.remove("escondido")
    }
}

function seletorBebida(bebida) {
    let itemEscolhido = document.querySelector(".bebida").querySelector(".escolhido")

    if (itemEscolhido !== null) {
        itemEscolhido.classList.remove("escolhido")
        itemEscolhido.querySelector("ion-icon").classList.add("escondido")
    }
    bebida.classList.add("escolhido");
    bebida.querySelector("ion-icon").classList.remove("escondido")
    nomeBebida = bebida.querySelector("h3").innerText
    preçoBebida = bebida.querySelector("h4").innerText
    preçoBebida = bebida.querySelector("h4").innerText.replace(",", ".")
    preçoBebida = preçoBebida.replace("R$ ", "")

    if (nomePrato && nomeBebida && nomeSobremesa) {
        document.querySelector(".aberto").classList.add("escondido")
        document.querySelector(".fechado").classList.remove("escondido")
    }
}

function seletorSobremesa(sobremesa) {
    let itemEscolhido = document.querySelector(".sobremesa").querySelector(".escolhido")

    if (itemEscolhido !== null) {
        itemEscolhido.classList.remove("escolhido")
        itemEscolhido.querySelector("ion-icon").classList.add("escondido")
    }
    sobremesa.classList.add("escolhido");
    sobremesa.querySelector("ion-icon").classList.remove("escondido")
    nomeSobremesa = sobremesa.querySelector("h3").innerText
    preçoSobremesa = sobremesa.querySelector("h4").innerText
    preçoSobremesa = sobremesa.querySelector("h4").innerText.replace(",", ".")
    preçoSobremesa = preçoSobremesa.replace("R$ ", "")

    if (nomePrato && nomeBebida && nomeSobremesa) {
        document.querySelector(".aberto").classList.add("escondido")
        document.querySelector(".fechado").classList.remove("escondido")
    }
}

function fechar() {
    total = Number(preçoPrato) + Number(preçoBebida) + Number(preçoSobremesa)
    nome = prompt("Qual o seu nome?")
    endereço = prompt("Qual o endereço de entrega?")
    let texto = encodeURIComponent(`Olá, gostaria de fazer o pedido:
- Prato: ${nomePrato}
- Bebida: ${nomeBebida}
- Sobremesa: ${nomeSobremesa}
Total: R$ ${Number(total.toFixed(2))}
        
Nome: ${nome}
Endereço: ${endereço}`);
    
    window.open(`https://wa.me/5571987550934?text=${texto}`)
}
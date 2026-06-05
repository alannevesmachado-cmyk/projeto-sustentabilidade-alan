// Lista expandida de dicas sobre sustentabilidade
const dicas = [
    "Economize água: feche a torneira enquanto escova os dentes!",
    "Apague as luzes ao sair de um cômodo para economizar energia elétrica.",
    "Evite sacolas plásticas: use sacolas de pano (ecobags) quando for ao mercado.",
    "Reutilize a água da máquina de lavar roupas para limpar o quintal ou a calçada.",
    "Pratique a separação do lixo orgânico do lixo reciclável na sua casa.",
    "Evite o desperdício de alimentos: planeje as refeições e aproveite as sobras de forma criativa.",
    "Prefira produtos de empresas locais para diminuir a poluição causada pelo transporte de mercadorias.",
    "Desligue os aparelhos da tomada quando for passar muito tempo sem usar (como a TV ou o computador).",
    "Evite imprimir papéis desnecessariamente. Sempre que puder, use documentos digitais."
];

// Pegando os elementos do HTML
const botao = document.getElementById("botao-dica");
const textoDica = document.getElementById("texto-dica");

// Função que muda a dica na tela
botao.addEventListener("click", function() {
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    textoDica.textContent = dicas[indiceAleatorio];
});
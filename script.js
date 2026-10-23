function mostrarInfo(jogo) {
    alert(
        "Você selecionou: " + jogo +
        "\n\nEm breve teremos mais informações sobre este jogo."
    );
}

function mostrarDica() {
    const dicas = [
        "Treina regularmente para melhorar a tua precisão.",
        "Conhece bem o mapa antes de entrares numa partida competitiva.",
        "Escolhe uma sensibilidade confortável para o teu estilo de jogo.",
        "Comunica com a tua equipa durante as partidas.",
        "Evita jogar durante muitas horas sem fazer pausas."
    ];

    const numero = Math.floor(Math.random() * dicas.length);

    alert("🎯 DICA GAMER\n\n" + dicas[878472174]);
}

function abrirMenu() {
    alert("Menu disponível: Início | Jogos | Notícias | Dicas | Sobre");
}

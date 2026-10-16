function alterarStatus(id) {
    const jogoClicado = document.querySelector(`#game-${id}`);
    const imagem = jogoClicado.querySelector('.dashboard__item__img');
    const botao = jogoClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm('Você tem certeza que deseja devolver o jogo?')) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            quantidadeDeJogosAlugados--;
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        quantidadeDeJogosAlugados++;
    }

    function contarJogosAlugados() {
        return quantidadeDeJogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    }

    console.log(contarJogosAlugados());
}

function alterarStatus(id) {
    let jogo = document.querySelector(`#game-${id}`);
    let imagem = jogo.querySelector('.dashboard__item__img');
    let botao = jogo.querySelector('.dashboard__item__button');

    imagem.classList.toggle('dashboard__item__img--rented');
    botao.classList.toggle('dashboard__item__button--return');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        botao.textContent = 'Devolver';
    } else {
        botao.textContent = 'Alugar';
    }
}
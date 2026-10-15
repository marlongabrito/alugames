# AluGames

Aplicação web para o aluguel de jogos de tabuleiro (*boardgames*). Cada jogo aparece em um card com a capa e um botão para alugar ou devolver o item.

## Funcionalidades

- Lista de jogos disponíveis em formato de cards
- Botão **Alugar** / **Devolver** em cada jogo
- Alteração visual da capa e do botão conforme o status do jogo
- Sem dependências externas

## Tecnologias

- HTML
- CSS
- JavaScript

## Como usar

1. Clone o repositório:
```bash
   git clone https://github.com/marlongabrito/alugames.git
```
2. Abra o arquivo `index.html` no navegador.
3. Clique em **Alugar** para marcar um jogo como alugado.
4. Clique em **Devolver** para torná-lo disponível novamente.

## Exemplo

| Jogo           | Status inicial | Ação     | Novo status |
|----------------|----------------|----------|-------------|
| Monopoly       | Disponível     | Alugar   | Alugado     |
| Ticket to Ride | Disponível     | Alugar   | Alugado     |
| Takenoko       | Alugado        | Devolver | Disponível  |

## Estrutura do projeto

```
alugames/
├── css/
│   └── main.css
├── img/
│   ├── logo.svg
│   ├── fade_bar.svg
│   ├── hachuras.svg
│   ├── monopoly.png
│   ├── ticket_to_ride.png
│   └── takenoko.png
├── js/
│   └── app.js
└── index.html
```

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Marlon Brito: [@marlongabrito](https://github.com/marlongabrito)

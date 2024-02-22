# Soccer Team Management Website

Este projeto é um site de gerenciamento de equipes de futebol, desenvolvido utilizando React. Permite adicionar jogadores por meio de um formulário, exibindo seus detalhes, posição e imagem no campo específico que representa cada time no site.

## Funcionalidade
1. Adição e exclusão de jogadores.
2. Adição e exclusão de times.
3. Edição de jogadores, incluindo a capacidade de favoritar e desfavoritar.
4. Visualização dos jogadores organizados nas respectivas equipes no site.

## Endpoints da API
- GET /players: Retorna a lista de jogadores.
- POST /players: Adiciona um novo jogador.
- PUT /players/:id: Atualiza as informações de um jogador.
- DELETE /players/:id: Deleta um jogador.
- GET /teams: Retorna a lista de times.
- POST /teams: Adiciona um novo time.
- DELETE /teams/:id: Deleta um time.


## Instruções de Uso

1. Execute o aplicativo React usando `npm start` ou `yarn start`.
2. Preencha o formulário para adicionar jogadores à equipe.
3. Visualize os jogadores organizados nas respectivas equipes no site.

## Estrutura de Arquivos

- **`Banner.js`**, **`Botao.js`**, **`CampoTexto.js`**, **`Formulario.js`**, **`Jogador.js`**, **`Select.js`**, **`Time.js`**: Componentes React.
- **`App.js`**: Componente principal, onde os demais são integrados.
- **`App.css`**: Estilos específicos do App.
- **`imagens/`**: Pasta para armazenar as imagens utilizadas no site.

## Link do site no Vercel
https://projeto-futebol-one.vercel.app/

## Fotos do Site
![image](https://github.com/Leonardo-Valerio/Projeto-Futebol/assets/128194207/84170814-2dfe-4605-84fa-1a83463579a9)
![image](https://github.com/Leonardo-Valerio/Projeto-Futebol/assets/128194207/c0d7e0ce-6825-4a03-9c04-43a01a079ba5)
![image](https://github.com/Leonardo-Valerio/Projeto-Futebol/assets/128194207/0eb87667-7f80-4211-8067-be46fea41a94)
![image](https://github.com/Leonardo-Valerio/Projeto-Futebol/assets/128194207/b78daf6b-7c85-4525-9fa5-51df0429253b)
![image](https://github.com/Leonardo-Valerio/Projeto-Futebol/assets/128194207/77f01f46-55d6-4fd4-8d07-ed01d0ebdba8)





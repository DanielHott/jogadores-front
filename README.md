# Front-end da aplicação Jogadores!

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/DanielHott/Pagina-de-Receitas/blob/master/LICENSE)

### Disponível em  [Jogadores](https://jogadores-front-jw4s.vercel.app/)!

#### Este é o repositório do front-end da aplicação postada em https://jogadores-front-jw4s.vercel.app/, confira o repositório do back-end em: https://github.com/DanielHott/jogadores-back

## Tecnologias utilizadas no front-end:

#### React.js, HTML, CSS, Axios e Javascript.

## Aplicação: 

Esta aplicação permite o usuário inserir seu jogador ou sua jogadora favorita e renderizar na tela! Após inserir as informações do jogador(a) e clicar em adicionar,
o jogador(a) é salvo no banco de dados e fica disponível para todos!
#### Tela da aplicação:
![Web 1](https://github.com/DanielHott/imagens/blob/master/jogadoresfront.png)

## Informações inseridas
A aplicação permite que o usuário forneça o nome do jogador(a), a idade, o clube que o jogador(a) está atuando no momento, e permite que insira uma url
de sua foto preferida do jogador(a)! Esta url deve estar no formato .jpg, .png ou .jpeg para que seja inserida corretamente. Ainda permite que tenha mais
informações sobre o atleta ou a atleta redirecionando para páginas dedicadas aos jogadores.

#### Exemplo da utilização:
![Web 1](https://github.com/DanielHott/imagens/blob/master/jogadoresfront2.png)

## Copiando para sua máquina:

Clone o projeto

```bash
  git clone https://github.com/DanielHott/jogadores-front.git
```

Entre no diretório do projeto

```bash
  cd jogadores-front
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```

### Detalhes:

Este front-end recebe uma API que permite obter todos os jogadores disponíveis no banco de dados por meio do fetch, e também permite que adicione um novo usuário por meio de uma requisição do tipo POST. A recuperação das informações é feito por meio do axios. A API foi inteiramente desenvolvida por Daniel Hott.

 ### Desenvolvido por Daniel Hott

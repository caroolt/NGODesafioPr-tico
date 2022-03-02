

<h1 align="center"> Desafio Prático NGO </h1>

![issues](https://img.shields.io/github/issues/caroolt/NGODesafioPratico?color=red) ![license](https://img.shields.io/github/license/caroolt/NGODesafioPratico)

![Banner de pessoas votando](https://user-images.githubusercontent.com/82682093/156283363-a3c602e7-b249-4b8e-ad9f-bf3928ec5378.png)

# 🎉 Descrição do projeto
O objetivo deste projeto é desenvolver uma API para a votações utilizando Node.js e algumas dependências.
## 🛠️ Abrir e rodar o projeto

Após clonar o projeto, basta instalar as dependências e rodar o comando: 
`yarn start`

### ✔️ Técnicas e tecnologias utilizadas
- Node.js v14.17.0
- Express
- mySQL
- Sequelizer


### :hammer: Funcionalidades do projeto

- `Cadastro de Candidatos`: Registro básico de candidatos (sem preocupar com autenticação e cadastros mais complexos com JWT)
- `Pegar todos os candidatos`: Deverá ser possível pegar todos os candidatos
- `Registro de votos`: Registro de votos (Com base no id)
  - Se for bem sucedido, deve "devolver" o ID do candidato junto com o número total de votos que o candidato recebeu (código 200)
  - Se votar em um ID de candidato que não existe, retornará o código 404 com uma mensagem de erro
- `Get All votes de um candidato`:  Deverá ter a possibilidade de "pegar" todos os votos de X candidato com base no id

## Pessoa Desenvolvedora do Projeto

| [<img src="https://avatars.githubusercontent.com/u/82682093?s=400&u=0a46c06b6a1ae04f7acf2f2162187b1a7e4d5d53&v=4" width=115><br><sub>Carolina Teixeira Coelho</sub>](https://github.com/caroolt) | 
| :---: |

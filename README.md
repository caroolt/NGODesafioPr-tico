

<h1 align="center"> Desafio Prático NGO </h1>

![issues](https://img.shields.io/github/issues/caroolt/desafiopraticoNGO?color=red) ![license](https://img.shields.io/github/license/caroolt/desafiopraticoNGO)

![Banner de pessoas votando](https://user-images.githubusercontent.com/82682093/156283363-a3c602e7-b249-4b8e-ad9f-bf3928ec5378.png)

# 🎉 Descrição do projeto
O objetivo deste projeto é desenvolver uma API para votações utilizando Node.js e algumas dependências.

### ✔️ Técnicas e tecnologias utilizadas
- Node.js v14.17.0
- Express
- mySQL
- Sequelize

## 🛠️ Abrir e rodar o projeto
#### 1- Clonar o Projeto
#### 2- Editar o arquivo default.json dentro da pasta config
 - Nesta etapa é necessário que sua máquina tenha e esteja executando o [mySQL](https://dev.mysql.com/downloads/)
 - O usuário e a senha devem ser os usados no mySQL
 
  ![config](https://user-images.githubusercontent.com/82682093/156618162-2c8e5237-d657-4c5a-a0e5-46461bb20a62.png)

#### 3- Instalar todas as dependências
   `yarn install`
   
#### 4- Criar o banco de dados
  - No CMD digite o seguinte comando
  
  `mysql -u root -p -P 3307`
 
  - Para criar o banco de dados você precisa digitar o comando no CMD
  
  mysql>`CREATE DATABASE nome_definido_no_arquivo_de_config;`
  
  - Depois basta passar a utilizar o banco de dados
  
  mysql> `use nome_definido_no_arquivo_de_config`

#### 5- Criar as tabelas
  - Apos ter conectado no banco de dados basta criar a tabela utilizada
  
  `node api/database/createTables.js`

#### 6- Rodar o projeto 
   `yarn start`
 
#### 7- Passo não obrigátorio
   - Na pasta insomnia há disponível o json com os métodos a serem testados. Para usá-los no insomnia basta importar o json e pronto.
   
   _Insomnia é uma ferramenta cliente de API REST, como o Postman, mas tem alguns recursos adicionais, como suporte a GraphQL, gRPC, entre outros._
### :hammer: Funcionalidades do projeto

- `Cadastro de Candidatos`: Registro básico de candidatos (sem preocupar com autenticação e cadastros mais complexos com JWT);
- `Pegar todos os candidatos`: Deverá ser possível listar todos os candidatos;
- `Registro de votos`: Registro de votos (com base no ID)
  - Se for bem sucedido, deve "devolver" o ID do candidato junto com o número total de votos que o candidato recebeu (código 200);
  - Se votar em um ID de candidato que não existe, retornará o código 404 com uma mensagem de erro;
- `Get All votes de um candidato`:  Deve ser possível "pegar" todos os votos de X candidato com base no ID;
- `Deletar um candidato`: Deve ser possível deletar um candidato com base em seu ID

## Pessoa Desenvolvedora do Projeto

| [<img src="https://avatars.githubusercontent.com/u/82682093?s=400&u=0a46c06b6a1ae04f7acf2f2162187b1a7e4d5d53&v=4" width=115><br><sub>Carolina Teixeira Coelho</sub>](https://github.com/caroolt) | 
| :---: |

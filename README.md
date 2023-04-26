# Api - TreeNetwork

Este é o backend da aplicação Contatos - Uma API desenvolvida por Lucas Bueno, estudante do curso Kenzie Academy Brasil! O objetivo dessa aplicação é organizar todos os contatos em um unico só lugar.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```
yarn version  1.22.5 ou superior
nodeJs 16.19.0 ou superior
```

## 🛠️ Construído com

- [TypeScript]() - linguagem de programção
- [Express]() - Framework web
- [Postegresql]() - Banco de dados

## 📌 Versão 1.0.0

## ✒️ Autor

- **Lucas Bueno** - _Desenvolvedor_ - [Linkedin](https://www.linkedin.com/in/lugabusi/)

## Rotas 

## CUSTOMERS
Para a criação de usuário | POST /customers
body: {
    name: "Eduardo",
    email: "edu@mail.com",
    password: "12345678",
    phone: "31954536595"
}

Listar usuário logado | GET /customers
NoBody

Atualizar uduário logado | PATCH /customers
body {
    name: "Edu"
    email: "dudu@mail.com"
    phone: "31985657263"
    password: "1236548"
}

Deletar usuário | DELETE /customers
NoBody

## LOGIN
Para fazer login | POST /login
body {
	"email": "dudu@mail.com",
	"password": "12345678"
}

Para a criação de um contato | POST /contact
body: {
    name: "yuri",
    email: "yuri@mail.com",
    phone: "62954536595"
}

Listar contatos do usuário logado | GET /contact
NoBody

Atualizar contato | PATCH /contact/id
body {
    name: "Cadu"
    email: "Cadu@mail.com"
    phone: "31986523263"
}

Deletar contato | DELETE /contact/id
NoBody


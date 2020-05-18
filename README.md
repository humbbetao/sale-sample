# spotify-example

Made by Humberto Gonçalves

Frontend Developer test - "O Boticario"
Desafio: “Eu revendedor ‘O Boticário’ quero ter benefícios de acordo com o meu volume de vendas”.

Projeto foi separado em server(backend) e app (frontend)

##Backend

Utilizado NodeJS;

entre no diretório server

## Como instalar:

na sua linha de comando, digite:

```
  npm install
```

Isso irá levar alguns minutos para instalar todas as dependencias, após finalizado:

## 1 - Ligar o servidor:

`npm run start`

#Frontend
entre no diretório app

## Como instalar:

na sua linha de comando, digite:

```
  npm install
```

Isso irá levar alguns minutos para instalar todas as dependencias, após finalizado:

Você pode ligar o projeto em modo de desenvolvimento:

## 1 - development mode:

`npm run start`

Gerar build de desenvolvimento && subir local:

## 2 - build development mode:

```
      npm run build:dev
      npx serve -s build
```

Gerar build de produção && subir local:

## 4 - build production mode:

```
      npm run build:prod
      npx serve -s build
```

## 5 - Tests:

Foi feitos testes unitario e integração com jest e enzyme:

`npm run test` - roda os testes sempre escutando as mudanças
`npm run test:coverage` - computa a cobertura do projetoem testes
`npm run test:noWatch`- roda os testes uma vez

## 6 - Tests UI:

Foi feitos testes de ui com cypress:

    `npm run cy:open`  - para abrir o cypress modo visualização
    `npm run cy:run`  - para roda os tests em linha de comando
    `npm run cy:test` - para start os tests em linha de comando e subir o projeto localmente

## 7 - Husky:

Foi adicionado no projeto jusky de pre commit com eslint e prettier

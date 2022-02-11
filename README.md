# Como rodar o projeto

> Para rodar o projeto foram instaladas as bibliotecas globais NPM / React / TypeORM

- no root do projeto rodar: `docker-compose up`
- na pasta `./backend` rodar: `npm i && npm run start`
- após o projeto iniciar e gerar a migração do banco (feita de forma automárica pelo TypeORM)
- rodar: `npm run seed:run` para inserir os dados iniciais
- acessar `./frontend` e rodar: `npm i && npm run start`

Com isso o projeto estará pronto.

# Postman

O arquivo `Teste.postman_collection.json` está na raiz do projeto para importação
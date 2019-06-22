# Backend para a Bibioteca


## Instalação

para instalar execute o comando abaixo

```bash
$ cd /path/of/biblioteca-challenfe/backend
$ npm instal
```

### Utilização

Para que o servidor execute será necessário ter um MongoDb rodando, o modo mais fácil e através de uma docker, para isso execute o comando para criar uma docker de mongoDB

```bash
$ docker run --name some-mongo -p 27017:27017  -d mongo
```

Apos inicie o servidor node.js

```bash
$ cd /path/of/biblioteca-challenfe/backend
$ npm start

Node server is running..
Express server listening on port 3000
Access http://localhost:3000
Successfully connected to the database

```

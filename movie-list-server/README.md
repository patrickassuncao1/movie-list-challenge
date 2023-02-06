# Lista de Filmes - Back-End

## Iniciando a Aplicação - (Passos logo Abaixo)

- Instalar dependências da Aplicação:
```
npm install
```
- Criar um novo arquivo **.env** na raiz do projeto copia do env.example.

## Conexão com o banco (Mysql) - Prisma ORM

- Abrir o arquivo .env e modificar a variável DATABASE_URL pela sua string de conexão do mysql.
- Para mais informaçãoes [Prisma](https://pris.ly/d/connection-strings)

```
DATABASE_URL="mysql://janedoe:mypassword@localhost:3306/mydb"
```

### `npx prisma migrate dev`
Cria as tabelas no banco de dados (rodar as migrations)/ Que estão localizadas em /prisma/migrations.

### `npm run dev`
Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:5000/api-docs](http://localhost:5000/api-docs) para visualizar a documentação da api .

### Orm Utilizada - [Prisma](https://www.prisma.io)

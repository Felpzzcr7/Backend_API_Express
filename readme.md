#topicos importantes


qual a linguagem de programaçao usada no nosso backend?
R: JS

O que é o node?
R: é um runtime para rodar o JS

O que é NPM?
R: é um gerenciador de pacotes para o node, adicionar e remover pacotes, como tambem fazer outras modificações no projeto (Node Package Manager)

O que é o Express?
R: é um framework para o Node que facilita a criação de servidores e APIs.  

o que é api?
R: é uma interface de programação de aplicativos, onde o desenvolvedor pode criar e consumir serviços e dados de outros sistemas.

oque e interface?
R: é a forma como o usuario interage com o sistema, pode ser visual ou de comando, onde o usuario pode enviar comandos e receber respostas do sistema.

Como mudar o formato de importaçao de require?(padrao commonjs) para module ?
R: Precisa alterar o package.json e colocar "type": "module" no arquivo.

o que http?
R: é um protocolo de comunicaçao entre cliente e servidor, onde o cliente faz uma requisiçao e o servidor responde.

quais os metodos de requisiçao http e para que serve cada um?
R:      GET: para buscar dados
        POST: para criar dados e inserir dados
        PUT: para atualizar todos os dados
        DELETE: para deletar dados 
        PATCH: para atualizar parcialmente os dados 

para que serve o --watch ao rodar o server?
R: ele fica observando os arquivos e rodar o servidor em modo de desenvolvimento, onde ele vai reiniciar automaticamente quando houver alguma mudança no código.


model
-regrras de negocio
-acesso aos dados

controller
-controle do fluxo de entrada, processamento e saida de dados

para que serve o router?
R: ele é responsável por definir as rotas da aplicação, onde cada rota é associada a um controller que vai processar a requisição e retornar a resposta. O router é uma forma de organizar as rotas e controllers da aplicação, deixando o código mais limpo e modularizado.

o que e um padrao de projeto?
R: é uma soluçao reutilizável para um problema comum em desenvolvimento de software, onde ele descreve uma estrutura e um conjunto de boas práticas para resolver um problema específico. O uso de padrões de projeto ajuda a melhorar a qualidade do código, tornando-o mais legível, manutenível e escalável. Alguns exemplos de padrões de projeto são: Singleton, Factory, Observer, Strategy, entre outros.

o que e o padrao MVC?
R: é um padrão de projeto que divide a aplicação em três camadas: Model, View e Controller. O Model é responsável pelas regras de negócio, validações e acesso aos dados. O View é responsável pela interface do usuário, onde ele exibe os dados e recebe as interações do usuário. O Controller é responsável pelo controle do fluxo de entrada, processamento e saída de dados, onde ele recebe as requisições do usuário, processa os dados e retorna a resposta para o View. O uso do padrão MVC ajuda a organizar o código, tornando-o mais modularizado e fácil de manter.

o que e ORM?
R: é um mapeamento objeto-relacional, onde ele permite que o desenvolvedor trabalhe com objetos em vez de tabelas e colunas do banco de dados. O ORM é uma camada de abstração que facilita o acesso aos dados, permitindo que o desenvolvedor escreva código mais limpo e legível, sem se preocupar com a complexidade do SQL. Alguns exemplos de ORM são: Sequelize, TypeORM, Mongoose, prisma.

quais as vantagens de usar um ORM?
R:
 -facilita a troca de banco de dados, pois o ORM é independente do banco de dados, onde ele pode ser configurado para trabalhar com diferentes bancos de dados sem precisar alterar o código.

### comandos prisma

- instalaçao do prisma

        npm i prisma -D

        npm i dotenv -D

- inicializaçao do prisma

        npx prisma init --datasource-provider mysql --output ../generated/prisma

- criar o banco de dados

        npx prisma db push

 Como utilizar parâmetros de Url?
  R: Parâmetros de URL são pares de chave=valor adicionados ao final de um link, após um ponto de interrogação (?), usados para rastrear tráfego (UTMs), filtrar conteúdo ou personalizar páginas sem alterar o destino final. Eles funcionam no formato www.site.com?chave1=valor1&chave2=valor2, separados pelo caractere &

 O que é Middleware? (Exemplo Logger)
R:Middleware é um componente de software que atua como uma "ponte" ou filtro entre a requisição do cliente e o processamento final no servidor
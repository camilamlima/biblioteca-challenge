## DESAFIO Avaliação livros da Bibioteca

Uma biblioteca precisa de um sistema onde os usuários que alugaram livros possam registrar sua opinião sobre os mesmos, utilizando o browser de um computador que ficará disponível na saída da biblioteca.
Para registrar sua opinião sobre o livro, a pessoa deverá:

1. Fornecer o seu nome de usuário no sistema da biblioteca. O sistema apenas valida que este usuário existe e avança para a próxima etapa.
2. Preencher um formulário com as seguintes perguntas:
    * Nome do livro (dropdown com todos os livros cadastrados no sistema)
    * Estado de conservação (dropdown com as opções ‘Ótimo’,’Bom’,’Ruim’ e ’Regular’)
    * Nota de 0 a 10 avaliando o conteúdo do livro
    * Observações (texto com no máximo 256 caracteres)
3. Ao final, o sistema pergunta se o usuário deseja cadastrar uma nova avaliação sobre outro livro, caso contrário a tela retorna para a etapa `1.`

> Ps: O sistema não deve permitir que o usuário cadastre mais de uma avaliação para o
mesmo livro.

Ao entrar na URL /admin, um funcionário da biblioteca que é administrador do sistema deverá fazer login (com nome de usuário e senha) para ter acesso às estatísticas abaixo:

* Tabela geral com todas as respostas, contendo paginação, ordenação e busca. 
* Lista de usuários, contendo a lista de livros que cada um alugou e qual foi sua nota média.
* Lista de livros cadastrados com o número total de avaliações que receberam, estado de conservação (mostrar % de cada resposta) e a nota média.

Além disso, o administrador deverá ter acesso a serviços para registrar novos **usuários** e **livros** no sistema.

----------
Com relação ao desenvolvimento, a interface deverá ser feita no ambiente que você julgar mais conveniente e ser desacoplada do backending, que será uma API de serviços RESTful implementada usando Node.js e o framework Express​. Os dados deverão ser armazenados em um database de sua escolha.
O deploy do sistema poderá ser feito no localhost. Ao final você deverá nos enviar as instruções detalhadas de como subir e testar o sistema, bem como o código fonte e um schema do database utilizado.
# Ex 1: Crie um componente simples
* Crie um componente chamado HelloWorld;
* Este componente deve renderizar um parágrafo;
* Insira um texto neste parágrafo;

***

# Ex 2: Usando Props
* Crie um novo componente;
* Este componente deve receber uma prop chamada
name;
* Renderize um texto no componente, contendo a
prop que foi enviada;

***

# Ex 3: Múltiplas props
* Crie um novo componente;
* Este componente deve receber pelo menos três
pops, utilize tipos de dados diferentes;
* Exiba os valores das props no componente;

***

# Ex 4: Composição de Componentes
* Crie um novo Componente;
* Este componente deve aceitar uma prop chamada members;
* Em members teremos um array de objetos;
* Defina este array com as propriedades iguais as props do
componente do exercício anterior;
* Utilizando os componentes em conjunto, renderize todos os
itens do array com um map;

***

# Ex 6: Componente com Estado
* Crie um componente chamado Counter;
* Ele deve renderizar um número e um botão;
* O número deve começar em 0, e incrementar em
um a cada clique;
* Utilize o hook useState para gerenciar o estado do
número;

***

# Ex 7: Usando estado
* Crie um componente chamado Toggle;
* Este componente deve ter um botão com um texto;
* O texto é alterado dinamicamente por meio de um
estado;
* Deve começar com ON e ao clicar mudar para OFF;
* O contrário também deve ocorrer;

***

# Ex 8: Múltiplos estados
* Crie um componente semelhante ao Toggle;
* Porém agora ele deve conter dois estados;
* O número de cliques no botão precisa ser exibido e
atualizado a cada clique;

***

# Ex 9: Relógio em tempo real
* Crie um componente Clock;
* Ele deve armazenar a hora atual em um state;
* Utilize o useEffect para atualizar a hora a cada um
segundo;
* A hora pode ser obtida com a classe Date;

***

# Ex 10: Lista de Tarefas
* Crie um componente chamado TodoList;
* Ele deve permitir que o usuário adicione uma tarefa
a uma lista;
* Cada tarefa deve ter duas propriedades: id e task;
* Onde task é o título;
* Utilize o useState para gerenciar o estado da lista de
tarefas;

***

# Ex 11: Filtro
* Implemente no componente do exercício anterior um filtro de tarefas;
* Um campo de texto que mostra apenas as tarefas que contenham o texto digitado;
* Utilize o useState para gerenciar o filtro;

***

# Ex 12: Verificador de largura da tela
* Crie um novo componente que exibe a largura da tela;
* A cada mudança de largura a dimensão deve ser atualizada de forma instantânea;
* Utilize useState e useEffect para chegar no resultado final;

***

# Ex 13: Simulação de busca de dados
● Crie um componente que vai simular uma 
requisição a uma API;
● Utilize o setTimeout para representar a demora da 
resposta;
● Enquanto a resposta não chega, exiba um estado 
de loading;
● E depois exiba os dados;


***

# Ex 14: Formulário de Registro
* Crie um componente com um formulário de 
registro;
* Os campos são: nome, email e senha;
* Faça o envio do formulário;
* Em vez de enviar para um servidor, exiba todos os 
dados em um console.log;


***

# Ex 17: Upload de arquivo
* Crie um componente que simula o upload de um 
arquivo;
* Exiba o nome do arquivo, após o upload no input do 
tipo file;
* E se for uma imagem, mostre o preview da mesma;

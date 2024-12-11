//exercício 01: Função para exibir no console do navegador:
        console.log("Bem-vinda ao mundo do JavaScript, Geisiane! Você tem 22 anos.");

//exercício 02 a): Adicionar um comentário explicando o propósito deste código:
        let resultado = 10 * 2;
        console.log(`O resultado da variável "resultado" deu ${resultado}`)
//Isto é uma variável. E 'resultado' é a variável que recebeu o resultado da multiplicação de '10 * 2'.

//exercício 02 b): Escrever um código exibindo uma frase motivacional:
        console.log("Não deixe para amanhã o que pode ser feito hoje. Pois o amanhã pode não existir ou pode ser tarde demais.");

//exercício 03 a): Declarar uma variavel nome e idade e exibir no console:
        var nome = 'Geisiane';
        let idade = 22;
        console.log(`Eu me chamo ${nome} e tenho ${idade} anos`); //Para exibir as variáveis dentro de um texto ou frase com o simbolo "${}", é preciso usar crases "``".

//exercício 03 b): Crie uma variável e depois altere o valor dela para outro valor:
        let filme = "Amanhecer parte 1";
        filme = "Amanhacer parte 2";
        console.log(`Meu filme favorito da "Saga Crepúsculo" se chama "${filme}"`);
//Para alterar o valor da mesma variável, deve-se remover a tag.

//exercício 04 a): Declare uma variável do tipo string com o valor "Olá, mundo!". Exiba o tipo de dado dessa variável usando typeof:
        var chamada = "Olá, mundo!"
        console.log(`A variavel "chamada" é do tipo "${typeof chamada}"`);

//exercício 04 b): Crie um objeto que represente uma pessoa com propriedades nome, idade e cidade. Exiba o valor de nome.
        var pessoa = {nome: "Geisiane", idade: 22, cidade: "Feira de Santana"}
        console.log(`O nome do "objeto" é "${pessoa.nome}"`); //Para declarar um objeto dentro de "{}", é preciso trocar o "=" por ":", e ";" por ",".

//exercício 04 c): Declare um array de três cores e exiba a segunda cor:
        var cores = ["Azul", "Preto", "Vermelho"]; 
        console.log(`A segunda cor da variavel "cores" é a cor "${cores[1]}"`); //A contagem sempre começa de "0".

//exercício 05 a): Declare duas variáveis com valores numéricos e use os operadores aritméticos (+, -, *, /) para exibir a soma, diferença, produto e quociente entre elas:
        n1 = 3;
        n2 = 4;
        soma = n1 + n2;
        diferenca = n1 - n2;
        produto = n1 * n2;
        quociente = n1 / n2;
        console.log(`A soma entre os valores "n1" e "n2" deu "${soma}". A diferença entre os valores "n1" e "n2" deu "${diferenca}". O produto entre os valores "n1" e "n2" deu "${produto}". O quociente dos valores "n1" e "n2" deu "${quociente}".`);
        
//exercício 05 b): Crie uma variável chamada idade e atribua o valor 21. Use um operador de comparação para verificar se a idade é maior ou igual a 18:
        idade =  22
        console.log(idade > 18 ? 'A idade é maior que 18':'A idade é menor que 18') //condição simples simplicada usando '?' para separar a condição do resultado e usando ':' para separar os dois resultados. 
        
//exercício 05 c): Crie um código que use operadores lógicos para verificar se uma pessoa tem idade maior ou igual a 18 e é brasileira:
        idade = 22
        nacionalidade = 'brasileira'
        console.log(idade >= 18 && nacionalidade === 'brasileira' ? 'Você tem mais de 18 anos e é brasileira':'Você é menor de idade e não é brasileira')

//exercício 06 a): Escreva um código if...else para verificar se uma variável chamada nota é maior ou igual a 6. Se for, exiba "Aprovado"; caso contrário, "Reprovado".
        nota = 6
        console.log(nota >= 6 ? 'VOCÊ ESTA APROVADO!' : 'VOCÊ ESTÁ REPROVADO!')

//exercício 06 b): Crie um switch que exiba um tipo de bebida de acordo com o valor de uma variável opcao. Ex: "1" => "Café", "2" => "Chá", "3" => "Suco".
        console.log('Escolha uma dessas bebida café, chá, suco ou cerveja:')

        bebida = 'café'
        switch(bebida){
                case 'café':
                        console.log('A bebida escolhida foi café.')
                        break
                case 'suco':
                        console.log('A bebida escolhida foi suco.')
                        break
                case 'chá':
                        console.log('A bebida escolhida foi chá.')
                        break
                case 'cerveja':
                        console.log('A bebida escolhida foi cerveja.')
                        break
                default:
                        console.log('Não temos está bebida em nosso cardápio. Dê uma olhada em nosso cardápio.')
        }
        
//exercício 06 c): Use um for para exibir os números de 1 a 5. Depois, faça o mesmo usando um while.
        //Usando 'for':
        for(numero = 1; numero <= 5; numero++){  
                console.log(`Número ${numero}`)
        }

        console.log('Contando novamente...')

        //Usando 'while':
        numero = 1
        while(numero <= 5){
                console.log(`Número ${numero}`)
                numero++
        }

//exercício 07 a): Crie uma função chamada saudação que receba um nome como parâmetro e exiba "Olá, [nome]!".

function saudacao(nome){
        console.log(`Olá ${nome}`)
}

saudacao('Geisiane')
        
//exercício 07 b): Escreva uma função que receba um número como parâmetro e retorne o dobro desse número.

function dobro(numero){
        return numero*2
}

console.log(`${dobro(2)}`)
                 
//exercício 08 a): Crie um array com três frutas de sua escolha. Exiba a primeira fruta.

frutas = ['banana', 'uva', 'melancia']

console.log(frutas[0])
        
//exercício 08 b): Adicione uma fruta ao final do array e outra ao início. Exiba o array atualizado.

frutas = [' banana', ' uva', ' melancia']

frutas.push(' goiaba')
frutas.unshift('maçã')

console.log(`${frutas}`)

        
//exercício 08 c): Remova o último elemento do array e exiba o array final.

numeros = [1, 2, 3]

numeros.pop()

console.log(numeros)
        
//exercício 09 a): Crie um objeto chamado pessoa com as propriedades nome, idade e cidade. Exiba a propriedade cidade.

pessoa = {
        nome: 'Geisiane',
        idade: 22,
        cidade: 'Feira de Santana'
}

console.log(pessoa.cidade)
        
//exercício 09 b): Adicione uma propriedade profissao ao objeto pessoa e defina um valor para ela. Exiba o objeto completo.

pessoa = {
        nome: 'Geisiane',
        idade: 22,
        cidade: 'Feira de Santana'
}

pessoa.profissao = 'Programodora'

console.log(pessoa)
        
//exercício 09 c): Adicione um método saudacao no objeto pessoa que exiba uma saudação com o nome da pessoa.

pessoa = {
        nome: 'Geisi',
        idade: 22,
        cidade: 'Feira de Santana'
}

pessoa.profissao = 'Programodora'

function saudar(pessoa){
        console.log(`Olá ${pessoa.nome}`)
}

saudar(pessoa)
        
//exercício 10 a): Crie um botão no HTML com o texto "Clique aqui". Em JavaScript, selecione esse botão e exiba uma mensagem de alerta ao clicar nele.
        
//exercício 10 b): Crie um parágrafo no HTML e, ao clicar em um botão, altere o texto do parágrafo para "Texto atualizado pelo JavaScript!".
        
//exercício 10 c): No HTML, adicione um input de texto e um botão. Quando o botão for clicado, exiba o valor do input em um parágrafo.
        
//exercício 11 a): No HTML, adicione um botão com o texto "Mostrar Alerta". Em JavaScript, adicione um evento de clique que exiba um alerta com a mensagem "Botão clicado!".

//exercício 11 b): Crie uma função em JavaScript que é executada quando uma tecla é pressionada, exibindo a tecla pressionada no console.
        
//exercício 11 c): Adicione um evento mouseover a um elemento no HTML que muda a cor de fundo desse elemento ao passar o mouse sobre ele.

//exercício 12 a): Crie uma Promise que resolve com o valor "Processo concluído!" após 2 segundos. Use then para exibir essa mensagem no console.

//exercício 12 b): Escreva uma função assíncrona que simula o carregamento de dados de uma API com await. Exiba "Dados carregados!" após 3 segundos.

//exercício 12 c): Refaça o exercício anterior, mas usando setTimeout em vez de await.
       
//exercício 13 a): Crie um objeto pessoa em JavaScript com as propriedades nome, idade e cidade. Converta o objeto em uma string JSON usando JSON.stringify() e exiba no console.

//exercício 13 b): Pegue uma string JSON como {"nome": "Geisiane", "idade": 21} e converta de volta para um objeto. Exiba o valor da propriedade nome.

//exercício 13 c): Crie um array de objetos JSON com dados de três pessoas e exiba o nome da primeira pessoa no console após converter para objeto.
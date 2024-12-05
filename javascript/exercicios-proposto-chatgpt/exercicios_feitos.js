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
        for(numero = 0; numero <= 10; numero++){  
                console.log(`Número ${numero}`)
        }

        console.log('Contando novamente...')

        //Usando 'while':
        numero = 0
        while(numero <= 10){
                console.log(`Número ${numero}`)
                numero++
        }
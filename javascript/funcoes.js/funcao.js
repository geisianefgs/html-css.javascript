console.log('NÚMERO PAR OU IMPAR')

function parimpar(numero){
    if (numero%2==0){
        return 'par'
    } else {
        return 'impar' 
    }
}

console.log(`O número é ${parimpar(31)}`)
console.log()


console.log('SOMA DOS NÚMEROS')

function soma(n1=0, n2=0){ //Fazendo o n1 e n2 receberem 0, servem para que caso os dois parametros não sejam defidos, ou apenas um o n1 e/ou n2 recebera 0.
    return n1 + n2
}

console.log(`O resultado dos números deu ${2, 5}`)
function ProvaCorreio(resultado){
    if (resultado <= 29){
        return `Você foi reprovado. Tente novamente no proximo ano.`
    } else if (resultado >= 30 && resultado < 50){
        return `Você foi selecionado para a próxima prova.`
    } else if (resultado >= 50){
        return `Você foi aprovado com sucesso. Você agora é um novo membro da nossa empresa.`
    }
}

var resultado = ProvaCorreio(50)

console.log(resultado)
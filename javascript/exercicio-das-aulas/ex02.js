function verificar(){
    var DataAtual = new Date()
    var AnoAtual = DataAtual.getFullYear()
    var ano = document.getElementById('caixa').value
    var resultado = document.getElementById('resultado')

    if (ano > AnoAtual || ano.length === 0) {
        alert('[ERRO] Verifique o ano digitado e tente novamente.')
    } else{
        sexo = document.getElementsByName('sexradio')
        idade = AnoAtual - ano
        var genero = ''
        var imagem = document.getElementById('foto')
        

        if (sexo[0].checked){
            genero = 'homem'
                if (idade >= 0 && idade <= 10) {
                    imagem.src = ('imagens02/menino.png')
                } else if (idade <= 21) {
                    imagem.src = ('imagens02/rapaz.jpg')
                } else if (idade <= 50) {
                    imagem.src = ('imagens02/homem.jpg')
                } else {
                    imagem.src = ('imagens02/idoso.jpg')
                }

            
        } else if (sexo[1].checked){
            genero = 'mulher'
                if (idade >= 0 && idade <= 10) {
                    imagem.src = ('imagens02/menina.png')
                } else if (idade <= 21) {
                    imagem.src = ('imagens02/moça.jpg')
                } else if (idade <= 50) {
                    imagem.src = ('imagens02/mulher.jpg')
                } else {
                    imagem.src = ('imagens02/idosa.jpg')
                }   
        }

        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.style.textAlign = 'center'
    }
}
function carregar() {
    var msg = document.getElementById('msg');
    var imagem = document.getElementById('imagem');
    var agora = new Date();
    var hora = agora.getHours();
    
    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 5 && hora <= 10) {
        imagem.src = 'imagens/dia.jpg';
        document.body.style.background = '#d8b01e'
    } else if (hora > 10 && hora < 19) {
        imagem.src = 'imagens/tarde.jpeg';
        document.body.style.background = '#956139'
    } else {
        imagem.src = 'imagens/noite.jpg';
        document.body.style.background = '#021130'
    }
}
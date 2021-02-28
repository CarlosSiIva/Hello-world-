function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <12 ){
        // BOM DIA!
        img.src = `imagens/final/manha.png`
        document.body.style.background = '#ae8c63'
    } else if (hora >=12 && hora <18) {
        // BOA TARDE
        img.src = `imagens/final/tarde.png`
        document.body.style.background = '#494743'
    } else {
        //BOA NOITE
        img.src = `imagens/final/noite.png`
        document.body.style.background = '#22201d'
    }
}



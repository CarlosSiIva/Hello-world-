function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.lenght == 0  || fAno.value > ano){
        alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <10){
                //criança
                img.setAttribute('src','imagens/BebeM.png')
            }else if(idade < 21) {
                //jovem
                img.setAttribute('src','imagens/JovemM.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','imagens/AdultoM.png')
            }else{
                //idoso 
                img.setAttribute('src','imagens/Idoso.png')
            }

        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <10){
                img.setAttribute('src','imagens/BebeF.png')
                //criança
            }else if(idade < 21) {
                img.setAttribute('src','imagens/JovemF.png')
                //jovem
            }else if (idade < 50){
                img.setAttribute('src','imagens/AdultoF.png')
                //adulto
            }else{
                img.setAttribute('src','imagens/Idosa.png')
                //idoso 
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        
    }

 }
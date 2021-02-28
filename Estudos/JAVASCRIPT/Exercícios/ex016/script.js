function contar(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.querySelector('div#res')

    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    res.innerHTML = null
    while (i <= f){
        res.innerHTML += `${i} 👉`
        var i = i + p
    }

    res.innerHTML += '🏁'


}
function GerarTabuada(){
    var num = document.getElementById('numero')
    var tab = document.getElementById('seltab')
    

    tab.innerHTML = ''
    for (var i = 1; i <= 10; i++){
        var numero = Number(num.value)
        if (numero == 0 ){
            alert('Por favor, digite um valor válido!')
        }
        else
        var item = document.createElement('option')
        item.text = `${numero} x ${i} = ${numero*i}`
        tab.appendChild(item)
    }



}
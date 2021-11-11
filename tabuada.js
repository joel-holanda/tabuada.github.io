function remove(){
var testData = !!document.querySelector('h1');
if(testData == true ){
    var tag = document.querySelector('h1');
    tag.parentNode.removeChild(tag);
}
}
function apagar(){
    for (a = 1; 10 >= a; a++){
        remove()
    }
}

function tabu(){    
        apagar()
        var valor = document.getElementById('pegaValor').value;
        if (valor == ''){
            alert("Digite um valor")
        }else{
        for (a = 1; 10 >= a; a++){
            var valor = document.getElementById('pegaValor').value;
            var multiplicar = a * valor
            var corpo = document.body.querySelector('div');
            var elemento = document.createElement('h1');
            var fator = document.createTextNode(a + " X " + valor + " = " + multiplicar);
            elemento.appendChild(fator);
            corpo.appendChild(elemento);
        }

    }    
}

function insert(number)
{
    //pega o conteudo existente no display
    var num = document.getElementById('result').innerText

    //adiciona o numero recebido ao display
    document.getElementById('result').innerText = num + number
}

function limpar()
{
    document.getElementById('result').innerText = ""
}

function somar()
{
    var resultado = document.getElementById('result').innerText
    
    if(resultado)
    {
        document.getElementById('result').innerText = eval(resultado)
    }
}

var tabelaDigitos = document.getElementById("digitos");
var digitosList = [];
var ordemConta = [];
var inicioConta = "";
var conta = "";
var sinal = "";

function valor(num) { 
    if (tabelaDigitos.innerHTML.length < 16) {
        if (conta != "") {
            conta = "";
            tabelaDigitos.innerHTML = "";
            tabelaDigitos.innerHTML += num;
            digitosList.push(num);
            console.log(digitosList)
        } else {
            tabelaDigitos.innerHTML += num;
            digitosList.push(num);
            console.log(digitosList)
        }
    } else {
        
    }
}

function cancelarRegistro() {
    var digsParaCancelar = tabelaDigitos.innerHTML.length
    digitosList.splice(0, digsParaCancelar)
    tabelaDigitos.innerHTML = "";
    console.log(digitosList)
}

function limparConta() {
    digitosList = [];
    ordemConta = [];
    inicioConta = "";
    conta = "";
    sinal = "";
    tabelaDigitos.innerHTML = "";
}

function excluirUltimoDigito() {
    var digitos = tabelaDigitos.innerHTML;
    digitos = digitos.substring(0, digitos.length - 1);
    digitosList.pop();
    tabelaDigitos.innerHTML = digitos;
    console.log(digitosList)

}

function dividir() {
    ordenarConta()
    inicioConta = Number(ordemConta[0]) 
    sinal = "/"
    console.log(inicioConta)

    tabelaDigitos.innerHTML = "";
    digitosList = [];
    ordemConta = [];
}

function multiplicar() {
    ordenarConta()
    inicioConta = Number(ordemConta[0])
    sinal = "*"
    console.log(inicioConta)

    tabelaDigitos.innerHTML = "";
    digitosList = [];
    ordemConta = [];
}

function subtrair() {
    ordenarConta()
    inicioConta = Number(ordemConta[0])
    sinal = "-"
    console.log(inicioConta)

    tabelaDigitos.innerHTML = "";
    digitosList = [];
    ordemConta = [];
}

function somar() {
    ordenarConta()
    inicioConta = Number(ordemConta[0])
    sinal = "+"
    console.log(inicioConta)

    tabelaDigitos.innerHTML = "";
    digitosList = [];
    ordemConta = [];
}

function calcular() {
    conta = ""

    if (sinal == "+") {
        var finalConta = Number(tabelaDigitos.innerHTML)
        conta = inicioConta + finalConta;
        console.log(inicioConta + sinal + finalConta)
        tabelaDigitos.innerHTML = Number(conta);
    } else if (sinal == "-") {
        var finalConta = Number(tabelaDigitos.innerHTML)
        conta = inicioConta - finalConta;
        console.log(inicioConta + sinal + finalConta)
        tabelaDigitos.innerHTML = Number(conta);
    } else if (sinal == "*") {
        var finalConta = Number(tabelaDigitos.innerHTML)
        conta = inicioConta * finalConta;
        console.log(inicioConta + sinal + finalConta)
        tabelaDigitos.innerHTML = Number(conta);
    } else if (sinal == "/") {
        var finalConta = Number(tabelaDigitos.innerHTML)
        conta = inicioConta / finalConta;
        console.log(inicioConta + sinal + finalConta)
        tabelaDigitos.innerHTML = Number(conta);
    }

    digitosList = [];
}


function ordenarConta() {
    var parteDaConta = tabelaDigitos.innerHTML
    ordemConta.push(parteDaConta)
}
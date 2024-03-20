
const menorValor = 100;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio(){

    return Math.round((Math.random(menorValor) * (maiorValor-menorValor) + menorValor));
}

document.querySelector("#menor-valor").textContent = menorValor
document.querySelector("#maior-valor").textContent = maiorValor




function validacaoNumero(chute){
 
    if(chute.toUpperCase()== "GAME OVER"){
        document.body.innerHTML = `
            <h2>GAME OVER</h2>
            <button id='jogarNovamente' class='jogarNovamente'>Jogar Novamente</button>
        `
        document.body.style.background = "#191919";
        return
    }
    const numero = parseInt(chute);


    if(Number.isNaN(numero)){
        elementoChute.innerHTML = "<div>Valor inválido</div>"
        return;
    }
    if(numero > maiorValor || numero < menorValor){
        elementoChute.innerHTML += `<div>Valor inválido. o numero secreto esta entre ${menorValor} e ${maiorValor} </div>`
        return;
    }
    if(numeroSecreto == numero){
        document.body.innerHTML = `
        <h2>Você acertou</h2>
        <h3>O numero secreto era ${numeroSecreto}</h3>
        <button id='jogarNovamente' class='jogarNovamente'>Jogar Novamente</button>
        `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += "<div>O número secreto é menor <i class='fa-solid fa-arrow-down-long'></i></div>"
        

    }else{
        
        elementoChute.innerHTML += "<div>O número secreto é maior <i class='fa-solid fa-arrow-up'></i></div>"

    }
}

document.body.addEventListener("click", (e)=>{

    if (e.target.id == 'jogarNovamente' ){
        window.location.reload();
    }
})
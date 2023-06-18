// VALIDAÇÕES //
function verificaSeOChutePossuiUmValorValido(chute){
    //Transforma a string chute em número;
    const numero = +chute;

    //Condicional que chama a função "Chute Inválido" e se retornar true, mostra no console a mensagem "Valor inválido";
    if(chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>"Valor inválido"</div>';
        return
    }

    //Condicional que chama a função "Número for maior ou menor que valor permitido" e se retornar true, mostra no console a mensagem "Valor inválido: Fale um número entre" ...
    // e mostra as constantes "Menor valor" e "Maior valor";
    if(numeroforMaiorOuMenorQueValorPermitido(numero)){
        elementoChute.innerHTML += `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `;
        return
    }

    //Condicional que verifica se o chute é igual ao número aleatório que foi gerado quando a página foi carregada;
    if(numero === numeroAleatorio){
        //Caso seja verdadeiro, cria um novo conteúdo no corpo do HTML com as mensagens, "Você acertou!" e "O número secreto era: " e o número secreto em sí;
        document.body.innerHTML = `
            <h2>🎉 Você acertou! 🥳</h2>
            <h3>O número secreto era: <strong>${numeroAleatorio}</strong></h3>

            <button id="recomecar" type="reset" onClick="window.location.reload();">Recomeçar</button>
        `
    //Condicional que verifica se o chute é maior que o número aleatório que foi gerado quando a página foi carregada;
    } else if (numero > numeroAleatorio){
        //Se verdadeiro, cria uma nova div no corpo do HTML com a mensagem "O número secreto é menor" e um setinha pra baixo;
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long fa-bounce"></i></div>
        `
    } else {
        //Se falso, cria uma nova div no corpo do HTML com a mensagem "O número secreto é maior" e um setinha pra baixo;
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long fa-bounce"></i></div>
    `
    }
}

//Função que verifica se o chute é um número e retorna true ou false;
function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

//Função "Número for maior ou menor que valor permitido" que verifica se o chute é um número entre as constantes "Menor valor" e "Maior valor";
function numeroforMaiorOuMenorQueValorPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}
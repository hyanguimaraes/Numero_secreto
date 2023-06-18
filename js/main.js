//LÓGICA DO BOTÃO PARA A TROCA DE TEMA. FUNCIONA ALTERANDO A CLASSE DO BODY PARA DARKMODE;
document.querySelector("#btn").addEventListener("click", () => {
    document.body.classList.toggle("darkMode");
})

//LÓGICA PARA SORTEIO DO NÚMERO ALEATÓRIO ENTRE 0 E 1000;

// Constantes e variáveis;
const menorValor = 0;
const maiorValor = 1000;
const numeroAleatorio = geraNumero();

//Captura o span menorValor do HTML para uso no JS;
const elementoMenorValor = document.getElementById("menorValor");

//Captura o span maiorValor do HTML para uso no JS;
const elementoMaiorValor = document.getElementById("maiorValor");

//Função que gera um número randômico entre o menor valor e o maior valor (inclusive).
function geraNumero () {
    return parseInt(Math.random() * maiorValor + 1);
}

//Registra o número gerado no console;
console.log("Numero secreto: " + numeroAleatorio);

//Altera o valor mostrado no span menorValor no HTML para o valor da constante de mesmo nome;
elementoMenorValor.innerHTML = menorValor;

//Altera o valor mostrado no span maiorValor no HTML para o valor da constante de mesmo nome;
elementoMaiorValor.innerHTML = maiorValor;

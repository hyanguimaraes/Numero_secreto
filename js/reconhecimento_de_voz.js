//LÓGICA DE RECONHECIMENTO DE FALA USANDO A WEB SPEECH API;
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//Constante que recebe o reconhecimento de voz;
const recognition = new SpeechRecognition();

//Captura o id "chute" do HTML para uso no JS;
const elementoChute = document.getElementById("chute");

//Alteração da linguagem para Português Brasileiro;
recognition.lang = 'pt-br';

//Início do reconhecimento de voz pela aplicação;
recognition.start();

//Lógica para exibição da mensagem reconhecida no console;
recognition.addEventListener('result', onSpeak);

//função que pega a fala reconhecida e coloca dentro da variável "chute";
function onSpeak(fala) {
    /*FALA É O QUE FOI RECONHECIDO E É MOSTRADO EM UM ARRAY COMO ESTE:
    
        SpeechRecognitionEvent {isTrusted: true, resultIndex: 0, results: SpeechRecognitionResultList, type: 'result', target: SpeechRecognition, …}
        isTrusted: true
        bubbles: false
        cancelBubble: false
        cancelable: false
        composed: false
        currentTarget: SpeechRecognition {grammars: SpeechGrammarList, lang: 'pt-br', continuous: false, interimResults: false, maxAlternatives: 1, …}
        defaultPrevented: false
        eventPhase: 0
        resultIndex: 0
        results: SpeechRecognitionResultList
            0: SpeechRecognitionResult
                0: SpeechRecognitionAlternative
                    confidence: 0.7555826902389526
                    transcript: "850"
                    [[Prototype]]: SpeechRecognitionAlternative
                isFinal: true
                length: 1
                [[Prototype]]: SpeechRecognitionResult
            length: 1
            [[Prototype]]: SpeechRecognitionResultList
        returnValue: true
        srcElement: 
        SpeechRecognition {grammars: SpeechGrammarList, lang: 'pt-br', continuous: false, interimResults: false, maxAlternatives: 1, …}
        target: 
        SpeechRecognition {grammars: SpeechGrammarList, lang: 'pt-br', continuous: false, interimResults: false, maxAlternatives: 1, …}
        timeStamp: 5713.100000008941
        type: "result"
        [[Prototype]]:SpeechRecognitionEvent
    
    SENDO ASSIM, SE EU QUERO PEGAR O VALOR QUE FOI RECONHECIDO, PRECISO PEGAR O VALOR DE "TRANSCRIPT" QUE ESTÁ DENTRO DO ARRAY [0] QUE, POR SUA VEZ ESTÁ DENTRO DE OUTRO
    ARRAY [0], DENTRO DE "RESULTS", POR ISSO, TEMOS:*/
    chute = fala.results[0][0].transcript;
    //chama a função "Exibe chute na tela", criada abaixo:
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute);
}

//Função que recebe o parâmetero "chute", criado como variável na função "On speak" e cria, dentro do "Elemento chute", no HTML, as tags div e span;
//Esta última recebe o valor recebido no parâmetro "chute";
function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

//Reinicia o reconhecimento de voz quando ele acaba. Assim é possível fazer vários chutes sem que o jogo acabe no meio;
recognition.addEventListener('end', () => recognition.start());
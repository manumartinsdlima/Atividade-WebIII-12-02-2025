let nivel = 1;
let numeroAleatorio;

let btnIniciarJogo = document.querySelector(".btnIniciarJogo");
let containerInput = document.querySelector(".containerInput");
let enunciado = document.querySelector(".enunciado");
let inputNumero = document.getElementById("numero");

function gerarNumeroAleatorio(){
    numeroAleatorio = parseInt(Math.random() * (nivel * 10) + 1);
}

function renderizarEnunciado(){
    enunciado.innerHTML = `Escolha um número de 1 a ${nivel * 10}`;
}

function proximoNivel(){
    nivel++;
    renderizarEnunciado();
    gerarNumeroAleatorio();
}

function verificarAcerto(){
    let numero = parseInt(inputNumero.value);
    if(numero == numeroAleatorio){
        alert("Parabéns, você acertou! Vamos para o próximo nível?");

        proximoNivel();
    } else {
        let fraseDerrota = numero > numeroAleatorio? `O número escolhido é maior que o número secreto!` : `O número escolhido é menor que o número secreto!`;

        alert(`Que pena, você errou... Mas você pode tentar novamente, boa sorte! ${fraseDerrota}`);
    }
}

function iniciarJogo(){
    btnIniciarJogo.innerHTML = "Adivinhar";
    btnIniciarJogo.setAttribute("onclick", "verificarAcerto()");
    containerInput.removeAttribute("hidden");

    enunciado.innerHTML = `Escolha um número de 1 a ${nivel * 10}`;

    gerarNumeroAleatorio(nivel);
}
    

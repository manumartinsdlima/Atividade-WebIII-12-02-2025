let inputFormularioNome = document.getElementById("inputFormularioNome");
let inputFormularioEmail = document.getElementById("inputFormularioEmail");
let selectFormularioCargo = document.getElementById("selectFormularioCargo");
let textareaFormularioMensagem = document.getElementById("textareaFormularioMensagem");
let btnEnviarFormulario = document.querySelector(".btnEnviarFormulario");

function validarInformacoesFormulario(){
    if(inputFormularioNome.value == "" || inputFormularioEmail.value == ""){
        console.log("email: "+ inputFormularioEmail.value);
        console.log("nome:" +inputFormularioNome.value);

        alert(`Preencha os campos de dados obrigatórios antes de enviar o formulário!`); 
    } else {
        alert(`Obrigado por enviar seus dados, ${inputFormularioNome.value}
Nome: ${inputFormularioNome.value}
Email: ${inputFormularioEmail.value}
Cargo: ${selectFormularioCargo.value}
Mensagem: ${textareaFormularioMensagem.value}`);
    }
}

let botoesNavegacao = document.querySelectorAll(".btnNavegacao");
let main = document.querySelector("main");
let telas = document.querySelectorAll(".telas");

function sliderDasTelas(tela){
    console.log(tela);
    telas.style = `transform: translateX(${tela * 100}%)`;
}

function adicionarEventListenerNoMenuDeNavegacao(){
    for(let i = 0; i < botoesNavegacao.length; i++){
        botoesNavegacao[i].addEventListener("click", sliderDasTelas(i));
    }
}

adicionarEventListenerNoMenuDeNavegacao();



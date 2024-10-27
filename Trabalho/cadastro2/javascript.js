
let dados2 = JSON.parse(localStorage.getItem('dados2')) || [];

let nome = document.getElementById('nome');
let email = document.getElementById('email');

// Recuperado QueryParam
const key = new URLSearchParams(window.location.search).get('chave');

// Preenchendo o formulário em cao de alteração
if(key){
    nome.value = dados2[key].nome;
    email.value = dados2[key].email;
    document.querySelector('#formcadastro button[type="submit"]').innerText = "Alterar";
} 

// Reset da página e QueryParam
document.getElementById('formcadastro').addEventListener('reset', function (e) {
    e.preventDefault();
    window.location.href = "./index2.html";
});




// Cadastro de cadastros
document.getElementById('formcadastro').addEventListener('submit', function (e) {
    e.preventDefault();

    // Remover mensagens de erro anteriores
    removerMensagensErro();

    let validado = true;

    // Validação de nome
    if (!nome.value) {
        exibirErro('nome', 'Nome é obrigatório');
        validado = false;
    }

    // Validação simples de e-mail
    const emailPartes = email.value.split('@');
    if (emailPartes.length !== 2 || !emailPartes[1].includes('.') || emailPartes[0] === '' || emailPartes[1].split('.')[0] === '') {
        exibirErro('email', 'Email inválido');
        validado = false;
    }
    

    if (!validado) {
        return;
    }

    // Criando cadastro
    const cadastro = {
        nome: nome.value,
        email: email.value
    };

    (!key)? dados2.push(cadastro) : dados2[key] = cadastro;     /*
    Esse código verifica se key está vazio:
    
        Se estiver, ele adiciona um novo cadastro ao array dados2.
        Se não estiver, ele atualiza o item existente em dados2 no índice key com o novo cadastro*/ 




    // Atualizando o LocalStorage
    localStorage.setItem('dados2', JSON.stringify(dados2));

     window.location.href = "./index2.html";
});



// Função para exibir mensagem de erro abaixo do campo
function exibirErro(campoId, mensagem) {
    const campo = document.getElementById(campoId);
    const erro = document.createElement('p');
    erro.classList.add('erro');
    erro.innerText = mensagem;
    campo.after(erro);
}

// Função para remover mensagens de erro existentes
function removerMensagensErro() {
    const erros = document.querySelectorAll('.erro');
    erros.forEach(erro => erro.remove());
}


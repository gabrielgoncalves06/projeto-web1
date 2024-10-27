// Recuperando os dados3 do Local Storage
let dados3 = JSON.parse(localStorage.getItem('dados3')) || [];

let nome = document.getElementById('nome');
let preco = document.getElementById('preco');
let email = document.getElementById('email');

// Recuperado QueryParam
const key = new URLSearchParams(window.location.search).get('chave');

// Preenchendo o formulário em cao de alteração
if(key){
    nome.value = dados3[key].nome;
    preco.value = dados3[key].preco;
    email.value = dados3[key].email;
    document.querySelector('#formcadastro button[type="submit"]').innerText = "Alterar";
} 

// Reset da página e QueryParam
document.getElementById('formcadastro').addEventListener('reset', function (e) {
    e.preventDefault();
    window.location.href = "./index3.html";
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


    let precoValidado = validarValorMonetario(preco.value);
    // Validação de preço
    if (!precoValidado || isNaN(precoValidado)) {
        console.log(precoValidado);
        exibirErro('preco', 'Preço inválido');
        validado = false;
    }

    // Validação simples de e-mail
    const emailPartes = email.value.split('@');
    if (emailPartes.length !== 2 || !emailPartes[1].includes('.') || emailPartes[0] === '' || emailPartes[1].split('.')[0] === '') {
        exibirErro('email', 'Email inválido');
        validado = false;
    }
    
    // Verificando se passou nas validações
    if (!validado) {
        return;
    }

    // Criando cadastro
    const cadastro = {
        nome: nome.value,
        preco: precoValidado,
        email: email.value
    };

    // Caso não exista a chave o cadastro é adicionado, se não ele é alterado
    (!key)? dados3.push(cadastro) : dados3[key] = cadastro;

    // Atualizando o LocalStorage
    localStorage.setItem('dados3', JSON.stringify(dados3));

     window.location.href = "./index3.html";
});

// Validação de valores monetários
function validarValorMonetario(valor){
    valor = valor.replaceAll("R", "").replaceAll("$", "").replaceAll(" ", "");
    if (valor.includes(",")) {
        valor = valor.replaceAll(".", "");
        valor = valor.replace(",", ".");
    }
    console.log(valor);
    return Number(valor);
}

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


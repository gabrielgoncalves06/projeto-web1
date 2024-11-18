// Recuperando os dados1 do Local Storage
let dados1 = JSON.parse(localStorage.getItem('dados1')) || [];     //O JSON.parse() é útil quando é necessário enviar ou receber dados em um formato estruturado pela web. Para que o método funcione, a string JSON precisa estar bem formada e seguir a sintaxe correta.   
                                                                   // tornar a string para objeto novamente
let nome = document.getElementById('nome');
let data = document.getElementById('data');
let local = document.getElementById('local');

// Recuperado QueryParam
const key = new URLSearchParams(window.location.search).get('chave');

// Preenchendo o formulário em caso de alteração            //Funcionalidade de Edição: Se o objetivo da sua aplicação é permitir que os usuários alterem dados previamente inseridos (como informações de cadastros, eventos, contatos, etc.), esse código é essencial. Ele faz com que o formulário seja preenchido automaticamente com os dados existentes, para que o usuário possa modificá-los e salvar as alterações.
if(key !== null) {
    let indice = Number(key);  // Convertendo para número
    nome.value = dados1[indice].nome;
    data.value = dados1[indice].data;
    local.value = dados1[indice].local;
    document.querySelector('#formcadastro button[type="submit"]').innerText = "Alterar";
} 






// Reset da página e QueryParam
document.getElementById('formcadastro').addEventListener('reset', function (e) {
    e.preventDefault();
    window.location.href = "./index1.html";
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

    // Validação de data
    if (!data.value || isNaN(Date.parse(data.value))) {
        exibirErro('data', 'Data inválida');
        validado = false;
    }

    // Validação de local 
    if (!local.value) {
        exibirErro('local', 'Local é obrigatório');
        validado = false;
    }

    if (!validado) {
        return;
    }

    // objeto
    const cadastro = {
        nome: nome.value,
        data: data.value,
        local: local.value
    };
     // muito importante !!!!
    // Caso não exista a chave o cadastro é adicionado, se não ele é alterado
    if (!key) {
        dados1.push(cadastro);
    } else {
        dados1[Number(key)] = cadastro;
    }


    // Atualizando o LocalStorage
    localStorage.setItem('dados1', JSON.stringify(dados1));   //SON.stringify() é um método do JavaScript que converte valores em JavaScript para uma string JSON. 
                                                              // dados1 é a chave
    // Redirecionando para a página principal
    window.location.href = "./index1.html";                   //localstorange.setitem("chave", valor); para armazenar
                                                             // alert(localstorange.getItem("chave"));  buscar a informacao e vai apararecer 
                                                             // alert(localStorange.key(0));  vai aparecer a chave
});











// Função para exibir mensagem de erro abaixo do campo
function exibirErro(campoId, mensagem) {
    const campo = document.getElementById(campoId);
    const erro = document.createElement('p');
    erro.classList.add('erro');
    erro.innerText = mensagem;
    campo.after(erro);
};

// Função para remover mensagens de erro existentes
function removerMensagensErro() {
    const erros = document.querySelectorAll('.erro');
    erros.forEach(erro => erro.remove());
};


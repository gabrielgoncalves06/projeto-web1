//modal ou subtela para captura de informações*/

const botaologin=document.getElementById('botaologin');
const botaofechar=document.getElementById('botaofechar');


botaologin.onclick= function(){
    login.showModal();
}

botaofechar.onclick=function(){
    login.close();
}

//login

const login=document.getElementById('login');
const formlogin=document.querySelector('#login form');

//dados

let dadosUsuarios = [
    { nome: "user", email: "email@email.com", senha: "123" },
    { nome: "aluno", email: "aluno@email.com", senha: "aluno" },
    { nome: "root", email: "root@email.com", senha: "root" },
];

formlogin.addEventListener('submit', (event) =>{
    event.preventDefault();

    //remover mensagem de erro!!

    let mensagemErro=document.querySelector('.erro');
    if(mensagemErro){
        login.removeChild(mensagemErro);
    }


    //verificar se o usuário existe

    let email=document.getElementById('email').value;
    let senha=document.getElementById('senha').value;

    dadosUsuarios.forEach(item =>{
        if(email === item.email && senha === item.senha){
             // Criando sessões para armazenar informações
             sessionStorage.setItem('usuarioLogado', 'true');
             sessionStorage.setItem('nomeUsuario', item.nome);
 
             window.location.href="./admin/index.html";

        }
    });


 // Criando mensagem de erro
 let usuarioLogado = sessionStorage.getItem('usuarioLogado');

 if(!usuarioLogado){        
     erro = document.createElement('p');
     erro.classList.add('erro');
     erro.innerText = 'Login ou senha inválido';
     login.insertBefore(erro, login.firstChild);
     document.querySelector('#login form').reset();
 }
});









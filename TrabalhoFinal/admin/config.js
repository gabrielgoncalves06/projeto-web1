// Verificando ser o usuário está logado
let login = sessionStorage.getItem('usuarioLogado');

if(!login) window.location.href = "../index.html";

let usuario = sessionStorage.getItem('nomeUsuario');

// Fazendo o logout
document.getElementById('logout').addEventListener('click', (evento) => {
    evento.preventDefault();
    sessionStorage.removeItem('usuarioLogado');
    sessionStorage.removeItem('nomeUsuario');
    window.location.href = "../index.html";
});


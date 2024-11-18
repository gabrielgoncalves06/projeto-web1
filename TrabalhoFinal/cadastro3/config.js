
// Fazendo o logout
document.getElementById('logout').addEventListener('click', (evento) => {
    evento.preventDefault();
    sessionStorage.removeItem('usuarioLogado');
    sessionStorage.removeItem('nomeUsuario');
    window.location.href = "../index.html";
});


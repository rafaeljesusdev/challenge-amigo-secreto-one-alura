let amigos = []

function validarEntradaInput() {
    let amigo = document.querySelector("input").value;
    if (amigo.trim() == ""){
        alert("Digite um nome por favor");
    }else{
        amigos.push(amigo.trim());
        limparCampo();
        criarHTMLLi(amigo);
    }
}
   
function adicionarAmigo(){
    validarEntradaInput();
    console.log(amigos);
}

function limparCampo(){
    limpar = document.querySelector("input");
    limpar.value = "";
}

function criarHTMLLi(amigo) {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""
    for (i = 0; i < amigos.length; ++i) {
        let liTag = document.createElement('li');
        liTag.innerText = amigos[i];
        lista.appendChild(liTag);
    }
}
let amigos = []

function validarEntradaInput() {
    let amigo = document.querySelector("input").value.trim();
    if (amigo == ""){
        alertaAddNome();
    }else{
        amigos.push(amigo);
        limparCampo("amigo");
        criarHTMLLi();
    }
}

function adicionarAmigo(){
    validarEntradaInput();
    limparCampo("resultado");
}

function limparCampo(tag){

    const limpar = document.getElementById(tag);
    if(tag == "resultado" || tag == "listaAmigos"){

        limpar.innerHTML = "";
    }else{

        limpar.value = "";
    }
}

function criarHTMLLi() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""
    for (let i = 0; i < amigos.length; ++i) {
        let liTag = document.createElement('li');
        liTag.innerText = amigos[i];
        lista.appendChild(liTag);
    }
}

function sortearAmigo() {
    if(amigos.length != 0){
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoVencedor = amigos[indice];
        limparCampo("listaAmigos")
        amigos = [];
        let mensagemVencedor = `Parabéns, o amigo secreto é: ${amigoVencedor}`;
        let mostrarVencedor = document.getElementById("resultado");
        mostrarVencedor.innerHTML = (mensagemVencedor);
    }else{
        alertaAddNome()
    }
}

function alertaAddNome() {
    alert("Digite um nome por favor");
}
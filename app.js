let listaAmigos = []


function validarEntradaInput() {
    let amigo = document.querySelector("input").value;
    if (amigo == ""){
        alert("Digite um nome por favor");
    }else{
        listaAmigos.push(amigo);
        limparCampo();
        
    }
}
   
function adicionarAmigo(){
    validarEntradaInput();
    console.log(listaAmigos)
       
}

function limparCampo(){
    limpar = document.querySelector("input");
    limpar.value = "";
}




adicionarAmigo();
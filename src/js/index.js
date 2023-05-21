const botaoAlterarTema = (document.getElementById("botao-alterar-tema"));

const body = document.querySelector("body")

const imagemBotaoTrocarDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click",  () => {
    const modoEscuroEstaAtivo = body.classList.contains("dark-mode")

    body.classList.toggle("dark-mode")

    if(modoEscuroEstaAtivo) {
        imagemBotaoTrocarDeTema.setAttribute("src", "./src/imagens/sun.png")
    }
        else{

        body.classList.add("dark-mode");

        imagemBotaoTrocarDeTema.setAttribute("src", "./src/imagens/moon.png")}
        
}


);

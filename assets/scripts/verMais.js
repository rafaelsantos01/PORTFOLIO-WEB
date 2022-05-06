
//Evento ver mais Projetos
const button = document.querySelector('.show-more')
const rowProjectsTwo = document.querySelector('.row-2')
rowProjectsTwo.style.display = 'none'

const showMore = () => {
    if(rowProjectsTwo.style.display === 'flex') {
        rowProjectsTwo.style.display = 'none'
        button.innerHTML = 'Ver mais'
    } else if(rowProjectsTwo.style.display === 'none') {
        rowProjectsTwo.style.display = 'flex'
        button.innerHTML = 'Ver menos'
    }
}




button.addEventListener('click', showMore)


//Evento ver mais do SOBRE
function leiaMaisSobre(){
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var btnLeiaMais = document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Leia Mais";
    }else{
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = "Leia Menos";
    }
}
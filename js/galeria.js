function trocaDog () {
    var dogao = document.getElementById('dogao');
    dogao.src = this.src;

    // agora precisamos acessar o H2 que tem o nome do cão
    // depois que acessarmos ele precisamos trocar o seu TEXTO/HTML
    // pelo valor que está no atributo ALT da imagem que disparou a função
    var nome = document.getElementById('nome_dog');
    nome.innerHTML = this.alt;

    // primeiro removemos a classe SELECIONADO de qualquer elemento
    var minis = document.querySelectorAll('.mini');
    for (x = 0; x < minis.length; x++) {
        minis[x].classList.remove('selecionado');
    }

    // adicionamos a classe SELECIONADO à imagem que foi clicada
    this.classList.add('selecionado');
}

// vamos "embutir/plugar" o evento diretamento no onclick das imagens
// usando APENAS JavaScript
var minis = document.querySelectorAll('.mini');
for (i = 0; i < minis.length; i++) {
    minis[i].onclick = trocaDog;
}



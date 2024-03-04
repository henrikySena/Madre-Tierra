// variável e função para controlar a mudança de imagem no carrossel de slides
let count = 1;

setInterval(function () {
    nextImage();
}, 10000);

function nextImage() {
    count++;
    if (count > 5) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}
// ------------------------------------------------------------------------------------------------ //

// função para rolar suavemente até o topo da página
function scrollToTop() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentScroll - currentScroll / 8);
    }
}

// adiciona um ouvinte de evento ao botão com o ID 'btn-top' para rolar suavemente para o topo
document.getElementById('btn-top').addEventListener('click', function() {
    scrollToTop();
});

// adiciona um ouvinte de evento para quando o usuário rolar a página
window.onscroll = function() {
    var btnTop = document.getElementById("btn-top");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
};
// ------------------------------------------------------------------------------------------------ //

// função para o cabeçalho ficar transparente quando for identificado movimento do scroll
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.cabecalho').addClass('transparencia');
        } else {
            $('.cabecalho').removeClass('transparencia');
        }
    });
});
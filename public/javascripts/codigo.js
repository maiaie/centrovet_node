$(".page-nav ul a.linku, .contenedortop a").on("click", function (e) {
    // 1
    e.preventDefault();
    // 2
    const href = $(this).attr("href");
    // 3
    $("html, body").animate({ scrollTop: $(href).offset().top }, 500);
});

var hamburguesa = document.getElementById('hamburger')
hamburguesa.addEventListener("click", function () {
    this.classList.toggle("is-active");
}, false);

var botonera = document.getElementsByClassName('botonera')[0]
var cliente = document.getElementsByClassName('clientes')[0]

function botonabajo() {
    botonera.classList.toggle('navabierto');
}

//loader

function cargar() {
    var name = document.getElementById('name')
    var email = document.getElementById('email')
    var asunto = document.getElementById('asunto')
    var comentario = document.getElementById('comentario')

    if (name.value !="" && email.value !="" && asunto.value !="" && comentario.value !=""){
    document.getElementById("loader").style.display = "block";
}else{ 
console.log('Debe llenar el formulario')
}
}

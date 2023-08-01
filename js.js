function f1() {
    let nome = $('.form-control').val()
    if (nome.length == 0) {
        document.location.reload()
    } else {    
        $('h1').empty()        
        $('.inp').after(`<h1>Olá, ${nome}!</h1>`)
        $('.form-control').val('')
        $('h1').hide().fadeIn(1000)
    }
}

/*function func() {
   $('nav').slideToggle(500)
}*/



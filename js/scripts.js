$(function(){
    
    $('[data-js="contact-form"]').submit(function(e){
        e.preventDefault();
        
        let contactForm = $(this);
        
        $.post(contactForm.attr("action"), contactForm.serialize()).then(function(){
            alert(`Obrigado por entrar em contato ${contactForm.name} retornaremos em breve!`);
            $(location).attr('href', "https://www.agenciadallas.com.br");
        });

    });


});
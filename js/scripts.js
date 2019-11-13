$(function(){
    
    $('[data-js="contact-form"]').on("submit", function(e){
        e.preventDefault();
        
        let contactForm = $(this);
        
        $.post(contactForm.attr("action"), contactForm.serialize()).then(function(){
            alert(`Obrigado por entrar em contato ${contactForm.name} retornaremos em breve!`);
            let redirect = "https://www.agenciadallas.com.br";
            $(location).attr('href', redirect);
        });

    });


});
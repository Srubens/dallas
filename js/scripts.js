$(function(){

    "use script";
    
    $('[data-js="contact-form"]').submit(function(e){
        e.preventDefault();
        
        let contactForm = $(this);
        let inputName = document.querySelector("#name");
        let redirect = "https://www.agenciadallas.com.br";
        
        $.post(contactForm.attr("action"), contactForm.serialize()).then(function () {
            alert(`Obrigado por entrar em contato ${inputName.value}!\nEntraremos em contato em breve!`);

            $(location).attr('href', redirect);
        });

    });

});
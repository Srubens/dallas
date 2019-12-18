$(function(){

    "use script";

    // $('[data-js="contact-form"]').validate({
    //     rules:{
    //         name:{
    //             maxlength:20,
    //             minlength:3,
    //             required:true
    //         },
    //         email:{
    //             required:true,
    //             emial:true
    //         },
    //         titulo:{
    //             required: true
    //         },
    //         message:{
    //             required:true
    //         }
    //     },
    //     messages:{
    //         name:"Opa! Favor colocar um nome valido!",
    //         email:"Opa! Favor colocar um email valido!",
    //         titulo:"Coloque ao menos do que se trata o assunto!",
    //         message:"Ao menos diga um Oi",
    //     },
    //     submitHandler: function (form){
    //         form.submt()
    //     }
    // });
    
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

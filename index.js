$(function(){
    $('#formulario').submit(function(evento){
        const nombre = $('#nombre');
        const password = $('#password');
        const valorNombre = nombre.val()

        const radio = $("input[type='radio']:checked").length;
        const alertaRadio = $('#alertaRadio');
        
        


        const alertaInfo = $('#alertaInfo');

        /* if (valorNombre == null || valorNombre ==''){
            evento.preventDefault();
            alertaInfo.addClass("alert alert-danger");
            
            alertaInfo.text("Debes rellenar el campo");
            console.log("hola que tal")
        } */

        if (radio == 0){
            evento.preventDefault();
            alertaRadio.text("Debes seleccionar una opción");
            alertaRadio.addClass("alert alert-danger mt-2");
        }
    })
})
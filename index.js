$(function(){
    $('#formulario').submit(function(evento){
        const nombre = $('#nombre');
        const apellido = $('#apellido')
        const rut = $('#rut')
        const direccion = $('#direccion')
        const comuna = $('#comuna')
        const vehiculo = $('#vehiculo')
        const marca = $('#marca')
        const modelo = $('#modelo')
        const anio = $('#anio')
        const si = $('#si')
        const no = $('#no')
        const servicio = $('#servicio')


        const valorNombre = nombre.val()
        const valorApellido = apellido.val()
        const valorRut = rut.val()
        const valorDireccion = direccion.val()
        const valorComuna = comuna.val()
        const valorVehiculo = vehiculo.val()
        const valorMarca = marca.val()
        const valorModelo = modelo.val()
        const valorAnio = anio.val()
        const valorSi = si.val()
        const valorNo = no.val()
        const valorServicio = servicio.val()


        const radio = $("input[type='radio']:checked").length;
        const alertaRadio = $('#alertaRadio');
        
        
        const alertaNombre = $('#alertaNombre');
        const alertaApellido = $('#alertaApellido');
        const alertaRut = $('#alertaRut')

        if (valorNombre == null || valorNombre =='' || valorNombre == 0 || valorNombre == 1 || valorNombre == 2 || valorNombre == 3 || valorNombre == 4 || valorNombre == 5 || valorNombre == 6){
            evento.preventDefault();
            alertaNombre.addClass("alert alert-danger");
            
            alertaNombre.text("Debes rellenar el campo, solo con letras");
            
        }

        if (valorApellido == null || valorApellido =='' || valorApellido == 0 || valorApellido == 1 || valorApellido == 2 || valorApellido == 3 || valorApellido == 4 || valorApellido == 5 || valorApellido == 6){
            evento.preventDefault();
            alertaApellido.addClass("alert alert-danger");
            
            alertaApellido.text("Debes rellenar el campo, solo con letras");
            
        }

        if (valorRut == null || valorRut =='' ){
            evento.preventDefault();
            alertaRut.addClass("alert alert-danger");
            
            alertaRut.text("Debes rellenar el campo, solo con números");
            
        }









        if (radio == 0){
            evento.preventDefault();
            alertaRadio.text("Debes seleccionar una opción");
            alertaRadio.addClass("alert alert-danger mt-2");
        }
    })
})
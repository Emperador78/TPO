

function validarFormulario() {
    // Obtener los valores ingresados por el usuario y .trim() recorta
    // los posibles espacios en blanco al principio y al final.

    var nombre = "";
    var apellido = "";
    var email = "";
    var comentario = "";
    const mensaje = document.getElementsByName("mensaje")



    nombre = document.getElementById("nombre").value.trim();
    apellido = document.getElementById("apellido").value.trim();
    email = document.getElementById("email").value.trim();
    comentario = document.getElementById("comentarios").value.trim();

    // Verificar si algún campo está en blanco
    if (apellido === "" || nombre === "" || email === "" || comentario === "") {
        alert("Por favor, complete todos los campos del formulario.");

        return false;
    }

    // Verificar si el nombre contiene solo caracteres alfabéticos y espacios

    for (var i = 0; i < nombre.length; i++) {
        var charCode = nombre.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
            alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
            return false;
        }
    }

    // Al igual que el nombre verificar que el apellido contiene solo caracteres alfabéticos y espacios

    for (var i = 0; i < apellido.length; i++) {
        var charCode = apellido.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
            alert("El campo 'apellido' solo puede contener caracteres alfabéticos y espacios.");
            return false;
        }
    }

    // verificar que el email contenga @ y al menos un punto entre la @ y el final del string
    let arroba = false;
    let punto = false;
    let caracterNum = 0;

    for (i = 0; i < email.length; i++) {
        var char = email.charCodeAt(i);
        if (char == "64") {

            arroba = true;
            caracterNum = i;



        }
    }


    // verifica que exista un punto al menos entre la arroba y el final
    for (i = caracterNum; i < email.length; i++) {
        var char = email.charCodeAt(i);
        if (char == "46") {
            punto = true;

        }
    }

    if (arroba && punto) {
        // Si arroba y punto son true, enviar el formulario
        alert("Formulario enviado correctamente.");
       
        return true;
    } else {
        if (punto) {
            alert("No es un email valido.Falta un punto");
            return false;
        } else {

            alert("No es un email valido. Falta la @");
            return false;
        }

    }



}


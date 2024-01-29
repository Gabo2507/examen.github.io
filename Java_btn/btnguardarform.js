const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, //Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, puden llevar acentos.
    password: /^.{4,12}$/, //4 a12 digitos.
    correo: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ,
    telefono: /^\d{7,14}$/ //7 a 14 numeros.
}

const validarFormulario = (e)=>{
    switch(e.target.name){
        case "usuario":
            if(expresiones.usuario.test(e.target.value)){
                document.querySelector('#grupo_usuario .input-error').classList.remove('input-error-activo');
            }else{
                document.querySelector('#grupo_usuario .input-error').classList.add('input-error-activo');
            }
        break;
        case "mail":
            if(expresiones.correo.test(e.target.value)){
                document.querySelector('#grupo_mail .input-error').classList.remove('input-error-activo');
            }else{
                document.querySelector('#grupo_mail .input-error').classList.add('input-error-activo');
            }
        break;
        case "celular":
            if(expresiones.telefono.test(e.target.value)){
                document.querySelector('#grupo_celular .input-error').classList.remove('input-error-activo');
            }else{
                document.querySelector('#grupo_celular .input-error').classList.add('input-error-activo');
            }
        break;
        case "re-password":
            validarPassword2();
        break;
    }
}

const validarPassword2 = ()=>{
    const pass1 = document.getElementById('password');
    const pass2 = document.getElementById('re-password');

    if(pass1.value !== pass2.value){
        document.querySelector('#grupo_password2 .input-error').classList.add('input-error-activo');
    }else{
        document.querySelector('#grupo_password2 .input-error').classList.remove('input-error-activo');
    }
}

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();

    let user = document.getElementById('usuario').value;
    let mail = document.getElementById('mail').value;
    let celular = document.getElementById('celular').value;
    let password1 = document.getElementById('password').value;
    let password2 = document.getElementById('re-password').value;

    if(user==''||mail==''||celular==''||password1==''||password2==''){
        document.getElementById('alertGeneral').style.display = 'block';
    }else{
        document.getElementById('alertGeneral').style.display = 'none';
    }
})

//Activar los elementos al presionar una tecla
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})
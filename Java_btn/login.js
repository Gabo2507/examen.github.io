document.getElementById('btnLogin').addEventListener('click', validar);

function validar(){
    let user = document.getElementById('username').value;
    let pass = document.getElementById('passw').value;
    const userName ="Hola";
    const passCode ="123";

    if(user =="" && pass==""){
        alert("Los campos son requeridos");
    }else{
        if(userName==user && passCode==pass){
            location.href= 'Ingreso.html';
        }else{
            alert("Usuario o contraseña son incorrectos");
        }
    }
}
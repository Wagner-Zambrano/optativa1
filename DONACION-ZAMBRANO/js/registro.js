
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const contrasena = document.getElementById('contrasena');
const parrafo = document.getElementById('warnings');



form.addEventListener ("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    if(nombre.value.length >12){
       // alert("muchos caracteres")
        warnings += `El nombre no es valido <br>`
        entrar = true
    }

    if(!regexEmail.test(correo.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(contrasena.value.length < 7){
        warnings += `La contraseña no es valida <br>`
        entrar = true

    }
    if(entrar){
        parrafo.innerHTML = warnings
      
    }else{
        parrafo.innerHTML = "Enviado"
    }
})

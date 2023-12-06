function iniciarLogica(){
    let botonMascota = document.getElementById('select-mascota')
    botonMascota.addEventListener('click', seleccionarMascota)
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    }


function seleccionarMascota(){
    let hipodoge = document.getElementById('Hipodoge')
    let capipepo = document.getElementById('Capipepo')
    let ratigueya = document.getElementById('Ratigueya')
    let span_masco_jug = document.getElementById('mascota_jugador')

    if(hipodoge.checked ){
        span_masco_jug.innerHTML = 'Hipodoge'
        //alert("Seleccionaste La Mascota Hipodoge")
        //alert("PC Selecciona" + eleccion_contrincante(pc))
    }
    else if(capipepo.checked ){
        span_masco_jug.innerHTML = 'Capipepo'
        //alert("Seleccionaste La Mascota Capipepo")
    }
    else if(ratigueya.checked){
        span_masco_jug.innerHTML = 'Ratigueya'
        //alert("Seleccionaste La Mascota Ratigueya")
    } 
    else {
        span_masco_jug.innerHTML = ''
        alert("Debes seleccionar un personaje para iniciar el juego!!!")
    }
    eleccion_contrincante()
}


function eleccion_contrincante(seleccion) {
let enemigo = aleatorio(1, 3);
let span_maco_cont = document.getElementById('mascota_contrincante')
    if(enemigo == 1){
        span_maco_cont.innerHTML = "Hipodoge"
    }
    else if (enemigo == 2){
        span_maco_cont.innerHTML = "Capipepo"  
    }
    else {
        span_maco_cont.innerHTML = "Capipepo" 
    }

}



window.addEventListener('load', iniciarLogica)
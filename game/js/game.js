let ataque
let ataqueenemigo
let vidas_jugador = 3
let vidas_pc = 3
let combates_jugador = 0
let combates_pc = 0

function iniciarLogica(){
    // desactivar seccion ataque
    let sect_ataque = document.getElementById('seleccionar-ataque')
    sect_ataque.style.display = 'none'
    // Desactivar seccion reiniciar
    let sect_reiniciar = document.getElementById('reiniciar')
    sect_reiniciar.style.display = 'none'
    

    let botonMascota = document.getElementById('select-mascota')
    botonMascota.addEventListener('click', seleccionarMascota)

    let btn_Fuego = document.getElementById('fuego')
    btn_Fuego.addEventListener('click', ataqueFuego)
    let btn_Agua = document.getElementById('agua')
    btn_Agua.addEventListener('click', ataqueAgua)
    let btn_Tierra = document.getElementById('tierra')
    btn_Tierra.addEventListener('click', ataqueTierra)
    // Reiniciar Juego
    let btn_reiniciar = document.getElementById('btn_reiniciar')
    btn_reiniciar.addEventListener('click', nueva_partida)
    
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    }
function seleccionarMascota(){
    // Ocultar sección mascotas
    let sect_pers = document.getElementById('seleccionar-mascota')
    sect_pers.style.display = 'none'
    // Mostrar sección seleccionar ataque
    let sect_ataque = document.getElementById('seleccionar-ataque')
    sect_ataque.style.display = 'flex'
 
    let terraflare = document.getElementById('Terraflare')
    let pyroaegis = document.getElementById('Pyroaegis')
    let aquastorm = document.getElementById('Aquastorm')
    let span_masco_jug = document.getElementById('mascota_jugador')

    if(terraflare.checked ){
        span_masco_jug.innerHTML = 'Terraflare'
    }
    else if(pyroaegis.checked ){
        span_masco_jug.innerHTML = 'Pyroaegis'
    }
    else if(aquastorm.checked){
        span_masco_jug.innerHTML = 'Aquastorm'
    } 
    else {
        span_masco_jug.innerHTML = ''
        alert("Debes seleccionar un personaje para iniciar el juego!!!")
        location.reload()
    }
    eleccion_contrincante()
}
function ataqueFuego(){
    ataque = 'FUEGO'
    ataque_pc()
}
function ataqueAgua(){
    ataque = 'AGUA'
    ataque_pc()
}
function ataqueTierra(){
    ataque = 'TIERRA'
    ataque_pc()
}
function ataque_pc(){
    let ataque_enemigo = aleatorio(1,3)
    if(ataque_enemigo == 1){
        ataqueenemigo = 'FUEGO'
    }
    else if (ataque_enemigo == 2){
        ataqueenemigo = 'AGUA'
    }
    else {
        ataqueenemigo = 'TIERRA'
    }
    combate()
}
function revisar_vidas(){
    if(vidas_pc == 0){
        msg_fincombate('Felicitaciones Has Ganado el Desafio!')
        combates_jugador ++
    }
    else if (vidas_jugador == 0){
        msg_fincombate('Lo Lamento Has Perdido el desafio!')
        combates_pc ++
    }
}
function combate(){
    let spanvidas_jugador = document.getElementById('vidas_jugador')
    let spanvidas_contrin = document.getElementById('vidas_pc')
    
    if(ataqueenemigo == ataque){
        crear_mensaje("EMPATE")
    }
    else if (ataque == 'FUEGO' && ataqueenemigo == 'TIERRA') {
         crear_mensaje ('GANASTE!')
         vidas_pc --
         spanvidas_contrin.innerHTML = vidas_pc
    }
    else if (ataque == 'AGUA' && ataqueenemigo == 'FUEGO'){
        crear_mensaje ('GANASTE!')
        vidas_pc --
        spanvidas_contrin.innerHTML = vidas_pc
    }
    else if (ataque == 'TIERRA' && ataqueenemigo == 'AGUA'){
        crear_mensaje('GANASTE!')
        vidas_pc --
        spanvidas_contrin.innerHTML = vidas_pc
    }
    else {
          crear_mensaje('PERDISTE!')
          vidas_jugador --
          spanvidas_jugador.innerHTML = vidas_jugador
    }
    // Revisar las vidas de los combatientes
    revisar_vidas()
}
function crear_mensaje(resultado){
    let resultado_msg = document.getElementById('resultado_msg')
    let ataque_jug = document.getElementById('ataque_jug')
    let ataque_ene = document.getElementById('ataque_ene')

    let notificacion = document.createElement('p')
    let nuevo_ataque_jug = document.createElement('p')
    let nuevo_ataque_ene = document.createElement('p')
    resultado_msg.innerHTML = resultado
    nuevo_ataque_jug.innerHTML = ataque
    nuevo_ataque_ene.innerHTML = ataqueenemigo
    ataque_jug.appendChild(nuevo_ataque_jug)
    ataque_ene.appendChild(nuevo_ataque_ene)
}
function msg_fincombate(result_final){
    // Crea el parrafo de mensaje final
    let resultado_msg = document.getElementById('resultado_msg')
    resultado_msg.innerHTML = result_final
    let btn_Fuego = document.getElementById('fuego')
    btn_Fuego.disabled = true
    let btn_Agua = document.getElementById('agua')
    btn_Agua.disabled = true
    let btn_Tierra = document.getElementById('tierra')
    btn_Tierra.disabled = true
    // Habilitar Seccion reiniciar
    let sect_reiniciar = document.getElementById('reiniciar')
    sect_reiniciar.style.display = 'block'
}

function eleccion_contrincante(seleccion) {
let enemigo = aleatorio(1, 3);
let span_maco_cont = document.getElementById('mascota_contrincante')
    if(enemigo == 1){
        span_maco_cont.innerHTML = "Terraflare"
    }
    else if (enemigo == 2){
        span_maco_cont.innerHTML = " Pyroaegis"  
    }
    else {
        span_maco_cont.innerHTML = " Aquastorm" 
    }
    contrincante = enemigo
}

function nueva_partida(){
    location.reload()
}


window.addEventListener('load', iniciarLogica)
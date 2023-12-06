function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function eleccion(seleccion) {
        const opciones = ["", "Piedra", "Papel", "Tijera"];
        return opciones[seleccion] || "¡No elegiste una opción válida!";
    }

    let jugadorPuntuacion = 0;
    let pcPuntuacion = 0;

    // Jugar hasta que uno de los jugadores alcance dos victorias
    while (jugadorPuntuacion < 3 && pcPuntuacion < 3) {
        let pc = aleatorio(1, 3);
        let jugador = prompt("Elige: 1=Piedra 2=Papel 3=Tijera");

        // Verificar si la entrada del jugador es válida
        jugador = parseInt(jugador);
        if (isNaN(jugador) || jugador < 1 || jugador > 3) {
            alert("Entrada inválida. Elige una opción válida.");
            continue; // Saltar a la siguiente iteración del bucle
        }

        alert("Elegiste: " + eleccion(jugador));
        alert("PC elige: " + eleccion(pc));

        // Algoritmo del juego
        if (pc === jugador) {
            alert("EMPATE!!");
        } else if ((jugador - pc + 3) % 3 === 1) {
            alert("GANASTE!!!");
            jugadorPuntuacion++;
        } else {
            alert("PERDISTE!!!");
            pcPuntuacion++;
        }

        alert(`Puntuación actual - Jugador: ${jugadorPuntuacion}, PC: ${pcPuntuacion}`);
    }

    // Determinar al ganador final
    if (jugadorPuntuacion === 3) {
        alert("¡Eres el vencedor final!");
    } else {
        alert("La PC es el vencedor final. ¡Mejor suerte la próxima vez!");
    }

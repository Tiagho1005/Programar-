function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function election(jugada) {
    let result;
    if (jugada == 1) {
        result = "Piedra 🥌";
    } else if (jugada == 2) {
        result = "Papel 📄";
    } else if (jugada == 3) {
        result = "Tijera ✌";
    } else {
        result = "Opción inválida";
    }
    return result;
}

// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0
let empates = 0

while (triunfos < 3 && perdidas < 3) {
    jugador = parseInt(prompt("Elige: 1 para Piedra, 2 para Papel, 3 para Tijera"));
    pc = random(1, 3);
    alert("El contrincante eligió " + election(pc));
    alert("Elegiste " + election(jugador));

    // combate
    if (pc == jugador) {
        alert("Empate 🤝");
        empates = empates + 1
    } else if ((jugador == 1 && pc == 3) ||
        (jugador == 2 && pc == 1) ||
        (jugador == 3 && pc == 2)) {
        alert("Has ganado 😈");
        triunfos = triunfos + 1
    } else {
        alert("¡El contrincante ganó! 🤮");
        perdidas = perdidas + 1
    }
}

alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces. Empataste " + empates + " veces.")
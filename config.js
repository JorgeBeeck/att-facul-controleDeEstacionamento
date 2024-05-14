// Array para simular um banco de dados de reservas
let reservas = [];

// Limite de vagas
const limiteVagas = 300;

function salvarReserva(placa, proprietario, apartamento, bloco, modelo, cor, vaga) {

    if (vaga < 1 || vaga > limiteVagas) {
        alert("Por favor, escolha uma vaga entre 1 e " + limiteVagas + ".");
        return;
    }

    const vagaOcupada = reservas.some(reserva => reserva.vaga === vaga);
    
    if (vagaOcupada) {
        alert("Esta vaga já está ocupada. Por favor, escolha outra.");
        return;
    }

    const reserva = {
        placa,
        proprietario,
        apartamento,
        bloco,
        modelo,
        cor,
        vaga
    };

    reservas.push(reserva);

    console.log("Reserva realizada com sucesso:", reserva);

    alert("Reserva realizada com sucesso!");
}

function listarVagasDisponiveis() {
    const vagasDisponiveis = [];

    for (let i = 1; i <= limiteVagas; i++) {
        // Verifica se a vaga está ocupada
        const ocupada = reservas.some(reserva => reserva.vaga === i);

        if (!ocupada) {
            vagasDisponiveis.push(i);
        }
    }

    console.log("Vagas disponíveis:", vagasDisponiveis);

    alert("Vagas disponíveis: " + vagasDisponiveis.join(", "));
}

function listarVagasOcupadas() {
    const vagasOcupadas = [];

    reservas.forEach(reserva => {
        vagasOcupadas.push(reserva.vaga);
    });

    console.log("Vagas ocupadas:", vagasOcupadas);

    alert("Vagas ocupadas: " + vagasOcupadas.join(", "));
}

document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const placa = document.getElementById("placa").value;
    const proprietario = document.getElementById("proprietario").value;
    const apartamento = document.getElementById("apartamento").value;
    const bloco = document.getElementById("bloco").value;
    const modelo = document.getElementById("modelo").value;
    const cor = document.getElementById("cor").value;
    const vaga = parseInt(document.getElementById("vaga").value);

    salvarReserva(placa, proprietario, apartamento, bloco, modelo, cor, vaga);
});

document.getElementById("btnVagasDisponiveis").addEventListener("click", function() {
    listarVagasDisponiveis();
});

document.getElementById("btnVagasOcupadas").addEventListener("click", function() {
    listarVagasOcupadas();
});

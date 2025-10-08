async function executar() {
    if (await perguntar("É mamifero?")) {
        if (await perguntar("É quadrupede?")) {
            if (await perguntar("É carnivoro? ")) {
                resposta("É o LEÃO");
            } else if (await perguntar("É herbivoro?")) {
                resposta("É o CAVALO");
            } else {
                resposta("");
            }
        }
    }
}

async function perguntar(texto) {
    const result = await Swal.fire({
        title: texto,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim",
        cancelButtonText: "Não"
    });
    return result.isConfirmed;
}

function resposta(texto) {
    if (texto !== "") {
        Swal.fire({
            title: texto,
            icon: "success"
        });
    } else {
        Swal.fire({
            title: "Animal não encontrado!",
            icon: "error"
        });
    }
}
function executar() {
    console.log(perguntar("É mamifero?"));
}


function perguntar(texto) {
    Swal.fire({
        title: texto,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim",
        cancelButtonText: "Não"
    }).then((result) => {
        return result.isConfirmed;
    });
}
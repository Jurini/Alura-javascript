var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 500) {
        pesoValido = false;
        console.log("Peso inválido !");
        tdImc.textContent = "Peso inválido !";
        paciente.classList.add("paciente-inavalido");

    }

    if (altura <= 0 || altura >= 3.00) {
        alturaValida = false;
        console.log("Altura inválida !");
        tdImc.textContent = "Altura inválida !";
        paciente.classList.add("paciente-inavalido");

    }

    if (pesoValido && alturaValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);

    }

}





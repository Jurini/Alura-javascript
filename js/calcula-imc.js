var titulo = document.querySelector(".titulo");
titulo.textContent = "Tayse Nutrição";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);



    if (!pesoValido) {
        pesoValido = false;
        console.log("Peso inválido !");
        tdImc.textContent = "Peso inválido !";
        paciente.classList.add("paciente-inavalido");
    }

    if (!alturaValida) {
        alturaValida = false;
        console.log("Altura inválida !");
        tdImc.textContent = "Altura inválida !";
        paciente.classList.add("paciente-inavalido");
    }

    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;

    }

}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}


function validaPeso(peso) {
    if (peso >= 0 && peso < 200) {
        return true;
    } else {
        return false;
    }
}


function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }

}







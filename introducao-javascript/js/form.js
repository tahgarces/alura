var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function () {
    event.preventDefault();
    console.log("Fui clicado");

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    var erro = validaPaciente(paciente);


    if (erro.length > 0) {
        exibeErros(erro);
        return;
    }

    tabela.appendChild(pacienteTr);

    form.reset();

});


function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function exibeErros(erros) {
   
    var mensagemErro = document.querySelector("#mensagem-erro");
    
    
     mensagemErro.innerHTML = "";
    
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        mensagemErro.appendChild(li);
    });
}

function validaPaciente(paciente) {

    var erros = [];

    
    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }
    
    if (!validaPeso(paciente.peso)) {
        erros.push("O peso é invalido!");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("A altura é invalida!");
    }

    return erros;
}

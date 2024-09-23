var titulo = document.querySelector('h1');
titulo.textContent = "aparecida Nutricionista";

var dadosPaulo = document.querySelector ('#linhaPaulo');
var peso = dadosPaulo.querySelector('.info-peso').textContent;
var altura = dadosPaulo.querySelector('.info-altura').textContent;
var imc = peso / (altura * altura);
dadosPaulo.querySelector('.info-imc').textContent;

var pacientes = document.querySelectorAll('paciente');
for (let i = 0; i < pacientes.length; i++){
    var peso = pacientes[i]
}

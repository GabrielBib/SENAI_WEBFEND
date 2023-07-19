let tarefas = "";
let itensTarefa = document.querySelector(".tarefas")

tarefas = prompt("Escreva suas tarefas e separe-as com ;");

itensTarefa.innerHTML = tarefas.split(";");

console.log(tarefas);
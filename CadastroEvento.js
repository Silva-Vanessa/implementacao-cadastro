var data = new Date();
var dataDoEvento = new Date("2022/07/30");
if (dataDoEvento > data){
    console.log("Evento permitido.")
}else{
    console.log("Evento não permitido, escolha outra data para realização")
}


let idadedoParticipante = 21
if(idadedoParticipante > 18){
    console.log("Cadastro Permitido")
}else{
    console.log("Idade inválida. Evento permitido somente para maiores de idade")
}



let listaDeParticipantes = ["participante1","participante2","participante3","participante4"];

if (listaDeParticipantes.length < 100){
    console.log("Vaga Disponível. Finalize o cadastro")
}else{ 
    console.log("Cadastro não permitido, Vagas Esgotadas")
}



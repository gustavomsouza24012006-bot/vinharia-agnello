var nome = prompt("Digite o seu nome: ");

var idade = Number(prompt("Digite a sua idade: "));

var endereco = prompt("Digite o seu endereço: ");

var cpf = prompt("Digite o seu CPF: ");

if (idade < 18) {

    alert("Idade invalida para cadastro");

}else if((idade == "") || (endereco == "")|| ((cpf == ""))|| ((nome == ""))){
    alert("Informações em branco, preencha as mesmas por gentileza ");

} else {
    alert("Cadastro realizado com sucesso.")
    console.log("<---Cadastro realizado com sucesso--->");
    console.log("O seu nome é: " + nome);
    console.log("A sua idade é: " + idade);
    console.log("O seu endereço é: " + endereco);
    console.log("O seu cpf é: " + cpf);

}
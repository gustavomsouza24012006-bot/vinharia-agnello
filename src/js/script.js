let nomeDoVinho = prompt("Digite o nome do vinho:");
let tipoDoVinho = prompt("Digite o tipo do vinho (Tinto, Branco ou Rose):");
let safra = prompt("Digite a safra do vinho:");
let quantidade = prompt("Digite a quantidade em estoque:");


if ((tipoDoVinho != 'Tinto') || (tipoDoVinho != 'Branco') || (tipoDoVinho != 'Rose')){
    alert('O tipo de vinho digitado esta incorreto.')
    tipoDoVinho = prompt("Selecione qual o tipo do vinho (Tinto, Branco ou Rose:) ")
}else{
    alert("Cadastro realizado! Veja os detalhes no console.");
}

alert("A seguir, veja os detalhes do vinho no console.");

console.log("==== CADASTRO DO VINHO ====");
console.log("Nome do vinho: " + nomeDoVinho);
console.log("Tipo: " + tipoDoVinho);
console.log("Safra: " + safra);
console.log("Quantidade em estoque: " + quantidade);

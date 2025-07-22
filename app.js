{alert('Boas-vindas ao Jogo do Número Secreto!');
let numeroSecreto = 9;
console.log(`O número secreto é ${numeroSecreto}`);
let chute

//Adicionando um While
while (chute != numeroSecreto){
    chute = prompt("Digite um número entre 0 e 10:");
//Se o chute for igual ao número secreto
    if (numeroSecreto == chute) {
        alert(`Parabéns! Você acertou o número secreto! O número era ${numeroSecreto}.`);
}
//Se o chute for diferente do número secreto
    else {
        if(numeroSecreto > chute) {
            alert(`Que pena! Você errou. O número secreto é maior que ${chute}.`);
}       else {
            alert(`Que pena! Você errou. O número secreto é menor que ${chute}.`);
} }
}
}

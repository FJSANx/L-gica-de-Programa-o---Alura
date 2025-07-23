alert('Boas-vindas ao Jogo do Número Secreto!');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(`O número secreto é ${numeroSecreto}`);
let chute;
let tentativas = 1;

//Adicionando um While
while (chute != numeroSecreto){
    chute = prompt("Digite um número entre 0 e 100:");
//Se o chute for igual ao número secreto
    if (numeroSecreto == chute) {
        //Parar o While
    break;
        }
//Se o chute for diferente do número secreto
    else {
        if(numeroSecreto > chute) {
            alert(`Que pena! Você errou. O número secreto é maior que ${chute}.`);
}       else {
            alert(`Que pena! Você errou. O número secreto é menor que ${chute}.`);
            } 
        tentativas++;
        }       
    }
    
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Parabéns! Você acertou o número secreto! O número era ${numeroSecreto} e você levou ${tentativas} ${palavraTentativas}.`);
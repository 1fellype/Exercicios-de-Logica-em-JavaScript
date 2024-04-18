/* Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem
dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da
média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média.
Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi
aprovado em exame. Se o aluno não foi aprovado, indicar uma mensagem informando esta
condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição. */

let nota1, nota2, nota3, nota4, media, exame, final;

nota1=Number(prompt("Digite a primeira nota do aluno: "));
nota2=Number(prompt("Digite a segunda nota do aluno: "));
nota3=Number(prompt("Digite a terceira nota do aluno: "));
nota4=Number(prompt("Digite a quarta nota do aluno: "));

media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7) {
    alert(`Aluno aprovado! Nota: ${media}`)
}

else if (media < 7) {
    exame=Number(prompt("Digite a nota do exame de recuperação: "));
    final = (exame + media) / 2
    
    if (final >= 5) {
        alert(`Aluno aprovado, média final: ${final}.`)
    }
} 

else {
    alert(`O aluno não foi aprovado! ${final} :(`)
}

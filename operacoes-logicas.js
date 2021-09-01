var nome, nota1, nota2, passou;

passou = false;

nome = prompt("Digite o nome do aluno:");
nota1 = parseFloat(prompt("Digite a primeira nota do aluno:"));
nota2 = parseFloat(prompt("Digite a segunda nota do aluno:"));

media = (nota1+nota2)/2

if(media >= 6)
{
    passou = true;
}
if(media >= 6)
{
    alert("Aprovado!"+nome);
}
else
    {
        alert("Reprovado!"+nome);
    }
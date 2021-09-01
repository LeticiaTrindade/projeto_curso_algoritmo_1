var nota1, nota2, media;
nota1 = parseFloat(prompt("Digite a primeira nota(de 0 a 10):"));
nota2 = parseFloat(prompt("Digite a segunda nota(de 0 a 10)): "));
media = (nota1 + nota2)/2;

if(media >= 6)
    alert("Aprovado com media igual a "+ media);

else
    alert("Reprovado com a media igual a "+ media);

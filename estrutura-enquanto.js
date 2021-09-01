function acaoBotao()
{

    var limite, contador, nome, idade;
    limite = prompt("Informe quantas vezes as idades serão contadas.");
    contador = 0;

    while(contador<limite)
    {

        nome= prompt("Qual o nome?");
        idade = prompt("Qual a idade de "+nome+"?")
        if (idade < 18)
        {
            document.getElementById("paragrafo").innerText = nome + " é menor de idade."
        }
        else
        {
            document.getElementById("paragrafo").innerText = nome+ " é maior de idade."
        }
        contador++;
    }

}
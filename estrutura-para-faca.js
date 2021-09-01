function acaoBotao()
{

    var fatorial, numero;
    numero = prompt("Digite o número para fatorarmos");
    fatorial = 1;

    for (contador = 1; contador <= numero; contador++)
        {
            fatorial = fatorial * contador;
        }
    document.getElementById("paragrafo").innerText = fatorial;
}

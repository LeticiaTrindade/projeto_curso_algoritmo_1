function acaoBotao()
{

    var valor1, valor2, sairLoop;
    do {
        
        valor1 = parseInt(prompt("Digite o primeiro valor:"));
        valor2 = parseInt(prompt("Digite o segundo valor:"));
        document.getElementById("paragrafo").innerText = "Resultado: "+ (valor1+valor2);
        sairLoop = prompt("Deseja sair? S/N");
    }while(sairLoop == "N")

}
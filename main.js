const name = prompt("SEJA BEM VINDA \n Qual o seu nome?");
document.write("Olá, " + name);
const question = prompt("Que tal responder algumas perguntinhas rápidas? \n 1.Sim \n 2.Não");
    if (question == 1)
{
        const question01 = prompt("Onde nasceu Machado de Assis? \n A:Brasil \n B:Portugal \n C:Espanha");
        const question02 = prompt("Onde nasceu Paulo Coelho? \n A:Portugal \n B:Chile \n C: Brasil");
        const question03 = prompt("onde nasceu Pablo Neruda? \n A:Brasil \n B:Chile \n C:Peru");
}   else
 {
        document.write ("Valeu!")
}
if (question01 == "A" ) {
    const corretas = document.getElementById("corretas").appendChild=("question01");
}


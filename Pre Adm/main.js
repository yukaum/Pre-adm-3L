const name = prompt("SEJA BEM VINDA \n Qual o seu nome?");
const question = prompt("Que tal responder algumas perguntinhas rápidas? \n 1.Sim \n 2.Não");


if (question == 1)
 {
  const question01 = prompt("Onde nasceu Machado de Assis? \n A:Brasil \n B:Portugal \n C:Espanha");      
  const question02 = prompt("Onde nasceu Paulo Coelho? \n A:Portugal \n B:Chile \n C: Brasil");
  const question03 = prompt("onde nasceu Pablo Neruda? \n A:Brasil \n B:Chile \n C:Peru");
  
  
  if (question01 == "A"){
    document.getElementById("correta01").innerHTML= "01";
    } else {
    document.getElementById("demo01").innerHTML= "01";
    }
    if (question02 == "C"){
      document.getElementById("correta02").innerHTML= "02";
      } else {
      document.getElementById("demo02").innerHTML= "02";
      }
      if (question03 == "B"){
        document.getElementById("correta03").innerHTML= "03";
        } else {
        document.getElementById("demo03").innerHTML= "03";
        }

  }   else {
    document.getElementById("bye").innerHTML= "Obrigada, até a próxima!";
}



document.getElementById("welcome").innerHTML= "Olá, " + name;


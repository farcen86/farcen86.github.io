const menunav = document.querySelector('.menu-nav');

const menunv = [
    'Hospitalar', 
    'Descontos e Beneficios', 
    'Vitaminas', 'Perfumes', 
    'Linha Infantil'
  ];
const renderMenu = () => {
  const menuHTML = menunv.map((menu)=> {
    return `<li>${menu}</li>`
  });

  console.log(menuHTML);
  menunav.innerHTML = menuHTML.join(' ');

}

renderMenu();

/*configuração de passagem automatica do slide*/

let count = 1;
document.getElementById("radio1").checked = true;

/*chama a função que criei logo abaixo e determina 5 mil milesegundo para ele ativar*/

setInterval(function(){
  nextimage();
}, 5000);

/*contador para passagem da posição slide*/

function nextimage(){
  count++;
  if(count>4){
    count = 1;
  }

/*faz a checagem e adiciona 1 na posicação slide */

  document.getElementById("radio"+count).checked = true;

}
const sorteio = () => {
  const number = Math.floor((Math.random()*3)+1);
  console.log(number);
  if (number === aposto()) {
    return "Parabens voce ganhou";
  } else {
    return "Tente novamente"; 
  }
}

const aposto = () => 1;


console.log(sorteio(aposto));
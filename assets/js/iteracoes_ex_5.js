
$('.circular.info.icon.link.ex5')[0].addEventListener("click", function() {
    abreModal("5)	Escreva um programa que peça ao usuário que digite um número inteiro, que será a quantidade de números numa sequência Fibonacci, e em seguida mostre a sequência. Comece a contagem do 1. (Fibonacci é uma sequência de números onde a soma dos dois últimos valores resultam no valor seguinte → 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 …)")
  });

  function calculoFibonacci(){
    let numero = $('#ex5_numero')[0].value;
    let msg = $('#msg_ex5')[0];
    let penultimo=0, ultimo=1;
    let soma;
    let res =[1];
    
    if(numero != '') numero = parseInt(numero)
    if(numero<=2)
     soma = numero-1;
    else
     for(var count=2 ; count<=numero ; count++){
      soma = ultimo + penultimo;
      penultimo = ultimo;
      ultimo = soma;
      res.push(soma)
     }
    msg.classList.remove('d-none');
    
    if(numero == ''){
      msg.classList.add('red');
      msg.classList.remove('green');
      msg.innerText = "Digite um numero antes de calcular!";
    }
    else{
      msg.classList.remove('red');
      msg.classList.add('green');
      msg.innerHTML="A soma do seu fibonacci é: " +res.join();
    }
  }
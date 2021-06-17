
$('.circular.info.icon.link.ex4')[0].addEventListener("click", function() {
    abreModal("Escreva um programa que receba int a e retorne seu valor em formato de soma de suas unidades, dezenas, centenas, milhares, etc.")
  });

  function Soma(){
    let inteiroBruto = $('#ex4_numero')[0].value;
    inteiroBruto = inteiroBruto.split('');
    let res = [];
    for (let i = 0; i < inteiroBruto.length; i++) {
      let qtdUnidades = inteiroBruto.length - (i+1);
      let element = inteiroBruto[i];
      if(qtdUnidades >= 0 && element != '0'){
        while(qtdUnidades > 0){
          element = element + '0';
          qtdUnidades--;
        }
        res.push(element); 
      } 
    }
    res = res.join(' + ');
    $('#msg_ex4')[0].classList.remove('d-none');
    if(res == ''){
      $('#msg_ex4')[0].classList.add('red');
      $('#msg_ex4')[0].classList.remove('green');
      $('#msg_ex4')[0].innerText = "Digite um numero antes de somar!" + res;
    }
    else{
      $('#msg_ex4')[0].classList.remove('red');
      $('#msg_ex4')[0].classList.add('green');
      $('#msg_ex4')[0].innerText = "A soma é: " + res;
    }
  }
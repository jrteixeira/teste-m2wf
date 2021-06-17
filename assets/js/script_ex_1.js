import calculaAniversario from './modules/CalculaDataAniversario.js'


$('#ex1_btn')[0].addEventListener("click", function() {
    let ano = calculaAniversario($('#ex1_idade')[0].value);
    let nome = $('#ex1_nome')[0].value;
    $('.ui.basic.modal.ex1 .icon.header')[0].innerText = 'Parabéns ' + nome + '! Você completará 100 anos em';
    $('.ui.basic.modal.ex1 p')[0].innerText = ano;
    $('.ui.basic.modal.ex1')
    .modal('show')
    ;
  });

  $('.circular.info.icon.link')[0].addEventListener("click", function() {
    abreModal("Escreva um programa na linguagem que desejar que peça ao usuário que escreva seu nome e idade. Em seguida apresente uma mensagem na tela do usuário com o nome digitado e o ano em que esta pessoa fará 100 anos de idade. Caso o usuário digite um número negativo ou maior que 100, apresente a seguinte mensagem: “Idade inválida”. Utilize 2020 como o ano atual.")
  });
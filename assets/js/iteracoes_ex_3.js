
$('.circular.info.icon.link.ex3')[0].addEventListener("click", function() {
    abreModal("Dado um array populado exclusivamente com números inteiros e positivos, escreva um programa que calcule a soma de todos os números exceto pelo mais alto e mais baixo. Leve como base que o usuário pode digitar arrays de diversos tamanhos e diferentes valores.")
  });

  function SomaVetor(){
    const vetBruto = $('#ex3_numero_array')[0].value;
    let newVet = vetBruto.split(",");
    let menor;
    let maior;
    let soma = 0;
    newVet.forEach(e => {
        if(menor == undefined) menor = e;
        else if(parseInt(e) < menor) menor = e;
        if(maior == undefined) maior = e;
        else if(parseInt(e) > maior) maior = e;
    });
    newVet.splice(newVet.indexOf(menor), 1);
    newVet.splice(newVet.indexOf(maior), 1);
    newVet.forEach(e => {
        soma += parseInt(e)
    });
    $('#msg_ex3')[0].classList.remove('d-none');
    $('#msg_ex3')[0].innerText = "A soma é: " + soma;
  }
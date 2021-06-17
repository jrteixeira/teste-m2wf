const btnReset = $('#btn_reset')[0];
$('#ex2_numero').keyup((e)=>{
    CalculaParImpar();
})
function CalculaParImpar(){
    let numero = parseInt($('#ex2_numero')[0].value);
    if(numero != 0){
        if (numero % 2 == 0) {
            $('#msg_ex2')[0].classList.remove('d-none');
            $('#msg_ex2')[0].classList.remove('red');
            $('#msg_ex2')[0].classList.add('green');
            $('#msg_ex2')[0].innerText = "Este numero é par";
        }else{
            $('#msg_ex2')[0].classList.remove('d-none');
            $('#msg_ex2')[0].classList.remove('green');
            $('#msg_ex2')[0].classList.add('red');
            $('#msg_ex2')[0].innerText = "Este numero é impar";
        }
    }else{
        $('#ex2_numero').attr( "disabled", "disabled" );
        $('#msg_ex2')[0].classList.remove('green');
        $('#msg_ex2')[0].classList.add('red');
        $('#msg_ex2')[0].innerText = "Programa encerrado!";
        btnReset.classList.remove('d-none')
    }
}
function resetProgram(){
    btnReset.classList.add('d-none');
    $('#ex2_numero')[0].value = '';
    $('#msg_ex2')[0].classList.add('d-none');
    $('#ex2_numero').removeAttr( "disabled", "disabled" );
}

$('.circular.info.icon.link.ex2')[0].addEventListener("click", function() {
    abreModal("Escreva um programa que peça ao usuário que digite um número inteiro. Em seguida apresente na tela uma mensagem informando se o número é par ou ímpar e retorne à pergunta inicial, em loop. Caso o número digitado seja “0”, o programa encerra.")
  });
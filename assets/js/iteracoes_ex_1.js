
$('#ex1_nome').keyup((e)=>{
    calculaProgresso();
})
$('#ex1_idade').change((e)=>{ 
    let inp = parseInt(e.currentTarget.value);  
    if(inp < 0 || inp > 100){
        $('#error_ex1')[0].classList.remove('d-none');
        $('#ex1_btn').attr( "disabled", "disabled" );
    }else{
        $('#error_ex1')[0].classList.add('d-none')
        $('#ex1_btn').removeAttr( "disabled", "disabled" );
    }

    calculaProgresso();
})
function calculaProgresso(){
    let nome = $('#ex1_nome')[0].value;
    let idade = $('#ex1_idade')[0].value;
    if((nome != '' || nome != undefined) || idade != '' || idade != undefined)
        $('#example3').progress({
        percent: 50
        });
    if((nome != ''  && nome != undefined) && (idade != '' && idade != undefined))
        $('#example3').progress({
        percent: 100
        });
    if((nome == '' ||  nome == undefined) && (idade == '' || idade == undefined))
        $('#example3').progress({
        percent: 0
        });
}
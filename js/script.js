$(document).ready(function(){
    $('#cpf').mask('000.000.000-00');
    $('#nascimento').mask('00/00/0000');
    $('#cep').mask('00000-000');

    $('#salario').priceFormat({
        prefix: 'R$ ',
        centsSeparator: ',',
        thousandsSeparator: '.'
        });
});



    









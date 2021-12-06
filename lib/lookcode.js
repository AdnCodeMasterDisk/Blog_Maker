//const code = $('#constructor');

$('#lookcodebtn').click(function(){    

    var getcode = document.querySelector('#constructor').innerHTML;
    var loadcode = document.querySelector('#codetextarea').value += getcode;

    //$('#bloquescont').toggleClass('hide');
    $('#constructor').toggleClass('hide');
    $('#codearea').toggleClass('hide');
    $('#lookcodebtn').toggleClass('hide');
    $('#savecodebtn').toggleClass('hide');
});


$('#savecodebtn').click(function(){    

    var clearcont = document.querySelector('#constructor').innerHTML = '';
    var newcode = document.querySelector('#codetextarea').value;
    var addcode = document.querySelector('#constructor').innerHTML += newcode;
    var clearcodetextarea = document.querySelector('#codetextarea').value = '';

    //$('#bloquescont').toggleClass('hide');
    $('#constructor').toggleClass('hide');
    $('#codearea').toggleClass('hide');
    $('#lookcodebtn').toggleClass('hide');
    $('#savecodebtn').toggleClass('hide');
});


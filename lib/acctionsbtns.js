$('#drawemenu').click(function(){
    $('#bloquescont').toggleClass('hide');
    $('#constructor').toggleClass('full');   
    $('#constructor').toggleClass('zoomin');   
});

$('#prevbtn').click(function(){
    $('#bloquescont').toggleClass('hide');
    $('#topbar').toggleClass('hide');
    $('#constructor').toggleClass('full');
    $('#constructor').removeClass('zoomin');
    $('#constructor').toggleClass('mt115');
    $('#exitprev').toggleClass('hide');
});

$('#prevexitbtn').click(function(){
    $('#bloquescont').toggleClass('hide');
    $('#topbar').toggleClass('hide');
    $('#constructor').toggleClass('full');
    $('#constructor').toggleClass('mt115');
    $('#exitprev').toggleClass('hide');
    $('#constructor').addClass('zoomin');
});






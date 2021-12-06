function setupEditor() {

    window.editor = ace.edit("addcode");
    window.editor.setTheme("ace/theme/monokai");
    window.editor.session.setMode("ace/mode/html");
    window.editor.setValue( `<div class="bloque zoommin relative">
    <div class="cont" data-editable data-name="contenido">

    </div>
    </div>` ); //1 = moves cursor to end


    editor.focus();

    window.editor.setOptions({
        enableSnippets: true,
        enableLiveAutocompletion: true,
        enableEmmet: true,
    });

    //editor.session.setUseWrapMode(true);

}


setupEditor();


function addcode(){
    editor.session.setUseWrapMode(true);
    var addclearace = document.querySelector('.ace_text-layer').textContent = '';
    window.editor.setValue( `<div class="bloque zoommin relative">
    <div class="cont" data-editable data-name="contenido">

    </div>
    </div>` );

    $('#constructor').toggleClass('hide');
    $('#addcode').toggleClass('hide');
    $('#savenewcodebtn').removeClass('hide');
    $('#btnaddcode').toggleClass('hide');
}


function guardarnuevo() {
    editor.session.setUseWrapMode(false);
    var rendercode = document.querySelector('.constructor').innerHTML += document.querySelector('.ace_text-layer').textContent;
 //1 = moves cursor to end
    var clearace = document.querySelector('.ace_text-layer').textContent = '';
    window.editor.setValue( `<div class="bloque zoommin relative">
    <div class="cont" data-editable data-name="contenido">

    </div>
    </div>` ); //1 = moves cursor to end

    $('#constructor').toggleClass('hide');
    $('#addcode').toggleClass('hide');
    $('#savenewcodebtn').addClass('hide');
    $('#btnaddcode').toggleClass('hide');
}


function vercodigoenace(){
    editor.session.setUseWrapMode(true);
    var getcode = document.querySelector('#constructor').innerHTML;
    var loadcode =  window.editor.setValue(getcode);

    //$('#bloquescont').toggleClass('hide');
    $('#constructor').toggleClass('hide');
    $('#addcode').toggleClass('hide');
    $('#lookcodebtn-editado').addClass('hide');
    $('#savecodebtn-edit').toggleClass('hide');
}


function savecode(){
    editor.session.setUseWrapMode(false);
    var clearcont = document.querySelector('#constructor').innerHTML = '';
    var newcode =  document.querySelector('.ace_text-layer').textContent;
    var addcode = document.querySelector('#constructor').innerHTML += newcode;
    var clearace = document.querySelector('.ace_text-layer').innerHTML = '';
    var clearace = document.querySelector('.ace_text-layer').textContent = '';

    //$('#bloquescont').toggleClass('hide');
    $('#constructor').toggleClass('hide');
    $('#addcode').toggleClass('hide');
    $('#lookcodebtn-editado').removeClass('hide');
    $('#savecodebtn-edit').toggleClass('hide');
}
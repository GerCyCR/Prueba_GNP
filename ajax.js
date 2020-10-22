// este es el codigo nuevo que hice para llamar los datos


var $select = $('#marca');
url = 'https://ahorraseguros.mx/ws-autos/servicios/marcas';
datos = {};
$.getJSON(url, datos, function(data){
    // console.log(response);


    $select.html('');
    for (var i = 0; i < data ['marca'].length; i++){
        $select.append('<option id"' + data['marca'][i]['id']+'">' + data['marca'][i]['text']+ '</option>');
    }
});
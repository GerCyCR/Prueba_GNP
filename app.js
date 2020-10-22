// console.log('Correcto');

// var selector = document.getElementById("numeros");

document.querySelector('#marca').addEventListener('click', traerMarcas);

function traerMarcas(){
    // console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'https://ahorraseguros.mx/ws-autos/servicios/marcas', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            // console.log(this.responseURL);
            let datos = JSON.parse(this.responseText);
            // console.log(datos);
            let marca = document.querySelector('#marca');
            marca.innerHTML = '';

            for(let item of datos){
                // console.log(item.id);
                marca.innerHTML += `
                    <option>${item.text}</option>
                `
            }
        }
    }
}

document.querySelector('#modelo').addEventListener('click', traerModelo);

function traerModelo(){
    // console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'https://ahorraseguros.mx/ws-autos/servicios/modelos?aseguradora=&marca=CHEVROLET', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            // console.log(this.responseURL);
            let datos = JSON.parse(this.responseText);
            // console.log(datos);
            let modelo = document.querySelector('#modelo');
            modelo.innerHTML = '';

            for(let item of datos){
                // console.log(item.id);
                modelo.innerHTML += `
                    <option>${item.text}</option>
                `
            }
        }
    }
}

document.querySelector('#descripcion').addEventListener('click', traerDescripcion);

function traerDescripcion(){
    // console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'https://ahorraseguros.mx/ws-autos/servicios/descripciones?aseguradora=&marca=CHEVROLET&modelo=2010', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            // console.log(this.responseURL);
            let datos = JSON.parse(this.responseText);
            // console.log(datos);
            let descripcion = document.querySelector('#descripcion');
            descripcion.innerHTML = '';

            for(let item of datos){
                // console.log(item.id);
                descripcion.innerHTML += `
                    <option>${item.text}</option>
                `
            }
        }
    }
}

document.querySelector('#subDescripcion').addEventListener('click', traersubDescripcion);

function traersubDescripcion(){
    // console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'https://ahorraseguros.mx/ws-autos/servicios/subdescripciones?aseguradora=&marca=CHEVROLET&modelo=2010&descripcion=AVEO', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            // console.log(this.responseURL);
            let datos = JSON.parse(this.responseText);
            // console.log(datos);
            let subDescripcion = document.querySelector('#subDescripcion');
            subDescripcion.innerHTML = '';

            for(let item of datos){
                // console.log(item.id);
                subDescripcion.innerHTML += `
                    <option>${item.text}</option>
                `
            }
        }
    }
}

// function LlenarEdad(){
//     var selector = document.getElementById("#edad").value;

//     for (var selector = 0; selector < 100; selector++){
//         // console.log(LlenarEdad);
//         selector.options[selector] = new option('valor:' +selector);
//     }
// }

var nombreInput = document.getElementById("nombre");
var edadInput = document.getElementsByName("edad")[0];
var codeNameInput = document.getElementById("codeName");
var suitInput = document.getElementById("suit");
var latitudInput = document.getElementById("latitud");
var longitudInput = document.getElementById("longitud");
var imageInput = document.getElementById("image");

document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    var nombre = nombreInput.value;
    var edad = edadInput.value;
    var codeName = codeNameInput.value;
    var suit = [suitInput.value]; // Convertido a un array de un solo elemento
    var latitud = latitudInput.value;
    var longitud = longitudInput.value;

    var marvel ={
        nombre: nombre,
        edad: edad,
        codeName: codeName,
        suit: suit,
        pos: {
            lat: latitud,
            lng: longitud,
        },
        image: imageInput,
    };

    var marvelString = JSON.stringify(marvel, null, 4); // Convierte el objeto a una cadena JSON con formato de 4 espacios de indentación
    console.log(marvelString);
});



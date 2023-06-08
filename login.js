document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar envío del formulario

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validación de usuario y contraseña
    if (validateUser(username, password)) {
        alert("Inicio de sesión exitoso");
        window.location.href = "inicio.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});

function validateUser(username, password) {
    // Obtener los datos de usuarios desde XML
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "users.xml", false);
    xmlhttp.send();
    var xmlDoc = xmlhttp.responseXML;

    var users = xmlDoc.getElementsByTagName("user");
    for (var i = 0; i < users.length; i++) {
        var xmlUsername = users[i].getElementsByTagName("username")[0].childNodes[0].nodeValue;
        var xmlPassword = users[i].getElementsByTagName("password")[0].childNodes[0].nodeValue;
        
        if (xmlUsername === username && xmlPassword === password) {
            return true;
        }
    }

    return false;
}
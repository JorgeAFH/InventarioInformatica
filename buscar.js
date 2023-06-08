document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío del formulario

  var searchTerm = document.getElementById("search").value;

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "equipos.json", true);
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      var jsonData = JSON.parse(xmlhttp.responseText);
      var equipos = jsonData.equipos.equipo;

      var resultsTable = document.getElementById("resultsTable");
      resultsTable.innerHTML = ""; // Limpia la tabla antes de agregar los nuevos resultados

      equipos.forEach(function(equipo) {
        var nombre = equipo.nombre;
        var descripcion = equipo.descripcion;
        var estado = equipo.estado;
        var departamento = equipo.departamento;

        if (nombre.includes(searchTerm)) {
          var row = document.createElement("tr");
          var nombreCell = document.createElement("td");
          var descripcionCell = document.createElement("td");
          var estadoCell = document.createElement("td");
          var departamentoCell = document.createElement("td");

          nombreCell.textContent = nombre;
          descripcionCell.textContent = descripcion;
          estadoCell.textContent = estado;
          departamentoCell.textContent = departamento;

          row.appendChild(nombreCell);
          row.appendChild(descripcionCell);
          row.appendChild(estadoCell);
          row.appendChild(departamentoCell);

          resultsTable.appendChild(row);
        }
      });
    }
  };
  xmlhttp.send();
});

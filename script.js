var N;
var alumnos = [];

function mostrarFormulario() {
  N = parseInt(document.getElementById("cantidad").value);
  var formulario = document.getElementById("formulario");
  formulario.style.display = "block";

  var contenidoFormulario = "";

  for (var i = 0; i < N; i++) {
    contenidoFormulario += '<div>';
    contenidoFormulario += '<h3>Alumno ' + (i + 1) + '</h3>';
    contenidoFormulario += '<label for="cedula' + i + '">Número de cédula:</label>';
    contenidoFormulario += '<input type="text" id="cedula' + i + '"><br>';
    contenidoFormulario += '<label for="nombre' + i + '">Nombre:</label>';
    contenidoFormulario += '<input type="text" id="nombre' + i + '"><br>';
    contenidoFormulario += '<label for="matematicas' + i + '">Nota de Matemáticas:</label>';
    contenidoFormulario += '<input type="number" id="matematicas' + i + '"><br>';
    contenidoFormulario += '<label for="fisica' + i + '">Nota de Física:</label>';
    contenidoFormulario += '<input type="number" id="fisica' + i + '"><br>';
    contenidoFormulario += '<label for="programacion' + i + '">Nota de Programación:</label>';
    contenidoFormulario += '<input type="number" id="programacion' + i + '"><br>';
    contenidoFormulario += '</div>';
  }

  contenidoFormulario += '<button onclick="calcularNotas()">Calcular</button>';

  formulario.innerHTML = contenidoFormulario;
}

function calcularNotas() {
  var promedioMatematicas = 0;
  var promedioFisica = 0;
  var promedioProgramacion = 0;
  var aprobadosMatematicas = 0;
  var aprobadosFisica = 0;
  var aprobadosProgramacion = 0;
  var aplazadosMatematicas = 0;
  var aplazadosFisica = 0;
  var aplazadosProgramacion = 0;
  var aprobaronTodas = 0;
  var aprobaronUna = 0;
  var aprobaronDos = 0;
  var maximaMatematicas = 0;
  var maximaFisica = 0;
  var maximaProgramacion = 0;

  for (var i = 0; i < N; i++) {
    var cedula = document.getElementById("cedula" + i).value;
    var nombre = document.getElementById("nombre" + i).value;
    var notaMatematicas = parseFloat(document.getElementById("matematicas" + i).value);
    var notaFisica = parseFloat(document.getElementById("fisica" + i).value);
    var notaProgramacion = parseFloat(document.getElementById("programacion" + i).value);

    // Calcular promedios
    promedioMatematicas += notaMatematicas;
    promedioFisica += notaFisica;
    promedioProgramacion += notaProgramacion;

    // Verificar aprobación de cada materia
    if (notaMatematicas >= 10) {
      aprobadosMatematicas++;
    } else {
      aplazadosMatematicas++;
    }

    if (notaFisica >= 10) {
      aprobadosFisica++;
    } else {
      aplazadosFisica++;
    }

    if (notaProgramacion >= 10) {
      aprobadosProgramacion++;
    } else {
      aplazadosProgramacion++;
    }

    // Verificar aprobación de todas las materias
    if (notaMatematicas >= 10 && notaFisica >= 10 && notaProgramacion >= 10) {
      aprobaronTodas++;
    }

    // Verificar aprobación de una sola materia
    if ((notaMatematicas >= 10 && notaFisica < 10 && notaProgramacion < 10) ||
        (notaMatematicas < 10 && notaFisica >= 10 && notaProgramacion < 10) ||
        (notaMatematicas < 10 && notaFisica < 10 && notaProgramacion >= 10)) {
      aprobaronUna++;
    }

    // Verificar aprobación de dos materias
    if ((notaMatematicas >= 10 && notaFisica >= 10 && notaProgramacion < 10) ||
        (notaMatematicas >= 10 && notaFisica < 10 && notaProgramacion >= 10) ||
        (notaMatematicas < 10 && notaFisica >= 10 && notaProgramacion >= 10)) {
      aprobaronDos++;
    }

    // Obtener nota máxima de cada materia
    if (notaMatematicas > maximaMatematicas) {
      maximaMatematicas = notaMatematicas;
    }

    if (notaFisica > maximaFisica) {
      maximaFisica = notaFisica;
    }

    if (notaProgramacion > maximaProgramacion) {
      maximaProgramacion = notaProgramacion;
    }
  }

  // Calcular promedios
  promedioMatematicas /= N;
  promedioFisica /= N;
  promedioProgramacion /= N;

  // Mostrar resultados
  resultado.innerHTML = "<h2>Resultados</h2>";
  resultado.innerHTML += "Cantidad de alumnos: " + N + "<br><br>";
  resultado.innerHTML += "Promedio de Matemáticas: " + promedioMatematicas.toFixed(2) + "<br>";
  resultado.innerHTML += "Promedio de Física: " + promedioFisica.toFixed(2) + "<br>";
  resultado.innerHTML += "Promedio de Programación: " + promedioProgramacion.toFixed(2) + "<br><br>";
  resultado.innerHTML += "Alumnos aprobados en Matemáticas: " + aprobadosMatematicas + "<br>";
  resultado.innerHTML += "Alumnos aprobados en Física: " + aprobadosFisica + "<br>";
  resultado.innerHTML += "Alumnos aprobados en Programación: " + aprobadosProgramacion + "<br><br>";
  resultado.innerHTML += "Alumnos aplazados en Matemáticas: " + aplazadosMatematicas + "<br>";
  resultado.innerHTML += "Alumnos aplazados en Física: " + aplazadosFisica + "<br>";
  resultado.innerHTML += "Alumnos aplazados en Programación: " + aplazadosProgramacion + "<br><br>";
  resultado.innerHTML += "Alumnos que aprobaron todas las materias: " + aprobaronTodas + "<br>";
  resultado.innerHTML += "Alumnos que aprobaron una sola materia: " + aprobaronUna + "<br>";
  resultado.innerHTML += "Alumnos que aprobaron dos materias: " + aprobaronDos + "<br><br>";
  resultado.innerHTML += "Nota máxima en Matemáticas: " + maximaMatematicas.toFixed(2) + "<br>";
  resultado.innerHTML += "Nota máxima en Física: " + maximaFisica.toFixed(2) + "<br>";
  resultado.innerHTML += "Nota máxima en Programación: " + maximaProgramacion.toFixed(2) + "<br>";
}
// Array de Objetos alumno
var alumnos = [
    {
        "nombre": "Maria",
        "foto": "img/img4.jpg",
        "curso": "DAM",
        "notaExamen": [9, 7],
        "notaPracticas": [7, 6, 8, 10, 5, 4, 2, 4, 5, 2]
    },
    {
        "nombre": "Fernando",
        "foto": "img/img1.png",
        "curso": "DAM",
        "notaExamen": [3, 2],
        "notaPracticas": [3, 6, 2, 5, 5, 4, 2, 4, 3, 0]
    },
    {
        "nombre": "Bill",
        "foto": "img/img2.jpg",
        "curso": "DAM",
        "notaExamen": [6, 7],
        "notaPracticas": [10, 6, 8, 6, 10, 8, 10, 4, 5, 6]
    },
    {
        "nombre": "Pablo",
        "foto": "img/img3.jpeg",
        "curso": "DAM",
        "notaExamen": [4, 5],
        "notaPracticas": [3, 4, 2, 5, 5, 4, 2, 4, 5, 2]
    }
];
var container = document.getElementsByClassName('container')[0];
var alumno = document.createElement('div');
var notas = document.getElementsByClassName('notas');

var suspensos = new Array;
var aprobados = new Array;
var notasFinalesTodosAlumnos = new Array;

// Recorrer todos los alumnos e imprimir datos
for (var i = 0; i < alumnos.length; i++) {
    var mediaPract = calcularMedia(alumnos[i].notaPracticas);
    var mediaEx = calcularMedia(alumnos[i].notaExamen);

    container.innerHTML += '<div id="alumno">' + '<img id="fotoAlumno" alt="fotoAlumno"src="' + alumnos[i].foto + '"><div id="alumnoData"><h3 id="nombre">' + alumnos[i].nombre + '</h3><h5>' + alumnos[i].curso + '</h5></div><div id="alumnoNotas"><div class="cajaNotasAlumno"><p>Nota Examenes</p><div id="relativo"><span class="notas">' + calcularMedia(alumnos[i].notaExamen, 1).toFixed(2) + '</span><div id="cajaInvisible"><div id="flecha"></div><span id="notasInvisibles">' + alumnos[i].notaExamen + '</span></div></div></div> <div class="cajaNotasAlumno"><p>Nota Practicas</p><div id="relativo"><span class="notas">' + calcularMedia(alumnos[i].notaPracticas, 2).toFixed(2) + '</span><div id="cajaInvisible"><div id="flecha"></div><span id="notasInvisibles">' + alumnos[i].notaPracticas + '</span></div></div></div><div class="cajaNotasAlumno"><p>Nota Final</p><span class="notas">' + (calcularMedia(alumnos[i].notaExamen, 1) + calcularMedia(alumnos[i].notaPracticas, 2)).toFixed(2) + '</span></div></div>';
    // Guardar aprobados y suspensos
    if ((calcularMedia(alumnos[i].notaExamen, 1) + calcularMedia(alumnos[i].notaPracticas, 2)) >= 5) {
        aprobados.push(alumnos[i]);
    } else {
        suspensos.push(alumnos[i]);
    }
    // Guardar todas las notas finales
    notasFinalesTodosAlumnos.push((calcularMedia(alumnos[i].notaExamen, 1) + calcularMedia(alumnos[i].notaPracticas, 2)));
}

// Calcular la mejor nota
var mejorNota = Math.max(...notasFinalesTodosAlumnos);
var mejorAlumno;
for (i in alumnos) {
    if ((calcularMedia(alumnos[i].notaExamen, 1) + calcularMedia(alumnos[i].notaPracticas, 2)) == mejorNota) {
        mejorAlumno = alumnos[i];
    }
}
/* APUNTES este for estaba congiendo la i de la funcion calcular media*/
function calcularMedia(array, tipoNota) {
    var media = 0;
    var suma = 0;
    for (x in array) {
        suma += array[x];
    }
    media = suma / array.length;
    switch (tipoNota) {//evaluar argumento
        case 0://final
            return media;
            break;
        case 1://examenes
            return media * 0.3;
            break;
        case 2://practicas
            return media * 0.7;
            break;
    }
}

// Pasar a String los nombres del array
function arrayToString(array) {
    var resultado = '';
    for (x in array) {
        resultado += array[x].nombre + ' ';
    }
    return resultado;
}

// Imprimir resumen
container.innerHTML += '<div id="resumen"><h1 style="text-align:center">Resumen de Notas</h1><div id="resumenInner"><h3>Alumnos Aprobados :</h3> <span id="numAprobados">' + aprobados.length + '<div id="cajaInvisibleAlumnos"><div id="flecha"></div><span id="aprobadosInvisibles">' + arrayToString(aprobados) + '</span></div></span> <h3>Alumnos Suspensos :</h3><span id="numSuspensos">' + suspensos.length + '<div id="cajaInvisibleAlumnos"><div id="flecha"></div><span id="suspensosInvisibles">' + arrayToString(suspensos) + '</span></div></span> <h3>Media de Notas :</h3> <span id="mediaNotas">' + calcularMedia(notasFinalesTodosAlumnos, 0).toFixed(2) + '</span>';
container.innerHTML += '<div id="cajaMejorAlumno"><h3>Alumno/a con mejor nota : <h2 id="mejorAlumno">' + mejorAlumno.nombre + '</h2> Con una nota final de : ' + mejorNota.toFixed(2) + '<img id="fotoMejorAlumno" alt="fotoMejorAlumno" src="' + mejorAlumno.foto + '"></div>';

// Imprimir footer de copyrigth
var hoy = new Date();
var annoSpan = document.getElementById('anno');
annoSpan.innerHTML = (hoy.getFullYear());
annoSpan.setAttribute('style', 'color:#28154F');


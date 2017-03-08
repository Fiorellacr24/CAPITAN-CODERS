//BOTONES

//divtexte es id del boton seleccionado
var mostrarOcultar = function(divtexte) {
//Guardo Ids
  var text1 = document.getElementById('sprint-1');
  var text2 = document.getElementById('sprint-2');
  var text3 = document.getElementById('sprint-3');

  if (divtexte == 'sprint-1') {
    text1.style.display = 'block';
    text2.style.display = 'none';
    text3.style.display = 'none';
  }
  else if (divtexte == 'sprint-2') {
    text1.style.display = 'none';
    text2.style.display = 'block';
    text3.style.display = 'none';
  }
  else if (divtexte == 'sprint-3') {
    text1.style.display = 'none';
    text2.style.display = 'none';
    text3.style.display = 'block';
  }
}

//DROPDOWN BUTTON
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


/*ARRAY CODERS*/
var coders = [ { nombre : "Meche", apellido : "Zubieta",  promocion : "1era. promoción", estado : "Trabajando" },
{ nombre : "Arabela", apellido : "Rojas", promocion : "2da. promoción", estado : "Trabajando" },
{ nombre : "Maria", apellido : "Rosán",  promocion : "2da. promoción", estado : "Trabajando" },
{ nombre : "Guadalupe", apellido : "Racio",  promocion : "3era. promoción", estado : "Trabajando" },
{ nombre : "Sara", apellido : "Casa",  promocion : "3era. promoción", estado : "Trabajando" },
{ nombre : "Daniella", apellido : "Durán",  promocion : "4ta. promoción", estado : "Trabajando" },
{ nombre : "Michelle", apellido : "Seguil",  promocion : "5ta. promoción", estado : "Trabajando" },
{ nombre : "Diana", apellido : "Navarro",  promocion : "5ta. promoción", estado : "Trabajando" } ];

function listarCoders(){
  for (var i=0; i<coders.length;i++){
    document.getElementsByClassName("div-coder")[i].innerHTML +="Nombre: "+coders[i].nombre+"<p>"+
    "Apellido: "+coders[i].apellido+"<p>"+
    "Promoción: "+coders[i].promocion+"<p>"+
    "Estado: "+coders[i].estado;
  }
}listarCoders();

//VALIDANDO RADIO BUTTON
var selected1;

function validando0() {
  selected1 = false;
  var test0 = document.getElementsByName("test0");

  for(var i=0; i<test0.length; i++) {
    if(test0[i].checked) {
      selected1 = true;
      break;
    }
  }
  if(!selected1) {
    alert("selecciona una opción");
    return false;
  }
}

function validando1() {
  selected1 = false;
  var test1 = document.getElementsByName("test1");

  for(var i=0; i<test1.length; i++) {
    if(test1[i].checked) {
      selected1 = true;
      break;
    }
  }
  if(!selected1) {
    alert("selecciona una opción");
    return false;
  }
}

function validando2() {
  selected1 = false;
  var test2 = document.getElementsByName("test2");

  for(var i=0; i<test2.length; i++) {
    if(test2[i].checked) {
      selected1 = true;
      break;
    }
  }
  if(!selected1) {
    alert("selecciona una opción");
    return false;
  }
}

function validarSprintUno() {
  validando0();
  validando1();
  validando2();

  var contador1 = 0;

  var test0 = document.getElementsByName("test0");
  if(test0[0].checked) {
    contador1 += 1;
  }
  var test1 = document.getElementsByName("test1");
  if(test1[0].checked) {
    contador1 += 1;
  }
  var test2 = document.getElementsByName("test2");
  if(test2[2].checked) {
    contador1 += 1;
  }
  console.log(contador1);
  document.getElementById("print-quiz-result").innerHTML="Respuestas correctas: "+contador1;
  document.getElementById("contenido1").style.display="none";
}

var selected;

function validando3() {
  selected = false;
  var test3 = document.getElementsByName("test3");

  for(var i=0; i<test3.length; i++) {
    if(test3[i].checked) {
      selected = true;
      break;
    }
  }
  if(!selected) {
    alert("selecciona una opción");
    return false;
  }
}

function validando4() {
  selected = false;
  var test4 = document.getElementsByName("test4");

  for(var i=0; i<test4.length; i++) {
    if(test4[i].checked) {
      selected = true;
      break;
    }
  }
  if(!selected) {
    alert("selecciona una opción");
    return false;
  }
}

function validando5() {
  selected = false;
  var test5 = document.getElementsByName("test5");

  for(var i=0; i<test5.length; i++) {
    if(test5[i].checked) {
      selected = true;
      break;
    }
  }
  if(!selected) {
    alert("selecciona una opción");
    return false;
  }
}

function validarSprintDos() {
	validando3();
	validando4();
	validando5();

	var contador2 = 0;

	var test3 = document.getElementsByName("test3");
	if(test3[0].checked) {
		contador2 += 1;
	}
	var test4 = document.getElementsByName("test4");
	if(test4[0].checked) {
		contador2 += 1;
	}
	var test5 = document.getElementsByName("test5");
	if(test5[1].checked) {
		contador2 += 1;
	}
	console.log(contador2);
 document.getElementById("print-quiz-result2").innerHTML="Respuestas correctas: "+contador2;
 document.getElementById("contenido2").style.display="none";
}

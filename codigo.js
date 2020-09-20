
if(Storage){
	

}else{
	
}
obtenerValoresDelLocalStorage()


var radioButton1 = document.querySelectorAll('input[name=colores]')[0];
var radioButton2 = document.querySelectorAll('input[name=colores]')[1];
var radioButton3 = document.querySelectorAll('input[name=colores]')[2];
var radioButton4 = document.querySelectorAll('input[name=colores]')[3];
radioButton1.addEventListener("click", cambiarFondo)
radioButton2.addEventListener("click", cambiarFondo)
radioButton3.addEventListener("click", cambiarFondo)
radioButton4.addEventListener("click", cambiarFondo)
function cambiarFondo(e){
	cambiarColores(e)
	guardarColorenLocalstorage(e)
}

function cambiarColores(e){
	var body3 = document.getElementsByTagName('body')[0]
	body3.style.backgroundColor= e.target.value
}
function guardarColorenLocalstorage(e){
	localStorage.setItem('colorBody',e.target.value)
}
function guardarName(){
	var name= formulario.nombre.value
	if(name!=""){
		localStorage.setItem("nombre",name)
	}
	formulario.nombre.value=""
}
function obtenerValoresDelLocalStorage(){
	var body3 = document.getElementsByTagName('body')[0]
	body3.style.backgroundColor= localStorage.getItem('colorBody')
	imprimirDatos()
}
function guardarDatosLocalstorage(){
	guardarName()
	imprimirDatos()
}
function borrarDatosLocalstorage(){
	localStorage.clear()
	var contenedorTextoDatos=document.getElementById('contenedorTextoDatos')
	contenedorTextoDatos.innerHTML="ahora tu localStorage esta vacio "
}
function imprimirDatos(){
	var color=localStorage.getItem('colorBody')
	var nombre=localStorage.getItem('nombre')
	if(color===null){
		color="vacio"
	}else{
		color=color.toUpperCase()
	}
	if(nombre===null){
		nombre="vacio"
	}else{
		nombre=nombre.toUpperCase()
	}
	
	var contenedorTextoDatos=document.getElementById('contenedorTextoDatos')
    var texto=`<div class="card-header">hola <b> ${nombre} </b>tu ultima informacion guardada en el local es storage es esta:</div> <br>
    <div class="card-body"><p class="card-text"><b>nombre: </b>  ${nombre}
    <br>
    <b>color: </b>${color}</p></div>`
    contenedorTextoDatos.innerHTML=texto
}
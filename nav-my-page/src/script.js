document.addEventListener("DOMContentLoaded", (e)=>startNav());
function startNav() {
	const nav = document.querySelector(".wp-block-create-block-nav-my-page");
	const boton = document.querySelector(".wp-block-create-block-nav-my-page>.nav__buttom");
	const desplegable = document.querySelector(".wp-block-create-block-nav-my-page>.nav__desplegable")
	const body = document.body
	const ARRIBA= "arriba"
	const ABAJO ="abajo"
	let estadoInicialBoton = true
	let direccionAnterior = ARRIBA
	let anteriorScroll = 0;

	body.style.background = "radial-gradient(circle at bottom , rgba(230, 196, 93, 1) 1%, rgba(182, 119, 82, 1) 33%, rgba(200, 106, 74, 1) 58%, rgba(65, 41, 43, 1) 92%)"
	body.style.overflowX = "hidden"
	addEventListener("scroll", (e) => {
		const actualScroll = window.scrollY;
		if (actualScroll > anteriorScroll) {
			animarNav(ABAJO)
		} else {
			animarNav(ARRIBA)
		}
		anteriorScroll = actualScroll;

	});
	boton.addEventListener("click",animarDesplegable)
	function animarNav(direccionActual){
		if(direccionActual == direccionAnterior){
			return
		}
		if(direccionActual == ABAJO){
			nav.style.animation = "desaparecer 1s cubic-bezier(0,1, 1, 1) forwards"
			direccionAnterior = ABAJO
		}
		if(direccionActual == ARRIBA){
			nav.style.animation = "aparecer 1s cubic-bezier(0,1, 1, 1) forwards"
			direccionAnterior = ARRIBA
		}
	}

	function animarDesplegable(){
		if(estadoInicialBoton){
			boton.style.transition = "all 500ms"
			boton.style.transform = "rotate(90deg)"
			desplegable.style.display = "flex"
			desplegable.style.animation = "aparecerUl 1s cubic-bezier(0,1, 1, 1)"
			animacionLista()
		}else{
			boton.style.transform = "rotate(0deg)"
			desplegable.style.animation = "desaparecerPadre 600ms cubic-bezier(0,1, 1, 1) forwards"
			animacionListaRest()
		}
		estadoInicialBoton = !estadoInicialBoton
	}

	function animacionLista() {
		for (let i = 0; i < desplegable.children.length; i++) {
				desplegable.children[i].style.animation = `aparecerLetra ${((i+1)*200)}ms cubic-bezier(0,1, 1, 1)`
		}
	}
	function animacionListaRest() {
		for (let i = 0; i < desplegable.children.length; i++) {
			desplegable.children[i].style.animation = `none`
		}
	}



}



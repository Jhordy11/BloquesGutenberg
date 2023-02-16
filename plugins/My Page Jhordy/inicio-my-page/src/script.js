document.addEventListener("DOMContentLoaded", startInicio);

function startInicio() {
	const saludo = document.querySelector(".wp-block-create-block-inicio-my-page > .inicio__saludo")
	const nombre = document.querySelector(".wp-block-create-block-inicio-my-page > .inicio__nombre")
	const tra = document.querySelector(".wp-block-create-block-inicio-my-page > .inicio__tra")
	animarFrase(saludo, 400)
	animarFrase(nombre, 1400)
	animarFrase(tra, 400)

	saludo.addEventListener('click',(e)=> animacionDeClick(saludo))
	nombre.addEventListener('click',(e)=> animacionDeClick(nombre))
	tra.addEventListener('click',(e)=> animacionDeClick(tra))
	function animarFrase(refere, delay) {
		for (let i = 0; i < refere.childNodes.length; i++) {
			setTimeout(() => {
				refere.childNodes[i].style.animation = `none`;
			}, 200 * i + delay + 2000);
			refere.childNodes[i].childNodes[0].style.animation = `caerGota 2s linear ${200 * i + delay}ms forwards`;
			refere.childNodes[i].childNodes[1].style.animation = `letrasSaludo 800ms linear ${200 * i + 800 + delay}ms forwards`;
			refere.childNodes[i].style.animation = `rotardivXD 1400ms linear ${200 * i + delay}ms`;
		}
	}

	function animacionDeClick(refere){
		for (let i = 0; i < refere.childNodes.length; i++) {
			refere.childNodes[i].childNodes[1].style.animation = `esconderLetra 1500ms linear forwards`;
			refere.childNodes[i].childNodes[0].style.animation = `aparecerBola 1s linear forwards`;
		}
		setTimeout(()=>animarFrase(refere, 400),1500)

	}


}



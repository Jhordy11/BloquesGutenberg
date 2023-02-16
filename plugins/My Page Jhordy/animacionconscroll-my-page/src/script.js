document.addEventListener("DOMContentLoaded", startAnimacionesScroll);

function startAnimacionesScroll() {
	const animarDireccionTop = document.querySelectorAll(".animacionScrollTopMyPage")
	const animarDireccionRight = document.querySelectorAll(".animacionScrollRightMyPage")
	const animarDireccionGiro = document.querySelectorAll(".animacionScrollGiroMyPage")
	const animarDireccionExp = document.querySelectorAll(".animacionScrollExpMyPage")
	const elementosAAnimar = [...animarDireccionTop,...animarDireccionRight,...animarDireccionGiro,...animarDireccionExp]

	const observer = new IntersectionObserver(callback);
	function callback(entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.style.animationPlayState = "running"
			}
		});
	}
	elementosAAnimar.forEach(elemento => {
		observer.observe(elemento);
	})
}



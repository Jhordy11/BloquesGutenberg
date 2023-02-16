document.addEventListener("DOMContentLoaded", startProyecto);

function startProyecto() {
	const cards = document.querySelectorAll(".wp-block-create-block-proyecto-my-page > .card__imagenes")
	const TIME = 1000
	for (let card of cards){
		card.addEventListener('click', (e)=> animarCard(card))
	}
	function animarCard(card){
		for (let i=card.children.length-1; i>0;i--  ) {
			setTimeout(()=>card.children[i].style.animation = "animarImg 1000ms linear forwards",(card.children.length-1 - i)*TIME)
			setTimeout(()=>card.children[i].style.animation = "animarImgR 1000ms linear forwards",TIME*(card.children.length-1))
		}
	}
}



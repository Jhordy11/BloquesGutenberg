document.addEventListener("DOMContentLoaded", startFooter);

function startFooter() {
	const topSroll = document.querySelector(".wp-block-create-block-footer-my-page > .topScroll")
	topSroll.addEventListener('click', ()=> animarSrollClick())
	addEventListener('scroll', ()=>animarSroll())

	function animarSroll(){
		window.scrollY == 0? topSroll.style.opacity = '0':topSroll.style.opacity = '1'
	}
	function animarSrollClick(){
		topSroll.style.opacity = '0'
	}
}



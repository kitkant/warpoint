let lastScroll = 0
const defaultOffset = 300
const header = document.querySelector('.header-fixed')

const scrollPosition = () => window.scrollY || document.documentElement.scrollTop
const containHide = () => header.classList.contains("hide")

window.addEventListener('scroll', () => {
	if (scrollPosition() > defaultOffset && containHide) {
		header.classList.remove('hide')
		console.log(scrollPosition())

	} else if(scrollPosition() <= 350 ){
	 console.log(scrollPosition())
	 header.classList.add('hide')
	}
		
})

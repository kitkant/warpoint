const modalTrigger = document.getElementsByClassName("nav_container-button__wrapper__burger-menu")[0];

const body = document.getElementsByTagName('body')
// получаем ширину отображенного содержимого и толщину ползунка прокрутки
const windowInnerWidth = document.documentElement.clientWidth;
const scrollbarWidth = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth);

// привязываем необходимые элементы
const bodyElementHTML = document.getElementsByTagName("body")[0];
const modalBackground = document.getElementsByClassName("modalBackground")[0];
const modalClose = document.getElementsByClassName("sidebar__close_btn")[0];
const modalActive = document.getElementsByClassName("modalActive")[0];


const sidebarEl = document.getElementsByClassName("sidebar")[0];

function bodyMargin() {
	bodyElementHTML.style.marginRight = scrollbarWidth + "px";
	console.log(scrollbarWidth, 'scrollbarWidth')
}

// при длинной странице - корректируем сразу

modalTrigger.addEventListener("click", function () {
	modalBackground.style.display = "block";
	sidebarEl.classList.toggle("sidebar--isHidden");
	bodyElementHTML.classList.add('burgerActiveMenu')
	modalTrigger.disabled = true
	bodyMargin();

});

// нажатие на крестик закрытия модального окна
modalClose.addEventListener("click", function (event) {
	sidebarEl.classList.toggle("sidebar--isHidden");

	modalTrigger.disabled = false
	modalBackground.style.display = "none";
	bodyElementHTML.classList.remove('burgerActiveMenu')
	bodyElementHTML.style.marginRight = 0;
});

// закрытие модального окна на зону вне окна, т.е. на фон
modalBackground.addEventListener("click", function (event) {
	sidebarEl.classList.toggle("sidebar--isHidden");

	modalTrigger.disabled = false
	if (event.target === modalBackground) {
			modalBackground.style.display = "none";
			bodyElementHTML.classList.remove('burgerActiveMenu')
			bodyElementHTML.style.marginRight = 0;
	}
});


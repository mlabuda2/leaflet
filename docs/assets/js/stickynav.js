const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
	this.classList.add('trigger-enter');
	setTimeout(() => {
		this.classList.add('trigger-enter-active');
	}, 150);
	background.classList.add('open');

	const dropdown = this.querySelector('.dropdown');
	const navCoords = nav.getBoundingClientRect();
	const dropdownCoords = dropdown.getBoundingClientRect();

	const coords = {
		height: dropdownCoords.height,
		width: dropdownCoords.width,
		top: dropdownCoords.top,
		left: dropdownCoords.left,

	};

	background.style.setProperty('width', `${coords.width}px`);
	background.style.setProperty('height', `${coords.height}px`);
	background.style.setProperty('transform', `translate(${coords.top}px, ${coords.left}px)`);


}

function handleLeave() {
	this.classList.remove('trigger-enter');
	this.classList.remove('trigger-enter-active');
	background.classList.remove('open');
	
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
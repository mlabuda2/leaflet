const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
	this.classList.add('trigger-enter');
	setTimeout(() => {
		if(this.classList.contains('trigger-enter')){
			this.classList.add('trigger-enter-active')
		}
	}, 250);
	background.classList.add('open');

	const dropdown = this.querySelector('.dropdown');
	const navCoords = nav.getBoundingClientRect();
	// console.log(navCoords);
	const dropdownCoords = dropdown.getBoundingClientRect();
	// console.log(dropdownCoords);
	const coords = {
		height: dropdownCoords.height,
		width: dropdownCoords.width,
		top: dropdownCoords.top - navCoords.top,
		left: dropdownCoords.left - navCoords.left

	};

	background.style.setProperty('width', `${coords.width}px`);
	background.style.setProperty('height', `${coords.height}px`);
	background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);


}

function handleLeave() {
	this.classList.remove('trigger-enter');
	this.classList.remove('trigger-enter-active');
	background.classList.remove('open');
	
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));



/*
const usunipokaz = document.getElementById('usunpokaz');

usunpokaz.addEventListener('onclick', function() {
	$("#plan2 tbody tr").remove();
 	$("#plan tbody tr").remove();
});
*/
//todo przekopiowane z htmla do js i trzeba przerobic


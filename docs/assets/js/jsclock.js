const wskazowkaSek = document.querySelector('.sekunda');
const wskazowkaMin = document.querySelector('.minuta');
const wskazowkaGodz = document.querySelector('.godzina');


function setDate(){
	const now = new Date();
	const sec = now.getSeconds();
	const min = now.getMinutes();
	const godz = now.getHours();
	const secDegrees = ((sec / 60) * 360) + 90;
	const minDegrees = ((min / 60) * 360) + ((sec/60)*6) + 90;
	const godzDegrees = ((godz / 12) * 360) + ((min/60)*30) + 90;

	wskazowkaSek.style.transform = `rotate(${secDegrees}deg)`;
	wskazowkaMin.style.transform = `rotate(${minDegrees}deg)`;
	wskazowkaGodz.style.transform = `rotate(${godzDegrees}deg)`;

}

setInterval(setDate, 1000);
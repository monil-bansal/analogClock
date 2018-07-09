let hourHand= document.getElementById('hourHand');
let minuteHand = document.getElementById('minuteHand');
let secondHand = document.getElementById('secondHand');



function initClock(){
	let date = new Date();
	let hours=date.getHours()  % 12;
	let minutes =date.getMinutes();
	let seconds=date.getSeconds();

	let hourDeg=(hours*30)+(minutes*0.5);
	let minuteDeg=(minutes*6)+(0.1*seconds);
	let secondDeg=seconds*6;

	hourHand.style.transform = `rotate(${hourDeg}deg)`;
	minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
	secondHand.style.transform = `rotate(${secondDeg}deg)`;
	setTimeout(initClock,1000);
};

initClock();
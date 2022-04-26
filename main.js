
//Day of the Week
function changeGreeting(){
	let day = new Date().getDay();
	let hour = new Date().getHours();
	let dayGreeting;
	let timeGreeting;
	if(day == 0){
		dayGreeting = 'Sunday';
	}
	else if(day == 1){
		dayGreeting = 'Monday';
	}
	else if(day == 2){
		dayGreeting = 'Tuesday';
	}
	else if(day == 3){
		dayGreeting = 'Wednesday';
	}
	else if(day == 4){
		dayGreeting = 'Thursday';
	}
	else if(day == 5){
		dayGreeting = 'Friday';
	}
	else{
		dayGreeting = 'Saturday';
	}

	if (hour >= 18){
		timeGreeting = "Good evening";
	}
	else if (hour >= 12){
		timeGreeting = "Good afternoon";
	}
	else if(hour >= 0){
		timeGreeting = "Good morning";
	}
	else{
		timeGreeting = "Hello";
	}
	let greeting = document.querySelector('#greeting');
	greeting.textContent = timeGreeting + ', ' + dayGreeting;
}
changeGreeting();

//function changing CSS style
let background = document.querySelector('body');
let title = document.querySelector('h1 > a');
let footer = document.querySelector('footer > p > a');
let button = document.querySelector('button');
function changeBackground(){
	background.style.backgroundColor = '#292929';
	background.style.color = '#f5db91';

	title.style.color = '#f5db91';
	footer.style.color = '#f5db91';
	title.className = 'dark';
	footer.className = 'dark';
}

button.addEventListener('click',changeBackground);











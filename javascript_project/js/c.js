// document.getElementById('counter').innerText= 5

var count = 0;
let counter = document.getElementById('counter');
let saveEl = document.getElementById('save_el');
// the graduates

function increment(){
	// console.log('this button was clicked')
	count += 1;
	// count = count + 1;
	counter.innerText = count;
	// document.getElementById('counter').innerHTML = count;
}

function save(){
	let countStr = ' ' + count + ' - ';
	// saveEl.innerText += countStr
	saveEl.textContent += countStr;

	counter.textContent = 0;
	count = 0;
	return count;
}

function clear() {
	location.reload();
}

function time(){
	document.getElementById('time_p').innerHTML = Date()
}
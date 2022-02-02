let count = 0;
let counter = document.getElementById('counter');
let saved = document.getElementById('saved');

function increment(){
	count += 1;
	counter.innerText = count;
}

function save(){
	let countStr = ' ' + count + ', ';
	// saveEl.innerText += countStr
	saved.textContent += countStr;

	counter.textContent = 0;
	count = 0;
	return count;
}
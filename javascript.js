var answer = ["red", "blue", "green", "purple", "yellow", "brown"];
var rand = [answer[Math.floor(Math.random() * answer.length)], answer[Math.floor(Math.random() * answer.length)], answer[Math.floor(Math.random() * answer.length)], answer[Math.floor(Math.random() * answer.length)]];
var currentColor = -1;
var totalCheck = 0;
var attempt = [];
var rownr = 1;
console.log(rand);

function rowCreate(nr) {
	var row = document.createElement("DIV");
	var container = document.getElementById("grid");
	row.className = "attempt";
	row.setAttribute("class", "rowNumber"+nr);
	row.innerHTML = '<div class="attempt"><span name="ball1"></span><span name="ball2"></span><span name="ball3"></span><span name="ball4"></span></div><div class="result"><span name="check1"></span><span name="check2"></span><span name="check3"></span><span name="check4"></span></div>';
	container.appendChild(row);
}

for (var i = 1; i <= 12; i++){
	rowCreate(i)
}

function setCurrentColor(e){
	var element = e.target;
	currentColor = answer.indexOf(element.style.backgroundColor);
}

function start() {
	document.getElementById("red").style.backgroundColor = "red";
	document.getElementById("blue").style.backgroundColor = "blue";
	document.getElementById("green").style.backgroundColor = "green";
	document.getElementById("purple").style.backgroundColor = "purple";
	document.getElementById("yellow").style.backgroundColor = "yellow";
	document.getElementById("brown").style.backgroundColor = "brown";
	document.getElementById('test').addEventListener('click', checkRow)
	document.getElementById("red").addEventListener('click',setCurrentColor);
	document.getElementById("blue").addEventListener('click',setCurrentColor);
	document.getElementById("green").addEventListener('click',setCurrentColor);
	document.getElementById("purple").addEventListener('click',setCurrentColor);
	document.getElementById("yellow").addEventListener('click',setCurrentColor);
	document.getElementById("brown").addEventListener('click',setCurrentColor);
}


function fill(event) {
	event.target.style.backgroundColor = answer[currentColor];
}

document.getElementById("start").addEventListener("click", start);

document.querySelectorAll("[name=ball1]").forEach(
	function(element){
		element.addEventListener("click", fill);
	}
);
document.querySelectorAll("[name=ball2]").forEach(
	function(element){
		element.addEventListener("click", fill);
	}
);
document.querySelectorAll("[name=ball3]").forEach(
	function(element){
		element.addEventListener("click", fill);
	}
);
document.querySelectorAll("[name=ball4]").forEach(
	function(element){
		element.addEventListener("click", fill);
	}
);
function checkRow(argument) {
	// vaststellen welke rij : rownr
	// vaststellen of vakjes een achtergrondkleur hebben gekregen
	var boxes = document.querySelectorAll('.rowNumber1 .attempt span', '.rowNumber2 .attempt span', '.rowNumber3 .attempt span', '.rowNumber4 .attempt span', '.rowNumber5 .attempt span', '.rowNumber6 .attempt span', '.rowNumber7 .attempt span', '.rowNumber8 .attempt span', '.rowNumber9 .attempt span', '.rowNumber10 .attempt span', '.rowNumber11 .attempt span', '.rowNumber12 .attempt span')
	console.dir(boxes);
	console.log('ga checken');
	var attempt = [];
	for (var b = 0; b < boxes.length; b++){
		if (boxes[b].style.backgroundColor == '') {
			console.log('is nog leeg');
			return;
		}
		attempt.push(boxes[b].style.backgroundColor);
	}
	console.dir(attempt);
	result = check(rand,attempt);
	console.dir (result);
}


function check (rand, attempt){
// fase 1 check right number in right position
    var done = 'X';
    var black = 0;
    var white = 0;
    for (var i = 0; i < rand.length; i++){
        if (rand[i] == attempt[i]){
            black++;
            rand[i] = done;
            attempt[i] = done;
        }
    }
    
// fase 2 check right number in wrong position
    for (var i = 0; i < rand.length; i++){
        if (rand[i] != done){
            for (var j = 0; j < attempt.length; j++){
                if (attempt[j] != done){
                    if (rand[i] == attempt[j]){
                        white++;
                        attempt[j] = done;
                    }
                }
            }
        }
    }
    return {black: black, white: white};
    if (black > 0) {
    	for (black > 0; black < Things.length; black++) {
    		Things[black]
    	}
    }
}

var result = check(rand,attempt);

console.dir(result);


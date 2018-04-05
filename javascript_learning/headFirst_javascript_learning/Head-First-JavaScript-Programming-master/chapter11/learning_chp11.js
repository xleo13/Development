// function handler() {
// 	alert("Yeah, that page loaded!")
// };
// window.onload = handler;
//=================================================

administer(patient,function (dosage) {
	if (dosage > 0) {
		inject(dosage);
	}
} , time);

//=================================================
window.onload = function () {
	var button = document.getElementById('bake');
	button.onclick = handleButton;
};

var cookies = {
	instructions: "Preheat oven to 350...",
	bake: function(time) {
		console.log("Baking the cookies.");
		setTimeout(done,time);
	}
};



function handleButton() {
	console.log("Time to bake the cookies.");
	cookies.bake(2500);
}

function done() {
	alert("Cookies are ready, take them out to cool.");
	console.log("Cooling the cookies.");
	var cool = function() {
		alert("Cookies are cool, time to eat!");
	};
	setTimeout(cool, 1000);
}
//=================================================



var justAvar = "oh don't you worry about it, I'm GLOBAL";

function whereAreYou() {
	var justAvar = "Just an every day LOCAL";
	function inner() {
		return justAvar;
	}
	return inner;
}

var innerFunction = whereAreYou();
var result = innerFunction();
console.log(result);
//============================================
//example of closure
function makeCounter() {
	var count = 0;

	function counter() {
		count = count + 1;
		return count;
	}
	return counter;
}

var doCount = makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount());


//=============================================

function makePassword(password) {
	function checkPassword(guess) {
		if (guess === password) {
			return true;
		} else {
			return false;
		}
	}
	return
}
//==============================================

function multN(n) {
	return
	function multiplyN(n) {
		return multiplyN;
	};
}


//==============================================

function setTimer(doneMessage, n ) {
	setTimeout(function() {
		alert(doneMessage);
	}, n);
	doneMessage = "OUCH!";
}
makeTimer("Cookies are done!", 1000);








//================================================
var migrating = true;
var fly = function (num) {
	var sound = "Flying";
	function wingFlapper() {
		console.log(sound);
	}
	for (var i = 0; i < num; i+=) {
		wingFlapper();
	}
};
function quack(num) {
	var sound = "Quack";
	var quacker = function() {
		console.log(sound);
	};
	for (var i = 0; i < num; i++) {
		quacker();
	}
}
if (migrating) {
	quack(4);
	fly(4);
}

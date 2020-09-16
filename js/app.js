class Animal {
	constructor(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name);
	}
}

const cl = (m) => console.log(m);

let arr = [0, 4, 1, 5, 7, 3, 8];
let strx = "This is gonna be something to try";
let words = ["Ryan", "Kieran", "Jason", "Matt"];
let nullArr = ["a", null, "b", null];
let numArr = [-3, 4, -9, -1, -2, 15];

function findLargestNum(arr) {
	return Math.max(...arr);
}

function firstLast(arr) {
	return [arr.shift(), arr.pop()];
}

function countWords(str) {
	return str.split(" ").length;
}

function isFourLetters(arr) {
	return arr.filter((x) => x.length === 4);
}

function isBetween(first, last, word) {
	if (word > first && word < last) return true;
	return false;
}

function removeNull(arr) {
	return arr.filter((x) => x != null);
}

function reverse(bool) {
	return typeof bool === "boolean" ? !bool : "boolean expected";
}

function both(n1, n2) {
	return Math.sign(n1) == Math.sign(n2);
}

function nameShuffle(str) {
	return str.split(" ").reverse().join(" ");
}

function difference(nums) {
	return nums.sort((a, b) => b - a).shift() - nums.sort((a, b) => b - a).pop();
}

function isSafeBridge(str) {
	return str.split(" ").length === 1;
}

function negate(arr) {
	return arr.map((x) => -+x);
}

function multiplyByLength(arr) {
	return arr.map((x) => x * arr.length);
}

function findSmallestNum(arr) {
	return Math.min(...arr);
}

function noOdds(arr) {
	return arr.filter((x) => x % 2);
}

//cl(noOdds(arr));

let Menu = {};
Menu.special = "Have you ever tried English foods?";
// cl(Menu.special);

module.exports = Menu;

// cl(findSmallestNum(numArr));

function displaySpeedRangeStatus() {
	availableAirplanes.forEach((element) => {
		console.log(
			element.name +
				"meets speed range requirements: " +
				meetSpeedRangeRequirements(
					element.maxSpeed,
					element.minSpeed,
					flightRequirements.requiredSpeedRange
				)
		);
	});
}

// cl(20 + 10 + "30");

const sumX = (x) => (y) => (z) => x + y + z;

// cl(sumX(3, 5, 7));
// cl(sumX(3)(5)(7));

// cl("lets save the world".split("").reverse().join(""));

let prizes = ["one", "two", "three"];
for (let btnNum = 0; btnNum < prizes.length; btnNum++) {
	// cl(prizes[btnNum]);
}

class BasicPlan {
	static canStream = true;
	static canDownload = true;
	static numOfDevices = 1;
	static hasSD = true;
	static hasHD = false;
	static hasUHD = false;
	static price = "$8.99";
}

// Write the classes for StandardPlan and PremiumPlan here!
class StandardPlan extends BasicPlan {
	static hasHD = true;
	static numOfDevices = 2;
	static price = "$12.99";
}

// cl("BP SD: " + BasicPlan.hasSD); // ➞ true
// cl("BP UHD: " + BasicPlan.hasUHD); // ➞ false
// cl("BP Price: " + BasicPlan.price); // ➞ '$8.99'
// cl("ST HD: " + StandardPlan.hasHD);
// cl("ST Price: " + StandardPlan.price);
// cl("ST Num: " + StandardPlan.numOfDevices);

// class PremiumPlan extends BasicPlan {
// 	constructor() {
// 		super();
// 		hasHD = true;
// 		hasUHD = true;
// 		numOfDevices = 4;
// 		price = "$15.99";
// 	}
// }

function monthName(num) {
	return new Date(`2020/${num}/01`).toLocaleString("default", {
		month: "long",
	});
}

//cl(monthName(4));

function monthNameNew(num) {
	const monthsStr = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	return monthsStr[num - 1];
}
//cl(monthNameNew(4));

// This is crazy :D
arr = [2, 4, 6, 8, 3, 1, 5, 7, 9, 11, 12, 13, 14];
function oddeven(arr) {
	return arr.reduce((acc, val) => acc + (val % 2 ? 1 : -1), 0) > 0;
}
//cl(oddeven(arr));

function Go(num) {
	console.log("-".repeat(num));
}
//Go(5);

function hurdleJump(hurdles, jumpHeight) {
	return Math.max(...hurdles) <= jumpHeight;
}
// cl(hurdleJump([5, 5, 3, 4, 5], 3));

function AlphabetSoup(str) {
	return str.split("").sort().join("");
}
// cl(AlphabetSoup("hello"));

function reverseCapitalize(str) {
	return str.toUpperCase().split("").reverse().join("");
}
// cl(reverseCapitalize("hellothere"));

function reverse(str) {
	return [...str].reverse().join("");
}
// cl(reverse("Edabit is really helpful!"));

function repetition(txt, n) {}
repetition("cherry", 2);

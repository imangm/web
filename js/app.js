class Animal {
	constructor(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}
}

const cl = (m) => console.log(m);

let arr = [0, 4, 1, 5, 7, 3];
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

cl(findSmallestNum(numArr));

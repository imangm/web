function circle(radius) {
	this.radius = radius;

	this.name = function (fn) {
		return this.radius * fn;
	};

	this.draw = function () {
		console.log("circle is drew!");
		console.log(`It's as big as ${this.name(4)}`);
	};
}

const myCircle = new circle(10);
console.log(myCircle.radius);
myCircle.draw();
console.log(myCircle.name(3));

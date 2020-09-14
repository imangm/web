/** Stop Watch Exercise */
function Stopwatch() {
	let started = false;
	let duration = 0;
	let timeStarted,
		timeStopped = 0;
	this.start = function () {
		if (started) throw new Error("It's already started");
		// start counting
		timeStarted = new Date();
		started = true;
	};
	this.stop = function () {
		if (!started) throw new Error("It's not started right now!");
		timeStopped = new Date();
		duration = duration + (timeStopped - timeStarted) / 1000;
		started = false;
	};
	this.reset = function () {
		duration = 0;
		started = false;
	};
	Object.defineProperty(this, "duration", {
		get: function () {
			return duration;
		},
	});
}

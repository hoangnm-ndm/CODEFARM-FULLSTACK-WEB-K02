function sum(a, b) {
	return a + b;
}

function total(...args) {
	console.log(args);
	let sum = 0;
	for (let i = 0; i < args.length; i++) {
		sum += args[i];
	}
	return sum;
}

console.log(total(1, 3, 6, 10));

function total2(...args) {
	let sum = args.reduce((acc, cur) => {
		return (acc += cur);
	});
	return sum;
}

console.log(total2(1, 3, 6));

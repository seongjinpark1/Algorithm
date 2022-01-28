//  I try

function solution(a, b) {
	let eachSum = 0;
	for (let i = 0; i < a.length; i++) {
		let mul = a[i] * b[i];
		eachSum += mul;
	}
	return eachSum;
}

// Best answer

function solution(a, b) {
	var sum = 0;
	for (var i = 0; i < a.length; i++) {
		sum += a[i] * b[i];
	}
	return sum;
}

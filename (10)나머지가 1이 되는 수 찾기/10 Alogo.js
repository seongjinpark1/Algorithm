// I try
function solution(n) {
	for (let i = 2; i < n; i++) {
		if (n % i === 1) {
			return i;
		}
	}
}

//  Other answer
function solution(n, x = 1) {
	while (x++) {
		if (n % x === 1) {
			return x;
		}
	}
}

// I try
function solution(left, right) {
	let nums = [];
	let answer = 0;

	for (let i = left; i <= right; i++) {
		nums.push(i);
	}

	nums.filter(num => {
		let sqrt = Math.floor(Math.sqrt(num));
		let count = 0;

		for (let i = 1; i <= sqrt; i++) {
			if (num % i === 0) {
				if (num / i === i) {
					count += 0.5;
					break;
				}
				count++;
			}
		}
		count *= 2;
		if (count % 2 === 0) {
			answer += num;
		} else {
			answer -= num;
		}
	});
	return answer;
}

// Best answer
function solution(left, right) {
	var answer = 0;
	for (let i = left; i <= right; i++) {
		if (Number.isInteger(Math.sqrt(i))) {
			answer -= i;
		} else {
			answer += i;
		}
	}
	return answer;
}

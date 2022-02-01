// I try
function solution(numbers) {
	numbers = numbers.sort((a, b) => a - b);
	let answer = [];
	for (let i = 0; i < numbers.length; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			let sum = numbers[i] + numbers[j];
			if (!answer.includes(sum)) {
				answer.push(sum);
			}
		}
	}
	return answer;
}

// Best answer
function solution(numbers) {
	const temp = [];

	for (let i = 0; i < numbers.length; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			temp.push(numbers[i] + numbers[j]);
		}
	}

	const answer = [...new Set(temp)];

	return answer.sort((a, b) => a - b);
}

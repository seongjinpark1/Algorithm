// I try
function solution(answers) {
	let first = [1, 2, 3, 4, 5];
	let second = [2, 1, 2, 3, 2, 4, 2, 5];
	let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
	let answer = [0, 0, 0];
	let result = [];
	for (let i = 0; i < answers.length; i++) {
		answers[i] === first[i % 5] && answer[0]++;
		answers[i] === second[i % 8] && answer[1]++;
		answers[i] === third[i % 10] && answer[2]++;
	}

	if ((answer[0] === answer[1]) === answer[2]) return [1, 2, 3];
	let max = Math.max(...answer);
	for (let i = 0; i < answer.length; i++) {
		if (answer[i] === max) {
			result.push(i + 1);
		}
	}

	return result;
}

// Best answer
function solution(answers) {
	var answer = [];
	var a1 = [1, 2, 3, 4, 5];
	var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
	var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

	var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
	var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
	var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
	var max = Math.max(a1c, a2c, a3c);

	if (a1c === max) {
		answer.push(1);
	}
	if (a2c === max) {
		answer.push(2);
	}
	if (a3c === max) {
		answer.push(3);
	}

	return answer;
}

// I try
function solution(numbers, target) {
	let answer = 0;

	dfs(0, 0);

	function dfs(idx, sum) {
		if (idx === numbers.length) {
			if (target === sum) {
				answer++;
			}
			return;
		}

		dfs(idx + 1, sum + numbers[idx]);
		dfs(idx + 1, sum - numbers[idx]);
	}

	return answer;
}

// Other answer
function solution(numbers, target) {
	let answer = 0;
	getAnswer(0, 0);
	function getAnswer(x, value) {
		if (x < numbers.length) {
			getAnswer(x + 1, value + numbers[x]);
			getAnswer(x + 1, value - numbers[x]);
		} else {
			if (value === target) {
				answer++;
			}
		}
	}
	return answer;
}

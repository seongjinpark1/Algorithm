// I try
function solution(n, lost, reserve) {
	let answer = n - lost.length;

	lost.forEach(stu => {
		let isTrue = reserve.indexOf(stu - 1);

		if (isTrue === -1) {
			isTrue = reserve.indexOf(stu + 1);
		}
		if (isTrue >= 0) {
			reserve.splice(isTrue, 1);
			answer += 1;
		}
	});
	return answer;
}

//  Best answer
function solution(n, lost, reserve) {
	const students = {};
	let answer = 0;
	for (let i = 1; i <= n; i++) {
		students[i] = 1;
	}
	lost.forEach(number => (students[number] -= 1));
	reserve.forEach(number => (students[number] += 1));

	for (let i = 1; i <= n; i++) {
		if (students[i] === 2 && students[i - 1] === 0) {
			students[i - 1]++;
			students[i]--;
		} else if (students[i] === 2 && students[i + 1] === 0) {
			students[i + 1]++;
			students[i]--;
		}
	}
	for (let key in students) {
		if (students[key] >= 1) {
			answer++;
		}
	}
	return answer;
}

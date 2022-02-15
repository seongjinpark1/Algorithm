// I try
function solution(lottos, win_nums) {
	let result = {
		6: 1,
		5: 2,
		4: 3,
		3: 4,
		2: 5,
	};
	let answer = [];
	let correct = 0;
	let maxOrmin = 0;

	//     최고순위
	for (let i = 0; i < lottos.length; i++) {
		if (lottos[i] === 0) {
			maxOrmin++;
			correct++;
			continue;
		} else {
			if (win_nums.includes(lottos[i])) {
				correct++;
			}
		}
	}
	if (result[correct]) {
		answer.push(result[correct]);
	} else {
		answer.push(6);
	}

	//     최저순위
	correct -= maxOrmin;
	if (result[correct]) {
		answer.push(result[correct]);
	} else {
		answer.push(6);
	}
	return answer;
}

// Best answer

function solution(lottos, win_nums) {
	const rank = [6, 6, 5, 4, 3, 2, 1];

	let minCount = lottos.filter(v => win_nums.includes(v)).length;
	let zeroCount = lottos.filter(v => !v).length;

	const maxCount = minCount + zeroCount;

	return [rank[maxCount], rank[minCount]];
}

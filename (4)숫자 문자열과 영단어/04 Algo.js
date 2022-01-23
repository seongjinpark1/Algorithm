// I try
function solution(s) {
	let enToNum = {
		zero: '0',
		one: '1',
		two: '2',
		three: '3',
		four: '4',
		five: '5',
		six: '6',
		seven: '7',
		eight: '8',
		nine: '9',
	};

	let answer = '';
	let eng = '';
	for (let i = 0; i < s.length; i++) {
		let isNum = Number(s[i]);
		if (isNaN(isNum)) {
			eng += s[i];
			if (enToNum[eng]) {
				answer += enToNum[eng];
				eng = '';
				continue;
			}
		} else if (eng !== '') {
			answer = answer + enToNum[eng] + s[i];
			eng = '';
		} else {
			answer += s[i];
		}
	}
	return Number(answer);
}

// Best answer
function solution(s) {
	let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	var answer = s;

	for (let i = 0; i < numbers.length; i++) {
		let arr = answer.split(numbers[i]);
		answer = arr.join(i);
	}

	return Number(answer);
}

// I try
function solution(progresses, speeds) {
	let date = [];
	let count = 1;
	let answer = [];

	for (let i = 0; i < progresses.length; i++) {
		date.push((100 - progresses[i]) / speeds[i]);
	}

	for (let i = 0; i < date.length; i++) {
		if (date[i] >= date[i + 1]) {
			count++;
		} else {
			answer.push(count);
			count = 1;
		}
	}
	return answer;
}

// 7, 3, 9
// 5,  10, 1, 1,  20, 1
// 1. progress와 speeds의 각 인덱스를 나누어 몇일걸릴지를 나타내는 배열을 반환한다.
// 2. 해당 배열을 돌아가며 해당인덱스보다 작은 수들을 리턴하는 배열을 만든다.

//  Other answer

function solution(progresses, speeds) {
	let answer = [0];
	let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
	let maxDay = days[0];

	for (let i = 0, j = 0; i < days.length; i++) {
		if (days[i] <= maxDay) {
			answer[j] += 1;
		} else {
			maxDay = days[i];
			answer[++j] = 1;
		}
	}

	return answer;
}

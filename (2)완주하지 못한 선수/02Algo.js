// I try
function solution(participant, completion) {
	let answer = '';
	completion.forEach(el => {
		let idx = participant.indexOf(el);
		if (idx === -1) return el;
		participant.splice(idx, 1);
	});
	answer = participant[0];

	return answer;
}

// participant 마라톤에 참여한 선수들의 이름이 담긴 배열
// completion 완주한 선수들의 이름이 담긴 배열   (길이는 participant보다 항상 -1 작다)
// 완주하지 못한 선수의 이름을 return
// 동명이인이 있을 수 있다.

// Best answer(1)
function solution(participant, completion) {
	participant.sort();
	completion.sort();

	for (var i = 0; i < participant.length; i++) {
		if (participant[i] !== completion[i]) {
			//인덱스 0부터 순차적으로 두 배열 비교
			return participant[i];
			//비완주자가 참가자 배열에 나올 경우 출력
		}
	}
}

// Best answer(2)
function solution(participant, completion) {
	const map = new Map();

	for (let i = 0; i < participant.length; i++) {
		let a = participant[i],
			b = completion[i];

		map.set(a, (map.get(a) || 0) + 1);
		map.set(b, (map.get(b) || 0) - 1);
	}

	for (let [k, v] of map) {
		if (v > 0) return k;
	}

	return 'nothing';
}

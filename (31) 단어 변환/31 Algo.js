// 1. words안에 target가 없다면 변환할 필요가 없으므로 0을 리턴한다.
// 2. queue에 begin과 변환횟수를 넣어준다.
// 3. queue안에 앞에서 하나씩 빼서(cur) cur과 words들의 각문자들을 순회하여 다르면 카운트하고
// 4. 다른 문자가 1개라면 queue에 해당 word와 변환횟수를 넣어주고 방문했다고 표시해둔다.
// 5. 방문한 문자는 다시 비교하지 않고 3번부터 target과 같을 때까지 반복하고 target과 같다면 변환횟수를 리턴한다.

// I try
function solution(begin, target, words) {
	let count = 0;
	let visit = [];
	let queue = [[begin, count]];

	if (!words.includes(target)) return 0;

	while (queue) {
		let [cur, answer] = queue.shift();

		if (cur === target) {
			return answer;
		}

		words.forEach(word => {
			let different = 0;
			if (visit.includes(word)) return;

			for (let i = 0; i < word.length; i++) {
				if (word[i] !== cur[i]) different++;
			}

			if (different === 1) {
				queue.push([word, (answer += 1)]);
				visit.push(word);
			}
		});
	}
}

// Other answer
function solution(begin, target, words) {
	const queue = [begin];
	const visitArr = new Array(words.length).fill(false);
	let ctr = 0;
	let shiftedWord = begin;
	let queueLeng = 1;

	while (queue.length > 0) {
		shiftedWord = queue.shift();
		queueLeng--;

		for (let i in words) {
			if (check(shiftedWord, words[i])) {
				if (visitArr[i] == true) continue;

				if (words[i] == target) return ctr + 1;

				visitArr[i] = true;
				queue.push(words[i]);
			}
		}

		if (queueLeng == 0) {
			ctr++;
			queueLeng = queue.length;
		}
	}
	return 0;

	function check(standard, word) {
		let diffCtr = 0;

		if (standard.length != word.length) return false;

		for (let i = 0; i < standard.length; i++) {
			if (standard.charAt(i) != word.charAt(i)) diffCtr++;
			if (diffCtr > 1) return false;
		}
		return true;
	}
}

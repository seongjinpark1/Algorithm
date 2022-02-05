//  I try
function solution(priorities, location) {
	let count = 0;
	while (priorities.length !== 0) {
		let important = priorities[0];

		let breakpoint = false;
		for (let i = 1; i < priorities.length; i++) {
			if (priorities[i] > important) {
				priorities.shift();
				priorities.push(important);

				if (location === 0) {
					location = priorities.length - 1;
				} else {
					location--;
				}
				breakpoint = true;
				break;
			}
		}
		if (!breakpoint) {
			priorities.shift();
			count++;
			if (location === 0) return count;
			location--;
		}
	}
}

// priorities 문서 중요도 배열
// location

//  a b c d
//  2 1 3 2
//  c d a b

// a b c d e f
// 1 1 9 1 1 1
// c d e f a b

//  c d e f a b

//    1 1 1 2 1

//  Best answer
function solution(priorities, location) {
	var list = priorities.map((t, i) => ({
		my: i === location,
		val: t,
	}));
	var count = 0;
	while (true) {
		var cur = list.splice(0, 1)[0];
		if (list.some(t => t.val > cur.val)) {
			list.push(cur);
		} else {
			count++;
			if (cur.my) return count;
		}
	}
}

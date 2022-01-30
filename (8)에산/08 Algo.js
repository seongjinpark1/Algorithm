//  I try
function solution(d, budget) {
	d = d.sort((a, b) => a - b);
	let bug = budget;
	let count = 0;

	for (let i = 0; i < d.length; i++) {
		let sub = bug - d[i];
		if (sub >= 0) {
			count++;
			bug -= d[i];
		} else {
			return count;
		}
	}
	return count;
}

//  Best answer
function solution(d, budget) {
	d.sort((a, b) => a - b);

	while (d.reduce((a, b) => a + b, 0) > budget) d.pop();

	return d.length;
}

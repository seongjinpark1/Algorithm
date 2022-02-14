//  I try
function solution(id_list, report, k) {
	let reports = [...new Set(report)].map(a => {
		return a.split(' ');
	});
	let list = {};
	let obj = {};
	let answer = [];

	id_list.forEach(el => {
		list[el] = [0, []];
		obj[el] = 0;
	});

	reports.map(el => {
		list[el[1]][0]++;
		list[el[1]][1].push(el[0]);
	});

	for (let key in list) {
		if (list[key][0] >= k) {
			list[key][1].map(el => {
				obj[el]++;
			});
		}
	}

	id_list.map(el => {
		answer.push(obj[el]);
	});
	return answer;
}

// Best answer
function solution(id_list, report, k) {
	let reports = [...new Set(report)].map(a => {
		return a.split(' ');
	});
	let counts = new Map();
	for (const bad of reports) {
		counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
	}
	let good = new Map();
	for (const report of reports) {
		if (counts.get(report[1]) >= k) {
			good.set(report[0], good.get(report[0]) + 1 || 1);
		}
	}
	let answer = id_list.map(a => good.get(a) || 0);
	return answer;
}

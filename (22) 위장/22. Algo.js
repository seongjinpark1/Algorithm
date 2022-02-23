// I try
function solution(clothes) {
	let obj = {};
	let answer = 1;

	for (let i = 0; i < clothes.length; i++) {
		obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
	}

	for (let key in obj) {
		answer *= obj[key];
	}
	return answer - 1;
}

// 착용하지 않았을 경우(기본값) 1,
// 해당 종류의 옷이나 해당 종류의 다른 옷을 입으면 + 1
// 옷을 다 입지 않을 경우를 제외 -1

// Other answer
function solution(clothes) {
	return (
		Object.values(
			clothes.reduce((obj, t) => {
				obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
				return obj;
			}, {})
		).reduce((a, b) => a * (b + 1), 1) - 1
	);
}

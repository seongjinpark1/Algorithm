// I try
function solution(price, money, count) {
	let total = 0;
	let initial = price;

	while (count !== 0) {
		total += price;
		count--;
		price += initial;
	}
	return total > money ? total - money : 0;
}

// prcie = 이용료
// money = 내가 가진 돈
// count = 놀이기구를 탄 횟수
// 1. count 만큼놀이기구를 탔을 때 얼마인지 구하고 내돈에서 빼면됨?

// Best answer

function solution(price, money, count) {
	const tmp = (price * count * (count + 1)) / 2 - money;
	return tmp > 0 ? tmp : 0;
}
// 가우스법칙

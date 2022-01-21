// I try
const isPrime = sum => {
	for (let i = 2; i <= Math.sqrt(sum); i++) {
		if (sum % i === 0) return false;
	}
	return true;
};

function solution(nums) {
	let answer = 0;
	let length = nums.length;

	for (let i = 0; i < length - 2; i++) {
		for (let j = i + 1; j < length - 1; j++) {
			for (let z = j + 1; z < length; z++) {
				if (isPrime(nums[i] + nums[j] + nums[z])) {
					answer++;
				}
			}
		}
	}

	return answer;
}

// nums = 숫자가 들어있는 배열
// nums안에 있는 숫자중 다른숫자 3개를 골라 더했을 댸 소수가 되는 경우의 개수의 수
// length = 5
// 3,2,1

// Best answer
const isPrime = sum => {
	for (let i = 2; i <= Math.sqrt(sum); i++) {
		if (sum % i === 0) return false;
	}
	return true;
};

function solution(nums) {
	let answer = 0;
	let length = nums.length;

	for (let i = 0; i < length - 2; i++) {
		for (let j = i + 1; j < length - 1; j++) {
			for (let z = j + 1; z < length; z++) {
				if (isPrime(nums[i] + nums[j] + nums[z])) {
					answer++;
				}
			}
		}
	}

	return answer;
}

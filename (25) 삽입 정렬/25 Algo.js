/*
 * [삽입 정렬 알고리즘]
 * 정렬할 sorted배열을 만들어 sorted배열안의 가장 큰수와 첫번째 요소부터 비교한다.
 * sorted배열안의 가장 큰 수 보다 첫번째 요소가 더 크다면 sorted배열에 push해준다.
 * 작다면 첫번째 요소와 sorted[0]부터 비교를 하여 첫번째 요소가 작거나 같다면
 * 해당 요소를 기준으로 작은요소들은 left, 큰 요소들은 right로 나누어 left, 첫번째 요소, 
   right 순으로 sorted배열에 재할당한다.
 * 다시 1번부터 반복진행하고 반복문이 종료되면 정렬된 sorted를 반환한다.
 */
/*--------------------------------------------------------------*/
const insertionSort = function (arr) {
	let sorted = [arr[0]];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] >= sorted[i - 1]) {
			sorted.push(arr[i]);
		} else {
			for (let j = 0; j < i; j++) {
				if (arr[i] <= sorted[j]) {
					const left = sorted.slice(0, j);
					const right = sorted.slice(j);
					sorted = left.concat(arr[i], right);
					break;
				}
			}
		}
	}

	return sorted;
};

/*
 * [퀵 정렬 알고리즘]
 * 배열 안에 한 요소를 정한다(이를 pivot(피벗) 이라고 한다)
 * 피벗을 기준으로 피벗보다 작으면 왼쪽으로 크다면 오른쪽으로 옮긴다.
 * 피봇을 제외한 왼쪽 리스트와 오른쪽 리스트를 다시 정렬한다.
 * 분할된 왼쪽 리스트와 오른쪽 리스트도 다시 피벗을 정하고 피벗을 기준으로 2개의 부분리스트로 나눈다.
 * 재귀를 사용하여 부분 리스트들이 더이상 분할이 불가능 할 때까지 반복한다.
 */
/*--------------------------------------------------------------*/

const quickSort = function (arr) {
	// TODO: 여기에 코드를 작성합니다.
	if (arr.length <= 1) return arr;
	const pivot = arr[0];
	const left = [];
	const right = [];

	for (let i = 1; i < arr.length; i++) {
		if (pivot >= arr[i]) left.push(arr[i]);
		else right.push(arr[i]);
	}

	const leftSort = quickSort(left);
	const rightSort = quickSort(right);
	return [...leftSort, pivot, ...rightSort];
};

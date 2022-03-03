/*
 * [병합 정렬 알고리즘]
 * 주어진 배열을 반으로 left ,right로 나눕니다.
 * left부터 길이가 1이 될 때까지 계속해서 나눕니다.
 * 다시 정렬하면서 병합을 해줍니다. right도 동일하게 반복
 * left와 right가 정렬되었다면 마지막으로 정렬하면서 병합
 * 정렬된 배열 반환

 */
/*--------------------------------------------------------------*/
const merge = (left, right) => {
	// [5,4]
	const sort = [];
	let leftIdx = 0;
	let rightIdx = 0;
	let length = left.length + right.length;

	for (let i = 0; i < length; i++) {
		if (leftIdx === left.length) {
			sort.push(right[rightIdx]);
			rightIdx++;
		} else if (rightIdx === right.length || left[leftIdx] <= right[rightIdx]) {
			sort.push(left[leftIdx]);
			leftIdx++;
		} else {
			sort.push(right[rightIdx]);
			rightIdx++;
		}
	}
	return sort;
};
const mergeSort = function (arr) {
	// TODO: 여기에 코드를 작성합니다.
	if (arr.length <= 1) return arr;

	let middle = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, middle));
	let right = mergeSort(arr.slice(middle));
	let merged = merge(left, right);
	return merged;
};

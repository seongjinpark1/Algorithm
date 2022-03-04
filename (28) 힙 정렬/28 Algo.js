/*
 * [힙 정렬 알고리즘] (최소힙 구현)
 * binaryHeap함수로 트리구조처럼 배열을 만든다.
 * 트리구조 배열로만듦면서 insert함수를 이용하여 부모노드와 비교해 작은 노드를 부모로 바꿔준다.
 * 그럼 최소노드가 루트노드인 트리구조와같은 배열이 만들어지고 루트노드를 제외한 나머지 노드를 정렬해야한다.
 * removeRoot함수를 이용해서 루트노드를 삭제하더라도 새로운 루트노드가 최소노드가 되도록하는 작업을 반복한다.
 */
/*--------------------------------------------------------------*/
// 인덱스 교환하는 함수
function swap(idx1, idx2, arr) {
	[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

//   부모노드구하는 함수
function getParentIdx(idx) {
	return Math.floor((idx - 1) / 2);
}
// 노드를 삽입 후에 부모노드와 비교해서 삽입한노드가 작다면 교환 하는 함수
function insert(heap, item) {
	heap.push(item);
	if (heap.length > 1) {
		let curIdx = heap.length - 1;
		let pIdx = getParentIdx(curIdx);
		while (pIdx >= 0 && heap[curIdx] < heap[pIdx]) {
			swap(curIdx, pIdx, heap);
			curIdx = pIdx;
			pIdx = getParentIdx(curIdx);
		}
	}
	return heap;
}

//  루트노드 제거하고 최소노드가 루트노드가 되도록 유지하는함수
function removeRoot(heap) {
	swap(0, heap.length - 1, heap);
	heap.pop();
	if (heap.length === 0) return [];

	let curIdx;
	let minIdx = 0;
	while (curIdx !== minIdx) {
		curIdx = minIdx;
		let left = curIdx * 2 + 1;
		let right = curIdx * 2 + 2;
		if (left < heap.length && heap[left] < heap[minIdx]) {
			minIdx = left;
		}

		if (right < heap.length && heap[right] < heap[minIdx]) {
			minIdx = right;
		}

		swap(curIdx, minIdx, heap);
	}

	return heap;
}
//   트리 형식으로 배열을 만드는 함수
const binaryHeap = function (arr) {
	return arr.reduce((heap, item) => {
		return insert(heap, item);
	}, []);
};
//   메인함수
const heapSort = function (arr) {
	let minHeap = binaryHeap(arr);
	const sorted = [];
	while (minHeap.length > 0) {
		sorted.push(minHeap[0]);
		minHeap = removeRoot(minHeap);
	}
	return sorted;
};

// I try
function solution(bridge_length, weight, truck_weights) {
	let count = 0;
	let trucks = truck_weights.slice(0);
	let crossList = [];
	let ListWeight = weight; // 10
	let doneTrucks = [];

	for (let i = 0; i < bridge_length; i++) {
		crossList.push(0);
	}

	while (doneTrucks.length !== truck_weights.length) {
		let going = trucks.shift(); // 7
		let done = crossList.shift();
		if (done !== 0) {
			doneTrucks.push(done);
		}
		ListWeight += done;

		if (ListWeight - going >= 0) {
			crossList.push(going);
			ListWeight -= going;
		} else {
			trucks.unshift(going);
			crossList.push(0);
		}
		count++;
	}
	return count;
}

// bridge_length 최대 n대
// weight  n무게이하까지견딜수있고 다리에 완전히 오르지 않으면 무시
// truck_weights  트럭별 무개

// 경과 시간	다리를 지난 트럭	    다리를 건너는 트럭(crossList)	    대기 트럭(trucks)
// 0	            []	            []	            [7,4,5,6]
// 1	            []	            [0,7]	        [4,5,6]
// 2                []              [7,0]           [4,5,6]
// 3	            [7]	            [4]	            [5,6]
// 4	            [7]	            [4,5]	        [6]
// 5	            [7,4]	        [5]	            [6]
// 6	            [7,4,5]	        [0,6]	        []
// 7	            [7,4,5]	        [6,0]	        []
// 8	            [7,4,5,6]	    []	            []

// Best answer

function solution(bridge_length, weight, truck_weights) {
	// '다리'를 모방한 큐에 간단한 배열로 정리 : [트럭무게, 얘가 나갈 시간].
	let time = 0,
		qu = [[0, 0]],
		weightOnBridge = 0;

	// 대기 트럭, 다리를 건너는 트럭이 모두 0일 때 까지 다음 루프 반복
	while (qu.length > 0 || truck_weights.length > 0) {
		// 1. 현재 시간이, 큐 맨 앞의 차의 '나갈 시간'과 같다면 내보내주고,
		//    다리 위 트럭 무게 합에서 빼준다.
		if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];

		if (weightOnBridge + truck_weights[0] <= weight) {
			// 2. 다리 위 트럭 무게 합 + 대기중인 트럭의 첫 무게가 감당 무게 이하면
			//    다리 위 트럭 무게 업데이트, 큐 뒤에 [트럭무게, 이 트럭이 나갈 시간] 추가.
			weightOnBridge += truck_weights[0];
			qu.push([truck_weights.shift(), time + bridge_length]);
		} else {
			// 3. 다음 트럭이 못올라오는 상황이면 얼른 큐의
			//    첫번째 트럭이 빠지도록 그 시간으로 점프한다.
			//    참고: if 밖에서 1 더하기 때문에 -1 해줌
			if (qu[0]) time = qu[0][1] - 1;
		}
		// 시간 업데이트 해준다.
		time++;
	}
	return time;
}

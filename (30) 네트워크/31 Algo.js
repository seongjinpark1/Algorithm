// I try
function solution(n, computers) {
	let answer = 0;
	const visit = [];

	for (let i = 0; i < n; i++) {
		visit.push(false);
	}

	for (let i = 0; i < n; i++) {
		if (!visit[i]) {
			dfs(i);
			answer++;
		}
	}

	function dfs(num) {
		visit[num] = true;
		for (let i = 0; i < n; i++) {
			if (computers[num][i] === 1 && !visit[i]) {
				dfs(i);
			}
		}
	}
	return answer;
}

// Other answer
function solution(n, computers) {
	var answer = 0;
	var isVisited = [];

	for (var i = 0; i < n; i++) {
		isVisited.push(false);
	}

	var DFS = function (computers, i) {
		console.log('DFS excuted');
		if (isVisited[i]) {
			return;
		}
		isVisited[i] = true;
		console.log(isVisited);

		for (var j = 0; j < computers.length; j++) {
			if (computers[i][j] === 1) {
				console.log(i + ', ' + j);
				console.log('connected');
				DFS(computers, j);
			}
		}
	};

	for (var i = 0; i < n; i++) {
		if (!isVisited[i]) {
			answer++;
			console.log(isVisited, '도입부');
			console.log(answer);
			DFS(computers, i);
		}
	}

	return answer;
}

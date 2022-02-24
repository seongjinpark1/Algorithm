// I try
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let computerNum = Number(input[0]);
let edgeNum = Number(input[1]);
let connectIt = [...new Array(computerNum + 1)].map(() => []);
let visited = [...new Array(computerNum + 1)].fill(false);
let answer = 0;

for (let i = 0; i < edgeNum; i++) {
	let start = Number(input[i + 2].split(' ')[0]);
	let end = Number(input[i + 2].split(' ')[1]);
	connectIt[start].push(end);
	connectIt[end].push(start);
}

function dfs(start) {
	for (let end of connectIt[start]) {
		if (!visited[end]) {
			visited[end] = true;
			answer++;
			dfs(end);
		}
	}
}
visited[1] = true;
dfs(1);
console.log(answer);

//  Other answer
//  https://www.acmicpc.net/problem/status/2606/17/1

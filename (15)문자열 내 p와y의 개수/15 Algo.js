// I try

function solution(s) {
	let alpP = 0;
	let alpY = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i].toLowerCase() === 'p') {
			alpP++;
		} else if (s[i].toLowerCase() === 'y') {
			alpY++;
		}
	}

	if (alpP === alpY) {
		return true;
	}
	return false;
}

// Best answer

function numPY(s) {
	return s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length;
}

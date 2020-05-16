function cariPasangan(pairSocks) {
	let total = [];
	for (let i = 0; i < pairSocks.length; i++) {
		if (pairSocks[i] === pairSocks[i + 1]) {
			total++;
		}
			pairSocks.sort(function (a, b) {return a-b});
    	}
	return total+" Pasang";
}


console.log(cariPasangan([5, 13, 7, 5, 9, 20, 9, 5, 14]));
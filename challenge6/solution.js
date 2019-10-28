function countBands (line){
	let char,
		count = 0,
		lastIndex = line.length - 1;
	for(let i = 0; i <= Math.max(0, lastIndex / 2); i++){
		if(line[i] !== line[lastIndex - i]){
			return 0;
		}
		if(char !== line[i]){
			count++;
			char = line[i];
		}
	}
	return count;
}

function countLayers(rug) {
	return rug.reduce((a,n,i) => Math.max(a, countBands(rug[i])), 0);
}

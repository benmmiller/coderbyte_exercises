function unmix(str) {
	let arr = [...str];
	for(let i=0;i<str.length-1;i+=2) {
		[arr[i], arr[i+1]] = [arr[i+1], arr[i]];
	}
	return arr.join('');
}

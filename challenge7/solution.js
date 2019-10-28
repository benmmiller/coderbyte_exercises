const regExp = /^((val=\w+&?)|(id=([0-9]|10)&?)|(time=\d\d:\d\d&?)|(desc=[A-za-z]+&?)){3}((val=\w+)|(id=([0-9]|10))|(time=\d\d:\d\d)|(desc=[A-za-z]+))$/;

function dataRegexLovely(str) {
	var match = str.match(regExp);
	var values = match ? match[0].split("&") : [];
	var obj = {};
		for(let i = 0 ;i < values.length; i++ ) {
			let value = values[i];
			let keyValue = value.split("=");
			if(keyValue[0].indexOf("id")==0) {
				obj[keyValue[0]] = parseFloat(keyValue[1]);
			}
			else {
				obj[keyValue[0]] = keyValue[1]
			}
		}
	
	return obj;
}

// 2021秋招-小红书笔试

// 1.url 获取 key 的 value 值
function solveMeFirst1(url, key) {
	let search = '&';
	if (!url.includes(search)) search = '?';
	const arr = url.split(search);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].includes(key)) {
			const index = arr[i].indexOf(key) + key.length + 1;
			return arr[i].slice(index);
		}
	}
	return false
}

console.log(solveMeFirst1('https://xiaohongshu.com?ans=984', 'ans')); // 984
console.log(solveMeFirst1('https://xiaohongshu.com?name=619&key=88&ans=984', 'kkk')); // false
console.log(solveMeFirst1('https://xiaohongshu.com?name=619&key=88&ans=984', 'name')); // 619

// 2.字符串相邻去重
function solveMeFirst2(str) {
	let res = '';
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== str[i + 1]) res += str[i]
	}
	return res;
}

console.log(solveMeFirst3('AAAABBBCCCDDDAABBB')); // ABCDAB
console.log(solveMeFirst3('fewwffffwerreroao')); // fewfwereroao
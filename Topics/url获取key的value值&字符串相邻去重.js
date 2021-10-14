// 2021秋招-小红书笔试

// 1.url 获取 key 的 value 值
function solveMeFirst1(url, key) {
	let s = '&';
	if (!url.includes('&')) s = '?';
	const arr = url.split(s);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].includes(key)) {
			const index = arr[i].indexOf(key) + key.length + 1;
			return arr[i].slice(index);
		}
	}
	return false
}

console.log(solveMeFirst1('https://m.xiaohongshu.com?key=888','key')); // 888
console.log(solveMeFirst1('https://m.xiaohongshu.com?name=95919&key=888','key')); // 888
console.log(solveMeFirst1('https://m.xiaohongshu.com?name=95919&key=888','name')); // 95919

// 3.字符串相邻去重
function solveMeFirst3(str) {
	const arr = Array.from(str);
	let res = arr[0].toString();
	for (let x = 1; x < arr.length; x++) {
		if (arr[x] !== arr[x - 1]) res = res + arr[x]
	}
	return res;
}

console.log(solveMeFirst3('AAAABBBCCDAABBB'));
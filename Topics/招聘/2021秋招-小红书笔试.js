// 2021秋招-小红书笔试

// 1.获取 URL 中 key 对应的 value 值
function solveMeFirst1(url, key) {
	const arr = url.split('?');
	let value = false;
	for (let i = 1; i < arr.length; i++) {
			if (arr[i].includes(key)) {
				value = arr[i].slice(key.length + 1)
				break
			}
	}
	return value
}

console.log(solveMeFirst1('https://m.xiaohongshu.com?name=95919','name'));

// 2.买卖股票问题
function solveMeFirst2(prices) {
	let maxProfit = 0, min = prices[0];
	for (let x = 1; x < prices.length; x++) {
		min = Math.min(prices[x], min);
		maxProfit = Math.max(prices[x] - min, maxProfit)
	}
	return maxProfit
}

console.log(solveMeFirst2([7,1,5,3,6,4,15,0]));

// 3.去除字符串的相邻重复元素
function solveMeFirst3(str) {
	const arr = [];
	for (const x of str) arr.push(x)
	let res = arr[0].toString();
	for (let x = 1; x < arr.length; x++) {
		if (arr[x] !== arr[x - 1]) res = res + arr[x]
	}
	return res;
}

console.log(solveMeFirst3('AAAABBBCCDAABBB'));
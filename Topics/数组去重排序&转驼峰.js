// 2021秋招-创蓝云智笔试

// 数组去重排序
function sortWith(arr) {
  arr = Array.from(new Set(arr));
  arr = arr.sort((num1, num2) => {
    if (num1 > num2)  return 1;
    else if (num1 < num2) return -1;
    else return 0;
  })
  return arr;
}
sortWith([5, 4, 9, 4, 1, 55, 2]); // [1, 2, 4, 5, 9, 55]

// 转驼峰
function change(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-') {
      // 字符串的方法在操作字符串时都不会改变原字符串
      str = str.replace(str[i],'');
      str = str.replace(str[i], str[i].toUpperCase());
    }
  }
  return str
}

change('a-bcd-ef-gh-i'); // 'aBcdEfGhI'

function change1(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '-') res += str[i];
    else {
      res += str[i + 1].toUpperCase();
      i++;
    } 
  }
  return res
}
change1('a-bcd-ef-gh-i'); // 'aBcdEfGhI'

function change2(str) {
  const arr = Array.from(str);
  while (true) {
    const index = arr.indexOf('-');
    if (index < 0) break;
    const ret = arr.splice(index, 2);
    arr.splice(index, 0, ret[1].toUpperCase());
  }
  return arr.join('');
}
change2('a-bcd-ef-gh-i'); // 'aBcdEfGhI'

// 九九乘法口诀表
function print99() {
  for (let i = 1; i <= 9; i++) {
    const resArr = [];
    for (let j = 1; j <= i; j++) {
      const res = i + '×' + j + '=' + i*j;
      resArr.push(res);
    }
    console.log(...resArr);
  }
}
print99();
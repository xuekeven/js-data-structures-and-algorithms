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
  const arr = Array.from(str);
  while (true) {
    const index = arr.indexOf('-');
    if (index < 0) break;
    const ret = arr.splice(index, 2);
    arr.splice(index, 0, ret[1].toUpperCase());
  }
  const res = arr.toString().replaceAll(',','');
  return res;
}
change('aaa-bbb-ccc-ddd'); // 'aaaBbbCccDdd'

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
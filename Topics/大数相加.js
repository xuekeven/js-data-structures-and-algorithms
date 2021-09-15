// 2021秋招-去哪儿网校招-笔试编程题
// 以字符串的形式读入两个较大的数字，编写一个函数计算它们的和，以字符串形式返回。
function add(number1, number2) {

  const longArr = [], shortArr = [];
  if (number1.length > number2.length) {
    for (const x of number1) longArr.push(x)
    for (const y of number2) shortArr.push(y)
  } else {
    for (const x of number1) shortArr.push(x)
    for (const y of number2) longArr.push(y)
  }

  const max = longArr.length, min = shortArr.length;
  let add10 = 0, res = '', num, num1, num2;
  for (let i = 0; i < max; i++) {
    if (i < min) {
      num1 = Number(longArr[longArr.length - i - 1]);
      num2 = Number(shortArr[shortArr.length - i - 1]);
    } else {
      num1 = Number(longArr[longArr.length - i - 1]);
      num2 = 0;
    }
    num = num1 + num2 + add10;
    add10 = 0;
    if ( i !== max - 1 && num >= 10) {
      num = num - 10;
      add10 = 1;
    } 
    res = num + res;
  }
  return res;
}
console.log(add('589465849568', '669784652318'));
console.log(589465849568 + 669784652318);
// 2021秋招-去哪儿网笔试

// 大数相加：以字符串的形式读入两个较大的数字，编写一个函数计算它们的和，以字符串形式返回。
function solveMeFirst1(number1, number2) {
  let longArr, shortArr;
  if (number1.length > number2.length) {
    longArr = Array.from(number1);
    shortArr = Array.from(number2);
  } else {
    longArr = Array.from(number2);
    shortArr = Array.from(number1);
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

console.log(solveMeFirst1('589465849568', '669784652318'), 589465849568 + 669784652318);
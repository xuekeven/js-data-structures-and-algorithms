// 2021秋招-去哪儿网笔试

// 大数相加：以字符串的形式读入两个较大的数字，编写一个函数计算它们的和，以字符串形式返回。
function solveMeFirst1(number1, number2) {
  let longStr, shortStr;
  if (number1.length > number2.length) {
    longStr = number1;
    shortStr = number2;
  } else {
    longStr = number2;
    shortStr = number1;
  }

  const max = longStr.length, min = shortStr.length;
  let add10 = 0, res = '', num, num1, num2;
  for (let i = 0; i < max; i++) {
    if (i < min) {
      num1 = Number(longStr[longStr.length - i - 1]);
      num2 = Number(shortStr[shortStr.length - i - 1]);
    } else {
      num1 = Number(longStr[longStr.length - i - 1]);
      num2 = 0;
    }
    num = num1 + num2 + add10;
    add10 = 0;
    if (num >= 10 && i !== max - 1) {
      num = num - 10;
      add10 = 1;
    } 
    res = num + res;
  }
  return res;
}

console.log(solveMeFirst1('589465849568234523', '66978465231823456'), 589465849568234523 + 66978465231823456);
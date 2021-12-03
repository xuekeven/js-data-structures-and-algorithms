// 2021秋招-创蓝云智笔试

// 转驼峰
function change(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-') {
      // 字符串的方法在操作字符串时都不会改变原字符串
      str = str.replace(str[i], '');
      str = str.replace(str[i], str[i].toUpperCase());
    }
  }
  return str;
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
  return res;
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

// 2021秋招-ZOOM笔试

// 给你一个数组，求出数组最大公因数
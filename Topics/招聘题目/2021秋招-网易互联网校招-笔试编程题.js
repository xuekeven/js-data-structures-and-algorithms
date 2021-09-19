// 2021秋招-网易互联网校招-笔试编程题
// 2.数字分解

// 通过 36%
function solveProblem2(num1, num2) {
  if (num2 / num1 < 2) return -1
  let num = 0;
  while(true) {
      let res = num2 / num1;
      if (res < 2) {
        break
      } else {
        num++;
        num2 = res;
      }
  }
  return num
}

// 新解法
function solveProblem2(num1, num2) {
  const res = num2 / num1;
  if (res < 2) return -1
  
  let out = judge(res), num = 0;
  if (out === false) return 1
  else {
    let res1 = out, res2 = num / out;
    let out1 = judge(res1), out2 = judge(res2);
    if (out1 === false) num++
    if (out2 === false) num++
  }
}

function judge(num) {
  let halfNum = parseInt(num / 2);
  for (let i = 0; i < halfNum; i++) {
    if (num % i == 0) return i
  }
  return false
}


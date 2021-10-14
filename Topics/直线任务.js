// 2021秋招-京东笔试

// 2.直线任务：小明在一条直线上执行任务，需要在坐标0的位置和坐标a的位置之间需要从0移动到a，
// 每移动1个单位坐标，小明携带的仪器需要耗费对应1个单位的能量。
// 携带的仪器最多可装b个单位能量，初始时仪器是满能量。坐标0和a之间有一处坐标f的位置
// 可以给仪器充能。现在小明从0移动至a或者从a移动至0都算一次行动。
// 请问小明从0出发，希望完成k次行动，最少需要在f坐标处充能多少次。
// 输入描述：一行4个空格隔开的数字a、b、f、k。
// i<f<a=10^6；1<=b<=10^9；1<=k<=10^4。
function solveProblem2(arr) {
  const a = arr[0], b = arr[1], f = arr[2], k = arr[3];
  let res = -1, resTimes = 0, times = 0,
      of = f, fa = a - f, oa = a, last = b;
  while (true) {
    if (last - of >= 2*fa) {
      times++;
      last = last - oa;
      if (times === k) {
        res = resTimes;
        break;
      }
    } else if (last - of >= fa) {
      times++;
      if (times === k) {
        res = resTimes;
        break;
      } else {
        resTimes++;
        last = b - fa;
      }
    } else if (last >= of) {
      times++;
      resTimes++;
      last = b - fa;
      if (times === k) {
        res = resTimes;
        break;
      }
    } else if (last < of) break;

    if (last - fa >= 2*of) {
      times++;
      last = last - oa;
      if (times === k) {
        res = resTimes;
        break;
      }
    } else if (last - fa >= of) {
      times++;
      if (times === k) {
        res = resTimes;
        break;
      } else {
        resTimes++;
        last = b - of;
      }
    } else if (last >= fa) {
      times++;
      resTimes++;
      last = b - of;
      if (times === k) {
        res = resTimes;
        break;
      }
    } else if (last < fa) break;
  }
  return res
}

console.log(solveProblem2([6, 9, 2, 4]));
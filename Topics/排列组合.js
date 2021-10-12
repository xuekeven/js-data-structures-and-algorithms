// 排列
function queue(arr, size) {
  if (size > arr.length) return;
  const allResult = [];

  (function (arr, size, result) {
    const arrLen = arr.length;
    if (result.length === size) allResult.push(result);
    else {
      for (let i = 0; i < arrLen; i++) {
        const newArr = [].concat(arr);
        const curItem = newArr.splice(i, 1);
        arguments.callee(newArr, size, [].concat(result, curItem));
      }
    }
  })(arr, size, []);

  return allResult;
}
console.log(queue([1, 2, 3], 3)); // A(3, 3) = 3! = 6
console.log(queue([1, 2, 3, 4], 3)); // A(4, 3) = 4! / 1! = 24

// 组合
function choose(arr, size) {
  const allResult = [];

  (function (arr, size, result) {
    const arrLen = arr.length;
    if (size > arrLen) return;
    if (size === arrLen) allResult.push([].concat(result, arr));
    else {
      for (let i = 0; i < arrLen; i++) {
        const newResult = [].concat(result);
        newResult.push(arr[i]);
        if (size === 1) allResult.push(newResult);
        else {
          const newArr = [].concat(arr);
          newArr.splice(0, i + 1);
          arguments.callee(newArr, size - 1, newResult);
        }
      }
    }
  })(arr, size, []);

  return allResult;
}
console.log(choose([1, 2, 3, 4, 5], 3)); // C(5,3) = A(5,3) / A(3,3) = 10
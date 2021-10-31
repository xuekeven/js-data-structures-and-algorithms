// 2021秋招-富途一面

// 2.二维数组组合：输入：[['red', 'green'], ['a1', 'a2'], ['b1', 'b2']]
// 编写一个函数，要求输出：['red-a1-b1', 'red-a1-b2', 'red-a2-b1', 'red-a2-b2', 
// 'green-a1-b1', 'green-a1-b2','green-a2-b1','green-a2-b2']

const arr = [['red', 'green'], ['a1', 'a2'], ['b1', 'b2']];

// 方法一：
function create(arr) {return arr.reduce((a, b) => a.map(aItem => b.map(bItem => aItem + '-' + bItem)).reduce((a, b) => [...a, ...b]))}

function create(arr) {
  let res = arr.reduce(
    (a, b) => a.map(aItem => b.map(bItem => aItem + '-' + bItem)).reduce((a, b) => [...a, ...b])
  );
  return res
}

function create(arr) {
  let res;
  res = arr.reduce(function (a, b) {
    let res = a.map(function (aItem) {
      let res = b.map(function (bItem) {
        console.log(aItem + '-' + bItem)
        return aItem + '-' + bItem;
      })
      return res;
    })
    console.log(res)
    res = res.reduce(function (a, b) {
      return [...a, ...b];
    })
    return res;
  })
  return res;
}

// 方法二：
function combine(arr) {
  const res = [];
  function helper(chunkIndex, prev) {
    let chunk = arr[chunkIndex];
    let isLast = chunkIndex === arr.length - 1;
    for (let val of chunk) {
      let cur = prev.concat(val);
      if (isLast) {
        // 如果已经处理到数组的最后一项了 则把拼接的结果放入返回值中
        res.push(cur);
      } else {
        helper(chunkIndex + 1, cur);
      }
    }
  }
  // 从属性数组下标为 0 开始处理
  // 并且此时的 prev 是个空数组
  helper(0, []);
  return res;
}
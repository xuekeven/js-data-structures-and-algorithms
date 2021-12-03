// 判断数据类型
function type(obj) {
  if (Number.isNaN(obj)) return 'NaN';
  if (Array.isArray(obj)) return 'Array';
  if (obj === null) return 'Null';
  let res = typeof obj;
  return res === 'object' ? Object.prototype.toString.call(obj).replace('[object ', '').replace(']', '') : res.replace(res[0], res[0].toUpperCase());
}

console.log(type(123));      // Number
console.log(type('123'));    // String
console.log(type(false));    // Boolean
console.log(type(['123']));  // Array
console.log(type(null));     // Null

// 2021秋招-百度一面
// 实现计数器函数：使用函数时数字加 1，使用其 clean 方法可以归零。

// 方法一（不需要全局变量）：
const add1 = (function() {
  let num = 0;
  function log() {
    num++;
    console.log(num);
  }
  log.clean = () => num = 0
  return log
})()

add1(); // 1
add1(); // 2
add1(); // 3
add1.clean();
add1(); // 1

// 方法二：
const add2 = (function() {
  let num = 0;
  // const that = this;
  function log() {
    num++;
    console.log(num);
  }
  log.clean = function () {
    num = 0
  }
  return log
})()

add2(); // 1
add2(); // 2
add2(); // 3
add2.clean();
add2(); // 1

// 方法三（需要用到全局变量）：
let num = 0;
function add3() {
  num++;
  console.log(num);
}
add3.clean = () => num = 0;

add3(); // 1
add3(); // 2
add3(); // 3
add3.clean();
add3(); // 1

// 方法四（需要用到全局变量）：
var num = 0;
function add4() {
  num++;
  console.log(num);
}
add.clean = () => this.num = 0; // 这里不用 this 也可以，但用了 this 前面定义 num 必须用 var

add4(); // 1
add4(); // 2
add4(); // 3
add4.clean();
add4(); // 1
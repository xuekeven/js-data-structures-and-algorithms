// 2021秋招-阅文笔试

// 使用原生代码打乱一个 JS 数组
// 参考：https://juejin.cn/post/6844903863812620296 。

// 用 setTimeout 实现 setInterval
// 参考：https://juejin.cn/post/6844903839934447629 。

// 简单版
const mySetInterval = (cb, time) => {
  function fn() {
    cb();
    setTimeout(arguments.callee, time);
  }
  setTimeout(() => fn(), time);
  return fn
}

// 升级版
let timeMap = {};
let id = 0; // 简单实现 id 唯一
const mySetInterval = (cb, time) => {
  let timeId = id; // 将 timeId 赋予 id
  id++; // id 自增实现唯一 id
  function fn() {
    cb()
    timeMap[timeId] = setTimeout(() => fn(), time)
  }
  timeMap[timeId] = setTimeout(fn, time);
  return timeId; // 返回timeId
}

mySetInterval(() => console.log(new Date()), 1000);

// 3. 用 clearTimeout 实现 clearInterval

const myClearInterval = (id) => {
  clearTimeout(timeMap[id]); // 通过 timeMap[id] 获取真正的id
  delete timeMap[id];
}
// 2021秋招-深信服一面

// 关键字搜索树：写一个过滤函数，输入一个树和一个字符串，如：
tree = [
  {'name': 'A'},
  {'name': 'B', 'children': [
    {'name': 'A'},
    {'name': 'AA'}
  ]} 
]
// 当输入字符串为'A'时，输出为
[
  {'name': 'A'},
  {'name': 'B', 'children': [
    {'name': 'A'}
  ]} 
]
// 当输入字符串为'AA'时，输出为
[
  {'name': 'A'},
  {'name': 'B', 'children': [
    {'name': 'AA'}
  ]} 
]
// 当输入字符串为'B'时，输出为
[
  {'name': 'B', 'children': [
    {'name': 'A'},
    {'name': 'AA'}
  ]} 
]

function filter(tree, str) {
  const result = JSON.parse(JSON.stringify(tree));
  (function (arr) {
    arr.forEach(val => {
      for (const i of Object.keys(val)) {
        if (val[i] instanceof Array) arguments.callee(i)
        else {
          if (val[i] !== str) delete val[i]
        }
      }
    })
  })(result)
  return result
}

// 数组元素分类：写一个函数，将
arr = ['2018-1-1', '2018-1-5', '2019-7-17', '2020-4-19', '2020-4-30', '2020-11-25'] 
// 转化为：
obj = {
  '2018-1': ['2018-1-1', '2018-1-5'],
  '2019-7': ['2019-7-5'],
  '2020-4': ['2020-4-1', '2020-4-3'],
  '2020-11': ['2020-11-25']
}

function change(arr) {
  const res = {}, set = new Set();
  arr.forEach(element => {
    let key;
    if (element.charAt(6) === '-') key = element.slice(0, 6);
    else key = element.slice(0, 7);
    if (!set.has(key)) {
      set.add(key);
      res[key] = [element];
    } else res[key].push(element);
  });
  return res;
}
change(arr);
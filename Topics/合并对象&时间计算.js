// 2021秋招-哔哩哔哩笔试

// 1.合并对象：合并 2 个对象以及其子对象，返回一个新的对象，如：
// { a: 1 } { a: 2 }，返回 { a: [1,2] }
// { a: 1 } { b: 1 }，返回 { a: 1, b: 1 }
// { a: [1] } { a: [2] }，返回 { a: [1,2] }
// 如果合并的对象类型不同则 throw error

const obj1 = arr[0], obj2 = arr[1], res = {};
for (const i of Object.entries(obj1)) var key1 = i[0], val1 = i[1];
for (const i of Object.entries(obj2)) var key2 = i[0], val2 = i[1];
if (Object.prototype.toString.call(this, val1) !== Object.prototype.toString.call(this,val2)) throw error;

if (key1 === key2) {
}

// JSON.parse(obj1)
// JSON.stringify(obj1)

console.log(arr)
console.log(JSON.parse(JSON.stringify(obj1)), JSON.parse(JSON.stringify(obj2)))
console.log(key1, val1, key2, val2)

// 2.时间计算：写一个函数接收语义化的描述，得到计算后的日期时间。
// PS: （暂不考虑【月】【年】的计算）
// +/-3W 加或减3周，+/-3d 加或减3天，+/-3h 加或减3小时
// +/-3m 加或减3分钟，+/-3s 加或减3秒

// 2021-09-13 00:00:00
// +5d
// 得到结果：2021-09-18 00:00:00

// 2021-09-13 00:00:00
// +3m +3h
// 得到结果：2021-09-13 03:03:00

const day = arr[0].split('-'),
      time = arr[1].split(':');

for (let i = 2; i < arr.length; i++) {
    const str = arr[i];
    if (str.endsWith('s')) {
        if (str.startsWith('+')) {
            
        }
    }
}
console.log(day);

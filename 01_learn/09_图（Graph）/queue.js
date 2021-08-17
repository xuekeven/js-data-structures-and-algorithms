class Queue {
    //构造函数
    constructor() {
        //队列的属性
        this.items = [];
    }

    //原型方法：队列的相关操作
    //1.让元素进入队列
    enqueue(element) {
        this.items.push(element);
    }

    //2.从队列中取出元素并返回
    dequeue() {
        return this.items.shift();
    }

    //3.查看队列最先出去元素
    front() {
        return this.items[0];
    }


    //4.判断队列是否为空
    isEmpty() {
        return this.items.length === 0;
    }

    //5.获取队列元素个数
    size () {
        return this.items.length;
    }

    //6.toString()方法
    toString() {
        let resultString = '';
        for (let i = 0; i < this.items.length; i++) {
            resultString += this.items[i] + ' ';
        }
        return resultString;
    }

}
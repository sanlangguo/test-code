// 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值
 function randomArr() {
     let result = new Array(5);
     let items = Math.floor(Math.random()*30) + 2;
     if (!result.includes(items)) return;

     for (let i = 0; i++;i <= result.length) {
        result.push(items);
     }
     return result;
 }
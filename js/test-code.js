// 第1天 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值
const arr = [];
function randomArray() {
    if(arr.length >=5) return arr;
    const item = Math.floor(Math.random() * 31 ) + 2;
    if (!arr.includes(item)) arr.push(item); 
    randomArray();
}

//  第2天 写一个方法去掉字符串中的空格
function strim(str) {
    return str.replace(/\s/g,'');
    return str.split(' ').join('');
}


var arr = [1,2,3,5,3,5,6,3,3,5,8];
function repeat(arr){
    var news = [];
    for(var i=0;i<arr.length;i++){
        if(news.indexOf(arr[i]) ===-1){
            news.push(arr[i]);
        }
    }
    return news;
}
console.log(repeat(arr));

const a = require('./a.js');
const b = require('./b.js');
document.write(a+b);
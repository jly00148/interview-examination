/*
 * @Author: jly
 * @Date: 2021-12-24 20:20:23
 * @LastEditTime: 2021-12-24 22:22:25
 * @FilePath: \interview-examination\03-js\01-output\02-forAndTimer.js
 */

for (var index = 0; index < 3; index++) {
    setTimeout(function(){
        console.log(index)// 3 3 3 解析：生成3个定时器，函数不会立即执行，当循环完毕后index是3，所以3个定时器的值是3个3
    },3000)
}

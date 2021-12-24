/*
 * @Author: jly
 * @Date: 2021-12-24 22:59:29
 * @LastEditTime: 2021-12-24 23:07:22
 * @FilePath: \interview-examination\03-js\01-output\03-scope.js
 */
var bar = 1;

function test(){
    console.log(bar); //undefined 原因：在函数作用域内访问变量首先访问当前函数有没有访问的变量，有变量声明的提升但是没赋值所以保存的值为undefined
    var bar = 2;
    console.log(bar);
}

test()
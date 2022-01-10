/*
 * @Author: jly
 * @Date: 2022-01-10 18:29:29
 * @LastEditTime: 2022-01-10 18:30:38
 * @FilePath: \interview-examination\03-js\01-output\04-output4.js
 */

//   当我们这样做时会发生什么?

function bark() {
    console.log("Woof!");
  }
  
  bark.animal = "dog";

//  总结： Nothing, this is totally fine!这在JavaScript中是可能的，因为函数也是对象！（原始类型之外的所有东西都是对象）

// 函数是一种特殊类型的对象。您自己编写的代码并不是实际的函数。 该函数是具有属性的对象，此属性是可调用的。
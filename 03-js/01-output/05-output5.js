/*
 * @Author: jly
 * @Date: 2022-01-11 18:30:09
 * @LastEditTime: 2022-01-11 18:31:32
 * @FilePath: \interview-examination\03-js\01-output\05-output5.js
 */
function sayHi() {
    console.log(name);//undefined
    console.log(age);//ReferenceError
    var name = "Lydia";
    let age = 21;
  }
  
  sayHi();

//   在函数中，我们首先使用var关键字声明了name变量。 这意味着变量在创建阶段会被提升（JavaScript会在创建变量创建阶段为其分配内存空间），默认值为undefined，
//   直到我们实际执行到使用该变量的行。 我们还没有为name变量赋值，所以它仍然保持undefined的值。使用let关键字（和const）声明的变量也会存在变量提升
//   ，但与var不同，初始化没有被提升。 在我们声明（初始化）它们之前，它们是不可访问的。 这被称为“暂时死区”。 当我们在声明变量之前尝试访问变量时，
//   JavaScript会抛出一个ReferenceError。

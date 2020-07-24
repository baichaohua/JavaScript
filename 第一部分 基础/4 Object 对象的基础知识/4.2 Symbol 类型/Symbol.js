/*
	Symbol 是表示唯一的标识符。
*/

//创建一个描述为 id 的 Symbol
let id = Symbol("id");
//Symbol 保证是唯一的。即使我们创建了许多具有相同描述的 Symbol ，他们的值也是不同。描述只是一个标签，不影响任何东西。
//例如，下面2个 symbol 他们并不相等
let id1 = Symbol("id1111");
let id2 = Symbol("id2222");
console.log(id==id2);

// Alert 其他数据类型的时候，一般会隐式的转换为字符串类型，然后 Symbol 是不会被转换为 字符串类型的
console.log(id1.toString());
console.log(id1.description);


//隐藏属性
/*
	Symbol 允许我们创建对象的隐藏属性，代码的任何其他部分都不能意外访问或重写这些属性。
*/



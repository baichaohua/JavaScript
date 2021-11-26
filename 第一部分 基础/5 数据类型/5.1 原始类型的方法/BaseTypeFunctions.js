/*
	JavaScript 允许我们像使用对象一样使用原始类型（字符串，数字等）。JavaScript 还提供了这样的调用方法。我们很快就会学习它们，但是首先我们将了解它的工作原理，毕竟原始类型不是对象。
	我们先来看看原始类型和对象之间的关键区别：
	
	A. 一个原始值：
		1. 是原始类型的一种值
		2. 在 JavaScript 中有 7 种原始类型： string , number , bigint , boolean , symbol , null 和 undefined 
	
	B. 一个对象:
		1. 能够存储多个值作为属性。
		2. 可以使用大括号 {} 创建对象，例如: {name:"John",age:30}   JavaScript 中还有其他种类的对象，例如函数就是对象。
*/

//关于对象的最好的事情之一是，我们可以把一个函数作为对象的属性存储到对象中：

let john = {
	name:"John",
	sayHi:function () {
		console.log("这是对象中的一个属性存储的函数");
	}
};
john.sayHi();

//原始类型的一些方法
let bai="bai";
console.log(bai.toUpperCase());
let floatNum = 3.1415926;
console.log(floatNum.toFixed(3));


/*
	总结：
		1. 除了 null 和 undefined 之外的原始类型都提供了很多有用的方法。
		2. 从形式上讲，这些方法通过临时对象工作，但 JavaScript 引擎可以很好地调整，以在内部对其进行优化，因此调用他们并不需要太高的成本。
*/

let str = "Hello";
str.test=5;
console.log(str.test);


let arr01 = [1,'1','s',2];
let arr02 = [];
let result = arr01 || arr02;
console.log(result)
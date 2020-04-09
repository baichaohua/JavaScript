/*
	箭头函数的基础知识
*/
//箭头函数 相较于 函数表达式，更为简单，而且效果可能也更好。下面是它的示例:
let firstArrow = (arg1,arg2,arg3) => expression
//上面这句，其实就是创建了一个名为  firstArrow 的函数，它可以接受类似于 arg1、arg2 等等的参数，
//然后使用这些参数对右侧的 expression 求值，并返回其结果。
//换句话说，上面这种写法，是下面这种更短的版本
let firstArrow2 = function (arg1,arg2,arg3) {
	return expression;
}
//下面是一个具体的例子
let sum = (a,b) => a + b;
console.log(sum(2, 6));
/*
	它是如下代码的简写版本
	let sum = function(a,b){
		return a + b;	
	};

*/
//如果只有一个参数，还可以省略掉参数意外的圆括号，使代码更短。
let double = n => n * 2;
console.log(double(6));

//当然，如果没有参数，那么参数部分就是空的
let sayHello = ()=> console.log("你好呀，没有参数的箭头函数");
sayHello();

//箭头函数可以像函数表达式一样使用。例如，动态创建一个函数：
let age = 18;
let welcome = (age >= 18) ?
()=>{console.log("您已经满了18岁")} : 
()=>{console.log("您尚未满18岁")};
//执行函数
welcome();

//写一个多行的箭头函数吧
let sum2 = (a,b) => {
	let result = a + b;
	return result;
};

console.log(`求和结果是 ${sum2(5,6)}`);

/*
	重写下方的函数:
	function ask(question, yes, no) {
		if(question)
		{
			yes();
		}
		else
		{
			no();
		}
}

	ask(
		"Do you agree?",
		function() { alert("You agreed."); },
		function() { alert("You canceled the execution."); }
	);
*/
let ask = (question)=>{
	if (question) {
			console.log("You agreed.");
		}
		else {
			console.log("You canceled the execution.");
		}
}
//执行
ask("");




/*
	总结：
		目前只是箭头函数的初体验。
		1. 单行、不带大括号的箭头函数，简单，但是不太利于阅读，建议还是要写上大括号和小括号

*/
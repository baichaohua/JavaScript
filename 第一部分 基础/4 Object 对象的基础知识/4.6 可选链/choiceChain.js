/**
	可选链 ?. 是一种访问嵌套对象的防错误方法。 即时中间的属性不存在，也不会出现错误。
*/

//下面这个访问不存在的属性，会报错
let user={};
//console.log(user.bai.hua);//这里会报错
//console.log(user && user.bai && user.bai.hua);//可以用 && 来依次判断，遇到 undefined 或者 null ，就会停掉，但是写起来太麻烦
//如果用可选链 ?. 前面的部分是 undefined 或者 null ，它会停止运算并返回 undefined
//好吧，下面这个好像不太对，在这里没有正常的输出,还是报错
//console.log(user?.bai?.hua);

/*
	?. 前的变量必须已通过 let/const/var user 进行声明。可选链仅适用于已声明的变量。
	可选链 ?. 不是一个运算符，而是一个特殊的语法结构。它还可以与函数和方括号一起使用。
	例如，将 ?.() 用于调用一个不存在的函数。
*/
//下面这段代码中，有些用户具有 admin 方法，而有些没有：
let user1 = {
	admin(){
		alert("I am admin");
	}
}

let user2 = {};
user1.admin?.();
user2.admin?.();

// 可选链 ?. 不能用在赋值语句的左侧，像下面这样是不合法的
user?.name="john";//这里会出错的


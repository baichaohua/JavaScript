/*
	本章节，我们回顾一下迄今为止学到的 JavaScript 特性，并需要注意一些细节部分。
*/

//1. 代码结构
//分号来结束语句，如下
console.log("第一句");console.log("第二句");
//每一句都加上分号，并且换行，是比较规范且舒适的写法。代码块以及有代码块的语法结构后不需要加分号。

//2. 严格模式
//为了启用现代 JavaScript 的所有特性，我们应该在脚本顶部最开始的位置写上 "use strict" 指令。
//该指令必须位于 JavaScript 脚本的顶部或函数体的开头。

//3. 变量 
/*
	let  新的用于声明变量的标准
	const 不能被改变的常量
	var 旧式的，闲杂不推荐使用这个
	
	有 8 种数据类型：
	number  可以使浮点类型，也可以是整型。
	bigint	用于任意长度的证书。
	string	字符串类型。
	boolean	布尔类型 true/false
	null	表示空或者不存在
	undefined	表示未分配或者未定义
	object和symbol	对于某些复杂数据结构和唯一标识符，比如字典啥的。
	
*/
//下面这个是 JavaScript 编程语言的设计错误
typeof null == "object";	
//函数被特殊对待
typeof function () {} == "function";


//4. 浏览器上的基本的交互
//prompt(question[,default])
//提出一个问题，并返回访问者输入的内容，如果他按下 取消 ，则返回 null 。
//confirm(question)
//提出一个问题，让用户在 “确定” 和 “取消”之间进行选择。 以 true 和 false 的形式返回 
//alert(message) 输出消息 

//上面几个函数都会产生  模态框，它们会暂停代码并阻止用户与页面的其他部分进行交互，知道用户做出回答为止。


//5. 


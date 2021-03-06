//在 JavaScript 中， 函数不是 “神奇的语言结构”，而是一种特殊的【值】;
//我们在前面的章节使用的语法成为 【函数声明】
function sayHi(){
	console.log("Hello");
}
sayHi();

//而另外一种创建函数的语法称之为 【函数表达式】。通常会写成如下这样:
let sayHi2 = function () {
	console.log('这是函数表达式的写法,就是将函数作为一个变量的值，类似于OC中的函数返回值');
}
sayHi2();

//其实上面2种写法，都是一样的：创建一个函数，并把它存进变量 sayHi 中
//注意，下面这个写法中 sayHi 后面没有（），所以，其实并没有运行 sayHi。
/*
在其他编程语言中，只要提到函数的名称都会导致函数的调用和执行，但 JavaScript 可不是这样！！！
在 JavaScript 中，函数是一个值，所以我们可以把它当成值对待。
而下面的代码显示了一段字符串值，及函数的源码。
的确，在某种意义上，函数是一个特殊值，我们可以像 sayHi() 这样调用它。 但，but，它依然是一个值，所以我们可以像
使用其他类型的值一样去使用它。 就可以理解为新增了一种数据类型，而这种数据类型，就是函数本身。
*/
console.log(sayHi);
//如下，我们可以复制函数到其他变量
//1. 创建
function copyFunc() {
	console.log("这是一个拷贝实例函数");
}
//2. 复制(copyFunc 后面不带小括号，意思就是拷贝源码，而不执行)，如果有括号，其实就是吧 copyFunc 的执行结果保存进 copyLet
let copyLet = copyFunc;
//3. 执行,直接在变量 copyLet 后面跟了个小括号，表示要执行
copyLet();
//4. 我们也可以在将原函数声明到一个变量里,注意，这最后面有个分号 ; ,因为这是一个语句，语句需要有结尾，单纯的函数不需要
let copyLet2=function () {
	console.log("这是另外一个拷贝实例函数");
};
//5. 然后对上面的这个赋值
let copyLet3 = copyLet2;


//回调函数
//我们多举几个例子，看看如何将函数作为值来传递以及如何使用函数表达式
function ask(question,yes,no) {
	if (question) {
		yes();
	}
	else {
		no();
	}
}
function sayOk() {
	console.log("You agreed.");
}
function sayNo() {
	console.log("You canceled the execution.");
}
//下面是使用方法: 函数 sayOK 和 sayNo 被作为参数传入到 ask
ask("Do you agree ?", sayOk, sayNo);
// ask 中的 sayOK 和 sayNo 可以被称之为 回调函数 或者 回调 。
//主要思想是：我们传递一个函数，并期望在稍后必要时，将其回调。在我们的例子中，sayOK 是回答正确时的回调，sayNo 是回答错误时的回调。
//上面2个函数和一个调用，可以简写成如下方式
ask("Do you agree ?", 
function () {
	console.log("1111");
}, 
function () {
	console.log("2222");
});

//这里直接在 ask() 调用内进行函数的生命。 而这2个函数没有名字，所以叫【匿名函数】。
//但是，这样的函数在 ask 外无法访问，因为他们没有名称。
/*
	字符串或数字等常规值代表 数据。
	函数可以被视为一个 行为。
	我们可以通过变量之间来传递他们，并在需要的时候运行。
*/

//函数表达式 VS 函数声明
//1. 首先是他们的语法不同，函数声明 和 OC 中的声明基本上一毛一样。函数表达式更像是直接将函数本身传给一个变量。下面是他们的写法
// 函数表达式(记得最后一个分号)
let expreFuncSum = function (a,b) {
	return a + b;
};

//函数声明
function funcSum(a,b) {
	return a + b;
}

//划重点，更细微的差别是，JavaScript 引擎会在【什么时候】创建函数？
/* 
	1. 函数表达式是在代码执行到达时被创建，并且仅在那一刻起可用 
	2. 而函数声明，哪怕它被创建之前，你都可以调用它。例如，一个全局函数声明对整个脚本来说都是可见的，无论它被写在这个脚本的哪个位置。
	 2.1 这是内部算法的缘故。当 JavaScript 准备运行脚本的时候，首先就会在脚本内寻找全局函数声明，并创建这些函数。我们可以将其视为初始化阶段
		 处理完所有函数声明之后，代码才会被执行。所以运行时能够使用这些函数
*/
//例如下面的代码会正常的工作 
useBeforeCreated("Hi White");
function useBeforeCreated(name){
	console.log(`声明前置测试 ${name}`);
}
//如果是一个函数表达式，则不可以这样，这样没什么效果，代码也不会被执行
//【严格模式下，当一个函数声明在一个代码块时，它在该代码块的任何位置都是可见的，但在代码块外不可见】


/*
	那么如何让一个函数在代码块，也可以被调用呢？
	正确的做法是使用函数表达式，将需要被代码块外面调用的函数赋值给代码块以外的变量，并具有正确的可见性。（其实就外面声明一个变量，里面赋值）
*/
let welcome;
if (1) {
	welcome = function () {
	console.log("你好呀")	;
	};
}
welcome();

//由于 JavaScript 中，一个函数可以被看成一个值，然后把这个值赋给变量。 例如 let hi = 123; 其中 hi 是变量，123 是值。 同理如下:
let age = 18;
//利用一个三目运算符，将函数本身赋给 welcomeYou 这个变量
let welcomeYou = (age >= 18) ? 
function () {
	console.log("您已满18岁！");
} : 
function () {
	console.log("您尚未满18岁！");
};
//执行
welcomeYou();



/*
	总结:
		1. 函数是值，这点和其他语言可能不太一样。
		2. 如果函数在主代码流中被声明为单独的语句，则成为“函数声明”。
		3. 如果函数是作为一个表达式的值被创建的，那么我们就称之为 “函数表达式”。
		4. 在代码块执行之前，内部算法会优先处理函数声明。所以函数声明在其被声明的代码块内的任何位置都是可见的。
		5. 函数表达式中的函数，只有在运行到的时候，才会被创建。
		
	一般来说，我们需要声明一个函数的时候，应该使用函数声明，而不是函数表达式，因为函数在被声明之前也是可以见的。这使得我们在代码组织方面更具灵活性，
	通常也会使得代码可读性更高。
	所以，仅当函数声明不适合应对的任务时，才应当使用函数表达式。

*/
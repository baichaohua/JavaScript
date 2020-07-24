/*
	对象的基础知识

	正如我们在 数据类型 一章学到的，JavaScript 中有 8 种数据类型。 其中 7 种原始类型，因为他们的值只包含一种东西（字符串，数字或者其他）。
	
	相反，对象是用来存储键值对，或者更复杂的实体。在 JavaScript 中，对象几乎渗透到了这门语言的方方面面。所以，在我们深入理解这门语言之前，必须先理解对象。

*/

function bchConsoleLog(message) {
	console.log("\n------------------------\n");
	console.log(message);
}


//我们可以像下面一样，用带有可选 属性列表 的花括号{}来创建对象。一个属性就是一个键值对 {"key":value} ,其中 key 必须是字符串，而 value 可以是任何数据类型。
let obj1 = {"shuai":123};
bchConsoleLog(obj1);
/* 
	有 2 种方法来创建对象，一种是使用构造函数，一种是直接书写。
	其实就类似于 OC 中的 NSString alloc / new , 或者 str = @"";
*/
let obj2 = new Object();
let obj22 = {};

//随便写一个多数据类型的对象
let differentObj = {
	"string": "This is a string",
	"number": 123,
	"float": 123.234,
	"boolean" : true,
	"hua": null,
	//key 也可以是多字符串，但必须要加上引号,而且取的时候，不能用 . 而是应该用 differentObj[hua ge hen shuai]
	"hua ge hen shuai": true,
};
bchConsoleLog( typeof(differentObj.float)  );
//如果是未定义的，则是 undefined
bchConsoleLog(differentObj.bai);
//增加新的键值对
differentObj.isNewKeyValue=true;
bchConsoleLog(differentObj);
//移除键值对
delete differentObj.isNewKeyValue;
bchConsoleLog(differentObj);

//尽量用 [] 去访问属性，而不是  .  

//对象的 key 也可以是可以变得变量如下,但是需要用 方括号 [] 将 key 变量括起来

let name = "xiaobai";
let personObj = {
	[name]: 5,	
};
bchConsoleLog(personObj["xiaobai"]);

//一个返回对象的 Function
function getPersonInfo( userName ,age ,sex ,height) {
	return{
		"userName" : userName ,
		"age" : age ,
		"sex" : sex ,
		"height" : height,
	};
}
let personInfoObj = getPersonInfo("baichaohua", 18, "boy", 180);
bchConsoleLog(personInfoObj);

//其实还可以写的更短，更骚一些
function getPersonInfo2(userName ,age ,sex ,height) {
	//直接使用属性名，效果与上面是一样的
	return{
		userName,
		age,
		sex,
		height,
	};
}
let personInfoObj2 = getPersonInfo("baichaohua2", 188, "boy", 1800);
bchConsoleLog(personInfoObj2);


/*
	对象的一个显著的特点就是其所有的属性都是可以访问的。如果某个属性不存在，也不会报错，访问这个不存在的属性，就会返回 undefined 。
	可以用 === 来判断是否是 undefined 
	
	其实还有一个操作符 in 来判断属性是否存在，语法为  "key" in  object ,例子如下:
*/

	let user = {name: "Hua",age:30};
	bchConsoleLog("name" in user);	//有 name 这个 key
	bchConsoleLog("Hua" in user);		//没有 Hua 这个 key
	
/*
	通常情况下，判断一个属性是否存在，使用 === 就够了，但是在一种特殊情况下，这种方式会失败，而 in 却可以正常工作。
	那就是属性本身是存在的，但是存储的值为 undefined 
*/

let specialObj ={
	"haha":undefined,
};
	
	bchConsoleLog(specialObj.haha === undefined);
	bchConsoleLog("haha" in specialObj);
//通常情况下，我们不会给对象赋值 undefined ，我们经常会用 null 来表示未知或者 空 的值。

/*
	for in 可以用来遍历结构体
	那么对象有顺序吗？  The answer is "有特别的顺序": 整数属性会被进行排序，其他属性则按照创建的顺序显示。
	例子如下:
*/

//按照数字属性，49 是数字属性，而 48+ 不是，1.234 也不是
let codes ={
	"49":"Germany",	
	"41":"Switzerland",
	"44":"Great Britain",
	"1" : "USA",
};

for (let code in codes)
{
	bchConsoleLog(`Current code is ${code}`);
}

//这点要注意
let one = "hello";
let two =  one;
//那么实际上 one 和 two ，是 2 个不同的变量，分别存储了一个  hello ，想当与 OC 里的深拷贝。

//而对象，则是引用如下 three 只是它对象的引用地址而已。
let three = {
	one,
	two,
};
bchConsoleLog(three);
//当对象被复制的时候，实际上只是复制了它的地址，对象本身并没有被复制。

/*
	比较引用
	1. == 和 === 对于对线过来说没有什么区别。
	2. 两个对象，只有在他们其实是一个对象的时候才会相等。
	3. 如果2个变量指向同一个对象，那么它们相等。
	4. 即便2个对象都是空对象，它们也不相等
	5. 常量对象，一个对象被 const 修饰，但它依然可以被修改。
	
*/

//被 const 修改的对象，可以被修改
const newUser ={
	name:"huage",
};
newUser.name = "super huage ";
bchConsoleLog(newUser);
//这是因为，const 修饰的仅仅是 newUser 本身的值，也就是对象的地址，对象的地址一直没有变，只是里面的内容发生了变化。
//下面这句话就会报错，因为不能修改 newUser
/*
newUser = {
	age:19,
};
*/



/*
	复制和合并，Object.assign
	之前说过了，如果直接声明一个变量到原来的对象变量上。 其实2个变量指向的都是同一份对象。
	那么我们想拷贝、克隆这个对象，应该怎么办呢？
	其实 JavaScript 中没有这样的内置函数，只能遍历旧的对象，一个个往新对象里加。如下：
*/
let orginObj = {
	"name" : "originHua",
	"age" : 18,
	"sex" : "boy",
	"love": "girl",
}

bchConsoleLog(orginObj);

let newObj = {};

//复制所有的属性值
for (let key in orginObj ){
	newObj[key] = orginObj[key];
}

bchConsoleLog(newObj);
//OK 现在复制完成，是独立的了。

//当然，我们也可以使用 Object.assign 来实现，语法如下:
let preObj  ={"name": "huage"};
let orginObj1 = {"age":18};
let orginObj2 = {"name":"bai","age":19,"sex":"boy","can fly":true};
//现在我们将 orginObj1 和 orginObj2 赋给 preObj ,已有的属性会被覆盖掉

Object.assign(preObj,orginObj1,orginObj2);
bchConsoleLog(preObj);

//这个方法也可以代替循环，直接克隆
let objA = {"name":"super","age":20};
let objB = {};
Object.assign(objB, objA);
bchConsoleLog(objB);

//【当一个对象里有另外一个或者多个对象，无论哪种方式的拷贝，都只会拷贝另外一个或者多个对象的引用】


let schedule = {};

bchConsoleLog( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

bchConsoleLog( isEmpty(schedule) ); // false


function isEmpty(obj) {
 	for (let key in obj)
	{
	 return true;
	}
	return false;
	
}


//... 也可以用来拷贝对象，或者覆盖元素
let bai={
	"name":"bai",
	"age":18,
	"sex":"boy",
	"country":"China",
	};

console.log(bai);

let hua={
	...bai,
	"age":29,
	"name":"hua",
};
console.log(hua);
console.log(hua===bai);


/*
	总结：
		1. 对象更像是 OC 中的字典
		2. 对象的 key 是字符串，而 value 可以是任何数据类型
		3. 我们可以通过 obj.key  或者 obj[key] 来获取 key 对应的 value 
		4. 其他操作，删除 delete obj.key ,检查是否存在某个键值对  key in obj ,遍历检查对象  for (let key in obj)
		5. 对象是通过引用被赋值或者复制的。也就是说变量存储的不是对象本身，而是对象的引用地址。我们可以通过
		   Object.assign 或者 _.cloneDeep(obj) 来对一个对象进行深拷贝。
		6. JavaScript 中还有其他类型的对象：
			Array 用于存储有序数据集合。
			Date 用于存储日期时间。
			Error 用于存储错误信息
		   其他类型的对象，只是在基础对象上做了一些扩展。
		7.【当一个对象里有另外一个或者多个对象，无论哪种方式的拷贝，都只会拷贝另外一个或者多个对象的引用】
		
*/


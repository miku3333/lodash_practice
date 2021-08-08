/*
 * @Author: fengshaomu
 * @LastEditor: fengshaomu
 * @Date: 2021-08-04 10:45:32
 * @LastEditTime: 2021-08-08 16:56:30
 * @FilePath: /test/index.js
 * @Descripttion: None
 * @EditReason: None
 * @Remarks: None
 */


// lodash引用
// _.templateSettings.imports._

// _.VERSION#
// (string): 语义化的版本号。

// _.templateSettings#
// (Object): 默认情况下，lodash使用的模板分隔符就像那他们嵌入到Ruby（ERB）一样。更改以下模板设置使用替代分隔符。

// _.templateSettings.escape#
// (RegExp): 用于检测data属性值是否HTML转义。

// _.templateSettings.evaluate#
// (RegExp): 用于检测代码来进行评估。

// _.templateSettings.imports#
// (Object): 用于导入变量到编译模板。

// _.templateSettings.interpolate#
// (RegExp): 用于检测data属性值是否注入。

// _.templateSettings.variable#
// (string): 用于引用该数据对象中的模板文本。


// // 按数值分割数组
// console.log(_.chunk(['a', 'b', 'c', 'd'], 2))

// // 取出所有真值
// console.log(_.compact([0, 1, false, 2, '', 3]));

// // 连接所有值到一个数组
// console.log(_.concat([1], 2, [3], [[4]]));

// // 二数组 - 一数组
// console.log(_.difference([3, 2, 1], [4, 2]));

// // 传一个函数对两边就行处理
// console.log(_.differenceBy(['a', 'a', 'ba', 'bab', 'bba', 'bbba'], ['a', 'ca'], n => n.indexOf('a')));

// // 也可以传一个对象的属性名
// console.log(_.differenceBy([{ a: 1, b: 2, c: 0 }, { a: 1, b: 0, c: 3 }], [{ a: 1, b: 2, c: 3 }], 'c'));

// // 传一个定制器
// console.log(_.differenceWith([{ a: 1, b: 2, c: 4 }, { a: 1, b: 2, c: -1 }],
// [{ a: 1, b: 2, c: 3 }], (oa, ob) => oa.c > 0 && ob.a > 0));

// // 去除前面n个元素, 默认是1
// console.log(_.drop([1, 2, 3, 4, 5, 6], 4));
// // 字面意思
// console.log(_.dropRight([1, 2, 3, 4, 5, 6], 4));

// // 第一个返回假,以及他之后的元素
let users = [
    { 'user': 'pebbles', 'active': false },
    { 'user': 'barney', 'active': false },
    { 'user': 'pebbles2', 'active': false },
    { 'user': 'pebbles', 'active': true },
    { 'user': 'pebbles4', 'active': false },
    { 'user': 'fred', 'active': true },
];
// console.log(_.dropWhile(users, function (o) { return !o.active; }));
// // 字面意思
// console.log(_.dropRightWhile(users, function (o) { return !o.active; }));

// // _.fill(array, value, [start=0], [end=array.length])
// // 从start到end,用value填充array,array会被替换
// const array0 = [1, 2, 3];
// _.fill(array0, 'a');
// console.log(array0);

// // _.findIndex(array, [predicate=_.identity], [fromIndex=0])
// // 从fromIndex开始找array中通过第二个参数判断为真的元素,找不到返回-1
// console.log(_.findIndex(users, o => _.startsWith(o.user, 'pebbles'), 3));
// // 字面意思
// console.log(_.findLastIndex(users, function (o) { return o.user == 'barney'; }));

// // 获取数组第一个元素
// console.log(_.head([1, 2, 3, 4, 5, 6]));

// // 减少一层嵌套
// console.log(_.flatten([[-1, [0]], [1, 2], 3]));

// // 递归为一维数组
// console.log(_.flattenDeep([[-1, [[['-0']], 0, ['+0']]], [1, 2], 3]));

// // 减少指定层级的嵌套
// console.log(_.flattenDepth([[-1, [[['-0']], 0, ['+0']]], [1, 2], 3]), 2);

// // 键值对数组形成对象
// console.log(_.fromPairs([['fred', 30], ['barney', 40]]));

// // 返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配
// // _.indexOf(array, value, [fromIndex=0])
// console.log(_.indexOf(array0, 1, [fromIndex = 0]));

// // 获取除了最后一个元素的其他元素
// console.log(_.initial(array0));

// // 所有传入的数组交集
// console.log(_.intersection([1, 2, 4], [1, 2], [2]));
// // 先把传入的值处理,结果输出从第一个数组选
// console.log(_.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor));
// console.log(_.intersectionWith([2.2, 1.2], [4.3, 2.4], (a, b) => a > 1 && b > 1));

// // 以指定符号组合
// console.log(_.join(['a', 'b', 'c'], '~'));

// // 最后一个
// console.log(_.last([1, 2, 3]));

// // 与indexOf类似,右向左找
// console.log(_.lastIndexOf([1, 2, 1, 2], 2, 2));

// // 获取第n个元素,负值反向找
// console.log(_.nth([1, 2, 3, 4], -2));

// // 把数组里给定的参数都删除
// console.log(_.pull([1, 1, 1, 2, 1, 3, 2, 1, 12, 2, 2, 23, 3, 3], 2, 3));
// // 接收数组
// console.log(_.pullAll([1, 1, 1, 2, 1, 3, 2, 1, 12, 2, 2, 23, 3, 3], [2, 3]));
// // 迭代器版本
// console.log(_.pullAllBy([{ 'x': 1, y: '2' }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }], [{ 'x': 2 }, { 'x': 3 }], 'x'));
// // 比较器版本
// console.log(_.pullAllWith([{ 'x': 1, y: '2' }, { 'x': 2, y: '0' }, { 'x': 3 }, { 'x': 1 }], [{ 'x': 2 }, { 'x': 3 }], _.isEqual));
// // 指定位置
// let array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(_.pullAt(array1, 1, 3));
// console.log(array1);

// // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
// // 移除数组中函数返回真的元素,函数会传入3个参数： (value, index, array)
// // console.log(_.remove(array1, (value, index, array) => { console.log('index:', index); console.log(array); return value % 2; }));

// // 倒叙
// console.log(_.reverse([1, 2, 3]));

// // 裁剪数组array，从 start 位置开始到end结束，但不包括 end 本身的位置。
// // _.slice(array, [start=0], [end=array.length])
// console.log(_.slice([1, 2, 3, 4], 1, 3));

// // 决定 value值 应该插入到数组中 尽可能小的索引位置，以保证array的排序
// console.log(_.sortedIndex([30, 40, 50], 40));
// // 迭代器版本
// console.log(_.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, o => o.x));
// // 类似_.indexOf,在已经排序的数组array上执行二进制检索。
// console.log(_.sortedIndexOf([4, 3, 5, 5, 4, 5, 6, 1, 4, 3, 7, 4], 5));
// // 反向版本
// console.log(_.sortedLastIndex([30, 40, 50], 40));
// console.log(_.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, o => o.x));
// console.log(_.sortedLastIndexOf([4, 3, 5, 5, 4, 5, 6, 1, 4, 3, 7, 4], 5));

// // 与_.uniq类似
// // 有问题,可能和二进制比较有关,少用
// console.log(_.sortedUniq([1, 2, 3, 3, 3, 4, 3]));
// console.log(_.uniq([1, 2, 3, 3, 3, 4, 3]));

// // 类似_.uniqBy
// // 有问题,可能和二进制比较有关,少用
// console.log(_.sortedUniqBy([1.1, 1.2, 2.3, 2.4, 3.4, 3.2, 2.1], Math.floor));

// // 除了第一个元素其他的元素
// console.log(_.tail([1, 2, 3]));

// // 开头提取n(=1)个元素
// console.log(_.take([1, 2, 3], 2));
// // 字面意思
// console.log(_.takeRight([1, 2, 3], 2));
// // 直到传入的参数返回假
// console.log(_.takeWhile([1, 2, 3, 3, 4], a => a < 4));
// console.log(_.takeRightWhile([1, 2, 3, 3, 4], a => a > 1));

// // 组合去重
// console.log(_.union([2], [1, 2], [1, 2, 3, 4]));
// // 迭代器版本
// console.log(_.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'));
// // 定制器版本
// console.log(_.unionWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }], _.isEqual));

// // 去重
// console.log(_.uniq([2, 1, 2]));
// // 迭代器版本
// console.log(_.uniqBy([2.1, 1.2, 2.3], Math.floor));
// console.log(_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x'));
// // 比较器版本
// console.log(_.uniqWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }], _.isEqual));

// //解压成属性
// console.log(_.unzip(_.zip(['fred', 'barney'], [30, 40], [true, false])));
// // 解压时执行函数
// console.log(_.unzipWith(_.zip([1, 2], [10, 20], [100, 200]), _.add));

// // 创建一个剔除所有给定值的新数组
// // 不像_.pull, 这个方法会返回一个新数组
// console.log(_.without([2, 1, 2, 3], 1, 2));

// // 创建一个给定数组唯一值的数组
// console.log(_.xor([2, 1], [2, 3]));
// // 迭代器版
// console.log(_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor));
// // 比较器版
// console.log(_.xorWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }], _.isEqual));

// // 压缩成数组
// // 取每个数组的第一个元素
// console.log(_.zip(['fred', 'barney'], [30, 40], [true, false]));
// // 压缩时执行函数
// console.log(_.zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c));

// // 压缩成对象
// console.log(_.zipObject(['a', 'b'], [1, 2]));
// // 支持属性路径的版本
// console.log(_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]));



// // 统计集合中数量
// console.log(_.countBy([6.1, 4.2, 6.3], Math.floor));

// // 遍历
// _([1, 2]).forEach(function (value) {
//     console.log(value);
// });
// _.forEach({ 'a': 1, 'b': 2 }, function (value, key) {
//     console.log(key);
// });
// // 字面意思
// _.forEachRight([1, 2], function (value) {
//     console.log(value);
// });

// // 有一个返回false则终止并返回false
// console.log(_.every([true, 1, null, 'yes'], Boolean));

// // filter
// console.log(_.filter(users, o => !o.active));

// // _.find(collection, [predicate=_.identity], [fromIndex=0])
// // 第一个判断为真的元素
// console.log(_.find(users, o => o.active));
// // 字面意思
// console.log(_.findLast(users, o => o.active));

// // 同阶数组
// console.log(_.flatMap([1, 2], n => [n, [n, n]]));
// // 深度扁平化
// console.log(_.flatMapDeep([1, 2], n => [n, [n, n], [[n, n, n]]]));
// // 设定深度
// console.log(_.flatMapDepth([1, 2], n => [n, [n, n], [[n, n, n]]], 2));

// // 按提供的函数的返回值分类
// console.log(_.groupBy([6.1, 4.2, 6.3], Math.floor));

// // 值是否包含在集合中,可设定起始位置
// console.log(_.includes([1, 2, 3], 1, 2));

// // 对每个数据调用提供的方法
// console.log(_.invokeMap(['321', '465'], 'split', ''));

// // 根据提供的方法生成一个键作为原对象的键
// console.log(_.keyBy(users, u => u.user));

// // map
// console.log(_.map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n => n * n));

// // 排序, 第一个数组提供排序先后依据, 第二个提供升降序
// console.log(_.orderBy(users, ['user', 'active'], ['asc', 'desc']));

// // 根据断言的真假创建两个数组
// console.log(_.partition(users, u => u.active));

// // reduce
// // 没有提供初始值则第一个元素作为初始值
// console.log(_.reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (a, b) => a + b, 0));
// // 从右边开始
// console.log(_.reduceRight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (a, b) => a + b, 0));

// // filter类似,断言不为真
// console.log(_.reject(users, u => u.active));

// // 随机获得一个元素
// console.log(_.sample([1, 2, 4, 3, 2, 1, 1]));

// // 获得一个size大小的随机数组
// console.log(_.sampleSize([1, 2, 4, 3, 2, 1, 1], 4));

// // 打乱值
// console.log(_.shuffle([1, 2, 3, 4]));

// // 大小
// console.log(_.size([1, 2, 3, 4, 5, 6]));

// // 通过断言判断是否至少有一个为真
// console.log(_.some(users, u => u.active));

// // 以迭代器返回就行升序排序
// console.log(_.sortBy(users, u => u.user));

// // 控制函数调用次数, 第n次及之后调用将返回n-1次调用的值
// let z = 0;
// logc = _.before(3, () => z++);
// console.log(logc());
// console.log(logc());
// console.log(logc());

// // 控制函数调用次数, 第n次及之后的次数将可以调用
// let t = 0;
// logd = _.after(3, () => t++);
// console.log(logd());
// console.log(logd());
// console.log(logd());

// // 最多接收n个参数
// _.ary(console.log, 2)(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// // bind
// function sayH (a, b, c) {
//     console.log(a + this.name + b + c);
// }
// _.bind(sayH, { 'name': 'dnsalk' }, '@@@')('%%%', '967');

// // 绑定到对象的key上
// let testObj = {
//     name: 'tom',
//     sayH (a, b, c, d) {
//         console.log(a + this.name + b + c + d);
//     }
// }
// let c = _.bindKey(testObj, 'sayH', '##2', '@@');
// c(11, 22)
// testObj.sayH = function (a, b, c, d) {
//     console.log(a + a + b + b + this.name + b + c + d);
// }
// c(11, 22);

// // 柯里化 返回一个函数或者结果
// let curried = _.curry((a, b, c) => [a, b, c]);
// console.log(curried(1));
// console.log(curried(1)(2)(3));
// // 右侧开始  
// let curriedR = _.curryRight((a, b, c) => [a, b, c]);
// console.log(curried(1)(2)(3));

// // 延迟调用
// // _.defer(console.log, '@@@', '###', '$$$');
// // 延迟n秒后调用
// // _.delay(console.log, 2000, '@@@', '###', '$$$', '%%%');

// // 翻转传入参数
// _.flip(console.log)('@@@', '###', '$$$$');

// // 断言取反
// console.log(_.filter([1, 2, 3, 4, 5, 6], _.negate(n => n % 2 == 0)));

// // 只能执行一次
// let func1 = _.once(() => console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'));
// func1();
// func1();

// // 参数处理后再传入
// _.overArgs(console.log, [n => n * 2, n => n * n])(2, 5);

// // 传入预设的参数
// _.partial(console.log, '@@', '##')('!!');
// _.partial(console.log, '@@', _, '##')('!!');
// // 附加到后方
// _.partialRight(console.log, '@@', '##')('!!');


// // 调整参数位置
// _.rearg(console.log, [2, 0, 1])('a', 'b', 'c');

// // _.rest(func, [start=func.length-1])
// // start之后收集为数组
// _.rest((name, age, characters) => console.log(`${name} is ${age} andd ${_.join(characters, ' and ')}`), 2)('tom', 18, 'a', 'b', 'c');


// // 参数传入时作为数组传入
// _.spread((a, b, c) => console.log(`${a} is ${b} and ${c}`), 1)('a', ['b', 'c']);

// // _.throttle(func, [wait=0], [options=])
// // 创建节流函数

// // 最多接收一个参数
// _.unary(console.log)(1, 2, 3);

// // 包装参数
// // 预先提供的可以是任何
// _.wrap('const ', (a, b, c) => console.log(a + a + b + c))('a', 'b');
// _.wrap(_.toUpper, (a, b, c) => console.log(a(b) + c))('a', 'b');

// // 不是数组则强制转为数组
// console.log(_.castArray({ a: 'a' }));

// // 浅拷贝
// console.log(_.clone(users)[0] === users[0]);
// // 深拷贝
// console.log(_.cloneDeep(users)[0] === users[0]);
// // 定制拷贝
// // _.cloneWith(value, [customizer])
// // 定制深拷贝
// // _.cloneDeepWith(value, [customizer])

// // 检查对象的值
// console.log(_.conformsTo({ a: '1', b: '2', c: '3' }, { a: a => a, c: c => c > '2' }));

// // 比较相等
// console.log(_.eq('1', '1'));

// // >
// console.log(_.gt('3', '1'));

// // >=
// console.log(_.gte('3', '3'));

// // _.isArguments(value) 检查是否是Arguments
// // _.isArray(value) 检查是否是Array
// // _.isArrayBuffer(value) 检查是否是ArrayBuffer
// // _.isArrayLike(value) 检查是否是ArrayLike
// // _.isArrayLikeObject(value) 检查是否是ArrayLike, 还检查是否是Object
// // _.isBoolean(value) 检查是否是Boolean
// // _.isBuffer(value) 检查是否是Buffer
// // _.isDate(value) 检查是否是Date对象
// // _.isElement(value) 检查是否是可能是 DOM 元素
// // _.isEmpty(value) 检查是否是空对象，集合，映射或者set
// // _.isError(value) 检查是否是Error
// // _.isFinite(value) 检查是否是原始有限数值
// // _.isFunction(value) 检查是否是Function
// // _.isInteger(value) 检查是否是整数
// // _.isLength(value) 检查是否是有效的类数组长度
// // _.isMap(value) 检查是否是Map
// // _.isNaN(value) 检查是否是NaN
// // _.isNative(value) 检查是否是原生函数
// // _.isNil(value) 检查是否是null 或 undefined
// // _.isNull(value) 检查是否是null
// // _.isNumber(value) 检查是否是Number或数字
// // _.isObject(value) 检查是否是Object
// // _.isObjectLike(value) 检查是否是ObjectLike
// // _.isPlainObject(value) 检查是否是普通对象
// // _.isRegExp(value) 检查是否是RegExp
// // _.isSafeInteger(value) 检查是否是安全整数
// // _.isSet(value) 检查是否是Set
// // _.isString(value) 检查是否是String
// // _.isSymbol(value) 检查是否是Symbol
// // _.isTypedArray(value) 检查是否是TypedArray
// // _.isUndefined(value) 检查是否是undefined
// // _.isWeakMap(value) 检查是否是WeakMap
// // _.isWeakMap(value) 检查是否是WeakSet

// // 深度比较是否相等
// console.log(_.isEqual([], []));
// // 比较器版本
// console.log(_.isEqualWith(1.3, 1.4, _.floor));


// // 是否有完全相等的属性值
// console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
// console.log(_.isMatch({ a: 'a', b: 'b', c: 'c' }, { a: 'a', b: 'b' }));
// // 比较器版本
// console.log(_.isMatchWith({ a: 'a', b: 'b', c: 'c' }, { a: 'a', b: 'b', c: 'd' }, (o1, o2) => _.isString(o1) && _.isString(o2)));

// // <
// console.log(_.lt(1, 3));
// // <=
// console.log(_.lte(1, 1));

// // 将value转化为数组
// console.log(_.toArray({ a: 'a', b: 'c' }));

// // 转换为有限数字
// console.log(_.toFinite(Infinity));

// // 转化为整数
// console.log(_.toInteger('13.3'));

// // 转化为数组长度
// console.log(_.toLength(Infinity));

// // 转化为数字
// console.log(_.toNumber(13.3));

// // 转化为普通对象
// // _.toPlainObject(value)

// // 转化为安全整数
// console.log(_.toSafeInteger(Infinity));

// // 转化为字符串
// console.log(_.toString({ a: 1, b: 'c' }));

// // +
// console.log(_.add(1, 3));

// // 向上取整
// console.log(_.ceil(23.1));

// // /
// console.log(_.divide(2, 3));

// // 向下取整
// console.log(_.floor(3.1));

// // 计算Array中最大值
// console.log(_.max([1, 3, 4]));
// // 迭代器版本
// console.log(_.maxBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 0 }], o => o.x));

// // 平均值
// console.log(_.mean([1, 3, 4]));
// // 迭代器版本
// console.log(_.meanBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 0 }], o => o.x));

// // 计算Array中最小值
// console.log(_.min([1, 3, 4]));
// // 迭代器版本
// console.log(_.minBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 0 }], o => o.x));

// // *
// console.log(_.multiply(2, 4));

// // 四舍五入
// console.log(_.round(3.5));

// // -
// console.log(_.subtract(4, 2));

// // 求和
// console.log(_.sum([1, 3, 4]));
// // 迭代器版本
// console.log(_.sumBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 0 }], o => o.x));



///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////



// // 返回被限制的值
// // .clamp(number, [lower], upper)
// console.log(_.clamp(-30, -5, 5));
// console.log(_.clamp(3, -5, 5));
// console.log(_.clamp(30, -5, 5));

// // 是否在范围内
// // _.inRange(number, [start=0], end)
// console.log(_.inRange(3, -5, 5));

// // 随机数
// // _.random([lower=0], [upper=1], [floating])
// // floating = true 返回浮点数
// // 包含上下界
// console.log(_.random(0, 10));


// function Foo () {
//     this.a = 1;
// }

// function Bar () {
//     this.c = 3;
// }

// Foo.prototype.b = 2;
// Bar.prototype.d = 4;
// // 把对象组合到另一个对象上
// console.log(_.assign({}, new Foo, new Bar));
// // 会遍历并继承来源对象的属性
// console.log(_.assignIn({}, new Foo, new Bar));
// // 定制器版本
// // _.assignInWith(object, sources, [customizer])
// // _.assignWith(object, sources, [customizer])

// // 创建一个数组，值来自 object 的paths路径相应的值
// console.log(_.at({ 'a': [{ 'b': { 'c': 3 } }, 4] }, ['a[0].b.c', 'a[1]']));

// // 创建一个继承 prototype 的对象。
// // _.create(prototype, [properties])

// // 分配第二个及以后的对象的属性(第一个对象该属性为undefined)到第一个上,设置了值后续就不再设置
// console.log(_.defaults({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } }));
// // 深度版本
// console.log(_.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } }));

const uuss = {
    tom: { name: 'tom', active: false },
    jacky: { name: 'jacky', active: false },
    marry: { name: 'marry', active: true }
}

// // 根据值查找键
// console.log(_.findKey(uuss, o => o.active));
// // 后面查找
// // _.findLastKey(object, [predicate = _.identity])

// // 对象上遍历, 无法保证遍历顺序
// _.forIn(uuss, (a, b) => console.log(a, b));
// // 右侧遍历
// // _.forInRight(object, [iteratee = _.identity])
// // 不遍历继承属性的版本
// // _.forOwn(object, [iteratee=_.identity])
// // 右侧
// // _.forOwnRight(object, [iteratee=_.identity])

// // 获得函数自身的function名称的数组
// console.log(_.functions({ a: 1, b () { }, c () { } }));
// // 包括继承的function名
// // _.functionsIn(object)

// // 按路径获得属性值
// console.log(_.get({ 'a': [{ 'b': { 'c': 3 } }] }, 'a[0].b.c'));

// // 检测对象书否有属性
// console.log(_.has({ 'a': [{ 'b': { 'c': 3 } }] }, 'a[0].b.c'));
// // 继承版本
// // _.hasIn(object, path)

// // 键值互换
// console.log(_.invert({ a: 1, b: 2, c: 1 }));
// // 收集相同的值形成数组
// console.log(_.invertBy({ a: 1, b: 2, c: 1 }, o => 'group' + o));

// // 调用对象上的方法
// console.log(_.invoke({ 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] }, 'a[0].b.c.slice', 1, 3));

// // 属性名数组
// console.log(_.keys(uuss));
// // 继承版本
// // _.keysIn(object)

// // 处理键
// console.log(_.mapKeys({ 'a': 1, 'b': 2 }, (value, key) => key + value));
// // 处理值
// console.log(_.mapValues({ 'a': 1, 'b': 2 }, (value, key) => key + value));

// // 类似assign, 但会改变对象
// // _.merge(object, [sources])
// // 定制器版本
// // _.mergeWith(object, sources, customizer)

// // 创建一个选定属性的对象
// console.log(_.pick({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd']));
// // 判断器
// // _.pickBy(object, [predicate = _.identity])

// // 类似_.get, 但匹配到函数则返回执行的结果
// // _.result(object, path, [defaultValue])

// // 设置对应属性的值
// console.log(_.set({ 'a': [{ 'b': { 'c': 3 } }] }, 'a[0].b.c', 4));
// // 定制器版本
// // _.setWith(object, path, value, [customizer])

// // 键值对数组
// console.log(_.toPairs(uuss));
// // 继承版本
// // _.toPairsIn(object)

// // _.transform(object, [iteratee=_.identity], [accumulator])
// // reduce的替代方法

// // 移除属性
// _.unset(uuss, 'tom')
// console.log(uuss);

// // 将方法传入updater来更新指定位置的值
// // _.update(object, path, updater)
// // 定制器版本
// // _.updateWith(object, path, updater, [customizer])

// // 返回值的数组
// console.log(_.values(uuss));
// // 继承版本
// // _.valuesIn(object)

// // 链式调用
// console.log(_.chain(uuss).toArray().sortBy('name').map(o => o.name + ' is ' + o.active).head().value());

// // 进入 方法链序列以便修改中间结果
// console.log(_([1, 2, 3]).tap(array => array.pop()).reverse().value());

// // _.thru(value, interceptor)
// // 类似_.tap， 除了它返回 interceptor 的返回结果。

// // _.prototype[Symbol.iterator]
// // 启用包装对象为 iterable。

// // _.prototype.at([paths])
// // 这个方法是_.at 的包装版本 。

// // _.prototype.chain()
// // 创建一个lodash包装实例，启用显式链模式。

// // _.prototype.commit()
// // 执行链式队列并返回结果。

// // _.prototype.next()
// // 获得包装对象的下一个值

// // _.prototype.plant(value)
// // 创建一个链式队列的拷贝，传入的 value 作为链式队列的值。

// // .prototype.reverse()
// // 这个方法是_.reverse 的包装版本 。

// // _.prototype.value()
// // 执行链式队列并提取解链后的值。

// // 驼峰
// console.log(_.camelCase('foo Bar'));

// // 首字母大写
// console.log(_.capitalize('foo Bar'));

// // _.deburr([string = ''])
// // 转换字符串string中拉丁语 - 1补充字母 和拉丁语扩展字母 - A 为基本的拉丁字母，并且去除组合变音标记。

// // 以指定的字符串结尾
// console.log(_.endsWith('abc', 'b', 2));

// // 转义string中的 "&", "<", ">", '"', "'", 和 "`" 字符为HTML实体字符
// console.log(_.escape('fred, barney, & pebbles'));

// // 转义 RegExp 字符串中特殊的字符 "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", ", ", 和 "|" in 
// console.log(_.escapeRegExp('[lodash](https://lodash.com/)'));

// // kebab case
// console.log(_.kebabCase('foo Bar'));

// // 转换字符串string以空格分开单词，并转换为小写。
// console.log(_.lowerCase('fooBar1'));

// // 首字母小写
// console.log(_.lowerFirst('foo Bar'));

// // 填充到指定长度
// console.log(_.pad('abc', 8, '_-'));
// // 左右填充
// // _.padEnd([string=''], [length=0], [chars=' '])
// // _.padStart([string=''], [length=0], [chars=' '])

// // 转换为整数, 第二个参数为进制
// console.log(_.parseInt('101', 2));

// // 重复给定的字符串n次
// console.log(_.repeat('*', 3));

// // 替换
// console.log(_.replace('Hi Fred', 'Fred', 'Barney'));

// // snake case
// console.log(_.snakeCase('foo Bar'));

// // 拆分
// console.log(_.split('a-b-c-d', '-', 2));

// // start case
// console.log(_.startCase('foo Bar'));

// // 以***开头
// // _.startsWith([string=''], [target], [position=0])

// // _.template([string = ''], [options =])
// // 创建一个预编译模板方法，可以插入数据到模板中 "interpolate" 分隔符相应的位置。

// // 全部小写
// console.log(_.toLower('foo Bar'));

// // 全部大写
// console.log(_.toUpper('foo Bar'));

// // 移除两边指定字符串
// console.log(_.trim('@-  abc1@  -', '-@ '));
// // 开头结尾移除
// // _.trimEnd([string=''], [chars=whitespace])
// // _.trimStart([string=''], [chars=whitespace])

// // 截断字符串
// // _.truncate([string = ''], [options =])
// // [string = ''](string): 要截断的字符串。
// // [options =](Object): 选项对象。
// // [options.length = 30](number): 允许的最大长度。
// // [options.omission = '...'](string): 超出后的代替字符。
// // [options.separator](RegExp | string): 截断点。

// console.log(_.truncate('hi-diddly-ho there, neighborino', {
//     'length': 24,
//     'separator': ' ',
//     'omission': '@@@'
// }));

// // _.unescape([string=''])
// // _.escape的反向版。 这个方法转换string字符串中的 HTML 实体 &amp;, &lt;, &gt;, &quot;, &#39;, 和 &#96; 为对应的字符。

// // 空格分割的大写字符
// console.log(_.upperCase('--foo-bar'));

// // 首字母大写
// console.log(_.upperFirst('foo Bar'));

// // 拆分为词数组
// console.log(_.words('fred, barney, & pebbles', /[^, ]+/g));

// // _.attempt(func, [args])
// // 尝试调用func，返回结果 或者 捕捉错误对象。任何附加的参数都会在调用时传给func。

// // _.bindAll(object, methodNames)
// // 绑定一个对象的方法到对象本身，覆盖现有的方法。

// // _.cond(pairs)
// // 创建了一个函数，这个函数会迭代pairs，并调用最先返回真值对应的函数。该断言函数对绑定 this 及传入创建函数的参数。

// // _.conforms(source)
// // 创建一个函数。 这个函数会 调用 source 的属性名对应的 predicate 与传入对象相对应属性名的值进行断言处理。 如果都符合返回 true ，否则返回 false 。

// // _.constant(value)
// // 创建一个返回 value 的函数。

// // 默认值
// // _.defaultTo(value, defaultValue)
// // 检查value，以确定一个默认值是否应被返回。如果value为NaN, null, 或者 undefined，那么返回defaultValue默认值。

// // 连续调用
// console.log(_.flow([_.add, n => n * n])(1, 2));
// // _.flowRight([funcs])
// // 右向左

// // _.identity(value)
// // 这个方法返回首个提供的参数。

// // _.iteratee([func = _.identity])
// // 创建一个函数，通过创建函数的参数调用 func 函数。 如果 func 是一个属性名，传入包含这个属性名的对象，回调返回对应属性名的值。 如果 func 是一个对象，传入的元素有相同的对象属性，回调返回 true 。 其他情况返回 false 。

// // 深度比较
// console.log(_.matches({ 'a': 4, 'c': 6 })({ 'a': 4, 'c': 6 }));

// // _.matchesProperty(path, srcValue)
// // 创建一个深比较的方法来比较给定对象的 path 的值是否是 srcValue 。 如果是返回 true ，否则返回 false 。

// // _.method(path, [args])
// // 创建一个调用给定对象 path 上的函数。 任何附加的参数都会传入这个调用函数中。

// // _.methodOf(object, [args])
// // _.method的反向版。 这个创建一个函数调用给定 object 的 path 上的方法， 任何附加的参数都会传入这个调用函数中。

// // _.mixin([object = lodash], source, [options =])
// // 添加来源对象自身的所有可枚举函数属性到目标对象。 如果 object 是个函数，那么函数方法将被添加到原型链上。

// // _.noConflict()
// // 释放 _ 变量为原来的值，并返回一个 lodash 的引用。

// // _.noop()
// // 这个方法返回 undefined

// // _.nthArg([n = 0])
// // 创建一个函数，这个函数返回第 n 个参数。如果 n为负数，则返回从结尾开始的第n个参数。

// // _.over([iteratees = [_.identity]])
// // 创建一个函数，传入提供的参数的函数并调用 iteratees 返回结果。
// console.log(_.over([_.max, _.min])([1, 2, 3, 4]));

// // _.overEvery([predicates = [_.identity]])
// // 建一个函数，传入提供的参数的函数并调用 predicates 判断是否 全部 都为真值。
// console.log(_.overEvery([Boolean, isFinite])('1'));

// // _.overSome([predicates = [_.identity]])
// // 创建一个函数，传入提供的参数的函数并调用 predicates 判断是否 存在 有真值。

// // _.property(path)
// // 创建一个返回给定对象的 path 的值的函数

// // _.propertyOf(object)
// // _.property的反相版本。 这个方法创建的函数返回给定 path 在object上的值。

// // _.range([start = 0], end, [step = 1])
// // 创建一个包含从 start 到 end，但不包含 end 本身范围数字的数组。

// // _.rangeRight([start=0], end, [step=1])
// // 降序

// // _.runInContext([context=root])
// // 创建一个给定context上下文对象的原始的 lodash 函数。

// // _.stubFalse()
// // 这个方法返回 false.

// // _.stubObject()
// // 这个方法返回一个空对象.

// // _.stubString()
// // 这个方法返回一个空字符串。

// // _.stubTrue()
// // 这个方法返回 true。

// // _.times(n, [iteratee = _.identity])
// // 调用 iteratee n 次，每次调用返回的结果存入到数组中。 iteratee 调用入1个参数： (index)。
// console.log(_.times(3, String));

// // _.toPath(value)
// // 转化 value 为属性路径的数组 。
// console.log(_.toPath('a[0].b.c'));

// // _.uniqueId([prefix = ''])
// // 生成唯一ID。 如果提供了 prefix ，会被添加到ID前缀上。
// console.log(_.uniqueId('contact_'));
// console.log(_.uniqueId('contact_'));
























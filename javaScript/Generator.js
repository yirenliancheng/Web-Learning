function* func(){
    console.log('1');
    yield '1';
    console.log('2');
    yield '2';
    console.log('3');
    yield '3';
}
//func().next();
var f=func();
f.next();//输出1
f.next();//输出2
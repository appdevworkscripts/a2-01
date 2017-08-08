function test(){
    console.log('hello')
}
var obj={
    a:1,
    b:"hello",
    c:function(){
        console.log('obj fn called')
    }
}
module.exports = obj;
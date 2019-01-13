/**
 * 装饰者模式
 */

 //1 before 常用添加属性
Function.prototype.before = function(beforefn) {
    var _self = this;
    return function() {
        beforefn.apply( this, arguments );
        return _self.apply( this, arguments);
    };
};

//例如
var func = function( param ) {
    console.log(param);
};

//执行之前添加一个新的属性
func = func.before( function ( param ){
    param.b = 'b';
});

func( {a: 'a'} );

//2 after
Function.prototype.afer = function ( aferfn ) {
    var _self = this;
    return function (){
        var ret = _self.apply( this, arguments);
        aferfn.apply( this, arguments );
        return ret;
    };
};

//例如
document.getElementById = document.getElementById.before(function() {
    alert(1);
});

var button = document.getElementById( 'button' );

//登陆验证 
Function.prototype.before = function (beforefn){
    var _self = this;
    return function(){
        if (beforefn.apply(this, arguments) === false) {
            return;
        }
        return _self.apply(this, arguments);
    };
};

var validata = function() {
    if( userName.value === '' ) {
        alert('用户名不能为空');
        return false;
    };
    if( password.value === '' ) {
        alert('密码不能为空');
        return false;
    };
};

var formSubmit = function() {
    var param = {
        userName: userName.value,
        password: password.value,
    };
    ajax('xxxx', param);
};

formSubmit = formSubmit.before( validata );

submitBtn.onclick = function() {
    formSubmit();
};
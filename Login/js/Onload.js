

$(function(){
	
	var login = new Login('.loginbox');
//	选择登录方式
	var chooselogintype = new Chooselogintype('.loginbox');
//	选择注册方式
	var chooseregistertype = new Chooseregistertype('.loginbox');
//	邮箱登录验证
	var logincheck = new Logincheck('.login_contant');
//	手机登录验证
	var phonelogincheck = new Phonelogincheck('.phonelogin_contant');
//	邮箱注册
	var registercheck = new Registercheck('.register_contant');
//	手机注册
	var phoneregistercheck = new Phoneregistercheck('.phoneregister_contant');
	
	var arr = JSON.parse(Cookies.get('products'));
	$('.spc').html('('+ arr.length +')');
	$('.spc').css('color','red');
})
// JavaScript Document

//获取元素
var  $nickname = $("#nickname");
//输出到控制台
console.log($nickname);

//用户名验证
//失去焦点事件
$("#nickname").blur (function(){
	console.info("用户名失焦。。。。")
	//获取用户输入的用户名
	var nickname = $("#nickname").val();
	console.log(nickname);
	//判断用户名的格式
	if(nickname == '' ){
		console.log("用户不能为空");
		//给当前对象的下一个标签设值
		$(this).next().html("用户不能为空");
		//未设值前该标签是隐藏的  此时就必须显示来
		$(this).next().show();
	}
	//正则表达式
	//创建一个规则
	var reg = /^\w{6,15}$/;
	//判断
	/*
	var flag = reg.test(nickname);
	console.log(flag);
	*/
	if( !reg.test(nickname)){
		//给当前对象的下一个标签设值
		$(this).next().html("用户名必须是6-15位的英文或数字");
		//未设值前该标签是隐藏的  此时就必须显示来
		$(this).next().show();
	}
});
//用户名验证
//失去焦点事件
function nickname_blur_jq() {
	console.info("用户名失焦。。。。")
	//获取用户输入的用户名
	var nickname = $("#nickname").val();
	console.log(nickname);
	//判断用户名的格式
	if(nickname == '' ){
		console.log("用户不能为空");
		//给当前对象的下一个标签设值
		$("#nickname").next().html("用户不能为空");
		//未设值前该标签是隐藏的  此时就必须显示来
		$("#nickname").next().show();
		//给注册按钮设置禁用属性
		$("#reg").attr("disabled","disabled");
		return false;
	}
	//正则表达式
	//创建一个规则
	var reg = /^\w{6,15}$/;
	//判断
	/*
	var flag = reg.test(nickname);
	console.log(flag);
	*/
	if( !reg.test(nickname)){
		//给当前对象的下一个标签设值
		$("#nickname").next().html("用户名必须是6-15位的英文或数字");
		//未设值前该标签是隐藏的  此时就必须显示来
		$("#nickname").next().show();
		//给注册按钮设置禁用属性
		$("#reg").attr("disabled","disabled");
		return false;
	}
	return true;
}
//聚焦事件
function nickname_focus_jq() {
	$("#nickname").next().hide();
	//移除注册按钮的禁用属性
	$("#reg").removeAttr("disabled");
}

//聚焦事件
$("#nickname").focus(function(){
	//隐藏
	$(this).next().hide();
})


//密码验证	
//失焦事件
$("#pwd").blur(function(){
	check_pwd();	
});
function pwd_blur_jq() {
	check_pwd();
}
function pwd_focus_jq() {
	$("#pwd").next().hide();
	//移除注册按钮的禁用属性
	$("#reg").removeAttr("disabled");
}
//聚焦事件
$("#pwd").focus(function(){
	$(this).next().hide();
});
	
function check_pwd(){
	//获取密码
	var pwd = $("#pwd").val();
	//规则
	var reg = /^[\w@!#$%^&*~]{6,15}$/;
	//判断
	if(!reg.test(pwd)){
		$("#pwd").next().html("密码不符合规范");
		$("#pwd").next().show();
		//给注册按钮设置禁用属性
		$("#reg").attr("disabled","disabled");
	}
}

//确认密码验证
//失焦事件
$("#cpwd").blur(function(){
	check_cpwd();	
});
function cpwd_blur_jq() {
	check_cpwd();
}
function cpwd_focus_jq() {
	$("#cpwd").next().hide();
	//移除注册按钮的禁用属性
	$("#reg").removeAttr("disabled");
}
//聚焦事件
$("#cpwd").focus(function(){
	$(this).next().hide();
});
	
function check_cpwd(){
	//获取原密码
	var pwd = $("#pwd").val();
	//获取再次输入的密码
	var cpwd = $("#cpwd").val();
	
	//判断
	if(cpwd == ''){
		$("#cpwd").next().html("确认密码不能为空");
		$("#cpwd").next().show();
		//给注册按钮设置禁用属性
		$("#reg").attr("disabled","disabled");
	}
	if(cpwd != pwd){
		$("#cpwd").next().html("两次输入的密码不一致");
		$("#cpwd").next().show();
		//给注册按钮设置禁用属性
		$("#reg").attr("disabled","disabled");
	}
}

//手机号码验证
//失焦事件
$("#tel").blur(function(){
	check_tel();	
});
function tel_blur_jq() {
	check_tel();
}
function tel_focus_jq() {
	$("#tel").next().next().hide();
	//移除注册按钮的禁用属性
	$("#reg").removeAttr("disabled");
}
//聚焦事件
$("#tel").focus(function(){
	$("#tel").next().next().hide();
});
	
function check_tel(){
	
	//获取电话号码
	var tel = $("#tel").val();
	//规则
	var reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
	
	if( !reg.test(tel)){
		$("#tel").next().next().html("手机号码格式错误");
		$("#tel_msg_show").attr("style", "display: inline;color:#E62E2E;");
		$("#tel").next().next().show();
		//给注册按钮设置禁用属性
		$("#reg").attr("disabled","disabled");
		return false;
	}
	return true;
}

function allow_click_jq() {
	//判断checkbox是否被选中
	if(!$("#allow").is(":checked")){
		$("#allow").next().next().html("您必须同意公司的协议");
		$("#allow").next().next().show();
		//给注册按钮设置禁用属性
		$("#reg").attr("disabled","disabled");
	}else{
		$("#allow").next().next().html("");
		$("#allow").next().next().hide();
		//移除注册按钮的禁用属性
		$("#reg").removeAttr("disabled");
	}
}

//协议
$("#allow").click(function(){
	//判断checkbox是否被选中
	if(!$(this).is(":checked")){
		$(this).next().next().html("您必须同意公司的协议");
		$(this).next().next().show();
		//给注册按钮设置禁用属性
		$("#reg").attr("disabled","disabled");
	}else{
		$(this).next().next().html("");
		$(this).next().next().hide();
		//移除注册按钮的禁用属性
		$("#reg").removeAttr("disabled");
	}
})
	
function errmsg_show() {
	$("#errmsg").show();
	//给注册按钮设置禁用属性
	
}
	
function errmsg_hide() {
	$("#errmsg").hide();
	//移除注册按钮的禁用属性
	$("#reg").removeAttr("disabled");
}

function yzm_errsmg_show() {
	$("#yzm_errsmg").show();
	//给注册按钮设置禁用属性
	$("#reg").attr("disabled","disabled");
}

function yzm_errsmg_hide() {
	$("#yzm_errsmg").hide();
	//移除注册按钮的禁用属性
	$("#reg").removeAttr("disabled");
}

function tel_msg_rightShow() {
	$("#tel_msg_show").attr("style", "display: inline;color:green;");
	$("#tel").next().next().html("验证码发送成功");
	$("#tel_msg_show").show();
}


//注册
function checkRegister(){
	vm_register.register();
}
	
	
	
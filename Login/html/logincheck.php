<?php

header('Content-Type:text/json;charset=utf-8');

$username = $_GET['username'];
$password = $_GET['password'];


if(!file_exists('../JSON/user.json')){
	$arr = array();
}else{
	$arr = json_decode(file_get_contents('../JSON/user.json'));
}

class Person{
	public $username;
	public $password;
}

$person = new Person();

$person->username = $username;
$person->password = $password;

$exist = false;

foreach($arr as $item){
	if($item->username == $username && $item->password == $password){
		$exist = true;
	}
}

if($exist == true){
	die(json_encode(array('content'=>'登录成功')));
}else{
	die(json_encode(array('content'=>'用户名密码错误')));
}


?>
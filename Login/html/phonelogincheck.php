<?php

header('Content-Type:text/json;charset=utf-8');

$username = $_GET['username'];

$arr = json_decode(file_get_contents('../JSON/user.json'));


class Person{
	public $username;
}

$person = new Person();

$person->username = $username;

$exist = false;

foreach($arr as $item){
	if($item->username == $username){
		$exist = true;
	}
}

if($exist == true){
	die(json_encode(array('content'=>'登录成功')));
}else{
	die(json_encode(array('content'=>'该手机未注册帐号')));
}


?>
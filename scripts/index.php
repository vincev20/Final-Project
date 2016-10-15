<?php
    header('Access-Control-Allow-Origin: *');
	//print_r($_POST);
	//print "Hello world"
	$username = trim($_POST["username"]);
	$password = trim($_POST["password"]);

	$users = array();
	$users["test"] = "testing123";

	if ($username == NULL || $password == NULL){
		echo "1";

	}else{

		if (!isset($users[$username])){
			echo "3";

		}else{

			if ($password != $users[$username] ){
				echo "4";
			}else{
				echo "5";

			}

			
		}

		//echo "2";
	}

?>
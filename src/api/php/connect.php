<?php
/**
 * @Author: Marte
 * @Date:   2018-02-07 09:45:57
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-02-08 11:26:09
 */


    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "h5_1708";

    $conn = new mysqli($servername,$username,$password,$dbname);

    if($conn->connect_error){
        die("连接失败：".$conn->connect_error);
    }

    $conn->set_charset('utf8');

?>
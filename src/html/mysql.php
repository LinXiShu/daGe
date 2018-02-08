<?php

/**
 * @Author: Marte
 * @Date:   2018-02-06 21:32:13
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-02-08 12:47:40
 */

// php 连接数据库

    $conn = new mysqli('localhost','root','','h5_1708');
    
    $conn->set_charset('utf8');
   
   $result = $conn-> query('select * from user3');

    $row = $result->fetch_all(MYSQLI_ASSOC);

    echo(json_encode($row,JSON_UNESCAPED_UNICODE));

?>


<?php
/**
 * @Author: Marte
 * @Date:   2018-01-20 13:26:04
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-02-08 22:53:50
 */

$shopping = isset($_POST['shopping']) ? $_POST['shopping'] : Null;

$path = 'data/shopping.json'; 

$file = fopen($path,'w');

fwrite($file,$shopping);

// $content = fread($file,filesize($path));

fclose($file);
// Has changed on disk.Do you want to reload it?

var_dump($shopping);

?>

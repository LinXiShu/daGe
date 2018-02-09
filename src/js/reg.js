/* 
* @Author: Marte
* @Date:   2018-02-04 14:05:29
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 13:50:04
*/

// 定义模块
// define(name,[deps],callback)

require(['config'],function(){
    require(['jquery','carousel'],function($){

                $('.btnReg').on('click',function(){
                  $.ajax({
                    url:'../api/php/reg',
                    data:{
                        username:$('#username').val(),
                        password:$('#password').val(),
                    },
                    success:function(data){
                        // console.log(data);
                        if(data == 'success'){
                            location.href = 'login.html';
                        }else if(data == 'fail'){
                            $('#username').addClass('darget');
                    }
                }
            })                  
        })
    })
})

/* 
* @Author: Marte
* @Date:   2018-02-04 14:05:29
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-08 18:04:18
*/

// 定义模块
// define(name,[deps],callback)

require(['config'],function(){
    require(['jquery','carousel'],function($){
        // console.log(123);
                $('.btnLogin').on('click',function(){
        // console.log(123);
                  $.ajax({
                    url:'../api/php/login',

                    data:{
                        username:$('#username').val(),
                        password:$('#password').val(),
                    },
                    success:function(data){
                        // console.log(data);
                        if(data === 'success'){
                            location.href = 'index.html';
                        }else if(data === 'fail'){
                            $('#username').addClass('danger');
                        }
                    }
                })
            })
        })
    })


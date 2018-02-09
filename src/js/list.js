/* 
* @Author: Marte
* @Date:   2018-02-05 21:08:25
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 12:00:53
*/

let cont_SR = document.getElementById('cont_SR');
console.log(cont_SR);

require(['config'],function(){
    require(['jquery','carousel','list'],function(){
        let red = jQuery(function($){
             $.ajax({
                 url:"../api/php/mysql.php",
                 dataType:'json',
                 success:function(data){
                    console.log(data);
    let div = document.createElement('div');
        console.log(div);

            div.innerHTML = data.map(item=>{
                        return `<ul><a href="#">
                        <li><img src="../${item.imgs}" class="fl" width="260px"height="260px"></li>
                        <li>${item.name}</li>
                        <li class="red textw"><span>￥</span>${item.price}</li>
                        <li>${item.description}</li>
                        </a>
                        </ul>`
                    }).join('');

            cont_SR.appendChild(div);
            console.log(cont_SR);
           }
           
    })
})
})
})

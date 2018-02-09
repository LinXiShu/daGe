/* 
* @Author: Marte
* @Date:   2018-02-08 22:17:24
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-08 22:45:3
*/

var gWC_li = document.getElementById('zhongJian_id');
console.log(gWC_li);

let red = jQuery(function($){
        $.ajax({
            url:"../api/php/mysql.php",
            dataType:'json',
            success:function(data){
                let div = document.createElement('div');
                    console.log(div);

                        div.innerHTML = data.map(item=>{
                                    return `<ul>
                                    <li><a href="#" class="a1"><img src="../${item.imgs}" class="fl"></a></li>
                                    <li><a href="#" class="a2">${item.name}</a></li>
                                    <li class="red textw"><a href="#" class="a3"><span>￥</span>${item.price}</a></li>
                                    <li><a href="#" class="a4">${item.description}</a></li>
                                    </ul>`
                                }).join('');

                        gWC_li.appendChild(div);
                        console.log(gWC_li);
       }
    })
})

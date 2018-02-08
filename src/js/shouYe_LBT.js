
/* 
* @Author: Marte
* @Date:   2018-02-06 15:20:57
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-08 23:09:59
*/

let div_c_long = document.getElementById('div_c_long');

let red = jQuery(function($){
     $.ajax({
         url:"api/php/mysql_index.php",
         dataType:'json',
         success:function(data){
let div = document.createElement('div');
            console.log(data);
            console.log(div);
            div.innerHTML = data.map(item=>{
                    return `<a href="#"><ul>
                        <img src="${item.imgs}" class="fl" width="80px" height="80px"></li>
                        <li>${item.name}</li>
                        <li class="red textw z12"><span>￥</span>${item.price}</li>

                        </ul></a>`
                    }).join('');

            div_c_long.appendChild(div);
            console.log(div_c_long);
       }
    })
})


// ---------------   轮播图
        var photo = document.getElementById('photo');
        var box = document.getElementById('box');
        var sp = document.getElementById('sp');
        // spArr是一个类数组，索引值对应每一个span标签
        var spArr = sp.getElementsByTagName('span');


console.log(spArr);
        var i=0;
        showTu();
        // 显示图片与圆圈的函数（）
        function showTu(){
            i++;
            // 定义对应图片的小圆圈的索引，图片从1开始，spArr数组的索引值从0开始
            var j=i-1;
            if(j<=0){
                // 当小圆圈在第一张时，清除最后一个小圆圈的背景颜色
                j=5;
            }
            // 清除上一个小圆圈的背景颜色，不然全部小圆圈的背景颜色都会改变
            spArr[j-1].style.background = '#65bec7';
            if(i>5){
                // 图片是最后一张的时候返回第一张
                i=1;
            }
            photo.src = 'img/g' +i + '.jpg';
            // 同时显示对应的小圆圈
            spArr[i-1].style.background = 'blue';
        }
        // 定时轮播时间
        var timer = setInterval(showTu,1000);
        // 鼠标移上去暂停
        photo.onmouseover = function(){
            clearInterval(timer);
        }
        // 鼠标移走，轮播继续
        photo.onmouseout = function(){
            timer = setInterval(showTu,1000);//一定要赋值给timer，不然清除不了这里的定时器
        }
        // 给每个span标签绑定点击事件
        for(var j=0;j<spArr.length;j++){
            spArr[j].onmouseover = getClk;
        }

        // 点击函数
        function getClk(){
            // 点击的时候吧定时器关了，因为不关定时器会一直跑，图片一直会变化
            clearInterval(timer);
            // 把定时器走动时的当前圆圈背景颜色去掉
            spArr[i-1].style.background = '#65bec7';
            // 添加点击的圆圈的背景颜色
            this.style.background = 'blue';
            // 并获取当前点击小圆圈的位置
            var _number = this.className;
            _number = _number.charAt(1);
    
            photo.src = 'img/g' +_number + '.jpg';
            // 把当前点击的位置重新赋值给轮播开始的位置，相当于重新定义了开始的位置
            i = _number;
            timer = setInterval(showTu,1000);
            // console.log('i:',i);
            // timer = setInterval(showTu,1000);
        }


// ------------------

// 首页 龙 轮播图



        let zuo = document.getElementById('zuo');
        let you = document.getElementById('you');

        console.log(div_c_long);
        console.log(zuo);
        console.log(you);

var res = 0;
var blus = 0;
var green = 0;

zuo.onclick = function(){
var aitem = setInterval(
  
function(){
if(res<=-10){
        res += 30;
        div_c_long.style = "left:" + res + "px";
        // console.log(res);
        }
        if(res >= 0){
            clearInterval(aitem);
        }
    },20);
}

you.onclick = function(){
var aitems = setInterval(
    function(){
        if(res>=-1050){
        res -= 30 ;
        div_c_long.style = "left:" + res + "px";
        // console.log(res);
    }
    if(res<=-1050){
        clearInterval(aitems)
    }
},20);
} 




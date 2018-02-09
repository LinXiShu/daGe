

/* 
* @Author: Marte
* @Date:   2018-02-06 09:42:21
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 10:16:22
*/

      // ----------------------
    // 获取 mysql 数据。
  // 
// ----------------------------------------------------
var longTeng_ll = document.getElementById('longTeng_I');
var longs = document.getElementById('long');
var long_s = document.getElementById('long_chang');
var long_xia = document.getElementById('longTeng2');

   let red = jQuery(function($){
        $.ajax({
            url:"../api/php/mysql.php",
            dataType:'json',
            success:function(data){
                
                // console.log(data);
                console.log(longs);
            console.log(data);
    let div = document.createElement('div');
        console.log(div);

            div.innerHTML = data.map(item=>{
                        return `<a href="#"><ul>
                        <img src="../${item.imgs}" class="fl"></li>
                        <li>${item.name}</li>
                        <li class="red textw"><span>￥</span>${item.price}</li>
                        <li>${item.description}</li>
                        </ul></a>`
                    }).join('');

            long_s.appendChild(div);
            console.log(long_s);

// -----------------------------------------------------
    let div_Teng = document.createElement('div');

            div_Teng.innerHTML = data.map(item=>{
                return `<a href="#"><ul>
                    <img src="../${item.imgs}" class="fl">
                    <li>${item.name}</li>
                    <li class="red textw"><span>￥</span>${item.price}</li>
                </ul></a>`
            }).join('');

            console.log(div_Teng);
            longTeng_ll.appendChild(div_Teng);
            console.log(longTeng_ll);
// =====================================================
       }
    })
})




//----------------  大图下的小图点击  ---------------------

 var imgurl; //照片路径
 var tgp;   //颜色
 var shuLiang;  //尺码
 var _numsa;   //数量


     // 轮播图for
   var imgs = document.getElementById('photo');
     var xiaotu = xQ_ba.getElementsByTagName('img');
        for(var i=0;i<xiaotu.length;i++){
            Bian(i);
  
        }
     console.log(xiaotu);
        function Bian(i){
            xiaotu[i].onclick = function(){
           
    //for循环删除变边框样式
                for(var j=0;j<xiaotu.length;j++){
                    xiaotu[j].style.border = '';
                }

                imgs.src = '../img/xQ_lB_Big/B' + (i+1) + '.jpg';


            xiaotu[i].style.border = '3px solid red';
            var red = imgs.src;   //图片路径---------------------------------！！！

            let blue = red.split('/');
            imgurl = blue[5] + '/' + blue[6] ;
            console.log(imgurl);
}}
        
        console.log(imgurl);


// -------------选择颜色
// ---------------------------------------
    var yanse_two = document.getElementById('yanSe_two');
    var xiaotu2 = yanSe_two.getElementsByTagName('img');
    console.log(xiaotu2);
    console.log(yanse_two);

      for(var i=0;i<xiaotu2.length;i++){
            Two(i);
        }
    function Two(i){
        xiaotu2[i].onclick = function(){
            for(var j=0;j<xiaotu2.length;j++){
                xiaotu2[j].style.border = '';
                tgp = '';
            }
            xiaotu2[i].style.border = '2px solid red';
            if(i == 1){
                tgp = '黑色';
                console.log(tgp);
            }else if(i == 0){
                tgp = '白色';
                console.log(tgp);
            }
        }
    }



// --------------size选择
//----------------------------------------
    var size = document.getElementById('size');
    var size4 = size.getElementsByTagName('span');

 for(var i=0;i<size4.length;i++){
            sizes(i);
        }

    function sizes(i){
        size4[i].onclick = function(){
            for(var j=0;j<size4.length;j++){
                size4[j].style.border = '';
            }
            size4[i].style.border = '2px solid red';
            shuLiang = size4[i].innerText;
            console.log(shuLiang);
        }
    }
// var nums = ;
// -----------------获取 购买 数量
// ---------------------------------------------
var nums = document.getElementById('nums');
console.log(nums);

nums.onblur = function(){
            var _num = nums.value;
            _numsa = _num;
            console.log(_numsa);
        }

// 总点击事件  提交 到 后台
var gouWuChe = document.getElementById('gouWuChe');
    console.log(gouWuChe);
    var str = '';
    var shopping = [];


    gouWuChe.onclick = function(){
var shoppingdata =`{"img":"${imgurl}","tgp":"${tgp}","size":${shuLiang},"number":${_numsa},"price":"600"}`; 
    shopping.push(shoppingdata);
console.log(shopping);
    }



// --------------------------------把 生成的 json 字符串 提交到 后台 通过 php


       // 龙，轮播图
// -------------------------------------------------------
        let long = document.getElementById('long');

        let dl_zuo = document.getElementById('dl_zuo');

        let dl_you = document.getElementById('dl_you');
// ---------------------------------------------------------
        // console.log(long);
        // console.log(dl_zuo);
        // console.log(dl_you);
var res = 0;
var blus = 0;
var green = 0;

dl_zuo.onclick = function(){
var item = setInterval(
  
function(){
if(res<=-10){
        res += 30;
        long.style = "left:" + res + "px";
        // console.log(res);
        }
        if(res >= 0){
            clearInterval(item);
        }
    },20);
}


dl_you.onclick = function(){
var items = setInterval(
    function(){
        if(res>=-1100){
        res -= 30 ;
        long.style = "left:" + res + "px";
        // console.log(res);
    }
    if(res<=-1100){
        clearInterval(items)
    }
},20);
}


    // 龙腾  轮播图
// ---------------------------------------------

        let longTeng_i = document.getElementById('longTeng_I');
        // console.log(longTeng_i);
        let shang = document.getElementById('shang');
        let xia = document.getElementById('xia');
        console.log(shang);
        console.log(xia);

var res = 0;
var blus = 0;
var green = 0;

shang.onclick = function(){
var aitem = setInterval(
  
function(){
if(res<=-10){
        res += 30;
        longTeng_I.style = "top:" + res + "px";
        // console.log(res);
        }
        if(res >= 0){
            clearInterval(aitem);
        }
    },20);
}

xia.onclick = function(){
var aitems = setInterval(
    function(){
        if(res>=-505){
        res -= 30 ;
        longTeng_I.style = "top:" + res + "px";
        // console.log(res);
    }
    if(res<=-505){
        clearInterval(aitems)
    }
},20);
} 

// --------------------------------------

        let longTeng2 = document.getElementById('');


// --------------------------------------

let xhr = new XMLHttpRequest();

xhr.open('post','../api/shopping.php');

xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

xhr.send(`shopping=${shopping}`);

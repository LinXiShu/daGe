/* 
* @Author: Marte
* @Date:   2018-02-04 14:05:29
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-04 16:13:40
*/


document.addEventListener('DOMContentLoaded',function(){
    let tua = document.getElementById('lunBoTu_tua');
    let img = document.getElementById('lunBoTu_img');
    let red = document.getElementById('lbt_spans');
    var reds = lbt_spans.getElementsByTagName('span');
    console.log(tua);
    console.log(img);
    console.log(lbt_spans);
    console.log(reds);
    console.log(reds[0]);
let i = 1;
    timer = setInterval(autoPlay,2000);

    function autoPlay(){


        for(var i = 0; i < reds.length; i++) {
                           if (reds[i].className == 'red') {
                               reds[i].className = '';
                           }
                       }
        i++

        if(i>=6){
            i=1;
        }

        img.src = 'img/00' + i + '.jpg';
        console.log(666);
        // console.log(reds);
        
        reds[i-1].className = 'red';
        console.log(reds);
    }

})

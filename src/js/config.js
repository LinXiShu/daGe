/* 
* @Author: Marte
* @Date:   2018-02-04 14:05:21
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 14:13:18
*/

// 把他做错单独的文件
require.config({
    // baseUrl:'js'

    paths:{
        'jquery':'../lib/jquery-3.2.1',
        'zoom':'../lib/jquery.gdsZoom',
        'long':'../js/long',
        'shouYe':'../js/shouYe',
        'shuJuLieBiao_goods':'../js/long_sql',
        'reg':'../js/reg',
        'login':'../js/login',
        'seg_js':'../js/seg_js',
        'shouYes':'../js/shouYe_LBT',
        'car_i':'../js/car_i',
        'list':'../js/list.js'
    },
    // 设置依赖
    shim:{
        'zoom':['jquery']

    }
})



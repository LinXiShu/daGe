/* 
* @Author: Marte
* @Date:   2018-02-03 08:55:22
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 15:15:25
*/

var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('compileSass',function(){
    gulp.src('./src/sass/goods.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css'))
});

gulp.task('listen',function(){
    gulp.watch('./src/sass/*.scss',['compileSass'])
});


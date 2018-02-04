/* 
* @Author: Marte
* @Date:   2018-02-03 08:55:22
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-04 13:27:39
*/

var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('compileSass',function(){
    gulp.src('./src/sass/index.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css'))
});

gulp.task('listen',function(){
    gulp.watch('./src/sass/*.scss',['compileSass'])
});

var gulp = require("gulp");
var sass = require("gulp-sass");
var YScss = require("gulp-clean-css");
gulp.task("scssMin", function() {
    return gulp.src("./scss/index.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css/"))
})
gulp.task("watch", function() {
    gulp.watch("./scss/index.scss", gulp.series("scssMin"))
})
gulp.task("YScss", function() {
    return gulp.src("./css/**/*.css")
        .pipe(YScss())
        .pipe(gulp.dest("./yscss"))
})
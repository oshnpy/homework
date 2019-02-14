var gulp = require("gulp");
var sass = require("gulp-sass");
gulp.task("scssMin", function() {
    return gulp.src("./scss/index.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css/"))
})
'use strict';

var gulp = require('gulp'),
    sass = require("gulp-sass"),
    sourcemaps = require("gulp-sourcemaps"),
    autoprefixer = require("gulp-autoprefixer"),
    minifycss = require("gulp-minify-css"),
    browsersync = require("browser-sync"),
    reload = browsersync.reload;

gulp.task("sass", function () {
    gulp.src("sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(autoprefixer({
            browsers: ["last 4 versions"],
            cascade: false
        }))
        .pipe(minifycss())
        // Only if developement mode is on
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"))
        .pipe(reload({stream: true}));
});

gulp.task("watch", function () {
    gulp.watch("sass/*.scss", ["sass"]);
});

gulp.task("serve", ["watch"], function () {
    browsersync({
        server: "./"
    });
    gulp.watch("*.html").on("change", reload);
});

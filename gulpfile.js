const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");

// Styles

const styles = () => {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("styles.min.css"))
    .pipe(sourcemap.write("."))
    //.pipe(gulp.dest("source/css"))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

//Images

const images = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
    ]))
}

exports.images = images;

//copy

const copy = () => {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**",
    "source/*.ico",
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"));
};

exports.copy = copy;

//del

const del = require("del");
const clean = () => {
  return del("build");
};
exports.clean = clean;

//html

const htmlmin = require('gulp-htmlmin');
const posthtml = require('gulp-posthtml');

const html = () => {
  return gulp.src('source/*.html')
    // .pipe(posthtml())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
};

exports.html = html;

//build

const build = gulp.series(
  clean,
  copy,
  styles,
  html,
);

exports.build = build;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/less/**/*.less", gulp.series("build"));
  gulp.watch("source/*.html").on("change", sync.reload);
}

exports.default = gulp.series(
  build, server, watcher
);

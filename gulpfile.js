const { src, dest, parallel } = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

function css() {
  return src('./src/css/**/*.css')
    .pipe(concat('styles.css'))
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(dest('./build/css'));
}

exports.css = css;

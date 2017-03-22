/// <binding AfterBuild='html' />
var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var sass = require('gulp-sass');
var del = require('del');
var templateCache = require('gulp-angular-templatecache');
var runSequence = require('run-sequence');
var config = require('./gulp.config')();

var typescript = require('gulp-tsc');

/******************/
var args = require('yargs').argv;
var $ = require('gulp-load-plugins')({ lazy: true });




var paths = {
    sass: ['./scss/**/*.scss'],
    src: ['./src/**/*.ts'],
    srcDev: ['./src/**/!(*.prod).ts'],
    srcProd: ['./src/**/!(*.dev).ts'],

    js: ['./www/app/**/*.js']
};

gulp.task('default', ['sass','templateCache','compile','inject']);
gulp.task('build',  function(callback) {
  runSequence('cleanjs',
    ['sass','templateCache','compile:prod'],
    'inject',
    callback);
});

gulp.task('sass', function (done) {
    gulp.src(paths.sass)
        .pipe(sass())
        .on('error', sass.logError)
        .pipe($.autoprefixer({browsers: config.autoprefixerBrowsers}))
        .pipe(gulp.dest('./www/css/'))
        .on('end', done);
});


gulp.task('inject', function () {
    log('Wire up the bower css js and our app js into the html');
    var options = config.getWiredepDefaultOptions();
    var wiredep = require('wiredep').stream;

    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.js), { relative: true }))
        .pipe(gulp.dest(config.client));
});

gulp.task('templateCache', function () {
    return gulp.src(config.typescript.allhtml)
      .pipe(templateCache('templates.js',
        {
            module: 'app',
            root: '',
            standAlone: false
        }))
      .pipe(gulp.dest('www/app'));
});


//////////////////

function log(msg) {
    if (typeof (msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}

gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.src, ['compile']);
    gulp.watch(config.typescript.allhtml, ['templateCache']);
});

gulp.task('watch:sass', function () {
    gulp.watch(paths.sass, ['sass']);

});

gulp.task('compile', function () {
    gulp.src(paths.srcProd)
        .pipe(typescript({
            emitError: false,
            target: 'es5',
            module: 'commonjs',
            declaration: false,
            noImplicitAn: false,
            removeComments: true,
            noLib: false,
            sourceRoot: '/src',
            sourceMap: true
        }))
        .pipe(gulp.dest('www/'));

});



gulp.task('cleanjs', function () {
    del(paths.js).then(function (paths) {
        console.log('Deleted files and folders:\n', paths.join('\n'));
    });
});


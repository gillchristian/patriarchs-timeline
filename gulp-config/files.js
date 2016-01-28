'use strict';
// files paths

const FILES = {
    css: {
        source: 'toCompile/sass/style.scss',
        all: 'toCompile/sass/**/*.scss',
        dest: 'app/'
    },
    js: {
        source: ['public/js/**/*.js', '!public/js/**/*.min.js'],
        dest: 'public/js/'
    },
    jade: {
        index: 'toCompile/jade/index.jade',
        all: 'toCompile/jade/**/*.jade',
        dest: 'public/'
    },
};

module.exports = FILES;
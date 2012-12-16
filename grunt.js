module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>', '<file_strip_banner:lib/<%= pkg.name %>.js>'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    test: {
      files: ['test/**/*.js']
    },
    jasmine: {
      src : [
        'src/lib/curl.js',
        'src/*.js'
      ],
      specs : 'test/*Test.js'
    },
    lint: {
      files: [ 'grunt.js', 'src/*.js' ]
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint test'
    },
    jshint: {
      options: {
        curly: true,
        jquery: true,
        debug: false,
        devel: false,
        eqeqeq: true,
        eqnull: true,
        expr: true,
        forin: false,
        immed: false,
        latedef: true,
        newcap: true,
        noarg: true,
        noempty: false,
        nonew: false,
        nomen: false,
        plusplus: false,
        regexp: false,
        undef: true,
        sub: true,
        white: false,
        scripturl: true,
        trailing: true
      },
      globals: {
        exports: true,
        module: false,
        define: true,
        window: true
      }
    },
    uglify: {}
  });

  grunt.loadNpmTasks('grunt-jasmine-runner');

  // Default task.
  grunt.registerTask('default', 'lint test concat min');

};

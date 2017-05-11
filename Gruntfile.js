module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        jade: {
            files:
                {
                    cwd: 'views/',
                    src: ['*.jade', '!layout.jade', '!error.jade', '!index.jade'],
                    dest: 'public',
                    except: 'layout.jade',
                    expand: true,
                    ext: '.html'
                }

        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jade');
    // Default task(s).
   // grunt.registerTask('default', ['uglify']);
   // grunt.registerTask('build', ['jade']);

};
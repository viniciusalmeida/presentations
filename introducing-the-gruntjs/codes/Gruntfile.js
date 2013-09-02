module.exports = function (grunt) {
    'use strict';

    // Configuração dos plugins
    grunt.initConfig({
        less: {
            onlyParse: {
                files: {
                    './out.css': './in.less'
                } 
            }
        }
    });

    // Carregando os plugins instatalados do NPM
    grunt.loadNpmTasks('grunt-contrib-less');

    // Registrando tarefas
    grunt.registerTask('default', ['less']);
}
'use strict';

var coveralls = require('coveralls');

function runGruntTask(taskName, callback) {
    var task = grunt.task._taskPlusArgs(taskName);
    task.task.fn.apply({
        nameArgs: task.nameArgs,
        name: task.task.name,
        args: task.args,
        flags: task.flags,
        async: function() { return callback; }
    }, task.args);
}


exports.coveralls = {
    submits_file_to_coveralls: function (test) {
        runGruntTask('coveralls:basic_test', function (result) {
            test.ok(result, 'Should be successful');

            test.ok(coveralls.handleInput.calledOnce);
            test.equal(coveralls.handleInput.getCall(0).args[0], 'lcov.info content', 'Should send lcov data');
            test.done();
        });
    }
};

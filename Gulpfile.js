var gulp = require("gulp");
var screeps = require("./index.js");
var options = require("screeps_auth");

gulp.task('push', function() {
	return gulp.src("ia/*.js").pipe(screeps(options));
});
gulp.task('pull', function() {
	options.action = "pull";
	return screeps(options).pipe(gulp.dest("ia/"));
});

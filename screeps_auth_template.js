/*
** This file is an template for the screeps_auth module
** you can rename it as screep_auth.js and keep the template below or turn it into a json file.
**
** The screep_auth module should contain your authentification for a screeps server,
** so make sure you DON'T SHARE OR COMMIT THE MODULE, as this could expose your password.
**
** If you don't want to store your password in a plain text file, you can retreive it dynamicly,
** by implementing the solution of your choice directly into the module
*/

module.exports = function (callback) {
	return {
		email: "EMAIL",
		password: "PASSWORD",
		branch: "default"
	};
};

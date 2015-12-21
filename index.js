'use strict';
module.exports = function (input, search) {
	if (typeof input !== 'string') {
		throw new TypeError('The input should be a string');
	}

	return [].concat(search).reduce(function (count, search) {
		return count + (input.match(search) || []).length;
	}, 0);
};

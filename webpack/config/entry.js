var path = require('path');

module.exports = {
	dev: ['./webpack/dev-client', path.resolve(__dirname, '../../app/app.js')],
	build: {
		app: path.resolve(__dirname, '../../app/app.js')
	}
}
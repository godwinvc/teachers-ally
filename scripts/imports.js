// libraries
window.angular = require('../node_modules/angular');
window.jQuery = require('../node_modules/jquery/dist/jquery');
window.$ = jQuery;
window.g_blurnav = require('./blurnav.js');
require('../css/bootstrap.css');
require('../css/font-awesome.css');
require('../node_modules/bootstrap/dist/js/bootstrap.min.js');
require('../node_modules/angular-sanitize');
require('../node_modules/angular-ui-router');

// godwin's scripts
require('../css/login.css');
require('../css/classroom.css');
require('../css/classes.css');
require('./app.controller.js');
require('./config');
require('./login.controller');
require('./signup.controller');
require('./classroom.controller');
require('./classes.controller');
require('./auth.service');
require('./shortname.directive');
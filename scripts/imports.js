// libraries
window.jQuery = require('jquery');
window.$ = jQuery;
window.angular = require('angular');
window.g_blurnav = require('./blurnav.js');
//require('./modernizr-custom.js');
require('../node_modules/angular-animate/angular-animate.js');
require('../css/bootstrap.css');
require('../css/font-awesome.css');
require('../css/ionicons.css');
require('../node_modules/animate.css/animate.css');
require('../node_modules/bootstrap-sass/assets/javascripts/bootstrap');
require('../node_modules/angular-sanitize');
require('../node_modules/angular-ui-router');

// godwin's scripts
//style sheets
require('../css/globals.css');
require('../css/login.css');
require('../css/classroom.css');
require('../css/classes.css');
require('../css/exams.css');
require('../css/configure.css');
require('../css/jquery.mCustomScrollbar.css');
require('../css/sheet.css');

// angular module initiater
require('./app.controller.js');
require('./config');

//for custom scrollbars//
require("jquery-mousewheel")($);
require('malihu-custom-scrollbar-plugin')($);
require('./scrollbars.min');
//********************//

//services
require('./auth.service');
require('./smooth_scroll.service');
//require('./blur.service');

//directives
require('./app.directive');
require('./shortname.directive');
require('./orientation.directive');
require('./watch_changes.directive');
require('./reorder_list.directive');
//require('./class_options.directive');

//filters
require('./fish_object.filter');

//controllers
require('./login.controller');
require('./signup.controller');
require('./classroom.controller');
require('./classes.controller');
require('./exams.controller');
require('./configure.controller');
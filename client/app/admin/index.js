'use strict';

import routes from './admin.routes';
import AdminController from './admin.controller';

export default angular.module('cleverFilterApp.admin', ['cleverFilterApp.auth', 'ngRoute'])
  .config(routes)
  .controller('AdminController', AdminController)
  .name;

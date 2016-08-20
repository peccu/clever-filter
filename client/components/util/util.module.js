'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('cleverFilterApp.util', [])
  .factory('Util', UtilService)
  .name;

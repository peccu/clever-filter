'use strict';

/*@ngInject*/
export default ['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/articles', {
      template: '<articles></articles>'
    });
}];

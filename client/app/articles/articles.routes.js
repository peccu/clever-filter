'use strict';

/*@ngInject*/
export default function($routeProvider) {
  $routeProvider
    .when('/articles', {
      template: '<articles></articles>'
    });
}

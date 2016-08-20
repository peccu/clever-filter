'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './articles.routes';

export class ArticlesComponent {
  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('article');
    });
  }

  $onInit() {
    this.$http.get('/api/articles')
      .then(response => {
        this.articles = response.data;
        this.socket.syncUpdates('article', this.awesomeThings);
      });
  }

}

export default angular.module('cleverFilterApp.articles', [ngRoute])
  .config(routes)
  .component('articles', {
    template: require('./articles.html'),
    controller: ArticlesComponent
  })
  .name;

'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './articles.routes';

export class ArticlesComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('cleverFilterApp.articles', [ngRoute])
  .config(routes)
  .component('articles', {
    template: require('./articles.html'),
    controller: ArticlesComponent,
    controllerAs: 'articlesCtrl'
  })
  .name;

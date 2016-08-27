'use strict';
const angular = require('angular');

export class articleComponent {
  /*@ngInject*/
  constructor() {
  }
}

export default angular.module('cleverFilterApp.article', [])
  .component('article', {
    template: require('./article.html'),
    bindings: { article: '<' },
    controller: articleComponent
  })
  .name;

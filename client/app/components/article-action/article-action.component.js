'use strict';
const angular = require('angular');

export class articleActionComponent {
  /*@ngInject*/
  constructor() {
  }
}

export default angular.module('cleverFilterApp.article-action', [])
  .component('articleAction', {
    template: require('./article-action.html'),
    bindings: {
      article: '='
    },
    controller: articleActionComponent
  })
  .name;

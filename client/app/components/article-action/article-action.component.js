'use strict';
const angular = require('angular');

export class articleActionComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('cleverFilterApp.article-action', [])
  .component('articleAction', {
    template: '<h1>Hello {{ $ctrl.message }}</h1>',
    bindings: { message: '<' },
    controller: articleActionComponent
  })
  .name;

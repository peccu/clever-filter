'use strict';
const angular = require('angular');

export class articleComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('cleverFilterApp.article', [])
  .component('article', {
    template: '<h1>Hello {{ $ctrl.message }}</h1>',
    bindings: { message: '<' },
    controller: articleComponent
  })
  .name;

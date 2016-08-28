'use strict';
const angular = require('angular');

export class articleActionComponent {
  /*@ngInject*/
  constructor() {
  }

  like(article) {
    article.isLike = true;
    article.hide = true;
  }

  dislike(article) {
    article.isLike = false;
    article.hide = true;
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

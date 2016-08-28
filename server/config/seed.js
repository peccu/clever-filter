/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import Article from '../api/article/article.model';
import User from '../api/user/user.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Webpack, Gulp, Babel, TypeScript, Karma, '
        + 'Mocha, ESLint, Node Inspector, Livereload, Protractor, Pug, '
        + 'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, '
        + 'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep '
        + 'tests alongside code. Automatic injection of scripts and '
        + 'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more '
        + 'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript '
        + 'payload, minifies your scripts/css/images, and rewrites asset '
        + 'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku '
        + 'and openshift subgenerators'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });

Article.find({}).remove()
  .then(() => {
    Article.create({
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure '
        + 'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        + 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '
        + 'Eveniet minus assumenda proident eos voluptatem. Officiis iusto minim distinctio odit nemo mollitia cum sapiente '
        + 'nesciunt enim eum rem vitae. Eligendi ipsum saepe aliquid temporibus irure. Eius quia mollit maxime quibusdam '
        + 'tenetur quod do culpa quisquam porro unde a animi.'
        + 'Dicta dolorem labore ipsa facere anim at repudiandae. Veniam voluptatibus doloremque illo provident suscipit '
        + 'tempora dolore magnam totam commodi perspiciatis deserunt explicabo. Repellat quo error aut quos in non autem '
        + 'consequat amet quae. Inventore occaecat dolores laborum ducimus.'
    }, {
      name: 'Development Tools',
      info: 'Integration with popular tools such as Webpack, Gulp, Babel, TypeScript, Karma, '
        + 'Mocha, ESLint, Node Inspector, Livereload, Protractor, Pug, '
        + 'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, '
        + 'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep '
        + 'tests alongside code. Automatic injection of scripts and '
        + 'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more '
        + 'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript '
        + 'payload, minifies your scripts/css/images, and rewrites asset '
        + 'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku '
        + 'and openshift subgenerators'
    });
  });

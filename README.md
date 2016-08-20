# clever-filter

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 4.0.1.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 4.x.x, npm >= 2.x.x
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

3. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `gulp build` for building and `gulp serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.

## Generator CheatSheet
- `yo angular-fullstack:component name`
- `yo angular-fullstack:controller user`
- `yo angular-fullstack:decorator serviceName`
- `yo angular-fullstack:directive myDirective`
- `yo angular-fullstack:endpoint [options] <name>`

```
Options:
  -h,   --help               # Print the generator's options and usage
        --skip-cache         # Do not remember prompt answers           Default: false
        --route              # URL for the endpoint
        --models             # Specify which model(s) to use            Options: mongoose, sequelize
        --endpointDirectory  # Parent directory for enpoints
```

- `yo angular-fullstack:filter myFilter`
- `yo angular-fullstack:heroku`
  http://angular-fullstack.github.io/generator-angular-fullstack/Generators/heroku.html
- `yo angular-fullstack:openshift`
  http://angular-fullstack.github.io/generator-angular-fullstack/Generators/openshift.html
- `yo angular-fullstack:route myroute`
- `yo angular-fullstack:service myService`

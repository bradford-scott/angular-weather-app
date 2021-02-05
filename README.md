# Application Runtime Requirements

Node version `10.13.0` or higher and npm version `6.9.0` or higher  
    - Execute `npm install` from the root directory  
    - Once your dependencies are installed execute commands listed below for run, unit-test, or e2e testing purposes
    
# Execute Application From Dist/Build

Run following commands:  
    - Execute `ng build` to create a dist directory for execution from build  
    - `npm install angular-http-server -g` This installs the angular http server to serve the app  
    - `angular-http-server --path {path to index.html in dist}` EX: `angular-http-server --path ./dist/angular-weather-app`  
    - This will serve the application on `localhost:8080`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# WebdriverIO Boilerplate - Jasmine, Browserstack

<img align="right" height="30" src="http://www.srgssr.ch/fileadmin/templates/images/SRGLogo.gif">

> A boilerplate project to get started with WebdriverIO

### Overview

This project is an example of how to get started using WebdriverIO for Selenium testing using node.js. It makes use of Jasmine framework, runs with spec and junit reporters, browserstack reporter and uses Grunt to manage tasks.

#### Table of contents

* [Overview](#overview)
* [Table of contents](#table-of-contents)
* [Setup](#setup)
* [Configuration](#configuration)
* [Run](#run)
* [Team](#team)
* [References](#references)

### Setup

Run `npm install` to fetch all dependencies. To make use of the grunt tasks by command line, install `grunt-cli` globally:

```sh
npm install -g grunt-cli
```

Additionaly you have to set your username and access key for Browserstack as environment varaibles:

```sh
export BROWSERSTACK_USERNAME="username"
export BROWSERSTACK_ACCESS_KEY="XXXXXXXXXXXXXXXXXXXX"
```

### Configuration

The main configuration file is ``./conf/wdio.conf.js`. This file contains all configurations that are common to every environment. We've also set up three additional environment files: test, stage and prod:

```
./conf/wdio.test.conf.js # Test
./conf/wdio.tage.conf.js # Stage
./conf/wdio.prod.conf.js # Prod
```

Use this files to override the main configuration for specific configuration parameters of the different environments. You can also add new environments in the `Gruntfile.js`.

### Run

The `Gruntfile.js` contains a task for each environemnet, you can run them through the following commands:

```sh
grunt test  # Run test profile
grunt stage # Run stage profile
grunt prod  # Run prod profile
grunt       # Run prod profile
```

### Team

If you have questions or problems don't hesistate to contact us:

* Josep Boix [@ilemboix](https://github.com/ilemboix)
* Samuel Hügli [@shugli](https://github.com/shugli)

### References

See below the references to the different frameworks used in this project:

* [WebdriverIO](http://webdriver.io/guide.html)
* [Jasmine](https://jasmine.github.io/2.1/introduction.html)
* [WDIO Spec Reporter](https://github.com/webdriverio/wdio-spec-reporter)
* [WDIO Junit Reporter](https://github.com/webdriverio/wdio-junit-reporter)
* [WDIO Jasmine framework](https://github.com/webdriverio/wdio-jasmine-framework)
* [Grunt Webdriver](https://github.com/webdriverio/grunt-webdriver)
* [Browserstack](https://www.browserstack.com)


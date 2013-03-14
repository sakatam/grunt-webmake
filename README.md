# webmake

> Do webmake

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-webmake --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('webmake');
```

## The "webmake" task

### Overview
In your project's Gruntfile, add a section named `webmake` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  webmake: {
    options: {
    // see https://github.com/medikoo/modules-webmake#options
    },
    app: {
      files: {
        'build/app.js': ['src/app/index.js'],
      },
    },
  },
})
```

Please note that you can specify only one entry file (= src) per dest.
For example, the following configuration will fail.
```js
files: {
  'build/app.js': ['src/app/index1.js', 'src/app/index2.js']
}
```

### Options
see https://github.com/medikoo/modules-webmake#options

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

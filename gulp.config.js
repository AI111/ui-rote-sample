module.exports = function() {
  var client = './www/';
  var clientApp = client + 'app/';
  var temp = './.tmp/';
  var jsTarget = './www/';
  var tsSource = './src/';

  var config = {

    alljs: [
      './src/**/*.js',
      './*.js'
    ],
    build: './build/',
    client: client,
    css: temp + 'styles.css',
    fonts: './bower_components/font-awesome/fonts/**/*.*',
    html: clientApp + '**/*.html',
    htmltemplates: clientApp + '**/*.html',
    images: client + 'images/**/*.*',
    index: client + 'index.html',
    js: [
      clientApp + '**/common/**',
      clientApp + '**/*.module.js',
      clientApp + '**/*base*.js',
      clientApp + '**/*.js',
      '!' + clientApp + '**/*.spec.js'
    ],
    autoprefixerBrowsers : [
      'ie >= 9',
      'ie_mob >= 10',
      'ff >= 30',
      'chrome >= 34',
      'safari >= 6',
      'opera >= 23',
      'ios >= 6',
      'android >= 4.4',
      'bb >= 10'
    ],
    temp: temp,

    /**
     * template cache
     */
    templateCache: {
      file: 'templates.js',
      options: {
        module: 'app.core',
        standAlone: false,
        root: 'app/'
      }
    },

    /**
     * browser sync
     */
    browserReloadDelay: 1000,

    typescript: {
      alljs: [jsTarget + '**/*.js', jsTarget + '**/*.map'],
      allapp: [jsTarget + '**/*.js', jsTarget + '**/*.map', jsTarget + '**/*.html'],
      allhtml: tsSource + '**/*.html',
      allts: tsSource + '**/*.ts',
      jsPath: jsTarget,
      options: {
        module: 'commonjs',
        emitError: false,
        sourceMap: true,
        target: 'ES5'
      }
    },
    /**
     * Bower and NPM locations
     */
    bower: {
      json: require('./bower.json'),
      directory: './www/lib/',
      ignorePath: '../..'
    }
  };

  config.getWiredepDefaultOptions = function() {
    var options = {
      bowerJson: config.bower.json,
      directory: config.bower.directory,
      ignorePath: config.bower.ignorePath,
      // exclude: /angular.js/,
      overrides: {
        'socket.io-client': {
          main: 'dist/socket.io.js'
        }
        ,
        'intl-tel-input':{
          main:['build/css/intlTelInput.css','build/js/intlTelInput.js','build/js/utils.js']
        }
      },
      onError: function(err){
        console.log('onError',err);
      }
    };
    return options;
  };

  return config;
};

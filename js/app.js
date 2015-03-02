// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.directives'])

//.run(function ($ionicPlatform) {
//    $ionicPlatform.ready(function () {
//        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//        // for form inputs)
//        if (window.cordova && window.cordova.plugins.Keyboard) {
//            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//        }
//        if (window.StatusBar) {
//            // org.apache.cordova.statusbar required
//            StatusBar.styleDefault();
//        }
//    });
//})
//
//.config(['$compileProvider', function ($compileProvider) {
//    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|content):|data:image\//);
//        }])

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    /*Set the default tab position at bottom in Android
     * http://ionicframework.com/docs/nightly/api/provider/%24ionicConfigProvider/
     */
    $ionicConfigProvider.tabs.position('bottom');


    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
        url: '/dash',
        views: {
            'tab-dash': {
                templateUrl: 'templates/tab-dash.html',
                controller: 'DashCtrl as vm'
            }
        }
    })

    .state('tab.to', {
        url: '/to',
        views: {
            'tab-to': {
                templateUrl: 'templates/to.html',
                controller: 'ToCtrl as vm'
            }
        }
    })

    //here the state means the state in URL router
    .state('tab.from', {
        url: '/from',
        views: {
            'tab-from': {
                templateUrl: 'templates/from.html',
                controller: 'FromCtrl as vm'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');

});
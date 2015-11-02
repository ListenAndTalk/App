var app = angular.module('app', ['ui.router', 'mgcrea.ngStrap', 'ngAnimate', 'restangular', 'auth0', 'angular-storage', 'angular-jwt', 'ui.bootstrap']);

app.config(function ($stateProvider, $urlRouterProvider, authProvider, RestangularProvider, $httpProvider, jwtInterceptorProvider) {
    //authProvider.init({
    //  domain: 'listentalk.auth0.com',
    //  clientID: 'pCGXGZvE7a7aNkEXi0YHS9WEp4Tw9N6Y',
    //  loginState: 'login'
    //});

    //jwtInterceptorProvider.tokenGetter = ['store', function(store) {
    //  // Return the saved token
    //  return store.get('token');
    //}];

    //$httpProvider.interceptors.push('jwtInterceptor');

    var newBaseUrl = "";
    if (window.location.hostname == "localhost") {
        newBaseUrl = "http://localhost:8000/api/v2";
    } else {
        var deployedAt = window.location.href.substring(0, window.location.href);
        newBaseUrl = deployedAt + "/api/v2";
    }
    RestangularProvider.setBaseUrl(newBaseUrl);

    // add a response intereceptor
    RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response, deferred) {
        var extractedData;
        // .. to look for getList operations
        if (operation === "getList") {
            // .. and handle the data and meta data
            extractedData = data.data;
            //extractedData.error = error;
           // extractedData.paging = paging;
        } else {
            extractedData = data.data;
        }
        return extractedData;
    });


    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            views: {
                "nav_top": {
                    controller: 'homeCtrl',
                    templateUrl: "./partials/navTop.html"
                },
                "main": {
                    controller: 'homeCtrl',
                    templateUrl: "./partials/home.html"
                }
            },
            data: {requiresLogin: false}
        })
        .state('activity', {
            url: '/activity',
            views: {
                "nav_top": {
                    controller: 'homeCtrl',
                    templateUrl: "./partials/navTop.html"
                },
                "main": {
                    controller: 'activityCtrl',
                    templateUrl: "./partials/activity.html"
                }
            },
            data: {requiresLogin: false}
        })
        .state('activity.add', {
            views: {
                "nav_side": {
                    templateUrl: "./partials/activity.sidenav.html"
                },
                "content": {
                    templateUrl: "./partials/activity.add.html"
                }
            },
            data: {requiresLogin: false}
        })
        .state('activity.view', {
            views: {
                "nav_side": {
                    templateUrl: "./partials/activity.sidenav.html"
                },
                "content": {
                    templateUrl: "./partials/activity.view.html"
                }
            },
            data: {requiresLogin: false}
        })
        .state('activity.update', {
            views: {
                "nav_side": {
                    templateUrl: "./partials/activity.sidenav.html"
                },
                "content": {
                    templateUrl: "./partials/activity.update.html"
                }
            },
            data: {requiresLogin: false}
        })
        .state('newstudent', {
            url: '/newstudent',
            views: {
                "nav_top": {
                    controller: 'homeCtrl',
                    templateUrl: "./partials/navTop.html"
                },
                "main": {
                    controller: 'studentsCtrl',
                    templateUrl: "./partials/newstudent.html"
                }
            }
        })
        .state('newstaff', {
            url: '/newstaff',
            views: {
                "nav_top": {
                    controller: 'homeCtrl',
                    templateUrl: "./partials/navTop.html"
                },
                "main": {
                    controller: 'staffCtrl',
                    templateUrl: "./partials/newstaff.html"
                }
            }
        })
        .state('markAttendance', {
            url: '/markAttendance',
            views: {
                "nav_top": {
                    controller: 'homeCtrl',
                    templateUrl: "./partials/navTop.html"
                },
                "main": {
                    controller: 'studentsCtrl',
                    templateUrl: "./partials/markAttendance.html"
                }
            },
            data: {requiresLogin: false}
        })
        .state('viewAttendance', {
            url: '/viewAttendance',
            views: {
                "nav_top": {
                    controller: 'homeCtrl',
                    templateUrl: "./partials/navTop.html"
                },
                "main": {
                    controller: 'viewAttendanceCtrl',
                    templateUrl: "./partials/viewAttendance.html"
                }
            },
            data: {requiresLogin: false}
        })
        .state('settings', {
            url: '/settings',
            views: {
                "nav_top": {
                    controller: 'homeCtrl',
                    templateUrl: "./partials/navTop.html"
                },
                "main": {
                    controller: 'settingCtrl',
                    templateUrl: "./partials/settings.html"
                }
            },
            data: {requiresLogin: false}
        })
        .state('login', {
            url: '/login',
            views: {
                "main": {
                    controller: 'loginCtrl',
                    templateUrl: "./partials/login.html"
                }
            }
        })
        .state('userinfo', {
            url: '/userinfo',
            views: {
                "nav_top": {
                    controller: 'homeCtrl',
                    templateUrl: "./partials/navTop.html"
                },
                "main": {
                    controller: 'homeCtrl',
                    templateUrl: "./partials/userinfo.html"
                }
            },
            data: {requiresLogin: false}
        });

})
;


//.run(function(auth) {
//  // This hooks al auth events to check everything as soon as the app starts
//  auth.hookEvents();
//});


//
//app
//.run(function($rootScope, auth, store, jwtHelper, $location) {
//  // This events gets triggered on refresh or URL change
//  $rootScope.$on('$locationChangeStart', function() {
//    var token = store.get('token');
//    if (token) {
//      if (!jwtHelper.isTokenExpired(token)) {
//        if (!auth.isAuthenticated) {
//          auth.authenticate(store.get('profile'), token);
//        }
//      } else {
//        // Either show the login page or use the refresh token to get a new idToken
//        $location.path('/');
//      }
//    }
//  });
//});

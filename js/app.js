var app = angular.module('myApp', ['ngRoute', 'firebase']);

app.config(function($locationProvider, $routeProvider){
	$locationProvider.hashPrefix('');
  	$routeProvider
	.when('/', {
		controller: 'ListController',
		templateUrl: 'views/list.html'
	})
	.when('/add', {
		controller: 'AddController',
		templateUrl: 'views/add.html'
	})
	.when('/edit/:id', {
		controller: 'EditController',
		templateUrl: 'views/edit.html'
	})
	.when('/addTimeTable/:id', {
		controller: 'AddTimeTableController',
		templateUrl: 'views/addTimeTable.html'
	})
	.when('/editTimeTable/:id/:id1', {
		controller: 'EditTimeTableController',
		templateUrl: 'views/editTimeTable.html'
	})
	.otherwise({
		redirectTo: '/'
	});
    
});

  var config = {
    apiKey: "AIzaSyD1EgDewzkIfBM_cDwlunT7giHUC_EsPzU",
    authDomain: "ayudantia-usfx.firebaseapp.com",
    databaseURL: "https://ayudantia-usfx.firebaseio.com",
    projectId: "ayudantia-usfx",
    storageBucket: "ayudantia-usfx.appspot.com",
    messagingSenderId: "527701327831"
  };
  firebase.initializeApp(config);



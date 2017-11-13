var app = angular.module('myApp', ['ngRoute', 'firebase']);

app.config(function($locationProvider, $routeProvider){
	$locationProvider.hashPrefix('');
  	$routeProvider
	.when('/', {
		controller: 'ListController',
		templateUrl: 'views/subject/list.html'
	})
	.when('/add', {
		controller: 'AddController',
		templateUrl: 'views/subject/add.html'
	})
	.when('/edit/:id', {
		controller: 'EditController',
		templateUrl: 'views/subject/edit.html'
	})
	.when('/addTimeTable/:id', {
		controller: 'AddTimeTableController',
		templateUrl: 'views/subject/schedule/addTimeTable.html'
	})
	.when('/editTimeTable/:id/:idt', {
		controller: 'EditTimeTableController',
		templateUrl: 'views/subject/schedule/editTimeTable.html'
	})
	.when('/addAsistance/:id', {
		controller: 'AddAsistantController',
		templateUrl: 'views/assistance/addAsistance.html'
	})
	.when('/listAsistance/:id', {
		controller: 'ListAsistanceController',
		templateUrl: 'views/assistance/listAsistance.html'
	})
	.when('/editAsistance/:id/:ida', {
		controller: 'EditAsistanceController',
		templateUrl: 'views/assistance/editAsistance.html'
	})
	.when('/listScheduleSubject/:id', {
		controller: 'listScheduleController',
		templateUrl: 'views/subject/schedule/listSchedule.html'
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



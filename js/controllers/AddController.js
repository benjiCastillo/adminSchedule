app.controller('AddController', ['$scope', '$firebaseArray', '$location', function($scope, $firebaseArray, $location){
	
	const rootRef = firebase.database().ref();
	const value = $firebaseArray(rootRef);
	const refSub = rootRef.child('subject');
	const values = $firebaseArray(refSub);

	$scope.addSubject = function() {
		values.$add({
			acronym: $scope.value.acronym,
			name: $scope.value.name,
			teacher: $scope.value.teacher
		});
		$location.path('/');
	}

}]);



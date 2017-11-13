app.controller('AddController', ['$scope', '$firebaseArray', '$location','$routeParams', function($scope, $firebaseArray, $location,$routeParams){
	
	const rootRef = firebase.database().ref();
	const value = $firebaseArray(rootRef);
	const refSub = rootRef.child('subject');
	const values = $firebaseArray(refSub);
	//child subject add schudule
	

	$scope.addSubject = function() {
		console.log($scope.value);
		values.$add({
			acronym: $scope.value.acronym,
			name: $scope.value.name,
			teacher: $scope.value.teacher,
			semester: $scope.value.semester
		});
		
		$location.path('/');
	}

}]);



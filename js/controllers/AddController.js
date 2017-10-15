app.controller('AddController', ['$scope', '$firebaseArray', '$location', function($scope, $firebaseArray, $location){
	
	const rootRef = firebase.database().ref();
	const value = $firebaseArray(rootRef);
	const ref = rootRef.child('parking');
	const values = $firebaseArray(ref);

	

	$scope.addTaxi = function() {
		values.$add({
			name_admin: $scope.value.name_admin,
			last_name_admin: $scope.value.last_name_admin,
			email: $scope.value.email,
			name: $scope.value.name,
            address: $scope.value.address,
			spaces_quantity: $scope.value.spaces_quantity,
            latitude: parseFloat($scope.value.latitude),
            longitude: parseFloat($scope.value.longitude),
            status: $scope.value.status,
			working_hours: $scope.value.working_hours
		});
		$location.path('/');
	}

	
}]);



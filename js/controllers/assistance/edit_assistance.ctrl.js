app.controller('EditAsistanceController', ['$scope','$location', '$routeParams', '$firebaseArray', '$firebaseObject',
function($scope, $location, $routeParams, $firebaseArray, $firebaseObject){
    
    const rootRef = firebase.database().ref();
	const value = $firebaseArray(rootRef);
	const refSub = rootRef.child('subject');
	const values = $firebaseArray(refSub);

    const key = refSub.child($routeParams.id).child('assistance').child($routeParams.ida);
	const valuesTimes = $firebaseArray(key);	
    //data
    $scope.idS = $routeParams.id;
    const dataSchedule = refSub.child($routeParams.id);
    $scope.valueSchedule = $firebaseObject(dataSchedule);
    console.log($scope.valueSchedule);
    console.log(valuesTimes);
    $scope.value = $firebaseObject(key);

$scope.editAsistance = function() {
    var	idSchedule = $routeParams.id;
    console.log("edit");
    $scope.value.$save({
        acronym: $scope.value.acronym,
        name: $scope.value.name,
        teacher: $scope.value.teacher

    });
    $scope.value = {};
    $location.path('/listAsistance/'+idSchedule);
};

 
}]);


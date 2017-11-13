app.controller('EditTimeTableController', ['$scope','$location', '$routeParams', '$firebaseArray', '$firebaseObject',
function($scope, $location, $routeParams, $firebaseArray, $firebaseObject){
    $scope.formData = {};

    const rootRef = firebase.database().ref();
	const value = $firebaseArray(rootRef);
	const refSub = rootRef.child('subject');
    const key = refSub.child($routeParams.id).child('schedule').child($routeParams.idt);
    const valuesTimes = $firebaseArray(key);	
    //data
    $scope.idS = $routeParams.id;
    $scope.time_table = $firebaseObject(key);
    console.log($scope.time_table);


$scope.editTimetable = function() {
    var	idSchedule = $routeParams.id;
    $scope.time_table.$save({
        classroom: $scope.time_table.classroom,
        begin: $scope.time_table.begin,
        finish: $scope.time_table.finish,
        day: $scope.time_table.day
    });
   // $scope.edit_form.$setPristine();
    $scope.value = {};
    $location.path('/listScheduleSubject/'+idSchedule);
};


}]);
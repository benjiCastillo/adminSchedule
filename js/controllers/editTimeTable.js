app.controller('EditTimeTableController', ['$scope','$location', '$routeParams', '$firebaseArray', '$firebaseObject',
function($scope, $location, $routeParams, $firebaseArray, $firebaseObject){
    $scope.formData = {};

const rootRef = firebase.database().ref();
const ref = rootRef.child('subject');

const refSub = ref.child($routeParams.id);
$scope.value = $firebaseObject(refSub);

const refSche = refSub.child('schedule');

const refTimeTable = refSche.child($routeParams.id1);
$scope.time_table = $firebaseObject(refTimeTable);

console.log($routeParams.id1);

$scope.editTimetable = function() {
    $scope.time_table.$save({
        classroom: $scope.time_table.classroom,
        begin: $scope.time_table.begin,
        finish: $scope.time_table.finish,
        day: $scope.time_table.day
    });
    $scope.edit_form.$setPristine();
    $scope.value = {};
    $location.path('/');
};


}]);
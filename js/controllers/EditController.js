app.controller('EditController', ['$scope','$location', '$routeParams', '$firebaseArray', '$firebaseObject',
function($scope, $location, $routeParams, $firebaseArray, $firebaseObject){
    $scope.formData = {};

const rootRef = firebase.database().ref();
const ref = rootRef.child('subject');

const refSub = ref.child($routeParams.id);
$scope.value = $firebaseObject(refSub);

const refTimeTable = refSub.child($routeParams.id);
$scope.time_table = $firebaseObject(refTimeTable);

console.log($scope.value);

$scope.editSubject = function() {
    $scope.value.$save({
        acronym: $scope.value.acronym,
        name: $scope.value.name,
        teacher: $scope.value.teacher
    });
    $scope.edit_form.$setPristine();
    $scope.value = {};
    $location.path('/');
};

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


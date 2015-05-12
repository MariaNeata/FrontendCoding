/**
 * Created by MN on 5/12/2015.
 */
angular.module("hrApp").controller('ScopesController',['$scope', function ($scope){
$scope.title = 'Two Way Binding Demo';
$scope.childtemplate = 'templates/childscope.html';
$scope.resetFirstVariable = function() {
$scope.firstVariable = undefined;
};
$scope.setFirstVariable = function(val) {
$scope.firstVariable = val;
};

}]);
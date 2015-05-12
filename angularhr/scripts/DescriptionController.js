angular.module("hrApp").controller('DescriptionController',['$scope', function ($scope) {
    $scope.descriptionShow = true;
    $scope.toggleDescriptionShow = function toggleDescriptionShow() {
        console.log("butonul a fost apasat!");
        if ($scope.descriptionShow == true) {
            $scope.descriptionShow = false;
        }
        else {
            $scope.descriptionShow = true;
        }
    }

}]);
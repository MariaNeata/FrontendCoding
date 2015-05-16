/**
 * Created by MN on 5/16/2015.
 */
hrApp.controller('DepartmentAddController', ['$scope', '$http', '$location', 'commonResourcesFactory',
    function ($scope, $http, $location, commonResourcesFactory) {
        $scope.department = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.reset = function () {
            this.department = {};
        };

        $scope.create = function (addDepartment) {
            $http({url: commonResourcesFactory.addDepartmentUrl, method: 'POST', data: addDepartment}).
                success(function (data) {
                    $scope.department = data;
                    $location.url('/departmentview/' + $scope.department.departmentId);
                });
        }


    }]);
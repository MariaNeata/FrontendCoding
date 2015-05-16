/**
 * Created by MN on 5/16/2015.
 */
hrApp.controller('DepartmentEditController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactory'
    , function ($scope, $http, $routeParams, $location, commonResourcesFactory) {
        $scope.requiredErrorMessage = "Please fill out this form!";

        $http({url: commonResourcesFactory.findOneDepartmentUrl + $routeParams.departmentId, method: 'GET'}).
            success(function (data) {
                $scope.department = data;
            });

        $scope.reset = function () {
            $scope.department = {};
        };


        $scope.create = function (addDepartment) {
            $http({url: commonResourcesFactory.editDepartmentUrl, method: 'PUT', data: addDepartment}).
                success(function (data) {
                    $scope.department = data;
                    $location.url('/departmentview/' + $scope.department.departmentId);
                });
        }


    }]);

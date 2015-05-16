/**
 * Created by MN on 5/16/2015.
 */
hrApp.controller('DepartmentViewController', ['$scope', '$http', '$routeParams', '$location',
    function($scope, $http, $routeParams, $location) {

        $http({url: 'http://hrapp-zth.rhcloud.com/hrapp/departments/'+$routeParams.departmentid, method: 'GET'}).
            success(function (data) {
                $scope.department = data;
            });


        $scope.back = function() {
            $location.url('/departmentslist');
        }

    }]);
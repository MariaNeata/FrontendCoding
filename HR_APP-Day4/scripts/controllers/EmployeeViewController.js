hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location',
    function($scope, $http, $routeParams, $location) {

        $http({url: 'http://hrapp-zth.rhcloud.com/hrapp/employees/'+$routeParams.employeeid, method: 'GET'}).
            success(function (data) {
                $scope.employee = data;
            });


        $scope.back = function() {
            $location.url('/employeeslist');
        }

    }]);
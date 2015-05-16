/**
 * Created by MN on 5/16/2015.
 */
hrApp.controller('JobEditController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactory'
    , function ($scope, $http, $routeParams, $location, commonResourcesFactory) {
        $scope.requiredErrorMessage = "Please fill out this form!";

        $http({url: commonResourcesFactory.findOneJobUrl + $routeParams.jobId, method: 'GET'}).
            success(function (data) {
                $scope.job = data;
            });

        $scope.reset = function () {
            $scope.job = {};
        };


        $scope.create = function (addJob) {
            $http({url: commonResourcesFactory.editJobUrl, method: 'PUT', data: addJob}).
                success(function (data) {
                    $scope.job = data;
                    $location.url('/jobview/' + $scope.job.jobId);
                });
        }


    }]);
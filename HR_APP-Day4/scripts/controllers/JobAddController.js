/**
 * Created by MN on 5/16/2015.
 */
hrApp.controller('JobAddController', ['$scope', '$http', '$location', 'commonResourcesFactory',
    function ($scope, $http, $location, commonResourcesFactory) {
        $scope.job = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
           $scope.reset = function () {
            this.job = {};
        };

        $scope.create = function (addJob) {
            $http({url: commonResourcesFactory.addJobUrl, method: 'POST',data:addJob}).
                success(function (data) {
                    $scope.job = data;
                    $location.url('/jobview/'+$scope.job.jobId);
                });
        }


    }]);

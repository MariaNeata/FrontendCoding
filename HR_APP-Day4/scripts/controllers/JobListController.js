/**
 * Created by MN on 5/16/2015.
 */
hrApp.controller('JobListController', ['$scope', '$http', '$location', 'commonResourcesFactory',
    function ($scope, $http, $location, commonResourcesFactory) {

        $scope.jobs = [];

        $http({url: commonResourcesFactory.findAllJobsUrl, method: 'GET'}).
            success(function (data, status, headers, config) {
                $scope.jobs = data;
            });

        $scope.viewJob = function (jobId) {
            $location.url('/jobview/' + jobId);
        };

        $scope.editJob = function (jobId) {
            $location.url('/jobedit/' + jobId);
        };
        $scope.deleteJob= function (jobId) {
            $http({url: commonResourcesFactory.deleteJobUrl +jobId, method: 'DELETE'});
            $location.url('/jobslist/');
        }

    }]);

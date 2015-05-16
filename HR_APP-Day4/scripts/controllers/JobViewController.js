/**
 * Created by MN on 5/16/2015.
 */
hrApp.controller('JobViewController', ['$scope', '$http', '$routeParams', '$location',
    function($scope, $http, $routeParams, $location ) {

        $http({url: 'http://hrapp-zth.rhcloud.com/hrapp/jobs/'+$routeParams.jobid, method: 'GET'}).
            success(function (data) {
                $scope.job = data;
            });


        $scope.back = function() {
            $location.url('/jobslist');
        }

    }]);

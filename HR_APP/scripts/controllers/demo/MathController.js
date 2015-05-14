hrApp.controller('MathController', ['$scope', function($scope,MathService){
    
    $scope.calculate = function() {

        $scope.op1=MathService.add;
        $scope.op2=MathService.substract;
        $scope.op3=MathService.multiply;
        $scope.op4=MathService.divide;

//        TODO #8 calculate op1, op2, op3, op4

//        TODO #13 refactor your calculations using MathService
    }

}]);

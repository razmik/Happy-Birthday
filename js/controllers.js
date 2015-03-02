angular.module('starter.controllers', [])

.controller('DashCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.$on('$ionicView.enter', function () {
        $rootScope.hometab = true;
    });
}])

.controller('ToCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.$on('$ionicView.enter', function () {
        $rootScope.hometab = true;
    });
}])

.controller('FromCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.$on('$ionicView.enter', function () {
        $rootScope.hometab = true;
    });
}]);
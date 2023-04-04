var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/home", {
      templateUrl: "Home.html",
    })
    .when("/product", {
      templateUrl: "Product.html",
    })
    .when("/jordan", {
        templateUrl: "Product.html",
      })
      .when("/nike", {
        templateUrl: "Product.html",
      })

    .otherwise({
        redirectTo : "/home"
     })
     
 })
 app.run(function ($rootScope) {
     $rootScope.$on("$routeChangeStart", function () {
         $rootScope.loading = true
     })
     $rootScope.$on("$routeChangeSuccess", function () {
         $rootScope.loading = false
     })
     $rootScope.$on("$routeChangeError", function () {
         $rootScope.loading = false
         alert('Lỗi')
     })
 })
// app.controller("myCtrl", function ($scope, $http, $routeParams) {
//   $scope.products = [];
//   $http.get("products.js").then(function (response) {
//     $scope.products = response.data;
// });
// var app = angular.module("myApp", []);
app.controller("productCtrl", function ($scope, $http) {
    $scope.choose = ['Sắp xếp theo giá', 'Sắp xếp theo tên']

    $scope.begin = 0
    $scope.amout = 6
    $scope.titleMore = 'Show More'
    $scope.products = list;
    //     $http.get("Product.js").then(function (response) {
    //         $scope.products = response.data;
    //     }, function (response) {
    // alert('loi')
    // });
    $scope.more = function () {
        $scope.amout += 3
        if ($scope.amout >= $scope.products.length) {
            $scope.titleMore = 'No More'
        }

    }
    $scope.find = 'i'
    $scope.s = ''
    $scope.search = function () {
        $scope.find = $scope.s
    }
    $scope.jordan = function () {
        $scope.find = 'Jordan'
        $scope.amout = 12 

    }
    $scope.nike = function () {
        $scope.find = 'Nike'
        $scope.amout = 12 
    }

    $scope.sx = ''
    $scope.sort = function () {
        if ($scope.chose == $scope.choose[0]) {

            $scope.sx = 'price'
        }
        if ($scope.chose == $scope.choose[1]) {
    
            $scope.sx = 'name'
        }
    }
});


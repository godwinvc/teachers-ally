angular.module('teachersAlly')
    .controller('loginController', ['$scope', '$http', '$state', function ($scope, $http, $state) {
        $scope.goodLogin = null;
        var loginData = {};
        $scope.login = function () {
            loginData = {
                "username": $scope.username,
                "password": $scope.password
            }
            $http.post('./endpoints/login.php', loginData)
                .then(function (response) {
                    if (response.data != 'ERROR') {
                        localStorage.setItem('godwin_ta', response.data.trim());
                        $state.go('classroom', {
                            user: $scope.username
                        });
                        $http.post('./endpoints/check-userfiles.php', {
                            username: $scope.username
                        }).then(function (res) {
                            res.data != "" ? console.log(res.data) : false;
                        })
                    } else {
                        $scope.goodLogin = response.data;
                    }
                })
                .catch(function (err) {
                    console.error(err);
                });
        }
    }]);
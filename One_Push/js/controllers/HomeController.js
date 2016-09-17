app.controller('HomeController', ['$scope', 'suggestions', '$window', '$http',
    function($scope, suggestions, $window, $http) {
        $scope.websites;
        $scope.upvotes = [];
        $scope.alerts = [];
        suggestions.getData().success(function(data) {

            $scope.websites = data.websites;
            for (var i = 0; i < $scope.websites.length; ++i) {
                if ($window.localStorage.getItem(i) == null) {
                    $window.localStorage.setItem(i, 0);
                    $scope.upvotes.push(0);
                } else {
                    // $window.localStorage.setItem(i, 0); 
                    $scope.upvotes.push($window.localStorage.getItem(i));
                }
            }
        });

        $scope.addSuggestion = function() {
            var URL = "https://hackerearth.0x10.info/api/one-push?type=json&query=push&";
            var len = $scope.websites.length;
            var data = $.param({
                id: len + 1,
                title: $scope.new_title,
                url_address: $scope.new_url,
                tag: $scope.new_tag,
            });
            $http.put(URL + data)
                .success(function(response) {
                    console.log(response.status);
                    $scope.alerts.push({
                        message: response.message,
                        status: response.status,
                        gap: response.gap
                    });
                    if (response.status == 200)
                        $window.location.reload();
                })
                .error(function(data, status, header) {

                });
        };
        $scope.upVote = function(id) {
            if ($window.localStorage.getItem(id)) {
                var value = parseInt($window.localStorage.getItem(id));
                $window.localStorage.setItem(id, value + 1);
                $scope.upvotes[id] = value + 1;
            } else return;
        };

    }
]);
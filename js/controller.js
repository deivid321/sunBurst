app.controller('DataController', function ($scope, $http) {
   /* $http({
        method: "GET",
        url: "MemoryJson.json"
    }).then(function mySucces(response) {
        $scope.status = response.statusText;
        $scope.paths = angular.fromJson(response.data.histograms[0].path);
        $scope.totals = angular.fromJson(response.data.histograms[0].total);
        $scope.csv = [];
        var i = 0;
        angular.forEach($scope.paths, function (item) {
            var arr = [item.replace(/\//g, '-') + ", ", $scope.totals[i]];
            $scope.csv.push(arr);
            i++;
        });

        /!*
         DataService.asyncc().then(function(d) {
         $scope.data = angular.copy(d);
         console.log(d);
         });
         var arr = $scope.data;
         console.log(arr);
         *!/

        SunBurstService.show($scope.csv);

    }, function myError(response) {
        $scope.status = response.statusText;
    });
*/
});
